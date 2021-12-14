import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - InsideNews`;
    }

    capitalizeFirstLetter = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async updateNews(){
        this.setState({loading:true});
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsApiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false});
        this.props.setProgress(100);
    }

    componentDidUpdate(){
        console.log('News Component Updated!')
    }

    componentWillUnmount(){
        console.log('News Component Died!')
    }

    async componentDidMount(){
        console.log('News Component has created!')
        this.updateNews();
    }

    handlePrevClick = async ()=>{
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    };

    handleNextClick = async ()=>{
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    };

    fetchMoreData = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newsApiKey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: this.state.page + 1
            });
    }

    render() {
        return (
            <>
                <h1 className='text-center display-2' style={{margin: '35px 0', color: '#00203FFF'}}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {console.log('Render method called.')}
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                <div className="container">
                    <div className='row'>
                        {this.state.articles.map((elements) => {
                            return <div key={elements.url} className="col-md-4">
                            <NewsItem title={elements.title?elements.title:""} description={elements.description?elements.description:""} imageUrl={elements.urlToImage?elements.urlToImage:'https://www.vuelio.com/uk/wp-content/uploads/2019/02/Breaking-News.jpg'} newsUrl={elements.url} author={elements.author?elements.author:'Unknown'} date={elements.publishedAt} source={elements.source.name}/>
                            </div>
                        })}
                    </div>
                </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
