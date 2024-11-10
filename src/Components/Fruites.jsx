import Fruite from "./Fruite";

export default function Fruites() {
  //   const fruites = ["Apple", "Banana", "Mango", "Orange"];,
  const fruites = [
    {
      name: "Apple",
      price: 2,
    },
    {
      name: "Banana",
      price: 6,
    },
    {
      name: "Mango",
      price: 9,
    },
    {
      name: "Orange",
      price: 4,
    },
  ];
  return (
    <ul>
      {fruites.map((fruite, index) => (
        //   <li key={index}>{fruite.name} $ {fruite.price}</li>
        <Fruite key={index} name={fruite.name} price={fruite.price} />
      ))}
    </ul>
  );
}
