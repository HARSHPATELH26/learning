import React, { useState } from 'react';

const TableCreation = () => {
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [codeInput, setCodeInput] = useState('');
    const [nameInput, setNameInput] = useState('');

    const updateCode = (e) => {
        setCodeInput(e.target.value);
    }

    const updateName = (e) => {
        setNameInput(e.target.value);
    }

    const showData = () => {
        if (codeInput.trim() === '' || nameInput.trim() === '') {
            alert("Please fill in both fields before adding.");
            return;
        }
        
        if (editIndex === -1) {
            setData(prev => [...prev, { code: codeInput, name: nameInput }]);
        } else {
            setData(prev =>
                prev.map((elem, index) => {
                    if (index === editIndex) {
                        return { code: codeInput, name: nameInput };
                    } else {
                        return elem;
                    }
                })
            );
            setEditIndex(-1);
        }
        
        // Clear input fields after adding/updating
        setCodeInput('');
        setNameInput('');
    };

    const deleteHandler = (ind) => {
        const newArry = [...data];
        newArry.splice(ind, 1);
        setData(newArry);
        setEditIndex(-1);
    }

    const startEdit = (index) => {
        setEditIndex(index);
        setCodeInput(data[index].code);
        setNameInput(data[index].name);
    }

    return (
        <div className='container1'>
            <input id='codeNumber' type='text' placeholder='Code Number' value={codeInput} onChange={updateCode} />
            <input id='coderName' type='text' placeholder='Coder Name' value={nameInput} onChange={updateName} />
            <button onClick={showData} className='btn1'>Add</button>
            <hr />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Code Number</th>
                            <th>Coder Name</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((elem, index) => (
                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : 'lightgray' }}>
                                    <td>{elem.code}</td>
                                    <td>{elem.name}</td>
                                    <td>
                                        {editIndex === index ? (
                                            <button onClick={() => showData()}>Save</button>
                                        ) : (
                                            <>
                                                <i className="fa-solid fa-edit" onClick={() => startEdit(index)}></i>
                                            </>
                                        )}
                                        <i className="fa-solid fa-trash" onClick={() => deleteHandler(index)}></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableCreation;