import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../api";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const initialState = { name: "", gender: "male", email: "", status: "active" };
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleOnSubmit = async e => {
    e.preventDefault();
    try {
      const res = await updateUser(id, user);
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

  const handleGetUser = async value => {
    const res = await getUser(value);
    setUser(res);
  };
  useEffect(() => {
    handleGetUser(id);
  }, [id]);

  const resetData = () => {
    handleGetUser(id);
  };

  return (
    <div className="container py-3">
      <div className="h3">Edit User</div>
      <UserForm values={user} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} type="edit" resetData={resetData} />
    </div>
  );
};

export default EditUser;
