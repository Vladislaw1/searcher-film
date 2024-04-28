import { ListOfAnswers } from "../ListOfAnswers";
import { useProgress, useQuestionContext } from "context";
import { useEffect } from "react";
import { SearchMoveInput } from "../SearchMoveInput";
import { useAppSelector } from "hooks";
import classNames from "classnames";
import { width } from "shared";

export const Question = () => {
  const { updateProgress } = useProgress();
  const { currentQuestion } = useQuestionContext();

  const questions = useAppSelector((state) => state.questions);

  const { text, type, options, id } = questions?.[currentQuestion];

  useEffect(() => {
    if (id === 2) {
      updateProgress(50);
    }
  }, [id, updateProgress]);

  return (
    <div className={classNames(width.full)}>
      <h1>{text}</h1>
      {type === "choice" ? (
        <ListOfAnswers options={options} />
      ) : (
        <SearchMoveInput />
      )}
    </div>
  );
};
