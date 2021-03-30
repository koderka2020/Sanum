import React, {Component} from 'react';

const NewExercise = (props) => {
  return (
    <form>
      <label>
        Exercise:
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