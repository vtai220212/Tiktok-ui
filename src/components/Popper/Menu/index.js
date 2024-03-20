import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import className from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = className.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item}></MenuItem>;
        });
    };

    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper', className)}>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
