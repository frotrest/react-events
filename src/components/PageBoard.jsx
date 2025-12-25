import PropTypes from 'prop-types';
import Event from './Event.jsx';
import styled from 'styled-components';

const PageBoardStyles = styled.div `
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    background-color: #d3d3d3ef;
    border: darkgray 2px solid;
    padding: 20px;
    border-radius: 20px;
`;

const PageTitle = styled.h1 `
    text-align: center;
    color: black;
    font-size: 35px;
    font-weight: 900;
    background-color: #008cff;
    border: blue 2px solid;
    border-radius: 20px;
    margin-bottom: 20px;
`

const PageBoard = ({events}) => {
    return (
        <>
        <PageTitle>24th Core Worlds Coalition Conference</PageTitle>    
        <PageBoardStyles>
        {events.map((event, index) => (
            <Event key={index} 
            name={event.name} 
            speaker={event.speaker}
            location={event.location}
            start={event.time.start}
            end={event.time.end}  />
        ))}
        </PageBoardStyles>
        </>
    );
}

PageBoard.propTypes = {
    events: PropTypes.array.isRequired
}

export default PageBoard;