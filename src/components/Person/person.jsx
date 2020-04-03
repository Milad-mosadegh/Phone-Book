import React from 'react';

const Person = ({ fullname, deleted, changed }) => {
    return (
        <div className="container shadow-lg p-3 mt-3 ani">
            <div className=" d-flex justify-content-between">
                <p>{` ${fullname} `}</p>
                {/* <input className="form-control-sm" type="text" placeholder="FullName" onChange={changed} ></input> */}
                <button className="btn btn-danger" onClick={deleted}>X</button>

            </div >
        </div>
    );
}

export default Person;