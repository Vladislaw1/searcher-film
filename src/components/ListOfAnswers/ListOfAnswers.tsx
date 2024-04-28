import classNames from "classnames";
import { Answer } from "../Answer";
import { useState } from "react";
import { useAppDispatch } from "hooks";
import { TAnswer } from "types";
import { margin } from "shared";
import { addAnswer } from "store/slice/answerSlice";

import s from "./ListOfAnsers.module.scss";

export const ListOfAnswers = ({ options }: { options?: TAnswer[] }) => {
  const [checked, setChecked] = useState<number | undefined>();
  const dispatch = useAppDispatch();

  const onChange = (id: number) => {
    const answer = options?.find((option: TAnswer) => option.id === id);
    dispatch(addAnswer(answer));
    setChecked(id);
  };

  return (
    <ul className={classNames(margin.topL, s.list)}>
      {options?.map((genre: TAnswer) => (
        <Answer
          key={genre.id}
          {...genre}
          id={genre.id}
          value={checked}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};
