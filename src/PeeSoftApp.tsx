import React, {useState} from 'react';
import './PeeSoftApp.scss';
import {AboutPeeSoft} from "./pages/aboutPeeSoft/AboutPeeSoft";
import {ContactUs} from "./pages/contactUs/ContactUs";
import {SitePages} from "./types/SitePages";
import {LogoField} from "./modules/logo/LogoField";
import Logo from "./../src/images/logo.png";
import {Header} from "./modules/header/Header";
import {Link} from "react-router-dom";

function PeeSoftApp() {
  const [currentPage, setCurrentPage] = useState<SitePages>("homePage");

  // setCurrentPage to the page the user has selected which MUST be one of the SitePages type as well as the button id.
  const handlePageNavigation = (e: any) => {
    const target = e.target;
    setCurrentPage(target.id);
  }

  return (
    <div className="peeSoft-app">
      <header className={"header-section"}>
          <div className={"logo-section"}>
              <LogoField className={"format-logo-img"} label={"PeeSoft"} src={Logo} onClick={() => setCurrentPage('homePage')} />
          </div>
          <div className={"align-header-menu"}>
              <Header onClick={handlePageNavigation} />
              <span className={"register-login"}>
                  <a href={"/register"} onClick={() => setCurrentPage('user-registration')}>Register</a> | <a href={"/login"}>Login</a>
                  | <a href={"/interest-rate"} onClick={() => setCurrentPage('interest-rate')}>Calculate Interest Rate</a>
              </span>
          </div>
      </header>
      <div>
          {currentPage === "homePage" &&
              <div className={"peeSoft-homePage"}>
                  <p>Welcome to PeeSoft where everyone is secured!</p>
              </div>
          }
          {currentPage === "servicePage" &&
              <div className={"peeSoft-servicePage"}>
                  <p>Services we offer!</p>
              </div>
          }
          {currentPage === "careerPage" &&
              <div className={"peeSoft-careerPage"}>
                  <p>Thank you for wanting to work with PeeSoft</p>
              </div>
          }
          {currentPage === "contactPage" &&
              <div className={"peeSoft-contactPage"}>
                  <p>Contact us</p>
                  <ContactUs />
              </div>
          }
          {currentPage === "aboutPage" &&
              <div className={"peeSoft-aboutPage"}>
                  <p>About PeeSoft</p>
                  <AboutPeeSoft />
              </div>
          }
          {currentPage === "user-registration" &&
              <Link to={"register"} />
          }

          {currentPage === "interest-rate" &&
              <Link to={"interest-rate"} />
          }
      </div>
    </div>
  );
}

export default PeeSoftApp;
