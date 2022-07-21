import React, {useRef} from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  
  console.log(props);
  const inputE1 = useRef("");

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
// const contacts = [
//   {
//     id : "1",
//     name : "Dipesh",
//     email : "cs@gmail.com"
//   }
// ];



  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    console.log(inputE1.current.value);
    props.searchKeyword(inputE1.current.value);
  };
  return (
  <div className = "main">
    <h2>
      Contact List
      <Link to = "/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
      
    </h2>
    <div className= "ui search">
      <input ref = {inputE1} type = "text" placeholder="Search Contacts" className="prompt" value={props.term} onChange = { getSearchTerm} />
      <i className = "search icon"></i>
    </div>
    <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "Not Available"}</div>
  </div>
  );
};

export default ContactList;
