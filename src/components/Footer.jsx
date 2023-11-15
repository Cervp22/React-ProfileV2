export default function Footer() {
  return (
    <div>
      <footer>
        <div>
          <a href="https://github.com/Cervp22" target="blank">
            <img src="../images/github.png" alt="" className="githubimg" />
          </a>
          <a
            href="https://www.linkedin.com/in/paul-cervantes-b47b30225/"
            target="blank"
          >
            <img src="../images/linkedin.png" alt="" className="linkedinimg" />
          </a>
          <a href="https://stackoverflow.com/" target="blank">
            {" "}
            <img
              src="../images/stackoverflow.png"
              alt=""
              className="stackoverflowimg"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
