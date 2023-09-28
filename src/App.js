import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
        <h1 className='font-bold text-2xl mt-2'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
