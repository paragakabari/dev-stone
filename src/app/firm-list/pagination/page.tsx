import React from 'react'
import styles from "./pagination.module.scss";
import classNames from 'classnames';
export default function Pagination() {
    return (
        <div className={styles.paginationSection}>
            <div className={classNames(styles.paginationBOx, styles.activePagination)}>
                <p>1</p>
            </div>
            <div className={styles.paginationBOx}>

                <p>2</p>
            </div>
            <div className={styles.paginationBOx}>

                <p>3</p>
            </div>
            <div className={styles.paginationBOx}>

                <p>4</p>
            </div>
            <div className={styles.paginationBOx}>
                <p>5</p>
            </div>
        </div >
    )
}
