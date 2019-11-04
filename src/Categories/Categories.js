import React, {Fragment} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

class Categories extends React.Component {
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
             <h1> Categories </h1>
              </Fragment>
        );
    }
}

export default Categories;