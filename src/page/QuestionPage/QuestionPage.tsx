import { useQuestionContext } from "context";
import { FilmsList, Main, Question } from "components";

export const QuestionPage = () => {
  const { endQuestion } = useQuestionContext();

  return <Main>{endQuestion ? <FilmsList /> : <Question />}</Main>;
};
