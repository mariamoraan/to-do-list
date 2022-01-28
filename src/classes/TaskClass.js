import AsyncStorage from '@react-native-async-storage/async-storage'

export class Task{
    constructor(text){
        this.text = text
        this.checked = false,
        this.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
}

export const setTasksInMemory = async(tasks) => {
    try{
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
    }
    catch(error){
        console.log(error)
    }
}
export const getTasksFromMemory = async() => {
    const tasks = await AsyncStorage.getItem('tasks')
    if(tasks != undefined && tasks != 'undefined'){
        return JSON.parse(tasks)
    }
    else{
        return []
    }
}   

