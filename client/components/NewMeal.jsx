import React, {Component} from 'react';

const NewMeal = (props) => {
  return (
    <div className='modal'>
      <h2>Enter new meal!</h2>
      <br></br>

      <label>
        Meal Name:
        <input type="text" />
      </label>
      <br></br><br></br>
      <label>
        Calories:
        <input type="text" />
      </label>
      <br></br><br></br>
      <label>
        Carbohydrates:
        <input type="text" />
      </label>
      <br></br><br></br>
      <label>
        Protein:
        <input type="text" />
      </label>
      <br></br><br></br>
      <label>
        Sodium:
        <input type="text" />
      </label>
      <br></br><br></br>
      <label>
        Caption:
        <input type="text" />
      </label>
      <br></br><br></br>

      <button type="button">Submit</button> 
    </div>
  );
};


export default NewMeal;