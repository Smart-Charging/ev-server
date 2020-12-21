export interface SensitiveDataMigration {
    id: string;
    timestamp: Date;
    name: string;
    version: string;
    durationSecs: number;
    sensitiveData: SenitiveData[]
}

export interface SenitiveData {
    identifier: string;
    path: string;
    initialValue: EncryptedValue
    rawValue: string;
    migratedValue: EncryptedValue
}

export interface EncryptedValue {
    key: string;
    encryptedValue: string;
}