import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export const SearchBar = ({ onSubmit }) => {
  function submit(e) {
    onSubmit(e);
  }

  return (
    <>
      <SearchIcon className={s.icon} size={27} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
};
