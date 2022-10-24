import { NavLink } from 'react-router-dom';
import css from './AppBar.module.scss';
import items from './items';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : `${css.link}`;
};

export const AppBar = () => {
  return (
    <div className={css.appBar}>
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
