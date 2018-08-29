import { Navigation } from 'react-native-navigation';

import SetupMain from './SetupMain';
import Dashboard from './Dashboard';
import SetupUserId from './SetupUserId';
import SetupEncryptionPassword from './SetupEncryptionPassword';
import SetupGetRandom from './SetupGetRandom';
import SetupYourWallet from './SetupYourWallet';
import SetupQRCode from './SetupQRCode';
import SetupSeedPhrase from './SetupSeedPhrase';
import SetupConfirmSeedPhrase from './SetupConfirmSeedPhrase';
import SetupTermsOfService from './SetupTermsOfService';
import SetupEAINode from './SetupEAINode';
import Passphrase from './Passphrase';
import Settings from './Settings';

import CounterApp from './CounterApp';
import CounterComponent from '../components/CounterComponent';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('ndau.Dashboard', () => Dashboard);
  Navigation.registerComponent('ndau.Passphrase', () => Passphrase);

  Navigation.registerComponent('ndau.SetupMain', () => SetupMain);
  Navigation.registerComponent('ndau.SetupUserId', () => SetupUserId);
  Navigation.registerComponent('ndau.SetupEncryptionPassword', () => SetupEncryptionPassword);
  Navigation.registerComponent('ndau.SetupGetRandom', () => SetupGetRandom);
  Navigation.registerComponent('ndau.SetupYourWallet', () => SetupYourWallet);
  Navigation.registerComponent('ndau.SetupSeedPhrase', () => SetupSeedPhrase);
  Navigation.registerComponent('ndau.SetupConfirmSeedPhrase', () => SetupConfirmSeedPhrase);
  Navigation.registerComponent('ndau.SetupQRCode', () => SetupQRCode);
  Navigation.registerComponent('ndau.SetupTermsOfService', () => SetupTermsOfService);
  Navigation.registerComponent('ndau.SetupEAINode', () => SetupEAINode);
  Navigation.registerComponent('ndau.Settings', () => Settings);

  //TODO: temp stuff
  Navigation.registerComponent('ndau.CounterApp', () => CounterApp, store, Provider);
  Navigation.registerComponent('ndau.CounterComponent', () => CounterComponent);
}
