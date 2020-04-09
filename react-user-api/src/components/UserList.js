import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const Cards = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Card = Styled.div`
  margin: 2rem 6rem;
  padding: 1rem;
  background-color: #ffc357;
  box-shadow: 2px 2px #d88144;
  border-radius: 1.5rem;
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <Cards>
        {users.map(singleUser => (
          <Card>
            <h3>Name: {singleUser.name}</h3>
            <h3>Bio: {singleUser.bio}</h3>
          </Card>
        ))}
      </Cards>
    </div>
  );
};

export default UserList;
