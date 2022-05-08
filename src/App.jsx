import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { useNavigate, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Download from "./components/Download"
import Thumbnails from './components/Thumbnails'
import Playlist from './components/Playlist'
import Subtitle from './components/Subtitle'

function App() {

    // const [url, setUrl] = useState("https://www.youtube.com/watch?v=mBg8ToHfvco")
    const [url, setUrl] = useState("")
    const [nullError, setNullError] = useState(false)
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        let trimmedUrl;
        // if(url === ""){
        //     setNullError(true)
        // }
        // else{
        //     setNullError(false)
        //     navigate(`/video?youtube=${url}`)
        // }
        if(url.includes("youtu.be")){
            setNullError(false)
            trimmedUrl = url.split("youtu.be/")
            if(trimmedUrl[1] === ""){
                setNullError(true)
            }
            else{
                navigate(`/video?youtube=${trimmedUrl[1]}`)
            }
        }
        else if(url.includes("www.youtube.com/shorts/")){
            setNullError(false)
            trimmedUrl = url.split("www.youtube.com/shorts/")
            if(trimmedUrl[1] === ""){
                setNullError(true)
            }
            else{
                navigate(`/video?youtube=${trimmedUrl[1]}`)
            }
        }
        else if(url.includes("www.youtube.com/watch?v")){
            setNullError(false)
            trimmedUrl = url.split("www.youtube.com/watch?v=")
            if(trimmedUrl[1] === ""){
                setNullError(true)
            }
            else{
                navigate(`/video?youtube=${trimmedUrl[1]}`)
            }
        }
        else{
            setNullError(true)
        }
    }

    return (
        <div className="App">
            <Header />
            <Container>
                <h2>Enter Youtube URL Below</h2>
                <form className="url-form">
                    <TextField onChange={(e) => {setUrl(e.target.value)}} value={url} className="url-field" variant="outlined" placeholder="https://www.youtube.com/watch?v=" />
                    <Button className='form-button' onClick={handleSubmit} variant="outlined">Download Now</Button>
                </form>
                {nullError && <h3 className="null_error">Please Enter Valid Youtube URL</h3> }
                <h3 className="disclaimer">By using our service you accept our Terms of Service and Privacy Policy</h3>
            </Container>
            <Routes>
                <Route exact path="/video" element={<Download />} />
                <Route exact path="/thumbnail" element={<Thumbnails />} />
                <Route exact path="/subtitle" element={<Subtitle />} />
                <Route exact path="/playlist" element={<Playlist />} />
            </Routes>
        </div>
  )
}

export default App

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    h2{
        text-align: center;
        margin-bottom: 15px;
        font-weight: 700;
    }
    .url-form {
        display: flex;
        justify-content: center;
    }
    .url-field{
        width: 50%;
        border-color: red;
    }
    .form-button{
        font-size: 15px;
        margin: 0 10px;
        color: #d81818;
        border-color: #f50000;
        transition: all ease .5s;
        :hover{
            background-color: #c21e1e;
            border-color: #ff4242;
            color: #fff;
        }
    }
    .null_error{
        margin: 10px 0;
        color: red;
        text-align: center;
        font-weight: 500;
        font-size: 15px;
    }
    .disclaimer{
        margin: 10px 0;
        text-align: center;
        font-weight: 400;
        font-size: 15px;
    }
`