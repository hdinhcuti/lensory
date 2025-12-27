import asset from '@/assets';
import { PATH_CONFIG } from '@/configs/path-config';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-center items-center h-15 shadow-sm fixed top-0 left-0 w-full bg-white">
            <div className="flex justify-between w-full max-w-[1200px] items-center px-5 lg:px-0 ">
                <Link to={PATH_CONFIG.home} className="navbar-brand rounded-full">
                    <img src={asset.logo} alt="" width={50} height={50} className="rounded-full object-cover" />
                </Link>
                <div className="action">Login</div>
            </div>
        </header>
    );
};

export default Header;
