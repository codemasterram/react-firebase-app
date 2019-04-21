import React, { Component } from 'react';

const divStyle = {
    border: ' 1px solid black',
    margin: '5px'
}

class Article extends Component {
    render() {
        const { title, publishedAt, description, source, url, urlToImage } = this.props.data
        return (
            <div className="col-lg-4 d-flex align-items-stretch">
                <div className="card">
                    <img className="card-img-top img-fluid h-500 w-500" src={urlToImage} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title.length > 20 ? title.substring(0, 100) + "..." : title}</h5>
                        <p className="card-text">{description == null ? "" : (description.length > 700 ? description.substring(0, 700) + "..." : description)}</p>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Source :{source.name === null ? "N/A" : source.name}</li>
                            <li className="list-group-item">{moment(publishedAt).startOf('hour').fromNow()}</li>
                            <li className="list-group-item"><a href={url} target="_blank" className="card-link btn btn-info">Read More</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}

export default Article;