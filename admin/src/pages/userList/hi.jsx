
import "./userList.css";
import "./userlist2.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [user, setUsers] = useState([]);


  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
    // <div className="userList">
    //   {users.map((user) => (
    //       <li className="widgetSmListItem" key={user._id}>
    //         <img
    //           src={
    //             user.img ||
    //             "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
    //           }
    //           alt=""
    //           className="widgetSmImg"
    //         />
          
    //         <div className="widgetSmUser">
    //           <span className="widgetSmUsername">{user._id}</span>
    //         </div>
    //         <div className="widgetSmUser">
    //           <span className="widgetSmUsername">{user.username}</span>
    //         </div>
    //         <div className="widgetSmUser"><center>
    //           <span className="widgetSmUsername">{user.email}</span> </center>
    //         </div>
    //         <div className="widgetSmUser"><center>
    //           <span className="widgetSmUsername">{user.isVolunteer?"Yes":"No"}</span> </center>
    //         </div>
            

            
    //         <Link to={"/user/" + user._id}>
    //         <button className="widgetSmButton">
    //           <Visibility className="widgetSmIcon" />
    //           Display
    //         </button>
    //         </Link>
    //       </li>
    //     ))}
    // </div>
  );
}
