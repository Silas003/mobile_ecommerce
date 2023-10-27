import { View, Text } from 'react-native'
import React from 'react'
import { profile_info } from '../Constants'
import { FlatList } from 'react-native'
import * as Icon from 'react-native-heroicons/outline'

const ProfileInfo = () => {
  return (
    <View className='bg-white '>
        {
            profile_info.map((item,index)=>(
                <View className=' flex-row items-center justify-between mt-3' key={index}>
                <View className='flex-row items-center'>
                    <View className='bg-neutral-200 p-1 rounded-xl'>{item.icon}</View>
                    <Text className='font-bold text-2xl ml-4'>{item.name}</Text>
                </View>
                <Icon.ChevronRightIcon color={'black'}/>
            </View>
            ))
        }
      {/* <FlatList
      data={profile_info}
      renderItem={({item})=>(
        <View className='flex-1 flex-row items-center justify-between mt-3'>
            <View className='flex-row items-center'>
                <View className='bg-neutral-200 p-1 rounded-xl'>{item.icon}</View>
                <Text className='font-bold text-2xl ml-4'>{item.name}</Text>
            </View>
            <Icon.ChevronRightIcon color={'black'}/>
        </View>
      )}/> */}
    </View>
  )
}

export default ProfileInfo