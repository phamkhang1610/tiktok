import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { MdOutlineArrowBackIosNew } from"react-icons/md"

const cx = classNames.bind(styles);


function Header ({title, onBack}) {

    return(
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <MdOutlineArrowBackIosNew />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}
export default Header;