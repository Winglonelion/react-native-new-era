import { responsiveFontSize } from 'utils/screen';
import Platform from 'utils/platform';

export const FontFamily = {
  Helvetica: Platform.isIos ? 'Helvetica Neue' : 'Helvetica_Neue',
  System: 'System',
};

const res12 = responsiveFontSize(12);
const res13 = responsiveFontSize(13);
const res14 = responsiveFontSize(14);
const res15 = responsiveFontSize(15);
const res16 = responsiveFontSize(16);
const res18 = responsiveFontSize(18);
const res21 = responsiveFontSize(21);
const res25 = responsiveFontSize(25);
const res30 = responsiveFontSize(30);
const res50 = responsiveFontSize(50);

const CommonFonts = {
  res1: responsiveFontSize(1),
  res2: responsiveFontSize(2),
  res3: responsiveFontSize(3),
  res4: responsiveFontSize(4),
  res5: responsiveFontSize(5),
  res6: responsiveFontSize(6),
  res7: responsiveFontSize(7),
  res8: responsiveFontSize(8),
  res9: responsiveFontSize(9),
  res10: responsiveFontSize(10),
  res11: responsiveFontSize(11),
  res12,
  res13,
  res14,
  res15,
  res16,
  res17: responsiveFontSize(17),
  res18,
  res19: responsiveFontSize(19),
  res20: responsiveFontSize(20),
  res21,
  res22: responsiveFontSize(22),
  res23: responsiveFontSize(23),
  res24: responsiveFontSize(24),
  res25,
  res26: responsiveFontSize(26),
  res27: responsiveFontSize(27),
  res28: responsiveFontSize(28),
  res29: responsiveFontSize(29),
  res30,
  res40: responsiveFontSize(40),
  res50,
  res55: responsiveFontSize(55),
  res60: responsiveFontSize(60),
  res65: responsiveFontSize(65),
  res70: responsiveFontSize(70),
  res80: responsiveFontSize(80),
  res90: responsiveFontSize(90),
  res100: responsiveFontSize(100),
  res110: responsiveFontSize(110),
  res120: responsiveFontSize(120),
  res130: responsiveFontSize(130),
  res140: responsiveFontSize(140),
  res150: responsiveFontSize(150),
};

export default CommonFonts;
