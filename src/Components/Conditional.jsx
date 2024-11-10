import Login from "./Login";
import Welcome from "./Welcome";

export default function Conditional() {
  const condition = false;
  return condition ? <Welcome /> : <Login />;
}
