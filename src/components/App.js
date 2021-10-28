import React, { useState } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const tasks = [
  {
    id: 0,
    text: "",
    date: "",
    important: true,
    active: true,
    finishDate: null,
    editing: false,
  },
];

const App = () => {
  // jeśli aplikacja nie ma w sobie nic to zaczynamy od counter 0
  let counter = 9;
  const [data, setData] = useState(tasks);

  // { id:1, text: "Zacząć nową aplikację", date:
  // '2021-10-13', important: true, active: true, finishDate: null},
  // { id:2, text: "Rozbudować aplikację", date:
  // '2021-10-20', important: false, active: true, finishDate: null},
  // { id:3, text: "Dodać niezbędne pakiety do aplikacji", date:
  // '2021-11-25', important: true, active: true, finishDate: null},
  // { id:4, text: "Otrzymać dobrą radę odnośnie aplikacji", date:
  // '2021-12-12', important: false, active: true, finishDate: null},
  // { id:5, text: "Koniec aplikacji żegnanie się z nią print('Bye aplication')", date:
  // '2021-09-25', important: true, active: true, finishDate: null},

  const deleteTask = (id: number) => {
    console.log("delete elementu o id " + id);

    const newDataTasks = data.filter((task) => task.id !== id);
    setData(newDataTasks);
  };

  //      editTask = () => {
  //       this.setState({
  //           Editing: !this.state.editTask

  //         })
  //        }

  //     editTask = (id) => {
  //       console.log("edit elementu o id " + id);
  //    }

  //  editStatus = (id) => {
  //     console.log("edit w stanie elemetu o id " + id);
  //    }

  // const tasks = [...this.state.tasks];
  // console.log(tasks);
  // const index = tasks.findIndex(task => task.id === id)
  // tasks.splice(index, 1);
  // this.setState({
  //   tasks
  // })

  const editTask = () => {
    console.log("funkcja do edytowania zadania");
  };

  const editStatus = () => {
    console.log("funkcja do edytowania statusu");
  };

  const changeTaskStatus = (id: number) => {
    console.log("change stanie elementu o id " + id);
    const newDataTasks = data.map((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      return task;
    });
    setData(newDataTasks);
  };

  // editTodo = (text, id) => {
  //   this.tasks(
  //       text.map(tasks => {
  //           if(tasks.id === id){
  //           return {...tasks, text}
  //       };
  //       return tasks;
  //       }))
  //   }

  const addTask = (text, date, important) => {
    console.log("dodany obiekt");
    const task = {
      id: counter,
      text, // tekst z inputa
      date, // tekst z inputa
      important, // wartość z inputa
      active: true,
      finishDate: null,
    };
    counter++;
    console.log(task, counter);
    const newData = data;
    setData(newData.push(task));
  };

  // RENDERUJEMY WIDOK, a W TYM KOMPONENTY CHILDREN
  return (
    <div className="App">
      <h1> Aplikacja zadaniowa </h1>
      <AddTask add={addTask} />
      <TaskList
        tasks={data}
        delete={deleteTask}
        change={changeTaskStatus}
        edit={editTask}
        status={editStatus}
      />
    </div>
  );
};

export default App;


