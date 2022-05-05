import React, { useState } from 'react'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import styled from 'styled-components'
import thumbnail from '../assets/thumbnail.jpg'


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

const Download = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <Container>
            <div className="left">
                <img src={thumbnail} alt="Youtube Thumnail" className="thumbnail"/>
                <p className="title">This is Video Title with A long sentence that can overflow.</p>
                <Button className='btn' type="submit" variant="outlined">Download Thumbnail</Button>
            </div>
            <div className="right">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className="tab" label="DOWNLOAD MP4" {...a11yProps(0)} />
                    <Tab className="tab" label="DOWNLOAD MP3" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <table>
                        <tr>
                            <th className="table_header">Quality</th>
                            <th className="table_header">Download</th>
                        </tr>
                        <tr>
                            <td className="table_data">1080p</td>
                            <td className="table_data">
                                <Button variant="contained" startIcon={<DownloadIcon />}>
                                    Download
                                </Button>
                            </td>
                        </tr>
                    </table>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </div>
        </Container>
    )
}

export default Download

const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    margin-top: 5px;
    justify-content: center;
    /* align-items: center; */
    margin-bottom: 50px;
    /* width: 800px; */
    .left{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
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
        /* background-color: lightblue; */
    }
`