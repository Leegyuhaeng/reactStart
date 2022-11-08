import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // console.log("test==>", state, setState);
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const handleChangeEvent = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state);
    // console.log(state);
    alert("저장성공");
    state.author = "";
    state.content = "";
    state.emotion = 1;
    // setState({
    //   author: "",
    //   content: "",
    //   emotion: "",
    // });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          id="author"
          type="text"
          value={state.author}
          onChange={handleChangeEvent}
        />
        <div>
          <textarea
            ref={contentInput}
            id="content"
            value={state.content}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          오늘의 감정점수 :
          <select
            id="emotion"
            value={state.emotion}
            onChange={handleChangeEvent}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </div>
  );
};
export default DiaryEditor;
