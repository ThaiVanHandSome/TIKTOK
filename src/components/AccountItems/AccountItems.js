import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="Avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItems;
