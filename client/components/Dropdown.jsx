import React, { Component } from 'react';


const Client = (props) => {
    const clients = []
    props.clients.forEach((client,index) => {
      clients.push(
        <option 
        key = {`k${index}`} 
        value = {client.id}>
          {client.name}
        </option>
      )});
    return ( 
      <select id="clientId" onChange = {props.setClient} defaultValue = {props.default}>
        { clients} 
      </select>
    )
}


const Photobooth = (props) => {
  const photobooths = []
  props.photobooths.forEach((photobooth,index) => {
    photobooths.push(
      <option 
      key = {`k${index}`} 
      value = {photobooth.id}>
        {photobooth.type}
      </option>
    )});
    
  return ( 
    <select id="photoboothId" onChange = {props.setPhotobooth} defaultValue = {props.default}>
      {photobooths} 
    </select>
  )
}


export  {Client, Photobooth};