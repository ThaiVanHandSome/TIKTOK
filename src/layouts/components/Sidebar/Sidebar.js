import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIconRegular,
    ExploreIconRegular,
    LiveIconRegular,
    HomeIconSolid,
    UserGroupIconSolid,
    ExploreIconSolid,
    LiveIconSolid,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<HomeIconRegular />}
                    iconActive={<HomeIconSolid />}
                    to={config.routes.home}
                />
                <MenuItem
                    title="Following"
                    icon={<HomeIconRegular />}
                    iconActive={<ExploreIconSolid  />}
                    to={config.routes.following}
                />
                <MenuItem
                    title="Explore"
                    icon={<ExploreIconRegular />}
                    iconActive={<ExploreIconSolid />}
                    to={config.routes.explore}
                />
                <MenuItem
                    title="LIVE"
                    icon={<LiveIconRegular />}
                    iconActive={<LiveIconSolid />}
                    to={config.routes.live}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
