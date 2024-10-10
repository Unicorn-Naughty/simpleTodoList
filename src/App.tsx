import TodoList from "./components/TodoList";
import AddBar from "./components/AddBar";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className={`min-h-screen flex justify-center items-center flex-col`}>
      <div className="w-[700px] text-center shadow-lg p-[20px]">
        <h1 className="mb-[30px] text-6xl">Todo List</h1>
        <AddBar className="mb-[30px]" />
        <TodoList className="mb-[30px]" />
        <BottomBar className="mb-[30px]" />
      </div>
    </div>
  );
}

export default App;
