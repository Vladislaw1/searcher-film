import { ReactNode } from "react";
import classNames from "classnames";
import { flex, margin } from "shared";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={classNames(
        flex.rowBase,
        flex.alignCenter,
        flex.grow,
        margin.verticalL,
      )}
    >
      {children}
    </main>
  );
};
