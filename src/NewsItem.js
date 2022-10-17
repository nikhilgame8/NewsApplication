import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export class NewsItem extends Component{
    render(){
        let {title, description, imageUrl, newsUrl, author, date, source}=this.props;
    return(
      <Card style={{ width: '18rem', marginTop: '15px' }}>
      <Card.Img variant="top" src={!imageUrl?"https://c.ndtvimg.com/2022-10/0ctfdk4g_salman-khan_625x300_09_October_22.jpg": imageUrl} />
      <Card.Body>
      <Badge bg="secondary">{source}</Badge>
        <Card.Title>{title}...</Card.Title>
        <Card.Text>{description}...<small><br></br>By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small>
        </Card.Text>
        <Button className="btn-sm" variant="dark" href={newsUrl} target="_blank">Read more</Button>
      </Card.Body>
    </Card>
    )
    }
}
export default NewsItem;