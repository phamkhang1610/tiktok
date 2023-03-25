import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);


function Button ({
    to, 
    href,
    rounded=  false , 
    disabled = false, 
    primary = false, 
    outline = false, 
    small = false, 
    large= false,
    text = false,
    className,// dùng để setup css riêng cho buttun 
    leftIcon,
    rightIcon,
    children, 
    onClick,
    ...passProps}) {

    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]:className,
        primary, 
        outline,
        small,
        text,
        disabled,
        rounded,
        leftIcon,
        rightIcon,
        large
    });
    const props = {
        onClick,
        ...passProps
    };
    if(to) {
        props.to = to;
        Comp = Link;
    }else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className = {classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;