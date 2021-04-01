import React, {Component} from 'react';

const NewExercise = (props) => {
  return (
    <form>
      <label>
        Exercise Type:
        <input type="text" />
      </label>
      <label>
        Duration:
        <input type="text" />
      </label>
      <label>
        Calories Burned:
        <input type="text" />
      </label>
      <label>
        Caption:
        <input type="text" />
      </label>
      <input type="submit" value="Post" />
    </form>
  );
}

export default NewExercise;
