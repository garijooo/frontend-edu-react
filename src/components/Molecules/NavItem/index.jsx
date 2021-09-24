import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import NavIcon from '../../Atoms/NavIcon'

import styles from './NavItem.module.css'

NavItem.propTypes = {
    icon: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default function NavItem({ icon, path, title, onClick }) {

    return (
      <li className={styles.item}>
        <NavLink 
            to={path}
            className={styles.link}
            activeClassName={styles.active}
            onClick={() => onClick(title)}
        >
        <NavIcon>
          {icon()}
        </NavIcon>
        <h2 className={styles.title}>
            {title}
        </h2>
        </NavLink>
      </li>  
    );
}