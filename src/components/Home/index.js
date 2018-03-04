import React from 'react';
import PropTypes from 'prop-types';
import withAuthorization from '../Session/withAuthorization';

const AccPage = (props, { authUser }) =>
<div id="accPage">
  <h1>Добро пожаловать, {authUser.email}</h1>
  
    </div>



AccPage.contextTypes = {
authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccPage);
