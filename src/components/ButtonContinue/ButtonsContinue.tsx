import { Button } from "ui";
import { useQuestionContext } from "context";
import { useAppSelector } from "hooks";

export const ButtonsContinue = () => {
  const { nextQuestion, currentQuestion } = useQuestionContext();
  const answers = useAppSelector((state) => state.answers);

  return (
    <Button
      onClick={nextQuestion}
      color={"primary"}
      disabled={!answers[currentQuestion + 1]}
    >
      Continue
    </Button>
  );
};
