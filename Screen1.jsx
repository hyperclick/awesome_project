import React, { useState ,  PropsWithChildren } from 'react';

import { Button, SafeAreaView,  ScrollView,  StatusBar, StyleSheet
  , Text,
  useColorScheme,
  View,} from "react-native";


import {Colors, 
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function Section({ children, title })  {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}



const Screen1 = ({navigation}) => {

  // console.log(navigation);

  const isDarkMode = useColorScheme() === 'dark';
  let q = 0;
  const [fetchResult, setFetchResult] = useState("not pressed yet");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  async function make_request() {
    q++;
    console.log("hello");
    setFetchResult("pressed " + q + " times");


    try {
      //  const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch('http://r-trading.ru/api/test/');
      const json = await response.json();
      setFetchResult(JSON.stringify(json));
    } catch (error) {
      console.error(error);
      setFetchResult(JSON.stringify(error));

    } finally {

    }

  }




    return (
        
        <SafeAreaView style={backgroundStyle}>
          
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            {/* <Header /> */}
            <View
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}>
              <Section title="Step One">
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Section>
              <Button title="fetch" onPress={async () => await make_request()} />
              <Section title="result">
                {fetchResult}
              </Section>

              <Button title="screen2" onPress={()=>navigation.navigate('screen2')}></Button>
              <Section title="See Your Changes">
                <ReloadInstructions />
              </Section>
              <Section title="Debug">
                <DebugInstructions />
              </Section>
              
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});



export default Screen1;