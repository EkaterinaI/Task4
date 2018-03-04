import React from 'react';

import { auth } from '../../firebase';
import './index.css';
const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
    id="user_div"
  >
    Sign Out
  </button>

export default SignOutButton;
