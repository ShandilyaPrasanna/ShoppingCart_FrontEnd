import axios from 'axios';


export function getAllProducts() {

   return (dispatch)=>{       

      axios.get('/items')
      .then((res)=>{
                dispatch({type:"FETCH_DATA_FULFILLED",payload:res.data.catalog})
              })
      .catch((err)=>{
                dispatch({type:"FETCH_DATA_REJECTED",payload:err})
      })
   }}



export function addToBucket(id) {
   return {
      type: 'ADD_TO_BUCKET',
      id: id
   };
}

export function removeFromBucket(id) {
   return {
      type: 'DELETE_FROM_BUCKET',
      id: id
   };
}