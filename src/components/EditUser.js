import React, {useState} from 'react';
import { getUserById, saveUser, updateUser } from '../service/app';
import { useParams} from 'react-router-dom';
import {useEffect} from 'react'

const EditUser = () => {

        const[name, setName]=useState()
        const[adresse, setAdresse]=useState()
        const[age, setAge]=useState(0)

        const {id} = useParams()

        const handleUpdateUser=(event)=>{
            event.preventDefault()
            let user={id, name, adresse, age}
            updateUser(user)
            .then(res=>{
                alert(JSON.stringify(res.data))
            }).catch(err=>{
                console.log(err);
            })
        }

        useEffect(()=>{
            handleGetUserById(id)
        }, [])

        const handleGetUserById=(id)=>{
            getUserById(id).then(resp=>{
                let user = resp.data
                setName(user.name)
                setAdresse(user.adresse)
                setAge(user.age)
            })
        }

    return (
        <div className="container mt-3">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
        <h1>New user</h1>
        <form onSubmit={handleUpdateUser}>
        <div className="mb-3">
            <label className='form-label'>Name :</label>
            <input
            onChange={(e)=>setName(e.target.value)}
            value={name} type="text" className='form-control'/>
        </div>
        <div className="mb-3">
            <label className='form-label'>Adresse :</label>
            <input
            onChange={(e)=>setAdresse(e.target.value)}
            value={adresse} type="text" className='form-control'/>
        </div>
        <div className="mb-3">
            <label className='form-label'>Age :</label>
            <input 
            onChange={(e)=>setAge(e.target.value)}
            value={age} type="number" className='form-control'/>
        </div>
        <button className='btn btn-success'>Update</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default EditUser;