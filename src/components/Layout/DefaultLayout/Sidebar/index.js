import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classnames.bind(styles);

function Sidebar() {
     return (
          <aside className={cx('wrapper')}>
               <div className={cx('content')}>
                    <h2>Sidebar</h2>
               </div>
          </aside>
     );
}

export default Sidebar;
