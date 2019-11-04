import React, {Fragment} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

class Video extends React.Component {
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
              <h1> Video </h1> 
              </Fragment>
        );
    }
}

export default Video;