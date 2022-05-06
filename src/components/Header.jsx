import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Container>
            <div className="header">
                <Link to="/"><img src={logo} alt="Youtube Video Downloader" /></Link>
                <ul>
                    <li>MP4 Download</li>
                    <li>MP3 Download</li>
                    <li>Playlist Download</li>
                    <li>Thumbnail Download</li>
                    <li>Subtitle Download</li>
                </ul>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    text-align: center;
    .header{
        font-size: 20px;
        align-items: center;
        width: 100vw;
    }
    ul{
        margin: 10px 0 15px 0;
        background-color: #f86b6b;
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        li{
            color: white;
            font-weight: 700;
            padding: 0 20px;
            cursor: pointer;
            :hover{
                color: #00ffff;
            }
        }
        /* li:first-child, li:last-child{ */
        li:nth-child(odd){
            border-style: none solid;
            border-color: black;
        }
    }
`