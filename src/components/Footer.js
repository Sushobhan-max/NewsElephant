import React, { Component } from 'react'
import '../App.css'
export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div>
                       <h2> &copy; all copyright reserved by sushobhan dastidar</h2>
                    </div>
                    <div className="social">
                        <a href="/" target="_blank">Facebook</a>
                        <a href="/" target="_blank">Twitter</a>
                        <a href="/" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/in/sushobhan-dastidar-327590271/" rel="noreferrer" target="_blank">LinkedIn</a>
                    </div>
                    <div style={{margin: '13px 0'}}>
                        <img src="https://media.licdn.com/dms/image/D4D03AQE8LQ3FsrTuzQ/profile-displayphoto-shrink_400_400/0/1696069172457?e=1704326400&v=beta&t=ocUsQkpNWLr-JK6ZZcvLe_LuwrKOAewMzUJCPfWWEc8" alt="..." className="profile-img"/>
                    </div>
                    <div>
                        Mail: sushobhandastidar1@gmail.com
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer