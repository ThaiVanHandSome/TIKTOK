import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Accounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list-item')}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

Accounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Accounts;
