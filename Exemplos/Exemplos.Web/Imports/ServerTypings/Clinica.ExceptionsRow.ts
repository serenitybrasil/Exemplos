namespace Exemplos.Clinica {
    export interface ExceptionsRow {
        Id?: number;
        Guid?: string;
        ApplicationName?: string;
        MachineName?: string;
        CreationDate?: string;
        Type?: string;
        IsProtected?: boolean;
        Host?: string;
        Url?: string;
        HttpMethod?: string;
        IpAddress?: string;
        Source?: string;
        Message?: string;
        Detail?: string;
        StatusCode?: number;
        Sql?: string;
        DeletionDate?: string;
        FullJson?: string;
        ErrorHash?: number;
        DuplicateCount?: number;
    }

    export namespace ExceptionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ApplicationName';
        export const localTextPrefix = 'Clinica.Exceptions';
        export const lookupKey = 'Clinica.Exceptions';

        export function getLookup(): Q.Lookup<ExceptionsRow> {
            return Q.getLookup<ExceptionsRow>('Clinica.Exceptions');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const Guid: string;
            export declare const ApplicationName: string;
            export declare const MachineName: string;
            export declare const CreationDate: string;
            export declare const Type: string;
            export declare const IsProtected: string;
            export declare const Host: string;
            export declare const Url: string;
            export declare const HttpMethod: string;
            export declare const IpAddress: string;
            export declare const Source: string;
            export declare const Message: string;
            export declare const Detail: string;
            export declare const StatusCode: string;
            export declare const Sql: string;
            export declare const DeletionDate: string;
            export declare const FullJson: string;
            export declare const ErrorHash: string;
            export declare const DuplicateCount: string;
        }

        ['Id', 'Guid', 'ApplicationName', 'MachineName', 'CreationDate', 'Type', 'IsProtected', 'Host', 'Url', 'HttpMethod', 'IpAddress', 'Source', 'Message', 'Detail', 'StatusCode', 'Sql', 'DeletionDate', 'FullJson', 'ErrorHash', 'DuplicateCount'].forEach(x => (<any>Fields)[x] = x);
    }
}

