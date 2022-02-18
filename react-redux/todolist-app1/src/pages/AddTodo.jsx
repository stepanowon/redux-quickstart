import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const AddTodo = ({callbacks}) => {
    const navigate = useNavigate();

    let [ todo, setTodo ] = useState('');
    let [ desc, setDesc ] = useState('');
    
    const addContactHandler = ()=> {
        if (todo.trim() === "" || desc.trim()==="") {
            alert('반드시 할일, 설명을 입력해야 합니다.');
            return;
        } 
        callbacks.addTodo(todo, desc);
        navigate('/todos'); 
    }
    return (
        <>
        <div className="row">
            <div className="col p-3">
                <h2>할일 추가</h2>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <div className="form-group">
                    <label htmlFor="todo">할일 :</label>
                    <input type="text" className="form-control" id="todo" 
                        value={todo} onChange={(e)=>setTodo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">설명 :</label>
                    <textarea className="form-control" rows="3" id="desc" 
                        value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>  
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary m-1"
                        onClick={addContactHandler}>추 가</button>
                    <button type="button" className="btn btn-primary m-1" 
                        onClick={()=>navigate('/todos')}>취 소</button>
                </div>
            </div>
        </div>
        </>
    );
};
AddTodo.propTypes = {
    callbacks :PropTypes.object.isRequired,
};
export default AddTodo;
        