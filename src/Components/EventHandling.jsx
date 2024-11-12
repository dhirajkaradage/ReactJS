export default function EventHandling() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <>
      <button onClick={handleClick}>Click on me</button>
    </>
  );
}
