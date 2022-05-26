import react from 'react'
import {View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress, text, type='PRIMARY', bgColor, fgColor})=>{
    return (
        <Pressable 
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
            ]}
        >
            <Text 
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                ]}>

                {text}
            </Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container:{
        
        width: '100%',
        padding:15,
        marginVertical: 5,
        borderRadius:15,
        alignItems:'center',

    },
    container_PRIMARY:{
        backgroundColor: '#3b71f3',
        


    },
    container_TERTIARY:{},
    text_PRIMARY: {
        fontWeight: 'bold',
        color: 'white',
        
    },
    text_TERTIARY:{
        fontWeight: 'bold',
        color: 'gray',
        opacity:0.8,
    }

});

export default CustomButton