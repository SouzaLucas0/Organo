export interface IColaborador {
    nome: string
    cargo: string
    imagem: string
    id: string
    like: boolean
    time?: string
    aoLike?: (id:string) => []
    aoDeletar?: (id:string) => void
}