import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-heroicons/outline'
import { address, product_items } from '../Constants'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import shoe from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/Yellow.png'

const Delivery_Address = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false} style={{flex:1}}
    className='flex-1 bg-white mr-6 ml-6 pt-6'>
         <Icon.ChevronLeftIcon size={25} color={'black'} strokeWidth={6}/>

         {/* delivery information */}
         <Text className='font-bold text-2xl mt-3'>Delivery Address</Text>
         <View className='bg-white shadow-xl w-full  p-1 rounded-xl mt-1'>
            <Text className='font-bold text-xl mt-2'>street : <Text className='text-neutral-300 text-lg font-normal'>3521 Pearl Street</Text></Text>
            <Text className='font-bold text-xl mt-2'>City : <Text  className='text-neutral-300 text-lg font-normal'>Nagercoil</Text></Text>
            <Text className='font-bold text-xl mt-2'>State/Province/area : <Text  className='text-neutral-300 text-lg font-normal'>Tamil</Text></Text>
            <Text className='font-bold text-xl mt-2'>Phone number : <Text  className='text-neutral-300 text-lg font-normal'>887053145</Text></Text>
            <Text className='font-bold text-xl mt-2'>Zip code : <Text  className='text-neutral-300 text-lg font-normal'>00233</Text></Text>
            <Text className='font-bold text-xl mt-2'>Country calling code : <Text  className='text-neutral-300 text-lg font-normal'>+233</Text></Text>
            <Text className='font-bold text-xl mt-2'>country : <Text className='text-neutral-300 text-lg font-normal'>Ghana</Text></Text>
         </View>
         {/* product information */}
         <Text className='font-bold text-2xl mt-3'>Product Item</Text>  
         <View>
            {
                product_items.map((item,index)=>(
                    <View key={index} className='flex-row items-center  mb-4  bg-white shadow-md w-full  p-1 rounded-xl'>
                        <Image source={item.image} style={{width:hp(10),height:hp(10)}} className='bg-neutral-300 rounded-xl ml-3'/>
                        <View className='ml-4'>
                            <Text className='font-bold text-xl'>{item.name}</Text>
                            <Text className='font-bold text-neutral-300 text-lg'>{item.Description}</Text>
                            <Text className='font-bold text-xl'>${item.price}</Text>
                        </View>    
                    </View>
                ))
            }
         </View>
         {/* promo code */}
         <Text className='font-bold text-2xl mt-2'>Promo Code</Text>
         <View  className='flex-row items-center mt-2 mb-4  bg-white shadow-lg w-full  p-1 rounded-xl'>
            <View className='bg-black rounded-lg w-12 items-center justify-center h-12 ml-3'>
                <Icon.SparklesIcon color={'white'}/>
            </View> 
                <View className='ml-4'>
                    <Text className='font-bold text-xl'> Add Promo Code</Text>
                    <Text className='font-bold text-neutral-300 text-lg'>#rika2023</Text>
                                   
            </View>    
        </View>
        {/* order placement */}
        <View className='flex-row justify-between items-center'>
            <View>
                <Text className='font-bold text-neutral-300'>Total price</Text>
                <Text className='font-bold text-xl'>$443.00</Text>
            </View>

            <View className='bg-black p-5 rounded-full'>
                <Text className='text-white font-bold text-xl'>Place Order</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default Delivery_Address