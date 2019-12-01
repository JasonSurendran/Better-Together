//Imports
import React from 'react';
import PropTypes from 'prop-types';

//Connect Redux imports
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
    //Destructuring alerts
    //Ensure alerts is not null for the purpose of styling
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
    //Make alert type dymanmic in order to give proper styling
    <div key={alert.id} className = {`alert alert-${alert.alertType}`}>
        { alert.msg }
    </div>
    ));

//Alerts is now a prop
Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

//Get the state of the alert, and map it to a prop
const mapStateToProps = state => ({
    alerts: state.alert
});

//Now its available within props
//Use connect() in order to bring in the redux action
export default connect(mapStateToProps)(Alert);