//Função para formatar um date para o padrão "dd/mm/yyyy hh/mm/ss" (obrigado chat gpt)

export function formatDateTime(date) {
    // Extract date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year
    
    // Extract time components
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    // Format as dd/mm/yy hh:mm:ss
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}