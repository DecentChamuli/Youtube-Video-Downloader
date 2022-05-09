import CircularProgress from '@mui/material/CircularProgress'
import styled from 'styled-components'

function Loading({textToShow}) {
  return (
    <Container>
        <CircularProgress className="progress" thickness='5' size={70} />
        <h3>{textToShow} </h3>
    </Container>
  )
}

export default Loading

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
    .progress{
        color: #1362bd !important;
        margin-bottom: 10px;
    }
`