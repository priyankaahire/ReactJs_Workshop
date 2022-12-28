import React from 'react'
const ColorContext = React.createContext({color:"blue"})

export default function University({univ}) {
    return (
        <>
            <Collage collage="VJTI" />
            <h4>{univ} University</h4>
        </>
    );
}

function Collage({collage, color}) {
    return (
        <>
            <Stream strem="B.E. CS" />
            <h3>{collage}</h3>
        </>
    )
}

function Stream({stream, color}) {
    return (
        <>
            <Student rollNumber="007" nmae="James Bond" />
            <h2>{stream}</h2>
        </>
    )
}

function Student({rollNumber, name, color}) {
    const them = React.useContext(ColorContext);
    return (
        <>
            <h1 style={{color:them.color}}>{rollNumber} - {name}</h1>
        </>
    )
}