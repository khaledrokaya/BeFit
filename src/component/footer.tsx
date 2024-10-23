import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation";
import { IFormInputs } from "../interfaces/inedx";
import { Fragment } from "react/jsx-runtime";

const inputFields = [
  { name: "firstName", type: "text", placeholder: "First Name" },
  { name: "lastName", type: "text", placeholder: "Last Name" },
  { name: "email", type: "email", placeholder: "Your Email" },
  { name: "phone", type: "text", placeholder: "Your Number" },
];

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    alert("Form Submitted Successfully!");
    reset();
  };

  return (
    <section className="register" id="register">
      <h1 className="heading">Register Now</h1>
      <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputBox">
          {inputFields.slice(0, 2).map((field) => (
            <Fragment key={field.name}>
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name as keyof IFormInputs)}
              />
              {errors[field.name as keyof IFormInputs] && (
                <p className="error">
                  {errors[field.name as keyof IFormInputs]?.message}
                </p>
              )}
            </Fragment>
          ))}
        </div>

        <div className="inputBox">
          {inputFields.slice(2).map((field) => (
            <Fragment key={field.name}>
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name as keyof IFormInputs)}
              />
              {errors[field.name as keyof IFormInputs] && (
                <p className="error">
                  {errors[field.name as keyof IFormInputs]?.message}
                </p>
              )}
            </Fragment>
          ))}
        </div>

        <textarea
          placeholder="Message"
          {...register("message")}
        ></textarea>
        {errors.message && <p className="error">{errors.message.message}</p>}

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </section>
  );
};

export default Footer;
