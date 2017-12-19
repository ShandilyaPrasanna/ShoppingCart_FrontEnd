import React from 'react';
import PropTypes from 'prop-types';

const ShowAllProductComponent = ({ productList,removeFromBucket,addToBucket }) => {
    if(productList){
    return (
        <div className='list-wrapper'>
            {productList.map((item) =>
             
                <div key={item.id} className="panel panel-default image-wrapper">
                    <img src={item.imageURL} alt="img" />
                    <div>{item.name}</div>
                    <div>{item.currency + item.price}</div>
                    {item.addedtoCart ? 
                    <a className="btn btn-primary" onClick={()=>removeFromBucket(item.id)} >Remove from Cart</a> :
                    <a className="btn btn-primary" onClick={()=>addToBucket(item.id)}>Add to Cart</a>}
                </div> 

            )}
        </div>
    );}
    else return <h1>No Data Available</h1>
};

ShowAllProductComponent.propTypes = {
    productList: PropTypes.array.isRequired,
    addToBucket: PropTypes.func.isRequired,
    removeFromBucket: PropTypes.func.isRequired
}


export default ShowAllProductComponent;