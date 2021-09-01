import React from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { useQuery } from '@apollo/client';
import { GetAuthor } from '../../../queries';

import PageHeader from '../../Organisms/PageHeader';
import SideBar from '../../Organisms/SideBar';

import styles from './PageWrapper.module.css';

PageWrapper.propTypes = {
    render: PropTypes.func.isRequirsed,
}

export default function PageWrapper({ render }) {
    const id = localStorage.getItem('userId');

    const { data, loading } = useQuery(GetAuthor, {
        variables: {
            id,
        }
    });

    return (
        <React.Fragment>
            <PageHeader username={get(data, 'getAuthor.username', '')} />
            <div className={styles.container}>
                <SideBar />
                <section className={styles.content}>
                    {!loading ? render() : 'Loading...'}
                </section>
            </div>
        </React.Fragment>
    );
}

