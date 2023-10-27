import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sort } from '../Constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Sort=() => {
    const [active,setActive]=useState("New Today")
    
  
  return (
    <View>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={sort}
      
      contentContainerStyle={{
        padding:10,paddingTop:hp(3)}}
      renderItem={({item})=>(
        <TouchableOpacity 
        className={`   ${active===item ? ` bg-black  rounded-full` : ''} items-center border rounded-full border-neutral-300 `}
        style={{width:active===item ? active.length*10.7 : 150,}}
        onPress={()=>{setActive(item)}}>
            <Text className={`font-bold text-xl ${active===item ? 'text-white' : 'text-black'}`}>
                {item}
            </Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Sort