import React from "react";
import { useState } from "react";
import "./App.css";
import { Button, Container, Form } from 'react-bootstrap';

// navbar
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">TKH</h1>
      <div className="menu-link">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
// SideBar
function SideBar() {
  return (
    <div className="sidebar">
      <a href="">portfolio</a>
      <a href="">blog</a>
    </div>
  );
}

// layout
function Layout(props) {
  return (
    <div className="layout">
      {props.children}
    </div>
  );
}

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <p>Sign up here</p>
    </>
  );
}

function Login(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError ] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if(username == "user123" && password == "password123"){
      console.log("logged in");
      props.setLoginUser(true);
      setError(false);
    } else {
      setError(true);
    }
  }


  return (
    <Container>
      {
      error ? 
        <Alert variant="danger">
          That was the wrong username and/or password
        </Alert>
      : 
        <div>Welcome to the app</div>
      }
      <Form onSubmit={(e) => handleLogin(e)}>
      <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            onChange={(e) => setUsername(e.target.value)} 
            type="text" 
            placeholder="Enter your username" 
            name="username" 
          />
        </Form.Group>        
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </Container>
  )
}

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);


  return (
    <div className="app">
      {
      isUserLoggedIn ?
      <>
      <div className="navbar-box">
        <Navbar />
        
      </div>
      <div className="main-box">
        <SideBar />
        <Layout>
          <h1>Hello world</h1>
        </Layout>
      </div>
      </>
      :
      <>
      {
        showLogin ?  //make a onclick that will change from true and false;
        <Login setLoginUser={setUserLoggedIn}/> 
        :
        <Signup/>
      }
      <button onClick={() => setShowLogin(!showLogin)}>Signup</button>
      </>
      } 
    </div>
  );
}
export default App;
