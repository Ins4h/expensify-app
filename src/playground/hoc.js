import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const requireAuthentication = (WrappedComponnent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponnent {...props} />
      ) : (
        <p> Please log in</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info={"There are the details"} />,
  document.getElementById("app")
);
