import React from "react";
import "./Modal.css";
import { useState } from "react";
import axios from "axios";

function Modal({closeModal}){
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [posts, setPosts] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(name, username,email, phone, website);
    };

    const addPosts = (name, username, email, phone, website) => {
        const promise =axios.post('https://jsonplaceholder.typicode.com/users', JSON.stringify({
                name : {name},
                username : {username},
                email : {email},
                phone : {phone},
                website : {website},
            }))
            promise.then((response) => {
                console.log(response);
                setPosts([response.data, ...posts]);
            });
        setName('');
        setUsername('');
        setEmail('');
        setPhone('');
        setWebsite('');
    };
    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className="body mt-5">
                        <form>
                            <input type="text" name="name" placeholder="name" className="input-group m-2" onChange={(e) =>setName}/>
                            <input placeholder="username" className="input-group m-2" onChange={(e) =>setUsername}/>
                            <input placeholder="email" className="input-group m-2" onChange={(e) =>setEmail}/>
                            <input placeholder="phone" className="input-group m-2" onChange={(e) =>setPhone}/>
                            <input placeholder="website" className="input-group m-2" onChange={(e) =>setWebsite()}/>

                        </form>
                    </div>
                    <div className="footer">
                        <button id="cancelBtn"
                                onClick={() => closeModal(false)}
                        >Cancel</button>
                        <button type="submit" className="btn btn-primary"
                            onClick={addPosts}
                        >Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Modal;