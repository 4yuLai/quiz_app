import React, { useEffect, useState } from 'react'

export default function ResultTable() {
    return (
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
                    <tr className='table-body'>
                        <td>daily tuition</td>
                        <td>2</td>
                        <td>10</td>
                        <td>passed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}