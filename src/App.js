import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const fullName = "Mehdi Mellouli";
  const bio = "I am a junior developper with a lot of ambitions."
  const profession = "Full-stack developper"
  const style = { color : "black" , fontSize : "20px" , fontWeight : "500" , letterSpacing : "2px"  }
  const handleName = ()=>{
    return (
    alert( fullName )
    )
  }
  return (
    <div className="App">
      
      <Profile
        fullName ={fullName}
        bio ={bio}
        profession = {profession}
        style = {style}
        onClick = {handleName}
      />
    </div>
  );
}

export default App;
