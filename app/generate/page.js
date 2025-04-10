"use client"
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from "next/navigation";

const Generate = () => {

    const searchParams = useSearchParams()

    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initalLinks) => {
            return initalLinks.map((item, i) => {
                if (i == index) {
                    return {link, linktext };
                } else {
                    return item;
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }


    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links, 
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions);
        const result = await r.json();
        if (result.success) {
            toast.success(result.message);
            setLinks([])
            setpic("")
            sethandle("")
            setdesc("")
        }
        else {
            toast.error(result.message)
        }
    };

    return (
        <div className="bg-[#e9c0e9] min-h-[100vh]  grid grid-cols-2">
            <div className="col1 flex flex-col justify-center items-center mt-20 text-gray-800 ">
                <h1 className="font-bold text-3xl mt-10">Create your Bittree</h1>
                <div className="flex flex-col gap-4 my-8 w-1/2">

                    <h2 className="font-bold text-xl">Step-1:Choose your handle</h2>
                    <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className="px-3 py-2 rounded-full focus:outline-pink-500" type="text" placeholder="Choose a handle " />

                    <h2 className="font-bold text-xl">Step-2:Add your link</h2>
                    {links && links.map((item, index) => {
                        return <div key={index} className="flex gap-5 items-center">
                            <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className="w-full px-3 py-2 rounded-full focus:outline-pink-500 " type="text" placeholder="Enter the link" />
                            <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className="w-full px-3 py-2 rounded-full focus:outline-pink-500" type="text" placeholder="Enter link text " />
                        </div>

                    })}

                    <div className="btn flex justify-center items-center">
                        <button onClick={() => addLink()} className="px-3 py-2 bg-pink-600 text-white font-bold rounded-full w-40 flex items-center justify-center">+ Add link</button>
                    </div>

                    <h2 className="font-bold text-xl">Step-3 :Add your Picture and description</h2>
                    <div className="flex flex-col gap-3 items-center justify-center">
                        <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className=" w-full px-3 py-2 rounded-full  focus:outline-pink-500 " type="text" placeholder="Enter the link of your picture" />

                        <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className="w-full px-3 py-2 rounded-full focus:outline-pink-500" type="text" placeholder="Enter the description" />

                        <button disabled={pic == "" || handle=="" || links[0].linktext == ""} onClick={()=>{submitLinks()}} className="px-3 py-2 bg-gray-900 disabled:bg-gray-600 text-white font-bold rounded-full  flex items-center justify-center">Create your Bittree</button>
                    </div>
                </div>
            </div>

            <div className="col2 w-full h-screen bg-[#e9c0e9] mt-16 ">
                <img className="h-full object-contain" src="./generate.png" alt="" />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Generate;

