//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImageComp from '../../Components/FastImageComp';
import WrapperContainer from '../../Components/WrapperContainer';
import { FlashList } from '@shopify/flash-list';
import { height, moderateScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import SearchBar from '../../Components/SearchBar';

// create a component
const Search = () => {

    const renderItem = () => {
        return (
            <View>
                <FastImageComp
                    imageStyle={{
                        width: width / 3,
                        height: width/3,
                        borderWidth: 1,
                        borderColor: colors.white
                    }}
                    url={'https://i2.wp.com/i.imgur.com/C4EKjFB.jpg'} />
            </View>
        )
    }

    return (
        <WrapperContainer >

            <View style={{ flex: 1}} >
                <SearchBar
                    placeholder='Search...'
                    inputStyle={{ marginHorizontal: moderateScale(8) }} />
                <FlashList
                    data={[{ title: 'ansas' }, { title: 'ansas' }, { title: 'ansas' }, { title: 'ansas' }]}
                    numColumns={3}
                    renderItem={renderItem}
                    estimatedItemSize={width/2}
                // ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
                />
            </View>

        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Search;
