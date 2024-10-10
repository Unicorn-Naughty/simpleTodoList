import { useAppSelector } from "../hooks/useReduxHooks";
import { buttonStatus } from "./BottomBar";
import TodoItem from "./TodoItem";

interface Props {
  className?: string;
}

const TodoList: React.FC<Props> = ({ className }) => {
  const buttonsState = useAppSelector((state) => state.bottomBarSlice);
  const todoState = useAppSelector((state) => state.todoReducer);

  return (
    <div className={className}>
      {buttonsState === buttonStatus.ALL &&
        todoState.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              className="mb-[10px] shadow-sm p-[15px]"
            />
          );
        })}
      {buttonsState === buttonStatus.ACTIVE &&
        todoState.todos
          .filter((todo) => !todo.value)
          .map((todo, i) => {
            return (
              <TodoItem
                key={i}
                todo={todo}
                className="mb-[10px] shadow-sm p-[15px]"
              />
            );
          })}
      {buttonsState === buttonStatus.COMPLETED &&
        todoState.todos
          .filter((todo) => todo.value)
          .map((todo, i) => {
            return (
              <TodoItem
                key={i}
                todo={todo}
                className="mb-[10px] shadow-sm p-[15px]"
              />
            );
          })}
    </div>
  );
};
export default TodoList;
