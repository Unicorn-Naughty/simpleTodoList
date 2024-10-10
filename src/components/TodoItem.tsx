import { useAppDispatch } from "../hooks/useReduxHooks";
import { togleCheckStatus, TTodo } from "../store/slices/todoSlice";
import { Input } from "./ui/input";

interface Props {
  className?: string;
  todo: TTodo;
}

const TodoItem: React.FC<Props> = ({ className, todo }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={"flex gap-5 items-center " + className}>
      <label htmlFor={todo.name}></label>
      <Input
        className="p-0 m-0 w-[30px] h-[20px] hover:cursor-pointer "
        type="checkbox"
        id={todo.name}
        checked={todo.value}
        onChange={() => dispatch(togleCheckStatus(todo.id))}
      />
      {todo.value ? (
        <h2 className="line-through text-lg">{todo.name}</h2>
      ) : (
        <h2 className="text-lg">{todo.name}</h2>
      )}
    </div>
  );
};
export default TodoItem;
