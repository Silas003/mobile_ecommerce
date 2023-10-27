import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import OverlappingImages from '../Components/OverlappingImages'
import * as Icon from 'react-native-heroicons/outline'
import cut from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/cut.png'
const PaymentCards = () => {
  return (
    <View className='flex-1 pt-8 mr-3 ml-3'>
         <Icon.ChevronLeftIcon size={25} color={'black'} strokeWidth={6}/>
        <Text className='font-bold text-2xl mt-2'>Payment</Text>
        <View className='items-center mt-4'>
        <Image source={cut}/>
        </View>
        <Text className='font-bold text-2xl mt-6'>Card Details</Text>
        <View className='flex  mt-5 border p-5 w-[90%] rounded-2xl border-neutral-300  justify-center '>
            <TextInput placeholder='Card Number'>
        </TextInput>
        </View>
        <View className='flex  mt-5 border p-5 w-[90%] rounded-2xl border-neutral-300  justify-center '>
            <TextInput placeholder='Exp Date'>
        </TextInput>
        </View>
        <View className='flex  mt-5 border p-5 w-[90%] rounded-2xl border-neutral-300  justify-center '>
            <TextInput placeholder='CVV'>
        </TextInput>
       </View> 
       {/* cancel & confirm */}
       <View className='flex-row items-center justify-between mt-6'>
        <TouchableOpacity>
                    <Text className='font-bold text-neutral-300 text-2xl'>Cancel</Text>        
        </TouchableOpacity>

        <TouchableOpacity className='bg-black p-4 rounded-2xl'>
                    <Text className='text-white font-bold text-xl'>Confirm</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default PaymentCards