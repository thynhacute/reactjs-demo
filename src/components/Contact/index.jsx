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
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-height: calc(100vh - 2rem); // Cân chỉnh chiều cao tối thiểu cho phần tử chứa cả ba phần tử


  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 500px;
    font-size: 16px;
    align-items: center;
    margin: 0 auto;
    height: 500px; 
    

    input {
  width: 35em; /* Đặt chiều rộng là 10em */
  height: 2em; /* Đặt chiều cao là 3em */
  padding: 0.5em; /* Đặt padding là 0.5em */
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);

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
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;