import React, {Fragment} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

class Lifestyle extends React.Component {
    render() {
        return (

            < Fragment >
            <header >
            <div className = "container-fluid " >
            <div className = "container" >
            <Header />
            <Navbar />
            </div> 
            </div>
             </header>
              <h1> Lifestyle </h1>
               </Fragment>
        );
    }
}

export default Lifestyle;