import { StatusBar } from 'expo-status-bar';
import StyleSheet from 'react-native-media-query';
import React, {useState, useEffect} from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import TextAtom from './src/atoms/TextAtom';
import Main from './src/pages/Main';
import Hello from './src/pages/Hello'

export default function App() {
   const Stack = createStackNavigator()
  const scheme = useColorScheme()
  const [isDarkMode, setIsDarkMode] = useState(scheme == 'dark') 
  const LightTheme = {
    dark:false,
    colors:{
      background:"white",
      text:'black',
      primary:'#E91E63',
      border:'white',
      card:'white',
      notification:'#E91E63',
      secondary:'grey'
    }
  }
  const DarkTheme = {
    dark:true,
    colors:{
      background:"#121212",
      text:'#F0F2FE',
      primary:'#E91E63',
      border:'white',
      card:'white',
      notification:'#E91E63',
      secondary: 'grey'
    }
  }
  return (
    <AppearanceProvider>
      <NavigationContainer mode="modal" theme={ isDarkMode ? DarkTheme : LightTheme}>
      <View 
        style={[styles.headTitle, 
        isDarkMode ? {backgroundColor:DarkTheme.colors.background} : {backgroundColor:LightTheme.colors.background}]} 
        dataSet={{ media: ids.headTitle }} >
        <TextAtom type="title" text={"TO DO"} />
        <Icon
          name={isDarkMode ? 'bedtime' : 'wb-sunny'}
          color={isDarkMode ? DarkTheme.colors.primary : LightTheme.colors.primary}
          onPress={()=>{setIsDarkMode(!isDarkMode)}}
        />
      </View>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Main}  />
          <Stack.Screen name="Hello" component={Hello}  />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </AppearanceProvider>
  );
}

const {ids,styles} = StyleSheet.create({
  headTitle:{
    padding: '32px',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    '@media (min-width: 1200px)': {
      justifyContent:'center',
    },
  },
})

