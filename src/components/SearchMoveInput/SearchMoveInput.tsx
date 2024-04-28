import { ChangeEvent } from "react";
import { Input } from "ui";
import { useAppDispatch, useAppSelector } from "hooks";
import { useQuestionContext } from "context";
import classNames from "classnames";
import { addAnswer } from "store/slice/answerSlice";
import { searchFilm } from "store/slice";
import { margin } from "shared";

export const SearchMoveInput = () => {
  const { currentQuestion } = useQuestionContext();

  const answers = useAppSelector((state) => state.answers);

  const dispatch = useAppDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    const questionId = currentQuestion + 1;
    dispatch(addAnswer({ questionId, text: value }));
    dispatch(searchFilm(value));
  };
  return (
    <Input
      className={classNames(margin.topL)}
      name={"title"}
      type={"text"}
      onChange={onChange}
      value={answers[currentQuestion + 1]?.text}
      placeholder={"Movie title here"}
      patternValidation={/^[a-zA-Z0-9]+$/g}
    />
  );
};
