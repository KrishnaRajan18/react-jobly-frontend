import React from "react";
import { Jumbotron } from "reactstrap";

function Home({ username }) {
  return (
    <div>
      <Jumbotron>
        {username ? (
          <>
            <h1 className="display-4">Welcome back to Jobly, {username}!</h1>
            <p className="lead">Get hIred!</p>
          </>
        ) : (
          <>
            <h1 className="display-4">Welcome to Jobly!</h1>
            <p className="lead">Nice to meet you!</p>
          </>
        )}
      </Jumbotron>
    </div>
  );
}

export default Home;
