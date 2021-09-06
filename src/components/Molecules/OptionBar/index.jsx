import React, { useState } from 'react';
import cx from 'classnames';

import { BsFilterLeft, BsThreeDotsVertical } from 'react-icons/bs';

import { DEFAULT_ICON_SIZE } from '../../../constants';

import styles from './OptionBar.module.css';

export default function OptionBar() {
    const [isOpened, setIsOpened] = useState(false);
    const iconClass = cx(styles.icon, {
        [styles.active]: isOpened,
    });

    const onFilterHandler = () => {
        console.log('filtered!');
    }

    return (
        <div className={styles.optionBar}>
            <button 
                type="button"
                onClick={onFilterHandler}
                className={styles.filter}
            >
                <BsFilterLeft 
                    className={styles.icon}
                    size={DEFAULT_ICON_SIZE}
                />
            </button>
            <button 
                type="button"
                onClick={() => setIsOpened(!isOpened)}
                className={styles.options}
            >
                <BsThreeDotsVertical 
                    className={iconClass}
                    size={DEFAULT_ICON_SIZE}
            />
            </button>
        </div>
    );
}