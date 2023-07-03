import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, iconActive, to }) {
    const [actived, setActived] = useState(false);
    return (
        <NavLink
            className={(nav) => {
                setActived(nav.isActive);
                return cx('menu-item', { active: nav.isActive });
            }}
            to={to}
        >
            {actived ? iconActive : icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;
