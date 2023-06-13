import React from 'react';
import User from '../user/User';
import "./content.css";

const Content = ({ users, handleDeleteUser, handleUpdateUser }) => {
    return (
        <table>
            <tr>
                <th>#</th>
                <th>Content</th>
                <th>Due date</th>
                <th>Status</th>
                <th>Assigned to</th>
                <th>Action</th>
            </tr>
            {users.map((item, index) => (
                <User item={item} index={index} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser} />
            ))}
        </table>
    );
};

export default Content;