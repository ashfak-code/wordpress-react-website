import React from "react";
import { faHeart, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImage from "../../assets/images/divider_1.png";
import captain from "../../assets/images/small_cap.png";
import "./Footer.css";
import SocialItems, { FooterItemList } from "./FooterItems";

function Footer() {
  return (
    <>
      {/*  <div className="footer_divider"><img src={footerImage} /></div> */}
      <footer>
        <div className="footer_navigation">
          <div className="fn__1">
            <div className="footer__socialIcon">
              {SocialItems.map((icon, index) => {
                return (
                  <a href={icon.url} key={index} className={icon.cName}>
                    <FontAwesomeIcon icon={icon.icon} />
                  </a>
                );
              })}
            </div>
            <p>
              715, Swastik Disa Corporate Park, Opp. Shreyas Cinemas, LBS Rd,
              Nityanand Nagar, Ghatkopar West, Mumbai 400086.
            </p>
          </div>
          <div className="fn__2">
            <ul className="fn_2_ul">
              {FooterItemList.map((item, index) => {
                return (
                  <li className="fn_2__li" key={index}>
                    <a href={item.url} className={item.cName}>
                      <FontAwesomeIcon icon={item.icon} />
                      <span className="fn_2_li_span">{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="fn__3">
              <h3 className="fn_3_h3">Get News In Your Inbox</h3>
              <form className="fn_3_form">
                <input placeholder="Enter Your Email" type="text" className="fn_3_txt"/>
                <button type="submit" className="fn_3_btn"><span  className="fn_3_subIcon"><FontAwesomeIcon icon={faSignInAlt}/></span><span className="fn_3_submit">Subscribe</span></button>
              </form>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer_llp">© 2020 CaptainWeb LLP</p>
          <p className="footer_mwl">
            made with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#ed3d37", padding: "0 10px" }}
              className="faHeart"
            />{" "}
            by{" "}
            <a href="#" className="cw">
              <img className="footer_captain__logo" src={captain} />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
