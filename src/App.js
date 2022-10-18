import './App.css';
import {useState} from 'react';
function App() {
  const[generatepassword,setGeneratepassword]=useState([])
  const buttonHandler=(e)=>{
    // Here i am generating random value for password.
    let password1 = (Math.random() + 1).toString(36).substring(7);
    // passing the output
    setGeneratepassword(password1)

    navigator.clipboard.writeText(setGeneratepassword);

    alert('Copied to clickboard')
    
}

  return (
   
    <div className="App">  
      <button onClick ={buttonHandler}>Click Me</button> 
      <p>Password is:{generatepassword}</p>
    </div>
  );
}

export default App;
