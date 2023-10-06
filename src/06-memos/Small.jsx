import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log(' Me volví a dibujar :( ');

    return (
        <small>{ value }</small>
    )
});

Small.displayName = 'Small'; // Esta es la solucion