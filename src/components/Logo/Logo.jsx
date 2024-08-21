import s from "./style.module.css";
export const Logo = ({ image, title, subtitle, getPopular }) => {
  return (
    <>
      <div onClick={getPopular} className={s.container}>
        <img src={image} className={s.logo} />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </>
  );
};
