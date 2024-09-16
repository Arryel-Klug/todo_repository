// usaria um pacote nesse caso, mas como não queria instalar nenhum só peguei uma função aleatória gerada pelo chatGPT
export function generateUUID() {
    // Gera um array de 16 bytes aleatórios
    const crypto = window.crypto || window.msCrypto; // Suporte para navegadores
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);

    // Define as versões e variantes para o UUID v4
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // Versão 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variante DCE 1.1

    // Converte os bytes em uma string UUID
    const uuid = [
        bytes[0].toString(16).padStart(2, '0'),
        bytes[1].toString(16).padStart(2, '0'),
        bytes[2].toString(16).padStart(2, '0'),
        bytes[3].toString(16).padStart(2, '0'),
        bytes[4].toString(16).padStart(2, '0'),
        bytes[5].toString(16).padStart(2, '0'),
        bytes[6].toString(16).padStart(2, '0'),
        bytes[7].toString(16).padStart(2, '0'),
        bytes[8].toString(16).padStart(2, '0'),
        bytes[9].toString(16).padStart(2, '0'),
        bytes[10].toString(16).padStart(2, '0'),
        bytes[11].toString(16).padStart(2, '0'),
        bytes[12].toString(16).padStart(2, '0'),
        bytes[13].toString(16).padStart(2, '0'),
        bytes[14].toString(16).padStart(2, '0'),
        bytes[15].toString(16).padStart(2, '0')
    ].join('');

    // Insere os hífens no formato padrão
    return uuid.slice(0, 8) + '-' + uuid.slice(8, 12) + '-' + uuid.slice(12, 16) + '-' + uuid.slice(16, 20) + '-' + uuid.slice(20);
}