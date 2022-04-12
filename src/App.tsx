import {
  AppBox,
  DescriptionBox,
  SubscriptionBox,
  Plan,
  Price,
  OptionsBox,
} from "./styles/App";
import { musicListener, musicalNote } from "./assets/media";

const App: React.FC = (): JSX.Element => {
  return (
    <AppBox>
      <header>
        <img alt="Small musical note icon" src={musicListener} />
      </header>
      <main>
        <DescriptionBox>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </DescriptionBox>
        <SubscriptionBox>
          <div>
            <img
              alt="Animation of a person listening to music excitedly"
              src={musicalNote}
            />
            <div>
              <Plan>Annual Plan</Plan>
              <Price>$59.99/year</Price>
            </div>
          </div>
          <a href=".">Change</a>
        </SubscriptionBox>
        <OptionsBox>
          <button>Proceed to Payment</button>
          <div>
            <button>Cancel Order</button>
          </div>
        </OptionsBox>
      </main>
    </AppBox>
  );
};

export default App;
