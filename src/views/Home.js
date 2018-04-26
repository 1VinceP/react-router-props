import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
    style: {
        // height: '100vh',
        // width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 60
    }
}

function Home(props) {
    console.log( props )

    let students = [{id: 1, name: 'Paige', color: 'blue'}, {id: 2, name: 'Damien', color: 'black'}, {id: 3, name: 'Sally', color: 'fuchsia'}]

    let map = students.map( student => {
        let location = {
            pathname: `/page/${student.id}`,
            state: student
        }
        return (
            <Link key={student.id} to={location}>
                <div>{student.name}</div>
            </Link>
        )
    } )

    return (
        <div style={styles.style}>
            Home
            <Link to='/page1'><div>Page 1</div></Link>
            <Link to='/page2'><div>Page 2</div></Link>
            <Link to='/page3'><div>Page 3</div></Link>
            {/* {map} */}
        </div>
    )
}

export default Home;