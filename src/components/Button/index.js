import className from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
}) {
    let Components = 'button';

    const props = {
        onClick,
    };

    if (to) {
        Components = Link;
        props.to = to;
    } else if (href) {
        Components = 'a';
        props.href = href;
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });

    return (
        <Components className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Components>
    );
}

export default Button;
