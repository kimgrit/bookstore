import React, { useState } from 'react';
import areas from './areas.json'; // areas.json 파일 import
import styles from './StoreSearch.module.css'; // Import CSS module

const StoreSearch = () => {
    const [category1, setCategory1] = useState(Object.keys(areas)[0]); // 카테고리 초기값 설정_지역
    const [category2, setCategory2] = useState('bookstoreTypes'); // 카테고리 초기값 설정_새헌책방
    const [selectedArea, setSelectedArea] = useState(''); // 세부초기값 Null
    const [selectedType, setSelectedType] = useState(''); // 세부초기값 Null
    const [bookstore, setBookstore] = useState([]);

    const bookstoreTypes = ['새책방', '헌책방']; // 서점 종류 데이터

    const handleSearch = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `http://openapi.seoul.go.kr:8088/${apiKey}/json/TbSlibBookstoreInfo/1/700/`;
        const response = await fetch(url);
        const data = await response.json();

        // console.log(data); // 데이터를 확인하기 위한 출력
        // // console.log(selectedArea); // 사용자가 선택한 지역을 출력
        // // console.log(selectedType); // 사용자가 선택한 서점 종류를 출력

        if (data.TbSlibBookstoreInfo && data.TbSlibBookstoreInfo.row) {
            const filteredData = data.TbSlibBookstoreInfo.row.filter((store) => {
                const storeTypeName = store.STORE_TYPE_NAME.trim().toLowerCase();
                const selectedTypeTrimmed = selectedType.trim().toLowerCase();
                // console.log(store.CODE_VALUE); // 서점의 종류를 출력
                // console.log(store.STORE_TYPE_NAME); // 서점의 종류를 출력
                return (
                    (!selectedArea || store.CODE_VALUE === selectedArea) &&
                    (!selectedTypeTrimmed || storeTypeName === selectedTypeTrimmed)
                );
            });
            setBookstore(filteredData);
            // console.log(filteredData);
        } else {
            setBookstore([]);
        }
    };

    return (
        <div className={styles.container}>
            <span>책방 정보</span>
            <div className={styles.searchbox}>
                <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                    <option value="">전체</option>
                    {areas[category1].map((area, index) => (
                        <option key={index} value={area}>
                            {area}
                        </option>
                    ))}
                </select>
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="">전체</option>
                    {bookstoreTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <button onClick={handleSearch}>검색</button>
            </div>
            <h2>총 {bookstore.length}개의 서점이 검색되었습니다.</h2>
            <div className={styles.booklist}>
                {bookstore.map((store, index) => (
                    <div key={index} className={styles.bookstoreinfo}>
                        <h3>{store.STORE_NAME}</h3>
                        <p>시/도: {store.CODE_VALUE}</p>
                        <p>주소: {store.ADRES}</p>
                        <p>새/헌책방: {store.STORE_TYPE_NAME}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreSearch;
