import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SharedLayout from './views/nav/SharedLayout';


import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import PageError from './views/pageError/PageError';
import Home from './views/home/Home';
import { fetchGetUser } from "./views/user/usersSlice"
import Login from "./views/user/Login"

import CheckLoginBeforeAccess from './services/CheckLoginBeforeAccess';
import CheckProileBeforeUse from './services/CheckProfileBeforeUse';
function App() {





  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={
              <CheckLoginBeforeAccess>
                <CheckProileBeforeUse>
                  <Home />
                </CheckProileBeforeUse>
              </CheckLoginBeforeAccess>

            } />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageError />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
