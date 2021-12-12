import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=30ce4c75df9443afa459b4bf615d9353';
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3">
                <h2>InsideNews - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((elements) => {
                        return <div key={elements.url} className="col">
                        <NewsItem title={elements.title?elements.title:""} description={elements.description?elements.description:""} imageUrl={elements.urlToImage?elements.urlToImage:'https://www.vuelio.com/uk/wp-content/uploads/2019/02/Breaking-News.jpg'} newsUrl={elements.url} />
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
