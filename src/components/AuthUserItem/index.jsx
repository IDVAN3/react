import React, { useState } from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './AuthUserItem.scss';

const AuthUserItem = ({ firstName, lastName, course, educationForm, educationProgramm, isTeacher, role, department }) => {
  const [isUserSelected, setSelecUser] = useState(false);

  const onClick = () => {
    const user = isTeacher
      ? { firstName, lastName, department, role, isTeacher: true }
      : { firstName, lastName, course, educationForm, educationProgramm, isTeacher: false };

    setSelecUser(true);

    return window.localStorage.setItem('user', JSON.stringify(user));
  }

  if (isUserSelected || window.localStorage.getItem('user')) return <Redirect to="/" />

  return (
    <div role="button" onClick={onClick} className="AuthUserItem">
      <Avatar className="AuthUserItem__avatar" size={55}>{firstName[0]}</Avatar>
      <div className="AuthUserItem__container">
        <div className="AuthUserItem__name">{firstName} {lastName}</div>
        {isTeacher
          ? (
            <>
              <div className="AuthUserItem__wrap">
                <div className="AuthUserItem__label">Кафедра:</div>
                <div className="AuthUserItem__value">{department}</div>
              </div>
              <div className="AuthUserItem__wrap">
                <div className="AuthUserItem__label">Роль:</div>
                <div className="AuthUserItem__value">{role}</div>
              </div>
            </>
          )
          : (
            <>
              <div className="AuthUserItem__wrap">
                <div className="AuthUserItem__label">Спеціальність:</div>
                <div className="AuthUserItem__value">{educationProgramm}</div>
              </div>
              <div className="AuthUserItem__wrap">
                <div className="AuthUserItem__label">Форма:</div>
                <div className="AuthUserItem__value">{educationForm}</div>
              </div>
              <div className="AuthUserItem__wrap">
                <div className="AuthUserItem__label">Курс:</div>
                <div className="AuthUserItem__value">{course}</div>
              </div>
            </>
          )}
      </div>
    </div>
  );
};

AuthUserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  course: PropTypes.string,
  educationForm: PropTypes.string,
  educationProgramm: PropTypes.string,
  isTeacher: PropTypes.bool,
  role: PropTypes.string,
  department: PropTypes.string,
};

AuthUserItem.defaultProps = {
  isTeacher: false,
  educationForm: '',
  educationProgramm: '',
  role: '',
  course: '',
  department: '',
};

export default AuthUserItem;
