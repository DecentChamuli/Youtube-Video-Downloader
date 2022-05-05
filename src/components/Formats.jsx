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
                    <a href={vidUrl}>Download</a>
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
        padding: 0 25px;
        font-size: 15px;
    }
    .btn-dl{
        color: white;
        font-size: 10px;
        background-color: #029109;
        :hover{
            background-color: #047009;
        }
    }    
`