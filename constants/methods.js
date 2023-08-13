export const methods = [
  {
    name: 'CreateCharge',
    entity: 'Charge',
    description:
      'Creates a new Charge / Payment Request in the Bitcoin Lightning Network, payable by any Bitcoin Lightning wallet.',
    params: [
      {
        name: 'expiresIn',
        description: 'Time until charge expiration -> in seconds.',
      },

      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        extra: 'required',
        description: 'Note or comment for this Charge (visible to payer).',
      },
      {
        name: 'internalID',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST Charge updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/charges/create',
      },
    ],
  },
  {
    name: 'GetChargeDetails',
    entity: 'Charge',
    description:
      'Retrieves all information relating to a specific Charge / Payment Request.',
    params: [
      {
        name: 'chargeID',
        extra: 'required',
        description: 'A String representing the ID of the Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/charges/get',
      },
    ],
  },
  {
    name: 'CreateWithdrawalRequest',
    entity: 'Withdrawal Request',
    description:
      'A Withdrawal Request is a QR code that allows someone to scan and receive Bitcoin (e.g. Withdrawals).',
    params: [
      {
        name: 'expiresIn',
        description: 'Time until Withdrawal Request expires -> in seconds.',
      },
      {
        name: 'amount',
        extra: 'required',
        description:
          'The amount for the Withdrawal Request -> in millisatoshis.',
      },
      {
        name: 'description',
        description:
          'Note or comment for this Withdrawal Request (visible to payer).',
      },
      {
        name: 'internalID',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        extra: 'required',
        description:
          'The endpoint ZBD will POST Withdrawal Request updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/withdrawal-requests/create',
      },
    ],
  },
  {
    name: 'GetWithdrawalRequestDetails',
    entity: 'Withdrawal Request',
    description: 'Retrieves details about a specific Withdrawal Request.',
    params: [
      {
        name: 'withdrawalID',
        extra: 'required',
        description: 'A String representing the ID of the Withdrawal Request.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/withdrawal-requests/get',
      },
    ],
  },
  {
    name: 'SendPaymentToLightningAddress',
    entity: 'Lightning Address',
    description:
      'Send Bitcoin payments directly to a Lightning Address. A Lightning Address is an internet identifier (akin to an email address -- andre@zbd.gg) that anyone can send Bitcoin Lightning Network payments to.',
    params: [
      {
        name: 'lnAddress',
        extra: 'required',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'comment',
        description: 'Note or description of this Payment.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/send-payment',
      },
    ],
  },
  {
    name: 'ValidateLightningAddress',
    entity: 'Lightning Address',
    description:
      "Not all internet identifiers are Lightning Addresses / compatible with the Lightning Address protocol. Use this endpoint in order to validate whether a user's entered Lightning Address is valid.",
    params: [
      {
        name: 'lnAddress',
        extra: 'required',
        description: 'The lightning address to be validated.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/validate',
      },
    ],
  },
  {
    name: 'FetchChargeFromLightningAddress',
    entity: 'Lightning Address',
    description:
      "Generates a Bitcoin Lightning Charge / Payment Request for a given Lightning Address destination. Depending on your system's configuration or your product's UX, you may need the ability to generate Charges for specific users using a different provider than ZBD.",
    params: [
      {
        name: 'lnaddress',
        extra: 'required',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'comment',
        description: 'Note or comment of this Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/create-charge',
      },
    ],
  },
  {
    name: 'GetWalletDetails',
    entity: 'Wallet',
    description: 'Retrieves the total balance of a given Project Wallet.',
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/wallet/get',
      },
    ],
  },
  {
    name: 'InitiateInternalTransfer',
    entity: 'Wallet',
    description:
      'Initiates a transfer of funds between two Project Wallets you own.',
    params: [
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount to be transferred -> in millisatoshis.',
      },
      {
        name: 'receiverWalletId',
        extra: 'required',
        description: 'The Wallet ID of the recipient Project.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/internal-transfer/create',
      },
    ],
  },
  {
    name: 'PayInvoice',
    entity: 'Payment',
    description:
      'Pays a Charge / Payment Request in the Bitcoin Lightning Network.',
    params: [
      {
        name: 'description',
        description: 'Note or comment for this Payment.',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'invoice',
        extra: 'required',
        description: 'Lightning Network Payment Request/Charge.',
      },
      {
        name: 'amount',
        description: 'The amount to be paid -> in millisatoshis.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZBD will POST Charge updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/payments/send',
      },
    ],
  },
  {
    name: 'GetPaymentDetails',
    entity: 'Payment',
    description: 'Retrieves all the information related to a specific Payment.',
    params: [
      {
        name: 'paymentID',
        extra: 'required',
        description: 'A String representing the ID of the Payment.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/payments/get',
      },
    ],
  },
  {
    name: 'SendPaymentToGamertag',
    entity: 'ZBD Gamertag',
    description:
      "This API endpoint is used to send Bitcoin payments directly to a user's ZBD Gamertag.",
    params: [
      {
        name: 'gamertag',
        extra: 'required',
        description: 'Desination ZBD gamertag.',
      },
      {
        name: 'amount',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Payment (visible to recipient).',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/send-payment',
      },
    ],
  },
  {
    name: 'FetchGamertagTransactionDetailsByID',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD Gamertag when provided with a ZBD User's ID.",
    params: [
      {
        name: 'transactionID',
        extra: 'required',
        description:
          'A String representing the ZBD Gamertag Payment Transaction ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-payment',
      },
    ],
  },
  {
    name: 'FetchUserIDByGamertag',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD User's ID when provided with a ZBD Gamertag.",
    params: [
      {
        name: 'gamertag',
        extra: 'required',
        description: 'A String representing the ZBD Gamertag of the ZBD user.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-userid',
      },
    ],
  },
  {
    name: 'FetchGamertagByUserID',
    entity: 'ZBD Gamertag',
    description:
      "Invoked when the app first loads. If a plugin reloads, it's invoked again with the existing app.",
    params: [
      {
        name: 'userID',
        extra: 'required',
        description: 'A String representing the specified ZBD User ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-gamertag',
      },
    ],
  },
  {
    name: 'IsSupportedRegion',
    entity: 'Utility',
    description:
      'If you wish to know whether the incoming user request is coming from a region/country where ZBD is supported or not, you can use this simple API endpoint and pass the target IP address as a parameter.',
    params: [
      {
        name: 'ip',
        extra: 'required',
        description: 'A String representing the IP Address being checked.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/is-supported',
      },
    ],
  },
  {
    name: 'APIProductionIPs',
    entity: 'Utility',
    description:
      "The ZBD API relies on callback URLs for keeping you informed about updates that occur to any Charges, Payments, or Withdrawals you've created. In order to ensure that any incoming callback message is indeed from a trusted ZBD API infrastructure server, we provide this API endpoint for you to know which IP addresses real requests come from.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/prod-ips',
      },
    ],
  },
  {
    name: 'BTCUSDExchangeRate',
    entity: 'Utility',
    description:
      "Get the latest price for Bitcoin in US Dollars. The exchange rate feed is refreshed every 5 seconds and is based upon a combination of industry-leading partner exchange providers's price feeds.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/btc-usd',
      },
    ],
  },
]
