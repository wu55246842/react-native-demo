import { useTheme } from '@react-navigation/native';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Text as NativeText, StyleSheet } from 'react-native';
import { typography } from '../../config/typography';

type StyledTextProps = {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
  font?: 'bold' | 'regular' | 'medium' | 'semiBold' | 'light';
  variant?: 'text' | 'link' | 'primary' | 'secondary';
  style?: StyleProp<TextStyle>;
};

/**
 * @returns Text component
 * @param children: React.ReactNode - text
 * @param size: xs | sm | md | lg
 * @param fonts: bold | regular | semibold | light
 * @param variant: text | link
 * @param style: StyleProp<TextStyle> - custom style
 */

const StyledText = ({
  style,
  size = 'md',
  font = 'regular',
  variant = 'text',
  ...rest
}: StyledTextProps & NativeText['props']) => {
  const { colors } = useTheme();

  const { primary } = typography;

  const sizes: Record<NonNullable<StyledTextProps['size']>, number> = {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 22,
  };
  const fonts: Record<NonNullable<StyledTextProps['font']>, string> = {
    bold: primary.bold,
    regular: primary.regular,
    medium: primary.medium,
    semiBold: primary.semiBold,
    light: primary.light,
  };
  const variants: Record<NonNullable<StyledTextProps['variant']>, string> = {
    text: colors.text,
    link: colors.link,
    primary: colors.primary,
    secondary: colors.secondary,
  };

  return (
    <NativeText
      style={StyleSheet.compose({ fontSize: sizes[size], fontFamily: fonts[font], color: variants[variant] }, style)}
      {...rest}
    />
  );
};

export default StyledText;
