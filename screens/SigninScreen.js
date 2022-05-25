import react, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions } from 'react-native'
import logo from "../assets/banana.jpg"
import CustomInput from '../components/customInput'

const SigninScreen = () => {
    const {height} = useWindowDimensions();
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    return (
        <View style = {styles.root}>
            <Image source = {logo}
                //make logo size 30% of the screen size
                style = {[styles.logo, {height: height * 0.3}] }
            />
            
            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            
            <CustomInput 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
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