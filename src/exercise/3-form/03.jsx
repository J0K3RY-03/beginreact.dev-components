import {useState } from 'react';
import { useForm } from 'react-hook-form';
const UserForm = ({ onSubmitUser }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit(onSubmitUser)}>
      <label htmlFor="name">
        Name
        <input id="name" type="text" {...register("name", {
          required: "Pseudo requis",
          minLength: {
            value: 3,
            message: 'Le pseudo doit avoir au moins 3 caractères'
          }
        })}/>
      </label>
      {errors.name ? <p style={{color: 'red'}}>{errors.name.message}</p> : null}
      <label htmlFor="password">
        Password
        <input id="password" type="password" {...register("password", {
          required: "Mot de passe requis",
          minLength: {
            value: 8,
            message: "Le mot de passe doit au moins faire 8 caractères"
          }
        })} />
      </label>
      {errors.password ? <p style={{color: 'red'}}>{errors.password.message}</p> : null}
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
