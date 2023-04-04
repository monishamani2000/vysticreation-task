import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Homepage } from './Home';
import { Rules } from './rules';
import { Connect } from './connect';
import { Keep } from './Keep';
import { Univers } from './Univers';
import { Metal } from './Metal';
import { International } from './International';
import { Discover } from './Discover';
import { Smartcompany } from './Smart';
import { Setteam } from './Setteam';


export function Overall(){
    return(
        <> 
        <Homepage/>
       
        <Keep/>
        <Univers/>
        <Metal/>
        <International/>
        <Discover/>
        <Smartcompany/>
        <Setteam/>
         <Rules/>
        <Connect/>
        </>
    );
}