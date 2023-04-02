import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef} from 'react';

export default function InputItem(props) {
  const {
    label = '',
    onchange = () => {},
    placeholder = '',
    value = '',
    secure = false,
    RightIcon = '',
    onIconCllick = () => {},
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={text => onchange(text)}
          value={value}
          secureTextEntry={secure}
          style={styles.TextInput}
        />
        {RightIcon && (
          <Pressable
            onPress={() => {
              onIconCllick();
            }}
            style={{marginRight: 10}}>
            <RightIcon />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  label: {
    fontWeight: '500',
    color: '#365B72',
  },
  TextInput: {
    flex: 1,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    marginVertical: 7,
    height: 50,
  },
});
