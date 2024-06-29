import React from 'react';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.bookstorecontainer}>
            <div className={styles.textbox}>
                <p>서울시 모든 책방 정보를 알려드려요</p>
                <nav>
                    <a className={styles.button} href="/storesearch">
                        서점 둘러보기
                    </a>
                    <a className={styles.button} href="/about">
                        이용 안내
                    </a>
                </nav>
            </div>
            <div className={styles.triangleBackground}></div>
        </div>
    );
};

export default Main;
