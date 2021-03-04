import React from 'react';
import { connect } from 'react-redux';
import { addAdditionalFeature } from '../actions/featuresActions';

const AdditionalFeature = props => {
    console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button disabled={props.features.find(n => (props.feature.id===n.id))}className="button" onClick={()=>props.addAdditionalFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
    console.log(state.car.features)
    return {
        features: state.car.features

    }
}

// const mapDispatchToProps = {addAdditionalFeature}   //shorthand version of the function below


const mapDispatchToProps = (dispatch) => {  
    return {
        addAdditionalFeature: (newFeature)=> dispatch(addAdditionalFeature(newFeature))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
