/* eslint-disable react/prop-types */
function CustomButton(props) {
  const increaseCount = () => {
    props.setCount(props.count + 1);
  };

  return (
    <>
      <button onClick={increaseCount}> Counter: {props.count}</button>
    </>
  );
}

export default CustomButton;
