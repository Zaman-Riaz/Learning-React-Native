import React, { useState } from "react";
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function ImgCrop() {

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text
        style={{ fontWeight: 'bold', fontSize: 19, color: 'orange', textAlign: 'center', marginTop: 20 }}
      >Choose an option</Text>

      <TouchableOpacity
        onPress={opengallery}
        style={styles.button2}>
        <Text style={styles.text}> Choose from gallery  </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onSelectCamera}
        style={styles.button2}>
        <Text style={styles.text}> Upload from camera  </Text>
      </TouchableOpacity>
    </View>
  );


  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );





  // const onSelectGallery = () => {
  //   // select image from gallery
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     includeBase64: true,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image);
  //   });

  // }


  const onSelectCamera = () => {
    // select image from camera
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
    .then(res => {
      console.log(res);
    })
    .catch((err) => {
      console.log('Error found while picking image from gallery: ', err);
    });

  }

  // Note: Function to open gallery...!
  const opengallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    })
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Error found while picking image from gallery: ', err);
      });
  };

  const sheetRef = React.useRef(null);


  return (

    <>
      <View style={styles.container}>

        <TouchableOpacity
          onPress={opengallery}
          style={styles.button}>
          <Text style={styles.text}> Upload Image  </Text>
        </TouchableOpacity>

      </View>

      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
      /> */}

    </>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAF5EB',
    // alignItems: 'center',

  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 80,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  button: {
    width: 250,
    padding: 18,
    backgroundColor: '#28B0D8',
    borderRadius: 20,
    marginLeft: 70,
    marginTop: 30
  },
  button2: {
    width: 220,
    padding: 18,
    backgroundColor: '#28B0D8',
    borderRadius: 20,
    // marginLeft: 80,
    marginHorizontal: 80,
    marginTop: 40
  }
})