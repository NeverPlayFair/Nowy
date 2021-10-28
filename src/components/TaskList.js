
import React from 'react';
import Task from './Task';


    const TaskList = (data) => {
        //wszystkie zadania które mają wartość true
        const active = data.tasks.filter(task => task.active);
        //wszystkie zadania które mają wartość false
        const done = data.tasks.filter(task => !task.active);
        // console.log(active, done);
        

        //done.sort((a,b) =>  b.finishDate - a.finishDate)

        // metoda zachowa się inaczej jak będzie 0
        // metoda zachowa się inaczej jak będzie < 0
        // metoda zachowa się inaczej jak będzie > 0

            if(done.length >= 2){
        done.sort((a,b) => {
            if(a.finishDate < b.finishDate){
                return 1
            }
            if(a.finishDate > b.finishDate){ 
            return -1
            }
            return 0
        })
        }

        if(active.lenght >= 2) {
            active.sort((a,b) => {

                a = a.text.toLowerCase();
                b = b.text.toLowerCase();

                if(a < b) return -1;
                if(a > b) return 1;
                return 0
            })
        }

         const activeTasks = active.map(task => 
         <Task key={task.id}
         task={task}
         delete={data.delete} 
         change={data.change}
         edit = {data.edit}
         status = {data.status}
         
         
         
         
         />)

         const doneTasks = done.map(task => 
         <Task key={task.id}
         task={task}
         delete={data.delete} 
         change={data.change} 
         
         
         />)

    
         
    

    return (
        <> 
        <div className="active">
         <h1>Zadania do zrobienia </h1>  
           {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do zrobienia</p>} 
           
         </div>






         <hr />




         <div className="done">
            <h3>Zadania zrobione: 
                <em>({done.length})</em></h3> 
                {/* {doneTasks} */}
                {done.length > 10 && <span style = {{fontSize: "20px"}}>10 ostatnich zrobionych zadań</span>}
             {doneTasks.slice(0, 10)} 
         </div>
        
        </>
       
     );
}
 
export default TaskList;