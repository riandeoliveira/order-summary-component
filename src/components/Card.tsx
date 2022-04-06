import content from "../content/card.json";
import {
  CardContainer,
  HeaderArea,
  MusicListener,
  MainArea,
  DescriptionContainer,
  Title,
  Description,
  SubscriptionContainer,
  PlanContainer,
  MusicalNote,
  PriceContainer,
  Plan,
  Price,
  Link,
  OptionsContainer,
  AcceptButton,
  DeclineButtonContainer,
  DeclineButton,
} from "../styles/Card";
import { musicListener, musicalNote } from "../assets/media";

const {
  music_listener_alt,
  title,
  description,
  musical_note_alt,
  plan,
  price,
  link,
  accept_button,
  decline_button,
} = content;

const Card: React.FC = () => {
  return (
    <CardContainer>
      <HeaderArea>
        <MusicListener alt={music_listener_alt} src={musicListener} />
      </HeaderArea>
      <MainArea>
        <DescriptionContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </DescriptionContainer>
        <SubscriptionContainer>
          <PlanContainer>
            <MusicalNote alt={musical_note_alt} src={musicalNote} />
            <PriceContainer>
              <Plan>{plan}</Plan>
              <Price>${price}/year</Price>
            </PriceContainer>
          </PlanContainer>
          <Link href="#">{link}</Link>
        </SubscriptionContainer>
        <OptionsContainer>
          <AcceptButton>{accept_button}</AcceptButton>
          <DeclineButtonContainer>
            <DeclineButton>{decline_button}</DeclineButton>
          </DeclineButtonContainer>
        </OptionsContainer>
      </MainArea>
    </CardContainer>
  );
};

export default Card;
