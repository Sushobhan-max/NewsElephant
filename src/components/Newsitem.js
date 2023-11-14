import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, image, url, author } = this.props //javascript destructuring method where it take the props and make available by the given props names
        return (
            <div className='my-4'>
                <div className="card" style={{ maxHeight: '36rem', background: 'linear-gradient(45deg, rgb(255 253 245), rgb(255 235 235' }}>
                    <div style={{
                        display: 'flex',
                        position: 'absolute',
                        right: 0
                    }}>
                        <span className=" badge rounded-pill bg-danger" >
                            {this.props.source}
                        </span>
                    </div>
                    <img src={image} className="card-img-top" alt="img link is not valid" />
                    <div className="card-body">
                        <h5 className="card-title">{title}&nbsp;<span className="badge rounded-pill text-bg-secondary">New</span></h5>
                        <p className="card-text">{description}...</p>
                        <p style={{ fontSize: '0.9rem' }}><b>Author:</b> {author ? author : 'Author Unknown'}<br /><b>Date: </b>{new Date(this.props.date).toGMTString()}</p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-warning btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem