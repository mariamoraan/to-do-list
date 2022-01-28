import { StyleSheet} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import {useFonts,Montserrat_400Regular} from '@expo-google-fonts/montserrat'
import { useTheme } from '@react-navigation/native'

const TextInputAtom = ({label='',placeholder='', text, setText, isFocused, setIsFocused}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
      });
    const {colors} = useTheme()
    return(
        <TextInput
        onFocus={()=>setIsFocused(true)} 
        onBlur={()=>setIsFocused(false)}
        label={label}
        placeholder={placeholder}
        placeholderTextColor='white' 
        underlineColor='#C1C7C9'
        activeUnderlineColor='#E91E63'
        value={text}
        onChangeText={(text)=>{setText(text)}}
        style={styles.inputTaskText}
        theme={{ colors: { text: colors.text, primary: colors.text, placeholder:'grey' } }}
        />
    )
}

const styles = StyleSheet.create({
    inputTaskText:{
        width: '90%',
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat_400Regular',
    },
    inputTaskTextFocus:{
        outlineColor: 'transparent',
    }, 
})
export default TextInputAtom