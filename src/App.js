import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
// due to the below line bootstrap is available to all the components in the app
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
