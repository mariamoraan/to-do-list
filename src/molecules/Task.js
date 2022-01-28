import { StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { View } from 'react-native-web';
import CheckBoxAtom from '../atoms/CheckBoxAtom'
import TextAtom from '../atoms/TextAtom';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native'

const Task = ({task, handleCheck, removeTask}) => {
    const {colors} = useTheme()
    return(
        <View style={[styles.default, {backgroundColor:colors.background}]}>
            <View style={styles.taskInfo}>
                <CheckBoxAtom checked={task.checked} onPress={()=>{handleCheck(task.id)}}/>
                <TextAtom text={task.text} type={task.checked ? 'crossed' : 'default'}/>
            </View>
            <Icon
                  name='close'
                  color='#C1C7C9'
                  onPress={()=>{removeTask(task.id)}}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    default:{
        marginBottom: '16px',
        paddingVertical:'8px',
        paddingHorizontal: '16px',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow: 'rgba(1, 1, 1, 0.2) 0px 2px 8px 0px',
        borderRadius: '8px',
        backgroundColor: '#121212',
    },
    taskInfo:{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default Task