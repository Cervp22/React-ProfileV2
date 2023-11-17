export default function Portfolio() {
  return (
    <main style={{ marginLeft: "470px" }}>
      <article>
        <div>
          <a href="#">
            <img
              src="./javascripttimedquix.png"
              style={{ width: "400px", borderRadius: "70px" }}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./weatherapp.png"
              style={{
                width: "400px",
                borderRadius: "200px",
              }}
            />
          </a>
        </div>
      </article>
      <article>
        <div>
          <a href="#">
            <img
              src="./weatherapp.png"
              style={{ width: "400px", borderRadius: "100px" }}
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./tech-blog.png" style={{ width: "560px" }} />
          </a>
        </div>
      </article>
      <article>
        <div>
          <a href="#">
            <img src="./work-day-schedule.png" style={{ width: "400px" }} />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="./cocktailwebsite.png"
              style={{ width: "400px", borderRadius: "80px" }}
            />
          </a>
        </div>
      </article>
    </main>
  );
}
