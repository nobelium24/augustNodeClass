import React, { useState } from 'react';
import axios from "axios";

const Dashboard = () => {
  const [files, setFiles] = useState("")
  const [imgUrl, setImgUrl] = useState("")


  const pickFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result
      setFiles(result)
    }
  }
  
  console.log(files)


  const url = "http://localhost:7770/users/upload"
  const imageUploader = () => {
    axios.post(url, {data:files}).then((res)=>{
      console.log(res.data)
      setImgUrl(res.data.secure_url)
    }).catch((err)=>{
      console.log(err)    
    })
  }

  return (
    <>
      <div className='mx-auto container shadow-lg card p-5'>
        <h6 className='display-6 text-muted text-center'>Image Upload</h6>
        <input type="file" className="form-control my-2" onChange={(e) => pickFile(e)} />
        <div>
          <button className='btn btn-dark' onClick = {imageUploader}>Upload Image</button>
        </div>
        <img src= {imgUrl} alt="" />
      </div>
    </>
  )
}

export default Dashboard