import React, { Component } from 'react';

const style = {
  width: '300px',
  height: '220px',
  boxShadow: '0 0 4px 2px rgba(0,0,0,0.3)',
  textAlign: 'center',
  padding: '5px 5px',
  margin: '10px 10px'
};


 const Quote = (props) => {
    return <div className = 'quote'>
      <h3>Event: {props.quote.event} </h3> 
      <p>Rental: {props.quote.type}</p>
      <p>Amount: ${props.quote.amount}</p>
      <p>Date: {props.quote.date}</p>
      <p>Client Name: {props.quote.name}</p>
      <div className = 'buttonRow'>
      <button 
        id = {props.quote.quoteid}  
        onClick = {props.handleClick}>
          Delete Quote
        </button>
      <button 
        id = {props.quote.quoteid}  
        onClick = {props.emailQuote}
        className = 'emailBtn'
       >
          Email Quote
      </button>
      </div>

    </div>
} 

export default Quote;