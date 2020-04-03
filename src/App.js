import React, { Component } from 'react';
import Persons from './components/Person/persons';

import 'bootstrap/dist/css/bootstrap.min.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
    state = {
        persons: [
            { id: 1, fullname: "Milad Mosadegh" },
        ],
        showPersons: true
    }



    handleChange = () => {
        this.setState({ showPersons: !this.state.showPersons });
        console.log(this.state.showPersons);

    }

    removePerson = id => {
        const copyState = [...this.state.persons]
        const filterState = copyState.filter(p => p.id !== id)
        this.setState({ persons: filterState })
        toast.warn(`Person Id : ${id} was Deleted`)
    }

    handleNameChange = (event, id) => {
        const { persons: allpersons } = this.state;
        const personIndex = allpersons.findIndex(p => p.id === id)
        const per = allpersons[personIndex];
        per.fullname = event.target.value;

        const persons = [...allpersons]

        persons[personIndex] = per
        this.setState({ persons: persons })
    }

    addPerson = () => {
        let insertFirst = prompt("Full Name")
        let insertId = prompt("ID Number")

        this.setState({
            persons: [
                ...this.state.persons,
                { id: insertId, fullname: insertFirst }
            ],
        })

        toast.success(`Person : ${insertFirst} was Added`)

    }


    render() {

        const { persons, showPersons } = this.state;

        let nafar = null;
        if (showPersons) {
            nafar = <Persons personDelete={this.removePerson} humans={persons} personChange={this.handleNameChange} />
        }


        return (
            <div className="centerize">
                <h1>Persons Manager</h1>
                <h4>Number of Persons are :  {persons.length} </h4>
                <button onClick={this.addPerson} className="btn btn-success m-2" >Add Persons</button>
                <button onClick={this.handleChange} className="btn btn-primary" >
                    {this.state.showPersons ? "Hide" : "Show"}
                </button>

                {nafar}

                < ToastContainer className="shadow" />

            </div>
        );
    }
}

export default App;