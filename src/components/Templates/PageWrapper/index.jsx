import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { useQuery } from '@apollo/client';
import { GetAuthor } from '../../../queries';

import PageHeader from '../../Organisms/PageHeader';

import styles from './PageWrapper.module.css';

PageWrapper.propTypes = {
    render: PropTypes.func.isRequirsed,
}

export default function PageWrapper({ render }) {
    const id = localStorage.getItem('userId');

    const { data, loading, error} = useQuery(GetAuthor, {
        variables: {
            id,
        }
    });

    return (
        <React.Fragment>
            <PageHeader username={_.get(data, 'getAuthor.username') ? data.getAuthor.username : ''} />
            <section className={styles.content}>
                {!loading ? render() : 'Loading...'}
                {error && error}
            </section>
        </React.Fragment>
    );
}

