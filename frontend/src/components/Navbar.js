import React from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component{
    render() {
        return(
            <div className = "navbar">
                <ul className = "Pages">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        )
    }
}