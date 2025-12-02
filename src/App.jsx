import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Motorcycles from './components/Motorcycles';
import Reserve from './components/Reserve';
import Reservations from './components/Reservations';
import MotorcycleForm from './components/MotorcycleForm';
import DeleteMotorcycles from './components/DeleteMotorcycles';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import MotorcycleDetails from './components/MotorcycleDetails';
import { setIconUser, setnewIconUser } from './redux/userSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIconUser());
  }, [dispatch]);

  const restoreIcon = useSelector((state) => state.user.icon);
  const currentUser = useSelector((state) => state.user.currentUser);

  library.add(faXmark, faBars);

  // map the stored icon name to the actual icon definition used by FontAwesomeIcon
  const resolvedIcon = restoreIcon === 'xmark' ? faXmark : faBars;

  return (
    <>
      <div className='app'>
        <Header />
        {currentUser && (
          <div className='hamburguerContainer'>
            <FontAwesomeIcon
              icon={resolvedIcon}
              id='hamburrguerIcon'
              onClick={() => {
                // flip the stored icon name
                if (restoreIcon === 'bars') {
                  dispatch(setnewIconUser('xmark'));
                } else {
                  dispatch(setnewIconUser('bars'));
                }
                // guard against missing element
                document.querySelector('.navContainer')?.classList.toggle('controlVisibility');
              }}
            />
          </div>
        )}

        <div id='mainContainer'>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/motorcycles' element={<Motorcycles />} />
            <Route exact path='/motorcycle/new' element={<MotorcycleForm />} />
            <Route path='/motorcycle/:id' element={<MotorcycleDetails />} />
            <Route path='/reserve/new' element={<Reserve />} />
            <Route path='/reservations' element={<Reservations />} />
            <Route path='/delete' element={<DeleteMotorcycles />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;