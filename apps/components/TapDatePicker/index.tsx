import React, { useCallback, useMemo, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import { convertToDate, formatDate } from '@/commons/utils';

type TapDatePickerProps = {
    label: string;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
}

export default function TapDatePicker ({
    label,
    value,
    disabled = false,
    onChange,
}: TapDatePickerProps) {

    const [open, setOpen] = useState(false);

    const datePicker = useMemo(() => convertToDate(value), [value]);

    const onDateChange = useCallback((date: Date) => {
        const confirmedDate = formatDate(date);
        onChange(confirmedDate);
    }, [onChange]);

    const onConfirm = useCallback((date: Date) => {
        setOpen(false);
        onDateChange(date);
    }, [onDateChange]);

    return (
        <>
            <TouchableOpacity
                style={styles.view}
                onPress={() => setOpen(true)}
                disabled={disabled}
            >
                <Text style={styles.label}>{label}</Text>
                <Text>{value}</Text>
            </TouchableOpacity>
            <DatePicker
                mode="date"
                modal
                open={open}
                onConfirm={onConfirm}
                onCancel={() => setOpen(false)}
                date={datePicker || new Date()}
                onDateChange={onDateChange}
            />
        </>
    );
}
