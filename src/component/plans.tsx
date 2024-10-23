import { plans } from "../data";

const Plans = () => {
  return (
    <section className="plan" id="plan">
      <h1 className="heading">Membership Plan</h1>
      <div className="box-container">
        {plans.map((plan) => (
          <div className="box" key={plan.id}>
            <h3 className="title">{plan.title}</h3>
            <h3 className="price">
              {plan.price}
              <span>/mo</span>
            </h3>
            <h3 className="month">{plan.duration}</h3>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#">
              <button className="btn">Check Out</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
