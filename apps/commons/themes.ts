import { TextStyle } from 'react-native';

const color = {
    primary: {
        One: '#F7CC15',
        Two: '#F65D79',
    },
    system: {
        light: '#FFFFFF',
        dark: '#000000',
        warn: '#F2994A',
        success: '#21AB3B',

    },
    gray: {
        level1: '#C4C4C4',
    },
};

const fontFamily: TextStyle = {
    fontFamily: 'archia-regular-webfont',
    fontWeight: '500',
    color: color.system.dark,
};

type FontType = 'small' | 'normal' | 'normalBold' | 'medium' | 'mediumBold' | 'large' | 'largeBold';

const font: { [key in FontType]: TextStyle } = {
    small: { ...fontFamily, fontSize: 10, fontWeight: '300' },
    normal: { ...fontFamily, fontSize: 12, fontWeight: '300' },
    normalBold: { ...fontFamily, fontSize: 12, fontWeight: '600' },
    medium: { ...fontFamily, fontSize: 14, fontWeight: '300' },
    mediumBold: { ...fontFamily, fontSize: 14, fontWeight: '600' },
    large: { ...fontFamily, fontSize: 16, fontWeight: '300' },
    largeBold: { ...fontFamily, fontSize: 16, fontWeight: '600' },
};

export default {
    color,
    font,
};
