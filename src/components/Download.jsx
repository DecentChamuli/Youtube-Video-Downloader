import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

import Formats from './Formats'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import styled from 'styled-components'
import thumbnailImg from '../assets/thumbnail.jpg'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const Download = () => {

    let query = useQuery()
    
    const [title, setTitle] = useState("This is Video Title with A long sentence that can overflow.")
    const [thumbnail, setThumbnail] = useState(thumbnailImg)
    const [value, setValue] = useState(0)
    const [qualities, setQualities] = useState([])
    const [p360, set360] = useState("#")
    const [p720, set720] = useState("#")
    const [audio, setAudio] = useState("#")

    const mergeBase = "https://api-server-by-dc.herokuapp.com/yt/merged?video=https://www.youtube.com/watch?"

    let param = query.get("youtube")
    useEffect(()=>{
        const BASE_URL = process.env.REACT_APP_BASE_URL;
        axios.get(`${BASE_URL}/yt/full?video=https://www.youtube.com/watch?v=${param}`)
        .then(res=>{
            // console.log(res.data)
            // console.log(res.data[3].ytVid[0]["360p"])
            setTitle(res.data[0].title)
            setThumbnail(res.data[1].thumbnails[3].url)
            setQualities(res.data[2].formats)
            set360(res.data[3].ytVid[0]["360p"])
            set720(res.data[3].ytVid[1]["720p"])
            setAudio(res.data[4].ytAudio)
        })
    }, [param])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    // const vidQuality = ['1080p', '720p', '480p', '360p', '240p', '144p'] 

    return (
        <Container>
            <div className="left">
                <img src={thumbnail} alt="Youtube Thumnail" className="thumbnail"/>
                <p className="title">{title}</p>
                <Button className='btn' type="submit" variant="outlined">Download Thumbnail</Button>
            </div>
            <div className="right">
                <Tabs className="tabs" value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className="tab" label="DOWNLOAD MP4" {...a11yProps(0)} />
                    <Tab className="tab" label="DOWNLOAD MP3" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="dl_section">
                        <ul className="flex-row-space-between header">
                            <li>Quality</li>
                            <li>Format</li>
                            <li>Download</li>
                        </ul>
                        {/* {vidQuality.map((vid, index) => ( */}
                        {qualities.map((vid, index) => (
                            <Formats 
                                vidQuality={vid} 
                                vidFormat="mp4" 
                                key={index} 
                                vidUrl={vid === '360p' ? `${p360}` : vid === '720p' ? `${p720}` : `${mergeBase}v=${param}&quality=${vid}`} 
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="dl_section">
                        <ul className="flex-row-space-between header">
                            <li>Quality</li>
                            <li>Format</li>
                            <li>Download</li>
                        </ul>
                        <Formats vidQuality="128k" vidFormat="mp3" vidUrl={audio} />
                    </div>
                </TabPanel>
            </div>
        </Container>
    )
}

export default Download

const Container = styled.div`
    display: flex;
    margin-top: 5px;
    justify-content: center;
    margin-bottom: 50px;
    .left{
        display: flex;
        flex-direction: column;
        text-align: center;
        /* justify-content: center; */
        margin-right: 15px;
    }
    .thumbnail{
        min-width: 100px;
        max-width: 350px;
    }
    .title{
        font-size: 17px;
        margin: 10px 0;
        font-weight: 400;
        max-width: 350px;
    }
    .btn{
        font-size: 15px;
        margin: 0 10px;
        color: #188bd8;
        border-color: #0062f5;
        transition: all ease .5s;
        :hover{
            background-color: #108dc7;
            border-color: #097fe0;
            color: #fff;
        }
    }
    .right{
        margin: 0 0 0 20px;
    }
    .tabs{
        background-color: rgba(217, 206, 228, 0.418) !important;
    }
    .tab{
        font-size: 15px;
        margin: 0 auto;
    }
    .dl_section{
        display: flex;
        flex-direction: column;
    }
    .flex-row-space-between{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .header{
        border-bottom: 1px solid #756b6b;
        margin-bottom: 10px;
    }
    .header > li{
        font-size: 18px;
        font-weight: 700;
        padding: 0 15px;
        width: 80px;
        margin: 0 auto;
    }
`