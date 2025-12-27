// import Sidebar from '@/components/layouts/components/Sidebar/Sidebar';
import classNames from 'classnames/bind';
import Header from './Header/Header';
import styles from './Main.module.scss';
const cx = classNames.bind(styles);
const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cx('wrapper w-full h-full')}>
            <Header />
            <div className={cx('content pt-20 bg-[rgb(240,242,245)]')}>{children}</div>
        </div>
    );
};

export default Main;
