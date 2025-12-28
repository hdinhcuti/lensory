import asset from '@/assets';
import type { FeedProps } from '@/components/ui/Feed/Feed';
import { IconDots } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const PhotoDetail = () => {
    // const [searchParams] = useSearchParams();
    // const pid = searchParams.get('pid');
    const feed: FeedProps = {
        id: '1',
        user: {
            avatar: asset.avtDefault,
            fullname: 'Duong Hoang Dinh',
            username: 'dinhcuti1',
        },
        time: 'Friday, November 19, 2021 at 12:12 AM',
        description: 'Copyright: Duong Hoang Dinh',
        image: asset.feed2,
    };

    return (
        <div className="w-full md:h-[900px] h-[950px] md:pt-[100px] flex justify-center">
            <div
                className={`flex ${feed.image ? 'md:flex-row flex-col' : ''} justify-center bg-white ${
                    feed.image ? 'w-[1000px] md:h-[600px] h-[900px]' : 'h-[200px]'
                } `}
            >
                {feed.image && (
                    <div className="image bg-black md:w-[600px] w-full h-full flex justify-center">
                        <img src={feed.image} alt="" className="w-full h-full object-contain" />
                    </div>
                )}
                <div className="md:w-[400px] w-full p-5">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 ">
                            <div className="avatar rounded-2xl ">
                                <Link to={feed.user.username}>
                                    <img
                                        src={feed.user.avatar}
                                        alt=""
                                        height={45}
                                        width={45}
                                        className="rounded-3xl object-cover"
                                    />
                                </Link>
                            </div>
                            <div className="info flex flex-col">
                                <div>
                                    <Link to={feed.user.username} className="name text-[15px] font-semibold">
                                        {feed.user.fullname}
                                    </Link>
                                    <div className="time text-[13px] font-semibold text-gray">{feed.time}</div>
                                </div>
                            </div>
                        </div>
                        <div className="action pr-2 hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.05)] p-2 rounded-3xl">
                            <IconDots width={20} height={20} />
                        </div>
                    </div>

                    <p className="description text-[15px] w-full leading-5 break-words py-3">{feed.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetail;
