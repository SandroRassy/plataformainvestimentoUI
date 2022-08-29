export interface Position {
    symbol: string;
    amount: string;
    currentPrice: number;    
}

export interface Posicao {
    cpf: string;    
    positions: Position[];    
}