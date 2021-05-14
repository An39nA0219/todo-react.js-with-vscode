import './App.css';
import { InputArea } from './components/InputArea'
import { CompleteArea } from './components/CompleteArea'


function App() {
  return (
    <>
      <h1>TODO List</h1>
      <InputArea></InputArea>
      <CompleteArea></CompleteArea>
    </>
  );
}

export default App;
