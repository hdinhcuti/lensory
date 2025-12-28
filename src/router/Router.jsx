import { PATH_CONFIG } from '@/configs/path-config';
import Home from '@/pages/Home/Home';
import PostDetail from '@/pages/PostDetail/PostDetail';
import Profile from '@/pages/Profile/Profile';

export const publicRoutes = [
    {
        path: PATH_CONFIG.home,
        component: Home,
    },
    {
        path: PATH_CONFIG.profile,
        component: Profile,
    },
    {
        path: PATH_CONFIG.post,
        component: PostDetail,
    },
];
