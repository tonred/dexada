import ton, { Address } from 'ton-inpage-provider'

import { useWallet } from '@/stores/WalletService'

type AssetsImportShape = {
    addTokenAsset: (rootTokenContract: string) => Promise<boolean>,
}

export function useAssetsImport(): AssetsImportShape {
    const wallet = useWallet()

    const addTokenAsset = async (rootTokenContract: string): Promise<boolean> => {
        const account = wallet.account?.address
        if (account == null) {
            return false
        }

        const { newAsset } = await ton.addAsset({
            account,
            type: 'tip3_token',
            params: {
                rootContract: new Address(rootTokenContract),
            },
        })

        return newAsset
    }

    return { addTokenAsset }
}
