import { View, Text } from 'react-native'
import React from 'react'
import { profile_info,about } from '../Constants'
import { FlatList } from 'react-native'
import * as Icon from 'react-native-heroicons/outline'

const About = () => {
  return (
    <View className='bg-white '>
        {
            about.map((item,index)=>(
                <View className=' flex-row items-center justify-between mt-3' key={index}>
                <View className='flex-row items-center'>
                    <View className='bg-neutral-200 p-1 rounded-xl'>{item.icon}</View>
                    <Text className='font-bold text-2xl ml-4'>{item.name}</Text>
                </View>
                <Icon.ChevronRightIcon color={'black'}/>
            </View>
            ))
        }
      
    </View>
  )
}

export default About