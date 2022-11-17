import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";
import Lifecycle from "./Lifecycle";

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
  // console.log("getdata", getdata);
  return (
    <div className="App">
      <Lifecycle />
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} list={getdata} onRemove={onRemove} />
    </div>
  );
}

export default App;
