export default function Fruite({ name, price }) {
  return (
    <>
      {price > 5 ? (
        <li>
          {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
