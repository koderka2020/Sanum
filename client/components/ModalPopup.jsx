import { Client, Photobooth }  from './Dropdown'
import React, { useRef } from 'react';
import Popup from 'reactjs-popup';


const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const popupContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: '300px',
  height: '350px',
  boxShadow: '0 0 4px 2px rgba(0,0,0,0.3)',
  textAlign: 'center',
  backgroundColor: 'lightGrey',
}

const QuotePopup = (props) => {
  const ref = useRef();
  const closePopup = () => ref.current.close();

  return (
    <Popup 
    trigger={<button className = 'navBtn'> Create New Quote</button>} 
    ref={ref}
    position="right center" 
    modal>
    <div style = {popupContainerStyle}>
      <form style = {formStyle} id = "quoteForm">
        <h1>Quote Create Form</h1>

          <label >Event:</label> <input type="text" id="event" 
          value = {props.state.event} onChange = {props.editQuote}/> 
          <br></br>

          <label>Type:</label> 
          {/* <input type="text" id="type"
          value = {props.state.type} onChange = {props.editQuote}/>  */}
          <Photobooth 
            photobooths = {props.photobooths} 
            setPhotobooth = {props.editQuote} 
            default = {props.state.photoboothId}
          />
          <br></br>

          <label>Amount: ${props.state.amount}</label> 
          {/* <input type="text" id="amout"
          onChange = {props.editQuote}/>  */}
          <br></br>
          
          {/* <label >Date:</label> <input type="text" id="date"
          value = {props.state.date} onChange = {props.editQuote}/> 
          */}
          <label>Name:</label> 
          {/* <input type="text" id="name"
          value = {props.state.name} onChange = {props.editQuote}/>  */}
          <Client 
            clients = {props.clients} 
            setClient = {props.editQuote} 
            default = {props.state.clientId}/>
          <br></br>
          <span>
            <button  onClick = {props.createQuote} >Submit</button>
            <button  onClick = {closePopup}>Close</button>
          </span>
        </form>
        <h3>{props.state.quoteFetchStatus}</h3>
    </div>
  </Popup>
  );
};

const ClientPopup = (props) => {
  const ref = useRef();
  const closePopup = () => ref.current.close();
  return (
    <Popup 
    trigger={<button className = 'navBtn'> Add Client</button>} 
    ref = {ref}
    position="right center" 
    modal>
      <div style = {popupContainerStyle}>
      <form style = {formStyle} id = "clientForm">
          <h1>Client Create Form</h1>
          
          <label >Name:</label> 
          <input type="text" id="newClient" 
            onChange = {props.editClient}/> 
          <br></br>

          <label>Email:</label> 
          <input type="text" id="newEmail"
            onChange = {props.editClient}/> 
          <br></br>
          <span>
            <button  onClick = {props.createClient}>Submit</button>
            <button  onClick = {closePopup}>Close</button>
          </span>
        </form>
        <h3> {props.state.clientFetchStatus}</h3>
      </div>
  </Popup>
  );
}


export {QuotePopup, ClientPopup};