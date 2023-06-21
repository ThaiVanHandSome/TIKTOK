import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/asset/images';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSpinner,
    faBookmark,
    faUser,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper, Menu } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { InboxIcon, MessageIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                    children: {
                        title: 'Vietnamese',
                        data: [
                            {
                                type: 'vietnamese',
                                code: 'B',
                                title: 'Bắc',
                            },
                            {
                                type: 'vietnamese',
                                code: 'T',
                                title: 'Trung',
                            },
                            {
                                type: 'vietnamese',
                                code: 'N',
                                title: 'Nam',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const MENU_ITEMS_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@thaivan',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favourites',
        to: '/favourites',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        topSeparate: true,
    },
];

function Header() {
    //const [searchResults, setSearchResults] = useState([]);

    //handle
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const isLogIn = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Logo" />
                </div>
                <HeadlessTippy
                    visible={false}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('search-btn')}>
                            <SearchIcon width="2.4rem" height="2.4rem" />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {isLogIn ? (
                        <>
                            <Tippy delay={[0, 300]} content="Upload Video">
                                <span className={cx('user-icon')}>
                                    <Button outline rounded small>
                                        Upload
                                    </Button>
                                </span>
                            </Tippy>
                            <Tippy delay={[0, 300]} content="Messages">
                                <span className={cx('user-icon')}>
                                    <MessageIcon />
                                </span>
                            </Tippy>
                            <Tippy delay={[0, 300]} content="Inbox">
                                <span className={cx('user-icon')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                </span>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={isLogIn ? MENU_ITEMS_USER : MENU_ITEMS} onChange={handleMenuChange}>
                        {isLogIn ? (
                            <Image
                                className={cx('user-avt')}
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t9.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RLmaFwL5SwkAX-e_Kfr&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAJ6taEZoRySToVdgFbwYUnM6tNuEfzfyBDDFxvNTk_Qg&oe=6494E34D"
                                alt="Avatar"
                                //fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7247048011573002246~c5_100x100.jpeg?x-expires=1687532400&x-signature=OYMskDBmJFn960KvyPUmpk1OM54%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
