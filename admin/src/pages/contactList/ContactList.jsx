import "./contactList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/apiCalls";

export default function ContactList() {
  const dispatch = useDispatch();
  const [contact, setContact] = useState([]);
//   const contacts = useSelector((state) => state.contact.contacts);

//   useEffect(() => {
//     getContacts(dispatch);
//   }, [dispatch]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("contact/");
        // console.log(res);
        setContact(res.data);
      } catch {}
    };
    getUsers();
  }, []);

//   const handleDelete = (id) => {
//     deleteProduct(id, dispatch);
//   };

  const columns = [
    { field: "_id", headerName: "ID", width: 320 },
    {
      field: "contact",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={params.row.img} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "desc",
      headerName: "Message",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/contact/" + params.row._id}>
              <button className="productListEdit">View</button>
            </Link>
            {/* <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={contact}
        // disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={18}
        // checkboxSelection
      />
    </div>
  );
}
