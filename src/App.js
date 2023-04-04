import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Overall } from './component/Overall';

function App() {
  return (
<BrowserRouter>
<Routes>


  <Route path='/' element={<Overall/>}/>
  
</Routes> 
</BrowserRouter>
  );
}

export default App;
