import className from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-button')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </button>
            <button className={cx('header-title')}>{title}</button>
        </header>
    );
}

export default Header;
