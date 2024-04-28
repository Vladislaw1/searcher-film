import classNames from "classnames";
import { flex, gap, width } from "shared";
import { useAppDispatch, useAppSelector } from "hooks";
import { Loader } from "ui";
import { useEffect } from "react";
import { fetchFilms } from "store/slice";
import { useProgress } from "context";
import { Film } from "../Film";
import { Error } from "../Error";

export const FilmsList = () => {
  const dispatch = useAppDispatch();
  const { updateProgress } = useProgress();

  const { films, error, loading, titleFilm } = useAppSelector(
    (state) => state.films,
  );

  useEffect(() => {
    if (titleFilm) dispatch(fetchFilms(titleFilm));
  }, [dispatch, titleFilm]);

  useEffect(() => {
    updateProgress(100);
  }, [updateProgress]);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div
      className={classNames(
        flex.rowBase,
        flex.justifyCenter,
        flex.wrap,
        gap.gap20,
        width.full,
      )}
    >
      {films?.map((film) => <Film {...film} />)}
    </div>
  );
};
