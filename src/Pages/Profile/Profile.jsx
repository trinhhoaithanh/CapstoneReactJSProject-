import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileApi,
  updateProfileApi,
} from "../../redux/reducers/userReducer";
import { useFormik } from "formik";
import * as yup from "yup";

import { Form, Input,  Select } from 'antd';
const Profile = () => {
  const { userProfile } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  // const form = useFormik({
  //   initialValues:{
  //     email:'',
  //     password:'',
  //     name:'',
  //     phone:'',
  //     gender:true
  //   },
  //   onSubmit:(values)=>{
  //     const updateProfile = updateProfileApi(values)
  //     dispatch(updateProfile)
     
    
    
  //   },
  //   validationSchema:yup.object().shape({
  //     email:yup.string().required('Email cannot be blank').email('Email is invalid')
  //     ,password:yup.string().required('Password cannot be blank'),name:yup.string().required('Name cannot be blank')
  //     ,phone:yup.string().required('Phone cannot be blank').matches(/^[0-9]+$/),
  //   }
  //   )
  // })
  
  const onSubmit = (values) => {
    const updateProfile = updateProfileApi(values)
         dispatch(updateProfile)
  }
  useEffect(() => {
    const getProfile = getProfileApi()
    
      dispatch(getProfile);
    
    form.setFieldsValue(userProfile)
  },[])

  

  return (
    <>
      <h3
        className="text-white"
        style={{
          background: "linear-gradient(180deg, #F21299 0%, #1B02B5 100%)",
          width: "698px",
          height: "74px",
          lineHeight: "74px",
          paddingLeft: "25px",
          marginTop: "44px",
        }}
      >
        Profile
      </h3>
      <div className="container-fluid mt-5 ms-2">
        <div className="row">
          <div className=" col-xl-3 col-xs-12 ">
            <div className="avatar avatar-profile m-auto">
              <img src={userProfile?.avatar} alt="..." className='w-75 rounded-circle'></img>
            </div>
          </div>
          <div className=" col-xl-4 col-xs-12 ">
            <Form layout="vertical" name="basic" form={form} wrapperCol={{ span: 25 }} onFinish={onSubmit}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label="Phone" name="phone">
                <Input />
              </Form.Item>

              <Form.Item>
                <button className="btn btn-primary mt-3" type="submit"> Update </button>
              </Form.Item>
            </Form>
          </div>
          <div className=" col-xl-4 col-xs-12 ">
            <Form layout="vertical" name="basic" form={form} wrapperCol={{ span: 25 }} onFinish={onSubmit}>
              <Form.Item label="Name" name="name">
                <Input/>
              </Form.Item>

              <Form.Item label="Password" name="newPassword" >
                <Input.Password id="password" />
              </Form.Item>

              <Form.Item name="gender" label="Gender" hasFeedback >
                <Select placeholder="Gender">
                  <Select.Option value={false}>Male</Select.Option>
                  <Select.Option value={true}>Female</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <hr className="mx-5" />
      <ul className="nav nav-tabs container">
        <li className="nav-item">
          <a
            style={{
              color: "#DD2AED",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "39px",
            }}
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Order history
          </a>
        </li>
        <li className="nav-item">
          <a
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "39px",
            }}
            className="nav-link text-dark"
            href="#"
          >
            Favourite
          </a>
        </li>
      </ul>
      <div className="container my-5">
        <p style={{ color: "#CB0DC3" }}>
          + Orders have been placed on 09-19-2020
        </p>

        <table className="table">
          <thead>
            <tr className="table-secondary">
              <th scope="col">id</th>
              <th scope="col">img</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">quantity</th>
              <th scope="col">total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>
                <img src="./img/product.png" alt="" />
              </td>
              <td>Product 1</td>
              <td>1000</td>
              <td>1</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container my-5">
        <p style={{ color: "#CB0DC3" }}>
          + Orders have been placed on 09-19-2020
        </p>

        <table className="table">
          <thead>
            <tr className="table-secondary">
              <th scope="col">id</th>
              <th scope="col">img</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">quantity</th>
              <th scope="col">total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>
                <img src="./img/product.png" alt="" />
              </td>
              <td>Product 1</td>
              <td>1000</td>
              <td>1</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container my-5">
        <nav aria-label="Page navigation example text-right">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                9
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                10
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Profile;
