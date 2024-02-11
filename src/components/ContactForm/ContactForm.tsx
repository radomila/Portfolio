import React from 'react';
import cross from '../../icons/cross.png';
import { useForm } from 'react-hook-form';
import * as styles from './ContactForm.module.css';

interface ContactformProps {
  handleModalOpen: () => void;
}

const ContactForm = ({ handleModalOpen }: ContactformProps) => {
  const { register, handleSubmit } = useForm();
  const handleSuccess = () => {};
  const handleError = () => {};

  return (
    <div>
      <div className={styles.fields}>
        <form onSubmit={handleSubmit(handleSuccess, handleError)}>
          <div onClick={handleModalOpen} className={styles.close}>
            <img src={cross} alt="close-icon" />
          </div>
          <div className={styles.content}>
            <div className={styles.field}>
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
            <div className={styles.field}>
              <input
                type="text"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                })}
              />
            </div>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="Message"
                {...register('message', {
                  required: true,
                })}
              />
            </div>
            <input className={styles.submit} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
