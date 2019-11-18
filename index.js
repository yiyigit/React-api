import React, { Component } from "react";
import ReactDOM from "react-dom";
// import fetchUser from "twitter";
import "./styles.css";

const TIMEOUT_IN_S = 1.5;

function fetchUser(userName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        id: userName,
        timestamp: Date.now(),
        info: {}
      });
    }, TIMEOUT_IN_S * 1000);
  });
}

class Badge extends Component {
  render() {
    const { user } = this.props;
    return <div> {user.id} </div>;
  }
}

class Loading extends Component {
  render() {
    return <div>loading</div>;
  }
}

class Twitter extends Component {
  state = { userData: null };
  componentDidMount() {
    const userName = this.props.username;
    const fetchUserPromiseObject = fetchUser(userName);
    fetchUserPromiseObject.then(user => {
      this.setState({ userData: user });
    });
  }

  render() {
    if (this.state.userData === null) {
      return <Loading />;
    } else {
      return <Badge user={this.state.userData} />;

      // this.props = {
      //  user: this.state.userData
      //}
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Twitter username="yiyi" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
