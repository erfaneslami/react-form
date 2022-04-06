import { useEffect } from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit, formState, setFocus } = useForm({
    mode: "onBlur",
    defaultValues: {
      "full-name": "",
      email: "",
      password: "",
    },
  });
  const { errors, touchedFields } = formState;

  const submitHandler = (data) => {
    console.log(data);
  };

  console.log(touchedFields["full-name"]);

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="name">full name</label>
        <input
          type="text"
          id="name"
          {...register("full-name", {
            required: "please enter your name",
          })}
        />
        {touchedFields["full-name"] && errors["full-name"] && (
          <p>{errors["full-name"].message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "please enter your email",
            // validate: isValidEmail,
            pattern: {
              value: emailPattern,
              message: "please enter Valid email",
            },
          })}
        />
        {errors["email"] && <p>{errors["email"].message}</p>}
      </div>
      <div>
        <label htmlFor="pass">password</label>
        <input
          type="password"
          id="pass"
          {...register("password", {
            required: "please enter your password",
            minLength: { value: 6, message: "must be grater than 6" },
          })}
        />
        {errors["password"] && <p>{errors["password"].message}</p>}
      </div>
      <button type="submit">check</button>
    </form>
  );
};

export default MyForm;
