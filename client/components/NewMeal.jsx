import React, {Component} from 'react';

const NewMeal = (props) => {
  return (
    <form>
      <label>
        Meal Name:
        <input type="text" />
      </label>
      <label>
        Calories
        <input type="text" />
      </label>
      <label>
        Carbohydrates:
        <input type="text" />
      </label>
      <label>
        Protein:
        <input type="text" />
      </label>
      <label>
        Sodium:
        <input type="text" />
      </label>
      <label>
        Caption:
        <input type="text" />
      </label>
      <input type="submit" value="Post" />
    </form>
  );
};


export default NewMeal;