import { Link } from 'react-router-dom';
export interface UserHandleProps {
    avatar: string;
    fullname: string;
    username: string;
}
interface IProps {
    item: UserHandleProps;
}
const UserHandle = ({ item }: IProps) => {
    return (
        <Link to="dinhcuti" className="flex items-center gap-2 ">
            <div className="avatar rounded-full ">
                <img src={item.avatar} alt="" height={45} width={45} className="rounded-full object-cover" />
            </div>
            <div className="info flex flex-col">
                <div className="name text-[15px] font-semibold">{item.fullname}</div>
                <div className="username text-[13px] font-semibold text-gray">@{item.username}</div>
            </div>
        </Link>
    );
};

export default UserHandle;
