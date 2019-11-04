import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./Home/Home";
import About from "./About/About";
import Categories from "./Categories/Categories";
import Lifestyle from "./Lifestyle/Lifestyle";
import Posts from "./Posts/Posts";
import Video from "./Video/Video";
import Blog from "./Blog/Blog";
import Events from "./Events/Events";
import FAQ from "./FAQ/FAQ";
import Get from "./Get in touch/Get in touch";
import Login from "./Login/Login";

class App extends React.Component {

  render() {
    return (
      <Router>
      <Route path="/" exact component = { Home } />
      <Route path = "/about" exact component = { About }/>
      < Route path = "/categories" exact component = { Categories } />
      < Route path = "/lifestyle" exact component = {Lifestyle } />
      < Route path = "/posts" exact component = {Posts} />
      < Route path = "/video" exact component = {Video} />
      < Route path = "/blog" exact component = {Blog} />
      < Route path = "/events" exact component = {Events} />
      < Route path = "/faq" exact component = {FAQ}/>
      < Route path = "/get-in-touch" exact component = { Get} />
      < Route path = "/login" exact component = {Login } />
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));


