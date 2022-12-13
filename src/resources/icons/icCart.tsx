import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none">
      <Path
        d="M4.25 1.08333L1.125 5.25V19.8333C1.125 20.3859 1.34449 20.9158 1.73519 21.3065C2.12589 21.6972 2.6558 21.9167 3.20833 21.9167H17.7917C18.3442 21.9167 18.8741 21.6972 19.2648 21.3065C19.6555 20.9158 19.875 20.3859 19.875 19.8333V5.25L16.75 1.08333H4.25Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.125 5.25H19.875"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.6667 9.41667C14.6667 10.5217 14.2277 11.5815 13.4463 12.363C12.6649 13.1444 11.6051 13.5833 10.5 13.5833C9.39497 13.5833 8.33516 13.1444 7.55376 12.363C6.77236 11.5815 6.33337 10.5217 6.33337 9.41667"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
