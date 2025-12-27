import asset from '@/assets';
import Feed, { type FeedProps } from '@/components/ui/Feed/Feed';
import type { UserHandleProps } from '@/components/UserHandle/UserHandle';
import UserHandle from '@/components/UserHandle/UserHandle';
const Home = () => {
    const info: UserHandleProps = {
        avatar: asset.avtDefault,
        fullname: 'Duong Hoang Dinh',
        username: 'dinhcuti',
    };

    const suggestions: UserHandleProps[] = [
        {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh 1',
            username: 'dinhcuti1',
        },
        {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh 2',
            username: 'dinhcuti2',
        },
        {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh 3',
            username: 'dinhcuti3',
        },
    ];

    const feeds: FeedProps[] = [
        {
            id: '1',
            user: {
                avatar: asset.avtDefault,
                fullname: 'Duong Hoang Dinh',
                username: 'dinhcuti',
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
    ];

    return (
        <div className="flex justify-center gap-5 md:px-0 px-5">
            <div className="feed md:w-[550px] w-full min-h-[1000px] h-full rounded-xl gap-4">
                {feeds.map((value, index) => {
                    return (
                        <div className="pb-5">
                            <Feed item={value} key={index} />{' '}
                        </div>
                    );
                })}
            </div>
            <div className="sidebar hidden lg:block w-[250px] h-max fixed top-[80px] right-[calc(50%-550px)] bg-white p-3 rounded-xl">
                <div className="my-info">
                    <UserHandle item={info} />
                </div>
                <div className="suggestions">
                    <div className="py-3 text-[15px] font-semibold text-[#606770]">Suggestions For You</div>
                    <div className="flex flex-col gap-3">
                        {suggestions.map((value, index) => {
                            return <UserHandle item={value} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
