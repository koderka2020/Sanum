import React, {Component} from 'react';

const NewExercise = (props) => {

  const [calories, setCalories] = useState('');
  const [caption, setCaption] = useState('');

  return (
    <div>
      <label>
        Calories Burned:
        <input type="text" onClick= {event => setCalories(event.target.values)} />
      </label>
      <label>
        Caption:
        <input type="text" onClick=  {event => setCaption(event.target.values)} />
      </label>
      <label for="img">Upload Photo:</label>
        <input type="file" id="img" name="img" accept="image/*"></input>
      <input type="submit" value="Post" />
    </div>
 
  );
}

export default NewExercise;