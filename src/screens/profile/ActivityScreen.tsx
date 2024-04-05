import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ProgressBar } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
const ActivityScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Post');
  return (
    <View className='bg-white border-t-[0.2px] border-gray-400 h-full'>
      <View className='flex-row items-center space-x-5 p-5'>
        <Image source={{ uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg' }}
          className='h-20 w-20 rounded-full' />
        <View className='flex-col '>
          <Text className='font-semibold text-lg'>Tuan chim nho</Text>
          <Text>Chim dai 10 cm thich tap Gym</Text>
        </View>
      </View>
      <View className='border-[3px] bg-gray-100 border-gray-400 p-5 mx-5 flex-col space-y-5'>
        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center space-x-3'>
            <Text className='text-lg text-gray-500 font-semibold'>Problems solution status</Text>
            <AntDesign name='exclamationcircle' size={20} color={'gray'} /></View>

          <Text className='font-semibold text-gray-500 top-4'>Level 1</Text>
        </View>
        <ProgressBar progress={0.5} color={"#788896"} />
        <Text className='text-base text-gray-500 font-semibold'>Only 1 problem(s) to level up</Text>
      </View>

      <View className="p-5">
        <View className="flex-row justify-between px-5">
          {['Post', 'Comment/Reply', 'Like'].map((tab) => (
            <TouchableOpacity onPress={() => setSelectedTab(tab)}>
              <Text
                className={`text-base ${selectedTab === tab ? 'font-semibold' : ''
                  }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

      </View>
      <View className='mx-5 border-t-[2px] border-gray-400'></View>
      <View className='flex items-center mt-10 justify-center h-fit'>
        <Text className='text-xl font-bold'>No posts yet</Text>
      </View>

    </View>
  )
}

export default ActivityScreen