export const BoilingWater = (props) => {
  if (props.celsius >= 100) {
    return <p>The Water will boil</p>;
  } else {
    return <p>The water will not boil</p>;
  }
};
