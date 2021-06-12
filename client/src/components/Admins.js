import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admins = (props) => {
    const [admins, setAdmins] = useState([])
    const getAdmins = async () => {
        const { data } = await axios.get(`/councilAdmins/${props.councilName}`);
        console.log(data.data)
        setAdmins(data.data)
    }
    useEffect(() => {
        getAdmins()
    })
    return (
        <div className="adminBx">
            {admins.map((admin) => {
                return <div>
                    <img src={admin.adminImg} alt={admin.name}/><p>{admin.name}</p>
                </div>
            })}
        </div>
    )
}

export default Admins
