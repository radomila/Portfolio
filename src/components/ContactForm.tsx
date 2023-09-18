import React from 'react';
import cross from '../icons/cross.png';
import { useForm } from 'react-hook-form';
import '../styles/styles.css';

const ContactForm = (props: any) => {
  const { register, handleSubmit } = useForm();
  const handleSuccess = () => {};
  const handleError = () => {};

  return (
    <div className="contact">
      <div className="form-fields">
        <form onSubmit={handleSubmit(handleSuccess, handleError)}>
          <div onClick={props.handleModalOpen} className="closing-icon">
            <img className="close-form" src={cross} alt="close-icon" />
          </div>
          <div className="form-content">
            <div className="form-field">
              <input
                type="text"
                placeholder="Full name"
                {...register('fname', {
                  required: true,
                  minLength: 10,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                })}
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                placeholder="Message"
                {...register('message', {
                  required: true,
                })}
              />
            </div>
            <input className="input-submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
