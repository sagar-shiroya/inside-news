import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
    }

    async componentDidMount(){
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30ce4c75df9443afa459b4bf615d9353&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    handlePrevClick = async ()=>{
        console.log("Prev");
        this.setState({loading:true});
        if(this.state.page - 1 > 0){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30ce4c75df9443afa459b4bf615d9353&pageSize=${this.props.pageSize}&page=${this.state.page-1}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData);
            this.setState({articles: parsedData.articles, page: this.state.page - 1,loading: false});
       }
    };

    handleNextClick = async ()=>{
        if(this.state.page + 1 <= Math.ceil(this.state.totalResults/this.props.pageSize)){
            this.setState({loading:true});
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30ce4c75df9443afa459b4bf615d9353&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false});
        }

    };

    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center display-2' style={{margin: '35px 0'}}>InsideNews - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((elements) => {
                        return <div key={elements.url} className="col-md-4">
                        <NewsItem title={elements.title?elements.title:""} description={elements.description?elements.description:""} imageUrl={elements.urlToImage?elements.urlToImage:'https://www.vuelio.com/uk/wp-content/uploads/2019/02/Breaking-News.jpg'} newsUrl={elements.url} author={elements.author?elements.author:'Unknown'} date={elements.publishedAt} source={elements.source.name}/>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-around my-5">
                    <button type="button" disabled={this.state.page<=1?true:false} className="btn btn-outline-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
