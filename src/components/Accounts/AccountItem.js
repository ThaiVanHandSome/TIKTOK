import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import Image from '../Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItemPreview from './AccountItemPreview';
import { Wrapper } from '../Popper';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <HeadlessTippy
                interactive
                offset={[-12, 0]}
                delay={[900, 500]}
                placement="bottom"
                render={(attrs) => (
                    <Wrapper>
                        <AccountItemPreview attrs />
                    </Wrapper>
                )}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} alt="Avatar" />
                    <div className={cx('info')}>
                        <p className={cx('user-name')}>
                            <strong>thangtammao01</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Nguyễn Thái Văn</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
