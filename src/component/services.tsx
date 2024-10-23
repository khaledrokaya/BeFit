import { services } from "../data";

const Services = () => {
  return (
    <section className="service" id="service">
      <h1 className="heading">Our Services</h1>
      <div className="box-container">
        {services.map((service) => (
          <div className="box" key={service.id}>
            <img src={service.img} alt={service.title} />
            <div className="info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#">
                <button className="btn">More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
