import React, { Component } from 'react';

export class NewsItem extends Component {
    constructor()
    {
        super();
        console.log("Hello i am a constructor");
        this.state={
            articles:this.articles,
            loading:false,
        }
    }
  render() {
    let  { title, description, imageUrl, url} = this.props;

    return (
      <div>
        <div className="card" >
          <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1jlk-qeZ1ivqCgMY5Ru6rgVms1gm9TGcqQ&s":imageUrl} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-sm btn-primary" target="_blank">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
