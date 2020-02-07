/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import AppConfig from '../AppConfig'

const getNodeAddress = () => {
  return AppConfig.NODE_ADDRESSES[
    Math.floor(Math.random() * AppConfig.NODE_ADDRESSES.length)
  ]
}

export default {
  getNodeAddress
}
