import classnames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classnames.bind(styles);

function Header() {
     return (
          <div className={cx('wrapper')}>
               <div className={cx('inner')}></div>
          </div>
     );
}

export default Header;
