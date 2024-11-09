import Fruite from "./Fruite";

export default function Fruites() {
  //   const fruites = ["Apple", "Banana", "Mango", "Orange"];,
  const fruites = [
    {
      name: "Apple",
      price: 10,
    },
    {
      name: "Banana",
      price: 10,
    },
    {
      name: "Mango",
      price: 10,
    },
    {
      name: "Orange",
      price: 10,
    },
  ];
  return (
    <div>
      <ul>
        {fruites.map((fruite, index) => (
          //   <li key={index}>{fruite.name} $ {fruite.price}</li>
          <Fruite key={index} name={fruite.name} price={fruite.price} />
        ))}
      </ul>
    </div>
  );
}
