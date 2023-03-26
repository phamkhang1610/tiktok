import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { BiAngry } from 'react-icons/bi';
import Images from '~/components/Images';
import styles from './Accountitem.module.scss';

const cx = classNames.bind(styles);

function Accountitem ({data}) {

    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images 
            className={cx('avatar')} 
            src={data.avatar}
            alt = "hoa"
            />
            <div className={cx('info')}>
                <h4 className ={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <BiAngry className={cx('check')} />}

                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );

}

export default Accountitem;