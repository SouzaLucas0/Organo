export interface IColaborador {
    nome: string
    cargo: string
    imagem: string
    id: string
    like: boolean
    time?: string
    data: string
    aoLike?: (id:string) => []
    aoDeletar?: (id:string) => void
}