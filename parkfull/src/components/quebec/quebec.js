
import { useState } from 'react';
import './quebec.css';
import { MyButton } from '../../styles/buttons';
// Will eventually need to make a component that can be looped over and repeated here that holds the info on parks.

//need a function to display the time the full button was clicked
//button clicked functions need to be in thier own folder to be universal and passed down to components

export default function Quebec() { 
  const [ timeClickedFull, setTimeClickedFull ] = useState();
  const [ timeClickedOpen, setTimeClickedOpen ] = useState();
  
  function timeFullButtonClicked() {
    let timeClicked = new Date().toLocaleString();
    setTimeClickedFull(timeClicked);
  }

  function timeOpenButtonClicked() {
    let timeClicked = new Date().toLocaleString();
    setTimeClickedOpen(timeClicked);
  }

  //need to make an array of objects that holds the information on the parks so it can be looped over in the display
  const parks = [{
    name:"Oka Beach Provincial Park",
    province: "Quebec",
    country: "Canada"
  },
  {
    name: "Mt. Trembant",
    province: "Quebec",
    country: "Canada"
  },
  {
    name: "Pink Lake",
    province: "Quebec",
    country: "Canada"
  },
  {
    name:"Sandbanks National Park",
    province: "Ontario",
    country: "Canada"
  }
]

  return (
    <div className="park-container">
      {parks.map(park=>(
        <p key={park.name} className="individual-park">{park.name}
        <MyButton onClick={timeFullButtonClicked}>Full</MyButton> {timeClickedFull} 
        <MyButton onClick={timeOpenButtonClicked}>Open</MyButton> {timeClickedOpen}
        </p>
      ))}
    </div>
  )
}