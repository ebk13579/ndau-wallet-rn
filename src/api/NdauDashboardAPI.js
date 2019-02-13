import LoggingService from '../services/LoggingService'

const ndauDashboardApiHost = 'ndaudashboard.ndau.tech'
const ndauDashboardApiProtocol = 'https'

getTargetPrice = () => {
  return fetch(
    `${ndauDashboardApiProtocol}://${ndauDashboardApiHost}/api/ndau/targetprice`
  )
    .then(response => response.json())
    .then(responseJson => {
      LoggingService.debug(
        `getTargetPrice responseJson ${JSON.stringify(responseJson, null, 2)}`
      )
      return responseJson
    })
    .catch(error => {
      throw error
    })
}

getNumberOfAccounts = userId => {
  LoggingService.debug(
    `${ndauDashboardApiProtocol}://${ndauDashboardApiHost}/api/ndau/account/${userId}/totalnumber`
  )
  return fetch(
    `${ndauDashboardApiProtocol}://${ndauDashboardApiHost}/api/ndau/account/${userId}/totalnumber`
  )
    .then(response => response.json())
    .then(responseJson => {
      LoggingService.debug(
        `getNumberOfAccounts responseJson ${JSON.stringify(
          responseJson,
          null,
          2
        )}`
      )
      return responseJson
    })
}

getNdauNewsLinks = () => {
  return fetch(
    `${ndauDashboardApiProtocol}://${ndauDashboardApiHost}/api/ndau/news`
  )
    .then(response => response.json())
    .then(responseJson => {
      LoggingService.debug(
        `getNdauNewsLinks responseJson ${JSON.stringify(responseJson, null, 2)}`
      )
      return responseJson
    })
}

sendAccountAddresses = (userId, addresses, token) => {
  LoggingService.debug(`Sending ${userId}, ${addresses} and ${token} to Oneiro`)
  return fetch(
    `${ndauDashboardApiProtocol}://${ndauDashboardApiHost}/api/ndau/accountAddress`,
    {
      method: 'POST',
      headers: {
        Authentication: `qr-token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        addresses: addresses
      })
    }
  )
    .then(response => response.json())
    .then(responseJson => {
      LoggingService.debug(
        `sendAccountAddresses responseJson ${JSON.stringify(
          responseJson,
          null,
          2
        )}`
      )
      return responseJson
    })
}

triggerQRTEmail = userId => {
  return fetch(
    `${ndauDashboardApiProtocol}://${ndauDashboardApiHost}/api/emailauth/qr-token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId
      })
    }
  )
    .then(response => response.json())
    .then(responseJson => {
      LoggingService.debug(
        `sendAccountAddresses responseJson ${JSON.stringify(
          responseJson,
          null,
          2
        )}`
      )
      return responseJson
    })
}

export default {
  getTargetPrice,
  getNumberOfAccounts,
  sendAccountAddresses,
  getNdauNewsLinks,
  triggerQRTEmail
}
