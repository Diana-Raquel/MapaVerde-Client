import { Routes, Route, Navigate } from 'react-router-dom';

import classes from './AuthView.module.scss';

import LoginForm from '../../components/AuthForms/LoginForms/LoginForm';
import RegisterForm from '../../components/AuthForms/RegisterForm/RegisterForm';
import {useUserContext} from '../../contexts/UserContext'

const AuthView = () => {

  const onLoginHandler = async(identifier, password) =>{
    await login(identifier,password);
  }
  const onRegisterHandler = async(username,email,password) =>{
    await register(username,email,password);
  }

  return (
    <div className={classes["container"]}>
      <div className={classes["card"]}>
        <Routes>
          <Route path='signin' element={<LoginForm onLogin={onLoginHandler}/>} />
          <Route path='signup' element={<RegisterForm onRegister={onRegisterHandler}/>} />
          <Route path='*' element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </div>
  )
}

export default AuthView;