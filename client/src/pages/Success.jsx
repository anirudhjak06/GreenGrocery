import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest, publicRequest } from "../requestMethods";
import { Link } from "react-router-dom";


const Success = () => {
  // const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  // useEffect(() => {
  //   // const createOrder = async () => {
  //   //   try {
  //   //     const res = await publicRequest.post("/orders", {
  //   //       userId: currentUser._id,
  //   //       products: cart.products.map((item) => ({
  //   //         productId: item._id,
  //   //         quantity: item._quantity,
  //   //       })),
  //   //       amount: cart.total,
  //   //       address: data.billing_details.address,
  //   //     });
  //   //     setOrderId(res.data._id);
  //   //   } catch {
  //   //     console.log("error in success");
  //   //     console.log(currentUser);

  //   //   }
  //   // };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {id
        ? `Order has been created successfully. Your order number is ${id}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Go to Homepage</Link></button>
    </div>
  );
};

export default Success;
