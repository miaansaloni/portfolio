const Home = () => {
  return (
    <main className="homepage">
      <section className="container-left">
        <div className="top-elements">
          <div className="cta-section box">cta-section</div>
          <div className="pic-section box">pic-section</div>
        </div>
        <div className="bottom-elements">
          <div className="desc-section box">desc-section</div>
          <div className="about-section box">
            <a href="./About.jsx">about-section</a>
          </div>
        </div>
      </section>
      <section className="container-right">
        <div className="projects-section box">
          <a href="./Projects.jsx">projects-section</a>
        </div>
        <div className="contacts-section box">
          <a href="./Contact.jsx">contacts-section</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
