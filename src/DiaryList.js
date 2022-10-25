import DiaryItem from "./DiaryItem";

const DiaryList = ({ list }) => {
  // list.sort((a, b) => b.id - a.id);
  // console.log(list);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h2>{list.length}개의 일기가 있습니다</h2>
      <div>
        {list.map((data) => (
          <DiaryItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};
DiaryList.defaultProps = {
  list: [],
};
export default DiaryList;
