import React from "react";
import {Button, Form , Input} from 'antd'
import { Link } from "react-router-dom";

function Register() {
  const handleRegister =(values)=>{
      console.log('yes',values)  
  }
  const rules= [{
    required:true,
    message:"This field is required"
  }]
  return (
    <div
      className="h-screen bg-slate-300
    flex justify-center items-center"
    >
      <div className="bg-white p-3 rounded w-[450px]">
        <h1>Register</h1>
        <Form
        layout='vertical'
        onFinish={handleRegister}
        
        >
          <Form.Item label = 'name' rules={rules}name='name'>
            <Input placeholder='name'/>
          </Form.Item>
          <Form.Item label = 'Email'rules={rules} name='Email'>
            <Input placeholder='Email Address'/>
          </Form.Item>
          <Form.Item label = 'Password' rules={rules}name='password'>
            <Input placeholder='Password'type='password'/>
          </Form.Item>
          <Button className='bg-blue-300' htmlType='submit'>Register</Button>
          <br />
          <span>Already have an account <Link className="text-blue-500 underline" to='/login'>Login</Link></span>
        </Form>
      </div>
    </div>
  );
}

export default Register;
