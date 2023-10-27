import { View, Text, TouchableOpacity, Modal,StyleSheet,Pressable} from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-native-heroicons/outline'
import * as Icon2 from 'react-native-heroicons/solid'
import { categories } from '../Constants'
import Category_items from '../Components/Category_items'
import Sort from '../Components/sort'
import Slider from '@react-native-community/slider';
import CustomModal from '../Components/CustomModal'

const Categories = () => {

    const rating=[5,4,3,2]
    const [selected,setSelected]=useState(null)
    const [modalVisible, setModalVisible] = useState(false);

    console.log(selected)
  return (
    <View className='flex-1 bg-white  pt-8'>
        <View className=' flex-row justify-between items-center ml-5 mr-5'>
            <Icon.ChevronLeftIcon strokeWidth={5} color={'black'}/>
            <Icon.MagnifyingGlassIcon  color={'black'}/>
        </View>
        <Text className='font-bold text-2xl mt-6'>Categories</Text>
        {/* categories */}
        <Category_items/>
      {/* price range */}
      <Text className='font-bold text-2xl mt-4'>Price Range</Text>
      <Slider
      
        style={{width: 400, height: 40}}
        minimumValue={0}
        maximumValue={1750}
        value={7}
        minimumTrackTintColor="black"
        maximumTrackTintColor="#000000"
        />
      {/* sort by */}
      <Text className='font-bold text-2xl mt-6'>Sort By </Text>
      <Sort/>
      {/* rating */}
      <Text className='font-bold text-2xl mt-6'>Rating </Text>
      {
        rating.map((item,index)=>(
            <TouchableOpacity key={index} className='ml-3 flex-row items-center justify-between mr-3 mt-2'
            onPress={()=>(setSelected(item))}>
                <Text className='text-2xl'>{'⭐'.repeat(item)}</Text>
                <View className={`w-5 h-5 bg-neutral-300 rounded-full ${selected==item ? 'bg-black': ''} items-center justify-center`}
                >
                    {
                        selected==item && <Icon.CheckIcon color={selected==item ? 'white': ''} size={18} strokeWidth={3}/>
                    }
                </View>
            </TouchableOpacity>
        ))
      }
      
      {/* button */}
      <View className='items-center justify-center pt-8'>
        <TouchableOpacity className='bg-black rounded-full w-[80%] items-center justify-center p-4'
        onPress={() => setModalVisible(true)}>
            <Text className='text-white font-bold text-2xl'>Apply Now</Text>
        </TouchableOpacity>
      </View>
      {/* custom modal */}
       <View >
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      >
      <View className='bg-black/75 items-center justify-center flex-1  '>
         <View className=' p-10 bg-white rounded-2xl w-[80%] h-[45%] mt-9 items-center'>
              <View className=' p-6 items-center bg-black rounded-full'>
                  <Icon2.ShoppingBagIcon color={'white'} size={35}/>
              </View>
              <Text className=' text-center mt-5 font-bold text-2xl'>Successful</Text>
              <Text className='text-neutral-400 text-base font-bold'>You have Successfully added product to your shopping cart list</Text>
              <View className='items-center justify-center pt-8'>
                  <TouchableOpacity className='bg-black rounded-full w-[80%] items-center justify-center p-2'
                  onPress={() => setModalVisible(!modalVisible)}>
                      <Text className='text-white font-bold text-2xl'>Checkout</Text>
                  </TouchableOpacity>
              </View>
              
         </View>
      </View>
    </Modal> 
  </View>
    </View>
  )
}

export default Categories