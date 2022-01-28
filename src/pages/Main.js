import StyleSheet from 'react-native-media-query';
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import TaskInput from '../molecules/TaskInput';
import Tasks from '../organisms/Tasks';
import { getTasksFromMemory } from '../classes/TaskClass';
import FilterAtom from '../atoms/FilterAtom';
import { useTheme } from '@react-navigation/native'


const Main = ({navigation}) => {
    var tasksInitialValue = []
    const [tasks, setTasks] = useState(tasksInitialValue)
    const [filter, setFilter] = useState('all')
    const {colors} = useTheme()
    useEffect(()=>{
        getTasksFromMemory().then((t) => {
        tasksInitialValue = t
        setTasks(tasksInitialValue)
        })
    },[])

    return(
        <View style={[styles.container, {backgroundColor:colors.background}]}>
        <View style={styles.head} >
          <View style={styles.filtersContainer}>
            <FilterAtom filter='all' actualFilter={filter} setFilter={setFilter}/>
            <FilterAtom filter='checked' actualFilter={filter} setFilter={setFilter}/>
            <FilterAtom filter='unchecked' actualFilter={filter} setFilter={setFilter}/>
          </View>
        </View>
        <Tasks tasks={tasks} setTasks={setTasks} filter={filter}/>
        <TaskInput  tasks={tasks} setTasks={setTasks}/>
      </View>
    )
}

const {ids, styles} = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    filtersContainer:{
      marginTop:'24px',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      boxShadow: 'rgba(1, 1, 1, 0.2) 0px 2px 8px 0px',
      borderRadius: '8px'
    },  
    head:{
      width: '100%',
      height: '5vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  
  });

export default Main