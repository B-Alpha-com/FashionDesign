import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomerDashBoard = ({ Users }) => {
  let { customer } = useParams();
  const User = Users.find((p) => customer === p.username.toLowerCase());

  return (
    <>
      {customer === User.username.toLowerCase() ? (
        <div>
          <div></div>
          <div>See your History</div>
          <div>
            <Link to="/Measurement">Register your measurement</Link>
          </div>
          <div>
            <select name="design">
              <option value="Buba">Buba</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Shirt">Shirt</option>
              <option value="Pant Trouser">Pant Trouser</option>
              <option value="Agbada">Agbada</option>
            </select>
          </div>

          <div>
            <div>
              <Link to="/Customer">logout</Link>
            </div>
          </div>
          <div>
            <p>you are welcome to your Dashboard {User.username}</p>
            <p>{User.name}</p>
          </div>
        </div>
      ) : (
        <p>i dont know you </p>
      )}
    </>
  );
};

export default CustomerDashBoard;
