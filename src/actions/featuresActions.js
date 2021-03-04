export const ADD_ADDITIONAL_FEATURE = "ADD_ADDITIONAL_FEATURE";
export const REMOVE_ADDITIONAL_FEATURE = "REMOVE_ADDITIONAL_FEATURE";


export const addAdditionalFeature = newFeature => {
    return {type: ADD_ADDITIONAL_FEATURE, payload: newFeature}
}

export const removeAdditionalFeature = (newFeature) => {
    return {type: REMOVE_ADDITIONAL_FEATURE, payload: newFeature}
}