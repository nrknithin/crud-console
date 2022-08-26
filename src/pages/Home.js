import React, { useEffect, useState } from "react";
import { deleteUser, getUserList } from "../api";
import DataTable from "../components/DataTable";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [deleteID, setDeleteID] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = id => {
    setDeleteID(id);
    setShow(true);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteUser(deleteID);
      handleClose();
      handleGetUserList(page);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNavEdit = id => {
    navigate(`/edituser/${id}`);
  };

  const handleNavAddUser = () => {
    navigate("/adduser");
  };
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id"
      },
      {
        accessorKey: "name",
        header: "Name"
      },
      {
        accessorKey: "email",
        header: "Email"
      },
      {
        accessorKey: "gender",
        header: "Gender"
      },
      {
        accessorKey: "status",
        header: "Status"
      },
      {
        header: "Operations",
        cell: ({ row }) => (
          <div className="d-flex justify-content-around" style={{ maxWidth: "100px" }}>
            <RiDeleteBinLine color="red" className="c-pointer" onClick={() => handleShow(row?.original?.id)} />
            <AiFillEdit color="black" className="c-pointer" onClick={() => handleNavEdit(row?.original?.id)} />
          </div>
        )
      }
    ],
    []
  );

  const handleGetUserList = async page => {
    try {
      let data = await getUserList(page);
      console.log(data);
      setUserList(data);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetUserList(page);
  }, [page]);

  return (
    <div className="container">
      <div className="p-2 d-flex justify-content-between">
        <div className="h3">User List</div>
        <button className="btn btn-primary" onClick={handleNavAddUser}>
          Add User
        </button>
      </div>
      <DataTable columns={columns} data={userList} page={page} setPage={setPage} />
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
