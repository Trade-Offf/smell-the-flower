import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNews } from '../store/newsSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);

    useEffect(() => {
        // 模拟 API 调用
        const fetchNews = async () => {
            // const response = await fetch('https://api.example.com/news');
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(setNews(data));
        };

        fetchNews();
    }, [dispatch]);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;