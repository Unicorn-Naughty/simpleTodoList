import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import {
  viewActive,
  viewAll,
  viewComplete,
} from "../store/slices/bottomBarSlice";
import { deleteCompleted } from "../store/slices/todoSlice";
import { Button } from "./ui";

interface Props {
  className?: string;
}
export enum buttonStatus {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "complete",
}

const BottomBar: React.FC<Props> = ({ className }) => {
  const todoState = useAppSelector((state) => state.todoReducer);
  const buttonState = useAppSelector((state) => state.bottomBarSlice);
  const dispatch = useAppDispatch();
  return (
    <div className={className + " flex  items-center gap-5 justify-between"}>
      <span>{`${
        todoState.todos.filter((todo) => todo.value).length
      } items left`}</span>
      <div className="gap-3 flex justify-center">
        <Button
          className={buttonState == buttonStatus.ALL ? " bg-red-500" : ""}
          onClick={() => dispatch(viewAll(buttonStatus.ALL))}
        >
          All
        </Button>
        <Button
          className={buttonState == buttonStatus.ACTIVE ? "bg-red-500" : ""}
          onClick={() => dispatch(viewActive(buttonStatus.ACTIVE))}
        >
          Active
        </Button>
        <Button
          className={buttonState == buttonStatus.COMPLETED ? "bg-red-500" : ""}
          onClick={() => dispatch(viewComplete(buttonStatus.COMPLETED))}
        >
          Completed
        </Button>
      </div>
      <Button onClick={() => dispatch(deleteCompleted())}>
        Clear completed
      </Button>
    </div>
  );
};
export default BottomBar;
