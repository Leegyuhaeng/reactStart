import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useEffect, useRef, useState } from "react";
// import Lifecycle from "./Lifecycle";

// const dummyList = [
//   {
//     id: 1,
//     author: "이규행",
//     content: "test1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "홍길동",
//     content: "test2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "임꺽정",
//     content: "test3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "이순신",
//     content: "test4",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [getdata, setData] = useState([]);
  const dateId = useRef(0);
  const response = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    const initData = data.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dateId.current++,
      };
    });
    setData(initData);
  };
  useEffect(() => {
    response();
  }, []);
  // console.log("dateId===>", dateId);
  const onCreate = (data) => {
    const created_date = new Date().getTime();
    const newItem = {
      author: data.author,
      content: data.content,
      emotion: data.emotion,
      created_date,
      id: dateId.current,
    };
    dateId.current++;
    setData([newItem, ...getdata]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = getdata.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      getdata.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  const getDiaryAnalysis = () => {
    console.log("일기분석시작");
    const goodCount = getdata.filter((it) => it.emotion >= 3).length;
    const badCount = getdata.length - goodCount;
    const goodRatio = (goodCount / getdata.length) * 100;
    return { goodCount, badCount, goodRatio };
  };
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis();
  console.log("ratio", goodCount, badCount, goodRatio);
  // console.log("getdata", getdata);
  return (
    <div className="App">
      {/*<Lifecycle />*/}
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate} />
      <div>전체일기 : {getdata.length} </div>
      <div>기분 좋은 일기 갯수 : {goodCount} </div>
      <div>기분 나쁜 일기 갯수 : {badCount} </div>
      <div>기분 좋은 일기 비율 : {goodRatio} </div>
      <DiaryList onEdit={onEdit} list={getdata} onRemove={onRemove} />
    </div>
  );
}

export default App;
