import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItemPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItemPreview({ attrs }) {
    return (
        <div className={cx('preview')} tabIndex={-1} {...attrs}>
            <header className={cx('header')}>
                <Image src="" alt="Avatar" className={cx('avatar')} />
                <div>
                    <Button primary small className={cx('button')}>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('info')}>
                <p className={cx('user-name')}>
                    <strong>thangtammao01</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Nguyễn Thái Văn</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>17.4M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountItemPreview.propTypes = {
    attrs: PropTypes.object,
};

export default AccountItemPreview;
