import classNames from "classnames";

import { flex } from "shared";

import s from "./style.module.scss";

export const RadioButton = ({ checked }: { checked: boolean }) => {
  return (
    <div
      className={classNames(s.radio_container, flex.rowBase, flex.alignCenter)}
    >
      <input type={"radio"} checked={checked} className={s.radio} />
      <span className={classNames(s.checkmark)}></span>
    </div>
  );
};
