import React, { useState } from 'react';
import "./header.css"

const Header = ({ handleAddUser }) => {
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    return (
        <div className='header-container'>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <select>
                <option value="">Choose...</option>
                <option value="Pending">Pending</option>
                <option value="Full fill">Full fill</option>
                <option value="Reject">Reject</option>
            </select>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button className='addButton' onClick={() => {
                if (document.querySelector("select").value !== "" && content !== "" && name !== "" && date !== "") {
                    handleAddUser({ id: uuidv4(), content: content, name: name, date: date, status: document.querySelector("select").value })
                } else {
                    alert("Please choose your option and input all field!");
                }
            }
            }>Submit</button>
        </div>
    );
};

export default Header;