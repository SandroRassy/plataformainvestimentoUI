export interface Position {
    symbol: string;
    amount: string;
    currentPrice: number;
    key: string;
}

export interface UsuarioPosicao {
    cpf: string;
    checkingAccountAmount: number;
    consolidated: number;
    positions: Position[];
    key: string;
}