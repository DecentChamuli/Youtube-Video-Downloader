import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { useNavigate, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Download from "./components/Download"

function App() {

    const [url, setUrl] = useState("https://www.youtube.com/watch?v=mBg8ToHfvco")
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        if(url === ""){
            alert("Enter Url")
        }
        else{
            // let newUrlArray = url.split("https://www.youtube.com/watch?v=")
            navigate(`/download?youtube=${url}`)
        }
    }

    const handleUrl = (e) => {
        setUrl(e.target.value)
    }

    return (
        <div className="App">
            <Header />
            <Container>
                <h2>Enter Youtube URL Below</h2>
                <form className="url-form">
                    <TextField onChange={handleUrl} value={url} className="url-field" variant="outlined" placeholder="https://www.youtube.com/watch?v=" />
                    <Button className='form-button' onClick={handleSubmit} variant="outlined">Download Now</Button>
                </form>
                <h3 className="disclaimer">By using our service you accept our Terms of Service and Privacy Policy</h3>
            </Container>
            <Routes>
                <Route exact path="/download" element={<Download />} />
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
    .disclaimer{
        margin: 10px 0;
        text-align: center;
        font-weight: 400;
        font-size: 15px;
    }
`