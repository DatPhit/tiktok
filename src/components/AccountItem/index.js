import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1663218051966977~c5_300x300.webp?x-expires=1680249600&x-signature=H0TQjEqVIE3k3r1s9uW0849uYNo%3D"
                alt="Dat"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Dang Quang Dat</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Dangquangdat</span>
            </div>
        </div>
    );
}

export default AccountItem;
