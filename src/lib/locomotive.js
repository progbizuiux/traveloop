'use client';

import React from 'react';
import SmoothScroll from './smoothscroll';

export const Locomotive = ({ children, lerp = 0.05, smooth = true, smoothMobile = true, resetNativeScroll = false }) => {
  return (
    <SmoothScroll lerp={lerp} smooth={smooth} smoothMobile={smoothMobile} resetNativeScroll={resetNativeScroll}>
      {children}
    </SmoothScroll>
  );
};