import { FC } from "react";
import classNames from "classnames";
import { flex, margin, width } from "shared";
import { ReactComponent as ErrorIcon } from "img/icon/error.svg";

import s from "./style.module.scss";

interface IProps {
  message: string;
}

export const Error: FC<IProps> = ({ message }) => {
  return (
    <div className={classNames(flex.colBase, flex.alignCenter, width.full)}>
      <ErrorIcon className={classNames(s.icon)} />
      <p className={classNames(margin.topL)}>{message}</p>
    </div>
  );
};
