import React  from 'react';
import { Button, Text } from 'react-native';

const Screen2 = ({navigation}) => {
    return (
        <>
        <Text>Screen2</Text>
        <Button title='screen1' onPress={()=>navigation.navigate("screen1")} />
        </>
    )
}

export default Screen2;