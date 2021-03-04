import React from 'react';
import {connect} from "react-redux";
import {removeAdditionalFeature} from "../actions/featuresActions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>props.removeAdditionalFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {removeAdditionalFeature}


export default connect (null, mapDispatchToProps)(AddedFeature);
