import classNames from "classnames";
import { flex, width } from "shared";
import { TFilm } from "types";

export const Film = ({ Poster, Year, Title }: TFilm) => {
  return (
    <div className={classNames(flex.colBase, flex.alignCenter, width.width220)}>
      <img alt={"poster"} src={Poster} width={220} height={320} />
      <p>{Title}</p>
      <p>{Year}</p>
    </div>
  );
};
