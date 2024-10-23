const About = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="image">
          <img src="./src/images/about.jpg" alt="" />
        </div>
        <div className="content">
          <h3>a word about us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, illo saepe! Magnam, unde explicabo amet perferendis voluptate distinctio facilis quae ipsa quas! Officiis veritatis aut est vero id, debitis pariatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, soluta laboriosam. Laborum aspernatur laboriosam deserunt cupiditate laudantium illum commodi. Vero.</p>
          <a href="#"><button className="btn">learn more</button></a>
        </div>
      </div>
    </section>
  );
};

export default About;