import React, { Component } from "react";
import Header from "./Component/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Vision from "./Vision/Vision";
import Gallery from "./Gallery/Gallery";
import Customers from "./Customers/Customers";
import NewPage from "./Gallery/NewPage";
import SignupPage from "./Customers/SignupPage";
import CustomerDashBoard from "./Customers/CustomerDashBoard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      user: {
        name: "",
        surname: "",
        sex: "",
        username: "",
        password: "",
        confirmpassword: "",
      },
      users: [],
    };
  }
  handleChangeName = (e) => {
    let name = e.target.value;
    this.setState({ user: { ...this.state.user, name } });
  };
  handleChangeSurName = (e) => {
    let surname = e.target.value;
    this.setState({ user: { ...this.state.user, surname } });
  };
  handleChangeSex = (e) => {
    let sex = e.target.value;
    this.setState({ user: { ...this.state.user, sex } });
  };
  handleChangeUserName = (e) => {
    let username = e.target.value;
    this.setState({ user: { ...this.state.user, username } });
  };
  handleChangePassword = (e) => {
    let password = e.target.value;
    this.setState({ user: { ...this.state.user, password } });
  };
  handleChangeConfirmPassword = (e) => {
    let confirmpassword = e.target.value;
    this.setState({ user: { ...this.state.user, confirmpassword } });
  };
  handleClick = () => {
    const user = this.state.user;
    const users = this.state.users;
    users.push(user);
    this.setState({ users: users });
    fetch("http://localhost:3002/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.users),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    this.setState({
      user: {
        ...this.state.user,
        name: "",
        surname: "",
        sex: "",
        username: "",
        password: "",
        confirmpassword: "",
      },
    });
  };

  async componentDidMount() {
    let resp = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await resp.json();
    this.setState({ data: data });
  }
  render() {
    const {
      handleChangeName,
      handleChangeConfirmPassword,
      handleChangePassword,
      handleChangeSex,
      handleChangeSurName,
      handleChangeUserName,
      handleClick,
    } = this;
    const data = this.state.data;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Gallery">
            <Gallery data={data} />
          </Route>
          <Route exact path="/Vision" component={Vision} />
          <Route exact path="/Customer">
            <Customers />
          </Route>
          <Route
            exact
            path="/Gallery/:user"
            children={<NewPage data={data} />}
          />
          <Route exact path="/Signup">
            <SignupPage
              handleChangeName={handleChangeName}
              handleChangeConfirmPassword={handleChangeConfirmPassword}
              handleChangePassword={handleChangePassword}
              handleChangeSex={handleChangeSex}
              handleChangeSurName={handleChangeSurName}
              handleChangeUserName={handleChangeUserName}
              handleClick={handleClick}
            />
          </Route>
          <Route
            exact
            path="/Customer/:customer"
            children={<CustomerDashBoard Users={this.state.users} />}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
// const Button = ({ handleClick }) => (
//   <button onClick={handleClick}> click this</button>
// );
