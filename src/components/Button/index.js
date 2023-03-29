import styles from './Button.module.scss';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Button({
    to,
    href,
    children,
    onClick,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disable = false,
    leftIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disable,
        leftIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
