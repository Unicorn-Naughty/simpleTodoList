import { KeyboardEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import { addTodo } from "../store/slices/todoSlice";
import { Input } from "./ui/index";
interface Props {
  className?: string;
}
const AddBar: React.FC<Props> = ({ className }) => {
  const todoState = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      dispatch(
        addTodo({
          name: inputValue,
          id: todoState.todos.length + 1,
          value: false,
        })
      );
      setInputValue("");
    }
  };
  return (
    <div className={className}>
      <Input
        className="placeholder:italic"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => onKeyPress(e)}
        type="text"
        placeholder="What's need to be done?"
      />
    </div>
  );
};
export default AddBar;
