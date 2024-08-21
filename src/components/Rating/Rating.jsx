import { Star as EmptyStar, StarFill, StarHalf } from "react-bootstrap-icons";
export const Rating = ({ rate }) => {
  const starList = [];

  const starFillCount = Math.floor(rate);

  const starHalfCount = rate - starFillCount > 0.5;

  const starEmptyCount = 5 - starFillCount - (starHalfCount ? 1 : 0);

  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (starHalfCount) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<EmptyStar key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
};
