import React, { Component } from 'react';
import { QuotePopup, ClientPopup } from './ModalPopup';
import Quote from './Quote';
import Navbar from './Navbar';


const appStyle ={
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      clients: [],
      photobooths: [],
      event: '',
      // type: '',
      amount: '',
      date: '',
      newEmail: '',
      newClient: '',
      clientFetchStatus: '',
      quoteFetchStatus: '',
      clientId: null,
      photoboothId: null
    };
    this.deleteQuote = this.deleteQuote.bind(this);
    this.createQuote = this.createQuote.bind(this);
    this.editQuote = this.editQuote.bind(this);
    this.emailQuote = this.emailQuote.bind(this);
    this.createClient = this.createClient.bind(this);
    this.editClient = this.editClient.bind(this);
  }
  
  componentDidMount() {
    fetch('/quote')
      .then(response => response.json())
      .then(data => this.setState({
        ...this.state,
        quotes: data.quotes
      }))
      .catch(err => console.log('Error getting  quotes',err));

    fetch('/client')
      .then(response => response.json())
      .then(data => this.setState({
        ...this.state,
        clientId: data.clients[0].id,
        clients: data.clients
      }))
      .catch(err => console.log('Error getting clients', err));

      fetch('/photobooth')
      .then(response => response.json())
      .then(data => this.setState({
        ...this.state,
        photoboothId: data.photobooths[0].id,
        amount: data.photobooths[0].hourlycost,
        photobooths: data.photobooths
      }))
      .catch(err => console.log('Error getting photobooths', err));
  }
  
  deleteQuote(e) {
    e.preventDefault();
    console.log('Button clicked >>> ', e.target.id);
    fetch(`/quote/${e.target.id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => this.setState({
      ...this.state,
      quotes: data.quotes
    }));
  } 

  createQuote(e) {
    e.preventDefault();
    const data = {
      event: (this.state.event),
      photoboothId:  2,
      amount: parseInt(this.state.amount),
      date: this.state.date,
      clientId: parseInt(this.state.clientId)
    };

    // console.log('data to be sent', data);
    fetch('/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
      console.log('Response after POST request',res);
      this.setState({
        ...this.state,
        quotes: res.quotes,
        event: '',
        quoteFetchStatus: 'Quote created !!'
      })
    })
    .catch(err => console.log('Error creating quote >>> ',err))
  }

  emailQuote(e){
    console.log('Email button pressed...', e.target.id);
    fetch('/quote/email',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({quoteId : e.target.id})
    })
      .then(response => response.json())
      .then(res => console.log(res))
      .catch(err => console.log('Error sending email', err));
  }

  editQuote(e){
    e.preventDefault();
    console.log(`Editing quote ${e.target.id}...`, e.target.value);
    if (e.target.id === 'photoboothId'){
      let price;
      for (let p of this.state.photobooths){
        // console.log('looking for price...',p.id, e.target.value, p.id  === parseInt(e.target.value));
        if (p.id === parseInt(e.target.value)){
          price = p.hourlycost;
          break;
        }
      }
      this.setState({
        ...this.state,
        amount: price,
        photoboothId: e.target.value,
        quoteFetchStatus: ''
      });
    }else {
      this.setState({
        ...this.state,
        [e.target.id]: e.target.value,
        quoteFetchStatus: ''
      });
    }
  }

  createClient(e){
    e.preventDefault();
    // console.log('Create client button pressed...');
    const data = {
      name: this.state.newClient,
      email: this.state.newEmail
    };

    // console.log('data to be sent', data);
    fetch('/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      if (res.status === 200) return res.json();
      // return res.json();
    })
    .then(res => {
      console.log('Response after POST request',res);
      this.setState({
        ...this.state,
        clients: res.clients,
        newClient: '',
        newEmail: '',
        clientFetchStatus: 'Client created !!'
      })
    })
    .catch(err => console.log('Error creating quote >>> ',err))
  }

  editClient(e){
    console.log(`Editing client ${e.target.id}...`, e.target.value);
    this.setState({
        ...this.state,
        [e.target.id]: e.target.value,
        clientFetchStatus: ''
    })
  }


  render() {
    const quotes = [];
    console.log('Rendering App >>>', this.state);
    if (this.state.quotes){
      this.state.quotes.forEach((quote, i) => quotes.push(
        <Quote 
          key = {`q${i}`}
          quote = {quote}
          handleClick = {this.deleteQuote}
          clients = {this.state.clients}
          emailQuote = {this.emailQuote}
        />
      ));
    }
    return (
      <div >
        <div className = 'navbar'>
        <h1>Quotes</h1>
        <div>
          <QuotePopup
            clients = {this.state.clients}
            photobooths = {this.state.photobooths}
            state = {this.state}
            editQuote = {this.editQuote}
            createQuote = {this.createQuote}
          />
          <ClientPopup
            state = {this.state}
            createClient = {this.createClient}
            editClient = {this.editClient}
          />
        </div>
        
        </div> 
        <div className = "quotes" style = {appStyle}>
          {quotes}
        </div>
      </div>
    );
  }
}


export default App;
