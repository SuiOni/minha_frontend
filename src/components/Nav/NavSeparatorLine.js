import styled from 'styled-components';

import rem from '../../utils/rem';
// width: ${rem(3)};
const NavSeparator = styled.span`
  flex: 0 0 auto;
  width: 2px;
  height: ${rem(25)};
  margin: 0 ${rem(15)};

  background: currentColor;
`;

export default NavSeparator;
