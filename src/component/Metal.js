import React from "react";
import './Home.css';
import Frame from './Frame.png';
import Group from './Group.png';

export function Metal(){
    return(
        <>
        <div className="container-fluid col-lg-12 p-5">
           <div className="bgset text-light bord">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mt-5 pad">
                        <h1><b>Make an impression<br/>with metal</b></h1><br/>
                        <p>Get our iconic metal cards forged from<br/>stainless steel, for you and your power players.<br/>Add your company name to the front for an<br/>extra professional touch. Exclusively for paid<br/>plans. Subject to additional fees</p><br/>
                        <h4 className=" text-success">Order a Metal card </h4>
                    </div>
                    <div className="col-lg-5">
                        <img src={ Group } className="Group"/>

                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className="col-lg-6 text-center">
                    <img src={ Frame } className=" Frame text-center"/>
                </div>
           </div>
           

        </div>
        </>
    );
}
