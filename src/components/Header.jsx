import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button';
import './Header.css';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  if (!currentUser) return null;

  return (
    <header className="mv-header">
      <div className="mv-header__left">
        <h1 className="mv-logo" onClick={() => navigate('/motorcycles')} role="button" tabIndex={0}>
          MotorVehicle Booking
        </h1>
      </div>

      <div className="mv-header__actions">
        <Button to="/motorcycle/new" variant="primary">Add Motorcycle</Button>
        <Button to="/reserve/new" variant="secondary">New Reservation</Button>
        <Button to="/reservations" variant="ghost">Reservations</Button>
        <Button to="/logout" variant="ghost">Logout</Button>
      </div>
    </header>
  );
};

export default Header;