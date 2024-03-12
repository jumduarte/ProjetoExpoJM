import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
      source={{uri:'https://www.bloomberglinea.com/resizer/G0z-bSCEZbSGPwiIza9DYEvx9ao=/600x0/filters:format(webp):quality(75):focal(1600x660:1610x670)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/O6YGON2I3RGJ5PO7OZMCYRNMRU.jpg'}}
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
