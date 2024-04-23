import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi'

export default function BusinessList() {

    const[businessLists,setBusinessList]=useState([]);
    useEffect(()=>{
        getBusinessList();
    },[])

    const getBusinessList=()=>{
        GlobalApi.getBusinessList().then(resp=>{
            console.log(resp);
            setBusinessList(resp.businessLists)
        })
    }

  return (
    <View style={{marginTop:20}}>
      <Heading text={'Latset Business'} isViewAll={true}/>

      <FlatList
        data={BusinessList}
        renderItem={({item,index})=>{
            <View>
            <Text>{item.name}</Text>
            </View>
        }}
      />
    </View>
  )
}