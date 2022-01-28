import { StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { View } from 'react-native-web';
import TextInputAtom from '../atoms/TextInputAtom';
import { Icon } from 'react-native-elements';
import { Task, setTasksInMemory } from '../classes/TaskClass';

const TaskInput = ({tasks, setTasks}) => {
    const [text, setText] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const addTask = (taskText) => {
        const newTasks = [...tasks, new Task(taskText)]
        setTasksInMemory(newTasks).then(()=>{
            setTasks(newTasks)
            setText('')
        })
    }
    return(
        <View style={styles.default}>
            <TextInputAtom 
            isFocused={isFocused} setIsFocused={setIsFocused}
            text={text} setText={setText} 
            label="New Task..." />
            <Icon
                  name='add'
                  color={isFocused ? '#E91E63' : '#C1C7C9'}
                  onPress={()=>addTask(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    default:{
        paddingBottom: '5vh',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default TaskInput