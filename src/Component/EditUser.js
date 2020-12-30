import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export const EditUser = props => {
  const { users, editUser } = useContext(GlobalContext);
  localStorage.setItem("users", props.users);
  localStorage.getItem("name", props.name);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: ""
  });
  const history = useHistory();

  const currentUserId = props.match.params.id;

  useEffect(() => {
    const UserId = currentUserId;
    const selectedUser = users.find(user => user.id === UserId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);
  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };
  const onChange = e => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  console.log(setSelectedUser);
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={selectedUser.name}
          onChange={onChange}
          name="name"
          placeholder="Enter Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
