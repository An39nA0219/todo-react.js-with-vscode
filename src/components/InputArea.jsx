export const InputArea = (props) => {
  const { onChange, newTodo, addIncompleteList } = props;
  return (
    <div className="input-area">
      <input placeholder="ToDo" onChange={onChange} value={newTodo}></input>
      <button onClick={addIncompleteList}>Add</button>
    </div>
  );
};
