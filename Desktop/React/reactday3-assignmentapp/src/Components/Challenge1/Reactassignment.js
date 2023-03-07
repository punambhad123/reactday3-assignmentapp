function Reactassignment(props) {
    return (
        <>
        <h1>{props.htext}</h1>
        <input type = "text" placeholder = "mobile..."/>
        <br></br>
         <input type = "text" placeholder = "password..."/>
         <br></br>
         <button>{props.bttext}</button>
        </>
    )
}

export default Reactassignment
