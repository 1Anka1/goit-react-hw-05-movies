import { NavLink } from "react-router-dom";
import items from "./items";
import styles from './navbar-menu.module.css';




export default function NavbarMenu() {
    
    const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
}

    const elements = items.map(({ id, to, text }) => {
        return (
            <li key={id}>
                <NavLink className={getClassName} to={to} end>{text}</NavLink>
            </li>
        )
    })
    return (
        <ul className={styles.menu}>{elements}</ul>
    )
};
