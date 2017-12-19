var initialState={
	data:[],
	total:0,
	dataLoaded:false,
}

export function productReducer(state=initialState,action={}){
var total=state.total;
switch(action.type){


case "FETCH_DATA_FULFILLED":
          if(!state.dataLoaded){
         return {...state,
               data:action.payload,
               dataLoaded:true};
  }
  else 
   return  {...state};

 case  "FETCH_DATA_REJECTED":
         return  {...state,dataLoaded:false};

	case 'ADD_TO_BUCKET':
		
	       state.data.forEach((item)=>{
            if(item.id == action.id) {
               item.addedtoCart = true;
               total = state.total + item.price;
            }
         });
	       
	   return{
             data : state.data,
             total : total
         	};

	

	 case 'DELETE_FROM_BUCKET':

	 	 state.data.forEach((item) =>{
            if(item.id == action.id) {
               item.addedtoCart = false;
               total = state.total - item.price
            }
         });

          return{
             data : state.data,
             total : total
         	};

      default:
            return   {...state};
}

}



