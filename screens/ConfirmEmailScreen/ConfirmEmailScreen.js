import react, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native'

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const ConfirmEmailScreen = () => {
    const { code, setCode } = useState('');
    
    const onConfirmPressed = () => {
        console.warn("confirmed")
    }

    const onResendCodePressed = () => {
        console.warn("code resent")
    }
    const onBackToSignIn = () => {
        console.warn("back to sign in")
    }
    
    const onSignInPressed = () => {
        console.warn("sign up pressed")
    }

    return (
        <ScrollView>
            <View style={styles.root}>

                <Text style = {styles.title}>
                    Confirm your email
                </Text>

                <CustomInput
                    placeholder="Enter Your Confirmation Code"
                    value={code}
                    setValue={setCode} />
                
                <CustomButton
                    text = "Confirm"
                    onPress={onConfirmPressed}
                    type = "PRIMARY"
                />
                
                <CustomButton
                    text = "Didn't get? resend code"
                    onPress={onResendCodePressed}
                    type = "SECONDARY"
                />
                
                <CustomButton
                    text = "Back to Sign in"
                    onPress={onBackToSignIn}
                    type = "TERTIARY"
                />

            </View>
        </ScrollView>
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
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,


    },
    link:{
        color: '#FDB075'
    },

});
export default ConfirmEmailScreen