import { trainers } from "../data";

const Trainers = () => {
  return (
    <section className="trainer" id="trainer">
      <h1 className="heading">Our Trainers</h1>
      <div className="box-container">
        {trainers.map((trainer) => (
          <div className="box" key={trainer.id}>
            <img src={trainer.img} alt={trainer.name} />
            <div className="info">
              <h3>{trainer.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
