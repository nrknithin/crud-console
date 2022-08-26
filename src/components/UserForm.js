import React from "react";

const UserForm = ({ values, handleOnChange, handleOnSubmit, type, resetData }) => {
  return (
    <form className="form row" onSubmit={handleOnSubmit}>
      <div className="col-md-6 my-3">
        <label className="label">Name</label>
        <input className="form-control" onChange={handleOnChange} defaultValue={values?.name} type="text" required name="name" />
      </div>
      <div className="col-md-6 my-3">
        <label className="label">Gender</label>
        <select className="form-select" onChange={handleOnChange} value={values?.gender} defaultValue={values?.gender} required name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="col-md-6 my-3">
        <label className="label">Email</label>
        <input className="form-control" onChange={handleOnChange} defaultValue={values?.email} type="email" required name="email" />
      </div>
      <div className="col-md-6 my-3">
        <label className="label">Status</label>
        <select className="form-select" onChange={handleOnChange} defaultValue={values?.status} value={values?.status} required name="status">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary" type="reset" onClick={resetData}>
          Reset
        </button>
        <button className="btn btn-primary ms-2" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default UserForm;
