import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, SafeAreaView, Alert } from 'react-native';
import ndauApi from '../api/NdauAPI';
import CommonButton from '../components/CommonButton';
import Stepper from '../components/Stepper';
import RNExitApp from 'react-native-exit-app';

class SetupUserId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      numberOfAccounts: 0,
      userIdPresent: false
    };
  }

  componentDidMount = () => {
    this.props.navigator.setStyle({
      drawUnderTabBar: true,
      tabBarHidden: true
    });
  };

  confirmUserIdPresent = () => {
    if (!this.state.userId) return false;
    return new Promise((resolve, reject) => {
      ndauApi
        .getNumberOfAccounts(this.state.userId)
        .then((numberOfAccounts) => {
          this.setState({
            numberOfAccounts: numberOfAccounts
          });
          resolve(numberOfAccounts > 0);
        })
        .catch((error) => {
          console.error(error);
          reject(false);
        });
    });
  };

  async verify() {
    if (!this.state.userId) this.showErrorMessage('Please enter a User ID first.');
    const userIdPresent = await this.confirmUserIdPresent();
    this.setState({ userIdPresent: userIdPresent });
    if (!userIdPresent) this.showErrorMessage('No user associated with that ID.');
    if (userIdPresent) this.showInfoMessage('Account verified.');
  }

  nextScreen() {
    this.props.navigator.push({
      label: 'SetupQRCode',
      screen: 'ndau.SetupQRCode',
      passProps: {
        userId: this.state.userId,
        parentStyles: this.props.parentStyles,
        iconsMap: this.props.iconsMap,
        numberOfAccounts: this.state.numberOfAccounts
      },
      navigatorStyle: {
        drawUnderTabBar: true,
        tabBarHidden: true,
        disabledBackGesture: true
      },
      backButtonHidden: true
    });
  }

  showExitApp() {
    Alert.alert(
      '',
      `We are thrilled you're excited about ndau! At the moment, this wallet app is only useful to accredited investors who have already purchased ndau. Once you have purchased ndau and received your ID, please come back and set your wallet up.`,
      [
        {
          text: 'Exit app',
          onPress: () => {
            RNExitApp.exitApp();
          }
        }
      ],
      { cancelable: false }
    );
  }

  showErrorMessage(msg) {
    Alert.alert('Error', msg, [ { text: 'OK', onPress: () => {} } ], { cancelable: false });
  }

  showInfoMessage(msg) {
    Alert.alert('Information', msg, [ { text: 'OK', onPress: () => {} } ], { cancelable: false });
  }
  textChanged = (userId) => {
    if (userId.length === 3) {
      userId += '-';
    }
    this.setState({ userId });
  };

  onSendEmail() {
    if (!this.state.userId) this.showErrorMessage('Please enter a User ID first.');
    ndauApi
      .triggerQRTEmail(this.state.userId)
      .then(() => {
        this.nextScreen();
      })
      .catch((error) => {
        this.showErrorMessage('Email could not be sent.');
        console.error(error);
      });
  }

  textChanged = (userId) => {
    if (userId.length === 3) {
      userId += '-';
    }
    this.setState({ userId });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={this.props.parentStyles.container}>
          <ScrollView style={styles.contentContainer}>
            <Stepper screenNumber={1} />
            <View>
              <Text style={this.props.parentStyles.wizardText}>
                In order to deliver your ndau to this wallet on Genesis Day, we need the
                six-character code you use to access the ndau dashboard.
              </Text>
            </View>
            <TextInput
              style={this.props.parentStyles.textInput}
              onChangeText={(userId) => this.textChanged(userId)}
              value={this.state.userId}
              placeholder="Enter your unique User ID"
              placeholderTextColor="#333"
              autoCapitalize="characters"
            />

            <View style={styles.buttonContainer}>
              <CommonButton
                onPress={() => {
                  this.verify();
                }}
                title="Verify"
              />
            </View>
            <View style={styles.buttonContainer}>
              <CommonButton onPress={this.showExitApp} title="I don't have an ID" />
            </View>
            <View style={styles.section} />
          </ScrollView>
          <View style={styles.footer}>
            <Text style={this.props.parentStyles.wizardText}>
              We will send you an email to confirm you are the account holder.
            </Text>

            <CommonButton
              style={{ marginTop: 15 }}
              onPress={() => {
                this.onSendEmail();
              }}
              title="Send email"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1c2227'
  },
  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
  buttonContainer: {
    marginBottom: 20
  },
  footer: {
    justifyContent: 'flex-end'
  }
});

export default SetupUserId;