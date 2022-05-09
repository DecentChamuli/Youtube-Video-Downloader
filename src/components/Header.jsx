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
                    {/* <li><Link to="/video">MP4/MP4 Download</Link></li> */}
                    <li><Link to="/playlist">Playlist Download</Link></li>
                    <li><Link to="/thumbnail">Thumbnail Download</Link></li>
                    <li><Link to="/subtitle">Subtitle Download</Link></li>
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
        li > a{
            color: white;
            font-weight: 700;
            padding: 0 20px;
            cursor: pointer;
            :hover{
                color: #00ffff;
            }
        }
        li:first-child, li:last-child{
        /* li:nth-child(){ */
            border-style: none solid;
            border-color: black;
        }
    }
`