import React from "react";

export default function Input(props) {
  let details = props.details;
  details = details.split("__");
  let [type, placeholder] = details;
  return <input type={type} placeholder={placeholder} />;
}
