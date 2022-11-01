import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import "./index.css";

const element = (
  <div className="container d-flex align-items-center text-center">
    <form>
      <img
        className="mb-4"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Email address"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Remember me
          </label>
        
      </div>
      <div>
        <button type="submit" className="w-100 btn btn-lg btn-primary">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </div>
    </form>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
