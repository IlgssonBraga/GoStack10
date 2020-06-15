import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: ${lighten(0.45, 'gray')};
`;
