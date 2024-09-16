import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const adjustHomepageHeight = () => {
      const navbarHeight = document.querySelector("nav.navbar").offsetHeight;
      document.querySelector(".homepage").style.height = `calc(100vh - ${navbarHeight}px)`;
    };
    adjustHomepageHeight();

    window.addEventListener("resize", adjustHomepageHeight);
    return () => {
      window.removeEventListener("resize", adjustHomepageHeight);
    };
  }, []);

  return (
    <>
      <main className="homepage">
        <section className="container-left">
          <div className="top-elements">
            <div className="cta-section box">cta-section</div>
            <div className="pic-section box">pic-section</div>
          </div>
          <div className="bottom-elements">
            <div className="desc-section box">desc-section</div>
            <a href="./About.jsx" className="about-section box">
              <div className="boxheading">
                {" "}
                <p>about-section</p>
                <img src="right-up.png" alt="arrow" className="arrowicon" />
              </div>
            </a>
          </div>
        </section>
        <section className="container-right">
          <a href="./Projects.jsx" className="projects-section box">
            <div className="boxheading">
              <p>projects-section</p>
              <img src="right-up.png" alt="arrow" className="arrowicon" />
            </div>
          </a>
          <a href="./Projects.jsx" className="contacts-section box">
            <div className="boxheading">
              <p>contacts-section</p>
              <img src="right-up.png" alt="arrow" className="arrowicon" />
            </div>
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
