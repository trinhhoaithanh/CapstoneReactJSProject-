import React from 'react'
import { getProductApi } from '../../redux/reducers/productReducer'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Divider, Row } from 'antd'
import ShoesCard from '../../Components/ShoesCard/ShoesCard'
import {http} from '../../util/config'
import _ from 'lodash'

const Search = () => {
    const dispatch = useDispatch()
    const { arrProduct } = useSelector(state => state.productReducer)
    const [arrProductSearch, setArrProductSearch] = useState(arrProduct)

    const handleSubmit = async (event, values) => {
        event.preventDefault()
        const nameProduct = event.target.elements.nameProduct.value
        const result = await http.get(`/api/Product?keyword=${nameProduct}`)
        setArrProductSearch(result.data.content)
    }
    const sortPrice = (order) =>{
        const sortedArray = _.orderBy(arrProductSearch, ['price'], [order])
        setArrProductSearch(sortedArray)
    }
    const style = {
        width: '443px', height: '54px', marginRight: '30px', background: 'rgba(33, 33, 33, 0.08)',
        borderRadius: '4px 4px 0px 0px', border: 'none', marginBottom:'5px'
    }
    const getAllProductApi = async () => {
        const action = getProductApi();
        dispatch(action);
    }

    useEffect(() => {
        //call api
        getAllProductApi();
    }, []);
    return (
        <div>
            <form action="" style={{ marginLeft: '50px', marginTop: '68px' }} onSubmit={handleSubmit}>
                <p>Search</p>
                <input type="text" name='nameProduct' placeholder='product name...' style={style} />
                <span><button className='btn text-white' style={{ background: '#6200EE', borderRadius: '50px', width: 'Hug (121px)', height: '48px', padding: '12px', gap: '10px' }}>SEARCH</button></span>
            </form>
            <h3 style={{ background: 'linear-gradient(180deg, #F21299 0%, #1B02B5 100%)', height: '74px', lineHeight: '74px', paddingLeft: '25px', marginTop: '44px' }}>Search result</h3>
            <div style={{marginLeft:'100px'}}>
                <p style={{fontSize:'18px'}}>Price</p>
                <button onClick={()=>{
                    sortPrice('desc')
                }} style={style}>decrease</button> <br />
                <button onClick={()=>{
                    sortPrice('asc')
                }} style={style}>ascending</button>
            </div>

            <Row gutter={[16, 24]} style={{marginTop:'20px', marginBottom: '190px' }}>
                {arrProductSearch?.map((item, index) => {
                    return <Col className='gutter-row' span={8} key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
                        <ShoesCard prod={item} />
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default Search