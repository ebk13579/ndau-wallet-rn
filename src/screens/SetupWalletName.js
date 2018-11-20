import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Alert
} from 'react-native'
import CommonButton from '../components/CommonButton'
import SetupProgressBar from '../components/SetupProgressBar'
import cssStyles from '../css/styles'
import SetupStore from '../model/SetupStore'
import { SafeAreaView } from 'react-navigation'
import DataFormatHelper from '../helpers/DataFormatHelper'

class SetupEncryptionPassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nameEntered: false
    }
  }

  showNextSetup = () => {
    const { navigation } = this.props

    const user = navigation.getParam('user', null)
    if (user) {
      // get it out of AppConstants.TEMP_USER if we have to
      // and into the new walletId
      DataFormatHelper.moveTempUserToWalletName(user, SetupStore.walletId)

      if (!user.userId) {
        user.userId = SetupStore.walletId
      }
      if (!user.wallets) {
        user.wallets = [{ walletId: SetupStore.walletId }]
      }
    }

    navigation.navigate('SetupEncryptionPassword', {
      user,
      walletSetupType: navigation.state.params &&
        navigation.state.params.walletSetupType
    })
  }

  render () {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={cssStyles.container}>
          <ScrollView style={styles.contentContainer}>
            <SetupProgressBar navigation={this.props.navigation} />
            <View style={styles.textContainer}>
              <Text style={cssStyles.wizardText} onPress={this.showInformation}>
                Give this wallet a name.
              </Text>
            </View>
            <TextInput
              style={cssStyles.textInput}
              onChangeText={value => {
                this.setState({ nameEntered: true })
                SetupStore.walletId = value
              }}
              // value={(value) => {
              //   SetupStore.walletId = value;
              // }}
              placeholder={`Wallet ${SetupStore.walletId}`}
              placeholderTextColor='#333'
              autoCapitalize='none'
            />
          </ScrollView>
          <View style={styles.footer}>
            <CommonButton
              onPress={this.showNextSetup}
              title='Next'
              disabled={!this.state.nameEntered}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1c2227'
  },
  button: {
    marginTop: 0
  },
  textContainer: {
    marginBottom: 8
  },
  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
  footer: {
    justifyContent: 'flex-end'
  },
  progress: {
    paddingTop: 15,
    paddingBottom: 15
  },
  infoParagraph: {
    flexDirection: 'row'
  }
})

export default SetupEncryptionPassword
