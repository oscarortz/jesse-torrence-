import React from 'react'

type Props = {
  colorFill?: string;
  colorLetter?: string;
  width?: string;
  height?: string;
}

const HeaderLogo = ({ colorFill = 'green', colorLetter = 'black', width, height }: Props) => {
  return (
    <svg width={width || "163"} height={height || "57"} viewBox="0 0 118 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M111.096 9.14392C111.341 9.14392 111.464 9.36259 111.464 9.79992C111.464 9.98126 111.373 10.1199 111.192 10.2159C111.01 10.3119 110.818 10.3599 110.616 10.3599C110.402 10.3599 110.21 10.2853 110.04 10.1359C109.88 9.98659 109.8 9.79459 109.8 9.55992C109.8 9.01592 110.066 8.58926 110.6 8.27992C111.144 7.95992 111.848 7.79992 112.712 7.79992C113.725 7.79992 114.514 8.05592 115.08 8.56792C115.645 9.06926 115.928 9.70926 115.928 10.4879V13.6559C115.928 13.9973 115.981 14.2479 116.088 14.4079C116.205 14.5679 116.344 14.6479 116.504 14.6479C116.642 14.6479 116.765 14.6106 116.872 14.5359C116.989 14.4613 117.048 14.3706 117.048 14.2639H117.336C117.336 14.8399 116.749 15.1279 115.576 15.1279C115.032 15.1279 114.61 14.9359 114.312 14.5519C113.672 14.9573 112.93 15.1599 112.088 15.1599C110.306 15.1599 109.416 14.5093 109.416 13.2079C109.416 12.9413 109.506 12.7013 109.688 12.4879C109.88 12.2746 110.168 12.0933 110.552 11.9439C110.936 11.7946 111.277 11.6773 111.576 11.5919C111.885 11.5066 112.306 11.4106 112.84 11.3039C113.373 11.1866 113.736 11.1013 113.928 11.0479C113.928 10.0453 113.842 9.35192 113.672 8.96792C113.512 8.57326 113.138 8.37592 112.552 8.37592C112.2 8.37592 111.88 8.45059 111.592 8.59992C111.314 8.73859 111.149 8.91992 111.096 9.14392ZM114.088 14.1679C113.981 13.8799 113.928 13.5599 113.928 13.2079V11.3999C113.021 11.6773 112.424 11.9066 112.136 12.0879C111.688 12.3866 111.464 12.7706 111.464 13.2399C111.464 13.7306 111.565 14.0826 111.768 14.2959C111.981 14.5093 112.221 14.6159 112.488 14.6159C112.957 14.6159 113.49 14.4666 114.088 14.1679Z" fill={colorLetter || '#fff'}/>
      <path d="M102.431 14.9999V14.6639C103.007 14.6639 103.343 14.5573 103.439 14.3439V8.91992C102.863 8.87726 102.527 8.85592 102.431 8.85592V8.48792C102.634 8.48792 103.124 8.37592 103.903 8.15192C104.682 7.91726 105.194 7.79992 105.439 7.79992V8.47192C105.994 8.02392 106.522 7.79992 107.023 7.79992C108.346 7.79992 109.007 8.11992 109.007 8.75992C109.007 9.01592 108.927 9.21859 108.767 9.36792C108.618 9.51726 108.431 9.59192 108.207 9.59192C107.962 9.59192 107.775 9.52792 107.647 9.39992C107.519 9.27192 107.439 9.12792 107.407 8.96792C107.375 8.80792 107.311 8.66392 107.215 8.53592C107.13 8.40792 107.002 8.34392 106.831 8.34392C106.426 8.34392 105.962 8.56792 105.439 9.01592V14.3439C105.535 14.5573 105.871 14.6639 106.447 14.6639V14.9999H102.431Z" fill={colorLetter || '#fff'}/>
      <path d="M97.8061 14.9999V14.6639C98.382 14.6639 98.718 14.5573 98.814 14.3439V8.91992C98.2594 8.87726 97.9234 8.85592 97.8061 8.85592V8.48792C98.0087 8.48792 98.4994 8.37592 99.2781 8.15192C100.057 7.91726 100.569 7.79992 100.814 7.79992V14.3439C100.91 14.5573 101.246 14.6639 101.822 14.6639V14.9999H97.8061ZM99.774 6.77592C99.5181 6.77592 99.2567 6.68526 98.9901 6.50392C98.7341 6.31192 98.606 6.08792 98.606 5.83192C98.606 5.60792 98.7234 5.39992 98.9581 5.20792C99.2034 5.01592 99.4594 4.91992 99.7261 4.91992C99.982 4.91992 100.238 5.01592 100.494 5.20792C100.761 5.38926 100.894 5.61326 100.894 5.87992C100.894 6.10392 100.771 6.31192 100.526 6.50392C100.291 6.68526 100.041 6.77592 99.774 6.77592Z" fill={colorLetter || '#fff'}/>
      <path d="M91.9824 11.1439C92.0038 12.0719 92.2118 12.8719 92.6064 13.5439C93.0118 14.2159 93.5238 14.5519 94.1424 14.5519C95.0704 14.5519 95.8171 14.1999 96.3824 13.4959L96.7664 13.6879C96.4571 14.1999 96.0518 14.5733 95.5504 14.8079C95.0598 15.0426 94.4091 15.1599 93.5984 15.1599C93.1824 15.1599 92.7771 15.1013 92.3824 14.9839C91.9878 14.8559 91.5931 14.6533 91.1984 14.3759C90.8144 14.0879 90.4998 13.6666 90.2544 13.1119C90.0198 12.5573 89.9024 11.8959 89.9024 11.1279C89.9024 10.1999 90.2278 9.41592 90.8784 8.77592C91.5398 8.12526 92.3931 7.79992 93.4384 7.79992C94.5798 7.79992 95.4651 8.12526 96.0944 8.77592C96.7238 9.41592 97.0384 10.2053 97.0384 11.1439H91.9824ZM91.9984 10.6479H94.9104C94.8464 9.89059 94.7131 9.30926 94.5104 8.90392C94.3184 8.48792 94.0038 8.27992 93.5664 8.27992C93.1824 8.27992 92.8358 8.47726 92.5264 8.87192C92.2278 9.25592 92.0518 9.84792 91.9984 10.6479Z" fill={colorLetter || '#fff'}/>
      <path d="M88.4927 7.79992V14.5359C88.4927 15.6026 88.178 16.4773 87.5487 17.1599C86.93 17.8533 86.1033 18.1999 85.0687 18.1999C84.0873 18.1999 83.3087 18.0719 82.7327 17.8159C82.1567 17.5599 81.8687 17.2186 81.8687 16.7919C81.8687 16.1093 82.1567 15.7679 82.7327 15.7679C82.946 15.7679 83.122 15.8426 83.2607 15.9919C83.3993 16.1413 83.4687 16.3173 83.4687 16.5199C83.4687 16.8613 83.3353 17.0853 83.0687 17.1919C83.3567 17.4799 83.97 17.6239 84.9087 17.6239C85.3993 17.6239 85.7727 17.4106 86.0287 16.9839C86.2847 16.5679 86.434 15.8426 86.4767 14.8079C86.0287 15.0426 85.4793 15.1599 84.8287 15.1599C84.4767 15.1599 84.114 15.1066 83.7407 14.9999C83.378 14.8826 83.0047 14.6959 82.6207 14.4399C82.2367 14.1839 81.922 13.8053 81.6767 13.3039C81.442 12.7919 81.3247 12.1946 81.3247 11.5119C81.3247 10.3279 81.6927 9.41592 82.4287 8.77592C83.1647 8.12526 84.082 7.79992 85.1807 7.79992C85.8633 7.79992 86.4393 7.95992 86.9087 8.27992C87.7087 7.95992 88.2367 7.79992 88.4927 7.79992ZM86.4927 14.2959V8.56792C86.162 8.41859 85.7567 8.34392 85.2767 8.34392C84.0287 8.34392 83.4047 9.39992 83.4047 11.5119C83.4047 12.1306 83.458 12.6639 83.5647 13.1119C83.682 13.5493 83.826 13.8693 83.9967 14.0719C84.178 14.2746 84.3487 14.4186 84.5087 14.5039C84.6687 14.5786 84.8287 14.6159 84.9887 14.6159C85.5647 14.6159 86.066 14.5093 86.4927 14.2959Z" fill={colorLetter || '#fff'}/>
      <path d="M71.7123 14.9999V14.6639C72.2883 14.6639 72.6243 14.5573 72.7203 14.3439V8.91992C72.1443 8.87726 71.8083 8.85592 71.7123 8.85592V8.48792C71.915 8.48792 72.4056 8.37592 73.1843 8.15192C73.963 7.91726 74.475 7.79992 74.7203 7.79992V8.47192C75.2536 8.02392 75.8403 7.79992 76.4803 7.79992C77.5043 7.79992 78.299 7.99192 78.8643 8.37592C79.4296 8.74926 79.7123 9.31459 79.7123 10.0719V14.3439C79.8083 14.5573 80.1443 14.6639 80.7203 14.6639V14.9999H76.7043V14.6639C77.2803 14.6639 77.6163 14.5573 77.7123 14.3439V9.95992C77.7123 9.47992 77.6003 9.09059 77.3763 8.79192C77.163 8.49326 76.8323 8.34392 76.3843 8.34392C75.723 8.34392 75.1683 8.55726 74.7203 8.98392V14.3439C74.8163 14.5573 75.1523 14.6639 75.7283 14.6639V14.9999H71.7123Z" fill={colorLetter || '#fff'}/>
      <path d="M65.3614 9.14392C65.6068 9.14392 65.7294 9.36259 65.7294 9.79992C65.7294 9.98126 65.6388 10.1199 65.4574 10.2159C65.2761 10.3119 65.0841 10.3599 64.8814 10.3599C64.6681 10.3599 64.4761 10.2853 64.3054 10.1359C64.1454 9.98659 64.0654 9.79459 64.0654 9.55992C64.0654 9.01592 64.3321 8.58926 64.8654 8.27992C65.4094 7.95992 66.1134 7.79992 66.9774 7.79992C67.9908 7.79992 68.7801 8.05592 69.3454 8.56792C69.9108 9.06926 70.1934 9.70926 70.1934 10.4879V13.6559C70.1934 13.9973 70.2468 14.2479 70.3534 14.4079C70.4708 14.5679 70.6094 14.6479 70.7694 14.6479C70.9081 14.6479 71.0308 14.6106 71.1374 14.5359C71.2548 14.4613 71.3134 14.3706 71.3134 14.2639H71.6014C71.6014 14.8399 71.0147 15.1279 69.8414 15.1279C69.2974 15.1279 68.8761 14.9359 68.5774 14.5519C67.9374 14.9573 67.1961 15.1599 66.3534 15.1599C64.5721 15.1599 63.6814 14.5093 63.6814 13.2079C63.6814 12.9413 63.7721 12.7013 63.9534 12.4879C64.1454 12.2746 64.4334 12.0933 64.8174 11.9439C65.2014 11.7946 65.5427 11.6773 65.8414 11.5919C66.1507 11.5066 66.5721 11.4106 67.1054 11.3039C67.6388 11.1866 68.0014 11.1013 68.1934 11.0479C68.1934 10.0453 68.1081 9.35192 67.9374 8.96792C67.7774 8.57326 67.4041 8.37592 66.8174 8.37592C66.4654 8.37592 66.1454 8.45059 65.8574 8.59992C65.5801 8.73859 65.4147 8.91992 65.3614 9.14392ZM68.3534 14.1679C68.2468 13.8799 68.1934 13.5599 68.1934 13.2079V11.3999C67.2868 11.6773 66.6894 11.9066 66.4014 12.0879C65.9534 12.3866 65.7294 12.7706 65.7294 13.2399C65.7294 13.7306 65.8307 14.0826 66.0334 14.2959C66.2467 14.5093 66.4867 14.6159 66.7534 14.6159C67.2227 14.6159 67.7561 14.4666 68.3534 14.1679Z" fill={colorLetter || '#fff'}/>
      <path d="M56.6967 14.9999V14.6639C57.2727 14.6639 57.6087 14.5573 57.7047 14.3439V8.91992C57.1287 8.87726 56.7927 8.85592 56.6967 8.85592V8.48792C56.8993 8.48792 57.39 8.37592 58.1687 8.15192C58.9473 7.91726 59.4593 7.79992 59.7047 7.79992V8.47192C60.2593 8.02392 60.7873 7.79992 61.2887 7.79992C62.6113 7.79992 63.2727 8.11992 63.2727 8.75992C63.2727 9.01592 63.1927 9.21859 63.0327 9.36792C62.8833 9.51726 62.6967 9.59192 62.4727 9.59192C62.2273 9.59192 62.0407 9.52792 61.9127 9.39992C61.7847 9.27192 61.7047 9.12792 61.6727 8.96792C61.6407 8.80792 61.5767 8.66392 61.4807 8.53592C61.3953 8.40792 61.2673 8.34392 61.0967 8.34392C60.6913 8.34392 60.2273 8.56792 59.7047 9.01592V14.3439C59.8007 14.5573 60.1367 14.6639 60.7127 14.6639V14.9999H56.6967Z" fill={colorLetter || '#fff'}/>
      <path d="M50.3458 9.14392C50.5911 9.14392 50.7138 9.36259 50.7138 9.79992C50.7138 9.98126 50.6231 10.1199 50.4418 10.2159C50.2605 10.3119 50.0685 10.3599 49.8658 10.3599C49.6525 10.3599 49.4605 10.2853 49.2898 10.1359C49.1298 9.98659 49.0498 9.79459 49.0498 9.55992C49.0498 9.01592 49.3165 8.58926 49.8498 8.27992C50.3938 7.95992 51.0978 7.79992 51.9618 7.79992C52.9751 7.79992 53.7645 8.05592 54.3298 8.56792C54.8951 9.06926 55.1778 9.70926 55.1778 10.4879V13.6559C55.1778 13.9973 55.2311 14.2479 55.3378 14.4079C55.4551 14.5679 55.5938 14.6479 55.7538 14.6479C55.8925 14.6479 56.0151 14.6106 56.1218 14.5359C56.2391 14.4613 56.2978 14.3706 56.2978 14.2639H56.5858C56.5858 14.8399 55.9991 15.1279 54.8258 15.1279C54.2818 15.1279 53.8605 14.9359 53.5618 14.5519C52.9218 14.9573 52.1805 15.1599 51.3378 15.1599C49.5565 15.1599 48.6658 14.5093 48.6658 13.2079C48.6658 12.9413 48.7565 12.7013 48.9378 12.4879C49.1298 12.2746 49.4178 12.0933 49.8018 11.9439C50.1858 11.7946 50.5271 11.6773 50.8258 11.5919C51.1351 11.5066 51.5565 11.4106 52.0898 11.3039C52.6231 11.1866 52.9858 11.1013 53.1778 11.0479C53.1778 10.0453 53.0925 9.35192 52.9218 8.96792C52.7618 8.57326 52.3885 8.37592 51.8018 8.37592C51.4498 8.37592 51.1298 8.45059 50.8418 8.59992C50.5645 8.73859 50.3991 8.91992 50.3458 9.14392ZM53.3378 14.1679C53.2311 13.8799 53.1778 13.5599 53.1778 13.2079V11.3999C52.2711 11.6773 51.6738 11.9066 51.3858 12.0879C50.9378 12.3866 50.7138 12.7706 50.7138 13.2399C50.7138 13.7306 50.8151 14.0826 51.0178 14.2959C51.2311 14.5093 51.4711 14.6159 51.7378 14.6159C52.2071 14.6159 52.7405 14.4666 53.3378 14.1679Z" fill={colorLetter || '#fff'}/>
      <path d="M40.873 14.9999V14.6639C41.449 14.6639 41.785 14.5573 41.881 14.3439V6.29592C41.785 6.08259 41.449 5.97592 40.873 5.97592V5.63992H44.921V5.97592C44.345 5.97592 44.009 6.08259 43.913 6.29592V14.4559H47.241C47.5077 14.3386 47.7477 14.0026 47.961 13.4479H48.281L47.897 14.9999H40.873Z" fill={colorLetter || '#fff'}/>
      <path d="M30.4864 9.14392C30.7318 9.14392 30.8544 9.36259 30.8544 9.79992C30.8544 9.98126 30.7638 10.1199 30.5824 10.2159C30.4011 10.3119 30.2091 10.3599 30.0064 10.3599C29.7931 10.3599 29.6011 10.2853 29.4304 10.1359C29.2704 9.98659 29.1904 9.79459 29.1904 9.55992C29.1904 9.01592 29.4571 8.58926 29.9904 8.27992C30.5344 7.95992 31.2384 7.79992 32.1024 7.79992C33.1158 7.79992 33.9051 8.05592 34.4704 8.56792C35.0358 9.06926 35.3184 9.70926 35.3184 10.4879V13.6559C35.3184 13.9973 35.3718 14.2479 35.4784 14.4079C35.5958 14.5679 35.7344 14.6479 35.8944 14.6479C36.0331 14.6479 36.1558 14.6106 36.2624 14.5359C36.3798 14.4613 36.4384 14.3706 36.4384 14.2639H36.7264C36.7264 14.8399 36.1398 15.1279 34.9664 15.1279C34.4224 15.1279 34.0011 14.9359 33.7024 14.5519C33.0624 14.9573 32.3211 15.1599 31.4784 15.1599C29.6971 15.1599 28.8064 14.5093 28.8064 13.2079C28.8064 12.9413 28.8971 12.7013 29.0784 12.4879C29.2704 12.2746 29.5584 12.0933 29.9424 11.9439C30.3264 11.7946 30.6678 11.6773 30.9664 11.5919C31.2758 11.5066 31.6971 11.4106 32.2304 11.3039C32.7638 11.1866 33.1264 11.1013 33.3184 11.0479C33.3184 10.0453 33.2331 9.35192 33.0624 8.96792C32.9024 8.57326 32.5291 8.37592 31.9424 8.37592C31.5904 8.37592 31.2704 8.45059 30.9824 8.59992C30.7051 8.73859 30.5398 8.91992 30.4864 9.14392ZM33.4784 14.1679C33.3718 13.8799 33.3184 13.5599 33.3184 13.2079V11.3999C32.4118 11.6773 31.8144 11.9066 31.5264 12.0879C31.0784 12.3866 30.8544 12.7706 30.8544 13.2399C30.8544 13.7306 30.9558 14.0826 31.1584 14.2959C31.3718 14.5093 31.6118 14.6159 31.8784 14.6159C32.3478 14.6159 32.8811 14.4666 33.4784 14.1679Z" fill={colorLetter || '#fff'}/>
      <path d="M24.1617 14.9999V14.6639C24.7377 14.6639 25.0737 14.5573 25.1697 14.3439V6.03992C24.5937 5.99726 24.2577 5.97592 24.1617 5.97592V5.60792C24.3643 5.60792 24.855 5.49592 25.6337 5.27192C26.4123 5.03726 26.9243 4.91992 27.1697 4.91992V14.3439C27.2657 14.5573 27.6017 14.6639 28.1777 14.6639V14.9999H24.1617Z" fill={colorLetter || '#fff'}/>
      <path d="M17.4154 14.9999V14.6639C17.9914 14.6639 18.3274 14.5573 18.4234 14.3439V8.91992C17.8474 8.87726 17.5114 8.85592 17.4154 8.85592V8.48792C17.6181 8.48792 18.1088 8.37592 18.8874 8.15192C19.6661 7.91726 20.1781 7.79992 20.4234 7.79992V8.47192C20.9781 8.02392 21.5061 7.79992 22.0074 7.79992C23.3301 7.79992 23.9914 8.11992 23.9914 8.75992C23.9914 9.01592 23.9114 9.21859 23.7514 9.36792C23.6021 9.51726 23.4154 9.59192 23.1914 9.59192C22.9461 9.59192 22.7594 9.52792 22.6314 9.39992C22.5034 9.27192 22.4234 9.12792 22.3914 8.96792C22.3594 8.80792 22.2954 8.66392 22.1994 8.53592C22.1141 8.40792 21.9861 8.34392 21.8154 8.34392C21.4101 8.34392 20.9461 8.56792 20.4234 9.01592V14.3439C20.5194 14.5573 20.8554 14.6639 21.4314 14.6639V14.9999H17.4154Z" fill={colorLetter || '#fff'}/>
      <path d="M11.0645 9.14392C11.3099 9.14392 11.4325 9.36259 11.4325 9.79992C11.4325 9.98126 11.3419 10.1199 11.1605 10.2159C10.9792 10.3119 10.7872 10.3599 10.5845 10.3599C10.3712 10.3599 10.1792 10.2853 10.0085 10.1359C9.84855 9.98659 9.76855 9.79459 9.76855 9.55992C9.76855 9.01592 10.0352 8.58926 10.5685 8.27992C11.1125 7.95992 11.8165 7.79992 12.6805 7.79992C13.6939 7.79992 14.4832 8.05592 15.0485 8.56792C15.6139 9.06926 15.8965 9.70926 15.8965 10.4879V13.6559C15.8965 13.9973 15.9499 14.2479 16.0565 14.4079C16.1739 14.5679 16.3125 14.6479 16.4725 14.6479C16.6112 14.6479 16.7339 14.6106 16.8405 14.5359C16.9579 14.4613 17.0165 14.3706 17.0165 14.2639H17.3045C17.3045 14.8399 16.7179 15.1279 15.5445 15.1279C15.0005 15.1279 14.5792 14.9359 14.2805 14.5519C13.6405 14.9573 12.8992 15.1599 12.0565 15.1599C10.2752 15.1599 9.38455 14.5093 9.38455 13.2079C9.38455 12.9413 9.47521 12.7013 9.65655 12.4879C9.84855 12.2746 10.1365 12.0933 10.5205 11.9439C10.9045 11.7946 11.2459 11.6773 11.5445 11.5919C11.8539 11.5066 12.2752 11.4106 12.8085 11.3039C13.3419 11.1866 13.7045 11.1013 13.8965 11.0479C13.8965 10.0453 13.8112 9.35192 13.6405 8.96792C13.4805 8.57326 13.1072 8.37592 12.5205 8.37592C12.1685 8.37592 11.8485 8.45059 11.5605 8.59992C11.2832 8.73859 11.1179 8.91992 11.0645 9.14392ZM14.0565 14.1679C13.9499 13.8799 13.8965 13.5599 13.8965 13.2079V11.3999C12.9899 11.6773 12.3925 11.9066 12.1045 12.0879C11.6565 12.3866 11.4325 12.7706 11.4325 13.2399C11.4325 13.7306 11.5339 14.0826 11.7365 14.2959C11.9499 14.5093 12.1899 14.6159 12.4565 14.6159C12.9259 14.6159 13.4592 14.4666 14.0565 14.1679Z" fill={colorLetter || '#fff'}/>
      <path d="M5.60017 6.02392C4.70417 6.02392 4.01084 6.39192 3.52017 7.12792C3.04017 7.86392 2.80017 8.85592 2.80017 10.1039C2.80017 11.5546 3.06151 12.6693 3.58417 13.4479C4.10684 14.2266 4.80017 14.6159 5.66417 14.6159C6.18684 14.6159 6.66151 14.4399 7.08817 14.0879C7.52551 13.7253 7.82417 13.3253 7.98417 12.8879L8.64017 13.0799C8.39484 13.6666 8.00551 14.1626 7.47217 14.5679C6.94951 14.9626 6.24017 15.1599 5.34417 15.1599C3.91484 15.1599 2.76284 14.6959 1.88817 13.7679C1.01351 12.8399 0.576172 11.7359 0.576172 10.4559C0.576172 8.97326 1.07751 7.77326 2.08017 6.85592C3.08284 5.93859 4.25084 5.47992 5.58417 5.47992C5.89351 5.47992 6.27751 5.55992 6.73617 5.71992C7.19484 5.87992 7.45617 5.95992 7.52017 5.95992C7.64817 5.95992 7.71217 5.85326 7.71217 5.63992H8.08017L8.20817 7.89592H7.85617C7.79217 7.45859 7.51484 7.03726 7.02417 6.63192C6.5335 6.22659 6.05884 6.02392 5.60017 6.02392Z" fill={colorLetter || '#fff'}/>
      <path d="M74.5422 40.9999V40.7059C75.0462 40.7059 75.3402 40.6126 75.4242 40.4259V33.1739C74.8456 33.1273 74.5516 33.1039 74.5422 33.1039V32.7819C74.7196 32.7819 75.0649 32.6839 75.5782 32.4879C76.1009 32.2826 76.4696 32.1799 76.6842 32.1799V35.3439C77.1882 34.9146 77.7436 34.6999 78.3502 34.6999C79.2369 34.6999 79.8669 34.8446 80.2402 35.1339C80.6229 35.4233 80.8142 35.9226 80.8142 36.6319V40.4259C80.8982 40.6126 81.1922 40.7059 81.6962 40.7059V40.9999H78.6722V40.7059C79.1762 40.7059 79.4702 40.6126 79.5542 40.4259V36.5339C79.5542 35.6286 79.1249 35.1759 78.2662 35.1759C77.6782 35.1759 77.1509 35.3813 76.6842 35.7919V40.4259C76.7682 40.6126 77.0622 40.7059 77.5662 40.7059V40.9999H74.5422Z" fill={colorLetter || '#fff'}/>
      <path d="M67.9937 35.1199C67.415 35.1199 66.9484 35.3393 66.5937 35.7779C66.2391 36.2166 66.0617 36.8093 66.0617 37.5559C66.0617 38.3493 66.2811 39.0586 66.7197 39.6839C67.1677 40.2999 67.6717 40.6079 68.2317 40.6079C69.0437 40.6079 69.6971 40.2999 70.1917 39.6839L70.5277 39.8519C70.257 40.2999 69.9024 40.6266 69.4637 40.8319C69.0344 41.0373 68.465 41.1399 67.7557 41.1399C67.401 41.1399 67.0604 41.0886 66.7337 40.9859C66.4071 40.8739 66.0851 40.6966 65.7677 40.4539C65.4504 40.2019 65.1984 39.8333 65.0117 39.3479C64.8251 38.8626 64.7317 38.2839 64.7317 37.6119C64.7317 36.7999 65.0164 36.1139 65.5857 35.5539C66.1644 34.9846 66.9204 34.6999 67.8537 34.6999C68.591 34.6999 69.1604 34.8259 69.5617 35.0779C69.9631 35.3299 70.1637 35.6986 70.1637 36.1839C70.1637 36.3986 70.1077 36.5713 69.9957 36.7019C69.8837 36.8233 69.739 36.8839 69.5617 36.8839C69.3937 36.8839 69.2444 36.8419 69.1137 36.7579C68.9924 36.6739 68.9317 36.5526 68.9317 36.3939C68.9317 36.1979 68.9784 36.0533 69.0717 35.9599C69.1744 35.8666 69.291 35.8199 69.4217 35.8199C69.3004 35.3533 68.8244 35.1199 67.9937 35.1199Z" fill={colorLetter || '#fff'}/>
      <path d="M55.6229 35.8759C55.7535 35.8759 55.8655 35.9226 55.9589 36.0159C56.0615 36.1093 56.1129 36.2539 56.1129 36.4499C56.1129 36.6086 56.0475 36.7299 55.9169 36.8139C55.7955 36.8979 55.6509 36.9399 55.4829 36.9399C55.3055 36.9399 55.1609 36.8793 55.0489 36.7579C54.9369 36.6273 54.8809 36.4546 54.8809 36.2399C54.8809 35.7546 55.0815 35.3766 55.4829 35.1059C55.8842 34.8353 56.4535 34.6999 57.1909 34.6999C58.0589 34.6999 58.6935 34.9146 59.0949 35.3439C59.5055 35.7733 59.7109 36.3426 59.7109 37.0519V39.8239C59.7109 40.1226 59.7575 40.3419 59.8509 40.4819C59.9535 40.6219 60.0749 40.6919 60.2149 40.6919C60.3362 40.6919 60.4435 40.6593 60.5369 40.5939C60.6395 40.5286 60.6909 40.4493 60.6909 40.3559H60.9429C60.9429 40.6173 60.8449 40.8086 60.6489 40.9299C60.4622 41.0513 60.1309 41.1119 59.6549 41.1119C59.1882 41.1119 58.8569 40.9206 58.6609 40.5379C58.1102 40.9393 57.4242 41.1399 56.6029 41.1399C55.2029 41.1399 54.5029 40.5706 54.5029 39.4319C54.5029 39.1893 54.5869 38.9699 54.7549 38.7739C54.9322 38.5779 55.1842 38.4146 55.5109 38.2839C55.8375 38.1533 56.1455 38.0506 56.4349 37.9759C56.7242 37.8919 57.0835 37.8033 57.5129 37.7099C57.9515 37.6073 58.2642 37.5279 58.4509 37.4719C58.4509 36.6879 58.3482 36.1139 58.1429 35.7499C57.9375 35.3859 57.5735 35.2039 57.0509 35.2039C56.2109 35.2039 55.7349 35.4279 55.6229 35.8759ZM58.5349 40.1879C58.4789 39.9826 58.4509 39.7306 58.4509 39.4319V37.7799C58.3482 37.8173 58.1709 37.8686 57.9189 37.9339C57.6762 37.9993 57.4755 38.0553 57.3169 38.1019C57.1675 38.1486 56.9855 38.2186 56.7709 38.3119C56.5562 38.4053 56.3882 38.4986 56.2669 38.5919C56.1455 38.6853 56.0382 38.8113 55.9449 38.9699C55.8515 39.1193 55.8049 39.2826 55.8049 39.4599C55.8049 39.9079 55.8889 40.2206 56.0569 40.3979C56.2342 40.5753 56.4955 40.6639 56.8409 40.6639C57.4569 40.6639 58.0215 40.5053 58.5349 40.1879Z" fill={colorLetter || '#fff'}/>
      <path d="M44.9527 37.5279C44.9527 38.5919 45.1533 39.3899 45.5547 39.9219C45.9653 40.4539 46.488 40.7199 47.1227 40.7199C47.6267 40.7199 48.0327 40.4959 48.3407 40.0479C48.6487 39.5906 48.8027 39.0073 48.8027 38.2979C48.8027 36.1886 48.07 35.1339 46.6047 35.1339C46.11 35.1339 45.7087 35.3719 45.4007 35.8479C45.102 36.3146 44.9527 36.8746 44.9527 37.5279ZM46.9407 41.1399C45.8953 41.1399 45.0787 40.8366 44.4907 40.2299C43.9027 39.6139 43.6087 38.8066 43.6087 37.8079C43.6087 36.9026 43.8747 36.1606 44.4067 35.5819C44.9387 34.9939 45.7507 34.6999 46.8427 34.6999C47.944 34.6999 48.77 34.9939 49.3207 35.5819C49.8713 36.1606 50.1467 36.9586 50.1467 37.9759C50.1467 38.8813 49.8807 39.6373 49.3487 40.2439C48.826 40.8413 48.0233 41.1399 46.9407 41.1399Z" fill={colorLetter || '#fff'}/>
      <path d="M36.8082 35.1199C36.2295 35.1199 35.7628 35.3393 35.4082 35.7779C35.0535 36.2166 34.8762 36.8093 34.8762 37.5559C34.8762 38.3493 35.0955 39.0586 35.5342 39.6839C35.9822 40.2999 36.4862 40.6079 37.0462 40.6079C37.8582 40.6079 38.5115 40.2999 39.0062 39.6839L39.3422 39.8519C39.0715 40.2999 38.7168 40.6266 38.2782 40.8319C37.8488 41.0373 37.2795 41.1399 36.5702 41.1399C36.2155 41.1399 35.8748 41.0886 35.5482 40.9859C35.2215 40.8739 34.8995 40.6966 34.5822 40.4539C34.2648 40.2019 34.0128 39.8333 33.8262 39.3479C33.6395 38.8626 33.5462 38.2839 33.5462 37.6119C33.5462 36.7999 33.8308 36.1139 34.4002 35.5539C34.9788 34.9846 35.7348 34.6999 36.6682 34.6999C37.4055 34.6999 37.9748 34.8259 38.3762 35.0779C38.7775 35.3299 38.9782 35.6986 38.9782 36.1839C38.9782 36.3986 38.9222 36.5713 38.8102 36.7019C38.6982 36.8233 38.5535 36.8839 38.3762 36.8839C38.2082 36.8839 38.0588 36.8419 37.9282 36.7579C37.8068 36.6739 37.7462 36.5526 37.7462 36.3939C37.7462 36.1979 37.7928 36.0533 37.8862 35.9599C37.9888 35.8666 38.1055 35.8199 38.2362 35.8199C38.1148 35.3533 37.6388 35.1199 36.8082 35.1199Z" fill={colorLetter || '#fff'}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M118 24.9999H2.00017V23.4999H118V24.9999Z" fill={colorFill || '#fff'}/>
      <path d="M12.0002 23.9999C12.0002 22.8954 12.8956 21.9999 14.0002 21.9999H16.0002C17.1047 21.9999 18.0002 22.8954 18.0002 23.9999V24.9999C18.0002 26.1045 17.1047 26.9999 16.0002 26.9999H14.0002C12.8956 26.9999 12.0002 26.1045 12.0002 24.9999V23.9999Z" fill={colorFill || '#fff'}/>
      <path d="M30.0002 23.9999C30.0002 22.8954 30.8956 21.9999 32.0002 21.9999H34.0002C35.1047 21.9999 36.0002 22.8954 36.0002 23.9999V24.9999C36.0002 26.1045 35.1047 26.9999 34.0002 26.9999H32.0002C30.8956 26.9999 30.0002 26.1045 30.0002 24.9999V23.9999Z" fill={colorFill || '#fff'}/>
      <path d="M48.0002 23.9999C48.0002 22.8954 48.8956 21.9999 50.0002 21.9999H52.0002C53.1047 21.9999 54.0002 22.8954 54.0002 23.9999V24.9999C54.0002 26.1045 53.1047 26.9999 52.0002 26.9999H50.0002C48.8956 26.9999 48.0002 26.1045 48.0002 24.9999V23.9999Z" fill={colorFill || '#fff'}/>
      <path d="M66.0002 23.9999C66.0002 22.8954 66.8956 21.9999 68.0002 21.9999H70.0002C71.1047 21.9999 72.0002 22.8954 72.0002 23.9999V24.9999C72.0002 26.1045 71.1047 26.9999 70.0002 26.9999H68.0002C66.8956 26.9999 66.0002 26.1045 66.0002 24.9999V23.9999Z" fill={colorFill || '#fff'}/>
      <path d="M84.0002 23.9999C84.0002 22.8954 84.8956 21.9999 86.0002 21.9999H88.0002C89.1047 21.9999 90.0002 22.8954 90.0002 23.9999V24.9999C90.0002 26.1045 89.1047 26.9999 88.0002 26.9999H86.0002C84.8956 26.9999 84.0002 26.1045 84.0002 24.9999V23.9999Z" fill={colorFill || '#fff'}/>
      <path d="M102 23.9999C102 22.8954 102.896 21.9999 104 21.9999H106C107.105 21.9999 108 22.8954 108 23.9999V24.9999C108 26.1045 107.105 26.9999 106 26.9999H104C102.896 26.9999 102 26.1045 102 24.9999V23.9999Z" fill={colorFill || '#fff'}/>
  </svg>
)
}

export default HeaderLogo