import { StyleSheet, Text} from 'react-native';
import {useFonts,Montserrat_400Regular,  Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import { useTheme } from '@react-navigation/native'

const TextAtom = ({text, type="default"}) => {
    const {colors} = useTheme()
    const styles = makeStyles(colors)
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
      });
    const stylesDict = {
        'crossed':styles.crossed,
        'default':styles.default,
        'title': styles.title,
        'filter':styles.filter,
        'active-filter':styles.activeFilter
    }
    return(
        fontsLoaded
        ? <Text style={[
            styles.text, 
            [stylesDict[type]]
        ]}>{text}</Text>
        : ''
    )
}

const makeStyles = (colors) =>  StyleSheet.create({
    text:{
        fontFamily: 'Montserrat_400Regular',
        fontSize: '14px'
    },
    default:{
        color:colors.text
    },
    title:{
        fontFamily: ' Montserrat_700Bold',
        fontSize: '25px',
        marginRight: '16px',
        color: colors.text
    },
    crossed:{
        textDecorationLine: 'line-through',
        textDecorationStyle: "solid",
        color:colors.secondary
    },
    filter:{
        fontSize: '12px',
        fontFamily: ' Montserrat_700Bold',
        color: colors.secondary,
    },
    activeFilter:{
        fontSize: '12px',
        fontFamily: ' Montserrat_700Bold',
        color: colors.primary
    }
})

export default TextAtom