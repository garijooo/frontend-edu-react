import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { useQuery } from '@apollo/client';
import { GetAuthor } from '../../../queries';

import PageHeader from '../../Organisms/PageHeader';
import Navbar from '../../Organisms/Navbar';

import styles from './PageWrapper.module.css';

PageWrapper.propTypes = {
    render: PropTypes.func,
}

export default function PageWrapper({ render = null }) {
    const id = localStorage.getItem('userId');

    const [isOpened, setIsOpened] = useState(true)
    const [displayMode, setDisplayMode] = useState('list')
    
    const onToggleHandler = () => setIsOpened(!isOpened)
    const onDisplayModeChangeHandler = (value) => setDisplayMode(value)
    

    const { data, loading } = useQuery(GetAuthor, {
        variables: {
            id,
        }
    });

    return (
        <React.Fragment>
            <PageHeader 
                username={get(data, 'getAuthor.username', '')} 
                onToggle={onToggleHandler}
                onDisplayModeChange={onDisplayModeChangeHandler}
                displayMode={displayMode}
            />
            <div className={styles.container}>
                <Navbar />
                <section className={styles.content}>
                    {!loading ? render() : 'Loading...'}
                </section>
            </div>
        </React.Fragment>
    );
}

