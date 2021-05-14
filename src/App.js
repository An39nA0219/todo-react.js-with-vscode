import React, { useState } from "react";
import "./App.css";
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [incompleteLists, setIncompleteLists] = useState(["fix my PC"]);
  const [completeLists, setCompleteLists] = useState([
    "wash my hands",
    "send a mail",
  ]);

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const deleteIncompleteList = (i) => {
    const newIncompleteLists = [...incompleteLists];
    newIncompleteLists.splice(i, 1);
    setIncompleteLists(newIncompleteLists);
  };

  const addIncompleteList = () => {
    const newIncompleteTodo = [...incompleteLists, newTodo];
    setIncompleteLists(newIncompleteTodo);
    setNewTodo("");
  };

  const addCompleteList = (i) => {
    const newIncompleteTodo = [...incompleteLists];
    const newCompleteTodo = [...completeLists, incompleteLists[i]];
    setCompleteLists(newCompleteTodo);
    newIncompleteTodo.splice(i, 1);
    setIncompleteLists(newIncompleteTodo);
  };

  const backToIncompleteList = (i) => {
    const newCompleteTodo = [...completeLists];
    const newIncompleteTodo = [...incompleteLists, completeLists[i]];
    setIncompleteLists(newIncompleteTodo);
    newCompleteTodo.splice(i, 1);
    setCompleteLists(newCompleteTodo);
  };

  return (
    <>
      <h1>TODO List</h1>
      <InputArea
        onChange={onChangeNewTodo}
        newTodo={newTodo}
        addIncompleteList={addIncompleteList}
      ></InputArea>
      <IncompleteArea
        incompleteLists={incompleteLists}
        addCompleteList={addCompleteList}
        deleteIncompleteList={deleteIncompleteList}
      ></IncompleteArea>
      <CompleteArea
        completeLists={completeLists}
        backToIncompleteList={backToIncompleteList}
      ></CompleteArea>
    </>
  );
}

export default App;
