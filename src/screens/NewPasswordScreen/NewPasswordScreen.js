import react, {useState} from 'react'
import { View, Text, Image, StyleSheet,useWindowDimensions, ScrollView } from 'react-native'

import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const NewPasswordScreen = () => {
    const { code, setCode } = useState('');
    const {newPassword, setNewPassword} = useState('')
    const onSendPressed = () => {
        console.warn("sentdyson")
    }

    const onBackToSignIn = () => {
        console.warn("back to sign in")
    }
    
    const onSubmitPressed = () => {
        console.warn("submit pressed")
    }

    return (
        <ScrollView>
            <View style={styles.root}>

                <Text style = {styles.title}>
                    Reset your Password
                </Text>

                <CustomInput
                    placeholder="Enter the confirmation code"
                    value={code}
                    setValue={setCode} />
                
                <CustomInput
                    placeholder={"Enter your new password"}
                    value = {newPassword}
                    setValue={setNewPassword} />

                <CustomButton
                    text = "submit"
                    onPress={onSubmitPressed}
                    type = "PRIMARY"
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
export default NewPasswordScreen