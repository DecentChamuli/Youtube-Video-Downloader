import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const Formats = ({ vidQuality, vidFormat, vidUrl }) => {
  return (
    <Container>
        <ul className="flex-row-space-between">
            <li>{vidQuality}</li>
            <li>{vidFormat}</li>
            <li>
                <Button className="btn-dl" variant="contained" startIcon={<DownloadIcon />}>
                    <a href={vidUrl} target="blank">Download</a>
                    {/* <a href="https://google.com" >Download</a> */}
                </Button>
            </li>
        </ul>
    </Container>
  )
}

export default Formats

const Container = styled.div`
    padding: 5px 0;
    .flex-row-space-between{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    li{
        padding: 1px 20px;
        font-size: 16px;
        width: 65px;
        /* background-color: lightblue; */
    }
    .btn-dl{
        font-size: 12px;
        background-color: #259e2b;
        color: #fff;
        transition: all ease .5s;
        :hover{
            background-color: #047009;
        }
    }    
    .btn-dl > a {
        color: #fff;
    }
`