import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const { user, isLoading } = useUser();
    return user && (
        <View style={styles.container}>

        {/* profile section */}
        <View style={styles.profilemaincontainer}>

            <View style={styles.profilecontainer}>
                <Image source={{ uri: user?.imageUrl }}
                    style={styles.userImage} />
                <View>
                    <Text style={{color:Colors.WHITE,fontFamily:'outfit'}}>Welcome,</Text>
                    <Text style={{color:Colors.WHITE, fontSize:20,fontFamily:'outfit-medium'}}>{user?.fullName}</Text>
                </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>
            {/*search bar section */}

            <View style={styles.searchbarcontainer}>
                <TextInput placeholder='Search' 
                    style={styles.TextInput}/>
                    <FontAwesome name="search" 
                    style={styles.searchbtn} size={24} color={Colors.PRIMARY} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25  
    },

    profilemaincontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    profilecontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },

    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },
    TextInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%'
    },
    searchbarcontainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10,
        fontFamily:'outfit'
    },
    searchbtn:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8
    }
});
