import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsItem from './NewsItem'
import Button from 'react-bootstrap/Button';
import Spinner from './Spinner'


const News = (prop) => {
    const [articles, setArticles]=useState([]);
    const [loading, setLoad]=useState(false);
    const [page, setPage]=useState(2);
    const [totalArticles, setTotalArticles]=useState();
      useEffect(()=>{
      (async ()=>{
        setLoad(true);
        let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${prop.country}&category=${prop.category}&apiKey=5d5095b8873440688235224ebd306cf3&page=1&pageSize=${prop.pageSize}`);
        let result= await response.json();
        setArticles(result.articles)
        setTotalArticles(result.totalResults)
        setLoad(false)
      })();
      }, [])
      const handlePrevPage = async ()=>{
        setLoad(true)
        let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${prop.country}&category=${prop.category}&apiKey=5d5095b8873440688235224ebd306cf3&page=${page}&pageSize=${prop.pageSize}`);
        let result= await response.json();
        setArticles(result.articles)
        setPage(page-1);
        setLoad(false)
      }
      const handleNextPage= async()=>{
        if(page>(Math.ceil(totalArticles/prop.pageSize)-1)){

        }else{
          setLoad(true)
        let response= await fetch(`https://newsapi.org/v2/top-headlines?country=${prop.country}&category=${prop.category}&apiKey=5d5095b8873440688235224ebd306cf3&page=${page}&pageSize=${prop.pageSize}`);
        let result= await response.json();
        setArticles(result.articles)
        setPage(page+1);
      setLoad(false)}
      }
  return (
    <Container>
    <Row>
      <h1 style={{margin: '40px 0px;'}}>GCG News - Top Headlines</h1>
      {loading && <Spinner />}
      
      {
        !loading && articles.map((element, i)=>
        <Col key={i}><NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88): ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </Col>
        )
      }
      </Row>
      <div className="container d-flex justify-content-between">
      <Button disabled={page<=1} variant="outline-dark" onClick={handlePrevPage}>&larr; Prev</Button>
      <Button disabled={page>(Math.ceil(totalArticles/prop.pageSize)-1)} variant="outline-dark" onClick={handleNextPage}>Next &rarr;</Button>
      </div>
    </Container>
  )
}

export default News
