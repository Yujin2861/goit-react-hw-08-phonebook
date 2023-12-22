import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={s.links}>
      <NavLink
        className={s.link}
        to="/register"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        })}
      >
        Register
      </NavLink>
      <NavLink
        className={s.link}
        to="/login"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        })}
      >
        Sign In
      </NavLink>
    </div>
  );
};
