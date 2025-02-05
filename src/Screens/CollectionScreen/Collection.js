import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, StatusBar,Dimensions, Animated, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Close from 'react-native-vector-icons/AntDesign';


import styles from './Style'
import LinearGradient from 'react-native-linear-gradient'
import data from '../../Dummydata/Dummydata';


// console.log(">>>>>>>>>>>>>>",data)


const Collection = ({ navigation }) => {

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    


    const handleItemClick = (item) => {

        console.log(">>>>>>>>>>>>>>>>>>>>>>>", item)
        setSelectedItem(item);
        setModalVisible(true)

    };


   

    



    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const maxScroll = contentSize.height - layoutMeasurement.height;
        const currentScroll = contentOffset.y;
        const percentage = (currentScroll / maxScroll) * 100 || 0;
        setScrollPercentage(percentage);
    };

    

    const handleitem = ({ item }) => {


      

       
        return (
            <View style={styles.flatlistview}>

                <TouchableOpacity onPress={() => handleItemClick(item)}>


                <View style={styles.View1}>
                


<Image
    source={item.imageUrl}
    resizeMode="cover"
    
    style={item.id === '4' ? styles.imagePlus : styles.imageother}
    
 
/>

<Text style={styles.textcapture}>
    {item.title}
</Text>

<Text style={{ color: 'rgba(17, 179, 248, 1)' }}>
    {item.description}
</Text>

    </View>
       


                    {/* <View style={styles.View1}>


                        <Image
                            source={item.imageUrl}
                            resizeMode="cover"
                            // style={{width:50,height:50}}
                            style={it}
                         
                        />

                        <Text style={styles.textcapture}>
                            {item.title}
                        </Text>

                        <Text style={{ color: 'rgba(17, 179, 248, 1)' }}>
                            {item.description}
                        </Text>
                    </View > */}

                    
                </TouchableOpacity>

       

            </View>
        )
    }



    return (


        <ImageBackground source={require('../../assets/Images/background.png')} style={styles.bgimage} >
            <StatusBar
                translucent
                backgroundColor="transparent"
            />
            <View style={styles.bottomcontainer}>
                <View style={styles.collectionview}>
                    <Text style={styles.collectiontext}>
                        My Collections
                    </Text>
                </View>


            </View>
     

            <View style={{ flex: 0.75, alignItems: 'center' }}>
                
                <FlatList
                    data={data}
                    renderItem={handleitem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    
                />
            </View>
           


            <View style={[styles.scrollBar, { backgroundColor: '#11B3F8', height: '41%' }]} handleScroll={handleScroll} >

                <View style={[styles.scrollThumb, { height: '50%' }]} />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.mainview}>

                
  
                    <View style={styles.modalview}>
                 
                  <View style={{top:responsiveHeight(-4),right:responsiveWidth(5)}}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.icon}>
                        <Close name="closecircle" size={25} color="#F81111" />
                    </TouchableOpacity>
                    </View>
                        <View style={{ flex: 0.4 }}>
                            <Image
                                source={selectedItem?.imageUrl}
                                style={styles.image}
                            />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{color:'#0071A2',fontSize:responsiveFontSize(1.5)}}>Local name:</Text>
                                <Text style={styles.des}>{selectedItem?.Localname}</Text>
                            </View>

                            <View style={{ flexDirection: "row", }}>
                                <Text style={{color:'#0071A2',fontSize:responsiveFontSize(1.5)}}>English name:</Text>
                                <Text style={styles.des}>{selectedItem?.Englishname}</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{color:'#0071A2',fontSize:responsiveFontSize(1.5)}}>Scientific name:</Text>
                                <Text style={styles.des}>{selectedItem?.Scientificname}</Text>
                            </View>

                            <View style={{ flexDirection: "row", }}>
                                <Text style={{color:'#0071A2',fontSize:responsiveFontSize(1.5)}}>Location where the image was taken:</Text>
                                <Text style={styles.des}>{selectedItem?.Location}</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{color:'#0071A2',fontSize:responsiveFontSize(1.5)}}>Date and time of fish capture:</Text>
                                <Text style={styles.des}>{selectedItem?.time}</Text>
                            </View>

                            <View style={{ }}>
                                <Text style={{color:'#0071A2',fontSize:responsiveFontSize(1.5)}}>Description:</Text>
                                
                                <Text style={styles.des1}>{selectedItem?.Para}</Text>
                                <Text style={{ ...styles.des1, marginTop: 5 }}>{selectedItem?.para1}</Text>
                            </View>

                            <View style={{ }}>
                                <Text style={{color:'#0071A2',fontSize:responsiveFontSize(1.5)}}>Safety for Consumption:</Text>
                                <Text style={{ ...styles.des1, marginTop: 3 }}>{selectedItem?.safty}</Text>
                            </View>
        

                            
                            
                            
                            
                            
                            
                           

                            


                        </View>

                    </View>
                </View>
            </Modal>
            
        </ImageBackground>





    )
}

export default Collection
