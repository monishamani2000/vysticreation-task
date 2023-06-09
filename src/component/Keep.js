import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export function Keep(){
    return(
        <>
        <div className="container-fluid col-lg-12">
            <div className="row justify-content-center">
                <div className="col-lg-5 text-black mt-5 ">
                    <h1><b>We keep your<br/> money safe</b></h1><br/>
                    <p className="keep__pera">Keep your money safe with our anti-fraud system. All our cards support 3D Secure and our contactless<br/> card limits help fight contactless fraud</p> 
                   <div className="row ml-1">
                   <button type="button" class="btn btn-success text-dark p-3"><b>See how</b></button> 
                
                   </div>
                </div>

                <div className="col-lg-6">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 m-2 bg-grey p-3">
                                <h5><b>Card spending you control</b></h5>
                                    <p className="pera">You’re the boss. Set limits, track, freeze/unfreeze
                                        and decide where cards can be used. Expenses
                                        automatically remind staff to submit receipts; it’s
                                        bookkeeping made easy </p>
                                   
                                    <h6 className="mt-5">Discover Expenses </h6>

                            </div>
                            <div className="col-lg-5 m-2 bg-grey p-3">
                                <h5><b> Spend like a local on debit<br/> cards with great FX rates</b></h5>
                                    <p className="pera">You’re the boss. Set limits, track, freeze/unfreeze
                                        and decide where cards can be used. Expenses
                                        automatically remind staff to submit receipts; it’s
                                        bookkeeping made easy
                                    </p>
                                    <h6>Learn more about Exchanges </h6>

                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5 m-2 bg-grey p-3">
                                <h5><b>Stay secure online with
                                    virtual debit cards</b></h5>
                                    <p className="pera">Get added protection from online fraud with
                                        virtual cards - each team member can get up to
                                        200. Perfect for tracking subscriptions and other
                                        online payments </p>
                                    <h6 className="mt-5">Get started </h6>

                            </div>
                            <div className="col-lg-5 m-2  bg-grey p-3">
                                <h5><b>Empower your team with
                                        company debit cards</b></h5>
                                    <p className="pera">Empower your team with
                                    company debit cards
                                     However big or small your team is, our company
                                    cards have got you covered. Spend securely with
                                    physical and virtual debit cards that you control </p>
                                   
                                    <h6 >Discover Expenses </h6>

                            </div>
                        </div>
                    </div>
                
            </div>

        </div>
        </>
    );
}