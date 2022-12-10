import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';
import '../styles/Main.css';

export default function Main() {
  // keep track of username
  const inputUsername = useRef(null);
  const dispatch = useDispatch();

  // set username
  const startQuiz = () => {
    if (inputUsername.current?.value) {
      dispatch(setUserId(inputUsername.current?.value));
    }
  };

  return (
    <div className="container">
      <h1 className="title">🥳 Welcome to Chemistry World!</h1>

      <form id="form">
        <p className="vice-title">Enter Your Name:</p>
        <input
          ref={inputUsername}
          className="userid"
          type="text"
          placeholder="Your name..."
        />
      </form>

      <div className="flex">
        <div className="start">
          <Link
            className="btn"
            to={'/board'}>
            Board
          </Link>
        </div>
        <div className="start">
          <Link
            className="btn"
            to={'/quiz'}
            onClick={startQuiz}>
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
