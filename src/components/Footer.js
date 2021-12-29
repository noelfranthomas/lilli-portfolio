import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

import {
  footerStyle,
  copyright,
  links,
  blurb,
  title,
  icons,
  icon,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

import { Instagram, Mail, MessageSquare } from "react-feather"
import { CustomOrder } from "./customOrder";

const Footer = class extends React.Component {
  render() {
    return (
      <div>
      <footer className={footerStyle}>
        <div className={blurb}>
          <Link to="/" className={title}>
            Lilli's
          </Link>
          
          <em>"Mission Statement"</em>

          <br />
        </div>
        <CustomOrder />
          <br />

          <div className={icons}>
            <a
              className={icon}
              href={`https://www.instagram.com/lilli.bea/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a className={icon} href={`mailto:lillisartstore@gmail.com`}>
              <Mail />
            </a>
            <Link className={icon} to="/contact/">
            <MessageSquare />
          </Link>
            
          </div>

      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="https://www.aert.ca">
              made with aert.
            </a>
          </li>
        </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  </div>
    );
  }
};

export default Footer;
