import React, {useEffect, useState} from 'react';
import {logDOM} from "@testing-library/react";

const Home = () => {

    const[counter,setCounter] = useState(1)
    const [users,setUsers] = useState([])

    // const [h,setH] = useState(0)
    // const [min,setMin] = useState(0)
    // const [sec,setSec] = useState(0)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) =>res.json())
            .then((data) => setUsers(data))
        // console.log("useEffect сработал")
    }, [])

    console.log(users)


    // setInterval(() => {
    //     setH(new Date().getHours())
    //     setMin(new Date().getMinutes())
    //     setSec(new Date().getSeconds())
    // }, 1000)




    return (
        <div className="container">

            {
                users.map(el =>(
                    <div key={el.id}>
                        <h4>{el.name}</h4>
                        <p>{el.phone}</p>
                    </div>
                ))
            }

            <button onClick={() =>setCounter( counter + 1)}>click me</button>
            {/*<h1>{h + ":" + min + ":" + sec }</h1>*/}
            <h1>Home {counter}</h1>
        </div>
    );
};

export default Home;