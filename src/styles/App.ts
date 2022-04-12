import styled from "styled-components";
import theme from "./theme/theme.json";
import device from "media-query-sizes";

export const AppBox = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 30px 30px ${theme.colors.portage};
  margin: 20px;
  max-width: 450px;

  header {
    img {
      border-radius: 10px 10px 0 0;
      max-width: 100%;
    }
  }

  main {
    padding: 50px;
  }
`;

export const DescriptionBox = styled.div`
  text-align: center;

  h1 {
    animation: fade-in 1s, slide-in 1s;
    color: ${theme.colors.cloud_burst};
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  p {
    animation: fade-in 1s;
    color: ${theme.colors.bermuda_gray};
    font-size: 17px;
    line-height: 1.7em;
    margin-bottom: 20px;
  }
`;

export const SubscriptionBox = styled.div`
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

  div {
    align-items: center;
    display: flex;

    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;
    }
  }

  a {
    font-size: 14px;
    font-weight: 700;
    transition: all 0.2s linear;

    &:hover {
      color: ${theme.colors.cornflower_blue};
      text-decoration: none;
      transition: all 0.2s linear;
    }
  }
`;

export const Plan = styled.span`
  color: ${theme.colors.cloud_burst};
  font-weight: 900;
`;

export const Price = styled.span`
  color: ${theme.colors.bermuda_gray};
`;

export const OptionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  text-align: center;

  & > button {
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
    }

    @media ${device.tablet} {
      animation: none;
    }
  }

  div {
    margin-top: 30px;

    button {
      background-color: transparent;
      color: ${theme.colors.bermuda_gray};
      cursor: pointer;
      font-size: 15px;
      font-weight: 900;
      transition: all 0.2s linear;

      &:hover {
        color: ${theme.colors.cloud_burst};
      }
    }
  }
`;
