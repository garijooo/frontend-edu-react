import React from 'react';
import PropTypes from 'prop-types';

import PageHeader from '../../Organisms/PageHeader';

import styles from './PageWrapper.module.css';

PageWrapper.propTypes = {
    render: PropTypes.func.isRequired,
    author: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
}

export default function PageWrapper({ render, author, loading }) {

    return (
        <React.Fragment>
            <PageHeader username={author ? author.username : ''} />
            <section className={styles.content}>
                {!loading ? render() : 'Loading...'}
            </section>
        </React.Fragment>
    );
}

