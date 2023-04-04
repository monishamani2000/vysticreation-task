import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Home.css';
import Component from './Component 1.png';


export function Setteam(){
    return(
        <>
        <div className="container-fluid bgset">
            <div className="row">
                <div className="col-lg-1"></div>
                    <div className="col-lg-10 bgcols mt-5 row">
                    <div className="col-lg-5 bgcols m-5 text-light ">
                        <h4 className="ml-3 pt-5">Set and change team <br/>permissions with a tap</h4>
                       
                        <p className="ml-3 pt-5">Stay in total control of your teams spending by<br/>managing their permissions and levels of access.<br/>Create custom roles and choose the combination of<br/>apps and features you want them to use</p>
                        &nbsp;
                        <h5 className="discol ml-3">Discover Revolut Business </h5>
                        </div>  

                        <div className="col-lg-5">
                            <img src={Component} className=" mt-5 pb-5"/>
                        </div>
                        </div>
            </div>
            
        </div>
        </>
    );
}
