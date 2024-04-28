import { createContext, ReactNode, useContext, useState } from "react";
import { useProgress } from "./ProgressContext";
import { useAppSelector } from "hooks";
import { TAnswer } from "types";

interface IQuestionContext {
  currentQuestion: number;
  endQuestion: boolean;
  nextQuestion: (answer?: TAnswer) => void;
  reset: () => void;
}

const QuestionContext = createContext<IQuestionContext>({
  currentQuestion: 0,
  endQuestion: false,
  nextQuestion: () => {},
  reset: () => {},
});

export const QuestionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { updateProgress } = useProgress();

  const { answers, questions } = useAppSelector((state) => state);

  const endQuestion = questions.length - 1 < currentQuestion;

  const nextQuestion = () => {
    if (answers) {
      localStorage.setItem("answers", JSON.stringify(answers));
      setCurrentQuestion(currentQuestion + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const reset = () => {
    setCurrentQuestion(0);
    updateProgress(0);
  };

  return (
    <QuestionContext.Provider
      value={{ currentQuestion, endQuestion, nextQuestion, reset }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
