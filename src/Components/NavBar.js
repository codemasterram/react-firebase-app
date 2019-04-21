import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                <a className="navbar-brand" href="#">Logo</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;