import className from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ffd8b3510ba203db3d33ff9550119534.jpeg?lk3s=a5d48078&x-expires=1711029600&x-signature=8Ms9TQsCObMrhlTP%2FR58p1sWS4s%3D"
                alt="images"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Tran Văn Tài</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('username')}> tvantai0703</span>
            </div>
        </div>
    );
}

export default AccountItem;
