import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

import { useDispatch, useSelector } from "react-redux";


export default function UserList() {
  const [data, setData] = useState(userRows);
  const [user, setUsers] = useState([]);
  const products = useSelector((state) => state.user.users);


  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/");
        // console.log(res);
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  const handleDelete = (id) => {
    console.log("heloo");
    setData(user.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "isVolunteer", headerName: "Volunteer", width: 150 },
    { field: "createdAt", headerName: "Created Time", width: 200 },

    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
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
    <div className="userList">
      <DataGrid
        rows={user}
        // disableSelectionOnClick
        // id="_id"
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  );
}
