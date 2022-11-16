import React, { useEffect } from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';

import { useDispatch, useSelector } from 'react-redux';

export default function Result() {

    function onRestart(){
        
    }

    return (
         <div className='container'>
            <h1 className='title text-light'>Result</h1>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>username</span>
                    <span>Daily Tuition</span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points :</span>
                    <span>0</span>
                </div>
                <div className='flex'>
                    <span>Total Attempts :</span>
                    <span>0</span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points :</span>
                    <span>0</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result :</span>
                    <span>0</span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>

            <div className="container">
                <ResultTable />
            </div>
        </div>
    )
}
