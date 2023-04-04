import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Home.css';

export function International(){
    return(
        <>
               <div className="container-fluid col-lg-12 p-5">
           <div className="bgset text-light bord">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4 text-light p-5">
                        
                        <p>Transfers</p>
                        <h1>International</h1>
                        <h1>payments for</h1>
                        <h1>your business</h1><br/>
                        <p>Join thousands of businesses saving on<br/>fees with fast local and international<br/>transfers</p><br/>
                        <button type="button" class="btn  px-4 ">Get started</button>

                        <button type="button" class="btnsales text-light bg-dark ml-2 px-4 pt-1 pb-1">Contact sales</button> 
                        
                    </div>
                    <div className="col-lg-4 bgcolor m-5">
                    </div>
                   
                </div>
               
           </div>
           

        </div>
        </>
    );
}

