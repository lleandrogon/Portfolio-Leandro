import { Tecnologia } from "./tecnologia";

export interface Projeto {
    logo: string;
    nome: string;
    descricao: string;
    tecnologias: Tecnologia[];
    link: string;
    github: string;
}