import { useState } from "react";
// function Hello({ name, role }) {
function Hello(props) {
  // const { name, role } = props;
  return (
    <>
      <div>
        {props.name} {props.role}
        {/* {name} {role} */}
      </div>
    </>
  );
}
export default Hello;
