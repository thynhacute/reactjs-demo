import React from 'react'
import "./styles.scss";
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

function LoginSuccess(props) {
  return (
    <header className="custom-login">
    <div className="hehe">
       
       <NavLink to="/" className="home-menu">
       <h1>success</h1>
            </NavLink>
    </div>
  </header>
  )
}

LoginSuccess.propTypes = {}

export default LoginSuccess
