import { FC, ReactNode } from "react";
import s from "./Container.module.scss";
import classNames from "classnames";
import { flex } from "shared";

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => {
  return (
    <div className={classNames(flex.colBase, s.container)}>{children}</div>
  );
};
