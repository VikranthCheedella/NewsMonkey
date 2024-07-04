import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
            <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-109267966,width-1070,height-580,imgsize-2666905,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{color:"#c5c6c7"}}>{description}</p>
                <p className='card-text' ><small className='' style={{color:"#c5c6c7"}}>By {author? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm">Read more...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
