import React from 'react'
import {View, Text } from 'react-native'
import CustomButton from '../customButton/customButton'

const onSignInGoogle = () => {
    console.warn("sign in with Google")
}
const onSignInApple = () => {
    console.warn("sign in with apple")
}
const onSignInFacebook = () => {
    console.warn("sign in with facebook")
}

const SocialSignInButtons = () => {
    return (
        <>
            <CustomButton
                    text = "Sign in with Google"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text = "Sign in with Apple"
                    onPress={onSignInApple}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                    
                />
                <CustomButton
                    text = "Sign in with facebook"
                    onPress={onSignInFacebook}
                    bgColor="#8b9dc3"
                    fgColor="#363636"
                    
                />
        </>
    )
}

export default SocialSignInButtons