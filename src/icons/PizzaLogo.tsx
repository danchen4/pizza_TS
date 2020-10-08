import React, { useState } from 'react';

interface PizzaLogoProps {
  /** Hex  or color name for fill color of SVG.  Default is #000 */
  fillColor?: string;
  width?: string;
  height?: string;
}

export const PizzaLogo: React.FC<PizzaLogoProps> = ({ width = '3rem', height = '3rem' }) => {
  const [toggleFillColor, setToggleFillColor] = useState(false);

  return (
    <div onClick={() => setToggleFillColor(!toggleFillColor)}>
      <svg width={width} height={height} viewBox="0 0 412 412" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Artboard">
            <g id="pizza" transform="translate(14.000000, 14.000000)">
              <circle
                id="Oval"
                stroke="#E99B64"
                strokeWidth="20"
                fill="#F8D660"
                cx="192"
                cy="192"
                r="192"
              ></circle>
              <circle id="Oval-2" fill="#ED6262" cx="98" cy="103" r="29"></circle>
              <circle id="Oval-2" fill="#ED6262" cx="275" cy="275" r="33"></circle>
              <circle id="Oval-2" fill="#ED6262" cx="319.5" cy="147.5" r="30.5"></circle>
              <circle id="Oval-2" fill="#ED6262" cx="217" cy="64" r="25"></circle>
              <circle id="Oval-2" fill="#ED6262" cx="167" cy="217" r="25"></circle>
              <circle id="Oval-2" fill="#ED6262" cx="220" cy="150" r="28"></circle>
              <circle id="Oval-2" fill="#ED6262" cx="69" cy="213" r="29"></circle>
              <circle id="Oval-2" fill="#ED6262" cx="149.5" cy="307.5" r="32.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="178.5" cy="105.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="265.5" cy="118.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="156.5" cy="255.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="100.5" cy="168.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="343.5" cy="228.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="84.5" cy="294.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="32.5" cy="185.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="257.5" cy="194.5" r="6.5"></circle>
              <circle id="Oval-3" fill="#79AA1A" cx="198.5" cy="339.5" r="6.5"></circle>
              <path
                d="M127.850137,154.378018 C129.184002,156.296697 134.257909,156.943569 143.071859,156.318633 C139.9187,163.439544 139.9187,167 143.071859,167 C147.801599,167 151.502687,167 155.138406,167 C157.562218,167 157.562218,163.439544 155.138406,156.318633 C164.496777,156.943569 169.836902,156.296697 171.158781,154.378018 C173.141599,151.5 173.558966,136 149.499001,136 C125.439036,136 125.849341,151.5 127.850137,154.378018 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(149.500000, 151.500000) rotate(6.000000) translate(-149.500000, -151.500000) "
              ></path>
              <path
                d="M199.850137,238.378018 C201.184002,240.296697 206.257909,240.943569 215.071859,240.318633 C211.9187,247.439544 211.9187,251 215.071859,251 C219.801599,251 223.502687,251 227.138406,251 C229.562218,251 229.562218,247.439544 227.138406,240.318633 C236.496777,240.943569 241.836902,240.296697 243.158781,238.378018 C245.141599,235.5 245.558966,220 221.499001,220 C197.439036,220 197.849341,235.5 199.850137,238.378018 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(221.500000, 235.500000) rotate(-19.000000) translate(-221.500000, -235.500000) "
              ></path>
              <path
                d="M285.850137,217.378018 C287.184002,219.296697 292.257909,219.943569 301.071859,219.318633 C297.9187,226.439544 297.9187,230 301.071859,230 C305.801599,230 309.502687,230 313.138406,230 C315.562218,230 315.562218,226.439544 313.138406,219.318633 C322.496777,219.943569 327.836902,219.296697 329.158781,217.378018 C331.141599,214.5 331.558966,199 307.499001,199 C283.439036,199 283.849341,214.5 285.850137,217.378018 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(307.500000, 214.500000) rotate(78.000000) translate(-307.500000, -214.500000) "
              ></path>
              <path
                d="M78.8501373,261.378018 C80.1840018,263.296697 85.2579091,263.943569 94.0718593,263.318633 C90.9186997,270.439544 90.9186997,274 94.0718593,274 C98.8015988,274 102.502687,274 106.138406,274 C108.562218,274 108.562218,270.439544 106.138406,263.318633 C115.496777,263.943569 120.836902,263.296697 122.158781,261.378018 C124.141599,258.5 124.558966,243 100.499001,243 C76.4390362,243 76.8493407,258.5 78.8501373,261.378018 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(100.500000, 258.500000) rotate(-69.000000) translate(-100.500000, -258.500000) "
              ></path>
              <path
                d="M34.8501373,155.378018 C36.1840018,157.296697 41.2579091,157.943569 50.0718593,157.318633 C46.9186997,164.439544 46.9186997,168 50.0718593,168 C54.8015988,168 58.5026874,168 62.138406,168 C64.5622185,168 64.5622185,164.439544 62.138406,157.318633 C71.4967775,157.943569 76.8369025,157.296697 78.158781,155.378018 C80.1415987,152.5 80.5589664,137 56.4990013,137 C32.4390362,137 32.8493407,152.5 34.8501373,155.378018 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(56.500000, 152.500000) rotate(-26.000000) translate(-56.500000, -152.500000) "
              ></path>
              <path
                d="M262.850137,84.3780182 C264.184002,86.296697 269.257909,86.9435687 278.071859,86.3186332 C274.9187,93.4395444 274.9187,97 278.071859,97 C282.801599,97 286.502687,97 290.138406,97 C292.562218,97 292.562218,93.4395444 290.138406,86.3186332 C299.496777,86.9435687 304.836902,86.296697 306.158781,84.3780182 C308.141599,81.5 308.558966,66 284.499001,66 C260.439036,66 260.849341,81.5 262.850137,84.3780182 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(284.500000, 81.500000) rotate(31.000000) translate(-284.500000, -81.500000) "
              ></path>
              <path
                d="M131.850137,57.3780182 C133.184002,59.296697 138.257909,59.9435687 147.071859,59.3186332 C143.9187,66.4395444 143.9187,70 147.071859,70 C151.801599,70 155.502687,70 159.138406,70 C161.562218,70 161.562218,66.4395444 159.138406,59.3186332 C168.496777,59.9435687 173.836902,59.296697 175.158781,57.3780182 C177.141599,54.5 177.558966,39 153.499001,39 C129.439036,39 129.849341,54.5 131.850137,57.3780182 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(153.500000, 54.500000) rotate(-9.000000) translate(-153.500000, -54.500000) "
              ></path>
              <path
                d="M205.850137,318.378018 C207.184002,320.296697 212.257909,320.943569 221.071859,320.318633 C217.9187,327.439544 217.9187,331 221.071859,331 C225.801599,331 229.502687,331 233.138406,331 C235.562218,331 235.562218,327.439544 233.138406,320.318633 C242.496777,320.943569 247.836902,320.296697 249.158781,318.378018 C251.141599,315.5 251.558966,300 227.499001,300 C203.439036,300 203.849341,315.5 205.850137,318.378018 Z"
                id="Path-2"
                fill="#FFF5D4"
                transform="translate(227.500000, 315.500000) rotate(-139.000000) translate(-227.500000, -315.500000) "
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
