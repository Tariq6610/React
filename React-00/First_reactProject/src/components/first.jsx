function Cities({prop}){
    return(
    <>
<ul class="list-group">
{prop.map((val, ind) => (
        <li className="list-group-item" key={ind}> {val} </li>
    ))}    

</ul>
    </>
    )
}

export default Cities;