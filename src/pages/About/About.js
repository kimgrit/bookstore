import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1>이용안내</h1>
            <ul className={styles.textbox}>
                <li>
                    <h3>
                        해당 사이트는 서울시 공공데이터를 활용하여 서울시 곳곳에 위치하고 있는 서점 책방의 정보를
                        제공하고 있어요.
                        <br /> 책을 좋아하는, 서점을 좋아하는 당신을 위하여 만들어진 책-갈피 사이트는 당신이 책을 즐기기
                        위해서 어디로 가야 할 지 갈피를 잡을 수 있도록 도와줍니다.
                    </h3>
                </li>
                <li>
                    <h3>추후 업데이트 (희망) 사항은 다음과 같아요.</h3>
                    <ul>
                        <p>1. 구글 지도 openapi를 활용하여 내 위치를 기준으로 거리순 서점 정렬 기능 추가</p>
                    </ul>
                    <ul>
                        <p>
                            2. 로그인/로그아웃 기능을 추가하여 '나의 책갈피' 페이지를 생성해 본인의 북마크 된 서점
                            모아보는 기능 추가
                        </p>
                    </ul>
                    <ul>
                        <p>3. 서점 이름을 검색했을 때 해당 이름이 포함된 서점 리스트 출력 기능 추가 </p>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default About;
