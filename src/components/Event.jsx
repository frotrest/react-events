import styled from 'styled-components';
import styles from './events.module.css';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { AiFillAlert } from 'react-icons/ai';
import { FaBullhorn } from 'react-icons/fa';

const EventCard = styled.div`
  background: wheat;
  border: 2px solid orange;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
`;

const EventTitle = styled.h2`
  color: #222020be;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Event = ({ name, speaker, location, start, end }) => {
  return (
    <EventCard>
      <EventTitle>Inside The Ludd`s Hammer</EventTitle>
      <h3 className={styles.eventItem}>
        <FaBullhorn /> {name}
      </h3>
      <p className={styles.eventItem}>
        <FaUser /> {speaker}
      </p>
      <p className={styles.eventItem}>
        <IoLocationSharp color="red" /> {location}
      </p>
      <p className={styles.eventItem}>
        <AiFillAlert color="green" /> Start: {new Date(start).toLocaleString()}
      </p>
      <p className={styles.eventItem}>
        <AiFillAlert color="red" /> End: {new Date(end).toLocaleString()}
      </p>
    </EventCard>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Event;
