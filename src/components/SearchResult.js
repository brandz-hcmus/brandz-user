import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ScreenSizes } from '../share/utils/sizes'
import SearchResultCard from './SearchResultCard'

const SearchResult = ({visible,data,notFound}) => {
    if(!visible) return null;
    // if(visible && data.length ==0 && !notFound) return null;

    // if(notFound) return <Text>{notFound}</Text>
    return (
        <View style={styles.wrapper}>
        {visible && <ScrollView>
            {[1,2,3,4,5,6,7,8].map((item,index)=>(
                <SearchResultCard />
            ))}
        </ScrollView>}
    </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'rgba(0,0,0,0.3)',
        width:ScreenSizes.vw * 0.96,
        display: 'flex',
        flexDirection:'column',
        padding:8,
        borderRadius:8,
        height: ScreenSizes.vh/2,
        position: 'absolute',
        top:60,
        left:8,
        zIndex:999
    }
})
