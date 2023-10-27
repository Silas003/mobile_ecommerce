import { View, Text,Modal,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import * as Icon from 'react-native-heroicons/outline'
import * as Icon2 from 'react-native-heroicons/solid'

const CustomModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
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
  )
}

export default CustomModal