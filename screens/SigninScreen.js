import react from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions } from 'react-native'
import logo from "../assets/banana.jpg"

const SigninScreen = () => {
    const {height} = useWindowDimensions();
    
    return (
        <View style = {styles.root}>
            <Image source = {logo} style = {styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width:'60%',
        maxWidth: 400,
        height: 100,
    },

});
export default SigninScreen