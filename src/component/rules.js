import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import './Home.css';


export function Rules(){
    return(
        <>
        <div className='container-fluid rulebg  '>
                <div className='col-lg-12 text-center'>
                <h1 className='text-light mt-4'>Control all your spend <br/>with smart rules</h1>
                </div>

                <div className='col-lg-3 mt-3'>
                    <div className='bg-secondary box'>
                        <h6 className='text-dark  row p-3'><div className='mr-1'></div>Cosmetics <div className='ml-2'></div>March 25,2022<div className='col-lg-1'></div><b>$100</b></h6></div>
                </div>

                <div className='col-lg-3 '>
                    <div className='bg-secondary box'>
                        <h6 className='text-dark  row p-3'><div className='col-lg-1'></div>Food<div className='col-lg-1'></div>March 29,2022<div className='col-lg-1'></div><b>$45</b></h6></div>
                </div>

                <div className='col-lg-4 '>
                    <div className='bg-light box'>
                        <h6 className='text-dark row pl-4 pr-4 p-4 '><div className='col-lg-1'></div>Shopping <div className='col-lg-1'></div>March 27,2022<div className='col-lg-1'></div><b>-$241</b></h6></div>
                </div>

                <div className='col-lg-3 '>
                    <div className='bg-secondary box'>
                        <h6 className='text-dark  row p-3'><div className='col-sm-1'></div>Others<div className='ml-2'></div>March 25,2022<div className='col-lg-1'></div><b>$100</b></h6></div>
                </div>

                <div className='col-lg-3 '>
                    <div className='bg-secondary box'>
                        <h6 className='text-dark  row p-3'><div className='col-sm-1'></div>Tech<div className='col-lg-1'></div>March 29,2022<div className='col-lg-1'></div><b>$45</b></h6></div>
                </div>

            </div>
           
        </>
    );
}