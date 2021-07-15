import {css} from 'styled-components';

import MontserratBoldWoff from './fonts/Montserrat-Bold.woff';
import MontserratBoldWoff2 from './fonts/Montserrat-Bold.woff2';
import MontserratExtraBoldWoff from './fonts/Montserrat-ExtraBold.woff';
import MontserratExtraBoldWoff2 from './fonts/Montserrat-ExtraBold.woff2';
import MontserratSemiBoldWoff from './fonts/Montserrat-SemiBold.woff';
import MontserratSemiBoldWoff2 from './fonts/Montserrat-SemiBold.woff2';
import MontserratMediumWoff from './fonts/Montserrat-Medium.woff';
import MontserratMediumWoff2 from './fonts/Montserrat-Medium.woff2';
import MontserratRegularWoff from './fonts/Montserrat-Regular.woff';
import MontserratRegularWoff2 from './fonts/Montserrat-Regular.woff2';
import MulishRegularWoff from './fonts/Mulish-Regular.woff';
import MulishRegularWoff2 from './fonts/Mulish-Regular.woff2';
import MulishBoldWoff from './fonts/Mulish-Bold.woff';
import MulishBoldWoff2 from './fonts/Mulish-Bold.woff2';
import MulishExtraBoldWoff from './fonts/Mulish-ExtraBold.woff';
import MulishExtraBoldWoff2 from './fonts/Mulish-ExtraBold.woff2';

export const fonts = css`
    @font-face {
        font-family: 'Montserrat Bold';
        src: url(${MontserratBoldWoff2}) format('woff2'),
            url(${MontserratBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat Semi Bold';
        src: url(${MontserratSemiBoldWoff2}) format('woff2'),
            url(${MontserratSemiBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat Medium';
        src: url(${MontserratMediumWoff2}) format('woff2'),
            url(${MontserratMediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat Regular';
        src: url(${MontserratRegularWoff2}) format('woff2'),
            url(${MontserratRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Mulish Extra Bold';
        src: url(${MulishExtraBoldWoff2}) format('woff2'),
            url(${MulishExtraBoldWoff}) format('woff');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Mulish Bold';
        src: url(${MulishBoldWoff2}) format('woff2'),
            url(${MulishBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Mulish Regular';
        src: url(${MulishRegularWoff2}) format('woff2'),
            url(${MulishRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;
