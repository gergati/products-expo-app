import { Ionicons } from '@expo/vector-icons';
import { View, TextInputProps, StyleSheet, TextInput } from 'react-native'
import { useThemeColor } from '../hooks/useThemeColor';
import { useRef, useState } from 'react';

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
    style: any
}

const ThemedTextInput = ({ icon, style, ...rest }: Props) => {

    const primaryColor = useThemeColor({}, 'primary')
    const textColor = useThemeColor({}, 'text')
    const inputRef = useRef<TextInput>(null)
    const [isActive, setIsActive] = useState(false)

    return (
        <View
            style={[
                {
                    ...styles.border,
                    borderColor: isActive ? primaryColor : '#ccc'
                },
                style,
            ]}
            onTouchStart={() => inputRef.current?.focus()}
        >
            {icon && (
                <Ionicons
                    name={icon}
                    size={24}
                    color={textColor}
                    style={{ marginRight: 10 }}
                />
            )}
            <TextInput
                placeholderTextColor='#5c5c5c'
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                style={{
                    color: textColor,
                    marginRight: 10,
                    flex: 1
                }}
                {...rest}
            />
        </View>
    )
}

export default ThemedTextInput;


const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})