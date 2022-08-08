import styled, { keyframes } from "styled-components";

import { color } from "../../common/constants/styles/colors";

const keyframesLoading = keyframes`
  0%, 100% {
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  }
  33% {
    border-radius: 72% 28% 48% 48% / 28% 28% 72% 72%;
  }
  66% {
    border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
  }
`;

export const Container = styled.div`
  margin: 0;
`;

export const Loading = styled.div`
  margin: 10% auto;
  overflow: hidden;
  width: 16rem;
  height: 16rem;
  border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  background: ${color.red} url('https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_700/ncom/es_LA/games/switch/s/super-mario-party-switch/hero');
  background-size: cover;
  background-position: center;
  animation: ${keyframesLoading} 3.75s linear infinite;


  @media (max-width: 768px) {
    margin: 50% auto;
  }
`;
