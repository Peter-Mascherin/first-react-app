//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3 id="myid">Hello Buddy this works</h3>
      <h4 id="myid">This site is a test site to play around with and learn React</h4>
      <h5 id="myid">It will consist of all sorts of different things to make in React, complete with garbage and huge html syntax</h5>
      <hr></hr>
      <h1>Increment Testing</h1>
      <p>Click button to increment or decrement</p>
      <button onClick={() => incrementDecrement(1)}>+</button>
      <button onClick={() => incrementDecrement(-1)}>-</button>
      <p id="thevalue" >0</p><br />
      <hr/>
      <h1>Video Playback Testing</h1>
      <p>Here will be video playback testing area , ideally with two video sections. One section will have a default video shipped with the site , the other will allow a youtube link and be ripped from youtube</p>

      
    </div>

    
  );
}

function incrementDecrement(choice)
{
  var parvalue = document.getElementById("thevalue").innerHTML;
  
  switch(choice)
  {
    case 1: document.getElementById("thevalue").innerHTML = parseInt(parvalue) + choice; break;
    case -1: 
    if(parseInt(document.getElementById("thevalue").innerHTML) === 0)
      {
        alert("Cant go below 0");
        break;
      }
      document.getElementById("thevalue").innerHTML = parseInt(parvalue) + choice; 
      break;
    default: alert("something broke");
  }
}



export default App;
