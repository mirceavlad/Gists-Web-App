import { useState, useEffect } from "react";
import "./ResultsList.css";

const ResultsList = (props) => {
  const [gists, setGists] = useState([]);
  const [forks, setForks] = useState(["", "", ""]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setGists(props.gists);
  }, [props.gists]);

  const table = gists.map((gist) => {
    {
      return (
        <tr>
          <td>
            {Object.entries(gist.files).map(
              ([fileKey, fileValue], fileIndex) => {
                return <p>{fileValue.language}</p>;
              }
            )}
          </td>
          <td>
            {Object.entries(gist.files).map(
              ([fileKey, fileValue], fileIndex) => {
                return (
                  <p>
                    <a href={gist.html_url}>{fileValue.filename}</a>
                  </p>
                );
              }
            )}
          </td>

          {/*CODE THAT SHOULD FETCH THE FORKS
                      <td>
            {fetch(gist.forks_url + "?per_page=3")
              .then((res) => res.json())
              .then((json) => {
                if (json !== undefined) {
                  json.map((fork) => {
                    Object.entries(fork.owner).map(
                      ([forkKey, forkValue], forkIndex) => {
                        return <p>{forkValue.login}</p>;
                      }
                    );
                  });
                }
              })}          </td>
              */}

          {Object.entries(gist).map(([key, value], index) => {
            if (typeof value !== "object") return <td>{value}</td>;
          })}
        </tr>
      );
    }
  });
  const tags = (
    <>
      <th>Tags</th>
      <th>Files</th>
    </>
  );
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
        <tbody>{table}</tbody>
      </table>
    </div>
  );
};
export default ResultsList;
