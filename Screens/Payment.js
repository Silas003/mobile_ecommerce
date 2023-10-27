import { View, Text,Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import * as Icon from 'react-native-heroicons/outline'
import { payments,product_items} from '../Constants'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Payment = () => {
    const [selected,setSelected]=useState(null)
  return (
    <View className='flex-1 bg-white ml-4 mr-4 pt-6'>
        <Icon.ChevronLeftIcon color={'black'}/>
        {/* payment methods */}
      <Text className='font-bold text-2xl mt-2'>Payment</Text>
      <View>
      {
        payments.map((item,index)=>(
                    <TouchableOpacity onPress={()=>(setSelected(item))}
                    key={index} className={`flex-row items-center p-2 justify-between mb-4 ${selected==item ? 'bg-black border-neutral-300': 'bg-white'}   shadow-md w-full   rounded-xl`}>
                        <View className='flex-row items-center justify-between'>
                            <Image source={item.image} style={{width:hp(6),height:hp(6),resizeMode:"center"}} className={` ${selected==item ? 'bg-black ': 'bg-neutral-300 rounded-full'}  rounded-full ml-3 `}/>
                            <View className='ml-4'>
                                <Text className='font-bold text-xl'>{item.name}</Text>                        
                            </View>
                        </View>
                        <View className={`w-4 h-4 bg-white border rounded-full ${selected==item ? 'bg-white ': ''} items-center justify-center`}>
                    {
                        selected==item && <Icon.CheckIcon color={selected==item ? 'black': ''} size={15} strokeWidth={3}/>
                    }
                </View>  
                    </TouchableOpacity>
                ))
            }
      </View>
      <TouchableOpacity>
      <View className='items-center justify-center p-1 border rounded-xl border-neutral-200 flex-row outline-dashed outline-2 outline-offset-2'>
            <View className='p-2 rounded-full border border-neutral-400'>
                <Icon.PlusIcon color={'black'}/>
            </View>
            
                <Text className='ml-3 text-lg font-semibold'>Add Card</Text>
            
            
      </View>
      </TouchableOpacity>
      {/* history */}
      <Text className='font-bold text-2xl mt-6'>History</Text>
      <View className='mt-8 '>
            {
                product_items.map((item,index)=>(
                    <View key={index} className='flex-row items-center justify-between mb-4 p-1 bg-white shadow-md w-full rounded-xl'>
                        <View className='flex-row items-center justify-center'>
                            <Image source={item.image} style={{width:hp(7),height:hp(7)}} className='bg-neutral-300 rounded-xl ml-3'/>
                            <View className='ml-4'>
                                <Text className='font-bold text-xl'>{item.name}</Text>
                                <Text className='font-bold text-neutral-300 text-lg'>{item.Description}</Text>
                                <View className='flex-row items-center justify-center mr-16 bg-neutral-300 rounded-full'>
                                    <Icon.ArrowTrendingUpIcon color={'black'}/>
                                    <Text className='text-base'>Send</Text>
                                </View> 
                            </View>
                        </View>
                        
                        <Text className='font-bold text-xl'>${item.price}</Text>    
                    </View>
                ))
            }
         </View>
    </View>
  )
}

export default Payment