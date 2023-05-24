import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer-component">
            <div className="footer">
                <div className="socialMedia">
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
                <p> &copy; 2023 Trayden Boucher</p>
            </div>
        </div>
    );
}

export default Footer;