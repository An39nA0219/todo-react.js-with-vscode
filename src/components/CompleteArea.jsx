export const CompleteArea = (props) => {
  const { completeLists, backToIncompleteList } = props;
  return (
    <div className="complete-area">
      <h2>Complete List</h2>
      <ul>
        {completeLists.map((list, i) => {
          return (
            <li className="list-items">
              {list}
              <button onClick={() => backToIncompleteList(i)}>Back</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
