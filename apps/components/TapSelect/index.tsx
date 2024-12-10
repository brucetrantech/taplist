import React, {useCallback, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';

type TapSelectProps = {
  options: Array<{
    label: string;
    value: string;
  }>;
  label: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export default function TapSelect({
  label,
  value,
  options,
  placeholder = 'Chọn...',
  disabled = false,
  onChange,
}: TapSelectProps) {
  const selectRef = useRef<RNPickerSelect>(null);

  const onToggle = useCallback(() => {
    if (selectRef.current) {
      selectRef.current.togglePicker(true);
    }
  }, [selectRef]);

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.flex}
        onPress={onToggle}
        disabled={disabled}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
      {options?.length > 0 ? (
        <RNPickerSelect
          ref={selectRef}
          value={value}
          style={{
            inputAndroid: styles.inputAndroid,
            inputIOSContainer: styles.inputIOSContainer,
          }}
          placeholder={{label: placeholder}}
          useNativeAndroidPickerStyle={false}
          onValueChange={onChange}
          items={options}
        />
      ) : null}
    </View>
  );
}
