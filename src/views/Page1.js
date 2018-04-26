import React, { Component } from 'react';

const styles = {
    style: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60
    }
}

function Page1(props) {
    console.log( props )

    return (
        <div style={styles.style}>
            Page 1
            {/* Page {props.match.params.id} */}
            {/* Welcome, {props.location.state.name}
            <p>Your favorite color is {props.location.state.color}</p>
            <button onClick={() => props.history.goBack()}>Go Back</button> */}
        </div>
    )
}

export default Page1;