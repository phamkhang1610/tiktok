import classNames from "classnames/bind";

import { BiAngry } from 'react-icons/bi';
import Images from '~/components/Images';
import styles from './Accountitem.module.scss';

const cx = classNames.bind(styles);

function Accountitem ({data}) {
    console.log(data);

    return (
        <div className={cx('wrapper')}>
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
        </div>
    );

}

export default Accountitem;