import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6kkqfv",
        "template_zjk43sp",
        form.current,
        "X3UJkqzW4JBelhyCG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Họ và tên</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Lời nhắn</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  @font-face {
    font-family: Montserrat;
    src: url(../../assets/fonts/Montserrat-SemiBold.ttf);
    src: url(../../assets/fonts/Montserrat-Regular.ttf);
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(80vh - 2rem);
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 380px;
      font-size: 16px;
      align-items: center;
      margin: 0 auto;
      height: 500px;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      input {
        width: 320px;
        height: 2em;
        padding: 0.5em;
        outline: none;
        border-radius: 10px;
        border: 1px solid rgb(220, 220, 220);
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }

      textarea {
        width: 320px;
        height: 6em;
        padding: 0.5em;
        outline: none;
        border-radius: 10px;
        border: 1px solid rgb(220, 220, 220);
        resize: vertical;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }

      label {
        margin-top: 1rem;
      }

      input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: #8690fc;
        color: white;
        border: none;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(80vh - 2rem);
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 700px;
      font-size: 16px;
      align-items: center;
      margin: 0 auto;
      height: 500px;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      input {
        width: 580px;
        height: 2em;
        padding: 0.5em;
        outline: none;
        border-radius: 10px;
        border: 1px solid rgb(220, 220, 220);
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }

      textarea {
        width: 580px;
        height: 6em;
        padding: 0.5em;
        outline: none;
        border-radius: 10px;
        border: 1px solid rgb(220, 220, 220);
        resize: vertical;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }

      label {
        margin-top: 1rem;
      }

      input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: #8690fc;
        color: white;
        border: none;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: calc(100vh - 2rem);
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 500px;
      font-size: 16px;
      align-items: center;
      margin: 0 auto;
      height: 500px;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      input {
        width: 35em; /* Đặt chiều rộng là 10em */
        height: 2em; /* Đặt chiều cao là 3em */
        padding: 0.5em; /* Đặt padding là 0.5em */
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }

      textarea {
        width: 35em; /* Đặt chiều rộng là 10em */
        height: 6em; /* Đặt chiều cao là 3em */
        padding: 0.5em; /* Đặt padding là 0.5em */
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        resize: vertical; /* Chỉ cho phép kéo dài theo chiều dọc */
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }

      label {
        margin-top: 1rem;
      }

      input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: #8690fc;
        color: white;
        border: none;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
      }
    }
  }
`;
