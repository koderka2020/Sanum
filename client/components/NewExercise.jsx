import React, {Component} from 'react';

const NewExercise = (props) => {

  const [calories, setCalories] = useState('');
  const [caption, setCaption] = useState('');

  return (
    <div className='modal'>
      <h2>Enter new Exercise!</h2>
      <br></br>

      <form>
        <label>
          Exercise Type:
          <input type="text" />
        </label>
        <br></br><br></br>
        <label>
          Duration:
          <input type="text" />
        </label>
        <br></br><br></br>
        <label>
          Calories Burned:
          <input type="text" />
        </label>
        <br></br><br></br>
        <label>
          Caption:
          <input type="text" />
        </label>

        <br></br><br></br>

        <button type="button">Submit</button> 
      </form>
    </div>
  );
}

export default NewExercise;