import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import items from './items';

const getClassName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
};

export const AppBar = () => {
  return (
    <div>
      <nav>
        {items.map(({ id, to, text }) => (
          <NavLink key={id} className={getClassName} to={to} end>
            {text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
