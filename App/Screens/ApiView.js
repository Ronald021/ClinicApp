import React, { Component } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator,Image } from 'react-native';
import styles from './ApiStyles';
const ApiView = (props) => {
    const { goForFetch, goForAxios, fromFetch, fromAxios, axiosData, renderItem, FlatListItemSeparator, dataSource, loading } = props
    return (
        
        <View style={styles.parentContainer}>
            
           
            <View >
        <Image 
          style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: 100 }}
          source={{uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-creative-medical-technology-blue-poster-banner-background-image_182319.jpg'}}
        />

      </View>

            <View>
                <Text style={styles.textStyle}>MultiClinics</Text>
            </View>
            <View style={{ margin: 20,borderRadius: 15, }}>
                <Button 
                    title={'Show Medicine Stock'}
                    onPress={goForAxios}
                    color='#0F6161'
                />
            </View>


            {
               <FlatList
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.idMedicine.toString()}
                />
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'white'}}>Loading Data...</Text>
                </View>
            }
        </View>
    )
}
export default ApiView;