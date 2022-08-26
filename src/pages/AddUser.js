import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../api";
import UserForm from "../components/UserForm";

const AddUser = () => {
  const initialState = { name: "", gender: "male", email: "", status: "active" };
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();
  const handleOnSubmit = async e => {
    e.preventDefault();
    try {
      const res = await addNewUser(user);
      console.log(res);
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };
  const handleOnChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const resetData = () => {
    setUser(initialState);
  };

  return (
    <div className="container py-3">
      <div className="h3">Add User</div>
      <UserForm values={user} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} type="add" resetData={resetData} />
    </div>
  );
};

export default AddUser;
