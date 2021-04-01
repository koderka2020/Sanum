import React, {Component, useState} from 'react';

const NewMeal = (props) => {
  const [calories, setCalories] = useState('');
   
  const [caption, setCaption] = useState('');
  const [picUrl, setPicUrl] = useState('');
  function submitMeal(e){
    const input = document.getElementById('img');
  
    const data = {
      caption,
      calories,
      picUrl,
      postType: 'meal'  ,
      userID: 1,
      timeStamp: 	'2021-03-31'
    }
    fetch('/posts', {
      method: 'POST', 
      headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  return (
    <div>
      <label>
        Calories
        <input type="text" onChange= {event => setCalories(event.target.value)}/>
      </label>
      <label>
        Caption:
        <input type="text" onChange= {event => setCaption(event.target.value)}/>
      </label>
      <label>
        picture Url:
        <input type="text" onChange= {event => setPicUrl(event.target.value)}/>
      </label>
      <input type="submit" value="Post" onClick = {submitMeal}/>
    </div>
  );
};




// const input = document.getElementById('img');

// // This will upload the file after having read it
// const upload = (file) => {
//   fetch('http://www.example.net', { // Your POST endpoint
//     method: 'POST',
//     headers: {
//       // Content-Type may need to be completely **omitted**
//       // or you may need something
//       "Content-Type": "You will perhaps need to define a content-type here"
//     },
//     body: file // This is your file object
//   }).then(
//     response => response.json() // if the response is a JSON object
//   ).then(
//     success => console.log(success) // Handle the success response object
//   ).catch(
//     error => console.log(error) // Handle the error response object
//   );
// };

// // Event handler executed when a file is selected
// const onSelectFile = () => upload(input.files[0]);




export default NewMeal;
