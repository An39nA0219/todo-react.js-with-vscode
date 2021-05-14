import './App.css';
import { InputArea } from './components/InputArea'
import { IncompleteArea} from './components/IncompleteArea'
import { CompleteArea } from './components/CompleteArea'


function App() {
  return (
    <>
      <h1>TODO List</h1>
      <InputArea></InputArea>
      <IncompleteArea></IncompleteArea>
      <CompleteArea></CompleteArea>
    </>
  );
}

export default App;
