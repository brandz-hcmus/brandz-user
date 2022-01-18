import { useRoute } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import SearchResult from '../components/SearchResult'
import SearchResultCard from '../components/SearchResultCard'

const SearchPage = ({}) => {
    return (
        <SafeAreaView>
            <HomeHeader />
        </SafeAreaView>
    )
}

export default SearchPage

const styles = StyleSheet.create({
    wrapper:{
        position: 'relative',
    }
})
