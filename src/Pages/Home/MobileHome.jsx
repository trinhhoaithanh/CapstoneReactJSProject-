import React from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import ShoesCard from '../../Components/ShoesCard/ShoesCard';
import { useEffect } from 'react';
import axios from 'axios';
import { getProductApi } from '../../redux/reducers/productReducer';
import { NavLink } from 'react-router-dom';


const MobileHome = () => {
  const { arrProduct } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const getAllProductApi = async () => {
   

    const action = getProductApi();

    dispatch(action);
  }

  useEffect(() => {
    //call api
    getAllProductApi();
  }, []);
  return (
    <div className='container-fluid'>
      <div className='d-flex'>
        <div className='w-50'>
            {arrProduct?.filter((item,index)=>index%2==0).map((product)=>{
                return <div className='d-flex'>
                    <div className='w-25'>
                        <img style={{objectFit:'cover'}} src={product.image} alt="..." className='h-100 w-100'/>
                    </div>
                    <div className='w-75'>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <NavLink to={`/detail/${product.id}`}>View detail</NavLink>
                    </div>
                </div>
            })}
        </div>
        <div className='w-50'>
        {arrProduct?.filter((item,index)=>index%2!=0).map((product)=>{
                return <div className='d-flex'>
                    <div className='w-25'>
                        <img style={{objectFit:'cover'}} src={product.image} alt="..." className='h-100 w-100'/>
                    </div>
                    <div className='w-75'>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <NavLink to={`/detail/${product.id}`}>View detail</NavLink>
                    </div>
                </div>
            })}
        </div>
      </div>

      
    </div>


  );
}

export default MobileHome