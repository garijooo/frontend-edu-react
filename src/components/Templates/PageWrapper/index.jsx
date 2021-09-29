import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { get } from 'lodash'
import cx from 'classnames'

import PageHeader from '../../Organisms/PageHeader'
import Navbar from '../../Organisms/Navbar/Navbar'

import { GetAuthor } from '../../../queries'

import styles from './PageWrapper.module.css'

PageWrapper.propTypes = {
    render: PropTypes.func,
}

export default function PageWrapper({ render = null }) {
    const id = localStorage.getItem('userId')

    const [isOpened, setIsOpened] = useState(true)
    const [displayMode, setDisplayMode] = useState('list')
    
    const [pageTitle, setPageTitle] = useState('Notes')


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
                pageTitle={pageTitle}
            />
            <div className={styles.container}>
                <Navbar
                    isOpened={isOpened}
                    onPageTitleChange={(value) => setPageTitle(value)}
                />
                <section className={cx(styles.content, {[styles.hidden]: !isOpened})}>
                    {!loading ? render() : 'Loading...'}
                </section>
            </div>
        </React.Fragment>
    );
}

