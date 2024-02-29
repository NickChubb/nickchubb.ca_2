declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// types/d3-geo-projection.d.ts
declare module 'd3-geo-projection' {
  export function geoTimes(): any;
}