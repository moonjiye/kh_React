import styled from 'styled-components';
import NewsItem from './NewsItems';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1em;
        padding-right:1em;
    }
`;

const NewsList = ({ category }) => {
    const [articles, setArticle] = useState(null);
    const [loading, setLoading] = useState(false);

    // 두개의 매개변수(콜백함수,ㅡ 의존성 배열) 사용이 됨.
    useEffect (() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === "all" ? "all" : `category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=d6d073e8b21c4a099970c7a83592bc31`);
                if(response.data.status === "ok") setArticle(response.data.articles);
            } catch (e) {
                console.log(e);   
            }
            setLoading(false);
        };
        // 실제 동작하는 부분을 호출부가 있어여함
        fetchData();
    }, [category]);
    if(loading) {
        return <Loading />
    }
    return (
        <NewsListBlock>
            { articles && articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};
export default NewsList;