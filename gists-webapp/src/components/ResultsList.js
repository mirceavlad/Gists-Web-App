import { useState, useEffect } from "react";
import "./ResultsList.css";

const ResultsList = (props) => {
  const [gists, setGists] = useState([]);
  const [forks,setForks]=useState([]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setGists(props.gists);
  }, [props.gists]);

  function getAllForks(url) {
    fetch(url+"?per_page=3")
      .then((res) => res.json())
      .then((json) => {
        setForks(json);
      });
  }

  const table = gists.map((gist) => {
    {
      return (
        <tr>
          <td>
            {Object.entries(gist.files).map(([fileKey, fileValue], fileIndex) => {
              return (
                <p>
                  {fileValue.language}
                </p>
              );
            })}
          </td>
          <td>
            {Object.entries(gist.files).map(([fileKey, fileValue], fileIndex) => {
              return (
                <p>
                  {fileValue.filename}
                </p>
              );
            })}
          </td>
          <td>
            { getAllForks(gist.forks_url)}
            {forks.map((fork)=>{
            Object.entries(fork.owner).map(([forkKey, forkValue], forkIndex) => {
              return (
                <p>
                  {fileValue.login}
                </p>
              );
            })})}
          </td>

          {Object.entries(gist).map(([key, value], index) => {
            if (typeof value !== "object") return <td>{value}</td>;

          })}
        </tr>
      );
    }
  });
  const tags=<><th>Tags</th><th>Files</th><th>Forks</th></>;
  return (
    <div className="ResultsList">
      <table>
        <thead>
          {props.gists[0] && tags}
          {props.gists[0] != undefined &&
            Object.entries(props.gists[0]).map(([key, value], index) => {
              return <th>{key}</th>;
            })}
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
};
export default ResultsList;
