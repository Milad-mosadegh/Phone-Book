import React from 'react';
import Person from './person';

const Persons = ({ humans, personDelete, personChange }) => {
    return (
        <div>
            {humans.map(data => (
                <Person key={data.id} deleted={() => personDelete(data.id)} fullname={data.fullname} changed={e => personChange(e, data.id)} />
            ))}
        </div>);
}

export default Persons;