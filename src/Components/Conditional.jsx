import Login from "./Login";
import Welcome from "./Welcome";

export default function Conditional() {
  const condition = true;
  if (condition) {
    return <Welcome />;
  } else {
    return <Login />;
  }
}
