import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { BytesLike, SignatureLike } from "@ethersproject/bytes";
export declare type AccessList = Array<{
    address: string;
    storageKeys: Array<string>;
}>;
export declare type AccessListish = AccessList | Array<[string, Array<string>]> | Record<string, Array<string>>;
export declare enum TransactionTypes {
    legacy = 0,
    eip2930 = 1,
    eip1559 = 2,
    pow = 4,
    dynamicCrypto = 5,
    deposit = 6,
    nested = 7
}
export declare type UnsignedTransaction = {
    to?: string;
    nonce?: number;
    gasLimit?: BigNumberish;
    gasPrice?: BigNumberish;
    data?: BytesLike;
    value?: BigNumberish;
    chainId?: number;
    type?: number | null;
    accessList?: AccessListish;
    maxPriorityFeePerGas?: BigNumberish;
    maxFeePerGas?: BigNumberish;
    hashNonce?: BigNumberish;
    startHeight?: BigNumberish;
    postAddress?: BytesLike;
    cryptoType?: BytesLike;
    signatureData?: BytesLike;
    publicKey?: BytesLike;
    deployerAddress?: BytesLike;
    investorAddress?: BytesLike;
    beneficiaryAddress?: BytesLike;
    stakedAmount?: BigNumberish;
    stakedTime?: number;
    nestingDepth?: number;
    innerTxData?: BytesLike;
};
export interface Transaction {
    hash?: string;
    to?: string;
    from?: string;
    nonce: number;
    gasLimit: BigNumber;
    gasPrice?: BigNumber;
    data: string;
    value: BigNumber;
    chainId: number;
    r?: string;
    s?: string;
    v?: number;
    type?: number | null;
    accessList?: AccessList;
    maxPriorityFeePerGas?: BigNumber;
    maxFeePerGas?: BigNumber;
    hashNonce?: BigNumber;
    startHeight?: BigNumber;
    postAddress?: BytesLike;
    cryptoType?: BytesLike;
    signatureData?: BytesLike;
    publicKey?: BytesLike;
    deployerAddress?: BytesLike;
    investorAddress?: BytesLike;
    beneficiaryAddress?: BytesLike;
    stakedAmount?: BigNumberish;
    stakedTime?: number;
    nestingDepth?: number;
    innerTxData?: BytesLike;
}
export declare function computeAddress(key: BytesLike | string): string;
export declare function recoverAddress(digest: BytesLike, signature: SignatureLike): string;
export declare function accessListify(value: AccessListish): AccessList;
export declare function serialize(transaction: UnsignedTransaction, signature?: SignatureLike): string;
export declare function parse(rawTransaction: BytesLike): Transaction;
//# sourceMappingURL=index.d.ts.map