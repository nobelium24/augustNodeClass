import React, { useState, useEffect, useRef } from 'react';
import io from "socket.io-client";

const Chats = () => {
    const endPoint = "http://localhost:7770";
    const [message, setMessage] = useState("")
    const [receivedMessages, setReceivedMessages] = useState([])


    let socket = useRef()
    useEffect(() => {
        socket.current = io(endPoint);
        console.log(socket);
    }, [])

    const sendMessage = () => {
        socket.current.emit("message", message);
    }

    // const testArr = []

    useEffect(() => {
        if (receivedMessages) {
            socket.current.on("broadcast", (message) => {
                console.log(message, 44)
                setReceivedMessages([...receivedMessages, message])

                // testArr.push(message)

            })
        }

        // socket.current.on("broadcast", (message)=>{
        //     console.log(message)
        //     setReceivedMessages([message])
        // })
    }, [receivedMessages])

    return (
        <>
            <div className='mx-auto card container shadow-lg p-5'>
                <h1 className='text-center'>React Chat app</h1>
                <div>
                    {
                        receivedMessages.map((message, i) => (
                            <p key={i}>{message}</p>
                        ))
                    }
                    <input type="text" className='form-control' onChange={(e) => setMessage(e.target.value)} />
                    <button className='btn btn-dark' onClick={sendMessage}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Chats