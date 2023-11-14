import React, { Component } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
    constructor() {
        super()
        this.state = ({
            currentTime: new Date().toLocaleTimeString(),
        })
    }
    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString(),
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top text-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <img src={logo} alt="" />
                        <Link className="navbar-brand" to="/">NewsElephant</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <Link className="nav-link" to="/business">business</Link>
                                <Link className="nav-link" to="/entertainment">entertainment</Link>
                                <Link className="nav-link" to="/health">health</Link>
                                <Link className="nav-link" to="/science">science</Link>
                                <Link className="nav-link" to="/sports">sports</Link>
                                <Link className="nav-link" to="/technology">technology</Link>
                            </ul>
                            <div className="form-check form-switch px-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.togglemodes} style={{ filter: ' invert(1)', cursor: 'pointer' }} />
                                <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault" >{this.props.modeicons === 'light' ? <i className="fa-solid fa-sun"></i> :  <i className="fa-solid fa-moon"></i>}</label>
                            </div>
                            <form className="d-flex time-res" role="search">
                                <h3 className='mx-3 mb-0 text-warning'>{this.state.currentTime}</h3>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar