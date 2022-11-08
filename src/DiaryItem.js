import { useRef, useState } from "react";

const DiaryItem = (data) => {
  // console.log("data=====>", data);
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(data.content);
  const localContentInput = useRef();
  const handleRemove = () => {
    if (window.confirm(`${data.id}번째 일기를 정말 삭제하시겠습니까?`)) {
      data.onRemove(data.id);
    }
  };
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(data.content);
  };
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${data.id}번 째 일기를 수정하시겠습니까?`)) {
      data.onEdit(data.id, localContent);
      toggleIsEdit();
    }
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자:{data.author} | 감정점수 : {data.emotion}
        </span>
        <br />
        <span className="date">
          {new Date(data.created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          ></textarea>
        ) : (
          <>{data.content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>저장하기</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
