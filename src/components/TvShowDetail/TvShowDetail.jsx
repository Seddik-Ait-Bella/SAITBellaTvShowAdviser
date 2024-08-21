import { Rating } from "../Rating/Rating";
import s from "./style.module.css";
export const TvShowDetail = ({ tvShow }) => {
  const voteAverage = tvShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <Rating rate={voteAverage} />
        <div className={s.rating}>{voteAverage}</div>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
};
