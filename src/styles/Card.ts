import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--bg-card-color);
  border-radius: 20px;
  margin: 20px;
  max-width: 450px;
`;

export const HeaderArea = styled.header``;

export const MusicListener = styled.img`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  max-width: 100%;
`;

export const MainArea = styled.main`
  padding: 50px;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: var(--title-color);
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: var(--text-color);
  font-size: 17px;
  line-height: 1.7em;
  margin-bottom: 20px;
  padding: 0 12px;
`;

export const SubscriptionContainer = styled.div`
  align-items: center;
  background-color: var(--bg-subs-color);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export const PlanContainer = styled.div`
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
  color: var(--plan-color);
  font-weight: 900;
`;

export const Price = styled.span`
  color: var(--price-color);
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 700;

  &:hover {
    color: var(--change-color-hover);
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
  background-color: var(--btn-accept-color);
  border: none;
  border-radius: 8px;
  box-shadow: 1px 20px 15px var(--btn-accept-shadow-color);
  color: var(--option-text-color);
  cursor: pointer;
  font-family: var(--font);
  font-size: 15px;
  font-weight: 700;
  padding: 14px;

  &:hover {
    background-color: var(--btn-accept-color-hover);
    transition: all 0.2s linear;
  }
`;

export const DeclineButton = styled.button`
  color: var(--btn-cancel-color-hover);
  cursor: pointer;
  transition: all 0.2s linear;
`;
