import { AddressLiteral } from 'everscale-inpage-provider'

import CoinLogo from '@/assets/EVERIcon.svg'

export class DexConstants {

    static CoinDecimals = 9

    static CoinSymbol = 'EVER'

    static CoinLogoURI = CoinLogo

    static EVERWrapGas = '1000000000' // <= 1 EVER

    static EVERMultipleSwapFee = '10000000000' // <= 10 EVER

    static DexRootAddress = new AddressLiteral('0:5eb5713ea9b4a0f3a13bc91b282cde809636eb1e68d2fcb6427b9ad78a5a9008')

    static EverToTip3Address = new AddressLiteral('0:8ebe12dd57e0bec16d84135f82743ea4b5bf65c0fd9e526cbfa1d10d2f0f1402')

    static Tip3ToEverAddress = new AddressLiteral('0:959c96f962cfba25e0d5117492a2b0e2f6a349d1a7b094494a9fe5c258fc4755')

    static EverWeverToTip3Address = new AddressLiteral('0:5f01f0d04a77db53f4f266cf5148e01e42ae74c6425b4e961cb91bd63a8b561b')

    static WeverVaultAddress = new AddressLiteral('0:557957cba74ab1dc544b4081be81f1208ad73997d74ab3b72d95864a41b779a4')

    static FarmFabricAddress = new AddressLiteral('0:c6774e6041b2ba4cf1898196d53a0562edd39b1816e5fb0079f7f64e324ec1e1')

    static ADARootAddress = new AddressLiteral('0:152a7c50f7df2f305b56a1dd7e254d84a5aed018ba44b920f28def735215baa1')

    static WTONRootAddress = new AddressLiteral('0:0ee39330eddb680ce731cd6a443c71d9069db06d149a9bec9569d1eb8d04eb37')

    static WEVERRootAddress = new AddressLiteral('0:a49cd4e158a9a15555e624759e2e4e766d22600b7800d891e46f9291f044a93d')

    static USDTRootAddress = new AddressLiteral('0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2')

    static USDCRootAddress = new AddressLiteral('0:c37b3fafca5bf7d3704b081fde7df54f298736ee059bf6d32fac25f5e6085bf6')

    static BRIDGERootAddress = new AddressLiteral('0:f2679d80b682974e065e03bf42bbee285ce7c587eb153b41d761ebfd954c45e1')

    static DAFRootAddress = new AddressLiteral('0:f48054939064d686a9ad68d96d9ab79e409b095557c06ab7f073097dade7057f')

    static WTONUSDTPairAddress = new AddressLiteral('0:388bc635625a3c6f424e493223cd38f4ed756a16ab3f477e2288e4b2dec500af')

    static WTONBRIDGEPairAddress = new AddressLiteral('0:22e137155647e2ce7d9cb04d538a4be05ea832c3f34290e776e38d2acf5af54f')

    static WTONDAFPairAddress = new AddressLiteral('0:6ce83f4ae3662ff6a050bc36b6efeb4a5ffc05973ac5040c681c009152f7d700')

    static UniWTONUSDTLPRootAddress = new AddressLiteral('0:53abe27ec16208973c9643911c35b5d033744fbb95b11b5672f71188db5a42dc')

    static TokenListURI = 'https://raw.githubusercontent.com/tonred/dex-assets/main/manifest.json'

    static MinWalletVersion = '0.2.26'

}
