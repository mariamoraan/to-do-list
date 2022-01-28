import { StyleSheet } from 'react-native';
import {useFonts, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import { Button } from 'react-native-paper';
import TextAtom from './TextAtom';

const FilterAtom = ({actualFilter, setFilter, filter}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
    });
    return(
        fontsLoaded ?
        <Button style={styles.default} mode="text" color={actualFilter == filter ? "#E91E63" : "#212121"} onPress={() => setFilter(filter)}>
            <TextAtom text={filter} type={actualFilter == filter ? 'active-filter' : 'filter'} />
        </Button>
        : ''
    )
}

const styles = StyleSheet.create({
    default:{
        fontFamily: 'Montserrat_700Bold',
    }
})

export default FilterAtom