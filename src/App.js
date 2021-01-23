import React, { useState, useEffect } from "react";
import "./App.css";
import { decrement, increment, selectCount } from "./redux/slices/counterSlice";
import {
  SETUSER,
  LOGOUT,
  selectUser,
  selectLoggedOutState,
} from "./redux/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const count = useSelector(selectCount); // Get count from userStore
  const currentUser = useSelector(selectUser); // Get currentUser from userStore
  const loggedOutRecently = useSelector(selectLoggedOutState); // Get loggedState from userStore
  const dispatch = useDispatch(); // Firing Gun
  const [change, setChange] = useState(1); // Counter Payload

  return (
    <div>
      <h3>Redux Template For Future Use</h3>
    </div>
  );
};

export default App;
