
import { useState } from 'react';
import './quebec.css';
import { MyButton } from '../../styles/buttons';
// Will eventually need to make a component that can be looped over and repeated here that holds the info on parks.

//need a function to display the time the full button was clicked
//button clicked functions need to be in thier own folder to be universal and passed down to components

export default function Quebec() { 
  const [ timeClickedFull, setTimeClickedFull ] = useState();
  
  function timeFullButtonClicked() {
    let timeClicked = new Date().toString();
    setTimeClickedFull(timeClicked)
  }

  return (
    <div className="park-container">
      Oka Beach National Park
      <p>
        {/* <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0c%2F4b%2Fb3%2F24%2Foka-beach.jpg&imgrefurl=https%3A%2F%2Fwww.tripadvisor.com%2FAttraction_Review-g1575408-d10642386-Reviews-Oka_Beach-Oka_Quebec.html&tbnid=f5IXwWjkXWJc1M&vet=12ahUKEwja9enprbPxAhUEVt8KHZxcDiIQMygAegUIARCIAQ..i&docid=Ya3LVaAp2g3R3M&w=550&h=413&q=oka%20beach&ved=2ahUKEwja9enprbPxAhUEVt8KHZxcDiIQMygAegUIARCIAQ" alt="oka beach"></img> */}
        <MyButton onClick={timeFullButtonClicked}>Full </MyButton>  {timeClickedFull} <MyButton>Open</MyButton>

      </p>
    </div>
  )
}