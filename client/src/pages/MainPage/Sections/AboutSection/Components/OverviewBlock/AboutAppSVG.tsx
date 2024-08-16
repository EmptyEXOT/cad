import React, {ReactNode, FC} from 'react';
import classNames from "classnames";

interface AboutAppSvgProps {
    children?: ReactNode,
}

export const AboutAppSvg: FC<AboutAppSvgProps> = ({
                                                      children,
                                                      ...props
                                                  }) => {
    return (
        <svg className={classNames('w-full')} viewBox="0 0 328 185" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_179_500)">
                <mask id="path-1-inside-1_179_500" fill="white">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H320C324.418 0 328 3.58172 328 8V177C328 181.418 324.418 185 320 185H7.99999C3.58171 185 0 181.418 0 177V8Z"/>
                </mask>
                <mask id="path-3-inside-2_179_500" fill="white">
                    <path d="M0 17H71V185H0V17Z"/>
                </mask>
                <path d="M0 17H71V185H0V17Z" fill="url(#paint0_linear_179_500)"/>
                <path d="M70 17V185H72V17H70Z" fill="url(#paint1_linear_179_500)" mask="url(#path-3-inside-2_179_500)"/>
                <rect x="4.5" y="21.5" width="62" height="44" rx="3.5" fill="#0B2727"/>
                <rect x="4.5" y="21.5" width="62" height="44" rx="3.5" stroke="#185656" strokeDasharray="1 1"/>
                <rect x="8" y="25" width="39" height="11" rx="4" fill="url(#paint2_linear_179_500)"/>
                <rect x="51" y="25" width="12" height="11" rx="4" fill="url(#paint3_linear_179_500)"/>
                <rect x="8" y="40" width="55" height="11" rx="4" fill="url(#paint4_linear_179_500)"/>
                <rect x="21" y="55" width="7" height="7" rx="3.5" fill="url(#paint5_linear_179_500)"/>
                <rect x="32" y="55" width="7" height="7" rx="3.5" fill="url(#paint6_linear_179_500)"/>
                <rect x="43" y="55" width="7" height="7" rx="3.5" fill="url(#paint7_linear_179_500)"/>
                <rect x="4.5" y="70.5" width="62" height="33" rx="3.5" fill="#282828"/>
                <rect x="4.5" y="70.5" width="62" height="33" rx="3.5" stroke="#464646" strokeDasharray="1 1"/>
                <rect x="8" y="74" width="55" height="11" rx="4" fill="url(#paint8_linear_179_500)" fillOpacity="0.6"/>
                <rect x="8" y="89" width="25.5" height="11" rx="4" fill="url(#paint9_linear_179_500)" fillOpacity="0.6"/>
                <rect x="37.5" y="89" width="25.5" height="11" rx="4" fill="url(#paint10_linear_179_500)" fillOpacity="0.6"/>
                <rect x="4.5" y="108.5" width="62" height="33" rx="3.5" fill="#0B2727"/>
                <rect x="4.5" y="108.5" width="62" height="33" rx="3.5" stroke="#185656" strokeDasharray="1 1"/>
                <rect x="8" y="112" width="55" height="11" rx="4" fill="url(#paint11_linear_179_500)"/>
                <rect x="8" y="127" width="12" height="11" rx="4" fill="url(#paint12_linear_179_500)"/>
                <rect x="24" y="127" width="39" height="11" rx="4" fill="url(#paint13_linear_179_500)"/>
                <mask id="path-20-inside-3_179_500" fill="white">
                    <path d="M0 0H328V17H0V0Z"/>
                </mask>
                <path d="M0 0H328V17H0V0Z" fill="#121212"/>
                <path d="M328 16H0V18H328V16Z" fill="#282828" mask="url(#path-20-inside-3_179_500)"/>
                <rect x="8" y="4" width="13" height="9" rx="1" fill="url(#paint14_linear_179_500)" fillOpacity="0.6"/>
                <rect x="187" y="4" width="28" height="9" rx="1" fill="url(#paint15_linear_179_500)" fillOpacity="0.6"/>
                <rect x="225" y="4" width="29" height="9" rx="1" fill="url(#paint16_linear_179_500)"/>
                <rect x="264" y="4" width="19" height="9" rx="1" fill="url(#paint17_linear_179_500)" fillOpacity="0.6"/>
                <rect x="293" y="4" width="25" height="9" rx="1" fill="url(#paint18_linear_179_500)" fillOpacity="0.6"/>
                <path d="M154 153L154 46" stroke="url(#paint19_linear_179_500)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M315 73L81 73" stroke="#1F1F1F" strokeLinecap="round"/>
                <path d="M197 139L197 59" stroke="#1F1F1F" strokeLinecap="round"/>
                <path d="M315 139L315 59" stroke="#1F1F1F" strokeLinecap="round"/>
                <path d="M81 139L81 59" stroke="#1F1F1F" strokeLinecap="round"/>
                <path d="M315 125L81 125" stroke="#1F1F1F" strokeLinecap="round"/>
                <path d="M89.5703 78V76.8037L90.6299 76.5986V69.4551L89.5703 69.25V68.0469H94.2871C95.0527 68.0469 95.709 68.1654 96.2559 68.4023C96.8027 68.6393 97.222 68.9788 97.5137 69.4209C97.8099 69.863 97.958 70.3939 97.958 71.0137C97.958 71.597 97.8122 72.1188 97.5205 72.5791C97.2288 73.0394 96.8232 73.4017 96.3037 73.666C95.7842 73.9303 95.1849 74.0648 94.5059 74.0693H92.626V76.5986L93.6924 76.8037V78H89.5703ZM95.9756 78L94.3008 73.7002L96.0986 73.2559L97.5479 76.6055L98.3955 76.8037V78H95.9756ZM92.626 72.5312H94.2529C94.8271 72.5312 95.2555 72.4105 95.5381 72.1689C95.8252 71.9229 95.9688 71.5674 95.9688 71.1025C95.9688 70.6423 95.8275 70.2754 95.5449 70.002C95.2624 69.724 94.8431 69.585 94.2871 69.585H92.626V72.5312Z" fill="#808080"/>
                <path d="M119.071 78V76.8037L119.939 76.6396L122.756 73.0713L120.104 69.4209L119.297 69.25V68.0469H123.187V69.25L122.236 69.3389L123.945 71.7314L125.654 69.3389L124.725 69.25V68.0469H128.56V69.25L127.678 69.4209L125.128 72.8936L127.985 76.6328L128.936 76.8037V78H124.95V76.8037L125.805 76.7217L123.959 74.1924L122.072 76.7217L122.906 76.8037V78H119.071Z" fill="#808080"/>
                <path d="M149.57 78V76.8037L150.63 76.5986V69.4551L149.57 69.25V68.0469H154.287C155.053 68.0469 155.709 68.1654 156.256 68.4023C156.803 68.6393 157.222 68.9788 157.514 69.4209C157.81 69.863 157.958 70.3939 157.958 71.0137C157.958 71.597 157.812 72.1188 157.521 72.5791C157.229 73.0394 156.823 73.4017 156.304 73.666C155.784 73.9303 155.185 74.0648 154.506 74.0693H152.626V76.5986L153.692 76.8037V78H149.57ZM155.976 78L154.301 73.7002L156.099 73.2559L157.548 76.6055L158.396 76.8037V78H155.976ZM152.626 72.5312H154.253C154.827 72.5312 155.256 72.4105 155.538 72.1689C155.825 71.9229 155.969 71.5674 155.969 71.1025C155.969 70.6423 155.827 70.2754 155.545 70.002C155.262 69.724 154.843 69.585 154.287 69.585H152.626V72.5312Z" fill="#808080"/>
                <path d="M181.053 78V76.8037L182.01 76.5986V72.0117L180.95 71.8066V70.6035H183.869L183.944 71.5195L183.958 71.6836C184.14 71.2826 184.366 70.9795 184.635 70.7744C184.904 70.5693 185.225 70.4668 185.599 70.4668C185.717 70.4668 185.847 70.4782 185.988 70.501C186.13 70.5192 186.255 70.5443 186.364 70.5762L186.152 72.415L185.161 72.3604C184.879 72.3467 184.648 72.3945 184.471 72.5039C184.298 72.6133 184.143 72.7705 184.006 72.9756V76.5986L184.963 76.8037V78H181.053Z" fill="#808080"/>
                <path d="M210.053 78V76.8037L211.01 76.5986V72.0117L209.95 71.8066V70.6035H212.869L212.944 71.5195L212.958 71.6836C213.14 71.2826 213.366 70.9795 213.635 70.7744C213.904 70.5693 214.225 70.4668 214.599 70.4668C214.717 70.4668 214.847 70.4782 214.988 70.501C215.13 70.5192 215.255 70.5443 215.364 70.5762L215.152 72.415L214.161 72.3604C213.879 72.3467 213.648 72.3945 213.471 72.5039C213.298 72.6133 213.143 72.7705 213.006 72.9756V76.5986L213.963 76.8037V78H210.053Z" fill="#808080"/>
                <path d="M237.57 78V76.8037L238.63 76.5986V69.4551L237.57 69.25V68.0469H242.287C243.053 68.0469 243.709 68.1654 244.256 68.4023C244.803 68.6393 245.222 68.9788 245.514 69.4209C245.81 69.863 245.958 70.3939 245.958 71.0137C245.958 71.597 245.812 72.1188 245.521 72.5791C245.229 73.0394 244.823 73.4017 244.304 73.666C243.784 73.9303 243.185 74.0648 242.506 74.0693H240.626V76.5986L241.692 76.8037V78H237.57ZM243.976 78L242.301 73.7002L244.099 73.2559L245.548 76.6055L246.396 76.8037V78H243.976ZM240.626 72.5312H242.253C242.827 72.5312 243.256 72.4105 243.538 72.1689C243.825 71.9229 243.969 71.5674 243.969 71.1025C243.969 70.6423 243.827 70.2754 243.545 70.002C243.262 69.724 242.843 69.585 242.287 69.585H240.626V72.5312Z" fill="#808080"/>
                <path d="M267.57 78V76.8037L268.63 76.5986V69.4551L267.57 69.25V68.0469H272.287C273.053 68.0469 273.709 68.1654 274.256 68.4023C274.803 68.6393 275.222 68.9788 275.514 69.4209C275.81 69.863 275.958 70.3939 275.958 71.0137C275.958 71.597 275.812 72.1188 275.521 72.5791C275.229 73.0394 274.823 73.4017 274.304 73.666C273.784 73.9303 273.185 74.0648 272.506 74.0693H270.626V76.5986L271.692 76.8037V78H267.57ZM273.976 78L272.301 73.7002L274.099 73.2559L275.548 76.6055L276.396 76.8037V78H273.976ZM270.626 72.5312H272.253C272.827 72.5312 273.256 72.4105 273.538 72.1689C273.825 71.9229 273.969 71.5674 273.969 71.1025C273.969 70.6423 273.827 70.2754 273.545 70.002C273.262 69.724 272.843 69.585 272.287 69.585H270.626V72.5312Z" fill="#808080"/>
                <path d="M300.086 78V76.8037L301.05 76.5986V68.7441L299.983 68.5391V67.3359H303.046V76.5986L304.01 76.8037V78H300.086Z" fill="#808080"/>
                <path d="M90.2812 130V128.804L91.3408 128.599V121.455L90.2812 121.25V120.047H91.3408H93.3369H94.54V121.25L93.3369 121.455V128.469H96.1465L96.2422 127.013H97.7666V130H90.2812Z" fill="#808080"/>
                <path d="M119.57 130V128.804L120.63 128.599V121.455L119.57 121.25V120.047H124.287C125.053 120.047 125.709 120.165 126.256 120.402C126.803 120.639 127.222 120.979 127.514 121.421C127.81 121.863 127.958 122.394 127.958 123.014C127.958 123.597 127.812 124.119 127.521 124.579C127.229 125.039 126.823 125.402 126.304 125.666C125.784 125.93 125.185 126.065 124.506 126.069H122.626V128.599L123.692 128.804V130H119.57ZM125.976 130L124.301 125.7L126.099 125.256L127.548 128.605L128.396 128.804V130H125.976ZM122.626 124.531H124.253C124.827 124.531 125.256 124.41 125.538 124.169C125.825 123.923 125.969 123.567 125.969 123.103C125.969 122.642 125.827 122.275 125.545 122.002C125.262 121.724 124.843 121.585 124.287 121.585H122.626V124.531Z" fill="#808080"/>
                <path d="M152.086 130V128.804L153.05 128.599V120.744L151.983 120.539V119.336H155.046V128.599L156.01 128.804V130H152.086Z" fill="#808080"/>
                <path d="M179.07 130V128.804L180.13 128.599V121.455L179.07 121.25V120.047H183.787C184.553 120.047 185.209 120.165 185.756 120.402C186.303 120.639 186.722 120.979 187.014 121.421C187.31 121.863 187.458 122.394 187.458 123.014C187.458 123.597 187.312 124.119 187.021 124.579C186.729 125.039 186.323 125.402 185.804 125.666C185.284 125.93 184.685 126.065 184.006 126.069H182.126V128.599L183.192 128.804V130H179.07ZM185.476 130L183.801 125.7L185.599 125.256L187.048 128.605L187.896 128.804V130H185.476ZM182.126 124.531H183.753C184.327 124.531 184.756 124.41 185.038 124.169C185.325 123.923 185.469 123.567 185.469 123.103C185.469 122.642 185.327 122.275 185.045 122.002C184.762 121.724 184.343 121.585 183.787 121.585H182.126V124.531Z" fill="#808080"/>
                <path d="M207.571 130V128.804L208.439 128.64L211.256 125.071L208.604 121.421L207.797 121.25V120.047H211.687V121.25L210.736 121.339L212.445 123.731L214.154 121.339L213.225 121.25V120.047H217.06V121.25L216.178 121.421L213.628 124.894L216.485 128.633L217.436 128.804V130H213.45V128.804L214.305 128.722L212.459 126.192L210.572 128.722L211.406 128.804V130H207.571Z" fill="#808080"/>
                <path d="M238.281 130V128.804L239.341 128.599V121.455L238.281 121.25V120.047H239.341H241.337H242.54V121.25L241.337 121.455V128.469H244.146L244.242 127.013H245.767V130H238.281Z" fill="#808080"/>
                <path d="M269.553 130V128.804L270.51 128.599V124.012L269.45 123.807V122.604H272.369L272.444 123.52L272.458 123.684C272.64 123.283 272.866 122.979 273.135 122.774C273.404 122.569 273.725 122.467 274.099 122.467C274.217 122.467 274.347 122.478 274.488 122.501C274.63 122.519 274.755 122.544 274.864 122.576L274.652 124.415L273.661 124.36C273.379 124.347 273.148 124.395 272.971 124.504C272.798 124.613 272.643 124.771 272.506 124.976V128.599L273.463 128.804V130H269.553Z" fill="#808080"/>
                <path d="M299.553 130V128.804L300.51 128.599V124.012L299.45 123.807V122.604H302.369L302.444 123.52L302.458 123.684C302.64 123.283 302.866 122.979 303.135 122.774C303.404 122.569 303.725 122.467 304.099 122.467C304.217 122.467 304.347 122.478 304.488 122.501C304.63 122.519 304.755 122.544 304.864 122.576L304.652 124.415L303.661 124.36C303.379 124.347 303.148 124.395 302.971 124.504C302.798 124.613 302.643 124.771 302.506 124.976V128.599L303.463 128.804V130H299.553Z" fill="#808080"/>
            </g>
            <path d="M-2 8C-2 2.47715 2.47715 -2 8 -2H320C325.523 -2 330 2.47715 330 8H326C326 4.68629 323.314 2 320 2H8C4.68629 2 2 4.68629 2 8H-2ZM328 185H0H328ZM8 185C2.47715 185 -2 180.523 -2 175V8C-2 2.47715 2.47715 -2 8 -2V2C4.68629 2 2 4.68629 2 8V177C2 181.418 4.68629 185 8 185ZM320 -2C325.523 -2 330 2.47715 330 8V175C330 180.523 325.523 185 320 185C323.314 185 326 181.418 326 177V8C326 4.68629 323.314 2 320 2V-2Z" fill="url(#paint20_linear_179_500)" mask="url(#path-1-inside-1_179_500)"/>
            <defs>
                <linearGradient id="paint0_linear_179_500" x1="35.5" y1="17" x2="35.5" y2="185" gradientUnits="userSpaceOnUse">
                    <stop offset="0.795" stopColor="#121212"/>
                    <stop offset="1" stopColor="#121212" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_179_500" x1="35.5" y1="17" x2="35.5" y2="185" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#282828"/>
                    <stop offset="1" stopColor="#282828" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_179_500" x1="8" y1="30.5" x2="47" y2="30.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint3_linear_179_500" x1="51" y1="30.5" x2="63" y2="30.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint4_linear_179_500" x1="8" y1="45.5" x2="63" y2="45.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint5_linear_179_500" x1="21" y1="58.5" x2="28" y2="58.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint6_linear_179_500" x1="32" y1="58.5" x2="39" y2="58.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint7_linear_179_500" x1="43" y1="58.5" x2="50" y2="58.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint8_linear_179_500" x1="8" y1="79.5" x2="63" y2="79.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#494949"/>
                    <stop offset="1" stopColor="#737373"/>
                </linearGradient>
                <linearGradient id="paint9_linear_179_500" x1="8" y1="94.5" x2="33.5" y2="94.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#494949"/>
                    <stop offset="1" stopColor="#737373"/>
                </linearGradient>
                <linearGradient id="paint10_linear_179_500" x1="37.5" y1="94.5" x2="63" y2="94.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#494949"/>
                    <stop offset="1" stopColor="#737373"/>
                </linearGradient>
                <linearGradient id="paint11_linear_179_500" x1="8" y1="117.5" x2="63" y2="117.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint12_linear_179_500" x1="8" y1="132.5" x2="20" y2="132.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint13_linear_179_500" x1="24" y1="132.5" x2="63" y2="132.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint14_linear_179_500" x1="8" y1="8.5" x2="21" y2="8.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#494949"/>
                    <stop offset="1" stopColor="#737373"/>
                </linearGradient>
                <linearGradient id="paint15_linear_179_500" x1="187" y1="8.5" x2="215" y2="8.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#494949"/>
                    <stop offset="1" stopColor="#737373"/>
                </linearGradient>
                <linearGradient id="paint16_linear_179_500" x1="225" y1="8.5" x2="254" y2="8.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#053939"/>
                    <stop offset="1" stopColor="#055D5D"/>
                </linearGradient>
                <linearGradient id="paint17_linear_179_500" x1="264" y1="8.5" x2="283" y2="8.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#494949"/>
                    <stop offset="1" stopColor="#737373"/>
                </linearGradient>
                <linearGradient id="paint18_linear_179_500" x1="293" y1="8.5" x2="318" y2="8.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#494949"/>
                    <stop offset="1" stopColor="#737373"/>
                </linearGradient>
                <linearGradient id="paint19_linear_179_500" x1="154.5" y1="46" x2="154.5" y2="153" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6B2431" stopOpacity="0.2"/>
                    <stop offset="0.33" stopColor="#6B2431"/>
                    <stop offset="0.66" stopColor="#6B2431"/>
                    <stop offset="1" stopColor="#6B2431" stopOpacity="0.2"/>
                </linearGradient>
                <linearGradient id="paint20_linear_179_500" x1="164" y1="0" x2="164" y2="185" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#282828"/>
                    <stop offset="1" stopColor="#282828" stopOpacity="0"/>
                </linearGradient>
                <clipPath id="clip0_179_500">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H320C324.418 0 328 3.58172 328 8V177C328 181.418 324.418 185 320 185H7.99999C3.58171 185 0 181.418 0 177V8Z" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};
