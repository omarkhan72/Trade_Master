import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
}

export const ChartIcon: React.FC<IconProps> = ({ width = 230, height = 150, color = '#0099FF' }) => (
  <Svg width={width} height={height} viewBox="0 0 230 150" fill="none">
    <Path 
      d="M40 150H220C225.523 150 230 145.523 230 140V10C230 4.477 225.523 0 220 0H40C34.477 0 30 4.477 30 10V140C30 145.523 34.477 150 40 150ZM40 150H220C225.523 150 230 145.523 230 140V10C230 4.477 225.523 0 220 0H40C34.477 0 30 4.477 30 10V140C30 145.523 34.477 150 40 150Z" 
      fill="transparent"
    />
    <Path 
      d="M30 110L70 80L110 100L150 50L230 100" 
      stroke={color} 
      strokeWidth="15" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <Path 
      d="M30 40V140H220" 
      stroke={color} 
      strokeWidth="15" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </Svg>
);

export const AICoachingIcon: React.FC<IconProps> = ({ size = 40, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      d="M30 10H10C6.686 10 4 12.686 4 16V24C4 27.314 6.686 30 10 30H30C33.314 30 36 27.314 36 24V16C36 12.686 33.314 10 30 10Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 24C22.209 24 24 22.209 24 20C24 17.791 22.209 16 20 16C17.791 16 16 17.791 16 20C16 22.209 17.791 24 20 24Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16H12.01M28 16H28.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 20H4.01M36 20H36.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ size = 40, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      d="M20 36C20 36 33 30 33 20V9L20 4L7 9V20C7 30 20 36 20 36Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 24, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Path
      d="M12 6V12L16 14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TrendingUpIcon: React.FC<IconProps> = ({ width = 60, height = 60, color = '#0099FF' }) => (
  <Svg width={width} height={height} viewBox="0 0 60 60" fill="none">
    <Path
      d="M10 35L25 20L35 30L50 15M50 15H35M50 15V30"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GridIcon: React.FC<IconProps> = ({ size = 40, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Rect x="4" y="4" width="14" height="14" rx="2" stroke={color} strokeWidth="2" />
    <Rect x="22" y="4" width="14" height="14" rx="2" stroke={color} strokeWidth="2" />
    <Rect x="4" y="22" width="14" height="14" rx="2" stroke={color} strokeWidth="2" />
    <Rect x="22" y="22" width="14" height="14" rx="2" stroke={color} strokeWidth="2" />
  </Svg>
);

export const LightningIcon: React.FC<IconProps> = ({ size = 40, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      d="M22 2L6 22H18L16 38L34 16H20L22 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ size = 40, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      d="M32 36H8C6.89543 36 6 35.1046 6 34V6C6 4.89543 6.89543 4 8 4H32C33.1046 4 34 4.89543 34 6V34C34 35.1046 33.1046 36 32 36Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 26V20"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 26V14"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M28 26V18"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 20, color = '#FFFFFF' }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M4 10H16M16 10L10 4M16 10L10 16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CandlestickIcon: React.FC<IconProps> = ({ size = 40, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      d="M10 30V36"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 4V10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect x="6" y="10" width="8" height="20" rx="1" stroke={color} strokeWidth="2" />
    <Path
      d="M30 24V36"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M30 4V10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect x="26" y="10" width="8" height="14" rx="1" stroke={color} strokeWidth="2" />
  </Svg>
);

export const GraduationCapIcon: React.FC<IconProps> = ({ size = 40, color = '#0099FF' }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <Path
      d="M20 6L36 14L20 22L4 14L20 6Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M36 14V26"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 18V28C10 28 14 32 20 32C26 32 30 28 30 28V18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
); 