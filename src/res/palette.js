import { colors, fonts, sizeText, radius, heightText } from 'res/vars.js';

export const title = {
  fontFamily: fonts.bold,
  fontSize: sizeText.big,
  lineHeight: heightText.big,
  color: colors.black,
}

export const miniTitle = {
  fontFamily: fonts.bold,
  fontSize: sizeText.light,
  color: colors.black,
}

export const text = {
  fontFamily: fonts.medium,
  fontSize: sizeText.normal,
  lineHeight: heightText.medium,
  color: colors.black,
};

export const baseText = {
  fontFamily: fonts.medium,
  fontSize: sizeText.light,
  lineHeight: heightText.normal,
  color: colors.black,
};

export const miniText = {
  fontFamily: fonts.medium,
  fontSize: sizeText.mini,
  lineHeight: heightText.light,
  color: colors.black,
};

export const sideText = {
  fontFamily: fonts.medium,
  fontSize: sizeText.micro,
  color: colors.darkGrey,
};

export const textError = {
  fontFamily: fonts.light,
  fontSize: sizeText.light,
  color: colors.red,
};

export const textButton = {
  fontFamily: fonts.medium,
  fontSize: sizeText.light,
  lineHeight: heightText.light,
  color: colors.white,
  textTransform: 'uppercase',
  letterSpacing: 1,
};

export const input = {
  borderWidth: 2,
  borderColor: colors.transparentGrey,
  borderRadius: radius.input,
  height: 50,
  padding: 15,
  backgroundColor: colors.transparentGrey,
};
