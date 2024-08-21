import { TvShowListItem } from "../TvShowListItem/TvShowListItem";
import s from "./style.module.css";
export const TvShowList = ({ recommendationsList, updateShowFunction }) => {
  return (
    <>
      <div className={s.title}>You may like:</div>
      <div className={s.tv_show_list}>
        {recommendationsList.map((item) => {
          return (
            <span className={s.tv_show_item}>
              <TvShowListItem
                tvShow={item}
                updateShowFunction={updateShowFunction}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};
