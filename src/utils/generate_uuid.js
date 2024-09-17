export class GenerateUUID {
    constructor() {
        this.uuid = this.gerar();
    }

    gerar() {
        const crypto = window.crypto || window.msCrypto;
        const bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);

        bytes[6] = (bytes[6] & 0x0f) | 0x40;
        bytes[8] = (bytes[8] & 0x3f) | 0x80;

        const uuid = [
            bytes[0].toString(16).padStart(2, "0"),
            bytes[1].toString(16).padStart(2, "0"),
            bytes[2].toString(16).padStart(2, "0"),
            bytes[3].toString(16).padStart(2, "0"),
            bytes[4].toString(16).padStart(2, "0"),
            bytes[5].toString(16).padStart(2, "0"),
            bytes[6].toString(16).padStart(2, "0"),
            bytes[7].toString(16).padStart(2, "0"),
            bytes[8].toString(16).padStart(2, "0"),
            bytes[9].toString(16).padStart(2, "0"),
            bytes[10].toString(16).padStart(2, "0"),
            bytes[11].toString(16).padStart(2, "0"),
            bytes[12].toString(16).padStart(2, "0"),
            bytes[13].toString(16).padStart(2, "0"),
            bytes[14].toString(16).padStart(2, "0"),
            bytes[15].toString(16).padStart(2, "0")
        ].join("");

        return uuid.slice(0, 8) + "-" + uuid.slice(8, 12) + "-" + uuid.slice(12, 16) + "-" + uuid.slice(16, 20) + "-" + uuid.slice(20);
    };

    getUUID() {
        return this.uuid;
    }


};
