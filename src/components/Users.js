import React, {useEffect, useState} from 'react';
import { deleteUser, getUsers } from '../service/app';
import { useNavigate } from 'react-router-dom';

const Users = () => {

    const [users, setUsers]=useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        handleGetUsers()
    }, [])

    const handleGetUsers=()=>{
        getUsers()
        .then(res=>{
            setUsers(res.data)
        }).catch(err=>{
            console.log(err);
        })
    }
   
    const handleDeleteUser=(user)=>{
        deleteUser(user)
        .then(res=>{
            const newUsers=users.filter((u)=>u.id!==user.id)
            setUsers(newUsers)
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
           <table className="table">
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Adresse</th>
                    <th scope='col'>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.adresse}</td>
                        <td>{user.age}</td>
                        <td>
                            <button onClick={()=>navigate(`/edituser/${user.id}`)} className='btn btn-outline-success'>Update</button>
                        </td>
                        <td>
                            <button onClick={()=>handleDeleteUser(user)}  className='btn btn-outline-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Users;