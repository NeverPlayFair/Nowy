import React from 'react';

const Task = (props) => {

    const style = {
        color: 'orange',
    }
    const {text , date, id, active, important, finishDate} = props.task;

    if(active) {
    return ( 
    <div>
        <p>

        <strong style={important ? style : null }>{text}</strong>  
        <span>
        -do {date}
        </span>

        <button onClick={() => props.change(id)} >Zadanie ukończone ✔ </button>
        <button onClick={() => props.delete(id)}>Usuń zadanie X</button>
        <button onClick={() => props.edit(id)}>Edytuj</button> 
        {/* <button onClick={() => console.log("edytuj")}>Edytuj</button> */}
        
        
        
        
        </p>

    </div>

     );} else {

        const finish = new Date(finishDate).toLocaleString()
         return (
             <div>

<p>

<strong>{text}</strong>  
<em> (zrobić do {date})</em><br />
- potwierdzenie wykonania <span>{finish}</span>



<button onClick={() => props.delete(id)}>Usuń zadanie X</button>

</p>

             </div>
         )
     }
}

 
export default Task;