import React from "react";
import { useParams } from "react-router-dom";
const NewPage = ({ data }) => {
  let { user } = useParams();
  const person = data.find((p) => p.name === user);

  return (
    <div>
      <p> {person.name}</p>
      <p>{person.username}</p>
      <p>{person.email}</p>
      <p>{person.address.street}</p>
      <p>{person.website}</p>
    </div>
  );
};

export default NewPage;
