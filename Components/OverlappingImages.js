import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import paypal from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/visa1.png'
import google from 'C:/Users/KUMI/Documents/projects/ZapTech/ecom/assets/images/mastercard1.jpg'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

const OverlappingImages = () => {
  return (
    <View style={styles.container}>
      <Image
        source={google} // Replace with your image source
        style={[styles.paypal, styles.image1]}
        className='rounded-2xl'
      />
      <Image
        source={paypal} // Replace with your image source
        style={[styles.google, styles.image2]}
        className=' rounded-xl items-center'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200, // Set the width and height of your container
    height: 200,
    alignItems:'center',
    justifyContent:'center',
    marginRight:40
  },
  paypal: {
    position: 'absolute',
    width: hp(46),
    marginRight:40, // Set the width and height of your images
    height: hp(32),
    
  },
  google: {
    
    width: hp(46),
    marginLeft:15, // Set the width and height of your images
    height: hp(32),
    resizeMode:'cover',
    alignItems:'center'
  },
  image1: {
    top: -22,
    left: 0,
    marginLeft:15 // Adjust the left value to control how much of the latter image shows
  },
  image2: {
    top: 25, // Adjust the top value to control the overlap
    left: 0,
  },
});

export default OverlappingImages;
