import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

//import in
import styles from './Suggest.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function Suggest({ label, add }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>{add}</p>
        </div>
    );
}

Suggest.propTypes = {
    label: PropTypes.string.isRequired,
};
export default Suggest;
