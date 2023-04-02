import { BiAngry } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/120045342_2683628228558889_1068762839242087121_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=okcw6jlTrzgAX_3g0de&_nc_oc=AQm7mH_7JC_oANK2eoWyD-EdpMghUjWFo4mHaz8pT6NMrEPa8yQZ4Xwjrf2VEbal1_LLgLsW4dS4HP8eihZmM0Lc&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDdFSl46qkj9SRXXGN5qeyU0sZuTnddbAI1wt898LW0SQ&oe=644F9D70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>
            <section>
                <div className={cx('body')}>
                    <h4 className={cx('nickname')}>
                        <strong>
                            Cldie <AiFillHeart className={cx('icons')} /> TK
                        </strong>
                        <BiAngry className={cx('icon')} />
                    </h4>
                    <p className="Name">Mây Hương </p>
                </div>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8M</strong>
                    <span className={cx('label')}>Following</span>
                    <strong className={cx('value')}>298M</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </section>
        </div>
    );
}
export default AccountPreview;
