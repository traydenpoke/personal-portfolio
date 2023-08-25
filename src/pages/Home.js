import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css';


function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, my name is Trayden. </h2>
                <div className="prompt">
                    <p>
                        A software developer with a passion for artificial intelligence and machine learning.
                    </p>
                    <a href="https://www.linkedin.com/in/traydenboucher/" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/traydenpoke" target="_blank" rel="noreferrer">
                        <GitHubIcon />
                    </a>
                    <a href="mailto:trayden.boucher03@gmail.com">
                        <EmailIcon />
                    </a>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Languages </h2>
                        <span>
                            Java, Python, C/C++, HTML/CSS, JavaScript, SQL, Bash
                        </span>
                    </li>
                    <li className="item">
                        <h2> Technologies </h2>
                        <span>
                            React, Git, MySQL, SQLite
                        </span>
                    </li>
                    <li className="item">
                        <h2 > Developer Tools </h2>
                        <span>
                            GitHub, Visual Studio
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;