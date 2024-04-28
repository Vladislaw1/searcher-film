import { useQuestionContext } from "context";
import { useAppDispatch } from "hooks";
import { Button } from "ui";
import { resetFilms } from "store/slice";
import { resetAnswer } from "store/slice/answerSlice";

export const ButtonComplete = () => {
  const { reset } = useQuestionContext();
  const dispatch = useAppDispatch();
  const onComplete = () => {
    dispatch(resetFilms());
    dispatch(resetAnswer());
    reset && reset();
  };
  return (
    <Button onClick={onComplete} color={"primary"}>
      Complete
    </Button>
  );
};
