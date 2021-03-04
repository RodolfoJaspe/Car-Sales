import { ADD_ADDITIONAL_FEATURE } from '../actions/featuresActions';
import { REMOVE_ADDITIONAL_FEATURE} from '../actions/featuresActions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ADDITIONAL_FEATURE:
            const existingFeature = state.car.features.find(feature => feature.id === action.payload.id)

            if(existingFeature){
                return {...state}
            } else {
                return {...state, car: {...state.car, features: [...state.car.features, {id: action.payload.id, name: action.payload.name, price: action.payload.price}]}, additionalPrice: state.additionalPrice + action.payload.price};
            }

            
        case REMOVE_ADDITIONAL_FEATURE:
            const filteredFeatures = state.car.features.filter(feature => feature.id !== action.payload.id)
            const removedFeature = state.car.features.find(feature => feature.id === action.payload.id)

            return {...state, car: {...state.car, features: filteredFeatures}, additionalPrice: state.additionalPrice - removedFeature? removedFeature.price: 0};
        default:
            return state    
    }
}