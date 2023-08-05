import React, {useState} from 'react';
import { saveUser } from '../service/app';


const NewUser = () => {

        const[name, setName]=useState()
        const[adresse, setAdresse]=useState()
        const[age, setAge]=useState(0)

        const handleSaveUser=(event)=>{
            let user={name, adresse, age}
            saveUser(user)
            .then(res=>{
                alert(JSON.stringify(res.data))
            }).catch(err=>{
                console.log(err);
            })
        }

    return (
        <div className="container mt-3">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
        <h1>New user</h1>
        <form onSubmit={handleSaveUser}>
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
        <button className='btn btn-success'>Save</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default NewUser;