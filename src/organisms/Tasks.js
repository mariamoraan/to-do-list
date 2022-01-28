import { StyleSheet} from 'react-native'
import React, {useState} from 'react'
import Task from '../molecules/Task'
import { ScrollView } from 'react-native-web'
import {setTasksInMemory} from '../classes/TaskClass';

const Tasks = ({tasks=[], setTasks, filter='all'}) => {
    const removeTask = (id) => {
        const tasksModified = tasks.filter((task)=> task.id != id)
        setTasksInMemory(tasksModified).then(()=>{
            setTasks(tasksModified)
        })
    }
    const handleCheck = (id) => {
        setTasks(tasks => tasks.map((task)  => {
            if(task.id == id){
                task.checked = !task.checked
                setTasksInMemory(tasks)
            }
            return task
        }))
    }
    return(
        <ScrollView style={styles.taskList}>
            {tasks.map((task) => {
                if(filter=='all'){
                    return <Task task={task} key={task.id} handleCheck={handleCheck} removeTask={removeTask} />
                }
                else if(filter=='checked' && task.checked){
                    return <Task task={task} key={task.id} handleCheck={handleCheck} removeTask={removeTask} />
                }
                else if(filter=='unchecked' && !task.checked){
                    return <Task task={task} key={task.id} handleCheck={handleCheck} removeTask={removeTask} />
                }
                else{
                    return null
                }                
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    taskList:{
        marginVertical: '5vh',
        width:'90vw',
        height:'20vh',
    }
})

export default Tasks