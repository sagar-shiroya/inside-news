import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info text-dark" style={{zIndex: "1", left: "86%"}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">Updated by {author} at {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-info">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
