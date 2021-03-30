import React, {Component} from 'react';

const NewMeal = (props) => {
  return (
    <form>
      <label>
        Meal:
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