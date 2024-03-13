
import React, {useEffect, useState} from 'react';

import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaPlusCircle , FaRegUser, FaLocationArrow, FaQuestionCircle} from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import './styles/adminHome.css';
import {Link} from 'react-router-dom'
import logo from '../assets/4.jpg'
import Stats from './Stats';
import { FaTrash, FaUser } from "react-icons/fa";
import axios from 'axios'
import useCart from '../hooks/useCart';

export default function AdminHome() {
    const [data, setData] = useState([])
    const [addSection, setAddSection] = useState(false)
    const [addSection1, setAddSection1] = useState(false)
    
    const [userData, setUserData] = useState('')
    const [cart, refetch] = useCart()
   
    const [query, setQuery] = useState("")
    
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };

 //Хэрэглэгчид
    useEffect(()=>{
        fetch('http://localhost:3000/getUser', {
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log("get", data,userData)
            setUserData(data.data)
        })
    },[])


    const sharedLink = (
        <>
            <li>
                <Link to='/' className='mt-3'>
                    <MdDashboard />Home
                </Link>
            </li>
            <li>
                <Link to='menu'>
                    <FaShoppingCart />
                    Menu
                </Link>
            </li>
            <li>
                <Link to=''>
                    <FaLocationArrow/>
                    Orders Tracking
                </Link>
            </li>
            <li>
                <Link>
                    <FaQuestionCircle/>
                    Customer Support
                </Link>
            </li>
        </>
    )
    axios.defaults.baseURL = 'http://localhost:3000';
    const deleteUser = async(id, fname)=>{
        
        if(window.confirm(`Are you sure you want to delete ${fname} This user??`));
        const data = await axios.delete('/deleteUser/'+id)
        alert(data.data.message)
        refetch()
    }
return(
    
    <div className='w-full bg-white flex'> 
            <div className='w-1/6 h-auto bg-white flex'>
                    <div className="drawer lg:drawer-open z-10">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <div className='flex justify-start mb-3'>
                                <img src={logo} alt='' className='w-20'/>
                                <span><div className="badge badge-primary">Admin</div></span>
                            </div>
                            
                            <button type="button" className="text-gray-900  bg-white border flex items-center justify-start gap-3 border-gray-300   focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> <FaRegUserCircle />USER EMAIL</button>
                            <button type="button"  onClick={()=> setAddSection(true)} className="text-gray-900 flex items-center  bg-white border border-gray-300 justify-start gap-3  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><MdDashboard />Dashboard</button>
                            <button type="button"  onClick={()=> setAddSection1(true)} className="text-gray-900 flex items-center bg-white border border-gray-300 justify-start gap-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><FaUsers />All Users</button>
            
                            <button type="button" onClick={()=> setAddSection2(true)} className="text-gray-900 flex items-center bg-white border border-gray-300 justify-start gap-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><FaPlusCircle />Add Product </button>
                        
                            <button type="button" onClick={()=> setAddSection3(true)} className="text-gray-900 flex items-center bg-white border border-gray-300  justify-start gap-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><FaEdit />Бүтээгдэхүүн</button>
                        
                            <button type="button" onClick={()=> setAddSection4(true)} className="text-gray-900 flex items-center bg-white border border-gray-300  justify-start gap-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><FaShoppingBag />Manage Booking</button>


                           
                            {
                                sharedLink
                            }


                             <button onClick={logOut} type="button" className="text-gray-900 mt-5 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Log Out</button>
                            
                            </ul>
                        </div>
                </div>   
            </div>


            {
                    
                    addSection &&(
                      
                        <div className='flex absolute w-full bg-gray-100'>
                            <div className='w-1/6 bg-red z-0'>hello world 1</div>
                            <div className='w-5/6 bg-green z-10 h-screen'>
                                <div className='flex justify-around items-center w-full bg-gray-100 h-1/6'>
                                    <h1 className='text-lg'>Dashboard</h1>
                                    <Stats userData={userData}/>
                                    <button className="text-gray-900 bg-white border-4 border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection(false)}>Гарах</button>
                                </div>
                                
                                <div className='h-5/6 bg-white'>
                                       Graphic
                                </div>    
                            </div>
                        </div>         
                        )
                }

            {
                    
                    addSection1 &&(
                      
                        <div className='flex absolute w-full bg-gray-100'>
                            <div className='w-1/6 bg-red z-0'>hello world 1</div>
                            <div className='w-5/6 bg-green z-10 h-screen'>
                                <div className='flex justify-around items-center w-full bg-gray-100 h-1/6'>
                                    <h1 className='text-lg'>All users</h1>
                                    <Stats userData={userData}/>
                                    <button className="text-gray-900 bg-white border-4 border-gray-300 flex justify-around focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=> setAddSection1(false)}>Гарах</button>
                              
                                </div>
                                
                                <div className='h-5/6 bg-white'>
                                <div className="overflow-x-auto">
                            <table className="table table-zebra w-full]">
                                    {/* head */}
                                        <thead className='bg-green text-white rounded-lg'>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>UserType</th>
                                            <th>Email</th>
                                            <th>CreatedAt</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                userData.map((user,index)=>{
                                                    return (
                                                        <tr key={user._id}>
                                                            <td>{index+1}</td>
                                                            <td>{user.fname}</td>
                                                            <td>{user.lname}</td>
                                                            <td>{user.Usertype}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.createdAt}</td>
                                                            <td>
                                                                <button  onClick={()=> deleteUser(user._id, user.fname)} className='btn btn-xs bg-orange-500 text-white'>
                                                                    <FaTrash/>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                    </div>
                                </div>    
                            </div>
                        </div>         
                        )
                }
                 
            
            
            
            <div className='w-5/6 h-auto flex flex-col bg-green relative'>
                {
                addSection &&(
                    <div className='w-full bg-white flex justify-center'>
                        <h1>{userData.email}</h1>
                        
                    </div>
                    )
                }
                <div className='w-full h-screen flex bg-red  flex-col'>
                    <div className='flex w-full h-full flex-col'>
                        <div className='h-1/4 w-full bg-green flex justify-between items-center'>
                            <div className='bg-gray-300 w-1/3 h-full border-gray-500 flex flex-col'>
                                <div>
                                    Total Users:
                                    <h1>{userData.length}</h1>
                                </div>
                                <div className='flex flex-col gap-2 w-full h-full'>
                                    <progress className="progress progress-success w-56" value={0} max="100"></progress>
                                    <progress className="progress progress-success w-56" value="10" max="100"></progress>
                                    <progress className="progress progress-success w-56" value="40" max="100"></progress>
                                    <progress className="progress progress-success w-56" value="70" max="100"></progress>
                                    <progress className="progress progress-success w-56" value="100" max="100"></progress>

                                </div>
                            </div>
                            <div className='bg-indigo-100 w-1/3 h-full'>
                                Total Products
                            </div>
                            <div className='bg-gray-100 w-1/3 h-full'>
                                Total Blogs
                            </div>
                    
                        </div>
                        
                        <div className='h-3/4 w-full bg-white flex'>
                            <div className='w-1/2 h-full bg-orange-200'>
                                Circle Graphic
                            </div>
                            <div className='w-1/2 h-full bg-orange-400'>
                                Simple Graphic
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>   
    )
}