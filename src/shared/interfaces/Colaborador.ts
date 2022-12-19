export interface IColaborador extends IColaboradorFunction {
    nome: string
    cargo: string
    imagem: string
    id: number
    like: boolean
}

interface IColaboradorFunction {
    aoLike: (id:number) => []
    aoDeletar: (id:number) => void
}