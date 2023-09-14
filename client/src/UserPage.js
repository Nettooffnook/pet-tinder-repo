// src/UserPage.js
import React from 'react';
import { Table } from 'antd';
// src/UserPage.js
import './UserPage.css'; // Import the CSS file
import userData from './userData.json';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address', // Add a new field
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone', // Add a new field
    dataIndex: 'phone',
    key: 'phone',
  },
];

const UserPage = () => {
  return (
    <div>
      <h1 className='table-title'>User Data</h1>
      <Table dataSource={userData} columns={columns} className="custom-table" />
    </div>
  );
};

export default UserPage;