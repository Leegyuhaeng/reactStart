const DiaryItem = (data) => {
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
      <div className="content">{data.content}</div>
    </div>
  );
};

export default DiaryItem;
