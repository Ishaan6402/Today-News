import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    // handleCountry=key=>{
    //     this.setState({
    //         currCountry:key
    //     })
    //     console.log(key);
    // }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TodayNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT</Link>
                        </li>
                    </ul>
                    {/* <div className="btn-group" style={{marginRight:"4rem"}}>
                            <button type="button" className="btn btn-info">Action</button>
                            <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/" key="in" >India</Link></li> */}
                    {/* <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("ar")}>Argentina</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("br")}>Brazil</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("ca")}>Canada</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("cn")}>China</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("ch")}>Switzerland</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("de")}>Germany</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("ae")}>UAE</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("au")}>Australia</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("jp")}>Japan</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("pt")}>Portugal</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("th")}>Thailand</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("us")}>United States</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("ua")}>Ukraine</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("sg")}>Singapore</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={this.props.setCurrCountry("ru")}>Russia</Link></li> */}
                    {/* </ul> */}
                    {/* </div> */}
                </div>
            </div>
        </nav>
    )
}


export default NavBar