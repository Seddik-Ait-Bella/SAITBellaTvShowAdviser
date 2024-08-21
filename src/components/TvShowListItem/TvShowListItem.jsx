import { SMALL_TV_SHOW_IMAGE_BASE_URL } from "../../config";
import s from "./style.module.css";
export const TvShowListItem = ({ tvShow, updateShowFunction }) => {
  return (
    <div
      onClick={() => {
        updateShowFunction(tvShow);
      }}
      className={s.container}
    >
      <img
        className={s.image}
        src={SMALL_TV_SHOW_IMAGE_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
};
