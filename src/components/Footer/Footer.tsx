import { ButtonsContinue } from "../ButtonContinue";
import { useQuestionContext } from "context";
import { ButtonComplete } from "../ButtonComplete";
import classNames from "classnames";
import { flex, padding } from "shared";

export const Footer = () => {
  const { endQuestion } = useQuestionContext();

  return (
    <footer
      className={classNames(flex.grow, flex.rowBase, flex.alignCenter, {
        [padding.bottomL]: endQuestion,
      })}
    >
      {endQuestion ? <ButtonComplete /> : <ButtonsContinue />}
    </footer>
  );
};
