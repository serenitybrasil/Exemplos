namespace Exemplos.Clinica {
    export interface ContatosRow {
        ContatoId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        ProfissionalId?: number;
        FornecedorId?: number;
        Tratamento?: string;
        Nome?: string;
        Departamento?: string;
        TipoContatoId?: number;
        TipoMeioContatoId?: number;
        ConteudoMeioContato?: string;
        Email?: string;
        ObservacoesContato?: string;
        TipoContato?: string;
        TipoContatoPessoaFisica?: boolean;
        TipoContatoOrdem?: number;
        TipoMeioContato?: string;
    }

    export namespace ContatosRow {
        export const idProperty = 'ContatoId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Clinica.Contatos';

        export namespace Fields {
            export declare const ContatoId: string;
            export declare const PacienteId: string;
            export declare const ConvenioId: string;
            export declare const ProfissionalId: string;
            export declare const FornecedorId: string;
            export declare const Tratamento: string;
            export declare const Nome: string;
            export declare const Departamento: string;
            export declare const TipoContatoId: string;
            export declare const TipoMeioContatoId: string;
            export declare const ConteudoMeioContato: string;
            export declare const Email: string;
            export declare const ObservacoesContato: string;
            export declare const TipoContato: string;
            export declare const TipoContatoPessoaFisica: string;
            export declare const TipoContatoOrdem: string;
            export declare const TipoMeioContato: string;
        }

        ['ContatoId', 'PacienteId', 'ConvenioId', 'ProfissionalId', 'FornecedorId', 'Tratamento', 'Nome', 'Departamento', 'TipoContatoId', 'TipoMeioContatoId', 'ConteudoMeioContato', 'Email', 'ObservacoesContato', 'TipoContato', 'TipoContatoPessoaFisica', 'TipoContatoOrdem', 'TipoMeioContato'].forEach(x => (<any>Fields)[x] = x);
    }
}

