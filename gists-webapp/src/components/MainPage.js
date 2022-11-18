import {useState} from "react";
import './MainPage.css';
import MainPageCard from './MainPageCard';
import ResultsList from './ResultsList';

function MainPage() {
  const [gists, setGists] = useState([]);
  
  return (
    <div className="MainPage">
        <MainPageCard setGists={setGists}/>

        <ResultsList gists={gists}/>

    </div>
  );
}

export default MainPage;
