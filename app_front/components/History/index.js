import historyStyles from './History.module.css'
import React, { useState } from 'react';



const History = () => {
    const [data, setData] = useState([]);
    
    const getAll = async (value) => {
        if (value != ''){
            const res = await fetch(`http://127.0.0.1:8000/api/weather/all/history`)
            const response = await res.json()
    
            if (response.success){
                setData(response.data);
            } else {
                setData([]);
            }
        }
    }

    getAll();

    return (
        <div className={historyStyles.contentSearch}>
            <h1 className={historyStyles.title}>
                History requests
            </h1>

            <div className={historyStyles.container}>
                <table className={historyStyles.table}>
                    <thead className={historyStyles.thead}>
                        <tr className={historyStyles.tr}>
                            <th className={historyStyles.th}>#</th>
                            <th className={historyStyles.th}>Query</th>
                            <th className={historyStyles.th}>Status</th>
                            <th className={historyStyles.th}>Response</th>
                        </tr>
                    </thead>
                    <tbody className={historyStyles.tbody}>
                        {data.map((item, index) => (
                            <tr className={historyStyles.tr}>
                                <td className={historyStyles.td}>{item.id}</td>
                                <td className={historyStyles.td}>{item.query}</td>
                                <td className={historyStyles.td}>{item.code}</td>
                                <td className={historyStyles.td}>{item.response}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History