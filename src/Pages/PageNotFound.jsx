import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const PageNotFound = () => {
    // const socket = io.connect("http://localhost:3001")
    // socket.on('message', (mes) => {
    //   console.log(mes, 'message here');
    // })
    // const handleUpdate = async () => {
    //   console.log('12')
    //   await socket.emit('update', {updated: false, message: 'hi', number: 1})
    // }
    // useEffect(() => {
    //   socket.on('update', (data) => {
    //     console.log(data);
    //   })
    // }, [socket])

    const navigation = useNavigate();
    useEffect(() => {
        navigation("/login");
    }, [navigation]);
    return (
        <div>
            PageNotFound<br></br>
            {/* <button onClick={() => handleUpdate()}>
        Update 
      </button> */}
        </div>
    );
};

export default PageNotFound;
