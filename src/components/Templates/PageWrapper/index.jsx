import React from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { useQuery } from '@apollo/client';
import { GetAuthor } from '../../../queries';

import PageHeader from '../../Organisms/PageHeader';
import SideBar from '../../Organisms/SideBar';

import styles from './PageWrapper.module.css';

PageWrapper.propTypes = {
    render: PropTypes.func,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            authorId: PropTypes.string,
        }),
    ),
}

export default function PageWrapper({ render = null, notes = [] }) {
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
                <SideBar  notes={notes} />
                <section className={styles.content}>
                    {!loading ? render() : 'Loading...'}
                </section>
            </div>
        </React.Fragment>
    );
}

