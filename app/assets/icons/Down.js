import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { useTheme } from 'react-native-paper';

const Down = (props) => {
  const { colors } = useTheme();

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={10} style={{ alignSelf: 'center' }} height={6} {...props}>
      <G data-name="arrow-down-sign-to-navigate (2)">
        <Path
          fill={colors.txtBlack}
          data-name="Path 4"
          d="M4.888 5.572a.683.683 0 0 1-.484-.2l-4.2-4.2a.685.685 0 0 1 .968-.968l3.719 3.72L8.61.204a.685.685 0 0 1 .968.968l-4.2 4.2a.683.683 0 0 1-.49.2Z"
        />
      </G>
    </Svg>
  );
};

export default Down;
