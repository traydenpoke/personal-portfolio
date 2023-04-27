import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Trayden. </h2>
        <div className="prompt">
          <p> 
            A software developer with a passion for artificial intelligence and machine learning.
          </p>
          <a href="https://www.linkedin.com/in/traydenboucher/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/traydenpoke" target="_blank">
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
            <h2> Front-End </h2>
            <span>
              stuff!!!!! front
            </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>
              stuff!!! back
            </span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span>
              stuff!!! languages
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home