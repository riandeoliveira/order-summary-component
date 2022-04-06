import styled from "styled-components";
import theme from "./theme/theme.json";
import device from "media-query-sizes";

export const CardContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 30px 30px ${theme.colors.portage};
  margin: 20px;
  max-width: 450px;
`;

export const HeaderArea = styled.header`
  text-align: center;
`;

export const MusicListener = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  max-width: 100%;
`;

export const MainArea = styled.main`
  padding: 50px;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  animation: fade-in 1s, slide-in 1s;
  color: ${theme.colors.cloud_burst};
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  animation: fade-in 1s;
  color: ${theme.colors.bermuda_gray};
  font-size: 17px;
  line-height: 1.7em;
  margin-bottom: 20px;
`;

export const SubscriptionContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.zircon};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 25px;

  @media ${device.mobileL} {
    flex-direction: column;

    & > div {
      margin-bottom: 20px;
    }
  }
`;

export const PlanContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const MusicalNote = styled.img``;

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;

export const Plan = styled.span`
  color: ${theme.colors.cloud_burst};
  font-weight: 900;
`;

export const Price = styled.span`
  color: ${theme.colors.bermuda_gray};
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 700;
  transition: all 0.2s linear;

  &:hover {
    color: ${theme.colors.cornflower_blue};
    text-decoration: none;
    transition: all 0.2s linear;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  text-align: center;
`;

export const AcceptButton = styled.button`
  animation: increase 1s;
  background-color: ${theme.colors.persian_blue};
  border-radius: 12px;
  box-shadow: 1px 20px 20px ${theme.colors.portage};
  color: ${theme.colors.white};
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  padding: 16px;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${theme.colors.cornflower_blue};
    transition: all 0.2s linear;
  }
`;

export const DeclineButtonContainer = styled.div`
  margin-top: 30px;
`;

export const DeclineButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.bermuda_gray};
  cursor: pointer;
  font-size: 15px;
  font-weight: 900;
  transition: all 0.2s linear;

  &:hover {
    color: ${theme.colors.cloud_burst};
    transition: all 0.2s linear;
  }
`;
