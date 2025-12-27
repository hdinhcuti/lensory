// import Sidebar from '@/components/layouts/components/Sidebar/Sidebar';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
const cx = classNames.bind(styles);
const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cx('wrapper')}>
            {/* <div className={cx('sidebar')}>
                <Sidebar />
            </div> */}
            <div className={cx('content')}>{children}</div>
        </div>
    );
};

export default Main;
