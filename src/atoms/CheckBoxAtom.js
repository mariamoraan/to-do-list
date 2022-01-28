import { StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@react-navigation/native'


const CheckBoxAtom = ({checked, onPress}) => {
    const {colors} = useTheme()
    return(
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                onPress()
            }}
            color={colors.primary}
            uncheckedColor={colors.primary}
        />
    )
}

const styles = StyleSheet.create({
    default:{
        color:'black',
    }
})

export default CheckBoxAtom