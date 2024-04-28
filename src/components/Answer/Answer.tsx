import { FC } from "react";
import classNames from "classnames";
import { border, flex, gap, padding } from "shared";
import { RadioButton } from "ui";

import s from "./Answer.module.scss";

interface IProps {
  id: number;
  name: string;
  icon: string;
  value?: number;
  onChange: (value: number) => void;
}

export const Answer: FC<IProps> = ({ id, name, icon, value, onChange }) => {
  return (
    <li
      onClick={() => onChange(id)}
      className={classNames(
        flex.rowBase,
        flex.spaceBetween,
        padding.verticalL,
        padding.horizontalE,
        border.border_radius_medium,
        border.main_border,
        s.answer,
        { [s.checked]: id === value },
      )}
    >
      <div className={classNames(flex.rowBase, flex.alignCenter, gap.gap20)}>
        {icon}
        <p>{name}</p>
      </div>
      <RadioButton checked={id === value} />
    </li>
  );
};
