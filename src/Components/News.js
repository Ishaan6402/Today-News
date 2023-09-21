import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [pageSize, setPageSize] = useState(8);
    const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API);

    useEffect(() => {
        async function fetchMyApi() {
            props.setProgres(0);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            props.setProgres(40);
            let parsedData = await data.json();
            let totalPageToRender = Math.ceil(parsedData.totalResults / pageSize);
            props.setProgres(70);
            setArticles(parsedData.articles);
            setTotalPage(totalPageToRender);
            setLoading(false);
            props.setProgres(100);
        }
        fetchMyApi();
    }, [])

    const handleNext = async () => {
        props.setProgres(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgres(40);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        props.setProgres(70);
        setPage(page + 1);
        props.setProgres(100);
    }

    const handlePrevious = async () => {
        props.setProgres(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page - 1}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgres(40);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        props.setProgres(70);
        setPage(page - 1);
        props.setProgres(100);
    }

    const handlePageSize = async () => {
        props.setProgres(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgres(40);
        let parsedData = await data.json();
        let totalPageToRender = Math.ceil(parsedData.totalResults / pageSize);
        props.setProgres(70);
        setArticles(parsedData.articles);
        setTotalPage(totalPageToRender);
        setLoading(false);
        props.setProgres(100);
    }

    return (
        <>
            <div className='container my-3'>
                <div className="heading-container d-flex justify-content-center">
                    <div className="news-main-title" style={{marginTop:"3rem"}}>
                        <h1>TodayNews - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Top Headlines</h1>
                    </div>
                </div>
                <div className="container page-size-value d-flex justify-content-center" style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="">Number Of News Per Page : </label>
                    <input style={{ marginLeft: "1rem", height: "2.2rem" ,textAlign:"center"}} type="number" min={0} max={20} value={pageSize} onChange={(e) => setPageSize(e.target.value)} />
                    <button type="button" className="btn btn-success" onClick={handlePageSize} style={{ marginLeft: "1rem" }}>GO</button>
                </div>
                {loading && <div className='heading-loader d-flex justify-content-center'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="row">
                    {!loading &&
                        articles.map((element) => {
                            return <div className="col-md-3 my-3" key={element.url} >
                                <NewsItem title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author ? element.author : 'UnKnown'} date={element.publishedAt.slice(0, 10)} />
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-success my-3" onClick={handlePrevious}>&laquo; Previous</button>
                <button disabled={page === totalPage} type="button" className="btn btn-success  my-3" onClick={handleNext}>Next &raquo;</button>
            </div>
        </>
    )
}


export default News