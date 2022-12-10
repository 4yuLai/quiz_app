import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'
import { Link } from 'react-router-dom';

export default function Board() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        })
    }, [])
    
    

    return (
        <div className='container'>
            <h1 className='title'>🏅Board🏅</h1>
            <div>
                <table>
                    <thead className='table-header'>
                        <tr className='table-row'>
                            <td>Name</td>
                            <td>Attempts</td>
                            <td>Earn Points</td>
                            <td>Result</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!data ?? <div>No Data Found </div>}
                        {
                            data.map((v, i) => (
                                <tr className='table-body' key={i}>
                                    <td>{v?.username || ''}</td>
                                    <td>{v?.attempts || 0}</td>
                                    <td>{v?.points || 0}</td>
                                    <td>{v?.achived || ""}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <div className="start">
                <Link className='btn' to={'/'}>Restart</Link>
            </div>
        </div> 
    )
}