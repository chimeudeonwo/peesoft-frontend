import React, {useState} from 'react';
import './PeeSoftApp.scss';
import {AboutPeeSoft} from "./pages/aboutPeeSoft/AboutPeeSoft";
import {ContactUs} from "./pages/contactUs/ContactUs";
import {SitePages} from "./types/SitePages";
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
        <Header onClick={handlePageNavigation} />

        <div className={"content-wrapper"}>
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
                  <ContactUs />
              </div>
          }
          {currentPage === "aboutPage" &&
              <div className={"peeSoft-aboutPage"}>
                  <AboutPeeSoft />
              </div>
          }
          {currentPage === "userRegistrationPage" &&
              <Link to={"register"} />
          }

          {currentPage === "interestRatePage" &&
              <Link to={"interestRatePage"} />
          }
      </div>
    </div>
  );
}

export default PeeSoftApp;
