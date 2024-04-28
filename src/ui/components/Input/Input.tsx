import { ChangeEvent, FC, useState } from "react";
import classNames from "classnames";

import s from "./style.module.scss";
import { validationFunction } from "utils";

type TInput = "text" | "number" | "radio" | "checkbox";

interface IProps {
  name: string;
  className?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  type: TInput;
  patternValidation?: RegExp;
  value?: string;
}

export const Input: FC<IProps> = ({
  name,
  patternValidation,
  value,
  placeholder,
  type,
  onChange,
  className,
}) => {
  const [error, setError] = useState<string | null>(null);

  const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setError(validationFunction(value, patternValidation));
  };

  return (
    <>
      <input
        value={value}
        name={name}
        className={classNames(className, s.input, { [s.error]: error })}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className={classNames(s.text_error)}>{error}</p>
    </>
  );
};
