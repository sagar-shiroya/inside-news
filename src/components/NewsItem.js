import React, { Component } from 'react'
import '../App.css';

export class NewsItem extends Component {
    render() {
        let {title,description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right: '0'}}>
                        <span className="badge rounded-pill" style={{backgroundColor: '#00203FFF', color:'#ADEFD1FF'}}>
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">Updated by {author} at {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm " style={{backgroundColor: '#00203FFF', color:'#ADEFD1FF'}}>Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
