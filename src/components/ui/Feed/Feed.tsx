import iconAsset from '@/assets';
import type { UserHandleProps } from '@/components/UserHandle/UserHandle';
import { IconDots } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export interface FeedProps {
    id: string;
    user: UserHandleProps;
    time: string;
    description: string;
    image: string;
}

interface IProps {
    item: FeedProps;
}

const Feed = ({ item }: IProps) => {
    return (
        <div className="bg-white max-w-full rounded-xl ">
            <div className="header-feed flex justify-between items-center pt-3 px-3">
                <div className="flex items-center gap-2 ">
                    <div className="avatar rounded-2xl ">
                        <Link to={item.user.username}>
                            <img
                                src={item.user.avatar}
                                alt=""
                                height={45}
                                width={45}
                                className="rounded-3xl object-cover"
                            />
                        </Link>
                    </div>
                    <div className="info flex flex-col">
                        <Link to={item.user.username} className="name text-[15px] font-semibold">
                            {item.user.fullname}
                        </Link>
                        <div className="time text-[13px] font-semibold text-[#606770]">{item.time}</div>
                    </div>
                </div>
                <div className="action pr-2 hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.05)] p-2 rounded-3xl">
                    <IconDots width={20} height={20} />
                </div>
            </div>
            <div className="content-feed w-full pb-5">
                <p className="description text-[15px] w-full leading-5 break-words p-3">{item.description}</p>
                <div>
                    <a href={`/post/?pid=${item.id}`}>
                        <img src={iconAsset.feed1} alt="" className="w-full h-full object-cover" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Feed;
