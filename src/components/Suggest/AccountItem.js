import classNames from 'classnames/bind';
//import PropTypes from 'prop-types';
import { BiAngry } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import Tippy from '@tippyjs/react/headless';

import styles from './Suggest.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                visible
                interactive // để tương tác được với component bên trong
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/120045342_2683628228558889_1068762839242087121_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=okcw6jlTrzgAX_3g0de&_nc_oc=AQm7mH_7JC_oANK2eoWyD-EdpMghUjWFo4mHaz8pT6NMrEPa8yQZ4Xwjrf2VEbal1_LLgLsW4dS4HP8eihZmM0Lc&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDdFSl46qkj9SRXXGN5qeyU0sZuTnddbAI1wt898LW0SQ&oe=644F9D70"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>
                                Cldie <AiFillHeart className={cx('icons')} /> TK
                            </strong>
                            <BiAngry className={cx('icon')} />
                        </h4>
                        <p className="Name">Mây Hương </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

//AccountItem.propTypes = {};
export default AccountItem;
