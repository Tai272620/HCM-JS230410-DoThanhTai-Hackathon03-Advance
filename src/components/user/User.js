
import React, { useState } from 'react';
import "./user.css";

const User = ({ item, index, handleDeleteUser, handleUpdateUser }) => {
    const [editingUser, setEditingUser] = useState(null);
    const [editedContent, setEditedContent] = useState(item.content);
    const [editedDate, setEditedDate] = useState(item.date);
    const [editedStatus, setEditedStatus] = useState(item.status);
    const [editedName, setEditedName] = useState(item.name);

    const handleSaveChanges = () => {
        const updatedUser = {
            id: item.id,
            content: editedContent,
            date: editedDate,
            status: editedStatus,
            name: editedName
        };
        handleUpdateUser(updatedUser);
        setEditingUser(null);
    };

    return (
        <tr>
            <td>{index + 1}</td>
            {editingUser === null ? (
                <>
                    <td>{item.content}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>{item.name}</td>
                    <td>
                        <button className='updateButton' onClick={() => setEditingUser(item)}>
                            Update
                        </button>
                        <button className='deleteButton' onClick={() => handleDeleteUser(item.id)}>
                            Delete
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td>
                        <input
                            type="text"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            value={editedDate}
                            onChange={(e) => setEditedDate(e.target.value)}
                        />
                    </td>
                    <td>
                        <select
                            value={editedStatus}
                            onChange={(e) => setEditedStatus(e.target.value)}
                        >
                            <option value="">Choose...</option>
                            <option value="Pending">Pending</option>
                            <option value="Full fill">Full fill</option>
                            <option value="Reject">Reject</option>
                        </select>
                    </td>
                    <td>
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                    </td>
                    <td>
                        <button className='saveButton' onClick={handleSaveChanges}>
                            Save
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default User;
