import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button';
import './Header.css';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  return (
    <header className="mv-header">
      <div className="mv-header__left">
        <h1
          className="mv-logo"
          onClick={() => navigate('/motorcycles')}
          role="button"
          tabIndex={0}
          aria-label="Go to motorcycles"
        >
          MotorVehicle Booking
        </h1>
      </div>

      <div className="mv-header__actions">
        {currentUser ? (
          <> 
            <Button to="/motorcycle/new" variant="primary">Add Motorcycle</Button>
            <Button to="/reserve/new" variant="secondary">New Reservation</Button>
            <Button to="/reservations" variant="ghost">Reservations</Button>
            <Button to="/logout" variant="ghost">Logout</Button>
          </>
        ) : (
          <> 
            <Button to="/login" variant="primary">Login</Button>
            <Button to="/signup" variant="secondary">Sign up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;