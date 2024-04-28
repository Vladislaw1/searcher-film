import { ProgressBar } from "ui";
import s from "./Header.module.scss";
import { useProgress } from "context";
import { flex, gap } from "shared";
import classNames from "classnames";

import { ReactComponent as Menu } from "img/icon/menu.svg";
import { ReactComponent as Back } from "img/icon/back.svg";

export const Header = () => {
  const { progress } = useProgress();

  return (
    <header className={s.header}>
      <div>
        <div
          className={classNames(
            flex.rowBase,
            flex.alignCenter,
            flex.spaceBetween,
          )}
        >
          <Back style={{ stroke: "#d3e3e0" }} />
          <div
            className={classNames(flex.rowBase, flex.alignCenter, gap.gap20)}
          >
            <p>{progress}%</p>
            <Menu />
          </div>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </header>
  );
};
