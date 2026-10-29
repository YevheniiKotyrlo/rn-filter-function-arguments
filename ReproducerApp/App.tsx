import { ScrollView, StyleSheet, Text, View } from 'react-native';

const filters = [
  { testID: 'brightness-no-argument', filter: 'brightness()' },
  { testID: 'brightness-one', filter: 'brightness(1)' },
  { testID: 'brightness-px', filter: 'brightness(2px)' },
  { testID: 'brightness-two', filter: 'brightness(2)' },
] as const;

function App() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      {filters.map(({ testID, filter }) => (
        <View key={testID} style={styles.row}>
          <View testID={testID} style={[styles.box, { filter }]} />
          <Text style={styles.label}>{filter}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 48,
    gap: 16,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  box: {
    width: 96,
    height: 96,
    backgroundColor: '#808080',
  },
  label: {
    color: '#000000',
  },
});

export default App;
