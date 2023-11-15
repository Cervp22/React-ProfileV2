import PDF from "../../resume/PaulsResume.pdf";

function Resume() {
  return (
    <div>
      <a
        href={PDF}
        download={"Paul Cervantes Resume(1).pdf"}
        style={{ marginLeft: "250px", color: "red" }}
      >
        RESUME
      </a>

      <div>
        <h2 className="frontend">
          Front-End- <h8>Proficiencies</h8>
        </h2>
        <ul className="list2">
          <li className="list2"> Html </li>
          <li className="list2"> CSS </li>
          <li className="list2"> bootstrap </li>
          <li className="list2"> Javascript </li>
          <li className="list2"> jquery </li>
          <li className="list2"> React </li>
        </ul>
        <h2 className="backend">
          Backend- <h8>Proficiencies</h8>
        </h2>
        <ul className="list2">
          <li className="list2">Mysql</li>
          <li className="list2">Node</li>
          <li className="list2">MongoDB</li>
          <li className="list2">API's</li>
          <li className="list2">Graphql</li>
        </ul>
        <h2 className="operatingsystem">
          Operating Systems- <h8>Proficiencies</h8>
        </h2>
        <ul className="list2">
          <li className="list2">Windows</li>
          <li className="list2">Mac</li>
          <li className="list2">Linux</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;
