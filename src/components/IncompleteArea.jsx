export const IncompleteArea = (props) => {
  const { incompleteLists, addCompleteList, deleteIncompleteList } = props;
  return (
    <div className="incomplete-area">
      <h2>Incomplete List</h2>
      <ul>
        {incompleteLists.map((list, i) => {
          return (
            <li className="list-items">
              {list}
              <button onClick={() => addCompleteList(i)}>Done</button>
              <button onClick={() => deleteIncompleteList(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
