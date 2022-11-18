import {useState} from "react";
import "./MainPageCard.css";



const MainPageCard =(props)=>{
  const [username, setUsername] = useState("");

  function getAllGists(e) {
    e.preventDefault();
    fetch("https://api.github.com/users/" + username + "/gists")
      .then((res) => res.json())
      .then((json) => {
        props.setGists(json);
      });
  }

  return (
    <div className="MainPageCard">
      <div id="MainPageCardFlex">
        <p id="MainTitle">Gists Web App</p>
        <form className="mainForm" onSubmit={getAllGists} method="GET">
          <input
            type="text"
            placeholder="Github username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input className="submitBtn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default MainPageCard;
