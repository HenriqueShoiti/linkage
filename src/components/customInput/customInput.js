import react from 'react'
import {View, Text, TextInput, StyleSheet, secureTextEntry} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder} 
                value = {value}
                onChangeText = {setValue}
                style  = {styles.input}
                secureTextEntry = {secureTextEntry}
            
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical:5,

    },
    input:{

    },
})
export default CustomInput