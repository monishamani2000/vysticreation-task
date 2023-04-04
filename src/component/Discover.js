import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';import './Home.css'
import Group from './Group 644 1.png';
import Group23 from './Group 237629.png';


export function Discover(){
return(
    <>
    <div className="container-fluid bgset text-light">
        <h4 className=" text-center p-5">Teamwork makes the dream work</h4>
        <h1 className="text-center  ">Discover the meaning of efficiency <br/>with Univers Business</h1>
        <div className="row ">
            <div className="col-lg-1"></div>
            <div className="col-lg-4  col-10 bgcolT text-dark m-5 p-3">
                <h4 >Send and receive<br/>without borders</h4>
                <p><b>Explore Payments</b></p>
                <img src={Group}  className="p-5 col-lg-12 "/>

            </div>
           
            <div className="col-lg-4 col-10 bgcolor text-light m-5 p-3">
                <h4 >Invoices that work smarter</h4>
                <p className="text-success "><b>Learn more about Invoices</b></p>
                <img src={Group23} className="col-lg-12 pt-2 "/>
            </div>
            <div className="col-lg-1"></div>
        </div>

    </div>
    
    </>
);
}