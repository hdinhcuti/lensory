import asset from '@/assets';
import type { FeedProps } from '@/components/ui/Feed/Feed';
import Feed from '@/components/ui/Feed/Feed';
import type { user } from '@/types/user';
import { IconMailFilled } from '@tabler/icons-react';

const feeds: FeedProps[] = [
    {
        id: '1',
        user: {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh 1',
            username: 'dinhcuti1',
        },
        time: 'Friday, November 19, 2021 at 12:12 AM',
        description: 'Duong Hoang Dinh 1',
        image: asset.feed1,
    },
    {
        id: '2',
        user: {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh 2',
            username: 'dinhcuti2',
        },
        time: 'Friday, November 19, 2021 at 12:12 AM',
        description: 'Duong Hoang Dinh 2',
        image: asset.feed1,
    },
    {
        id: '3',
        user: {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh 3',
            username: 'dinhcuti3',
        },
        time: 'Friday, November 19, 2021 at 12:12 AM',
        description: 'Duong Hoang Dinh 3',
        image: asset.feed1,
    },
    {
        id: '4',
        user: {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh 4',
            username: 'dinhcuti4',
        },
        time: 'Friday, November 19, 2021 at 12:12 AM',
        description: 'Duong Hoang Dinh 4',
        image: asset.feed1,
    },
];

const item: user = {
    id: '1',
    username: 'dinhcopyright',
    email: 'duonghoangdinh.copyright@gmail.com',
    fullname: 'Duong Hoang Dinh',
    avatar: asset.avtDefault,
};

const Profile = () => {
    // const { username } = useParams();

    return (
        <div className="min-h-[1000px] h-full flex lg:flex-row flex-col justify-center lg:items-start items-center gap-3 p-5">
            <div className="flex flex-col max-w-[550px] w-full gap-5 lg:sticky top-20">
                <div className="profile-info bg-white rounded-xl h-105 p-5 ">
                    <div className="flex flex-col items-center gap-5">
                        <div className="avatar rounded-full ">
                            <img
                                src={item.avatar}
                                alt=""
                                height={200}
                                width={200}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="info flex flex-col items-center">
                            <div className="name md:text-[30px] text-[25px] font-semibold">{item.fullname}</div>
                            <div className="username text-[18px] font-semibold text-gray">@{item.username}</div>
                            <div className="post text-[18px] font-semibold text-gray">{feeds.length} post</div>
                        </div>
                    </div>
                </div>
                <div className="intro-my-self max-w-[550px] w-full bg-white rounded-xl p-5">
                    <div className="intro font-bold text-2xl pb-5">Intro My Self</div>
                    <div className="text-[1rem]">
                        <div className="email flex items-center gap-3">
                            <IconMailFilled height={30} width={30} />
                            {item.email}
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-feeds max-w-[550px] w-full rounded-xl flex flex-col gap-3">
                <div className="bg-white rounded-xl h-12 text-2xl font-semibold flex items-center pl-3 text-gray">
                    <h1>Posts</h1>
                </div>
                {feeds.map((value, index) => {
                    return (
                        <div className="pb-5">
                            <Feed item={value} key={index} />{' '}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Profile;
