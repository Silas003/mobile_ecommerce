import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../Constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const Category_items=() => {
    const [active,setActive]=useState("Dresses")
    
  
  return (
    <View>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={categories}
      numColumns={4}
      contentContainerStyle={{
        padding:10,paddingTop:hp(3)}}
      renderItem={({item})=>(
        <TouchableOpacity 
        className={`  mr-9 ${active===item ? ` bg-black p-1 rounded-full` : 'border rounded-full'} items-center  border-neutral-300 `}
        style={{width:active===item ? active.length*14.5 : 'auto',}}
        onPress={()=>{setActive(item)}}>
            <Text className={`font-bold text-xl ${active===item ? 'text-white' : 'text-black'}`}>
                {item}
            </Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Category_items