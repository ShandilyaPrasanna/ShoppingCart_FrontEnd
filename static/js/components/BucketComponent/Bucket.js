import React from 'react';
import PropTypes from 'prop-types';

const BucketComponent = ({ bucketList,removeFromBucket,total }) => {

    return (
        <div>
        {total!=0?<div className='cart-wrapper'>
            {bucketList.map((item) =>
            item.addedtoCart && 
  
                <div key={item.id} className="panel panel-default ">
                    <img src={item.imageURL} alt="img" />
                     <div>{item.name}</div>
                    <div>{item.currency + item.price}</div>
                   
                    <a className="btn btn-primary" onClick={()=>removeFromBucket(item.id)} >Remove from Cart</a>
                </div>

            )}
             
        </div>:<div className="container">
                 <div className="jumbotron">
                   <h1>Empty Bucket !!!</h1> 
                   <p>Add Items To Cart</p> 
                 </div>
             
           </div>}
             </div>
    );
};

BucketComponent.propTypes = {
    total: PropTypes.number.isRequired,
    bucketList: PropTypes.array.isRequired,
    removeFromBucket: PropTypes.func.isRequired
}


export default BucketComponent;