import React, {
    Fragment
} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

class Login extends React.Component {
    render() {
        return (

            <Fragment >
            <header >
            <div className = "container-fluid " >
            <div className = "container" >
            <Header />
            <Navbar />
            </div> 
            </div>
             </header>
              <h1> Login </h1>
               </Fragment>
        );
    }
}

export default Login;