import AccountAPIHelper from '../helpers/AccountAPIHelper'
import MultiSafeHelper from '../helpers/MultiSafeHelper'
import UserStore from '../stores/UserStore'

const loadUserData = async user => {
  const walletKeys = Object.keys(user.wallets)
  for (const walletKey of walletKeys) {
    const wallet = user.wallets[walletKey]
    await AccountAPIHelper.populateWalletWithAddressData(wallet)
  }

  // after the data is loaded successfully then save the user
  const password = await UserStore.getPassword()
  // double check that both are truthy, user should be if password is
  // so we could just check for password, but if they are not we might
  // have other problems.
  if (user && password) {
    await MultiSafeHelper.saveUser(user, password)
  }
}

export default {
  loadUserData: loadUserData
}
