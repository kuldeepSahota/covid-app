import React from 'react';
import ReactDOM from 'react-dom'
import { useState,useEffect } from 'react';
import flag from '../components/images/flag.gif';
import 'bootstrap/dist/css/bootstrap.min.css';


const Covid = () => {
    const [data,setData] = useState([]);

    const covid = async() => {
      const res = await fetch("https://api.covid19india.org/data.json");
      const myData = await res.json();
      console.warn(myData.statewise)
      setData(myData.statewise);
    }
    useEffect(() => {
        covid();
    }, [])
    return(
        <>
            
            <div className="container-fluid mt-5">
                <div className="main_heading">
                    <div className="head text-center line-1 anim-typewriter">
                    <img src={flag} alt="img" />
                    <h1> <span style={{fontWeight:'bold'}}>INDIA</span> covid 19 live tracker app</h1>
                    </div>
                    
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Conformed</th>
                                <th>Recovered</th>
                                <th>deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curEle,ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{curEle.state}</td>
                                            <td>{curEle.confirmed}</td>
                                            <td>{curEle.recovered}</td>
                                            <td>{curEle.deaths}</td>
                                            <td>{curEle.active}</td>
                                            <td>{curEle.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }

                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Covid;
