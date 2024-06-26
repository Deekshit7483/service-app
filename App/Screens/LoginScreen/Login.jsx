import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

  return (
    <View style={{alignItems:'center'}}>
      <Image 
        source={require('./../../../assets/images/login.jpg')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{fontSize:20,color:Colors.WHITE,textAlign:'center'}}>
          Let's find 
          <Text style={{fontWeight:'bold'}}> professional developers..
          </Text>
        </Text>
        <Text style={{fontSize:15,color:Colors.WHITE,textAlign:"center",marginTop:20}}>Best app to Deleviry software</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={{textAlign:'center',fontSize:17}}>Let's get started</Text>
</TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15
    },
    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'70%',
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    },
    button:{
      padding:15,
      backgroundColor:Colors.WHITE,
       borderRadius:99,
       marginTop:40
    }
})