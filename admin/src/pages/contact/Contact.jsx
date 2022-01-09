import {
  CalendarToday,
  LocationSearching,
  Message,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./contact.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";


export default function Contact() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getContact = async () => {
      try {
        const res = await publicRequest.get("/contact/find/" + id);
        console.log(res.data);
        console.log(id);

        setContact(res.data);
      } catch {}
    };

    getContact();
  }, [id]);

  return (
    <div className="user">
      
      <div className="userTitleContainer">
        <h1 className="userTitle">View Form</h1>
        {/* <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link> */}
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            {/* <img
              src= {contact.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
              alt=""
              className="userShowImg"
            /> */}
            <div className="userShowTopTitle">
              <span className="userShowUsername">{contact.username}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">User</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{contact.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{contact.email}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <Message className="userShowIcon" />
              <span className="userShowInfoTitle">{contact.desc}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">User Details</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={contact.username}
                  className="userUpdateInput"
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div> */}
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={contact.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Message</label>
                <input
                  type="text"
                  placeholder={contact.desc}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="India"
                  className="userUpdateInput"
                />
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
