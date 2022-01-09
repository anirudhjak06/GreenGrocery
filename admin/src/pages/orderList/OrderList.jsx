import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/apiCalls";

export default function OrderList() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState([]);
//   const contacts = useSelector((state) => state.contact.contacts);

//   useEffect(() => {
//     getContacts(dispatch);
//   }, [dispatch]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("orders/");
        // console.log(res);
        setOrder(res.data);
      } catch {}
    };
    getUsers();
  }, []);

//   const handleDelete = (id) => {
//     deleteProduct(id, dispatch);
//   };

  const columns = [
    { field: "_id", headerName: "ID", width: 320 },
    // {
    //   field: "products[0]",
    //   headerName: "Products",
    //   width: 300,
    // },
    // {
    //   field: "order",
    //   headerName: "User",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="productListItem">
    //         {/* <img className="productListImg" src={params.row.img} alt="" /> */}
    //         {params.row.userId}
    //       </div>
    //     );
    //   },
    // },
    { field: "address", headerName: "Address", width: 250 },
    {
      field: "amount",
      headerName: "Amount",
      width: 160,
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
      
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         {/* <DeleteOutline
    //           className="productListDelete"
    //           onClick={() => handleDelete(params.row._id)}
    //         /> */}
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={order}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={12}
        checkboxSelection
      />
    </div>
  );
}
