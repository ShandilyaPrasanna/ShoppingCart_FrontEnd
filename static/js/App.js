import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllProducts,addToBucket,removeFromBucket} from './actions/actions';
import ShowAllProductComponent from './components/ProductComponent/ShowAllProduct';
import BucketComponent from './components/BucketComponent/Bucket';
import TotalCost from './components/BucketComponent/Total';


class App extends React.Component{

componentWillMount(){
	 if(!this.props.dataLoaded) {
        this.props.getAllProducts();
    }
  
}


 addToBucket(id)  {
  	
    this.props.addToBucket(id);
  }

   removeFromBucket(id) {
   
    this.props.removeFromBucket(id);
  	
  }

  
    render(){
    	
       return (
                     <div className="container">
                            <div className="row">
                            <div className="col-md-12">
                            </div>
                            </div>
                      <div className="row" id="BucketDiv">
                         {(this.props.total!=0)&&<div className="col-md-2 col-lg-2">
                                 <TotalCost total={this.props.total} />
                            </div>}
                            
                            <div className="col-md-8 col-lg-8 ">
                                  <BucketComponent 
                                  		 total={this.props.total}
                                         removeFromBucket={this.removeFromBucket.bind(this)}
                                         bucketList={this.props.data} /> 

                                   </div>
                            </div>
                            <div className="row" id="productDiv">
               
                            <div className="col-md-12 col-lg-12">
                                   <ShowAllProductComponent productList={this.props.data} 
                                         addToBucket={this.addToBucket.bind(this)} 
                    	                 removeFromBucket={this.removeFromBucket.bind(this)} />
                            </div></div></div>
    );
}
}

const mapStateToProps = (state) => {
     return {
       		data:state.productReducer.data,
			total:state.productReducer.total,
			dataLoaded:state.productReducer.dataLoaded,
    };
  };

const matchDispatchToProps = (dispatch) => {
   return bindActionCreators({
      	getAllProducts,
        addToBucket,
        removeFromBucket,
   },dispatch)
};

export default connect(mapStateToProps,matchDispatchToProps)(App);
