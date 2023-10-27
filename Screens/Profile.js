import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-heroicons/outline'
import profile from '../assets/images/profile.jpg'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import ProfileInfo from '../Components/ProfileInfo'
import About from '../Components/About'
const Profile = () => {
  return (
    <ScrollView className='flex-1 bg-white  ' style={{backgroundColor:'white'}}>
       <View className='ml-2 mr-3 flex-1'> 
         {/* button navigators */}
            <View className='flex-row pt-11 items-center justify-between'>
                <View className='flex-row pt-9 items-center justify-between' >
                <Icon.ChevronLeftIcon size={33} stroke={'black'} strokeWidth={3}/>
                <Text>-</Text>
                </View>
                <Icon.Cog6ToothIcon size={35}/>
            </View>  
            {/* profile  bar*/}
            <View className='w-[100%] h-[90px] bg-white rounded-xl ml-3 mr-3 shadow-2xl mt-5 flex-row items-center'>
                <View >
                    <Image source={profile} style={{width:hp(10),height:hp(10)}} className='rounded-xl'/>
                </View>
                <View className='ml-2'>
                    <Text className='font-bold text-2xl'>Fscreation</Text>
                    <Text className='text-lg text-neutral-300'>Fscreation441@gmail.com</Text>
                </View>
            </View>
            {/* profile information */}
            <View className='mt-10 border  bg-white border-neutral-200 rounded-xl p-6'>
                <ProfileInfo/>
            </View>
             {/* about app  */}
             <View className='mt-10 border bg-white border-neutral-200 rounded-xl p-6'>
                <About/>
            </View>
       </View>
    </ScrollView>
  )
}

export default Profile