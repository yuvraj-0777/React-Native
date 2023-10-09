import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { IconProps } from 'react-native-vector-icons/Icon'

type iconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconProps) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color='#F7CD2E' />
            break;

        case 'cross':
            return <Icon name="times" size={38} color='#38CC77' />
            break;
    
        default:
            return <Icon name="pencil" size={38} color='#0D0D0D' />
            break;
    }
}



const styles = StyleSheet.create({})

export default Icons;