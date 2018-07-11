/// <reference types="jqueryui" />
/// <reference types="jquery.validation" />
/// <reference types="jquery" />
declare namespace Exemplos.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.LanguageList {
    function getValue(): string[][];
}
declare namespace Exemplos.ScriptInitialization {
}
declare namespace Exemplos {
    class LKCodeDescr extends Serenity.LookupEditorBase<LKCodeDescOptions, any> {
        constructor(container: JQuery, opt?: LKCodeDescOptions);
        getSelect2Options(): Select2Options;
        protected myFormatSelection(item: Serenity.Select2Item): string;
        protected myFormatResult(item: Serenity.Select2Item): string;
    }
    interface LKCodeDescOptions extends Serenity.LookupEditorOptions {
        codeName: string;
        descrName: string;
    }
}
declare namespace Exemplos.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare var jsPDF: any;
declare namespace Exemplos.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Exemplos.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Exemplos.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Exemplos.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Exemplos.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Exemplos.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Exemplos.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace Exemplos {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Exemplos.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Exemplos.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Exemplos.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Exemplos.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Exemplos.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Exemplos.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Exemplos.Clinica {
    class TiposMeiosContatosDialog extends Serenity.EntityDialog<TiposMeiosContatosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TiposMeiosContatosForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class TiposMeiosContatosEditor extends Common.GridEditorBase<TiposMeiosContatosRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposMeiosContatosEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class TiposMeiosContatosEditorDialog extends Common.GridEditorDialog<TiposMeiosContatosRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TiposMeiosContatosForm;
    }
}
declare namespace Exemplos.Clinica {
    class TiposMeiosContatosGrid extends Serenity.EntityGrid<TiposMeiosContatosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposMeiosContatosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class TiposEnderecosDialog extends Serenity.EntityDialog<TiposEnderecosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TiposEnderecosForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class TiposEnderecosEditor extends Common.GridEditorBase<TiposEnderecosRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposEnderecosEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class TiposEnderecosEditorDialog extends Common.GridEditorDialog<TiposEnderecosRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TiposEnderecosForm;
    }
}
declare namespace Exemplos.Clinica {
    class TiposEnderecosGrid extends Serenity.EntityGrid<TiposEnderecosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposEnderecosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class TiposContatosDialog extends Serenity.EntityDialog<TiposContatosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TiposContatosForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class TiposContatosEditor extends Common.GridEditorBase<TiposContatosRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposContatosEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class TiposContatosEditorDialog extends Common.GridEditorDialog<TiposContatosRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: TiposContatosForm;
    }
}
declare namespace Exemplos.Clinica {
    class TiposContatosGrid extends Serenity.EntityGrid<TiposContatosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposContatosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class StatusDialog extends Serenity.EntityDialog<StatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StatusForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class StatusEditor extends Common.GridEditorBase<StatusRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class StatusEditorDialog extends Common.GridEditorDialog<StatusRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: StatusForm;
    }
}
declare namespace Exemplos.Clinica {
    class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class SexoDialog extends Serenity.EntityDialog<SexoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SexoForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class SexoEditor extends Common.GridEditorBase<SexoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SexoEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class SexoEditorDialog extends Common.GridEditorDialog<SexoRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: SexoForm;
    }
}
declare namespace Exemplos.Clinica {
    class SexoGrid extends Serenity.EntityGrid<SexoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SexoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class PacientesConveniosDialog extends Serenity.EntityDialog<PacientesConveniosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PacientesConveniosForm;
        dialogOpen(): void;
        afterLoadEntity(): void;
        constructor();
    }
}
declare namespace Exemplos.Clinica {
    class PacientesPacientesConveniosDialog extends PacientesConveniosDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace Exemplos.Clinica {
    class PacientesConveniosGrid extends Serenity.EntityGrid<PacientesConveniosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PacientesConveniosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class PacientesPacientesConveniosGrid extends PacientesConveniosGrid {
        protected getDialogType(): typeof PacientesPacientesConveniosDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _PacienteId;
        PacienteId: number;
    }
}
declare namespace Exemplos.Clinica {
    class PacientesPacientesEmissaoNfDialog extends PacientesEmissaoNfDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace Exemplos.Clinica {
    class PacientesEmissaoNfGrid extends Serenity.EntityGrid<PacientesEmissaoNfRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PacientesEmissaoNfDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class PacientesPacientesEmissaoNfGrid extends PacientesEmissaoNfGrid {
        protected getDialogType(): typeof PacientesPacientesEmissaoNfDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _PacienteId;
        PacienteId: number;
    }
}
declare namespace Exemplos.Clinica {
    class PacientesEmissaoNfDialog extends Serenity.EntityDialog<PacientesEmissaoNfRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PacientesEmissaoNfForm;
        protected limpa_formulario_cep(): void;
        protected preenche_formulario_cep(thisForm: any, dados_cep: ViaCepData): void;
        protected preenche_formulario_cep_string(info: any): void;
        dialogOpen(): void;
        getValidatorOptions(): JQueryValidation.ValidationOptions;
        constructor();
    }
}
declare namespace Exemplos.Clinica {
    class PacientesEmissaoNfEditor extends Common.GridEditorBase<PacientesEmissaoNfRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PacientesEmissaoNfEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class PacientesEmissaoNfEditorDialog extends Common.GridEditorDialog<PacientesEmissaoNfRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PacientesEmissaoNfForm;
    }
}
declare namespace Exemplos.Clinica {
    class PacientesConveniosEditor extends Common.GridEditorBase<PacientesConveniosRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PacientesConveniosEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class PacientesConveniosEditorDialog extends Common.GridEditorDialog<PacientesConveniosRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: PacientesConveniosForm;
    }
}
declare namespace Exemplos.Clinica {
    class PacientesDialog extends Serenity.EntityDialog<PacientesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PacientesForm;
        private pacientesconveniosGrid;
        private pacientesemissaonfGrid;
        private loadedState;
        dialogOpen(): void;
        getValidatorOptions(): JQueryValidation.ValidationOptions;
        updateTitle(): void;
        updateInterface(): void;
        getToolbarButtons(): Serenity.ToolButton[];
        afterLoadEntity(): void;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: PacientesRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace Exemplos.Clinica {
    class PacientesGrid extends Serenity.EntityGrid<PacientesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PacientesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class FornecedoresDialog extends Serenity.EntityDialog<FornecedoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: FornecedoresForm;
        dialogOpen(): void;
        afterLoadEntity(): void;
        constructor();
    }
}
declare namespace Exemplos.Clinica {
    class FornecedoresEditor extends Common.GridEditorBase<FornecedoresRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FornecedoresEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class FornecedoresEditorDialog extends Common.GridEditorDialog<FornecedoresRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: FornecedoresForm;
    }
}
declare namespace Exemplos.Clinica {
    class FornecedoresGrid extends Serenity.EntityGrid<FornecedoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FornecedoresDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class ExceptionsDialog extends Serenity.EntityDialog<ExceptionsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ExceptionsForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class ExceptionsEditor extends Common.GridEditorBase<ExceptionsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExceptionsEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class ExceptionsEditorDialog extends Common.GridEditorDialog<ExceptionsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ExceptionsForm;
    }
}
declare namespace Exemplos.Clinica {
    class ExceptionsGrid extends Serenity.EntityGrid<ExceptionsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExceptionsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class EstadosCivisDialog extends Serenity.EntityDialog<EstadosCivisRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EstadosCivisForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class EstadosCivisEditor extends Common.GridEditorBase<EstadosCivisRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EstadosCivisEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class EstadosCivisEditorDialog extends Common.GridEditorDialog<EstadosCivisRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: EstadosCivisForm;
    }
}
declare namespace Exemplos.Clinica {
    class EstadosCivisGrid extends Serenity.EntityGrid<EstadosCivisRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EstadosCivisDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class EnderecosEditor extends Common.GridEditorBase<EnderecosRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EnderecosEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: EnderecosRow, id: number): boolean;
    }
}
declare namespace Exemplos.Clinica {
    class EnderecosEditorDialog extends Common.GridEditorDialog<EnderecosRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: EnderecosForm;
        protected limpa_formulario_cep(): void;
        protected preenche_formulario_cep(thisForm: any, dados_cep: ViaCepData): void;
        protected preenche_formulario_cep_string(info: any): void;
        updateTitle(): void;
        constructor();
    }
}
declare namespace Exemplos.Clinica {
    class ConveniosDialog extends Serenity.EntityDialog<ConveniosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ConveniosForm;
        private loadedState;
        dialogOpen(): void;
        afterLoadEntity(): void;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Exemplos.Clinica {
    class ConveniosEditor extends Common.GridEditorBase<ConveniosRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConveniosEditorDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class ConveniosEditorDialog extends Common.GridEditorDialog<ConveniosRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ConveniosForm;
    }
}
declare namespace Exemplos.Clinica {
    class ConveniosGrid extends Serenity.EntityGrid<ConveniosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConveniosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos.Clinica {
    class ContatosDialog extends Serenity.EntityDialog<ContatosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ContatosForm;
        dialogOpen(): void;
    }
}
declare namespace Exemplos.Clinica {
    class ContatosEditor extends Common.GridEditorBase<ContatosRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContatosEditorDialog;
        protected getLocalTextPrefix(): string;
        protected _myParentForm: string;
        myParentForm: string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected initEntityDialog(itemType: string, dialog: ContatosEditorDialog): void;
        protected validateEntity(row: ContatosRow, id: number): boolean;
        protected remove_coluna(nomeColuna: string): void;
    }
}
declare namespace Exemplos.Clinica {
    class ContatosEditorDialog extends Common.GridEditorDialog<ContatosRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: ContatosForm;
        protected _myParentForm: string;
        myParentForm: string;
        updateTitle(): void;
        constructor();
        private setMascara(details);
    }
}
declare namespace Exemplos.Clinica {
    class ContatosGrid extends Serenity.EntityGrid<ContatosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContatosDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Exemplos {
    function JSvalidarCPF(CPF: string): boolean;
    function JSvalidarCNPJ(CNPJ: any): boolean;
    /**
     * Validar CPF no form do Serenity
     * @param widget: passar o nome do campo para validação
     * @param uniqueName: Passar o uniqueName do Dialog
     * @param alert: texto que vai aparecer no HINT do erro
     * @param text: texto que vai aparecer no ALERT WARNING do erro
     * @param setfocus: se vai acionar ou não o focus no campo.
     */
    function addValidationRule_CPF(widget: Serenity.Widget<any>, VOptions?: addValidationRuleOptions): void;
    /**
     * Validar CNPJ no form do Serenity
     * @param widget: passar o nome do campo para validação
     * @param uniqueName: Passar o uniqueName do Dialog
     * @param alert: texto que vai aparecer no HINT do erro
     * @param text: texto que vai aparecer no ALERT WARNING do erro
     * @param setfocus: se vai acionar ou não o focus no campo.
     */
    function addValidationRule_CNPJ(widget: Serenity.Widget<any>, VOptions?: addValidationRuleOptions): void;
    interface addValidationRuleOptions {
        uniqueName?: string;
        alert?: string;
        text?: string;
        setfocus?: boolean;
    }
    interface ViaCepData {
        /**
         * Para o typescript sem warnings e erros nos dados retornados de https://viacep.com.br/ws/29075590/json
         */
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        unidade: string;
        ibge: string;
        gia: string;
    }
    /**
     * O Formulario deve ser passado para que a funcao chamada saiba qual formulario ira preencher.
     * Esta funcao poderia usar promise e retornar para tratamento diretamente, mas para evitar alguma incompatibilidade em navegadores antigos,
     * a redundância é feita e passada à função de callback para preenchimento dos campos do formulário.
     *
     * @param CEP - string do CEP a ser buscado
     * @param formulario - Deve ser passado para nao perder a referencia
     * @param fnRetornoPreenchimento - Funcao para preencher o formulario
     */
    function BuscaCEP(CEP: any, formulario: any, fnRetornoPreenchimento: any): void;
}
declare namespace Exemplos.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Exemplos.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Exemplos.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Exemplos.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Exemplos.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Exemplos.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Exemplos.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Exemplos.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Exemplos.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Exemplos.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Exemplos.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Exemplos.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Exemplos.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Exemplos.Administration {
}
declare namespace Exemplos.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
}
declare namespace Exemplos.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Exemplos.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Exemplos.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Exemplos.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Exemplos.Administration {
}
declare namespace Exemplos.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Exemplos.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Exemplos.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ContatosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ContatosForm {
        Tratamento: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Departamento: Serenity.StringEditor;
        TipoContatoId: Serenity.LookupEditor;
        TipoMeioContatoId: Serenity.LookupEditor;
        ConteudoMeioContato: Serenity.MaskedEditor;
        Email: Serenity.EmailEditor;
        ObservacoesContato: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ContatosRow {
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
    namespace ContatosRow {
        const idProperty = "ContatoId";
        const nameProperty = "Nome";
        const localTextPrefix = "Clinica.Contatos";
        namespace Fields {
            const ContatoId: string;
            const PacienteId: string;
            const ConvenioId: string;
            const ProfissionalId: string;
            const FornecedorId: string;
            const Tratamento: string;
            const Nome: string;
            const Departamento: string;
            const TipoContatoId: string;
            const TipoMeioContatoId: string;
            const ConteudoMeioContato: string;
            const Email: string;
            const ObservacoesContato: string;
            const TipoContato: string;
            const TipoContatoPessoaFisica: string;
            const TipoContatoOrdem: string;
            const TipoMeioContato: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ContatosService {
        const baseUrl = "Clinica/Contatos";
        function Create(request: Serenity.SaveRequest<ContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ConveniosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ConveniosForm {
        Cnpj: Serenity.MaskedEditor;
        RazaoSocial: Serenity.StringEditor;
        NomeFantasia: Serenity.StringEditor;
        CodigoAns: Serenity.StringEditor;
        CadastroConvenio: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        InscricaoMunicipal: Serenity.StringEditor;
        InscricaoEstadual: Serenity.StringEditor;
        Site: Serenity.StringEditor;
        DataInicio: Serenity.DateTimeEditor;
        Inativo: Serenity.BooleanEditor;
        DataFim: Serenity.DateTimeEditor;
        MotivoCancelamento: Serenity.TextAreaEditor;
        Observacao: Serenity.TextAreaEditor;
        VersaoTiss: Serenity.StringEditor;
        WebService: Serenity.StringEditor;
        SadtSolContratadoId: Serenity.StringEditor;
        SadtExecutanteId: Serenity.StringEditor;
        SadtProfissionalexecutante: Serenity.StringEditor;
        SadtMembroEquipe: Serenity.StringEditor;
        IdOrigem: Serenity.StringEditor;
        IdDestino: Serenity.StringEditor;
        OrigemIdPrestador: Serenity.StringEditor;
        DestinoIdPrestador: Serenity.StringEditor;
        IdLogo: Serenity.IntegerEditor;
        GeraTiss: Serenity.BooleanEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Latitude: Serenity.TextAreaEditor;
        Longitude: Serenity.TextAreaEditor;
        EmailNotaFiscal: Serenity.EmailEditor;
        EmailContato: Serenity.EmailEditor;
        EmailFaturamento: Serenity.EmailEditor;
        EmailGlosa: Serenity.EmailEditor;
        ContatosList: Serenity.StringEditor;
        EnderecosList: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ConveniosRow {
        ConvenioId?: number;
        Cnpj?: string;
        RazaoSocial?: string;
        NomeFantasia?: string;
        CodigoAns?: string;
        CadastroConvenio?: string;
        Logo?: string;
        InscricaoMunicipal?: string;
        InscricaoEstadual?: string;
        Site?: string;
        DataInicio?: string;
        Inativo?: boolean;
        DataFim?: string;
        MotivoCancelamento?: string;
        Observacao?: string;
        VersaoTiss?: string;
        WebService?: string;
        SadtSolContratadoId?: string;
        SadtExecutanteId?: string;
        SadtProfissionalexecutante?: string;
        SadtMembroEquipe?: string;
        IdOrigem?: string;
        IdDestino?: string;
        OrigemIdPrestador?: string;
        DestinoIdPrestador?: string;
        IdLogo?: number;
        GeraTiss?: boolean;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Latitude?: string;
        Longitude?: string;
        EmailNotaFiscal?: string;
        EmailContato?: string;
        EmailFaturamento?: string;
        EmailGlosa?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
    }
    namespace ConveniosRow {
        const idProperty = "ConvenioId";
        const nameProperty = "NomeFantasia";
        const localTextPrefix = "Clinica.Convenios";
        const lookupKey = "Clinica.Convenios";
        namespace Fields {
            const ConvenioId: string;
            const Cnpj: string;
            const RazaoSocial: string;
            const NomeFantasia: string;
            const CodigoAns: string;
            const CadastroConvenio: string;
            const Logo: string;
            const InscricaoMunicipal: string;
            const InscricaoEstadual: string;
            const Site: string;
            const DataInicio: string;
            const Inativo: string;
            const DataFim: string;
            const MotivoCancelamento: string;
            const Observacao: string;
            const VersaoTiss: string;
            const WebService: string;
            const SadtSolContratadoId: string;
            const SadtExecutanteId: string;
            const SadtProfissionalexecutante: string;
            const SadtMembroEquipe: string;
            const IdOrigem: string;
            const IdDestino: string;
            const OrigemIdPrestador: string;
            const DestinoIdPrestador: string;
            const IdLogo: string;
            const GeraTiss: string;
            const DataCadastro: string;
            const DataUltimaAtualizacao: string;
            const Latitude: string;
            const Longitude: string;
            const EmailNotaFiscal: string;
            const EmailContato: string;
            const EmailFaturamento: string;
            const EmailGlosa: string;
            const ContatosList: string;
            const EnderecosList: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ConveniosService {
        const baseUrl = "Clinica/Convenios";
        function Create(request: Serenity.SaveRequest<ConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EnderecosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EnderecosForm {
        TipoEnderecoId: Serenity.LookupEditor;
        Cep: Serenity.MaskedEditor;
        Rua: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Referencia: Serenity.StringEditor;
        Observacao: Serenity.TextAreaEditor;
        Latitude: Serenity.StringEditor;
        Longitude: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface EnderecosRow {
        EnderecoId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        ProfissionalId?: number;
        FornecedorId?: number;
        TipoEnderecoId?: number;
        Rua?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        CodigoIbgeCidade?: string;
        Estado?: string;
        CodigoIbgeEstado?: string;
        Pais?: string;
        Cep?: string;
        Referencia?: string;
        Observacao?: string;
        Latitude?: string;
        Longitude?: string;
        TipoEndereco?: string;
        TipoEnderecoPessoaFisica?: boolean;
        TipoEnderecoOrdem?: number;
    }
    namespace EnderecosRow {
        const idProperty = "EnderecoId";
        const nameProperty = "Rua";
        const localTextPrefix = "Clinica.Enderecos";
        const lookupKey = "Clinica.Enderecos";
        namespace Fields {
            const EnderecoId: string;
            const PacienteId: string;
            const ConvenioId: string;
            const ProfissionalId: string;
            const FornecedorId: string;
            const TipoEnderecoId: string;
            const Rua: string;
            const Numero: string;
            const Complemento: string;
            const Bairro: string;
            const Cidade: string;
            const CodigoIbgeCidade: string;
            const Estado: string;
            const CodigoIbgeEstado: string;
            const Pais: string;
            const Cep: string;
            const Referencia: string;
            const Observacao: string;
            const Latitude: string;
            const Longitude: string;
            const TipoEndereco: string;
            const TipoEnderecoPessoaFisica: string;
            const TipoEnderecoOrdem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EnderecosService {
        const baseUrl = "Clinica/Enderecos";
        function Create(request: Serenity.SaveRequest<EnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EstadosCivisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EstadosCivisForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface EstadosCivisRow {
        EstadoCivilId?: number;
        Descricao?: string;
    }
    namespace EstadosCivisRow {
        const idProperty = "EstadoCivilId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.EstadosCivis";
        const lookupKey = "Clinica.EstadosCivis";
        namespace Fields {
            const EstadoCivilId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EstadosCivisService {
        const baseUrl = "Clinica/EstadosCivis";
        function Create(request: Serenity.SaveRequest<EstadosCivisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EstadosCivisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadosCivisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadosCivisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ExceptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExceptionsForm {
        Guid: Serenity.StringEditor;
        ApplicationName: Serenity.StringEditor;
        MachineName: Serenity.StringEditor;
        CreationDate: Serenity.DateTimeEditor;
        Type: Serenity.StringEditor;
        IsProtected: Serenity.BooleanEditor;
        Host: Serenity.StringEditor;
        Url: Serenity.TextAreaEditor;
        HttpMethod: Serenity.StringEditor;
        IpAddress: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        Message: Serenity.TextAreaEditor;
        Detail: Serenity.StringEditor;
        StatusCode: Serenity.IntegerEditor;
        Sql: Serenity.StringEditor;
        DeletionDate: Serenity.DateTimeEditor;
        FullJson: Serenity.StringEditor;
        ErrorHash: Serenity.IntegerEditor;
        DuplicateCount: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ExceptionsRow {
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
    namespace ExceptionsRow {
        const idProperty = "Id";
        const nameProperty = "ApplicationName";
        const localTextPrefix = "Clinica.Exceptions";
        const lookupKey = "Clinica.Exceptions";
        namespace Fields {
            const Id: string;
            const Guid: string;
            const ApplicationName: string;
            const MachineName: string;
            const CreationDate: string;
            const Type: string;
            const IsProtected: string;
            const Host: string;
            const Url: string;
            const HttpMethod: string;
            const IpAddress: string;
            const Source: string;
            const Message: string;
            const Detail: string;
            const StatusCode: string;
            const Sql: string;
            const DeletionDate: string;
            const FullJson: string;
            const ErrorHash: string;
            const DuplicateCount: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ExceptionsService {
        const baseUrl = "Clinica/Exceptions";
        function Create(request: Serenity.SaveRequest<ExceptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExceptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExceptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExceptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class FornecedoresForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FornecedoresForm {
        Status: Serenity.BooleanEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        RazaoSocial: Serenity.TextAreaEditor;
        NomeFantasia: Serenity.TextAreaEditor;
        NomeAbreviado: Serenity.StringEditor;
        Cpf: Serenity.MaskedEditor;
        Rg: Serenity.StringEditor;
        Cnpj: Serenity.MaskedEditor;
        InscricaoEstadual: Serenity.TextAreaEditor;
        InscricaoMunicipal: Serenity.TextAreaEditor;
        Site: Serenity.TextAreaEditor;
        Telefone: Serenity.MaskedEditor;
        Fax: Serenity.TextAreaEditor;
        TelefoneAlternativo: Serenity.MaskedEditor;
        EmailCorporativo: Serenity.EmailEditor;
        AceitaReceberEmail: Serenity.BooleanEditor;
        MotivoStatus: Serenity.TextAreaEditor;
        QuantidadeEmpregados: Serenity.IntegerEditor;
        AtividadeEmpresaId: Serenity.IntegerEditor;
        ReceitaAnual: Serenity.DecimalEditor;
        MarcasTrabalhadas: Serenity.TextAreaEditor;
        ObservacoesGerais: Serenity.TextAreaEditor;
        DataCriacao: Serenity.DateTimeEditor;
        DataAlteracao: Serenity.DateTimeEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        ContatosList: Serenity.StringEditor;
        EnderecosList: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface FornecedoresRow {
        FornecedorId?: number;
        Status?: boolean;
        PessoaJuridica?: boolean;
        RazaoSocial?: string;
        NomeFantasia?: string;
        NomeAbreviado?: string;
        Cpf?: string;
        Rg?: string;
        Cnpj?: string;
        InscricaoEstadual?: string;
        InscricaoMunicipal?: string;
        Site?: string;
        Telefone?: string;
        Fax?: string;
        TelefoneAlternativo?: string;
        EmailCorporativo?: string;
        AceitaReceberEmail?: boolean;
        MotivoStatus?: string;
        QuantidadeEmpregados?: number;
        AtividadeEmpresaId?: number;
        ReceitaAnual?: number;
        MarcasTrabalhadas?: string;
        ObservacoesGerais?: string;
        DataCriacao?: string;
        DataAlteracao?: string;
        Inativo?: boolean;
        DataInativo?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
    }
    namespace FornecedoresRow {
        const idProperty = "FornecedorId";
        const nameProperty = "RazaoSocial";
        const localTextPrefix = "Clinica.Fornecedores";
        const lookupKey = "Clinica.Fornecedores";
        namespace Fields {
            const FornecedorId: string;
            const Status: string;
            const PessoaJuridica: string;
            const RazaoSocial: string;
            const NomeFantasia: string;
            const NomeAbreviado: string;
            const Cpf: string;
            const Rg: string;
            const Cnpj: string;
            const InscricaoEstadual: string;
            const InscricaoMunicipal: string;
            const Site: string;
            const Telefone: string;
            const Fax: string;
            const TelefoneAlternativo: string;
            const EmailCorporativo: string;
            const AceitaReceberEmail: string;
            const MotivoStatus: string;
            const QuantidadeEmpregados: string;
            const AtividadeEmpresaId: string;
            const ReceitaAnual: string;
            const MarcasTrabalhadas: string;
            const ObservacoesGerais: string;
            const DataCriacao: string;
            const DataAlteracao: string;
            const Inativo: string;
            const DataInativo: string;
            const ContatosList: string;
            const EnderecosList: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace FornecedoresService {
        const baseUrl = "Clinica/Fornecedores";
        function Create(request: Serenity.SaveRequest<FornecedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FornecedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FornecedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FornecedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class PacientesConveniosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacientesConveniosForm {
        PacienteId: Serenity.LookupEditor;
        ConvenioId: Serenity.LookupEditor;
        SubConvenioId: Serenity.IntegerEditor;
        ConvenioPrincipal: Serenity.BooleanEditor;
        DescricaoPlano: Serenity.StringEditor;
        Carteirinha: Serenity.StringEditor;
        DataValidadeCarteirinha: Serenity.DateEditor;
        NomePacienteConvenio: Serenity.StringEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        ImagemCarteirinha: Serenity.MultipleImageUploadEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface PacientesConveniosRow {
        PacienteConvenioId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        SubConvenioId?: number;
        ConvenioPrincipal?: boolean;
        DescricaoPlano?: string;
        Carteirinha?: string;
        DataValidadeCarteirinha?: string;
        NomePacienteConvenio?: string;
        Inativo?: boolean;
        DataInativo?: string;
        ImagemCarteirinha?: string;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Observacao?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
    }
    namespace PacientesConveniosRow {
        const idProperty = "PacienteConvenioId";
        const nameProperty = "DescricaoPlano";
        const localTextPrefix = "Clinica.PacientesConvenios";
        const lookupKey = "Clinica.PacientesConvenios";
        namespace Fields {
            const PacienteConvenioId: string;
            const PacienteId: string;
            const ConvenioId: string;
            const SubConvenioId: string;
            const ConvenioPrincipal: string;
            const DescricaoPlano: string;
            const Carteirinha: string;
            const DataValidadeCarteirinha: string;
            const NomePacienteConvenio: string;
            const Inativo: string;
            const DataInativo: string;
            const ImagemCarteirinha: string;
            const DataCadastro: string;
            const DataUltimaAtualizacao: string;
            const Observacao: string;
            const ConvenioRazaoSocial: string;
            const ConvenioNomeFantasia: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace PacientesConveniosService {
        const baseUrl = "Clinica/PacientesConvenios";
        function Create(request: Serenity.SaveRequest<PacientesConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacientesConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacientesConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacientesConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class PacientesEmissaoNfForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacientesEmissaoNfForm {
        PacienteId: Serenity.LookupEditor;
        NomeResponsavel: Serenity.StringEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        CpfResponsavel: Serenity.MaskedEditor;
        CnpjResponsavel: Serenity.MaskedEditor;
        EmailNf: Serenity.EmailEditor;
        Padrao: Serenity.BooleanEditor;
        TipoEnderecoId: Serenity.LookupEditor;
        Cep: Serenity.MaskedEditor;
        Rua: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Referencia: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface PacientesEmissaoNfRow {
        PacienteEmissaoNf?: number;
        PacienteId?: number;
        NomeResponsavel?: string;
        PessoaJuridica?: boolean;
        CpfResponsavel?: string;
        CnpjResponsavel?: string;
        EmailNf?: string;
        Padrao?: boolean;
        TipoEnderecoId?: number;
        Rua?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        CodigoIbgeCidade?: string;
        Estado?: string;
        CodigoIbgeEstado?: string;
        Pais?: string;
        Cep?: string;
        Referencia?: string;
        PacienteMatricula?: string;
        Paciente?: string;
        TipoEndereco?: string;
        TipoEnderecoPessoaFisica?: boolean;
        TipoEnderecoOrdem?: number;
    }
    namespace PacientesEmissaoNfRow {
        const idProperty = "PacienteEmissaoNf";
        const nameProperty = "NomeResponsavel";
        const localTextPrefix = "Clinica.PacientesEmissaoNf";
        const lookupKey = "Clinica.PacientesEmissaoNf";
        namespace Fields {
            const PacienteEmissaoNf: string;
            const PacienteId: string;
            const NomeResponsavel: string;
            const PessoaJuridica: string;
            const CpfResponsavel: string;
            const CnpjResponsavel: string;
            const EmailNf: string;
            const Padrao: string;
            const TipoEnderecoId: string;
            const Rua: string;
            const Numero: string;
            const Complemento: string;
            const Bairro: string;
            const Cidade: string;
            const CodigoIbgeCidade: string;
            const Estado: string;
            const CodigoIbgeEstado: string;
            const Pais: string;
            const Cep: string;
            const Referencia: string;
            const PacienteMatricula: string;
            const Paciente: string;
            const TipoEndereco: string;
            const TipoEnderecoPessoaFisica: string;
            const TipoEnderecoOrdem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace PacientesEmissaoNfService {
        const baseUrl = "Clinica/PacientesEmissaoNf";
        function Create(request: Serenity.SaveRequest<PacientesEmissaoNfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacientesEmissaoNfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacientesEmissaoNfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacientesEmissaoNfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    class PacientesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacientesForm {
        PacienteIdControlMedic: Serenity.IntegerEditor;
        PacienteIdGestorMedico: Serenity.IntegerEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Matricula: Serenity.StringEditor;
        StatusId: Serenity.LookupEditor;
        Paciente: Serenity.StringEditor;
        SexoId: Serenity.LookupEditor;
        DataNascimento: Serenity.DateEditor;
        Especial: Serenity.BooleanEditor;
        Pai: Serenity.StringEditor;
        Mae: Serenity.StringEditor;
        Responsavel: Serenity.StringEditor;
        CNS: Serenity.StringEditor;
        CarteiraIdentidade: Serenity.StringEditor;
        CPF: Serenity.MaskedEditor;
        Observacao: Serenity.TextAreaEditor;
        DisturbiosAssociados: Serenity.TextAreaEditor;
        Foto: Serenity.ImageUploadEditor;
        DataFoto: Serenity.DateEditor;
        ContatosList: Serenity.StringEditor;
        EnderecosList: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface PacientesRow {
        PacienteId?: number;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Matricula?: string;
        StatusId?: number;
        Paciente?: string;
        Especial?: boolean;
        Pai?: string;
        Mae?: string;
        SexoId?: number;
        DataNascimento?: string;
        CNS?: string;
        CarteiraIdentidade?: string;
        CPF?: string;
        Observacao?: string;
        DisturbiosAssociados?: string;
        Responsavel?: string;
        Foto?: string;
        DataFoto?: string;
        PacienteIdControlMedic?: number;
        PacienteIdGestorMedico?: number;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
        Sexo?: string;
        SexoAbreviatura?: string;
        Status?: string;
    }
    namespace PacientesRow {
        const idProperty = "PacienteId";
        const nameProperty = "Paciente";
        const localTextPrefix = "Clinica.Pacientes";
        const lookupKey = "Clinica.Pacientes";
        namespace Fields {
            const PacienteId: string;
            const DataCadastro: string;
            const DataUltimaAtualizacao: string;
            const Matricula: string;
            const StatusId: string;
            const Paciente: string;
            const Especial: string;
            const Pai: string;
            const Mae: string;
            const SexoId: string;
            const DataNascimento: string;
            const CNS: string;
            const CarteiraIdentidade: string;
            const CPF: string;
            const Observacao: string;
            const DisturbiosAssociados: string;
            const Responsavel: string;
            const Foto: string;
            const DataFoto: string;
            const PacienteIdControlMedic: string;
            const PacienteIdGestorMedico: string;
            const ContatosList: string;
            const EnderecosList: string;
            const Sexo: string;
            const SexoAbreviatura: string;
            const Status: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace PacientesService {
        const baseUrl = "Clinica/Pacientes";
        function Create(request: Serenity.SaveRequest<PacientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class SexoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SexoForm {
        Sexo: Serenity.StringEditor;
        Abreviatura: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface SexoRow {
        SexoId?: number;
        Sexo?: string;
        Abreviatura?: string;
    }
    namespace SexoRow {
        const idProperty = "SexoId";
        const nameProperty = "Sexo";
        const localTextPrefix = "Clinica.Sexo";
        const lookupKey = "Clinica.Sexo";
        namespace Fields {
            const SexoId: string;
            const Sexo: string;
            const Abreviatura: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace SexoService {
        const baseUrl = "Clinica/Sexo";
        function Create(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class StatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusForm {
        Status: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface StatusRow {
        StatusId?: number;
        Status?: string;
    }
    namespace StatusRow {
        const idProperty = "StatusId";
        const nameProperty = "Status";
        const localTextPrefix = "Clinica.Status";
        const lookupKey = "Clinica.Status";
        namespace Fields {
            const StatusId: string;
            const Status: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace StatusService {
        const baseUrl = "Clinica/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposContatosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposContatosForm {
        TipoContato: Serenity.StringEditor;
        PessoaFisica: Serenity.BooleanEditor;
        Ordem: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposContatosRow {
        TipoContatoId?: number;
        TipoContato?: string;
        PessoaFisica?: boolean;
        Ordem?: number;
    }
    namespace TiposContatosRow {
        const idProperty = "TipoContatoId";
        const nameProperty = "TipoContato";
        const localTextPrefix = "Clinica.TiposContatos";
        const lookupKey = "Clinica.TiposContatos";
        namespace Fields {
            const TipoContatoId: string;
            const TipoContato: string;
            const PessoaFisica: string;
            const Ordem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposContatosService {
        const baseUrl = "Clinica/TiposContatos";
        function Create(request: Serenity.SaveRequest<TiposContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposEnderecosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposEnderecosForm {
        TipoEndereco: Serenity.StringEditor;
        PessoaFisica: Serenity.BooleanEditor;
        Ordem: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposEnderecosRow {
        TipoEnderecoId?: number;
        TipoEndereco?: string;
        PessoaFisica?: boolean;
        Ordem?: number;
    }
    namespace TiposEnderecosRow {
        const idProperty = "TipoEnderecoId";
        const nameProperty = "TipoEndereco";
        const localTextPrefix = "Clinica.TiposEnderecos";
        const lookupKey = "Clinica.TiposEnderecos";
        namespace Fields {
            const TipoEnderecoId: string;
            const TipoEndereco: string;
            const PessoaFisica: string;
            const Ordem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposEnderecosService {
        const baseUrl = "Clinica/TiposEnderecos";
        function Create(request: Serenity.SaveRequest<TiposEnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposEnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposEnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposEnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposMeiosContatosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposMeiosContatosForm {
        TipoMeioContato: Serenity.StringEditor;
        Mascara: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposMeiosContatosRow {
        TipoMeioContatoId?: number;
        TipoMeioContato?: string;
        Mascara?: string;
    }
    namespace TiposMeiosContatosRow {
        const idProperty = "TipoMeioContatoId";
        const nameProperty = "TipoMeioContato";
        const localTextPrefix = "Clinica.TiposMeiosContatos";
        const lookupKey = "Clinica.TiposMeiosContatos";
        namespace Fields {
            const TipoMeioContatoId: string;
            const TipoMeioContato: string;
            const Mascara: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposMeiosContatosService {
        const baseUrl = "Clinica/TiposMeiosContatos";
        function Create(request: Serenity.SaveRequest<TiposMeiosContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposMeiosContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposMeiosContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposMeiosContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace Exemplos.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Exemplos {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Exemplos {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Exemplos {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Exemplos {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Exemplos.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Exemplos.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace Exemplos.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Exemplos.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Exemplos.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Exemplos.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Exemplos {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Exemplos.Administration {
}
declare namespace Exemplos.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
}
declare namespace Exemplos.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Exemplos.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Exemplos.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Exemplos.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Exemplos.Administration {
}
declare namespace Exemplos.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Exemplos.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Exemplos.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace Exemplos.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class AgendasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AgendasForm {
        AgendaIdPrincipal: Serenity.LookupEditor;
        EmpresaId: Serenity.IntegerEditor;
        DataHoraCadastro: Serenity.DateTimeEditor;
        DataHoraAgendamento: Serenity.DateTimeEditor;
        EspecialidadeProfisisonalId: Serenity.IntegerEditor;
        ProfissionalId: Serenity.IntegerEditor;
        EspecialidadeId: Serenity.IntegerEditor;
        MedicoIdSolicitante: Serenity.IntegerEditor;
        EscalaId: Serenity.IntegerEditor;
        PacienteId: Serenity.IntegerEditor;
        ConvenioId: Serenity.IntegerEditor;
        ServicoId: Serenity.IntegerEditor;
        DataHoraChegada: Serenity.DateTimeEditor;
        DataHoraAtendimentoInicio: Serenity.DateTimeEditor;
        DataHoraAtendimentoFim: Serenity.DateTimeEditor;
        StatusAgendaId: Serenity.IntegerEditor;
        Faturado: Serenity.BooleanEditor;
        Observacao: Serenity.TextAreaEditor;
        ValorTotal: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Descontos: Serenity.DecimalEditor;
        PgtoDinheiro: Serenity.DecimalEditor;
        PgtoCheque: Serenity.DecimalEditor;
        PgtoCartao: Serenity.DecimalEditor;
        PgtoFaturar: Serenity.DecimalEditor;
        NumeroNfs: Serenity.IntegerEditor;
        GuiaId: Serenity.LookupEditor;
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class AgendasItensForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AgendasItensForm {
        AgendaId: Serenity.LookupEditor;
        ConvenioId: Serenity.IntegerEditor;
        ProcedimentoId: Serenity.IntegerEditor;
        ValorId: Serenity.IntegerEditor;
        Desconto: Serenity.DecimalEditor;
        ValorPraticado: Serenity.DecimalEditor;
        Quantidade: Serenity.IntegerEditor;
        GuiaId: Serenity.IntegerEditor;
        Faturado: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface AgendasItensRow {
        AgendaItemId?: number;
        AgendaId?: number;
        ConvenioId?: number;
        ProcedimentoId?: number;
        ValorId?: number;
        Desconto?: number;
        ValorPraticado?: number;
        Quantidade?: number;
        GuiaId?: number;
        Faturado?: boolean;
        AgendaAgendaIdPrincipal?: number;
        AgendaEmpresaId?: number;
        AgendaDataHoraCadastro?: string;
        AgendaDataHoraAgendamento?: string;
        AgendaEspecialidadeProfisisonalId?: number;
        AgendaProfissionalId?: number;
        AgendaEspecialidadeId?: number;
        AgendaMedicoIdSolicitante?: number;
        AgendaEscalaId?: number;
        AgendaPacienteId?: number;
        AgendaConvenioId?: number;
        AgendaServicoId?: number;
        AgendaDataHoraChegada?: string;
        AgendaDataHoraAtendimentoInicio?: string;
        AgendaDataHoraAtendimentoFim?: string;
        AgendaStatusAgendaId?: number;
        AgendaFaturado?: boolean;
        AgendaObservacao?: string;
        AgendaValorTotal?: number;
        AgendaSubTotal?: number;
        AgendaDescontos?: number;
        AgendaPgtoDinheiro?: number;
        AgendaPgtoCheque?: number;
        AgendaPgtoCartao?: number;
        AgendaPgtoFaturar?: number;
        AgendaNumeroNfs?: number;
        AgendaGuiaId?: number;
    }
    namespace AgendasItensRow {
        const idProperty = "AgendaItemId";
        const localTextPrefix = "Clinica.AgendasItens";
        const lookupKey = "Clinica.AgendasItens";
        function getLookup(): Q.Lookup<AgendasItensRow>;
        namespace Fields {
            const AgendaItemId: string;
            const AgendaId: string;
            const ConvenioId: string;
            const ProcedimentoId: string;
            const ValorId: string;
            const Desconto: string;
            const ValorPraticado: string;
            const Quantidade: string;
            const GuiaId: string;
            const Faturado: string;
            const AgendaAgendaIdPrincipal: string;
            const AgendaEmpresaId: string;
            const AgendaDataHoraCadastro: string;
            const AgendaDataHoraAgendamento: string;
            const AgendaEspecialidadeProfisisonalId: string;
            const AgendaProfissionalId: string;
            const AgendaEspecialidadeId: string;
            const AgendaMedicoIdSolicitante: string;
            const AgendaEscalaId: string;
            const AgendaPacienteId: string;
            const AgendaConvenioId: string;
            const AgendaServicoId: string;
            const AgendaDataHoraChegada: string;
            const AgendaDataHoraAtendimentoInicio: string;
            const AgendaDataHoraAtendimentoFim: string;
            const AgendaStatusAgendaId: string;
            const AgendaFaturado: string;
            const AgendaObservacao: string;
            const AgendaValorTotal: string;
            const AgendaSubTotal: string;
            const AgendaDescontos: string;
            const AgendaPgtoDinheiro: string;
            const AgendaPgtoCheque: string;
            const AgendaPgtoCartao: string;
            const AgendaPgtoFaturar: string;
            const AgendaNumeroNfs: string;
            const AgendaGuiaId: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace AgendasItensService {
        const baseUrl = "Clinica/AgendasItens";
        function Create(request: Serenity.SaveRequest<AgendasItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgendasItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgendasItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgendasItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    interface AgendasRow {
        AgendaId?: number;
        AgendaIdPrincipal?: number;
        EmpresaId?: number;
        DataHoraCadastro?: string;
        DataHoraAgendamento?: string;
        EspecialidadeProfisisonalId?: number;
        ProfissionalId?: number;
        EspecialidadeId?: number;
        MedicoIdSolicitante?: number;
        EscalaId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        ServicoId?: number;
        DataHoraChegada?: string;
        DataHoraAtendimentoInicio?: string;
        DataHoraAtendimentoFim?: string;
        StatusAgendaId?: number;
        Faturado?: boolean;
        Observacao?: string;
        ValorTotal?: number;
        SubTotal?: number;
        Descontos?: number;
        PgtoDinheiro?: number;
        PgtoCheque?: number;
        PgtoCartao?: number;
        PgtoFaturar?: number;
        NumeroNfs?: number;
        GuiaId?: number;
        AgendaIdPrincipalEmpresaId?: number;
        AgendaIdPrincipalDataHoraCadastro?: string;
        AgendaIdPrincipalDataHoraAgendamento?: string;
        AgendaIdPrincipalEspecialidadeProfisisonalId?: number;
        AgendaIdPrincipalProfissionalId?: number;
        AgendaIdPrincipalEspecialidadeId?: number;
        AgendaIdPrincipalMedicoIdSolicitante?: number;
        AgendaIdPrincipalEscalaId?: number;
        AgendaIdPrincipalPacienteId?: number;
        AgendaIdPrincipalConvenioId?: number;
        AgendaIdPrincipalServicoId?: number;
        AgendaIdPrincipalDataHoraChegada?: string;
        AgendaIdPrincipalDataHoraAtendimentoInicio?: string;
        AgendaIdPrincipalDataHoraAtendimentoFim?: string;
        AgendaIdPrincipalStatusAgendaId?: number;
        AgendaIdPrincipalFaturado?: boolean;
        AgendaIdPrincipalObservacao?: string;
        AgendaIdPrincipalValorTotal?: number;
        AgendaIdPrincipalSubTotal?: number;
        AgendaIdPrincipalDescontos?: number;
        AgendaIdPrincipalPgtoDinheiro?: number;
        AgendaIdPrincipalPgtoCheque?: number;
        AgendaIdPrincipalPgtoCartao?: number;
        AgendaIdPrincipalPgtoFaturar?: number;
        AgendaIdPrincipalNumeroNfs?: number;
        AgendaIdPrincipalGuiaId?: number;
        GuiaTipoGuiaId?: number;
        GuiaTipoConsultaId?: number;
        Guia?: string;
        GuiaGuiaOperador?: string;
        GuiaCarteirinha?: string;
        GuiaNomePaciente?: string;
        GuiaAutorizacaoId?: number;
        GuiaNumeroAutorizacao?: string;
        GuiaIdAuditada?: boolean;
        GuiaDataAuditoria?: string;
        GuiaIdAuditoriaAprovada?: boolean;
        GuiaConclusaoAuditoria?: string;
        GuiaProfissionalIdSolicitante?: number;
        GuiaProfissionalIdExecutante?: number;
    }
    namespace AgendasRow {
        const idProperty = "AgendaId";
        const nameProperty = "Observacao";
        const localTextPrefix = "Clinica.Agendas";
        const lookupKey = "Clinica.Agendas";
        function getLookup(): Q.Lookup<AgendasRow>;
        namespace Fields {
            const AgendaId: string;
            const AgendaIdPrincipal: string;
            const EmpresaId: string;
            const DataHoraCadastro: string;
            const DataHoraAgendamento: string;
            const EspecialidadeProfisisonalId: string;
            const ProfissionalId: string;
            const EspecialidadeId: string;
            const MedicoIdSolicitante: string;
            const EscalaId: string;
            const PacienteId: string;
            const ConvenioId: string;
            const ServicoId: string;
            const DataHoraChegada: string;
            const DataHoraAtendimentoInicio: string;
            const DataHoraAtendimentoFim: string;
            const StatusAgendaId: string;
            const Faturado: string;
            const Observacao: string;
            const ValorTotal: string;
            const SubTotal: string;
            const Descontos: string;
            const PgtoDinheiro: string;
            const PgtoCheque: string;
            const PgtoCartao: string;
            const PgtoFaturar: string;
            const NumeroNfs: string;
            const GuiaId: string;
            const AgendaIdPrincipalEmpresaId: string;
            const AgendaIdPrincipalDataHoraCadastro: string;
            const AgendaIdPrincipalDataHoraAgendamento: string;
            const AgendaIdPrincipalEspecialidadeProfisisonalId: string;
            const AgendaIdPrincipalProfissionalId: string;
            const AgendaIdPrincipalEspecialidadeId: string;
            const AgendaIdPrincipalMedicoIdSolicitante: string;
            const AgendaIdPrincipalEscalaId: string;
            const AgendaIdPrincipalPacienteId: string;
            const AgendaIdPrincipalConvenioId: string;
            const AgendaIdPrincipalServicoId: string;
            const AgendaIdPrincipalDataHoraChegada: string;
            const AgendaIdPrincipalDataHoraAtendimentoInicio: string;
            const AgendaIdPrincipalDataHoraAtendimentoFim: string;
            const AgendaIdPrincipalStatusAgendaId: string;
            const AgendaIdPrincipalFaturado: string;
            const AgendaIdPrincipalObservacao: string;
            const AgendaIdPrincipalValorTotal: string;
            const AgendaIdPrincipalSubTotal: string;
            const AgendaIdPrincipalDescontos: string;
            const AgendaIdPrincipalPgtoDinheiro: string;
            const AgendaIdPrincipalPgtoCheque: string;
            const AgendaIdPrincipalPgtoCartao: string;
            const AgendaIdPrincipalPgtoFaturar: string;
            const AgendaIdPrincipalNumeroNfs: string;
            const AgendaIdPrincipalGuiaId: string;
            const GuiaTipoGuiaId: string;
            const GuiaTipoConsultaId: string;
            const Guia: string;
            const GuiaGuiaOperador: string;
            const GuiaCarteirinha: string;
            const GuiaNomePaciente: string;
            const GuiaAutorizacaoId: string;
            const GuiaNumeroAutorizacao: string;
            const GuiaIdAuditada: string;
            const GuiaDataAuditoria: string;
            const GuiaIdAuditoriaAprovada: string;
            const GuiaConclusaoAuditoria: string;
            const GuiaProfissionalIdSolicitante: string;
            const GuiaProfissionalIdExecutante: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace AgendasService {
        const baseUrl = "Clinica/Agendas";
        function Create(request: Serenity.SaveRequest<AgendasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AgendasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AgendasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AgendasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class AutorizacoesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AutorizacoesForm {
        NumeroAutorizacao: Serenity.StringEditor;
        ConvenioId: Serenity.LookupEditor;
        PacienteId: Serenity.LookupEditor;
        Arquivos: Serenity.TextAreaEditor;
        DataSolicitacao: Serenity.DateTimeEditor;
        DataAutorizacao: Serenity.DateTimeEditor;
        DataValidade: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class AutorizacoesProcedimentosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AutorizacoesProcedimentosForm {
        AutorizacaoId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.IntegerEditor;
        Procedimento: Serenity.StringEditor;
        QuantidadeLiberada: Serenity.IntegerEditor;
        DataInicial: Serenity.DateTimeEditor;
        DataFinal: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        IdAuditada: Serenity.BooleanEditor;
        DataAuditoria: Serenity.DateTimeEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
        ConclusaoAuditoria: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface AutorizacoesProcedimentosRow {
        AutorizacaoProcedimentoId?: number;
        AutorizacaoId?: number;
        ProcedimentoId?: number;
        Procedimento?: string;
        QuantidadeLiberada?: number;
        DataInicial?: string;
        DataFinal?: string;
        Observacao?: string;
        IdAuditada?: boolean;
        DataAuditoria?: string;
        IdAuditoriaAprovada?: boolean;
        ConclusaoAuditoria?: string;
        AutorizacaoNumeroAutorizacao?: string;
        AutorizacaoConvenioId?: number;
        AutorizacaoPacienteId?: number;
        AutorizacaoArquivos?: string;
        AutorizacaoDataSolicitacao?: string;
        AutorizacaoDataAutorizacao?: string;
        AutorizacaoDataValidade?: string;
        AutorizacaoObservacao?: string;
        AutorizacaoIdAuditoriaAprovada?: boolean;
    }
    namespace AutorizacoesProcedimentosRow {
        const idProperty = "AutorizacaoProcedimentoId";
        const nameProperty = "Procedimento";
        const localTextPrefix = "Clinica.AutorizacoesProcedimentos";
        const lookupKey = "Clinica.AutorizacoesProcedimentos";
        function getLookup(): Q.Lookup<AutorizacoesProcedimentosRow>;
        namespace Fields {
            const AutorizacaoProcedimentoId: string;
            const AutorizacaoId: string;
            const ProcedimentoId: string;
            const Procedimento: string;
            const QuantidadeLiberada: string;
            const DataInicial: string;
            const DataFinal: string;
            const Observacao: string;
            const IdAuditada: string;
            const DataAuditoria: string;
            const IdAuditoriaAprovada: string;
            const ConclusaoAuditoria: string;
            const AutorizacaoNumeroAutorizacao: string;
            const AutorizacaoConvenioId: string;
            const AutorizacaoPacienteId: string;
            const AutorizacaoArquivos: string;
            const AutorizacaoDataSolicitacao: string;
            const AutorizacaoDataAutorizacao: string;
            const AutorizacaoDataValidade: string;
            const AutorizacaoObservacao: string;
            const AutorizacaoIdAuditoriaAprovada: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace AutorizacoesProcedimentosService {
        const baseUrl = "Clinica/AutorizacoesProcedimentos";
        function Create(request: Serenity.SaveRequest<AutorizacoesProcedimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AutorizacoesProcedimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AutorizacoesProcedimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AutorizacoesProcedimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    interface AutorizacoesRow {
        AutorizacaoId?: number;
        NumeroAutorizacao?: string;
        ConvenioId?: number;
        PacienteId?: number;
        Arquivos?: string;
        DataSolicitacao?: string;
        DataAutorizacao?: string;
        DataValidade?: string;
        Observacao?: string;
        IdAuditoriaAprovada?: boolean;
        ConvenioCnpj?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
        ConvenioCodigoAns?: string;
        ConvenioCadastroConvenio?: string;
        ConvenioLogo?: string;
        ConvenioInscricaoMunicipal?: string;
        ConvenioInscricaoEstadual?: string;
        ConvenioSite?: string;
        ConvenioDataInicio?: string;
        ConvenioInativo?: boolean;
        ConvenioDataFim?: string;
        ConvenioMotivoCancelamento?: string;
        ConvenioObservacao?: string;
        ConvenioVersaoTiss?: string;
        ConvenioWebService?: string;
        ConvenioSadtSolContratadoId?: string;
        ConvenioSadtExecutanteId?: string;
        ConvenioSadtProfissionalexecutante?: string;
        ConvenioSadtMembroEquipe?: string;
        ConvenioIdOrigem?: string;
        ConvenioIdDestino?: string;
        ConvenioOrigemIdPrestador?: string;
        ConvenioDestinoIdPrestador?: string;
        ConvenioIdLogo?: number;
        ConvenioGeraTiss?: boolean;
        ConvenioDataCadastro?: string;
        ConvenioDataUltimaAtualizacao?: string;
        ConvenioLatitude?: string;
        ConvenioLongitude?: string;
        ConvenioEmailNotaFiscal?: string;
        ConvenioEmailContato?: string;
        ConvenioEmailFaturamento?: string;
        ConvenioEmailGlosa?: string;
        PacienteDataCadastro?: string;
        PacienteDataUltimaAtualizacao?: string;
        PacienteMatricula?: string;
        PacienteStatusId?: number;
        Paciente?: string;
        PacienteEspecial?: boolean;
        PacientePai?: string;
        PacienteMae?: string;
        PacienteSexoId?: number;
        PacienteDataNascimento?: string;
        PacienteCns?: string;
        PacienteCarteiraIdentidade?: string;
        PacienteCpf?: string;
        PacienteObservacao?: string;
        PacienteDisturbiosAssociados?: string;
        PacienteResponsavel?: string;
        PacienteNotaFiscalTerceiro?: boolean;
        PacienteNotaFiscalNome?: string;
        PacienteNotaFiscalCpf?: string;
        PacienteNotaFiscalCnpj?: string;
        PacienteNotaFiscalEndereco?: string;
        PacienteNotaFiscalNumero?: string;
        PacienteNotaFiscalBairro?: string;
        PacienteNotaFiscalCidade?: string;
        PacienteNotaFiscalEstadoId?: string;
        PacienteNotaFiscalEmail?: string;
        PacienteFoto?: string;
        PacienteDataFoto?: string;
        PacientePacienteIdControlMedic?: number;
        PacientePacienteIdGestorMedico?: number;
    }
    namespace AutorizacoesRow {
        const idProperty = "AutorizacaoId";
        const nameProperty = "NumeroAutorizacao";
        const localTextPrefix = "Clinica.Autorizacoes";
        const lookupKey = "Clinica.Autorizacoes";
        function getLookup(): Q.Lookup<AutorizacoesRow>;
        namespace Fields {
            const AutorizacaoId: string;
            const NumeroAutorizacao: string;
            const ConvenioId: string;
            const PacienteId: string;
            const Arquivos: string;
            const DataSolicitacao: string;
            const DataAutorizacao: string;
            const DataValidade: string;
            const Observacao: string;
            const IdAuditoriaAprovada: string;
            const ConvenioCnpj: string;
            const ConvenioRazaoSocial: string;
            const ConvenioNomeFantasia: string;
            const ConvenioCodigoAns: string;
            const ConvenioCadastroConvenio: string;
            const ConvenioLogo: string;
            const ConvenioInscricaoMunicipal: string;
            const ConvenioInscricaoEstadual: string;
            const ConvenioSite: string;
            const ConvenioDataInicio: string;
            const ConvenioInativo: string;
            const ConvenioDataFim: string;
            const ConvenioMotivoCancelamento: string;
            const ConvenioObservacao: string;
            const ConvenioVersaoTiss: string;
            const ConvenioWebService: string;
            const ConvenioSadtSolContratadoId: string;
            const ConvenioSadtExecutanteId: string;
            const ConvenioSadtProfissionalexecutante: string;
            const ConvenioSadtMembroEquipe: string;
            const ConvenioIdOrigem: string;
            const ConvenioIdDestino: string;
            const ConvenioOrigemIdPrestador: string;
            const ConvenioDestinoIdPrestador: string;
            const ConvenioIdLogo: string;
            const ConvenioGeraTiss: string;
            const ConvenioDataCadastro: string;
            const ConvenioDataUltimaAtualizacao: string;
            const ConvenioLatitude: string;
            const ConvenioLongitude: string;
            const ConvenioEmailNotaFiscal: string;
            const ConvenioEmailContato: string;
            const ConvenioEmailFaturamento: string;
            const ConvenioEmailGlosa: string;
            const PacienteDataCadastro: string;
            const PacienteDataUltimaAtualizacao: string;
            const PacienteMatricula: string;
            const PacienteStatusId: string;
            const Paciente: string;
            const PacienteEspecial: string;
            const PacientePai: string;
            const PacienteMae: string;
            const PacienteSexoId: string;
            const PacienteDataNascimento: string;
            const PacienteCns: string;
            const PacienteCarteiraIdentidade: string;
            const PacienteCpf: string;
            const PacienteObservacao: string;
            const PacienteDisturbiosAssociados: string;
            const PacienteResponsavel: string;
            const PacienteNotaFiscalTerceiro: string;
            const PacienteNotaFiscalNome: string;
            const PacienteNotaFiscalCpf: string;
            const PacienteNotaFiscalCnpj: string;
            const PacienteNotaFiscalEndereco: string;
            const PacienteNotaFiscalNumero: string;
            const PacienteNotaFiscalBairro: string;
            const PacienteNotaFiscalCidade: string;
            const PacienteNotaFiscalEstadoId: string;
            const PacienteNotaFiscalEmail: string;
            const PacienteFoto: string;
            const PacienteDataFoto: string;
            const PacientePacienteIdControlMedic: string;
            const PacientePacienteIdGestorMedico: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace AutorizacoesService {
        const baseUrl = "Clinica/Autorizacoes";
        function Create(request: Serenity.SaveRequest<AutorizacoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AutorizacoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AutorizacoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AutorizacoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class CbosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CbosForm {
        Codigo: Serenity.StringEditor;
        Cbos: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface CbosRow {
        Cbosid?: number;
        Codigo?: string;
        Cbos?: string;
    }
    namespace CbosRow {
        const idProperty = "Cbosid";
        const nameProperty = "Codigo";
        const localTextPrefix = "Clinica.Cbos";
        const lookupKey = "Clinica.Cbos";
        function getLookup(): Q.Lookup<CbosRow>;
        namespace Fields {
            const Cbosid: string;
            const Codigo: string;
            const Cbos: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace CbosService {
        const baseUrl = "Clinica/Cbos";
        function Create(request: Serenity.SaveRequest<CbosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CbosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CbosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CbosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ConselhosProfissionaisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ConselhosProfissionaisForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ConselhosProfissionaisRow {
        ConselhoProfissionalId?: number;
        Descricao?: string;
    }
    namespace ConselhosProfissionaisRow {
        const idProperty = "ConselhoProfissionalId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.ConselhosProfissionais";
        const lookupKey = "Clinica.ConselhosProfissionais";
        function getLookup(): Q.Lookup<ConselhosProfissionaisRow>;
        namespace Fields {
            const ConselhoProfissionalId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ConselhosProfissionaisService {
        const baseUrl = "Clinica/ConselhosProfissionais";
        function Create(request: Serenity.SaveRequest<ConselhosProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConselhosProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConselhosProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConselhosProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ContatosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ContatosForm {
        Tratamento: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Departamento: Serenity.StringEditor;
        TipoContatoId: Serenity.LookupEditor;
        TipoMeioContatoId: Serenity.LookupEditor;
        ConteudoMeioContato: Serenity.MaskedEditor;
        Email: Serenity.EmailEditor;
        ObservacoesContato: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ContatosRow {
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
    namespace ContatosRow {
        const idProperty = "ContatoId";
        const nameProperty = "Nome";
        const localTextPrefix = "Clinica.Contatos";
        namespace Fields {
            const ContatoId: string;
            const PacienteId: string;
            const ConvenioId: string;
            const ProfissionalId: string;
            const FornecedorId: string;
            const Tratamento: string;
            const Nome: string;
            const Departamento: string;
            const TipoContatoId: string;
            const TipoMeioContatoId: string;
            const ConteudoMeioContato: string;
            const Email: string;
            const ObservacoesContato: string;
            const TipoContato: string;
            const TipoContatoPessoaFisica: string;
            const TipoContatoOrdem: string;
            const TipoMeioContato: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ContatosService {
        const baseUrl = "Clinica/Contatos";
        function Create(request: Serenity.SaveRequest<ContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ConveniosEmissaoNfForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ConveniosEmissaoNfForm {
        ConvenioId: Serenity.LookupEditor;
        RazaoSocial: Serenity.StringEditor;
        Cnpj: Serenity.MaskedEditor;
        EmailNf: Serenity.EmailEditor;
        Padrao: Serenity.BooleanEditor;
        TipoEnderecoId: Serenity.IntegerEditor;
        Rua: Serenity.TextAreaEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Referencia: Serenity.TextAreaEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Motivo: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ConveniosEmissaoNfRow {
        ConvenioEmissaoNf?: number;
        ConvenioId?: number;
        RazaoSocial?: string;
        Cnpj?: string;
        EmailNf?: string;
        Padrao?: boolean;
        TipoEnderecoId?: number;
        Rua?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        CodigoIbgeCidade?: string;
        Estado?: string;
        CodigoIbgeEstado?: string;
        Pais?: string;
        Cep?: string;
        Referencia?: string;
        DataInicio?: string;
        DataFim?: string;
        Motivo?: string;
        ConvenioCnpj?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
        ConvenioCodigoAns?: string;
        ConvenioCadastroConvenio?: string;
        ConvenioLogo?: string;
        ConvenioInscricaoMunicipal?: string;
        ConvenioInscricaoEstadual?: string;
        ConvenioSite?: string;
        ConvenioDataInicio?: string;
        ConvenioInativo?: boolean;
        ConvenioDataFim?: string;
        ConvenioMotivoCancelamento?: string;
        ConvenioObservacao?: string;
        ConvenioVersaoTiss?: string;
        ConvenioWebService?: string;
        ConvenioSadtSolContratadoId?: string;
        ConvenioSadtExecutanteId?: string;
        ConvenioSadtProfissionalexecutante?: string;
        ConvenioSadtMembroEquipe?: string;
        ConvenioIdOrigem?: string;
        ConvenioIdDestino?: string;
        ConvenioOrigemIdPrestador?: string;
        ConvenioDestinoIdPrestador?: string;
        ConvenioIdLogo?: number;
        ConvenioGeraTiss?: boolean;
        ConvenioDataCadastro?: string;
        ConvenioDataUltimaAtualizacao?: string;
        ConvenioLatitude?: string;
        ConvenioLongitude?: string;
        ConvenioEmailNotaFiscal?: string;
        ConvenioEmailContato?: string;
        ConvenioEmailFaturamento?: string;
        ConvenioEmailGlosa?: string;
    }
    namespace ConveniosEmissaoNfRow {
        const idProperty = "ConvenioEmissaoNf";
        const nameProperty = "RazaoSocial";
        const localTextPrefix = "Clinica.ConveniosEmissaoNf";
        const lookupKey = "Clinica.ConveniosEmissaoNf";
        function getLookup(): Q.Lookup<ConveniosEmissaoNfRow>;
        namespace Fields {
            const ConvenioEmissaoNf: string;
            const ConvenioId: string;
            const RazaoSocial: string;
            const Cnpj: string;
            const EmailNf: string;
            const Padrao: string;
            const TipoEnderecoId: string;
            const Rua: string;
            const Numero: string;
            const Complemento: string;
            const Bairro: string;
            const Cidade: string;
            const CodigoIbgeCidade: string;
            const Estado: string;
            const CodigoIbgeEstado: string;
            const Pais: string;
            const Cep: string;
            const Referencia: string;
            const DataInicio: string;
            const DataFim: string;
            const Motivo: string;
            const ConvenioCnpj: string;
            const ConvenioRazaoSocial: string;
            const ConvenioNomeFantasia: string;
            const ConvenioCodigoAns: string;
            const ConvenioCadastroConvenio: string;
            const ConvenioLogo: string;
            const ConvenioInscricaoMunicipal: string;
            const ConvenioInscricaoEstadual: string;
            const ConvenioSite: string;
            const ConvenioDataInicio: string;
            const ConvenioInativo: string;
            const ConvenioDataFim: string;
            const ConvenioMotivoCancelamento: string;
            const ConvenioObservacao: string;
            const ConvenioVersaoTiss: string;
            const ConvenioWebService: string;
            const ConvenioSadtSolContratadoId: string;
            const ConvenioSadtExecutanteId: string;
            const ConvenioSadtProfissionalexecutante: string;
            const ConvenioSadtMembroEquipe: string;
            const ConvenioIdOrigem: string;
            const ConvenioIdDestino: string;
            const ConvenioOrigemIdPrestador: string;
            const ConvenioDestinoIdPrestador: string;
            const ConvenioIdLogo: string;
            const ConvenioGeraTiss: string;
            const ConvenioDataCadastro: string;
            const ConvenioDataUltimaAtualizacao: string;
            const ConvenioLatitude: string;
            const ConvenioLongitude: string;
            const ConvenioEmailNotaFiscal: string;
            const ConvenioEmailContato: string;
            const ConvenioEmailFaturamento: string;
            const ConvenioEmailGlosa: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ConveniosEmissaoNfService {
        const baseUrl = "Clinica/ConveniosEmissaoNf";
        function Create(request: Serenity.SaveRequest<ConveniosEmissaoNfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConveniosEmissaoNfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConveniosEmissaoNfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConveniosEmissaoNfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    class ConveniosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ConveniosForm {
        Cnpj: Serenity.MaskedEditor;
        RazaoSocial: Serenity.StringEditor;
        NomeFantasia: Serenity.StringEditor;
        CodigoAns: Serenity.StringEditor;
        CadastroConvenio: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        InscricaoMunicipal: Serenity.StringEditor;
        InscricaoEstadual: Serenity.StringEditor;
        Site: Serenity.StringEditor;
        DataInicio: Serenity.DateTimeEditor;
        Inativo: Serenity.BooleanEditor;
        DataFim: Serenity.DateTimeEditor;
        MotivoCancelamento: Serenity.TextAreaEditor;
        Observacao: Serenity.TextAreaEditor;
        VersaoTiss: Serenity.StringEditor;
        WebService: Serenity.StringEditor;
        SadtSolContratadoId: Serenity.StringEditor;
        SadtExecutanteId: Serenity.StringEditor;
        SadtProfissionalexecutante: Serenity.StringEditor;
        SadtMembroEquipe: Serenity.StringEditor;
        IdOrigem: Serenity.StringEditor;
        IdDestino: Serenity.StringEditor;
        OrigemIdPrestador: Serenity.StringEditor;
        DestinoIdPrestador: Serenity.StringEditor;
        IdLogo: Serenity.IntegerEditor;
        GeraTiss: Serenity.BooleanEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Latitude: Serenity.TextAreaEditor;
        Longitude: Serenity.TextAreaEditor;
        EmailNotaFiscal: Serenity.EmailEditor;
        EmailContato: Serenity.EmailEditor;
        EmailFaturamento: Serenity.EmailEditor;
        EmailGlosa: Serenity.EmailEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ConveniosRow {
        ConvenioId?: number;
        Cnpj?: string;
        RazaoSocial?: string;
        NomeFantasia?: string;
        CodigoAns?: string;
        CadastroConvenio?: string;
        Logo?: string;
        InscricaoMunicipal?: string;
        InscricaoEstadual?: string;
        Site?: string;
        DataInicio?: string;
        Inativo?: boolean;
        DataFim?: string;
        MotivoCancelamento?: string;
        Observacao?: string;
        VersaoTiss?: string;
        WebService?: string;
        SadtSolContratadoId?: string;
        SadtExecutanteId?: string;
        SadtProfissionalexecutante?: string;
        SadtMembroEquipe?: string;
        IdOrigem?: string;
        IdDestino?: string;
        OrigemIdPrestador?: string;
        DestinoIdPrestador?: string;
        IdLogo?: number;
        GeraTiss?: boolean;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Latitude?: string;
        Longitude?: string;
        EmailNotaFiscal?: string;
        EmailContato?: string;
        EmailFaturamento?: string;
        EmailGlosa?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
    }
    namespace ConveniosRow {
        const idProperty = "ConvenioId";
        const nameProperty = "NomeFantasia";
        const localTextPrefix = "Clinica.Convenios";
        const lookupKey = "Clinica.Convenios";
        namespace Fields {
            const ConvenioId: string;
            const Cnpj: string;
            const RazaoSocial: string;
            const NomeFantasia: string;
            const CodigoAns: string;
            const CadastroConvenio: string;
            const Logo: string;
            const InscricaoMunicipal: string;
            const InscricaoEstadual: string;
            const Site: string;
            const DataInicio: string;
            const Inativo: string;
            const DataFim: string;
            const MotivoCancelamento: string;
            const Observacao: string;
            const VersaoTiss: string;
            const WebService: string;
            const SadtSolContratadoId: string;
            const SadtExecutanteId: string;
            const SadtProfissionalexecutante: string;
            const SadtMembroEquipe: string;
            const IdOrigem: string;
            const IdDestino: string;
            const OrigemIdPrestador: string;
            const DestinoIdPrestador: string;
            const IdLogo: string;
            const GeraTiss: string;
            const DataCadastro: string;
            const DataUltimaAtualizacao: string;
            const Latitude: string;
            const Longitude: string;
            const EmailNotaFiscal: string;
            const EmailContato: string;
            const EmailFaturamento: string;
            const EmailGlosa: string;
            const ContatosList: string;
            const EnderecosList: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ConveniosService {
        const baseUrl = "Clinica/Convenios";
        function Create(request: Serenity.SaveRequest<ConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class DemonstrativosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DemonstrativosForm {
        ConvenioId: Serenity.LookupEditor;
        Demonstrativo: Serenity.StringEditor;
        DataDemonstrativo: Serenity.DateTimeEditor;
        DataPagamento: Serenity.DateTimeEditor;
        Observacoes: Serenity.TextAreaEditor;
        ValorProcessado: Serenity.DecimalEditor;
        ValorLiberado: Serenity.DecimalEditor;
        ValorGlosado: Serenity.DecimalEditor;
        NumeroLotePrestador: Serenity.StringEditor;
        NumeroProtocolo: Serenity.StringEditor;
        DataProtocolo: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        Arquivos: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class DemonstrativosItensForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DemonstrativosItensForm {
        DemonstrativoId: Serenity.LookupEditor;
        StatusDemonstrativoId: Serenity.LookupEditor;
        NumeroGuiaPrestador: Serenity.StringEditor;
        NumeroGuiaOperadora: Serenity.StringEditor;
        Registro: Serenity.StringEditor;
        Senha: Serenity.StringEditor;
        Matricula: Serenity.StringEditor;
        Beneficiario: Serenity.StringEditor;
        DataSessao: Serenity.DateTimeEditor;
        Tabela: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Procedimento: Serenity.TextAreaEditor;
        Quantidade: Serenity.IntegerEditor;
        ValorInformado: Serenity.DecimalEditor;
        ValorLiberado: Serenity.DecimalEditor;
        ValorGlosado: Serenity.DecimalEditor;
        CodigoGlosa: Serenity.StringEditor;
        MotivoGlosa: Serenity.TextAreaEditor;
        SessaoId: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface DemonstrativosItensRow {
        DemonstrativoItemId?: number;
        DemonstrativoId?: number;
        StatusDemonstrativoId?: number;
        NumeroGuiaPrestador?: string;
        NumeroGuiaOperadora?: string;
        Registro?: string;
        Senha?: string;
        Matricula?: string;
        Beneficiario?: string;
        DataSessao?: string;
        Tabela?: string;
        Codigo?: string;
        Procedimento?: string;
        Quantidade?: number;
        ValorInformado?: number;
        ValorLiberado?: number;
        ValorGlosado?: number;
        CodigoGlosa?: string;
        MotivoGlosa?: string;
        SessaoId?: number;
        DemonstrativoConvenioId?: number;
        Demonstrativo?: string;
        DemonstrativoDataDemonstrativo?: string;
        DemonstrativoDataPagamento?: string;
        DemonstrativoObservacoes?: string;
        DemonstrativoValorProcessado?: number;
        DemonstrativoValorLiberado?: number;
        DemonstrativoValorGlosado?: number;
        DemonstrativoNumeroLotePrestador?: string;
        DemonstrativoNumeroProtocolo?: string;
        DemonstrativoDataProtocolo?: string;
        DemonstrativoObservacao?: string;
        DemonstrativoArquivos?: string;
        StatusDemonstrativoStatus?: string;
    }
    namespace DemonstrativosItensRow {
        const idProperty = "DemonstrativoItemId";
        const nameProperty = "NumeroGuiaPrestador";
        const localTextPrefix = "Clinica.DemonstrativosItens";
        const lookupKey = "Clinica.DemonstrativosItens";
        function getLookup(): Q.Lookup<DemonstrativosItensRow>;
        namespace Fields {
            const DemonstrativoItemId: string;
            const DemonstrativoId: string;
            const StatusDemonstrativoId: string;
            const NumeroGuiaPrestador: string;
            const NumeroGuiaOperadora: string;
            const Registro: string;
            const Senha: string;
            const Matricula: string;
            const Beneficiario: string;
            const DataSessao: string;
            const Tabela: string;
            const Codigo: string;
            const Procedimento: string;
            const Quantidade: string;
            const ValorInformado: string;
            const ValorLiberado: string;
            const ValorGlosado: string;
            const CodigoGlosa: string;
            const MotivoGlosa: string;
            const SessaoId: string;
            const DemonstrativoConvenioId: string;
            const Demonstrativo: string;
            const DemonstrativoDataDemonstrativo: string;
            const DemonstrativoDataPagamento: string;
            const DemonstrativoObservacoes: string;
            const DemonstrativoValorProcessado: string;
            const DemonstrativoValorLiberado: string;
            const DemonstrativoValorGlosado: string;
            const DemonstrativoNumeroLotePrestador: string;
            const DemonstrativoNumeroProtocolo: string;
            const DemonstrativoDataProtocolo: string;
            const DemonstrativoObservacao: string;
            const DemonstrativoArquivos: string;
            const StatusDemonstrativoStatus: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace DemonstrativosItensService {
        const baseUrl = "Clinica/DemonstrativosItens";
        function Create(request: Serenity.SaveRequest<DemonstrativosItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DemonstrativosItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DemonstrativosItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DemonstrativosItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class DemonstrativosNotasFiscaisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DemonstrativosNotasFiscaisForm {
        DemonstrativoId: Serenity.LookupEditor;
        Nfseid: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface DemonstrativosNotasFiscaisRow {
        DemonstrativoNotaFiscalId?: number;
        DemonstrativoId?: number;
        Nfseid?: number;
        DemonstrativoConvenioId?: number;
        Demonstrativo?: string;
        DemonstrativoDataDemonstrativo?: string;
        DemonstrativoDataPagamento?: string;
        DemonstrativoObservacoes?: string;
        DemonstrativoValorProcessado?: number;
        DemonstrativoValorLiberado?: number;
        DemonstrativoValorGlosado?: number;
        DemonstrativoNumeroLotePrestador?: string;
        DemonstrativoNumeroProtocolo?: string;
        DemonstrativoDataProtocolo?: string;
        DemonstrativoObservacao?: string;
        DemonstrativoArquivos?: string;
    }
    namespace DemonstrativosNotasFiscaisRow {
        const idProperty = "DemonstrativoNotaFiscalId";
        const localTextPrefix = "Clinica.DemonstrativosNotasFiscais";
        const lookupKey = "Clinica.DemonstrativosNotasFiscais";
        function getLookup(): Q.Lookup<DemonstrativosNotasFiscaisRow>;
        namespace Fields {
            const DemonstrativoNotaFiscalId: string;
            const DemonstrativoId: string;
            const Nfseid: string;
            const DemonstrativoConvenioId: string;
            const Demonstrativo: string;
            const DemonstrativoDataDemonstrativo: string;
            const DemonstrativoDataPagamento: string;
            const DemonstrativoObservacoes: string;
            const DemonstrativoValorProcessado: string;
            const DemonstrativoValorLiberado: string;
            const DemonstrativoValorGlosado: string;
            const DemonstrativoNumeroLotePrestador: string;
            const DemonstrativoNumeroProtocolo: string;
            const DemonstrativoDataProtocolo: string;
            const DemonstrativoObservacao: string;
            const DemonstrativoArquivos: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace DemonstrativosNotasFiscaisService {
        const baseUrl = "Clinica/DemonstrativosNotasFiscais";
        function Create(request: Serenity.SaveRequest<DemonstrativosNotasFiscaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DemonstrativosNotasFiscaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DemonstrativosNotasFiscaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DemonstrativosNotasFiscaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    interface DemonstrativosRow {
        DemonstrativoId?: number;
        ConvenioId?: number;
        Demonstrativo?: string;
        DataDemonstrativo?: string;
        DataPagamento?: string;
        Observacoes?: string;
        ValorProcessado?: number;
        ValorLiberado?: number;
        ValorGlosado?: number;
        NumeroLotePrestador?: string;
        NumeroProtocolo?: string;
        DataProtocolo?: string;
        Observacao?: string;
        Arquivos?: string;
        ConvenioCnpj?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
        ConvenioCodigoAns?: string;
        ConvenioCadastroConvenio?: string;
        ConvenioLogo?: string;
        ConvenioInscricaoMunicipal?: string;
        ConvenioInscricaoEstadual?: string;
        ConvenioSite?: string;
        ConvenioDataInicio?: string;
        ConvenioInativo?: boolean;
        ConvenioDataFim?: string;
        ConvenioMotivoCancelamento?: string;
        ConvenioObservacao?: string;
        ConvenioVersaoTiss?: string;
        ConvenioWebService?: string;
        ConvenioSadtSolContratadoId?: string;
        ConvenioSadtExecutanteId?: string;
        ConvenioSadtProfissionalexecutante?: string;
        ConvenioSadtMembroEquipe?: string;
        ConvenioIdOrigem?: string;
        ConvenioIdDestino?: string;
        ConvenioOrigemIdPrestador?: string;
        ConvenioDestinoIdPrestador?: string;
        ConvenioIdLogo?: number;
        ConvenioGeraTiss?: boolean;
        ConvenioDataCadastro?: string;
        ConvenioDataUltimaAtualizacao?: string;
        ConvenioLatitude?: string;
        ConvenioLongitude?: string;
        ConvenioEmailNotaFiscal?: string;
        ConvenioEmailContato?: string;
        ConvenioEmailFaturamento?: string;
        ConvenioEmailGlosa?: string;
    }
    namespace DemonstrativosRow {
        const idProperty = "DemonstrativoId";
        const nameProperty = "Demonstrativo";
        const localTextPrefix = "Clinica.Demonstrativos";
        const lookupKey = "Clinica.Demonstrativos";
        function getLookup(): Q.Lookup<DemonstrativosRow>;
        namespace Fields {
            const DemonstrativoId: string;
            const ConvenioId: string;
            const Demonstrativo: string;
            const DataDemonstrativo: string;
            const DataPagamento: string;
            const Observacoes: string;
            const ValorProcessado: string;
            const ValorLiberado: string;
            const ValorGlosado: string;
            const NumeroLotePrestador: string;
            const NumeroProtocolo: string;
            const DataProtocolo: string;
            const Observacao: string;
            const Arquivos: string;
            const ConvenioCnpj: string;
            const ConvenioRazaoSocial: string;
            const ConvenioNomeFantasia: string;
            const ConvenioCodigoAns: string;
            const ConvenioCadastroConvenio: string;
            const ConvenioLogo: string;
            const ConvenioInscricaoMunicipal: string;
            const ConvenioInscricaoEstadual: string;
            const ConvenioSite: string;
            const ConvenioDataInicio: string;
            const ConvenioInativo: string;
            const ConvenioDataFim: string;
            const ConvenioMotivoCancelamento: string;
            const ConvenioObservacao: string;
            const ConvenioVersaoTiss: string;
            const ConvenioWebService: string;
            const ConvenioSadtSolContratadoId: string;
            const ConvenioSadtExecutanteId: string;
            const ConvenioSadtProfissionalexecutante: string;
            const ConvenioSadtMembroEquipe: string;
            const ConvenioIdOrigem: string;
            const ConvenioIdDestino: string;
            const ConvenioOrigemIdPrestador: string;
            const ConvenioDestinoIdPrestador: string;
            const ConvenioIdLogo: string;
            const ConvenioGeraTiss: string;
            const ConvenioDataCadastro: string;
            const ConvenioDataUltimaAtualizacao: string;
            const ConvenioLatitude: string;
            const ConvenioLongitude: string;
            const ConvenioEmailNotaFiscal: string;
            const ConvenioEmailContato: string;
            const ConvenioEmailFaturamento: string;
            const ConvenioEmailGlosa: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace DemonstrativosService {
        const baseUrl = "Clinica/Demonstrativos";
        function Create(request: Serenity.SaveRequest<DemonstrativosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DemonstrativosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DemonstrativosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DemonstrativosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class DiasSemanasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DiasSemanasForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface DiasSemanasRow {
        DiaSemanaId?: number;
        Descricao?: string;
    }
    namespace DiasSemanasRow {
        const idProperty = "DiaSemanaId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.DiasSemanas";
        const lookupKey = "Clinica.DiasSemanas";
        function getLookup(): Q.Lookup<DiasSemanasRow>;
        namespace Fields {
            const DiaSemanaId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace DiasSemanasService {
        const baseUrl = "Clinica/DiasSemanas";
        function Create(request: Serenity.SaveRequest<DiasSemanasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DiasSemanasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DiasSemanasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DiasSemanasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EnderecosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EnderecosForm {
        TipoEnderecoId: Serenity.LookupEditor;
        Cep: Serenity.MaskedEditor;
        Rua: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Referencia: Serenity.StringEditor;
        Observacao: Serenity.TextAreaEditor;
        Latitude: Serenity.StringEditor;
        Longitude: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface EnderecosRow {
        EnderecoId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        ProfissionalId?: number;
        FornecedorId?: number;
        TipoEnderecoId?: number;
        Rua?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        CodigoIbgeCidade?: string;
        Estado?: string;
        CodigoIbgeEstado?: string;
        Pais?: string;
        Cep?: string;
        Referencia?: string;
        Observacao?: string;
        Latitude?: string;
        Longitude?: string;
        TipoEndereco?: string;
        TipoEnderecoPessoaFisica?: boolean;
        TipoEnderecoOrdem?: number;
    }
    namespace EnderecosRow {
        const idProperty = "EnderecoId";
        const nameProperty = "Rua";
        const localTextPrefix = "Clinica.Enderecos";
        const lookupKey = "Clinica.Enderecos";
        namespace Fields {
            const EnderecoId: string;
            const PacienteId: string;
            const ConvenioId: string;
            const ProfissionalId: string;
            const FornecedorId: string;
            const TipoEnderecoId: string;
            const Rua: string;
            const Numero: string;
            const Complemento: string;
            const Bairro: string;
            const Cidade: string;
            const CodigoIbgeCidade: string;
            const Estado: string;
            const CodigoIbgeEstado: string;
            const Pais: string;
            const Cep: string;
            const Referencia: string;
            const Observacao: string;
            const Latitude: string;
            const Longitude: string;
            const TipoEndereco: string;
            const TipoEnderecoPessoaFisica: string;
            const TipoEnderecoOrdem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EnderecosService {
        const baseUrl = "Clinica/Enderecos";
        function Create(request: Serenity.SaveRequest<EnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EscalasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EscalasForm {
        ProfissionalId: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        Principal: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface EscalasRow {
        EscalaId?: number;
        ProfissionalId?: number;
        Descricao?: string;
        Principal?: boolean;
    }
    namespace EscalasRow {
        const idProperty = "EscalaId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.Escalas";
        const lookupKey = "Clinica.Escalas";
        function getLookup(): Q.Lookup<EscalasRow>;
        namespace Fields {
            const EscalaId: string;
            const ProfissionalId: string;
            const Descricao: string;
            const Principal: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EscalasService {
        const baseUrl = "Clinica/Escalas";
        function Create(request: Serenity.SaveRequest<EscalasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EscalasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EscalasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EscalasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EspecialidadesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EspecialidadesForm {
        TipoEspecialidadeId: Serenity.LookupEditor;
        Descricao: Serenity.StringEditor;
        VisivelAgenda: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EspecialidadesProcedimentosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EspecialidadesProcedimentosForm {
        EspecialidadeId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.LookupEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        IdCodigoRegistrado: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface EspecialidadesProcedimentosRow {
        EspecialidadesProcedimentosId?: number;
        EspecialidadeId?: number;
        ProcedimentoId?: number;
        DataInicio?: string;
        DataFim?: string;
        Observacao?: string;
        DataCadastrada?: string;
        IdCodigoRegistrado?: boolean;
        EspecialidadeTipoEspecialidadeId?: number;
        EspecialidadeDescricao?: string;
        EspecialidadeVisivelAgenda?: boolean;
        ProcedimentoTabelaId?: number;
        Procedimento?: string;
        ProcedimentoCodigo?: string;
        ProcedimentoCh?: number;
        ProcedimentoCodigoCbhpm?: string;
        ProcedimentoCodigoTuss?: string;
        ProcedimentoDataCadastrada?: string;
        ProcedimentoIdCodigoRegistrado?: boolean;
    }
    namespace EspecialidadesProcedimentosRow {
        const idProperty = "EspecialidadesProcedimentosId";
        const nameProperty = "Observacao";
        const localTextPrefix = "Clinica.EspecialidadesProcedimentos";
        const lookupKey = "Clinica.EspecialidadesProcedimentos";
        function getLookup(): Q.Lookup<EspecialidadesProcedimentosRow>;
        namespace Fields {
            const EspecialidadesProcedimentosId: string;
            const EspecialidadeId: string;
            const ProcedimentoId: string;
            const DataInicio: string;
            const DataFim: string;
            const Observacao: string;
            const DataCadastrada: string;
            const IdCodigoRegistrado: string;
            const EspecialidadeTipoEspecialidadeId: string;
            const EspecialidadeDescricao: string;
            const EspecialidadeVisivelAgenda: string;
            const ProcedimentoTabelaId: string;
            const Procedimento: string;
            const ProcedimentoCodigo: string;
            const ProcedimentoCh: string;
            const ProcedimentoCodigoCbhpm: string;
            const ProcedimentoCodigoTuss: string;
            const ProcedimentoDataCadastrada: string;
            const ProcedimentoIdCodigoRegistrado: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EspecialidadesProcedimentosService {
        const baseUrl = "Clinica/EspecialidadesProcedimentos";
        function Create(request: Serenity.SaveRequest<EspecialidadesProcedimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EspecialidadesProcedimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EspecialidadesProcedimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EspecialidadesProcedimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EspecialidadesProfissionaisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EspecialidadesProfissionaisForm {
        ProfissionalId: Serenity.LookupEditor;
        EspecialidadeId: Serenity.LookupEditor;
        Cbosid: Serenity.LookupEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface EspecialidadesProfissionaisRow {
        EspecialidadeProfisisonalId?: number;
        ProfissionalId?: number;
        EspecialidadeId?: number;
        Cbosid?: number;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
        EspecialidadeTipoEspecialidadeId?: number;
        EspecialidadeDescricao?: string;
        EspecialidadeVisivelAgenda?: boolean;
        CbosidCodigo?: string;
        CbosidCbos?: string;
    }
    namespace EspecialidadesProfissionaisRow {
        const idProperty = "EspecialidadeProfisisonalId";
        const localTextPrefix = "Clinica.EspecialidadesProfissionais";
        const lookupKey = "Clinica.EspecialidadesProfissionais";
        function getLookup(): Q.Lookup<EspecialidadesProfissionaisRow>;
        namespace Fields {
            const EspecialidadeProfisisonalId: string;
            const ProfissionalId: string;
            const EspecialidadeId: string;
            const Cbosid: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
            const EspecialidadeTipoEspecialidadeId: string;
            const EspecialidadeDescricao: string;
            const EspecialidadeVisivelAgenda: string;
            const CbosidCodigo: string;
            const CbosidCbos: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EspecialidadesProfissionaisService {
        const baseUrl = "Clinica/EspecialidadesProfissionais";
        function Create(request: Serenity.SaveRequest<EspecialidadesProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EspecialidadesProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EspecialidadesProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EspecialidadesProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    interface EspecialidadesRow {
        EspecialidadeId?: number;
        TipoEspecialidadeId?: number;
        Descricao?: string;
        VisivelAgenda?: boolean;
        TipoEspecialidadeDescricao?: string;
    }
    namespace EspecialidadesRow {
        const idProperty = "EspecialidadeId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.Especialidades";
        const lookupKey = "Clinica.Especialidades";
        function getLookup(): Q.Lookup<EspecialidadesRow>;
        namespace Fields {
            const EspecialidadeId: string;
            const TipoEspecialidadeId: string;
            const Descricao: string;
            const VisivelAgenda: string;
            const TipoEspecialidadeDescricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EspecialidadesService {
        const baseUrl = "Clinica/Especialidades";
        function Create(request: Serenity.SaveRequest<EspecialidadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EspecialidadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EspecialidadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EspecialidadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class EstadosCivisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EstadosCivisForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface EstadosCivisRow {
        EstadoCivilId?: number;
        Descricao?: string;
    }
    namespace EstadosCivisRow {
        const idProperty = "EstadoCivilId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.EstadosCivis";
        const lookupKey = "Clinica.EstadosCivis";
        namespace Fields {
            const EstadoCivilId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace EstadosCivisService {
        const baseUrl = "Clinica/EstadosCivis";
        function Create(request: Serenity.SaveRequest<EstadosCivisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EstadosCivisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadosCivisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadosCivisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ExceptionsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ExceptionsForm {
        Guid: Serenity.StringEditor;
        ApplicationName: Serenity.StringEditor;
        MachineName: Serenity.StringEditor;
        CreationDate: Serenity.DateTimeEditor;
        Type: Serenity.StringEditor;
        IsProtected: Serenity.BooleanEditor;
        Host: Serenity.StringEditor;
        Url: Serenity.TextAreaEditor;
        HttpMethod: Serenity.StringEditor;
        IpAddress: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        Message: Serenity.TextAreaEditor;
        Detail: Serenity.StringEditor;
        StatusCode: Serenity.IntegerEditor;
        Sql: Serenity.StringEditor;
        DeletionDate: Serenity.DateTimeEditor;
        FullJson: Serenity.StringEditor;
        ErrorHash: Serenity.IntegerEditor;
        DuplicateCount: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ExceptionsRow {
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
    namespace ExceptionsRow {
        const idProperty = "Id";
        const nameProperty = "ApplicationName";
        const localTextPrefix = "Clinica.Exceptions";
        const lookupKey = "Clinica.Exceptions";
        namespace Fields {
            const Id: string;
            const Guid: string;
            const ApplicationName: string;
            const MachineName: string;
            const CreationDate: string;
            const Type: string;
            const IsProtected: string;
            const Host: string;
            const Url: string;
            const HttpMethod: string;
            const IpAddress: string;
            const Source: string;
            const Message: string;
            const Detail: string;
            const StatusCode: string;
            const Sql: string;
            const DeletionDate: string;
            const FullJson: string;
            const ErrorHash: string;
            const DuplicateCount: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ExceptionsService {
        const baseUrl = "Clinica/Exceptions";
        function Create(request: Serenity.SaveRequest<ExceptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExceptionsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExceptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExceptionsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class FeriadosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FeriadosForm {
        TipoFeriadoId: Serenity.LookupEditor;
        DataFeriado: Serenity.DateTimeEditor;
        Feriado: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface FeriadosRow {
        FeriadoId?: number;
        TipoFeriadoId?: number;
        DataFeriado?: string;
        Feriado?: string;
        Ativo?: boolean;
        TipoFeriado?: string;
    }
    namespace FeriadosRow {
        const idProperty = "FeriadoId";
        const nameProperty = "Feriado";
        const localTextPrefix = "Clinica.Feriados";
        const lookupKey = "Clinica.Feriados";
        function getLookup(): Q.Lookup<FeriadosRow>;
        namespace Fields {
            const FeriadoId: string;
            const TipoFeriadoId: string;
            const DataFeriado: string;
            const Feriado: string;
            const Ativo: string;
            const TipoFeriado: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace FeriadosService {
        const baseUrl = "Clinica/Feriados";
        function Create(request: Serenity.SaveRequest<FeriadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FeriadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FeriadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FeriadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class FichasCnesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FichasCnesForm {
        ProfissionalId: Serenity.LookupEditor;
        TipoFichaCnes: Serenity.LookupEditor;
        DataCriacao: Serenity.DateTimeEditor;
        DataHoraEnvio: Serenity.DateTimeEditor;
        ProtocoloRecebimento: Serenity.StringEditor;
        ProfissionalAssinou: Serenity.BooleanEditor;
        ArquivoFichaCnes: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface FichasCnesRow {
        FichasCnesid?: number;
        ProfissionalId?: number;
        TipoFichaCnes?: number;
        DataCriacao?: string;
        DataHoraEnvio?: string;
        ProtocoloRecebimento?: string;
        ProfissionalAssinou?: boolean;
        ArquivoFichaCnes?: string;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
        TipoFichaCnesDescricao?: string;
    }
    namespace FichasCnesRow {
        const idProperty = "FichasCnesid";
        const nameProperty = "ProtocoloRecebimento";
        const localTextPrefix = "Clinica.FichasCnes";
        const lookupKey = "Clinica.FichasCnes";
        function getLookup(): Q.Lookup<FichasCnesRow>;
        namespace Fields {
            const FichasCnesid: string;
            const ProfissionalId: string;
            const TipoFichaCnes: string;
            const DataCriacao: string;
            const DataHoraEnvio: string;
            const ProtocoloRecebimento: string;
            const ProfissionalAssinou: string;
            const ArquivoFichaCnes: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
            const TipoFichaCnesDescricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace FichasCnesService {
        const baseUrl = "Clinica/FichasCnes";
        function Create(request: Serenity.SaveRequest<FichasCnesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FichasCnesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FichasCnesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FichasCnesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class FolhasPagamentosProfissionaisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FolhasPagamentosProfissionaisForm {
        ProfissionalId: Serenity.LookupEditor;
        NotaFiscalProfissional: Serenity.IntegerEditor;
        Arquivos: Serenity.TextAreaEditor;
        Movimento: Serenity.DateTimeEditor;
        DataPagamento: Serenity.DateTimeEditor;
        ValorPago: Serenity.DecimalEditor;
        DataImpressao: Serenity.DateTimeEditor;
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class FolhasPagamentosProfissionaisItensForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FolhasPagamentosProfissionaisItensForm {
        FolhaPagamentoProfissionalId: Serenity.LookupEditor;
        Banco: Serenity.StringEditor;
        Agencia: Serenity.StringEditor;
        Conta: Serenity.StringEditor;
        FormaPagamento: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface FolhasPagamentosProfissionaisItensRow {
        FolhaPagamentoProfissionalItemId?: number;
        FolhaPagamentoProfissionalId?: number;
        Banco?: string;
        Agencia?: string;
        Conta?: string;
        FormaPagamento?: string;
        FolhaPagamentoProfissionalProfissionalId?: number;
        FolhaPagamentoProfissionalNotaFiscalProfissional?: number;
        FolhaPagamentoProfissionalArquivos?: string;
        FolhaPagamentoProfissionalMovimento?: string;
        FolhaPagamentoProfissionalDataPagamento?: string;
        FolhaPagamentoProfissionalValorPago?: number;
        FolhaPagamentoProfissionalDataImpressao?: string;
    }
    namespace FolhasPagamentosProfissionaisItensRow {
        const idProperty = "FolhaPagamentoProfissionalItemId";
        const nameProperty = "Banco";
        const localTextPrefix = "Clinica.FolhasPagamentosProfissionaisItens";
        const lookupKey = "Clinica.FolhasPagamentosProfissionaisItens";
        function getLookup(): Q.Lookup<FolhasPagamentosProfissionaisItensRow>;
        namespace Fields {
            const FolhaPagamentoProfissionalItemId: string;
            const FolhaPagamentoProfissionalId: string;
            const Banco: string;
            const Agencia: string;
            const Conta: string;
            const FormaPagamento: string;
            const FolhaPagamentoProfissionalProfissionalId: string;
            const FolhaPagamentoProfissionalNotaFiscalProfissional: string;
            const FolhaPagamentoProfissionalArquivos: string;
            const FolhaPagamentoProfissionalMovimento: string;
            const FolhaPagamentoProfissionalDataPagamento: string;
            const FolhaPagamentoProfissionalValorPago: string;
            const FolhaPagamentoProfissionalDataImpressao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace FolhasPagamentosProfissionaisItensService {
        const baseUrl = "Clinica/FolhasPagamentosProfissionaisItens";
        function Create(request: Serenity.SaveRequest<FolhasPagamentosProfissionaisItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FolhasPagamentosProfissionaisItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FolhasPagamentosProfissionaisItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FolhasPagamentosProfissionaisItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    interface FolhasPagamentosProfissionaisRow {
        FolhaPagamentoProfissionalId?: number;
        ProfissionalId?: number;
        NotaFiscalProfissional?: number;
        Arquivos?: string;
        Movimento?: string;
        DataPagamento?: string;
        ValorPago?: number;
        DataImpressao?: string;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
    }
    namespace FolhasPagamentosProfissionaisRow {
        const idProperty = "FolhaPagamentoProfissionalId";
        const nameProperty = "Arquivos";
        const localTextPrefix = "Clinica.FolhasPagamentosProfissionais";
        const lookupKey = "Clinica.FolhasPagamentosProfissionais";
        function getLookup(): Q.Lookup<FolhasPagamentosProfissionaisRow>;
        namespace Fields {
            const FolhaPagamentoProfissionalId: string;
            const ProfissionalId: string;
            const NotaFiscalProfissional: string;
            const Arquivos: string;
            const Movimento: string;
            const DataPagamento: string;
            const ValorPago: string;
            const DataImpressao: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace FolhasPagamentosProfissionaisService {
        const baseUrl = "Clinica/FolhasPagamentosProfissionais";
        function Create(request: Serenity.SaveRequest<FolhasPagamentosProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FolhasPagamentosProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FolhasPagamentosProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FolhasPagamentosProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class FornecedoresForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FornecedoresForm {
        Status: Serenity.BooleanEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        RazaoSocial: Serenity.TextAreaEditor;
        NomeFantasia: Serenity.TextAreaEditor;
        NomeAbreviado: Serenity.StringEditor;
        Cpf: Serenity.MaskedEditor;
        Rg: Serenity.StringEditor;
        Cnpj: Serenity.MaskedEditor;
        InscricaoEstadual: Serenity.TextAreaEditor;
        InscricaoMunicipal: Serenity.TextAreaEditor;
        Site: Serenity.TextAreaEditor;
        Telefone: Serenity.MaskedEditor;
        Fax: Serenity.TextAreaEditor;
        TelefoneAlternativo: Serenity.MaskedEditor;
        EmailCorporativo: Serenity.EmailEditor;
        AceitaReceberEmail: Serenity.BooleanEditor;
        MotivoStatus: Serenity.TextAreaEditor;
        QuantidadeEmpregados: Serenity.IntegerEditor;
        AtividadeEmpresaId: Serenity.IntegerEditor;
        ReceitaAnual: Serenity.DecimalEditor;
        MarcasTrabalhadas: Serenity.TextAreaEditor;
        ObservacoesGerais: Serenity.TextAreaEditor;
        DataCriacao: Serenity.DateTimeEditor;
        DataAlteracao: Serenity.DateTimeEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface FornecedoresRow {
        FornecedorId?: number;
        Status?: boolean;
        PessoaJuridica?: boolean;
        RazaoSocial?: string;
        NomeFantasia?: string;
        NomeAbreviado?: string;
        Cpf?: string;
        Rg?: string;
        Cnpj?: string;
        InscricaoEstadual?: string;
        InscricaoMunicipal?: string;
        Site?: string;
        Telefone?: string;
        Fax?: string;
        TelefoneAlternativo?: string;
        EmailCorporativo?: string;
        AceitaReceberEmail?: boolean;
        MotivoStatus?: string;
        QuantidadeEmpregados?: number;
        AtividadeEmpresaId?: number;
        ReceitaAnual?: number;
        MarcasTrabalhadas?: string;
        ObservacoesGerais?: string;
        DataCriacao?: string;
        DataAlteracao?: string;
        Inativo?: boolean;
        DataInativo?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
    }
    namespace FornecedoresRow {
        const idProperty = "FornecedorId";
        const nameProperty = "RazaoSocial";
        const localTextPrefix = "Clinica.Fornecedores";
        const lookupKey = "Clinica.Fornecedores";
        namespace Fields {
            const FornecedorId: string;
            const Status: string;
            const PessoaJuridica: string;
            const RazaoSocial: string;
            const NomeFantasia: string;
            const NomeAbreviado: string;
            const Cpf: string;
            const Rg: string;
            const Cnpj: string;
            const InscricaoEstadual: string;
            const InscricaoMunicipal: string;
            const Site: string;
            const Telefone: string;
            const Fax: string;
            const TelefoneAlternativo: string;
            const EmailCorporativo: string;
            const AceitaReceberEmail: string;
            const MotivoStatus: string;
            const QuantidadeEmpregados: string;
            const AtividadeEmpresaId: string;
            const ReceitaAnual: string;
            const MarcasTrabalhadas: string;
            const ObservacoesGerais: string;
            const DataCriacao: string;
            const DataAlteracao: string;
            const Inativo: string;
            const DataInativo: string;
            const ContatosList: string;
            const EnderecosList: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace FornecedoresService {
        const baseUrl = "Clinica/Fornecedores";
        function Create(request: Serenity.SaveRequest<FornecedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FornecedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FornecedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FornecedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class GuiasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface GuiasForm {
        TipoGuiaId: Serenity.LookupEditor;
        TipoConsultaId: Serenity.LookupEditor;
        Guia: Serenity.StringEditor;
        GuiaOperador: Serenity.StringEditor;
        Carteirinha: Serenity.StringEditor;
        NomePaciente: Serenity.TextAreaEditor;
        AutorizacaoId: Serenity.LookupEditor;
        NumeroAutorizacao: Serenity.StringEditor;
        IdAuditada: Serenity.BooleanEditor;
        DataAuditoria: Serenity.DateTimeEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
        ConclusaoAuditoria: Serenity.TextAreaEditor;
        ProfissionalIdSolicitante: Serenity.IntegerEditor;
        ProfissionalIdExecutante: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface GuiasRow {
        GuiaId?: number;
        TipoGuiaId?: number;
        TipoConsultaId?: number;
        Guia?: string;
        GuiaOperador?: string;
        Carteirinha?: string;
        NomePaciente?: string;
        AutorizacaoId?: number;
        NumeroAutorizacao?: string;
        IdAuditada?: boolean;
        DataAuditoria?: string;
        IdAuditoriaAprovada?: boolean;
        ConclusaoAuditoria?: string;
        ProfissionalIdSolicitante?: number;
        ProfissionalIdExecutante?: number;
        TipoGuiaDescricao?: string;
        TipoGuiaAtivo?: boolean;
        TipoConsultaDescricao?: string;
        TipoConsultaAtivo?: boolean;
        AutorizacaoNumeroAutorizacao?: string;
        AutorizacaoConvenioId?: number;
        AutorizacaoPacienteId?: number;
        AutorizacaoArquivos?: string;
        AutorizacaoDataSolicitacao?: string;
        AutorizacaoDataAutorizacao?: string;
        AutorizacaoDataValidade?: string;
        AutorizacaoObservacao?: string;
        AutorizacaoIdAuditoriaAprovada?: boolean;
    }
    namespace GuiasRow {
        const idProperty = "GuiaId";
        const nameProperty = "Guia";
        const localTextPrefix = "Clinica.Guias";
        const lookupKey = "Clinica.Guias";
        function getLookup(): Q.Lookup<GuiasRow>;
        namespace Fields {
            const GuiaId: string;
            const TipoGuiaId: string;
            const TipoConsultaId: string;
            const Guia: string;
            const GuiaOperador: string;
            const Carteirinha: string;
            const NomePaciente: string;
            const AutorizacaoId: string;
            const NumeroAutorizacao: string;
            const IdAuditada: string;
            const DataAuditoria: string;
            const IdAuditoriaAprovada: string;
            const ConclusaoAuditoria: string;
            const ProfissionalIdSolicitante: string;
            const ProfissionalIdExecutante: string;
            const TipoGuiaDescricao: string;
            const TipoGuiaAtivo: string;
            const TipoConsultaDescricao: string;
            const TipoConsultaAtivo: string;
            const AutorizacaoNumeroAutorizacao: string;
            const AutorizacaoConvenioId: string;
            const AutorizacaoPacienteId: string;
            const AutorizacaoArquivos: string;
            const AutorizacaoDataSolicitacao: string;
            const AutorizacaoDataAutorizacao: string;
            const AutorizacaoDataValidade: string;
            const AutorizacaoObservacao: string;
            const AutorizacaoIdAuditoriaAprovada: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace GuiasService {
        const baseUrl = "Clinica/Guias";
        function Create(request: Serenity.SaveRequest<GuiasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GuiasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GuiasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GuiasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class LotesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LotesForm {
        StatusLoteId: Serenity.LookupEditor;
        Movimentacao: Serenity.DateTimeEditor;
        ConvenioId: Serenity.IntegerEditor;
        DataEmissaoLote: Serenity.DateTimeEditor;
        Lote: Serenity.StringEditor;
        Protocolo: Serenity.StringEditor;
        LoteConvenio: Serenity.StringEditor;
        ValorLote: Serenity.DecimalEditor;
        CapaLote: Serenity.StringEditor;
        Extrato: Serenity.StringEditor;
        EnviadoConvenioId: Serenity.BooleanEditor;
        DataEnviadoConvenio: Serenity.DateTimeEditor;
        ArquivoFisicoEnviadoId: Serenity.BooleanEditor;
        CartaSimplesId: Serenity.BooleanEditor;
        Sedex: Serenity.StringEditor;
        Arid: Serenity.BooleanEditor;
        DataRetornoAr: Serenity.DateTimeEditor;
        ValorCorreios: Serenity.DecimalEditor;
        Arquivos: Serenity.TextAreaEditor;
        Observacao: Serenity.TextAreaEditor;
        Nfseid: Serenity.IntegerEditor;
        NotaFiscal: Serenity.StringEditor;
        ValorNotaFiscal: Serenity.DecimalEditor;
        DataEmissaoNotaFiscal: Serenity.DateTimeEditor;
        EmailNotaFiscal: Serenity.EmailEditor;
        NotaFiscalImpressaId: Serenity.BooleanEditor;
        NotaFiscalRecebida: Serenity.StringEditor;
        DataNotaFiscalImpressa: Serenity.DateTimeEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface LotesRow {
        LoteId?: number;
        StatusLoteId?: number;
        Movimentacao?: string;
        ConvenioId?: number;
        DataEmissaoLote?: string;
        Lote?: string;
        Protocolo?: string;
        LoteConvenio?: string;
        ValorLote?: number;
        CapaLote?: string;
        Extrato?: string;
        EnviadoConvenioId?: boolean;
        DataEnviadoConvenio?: string;
        ArquivoFisicoEnviadoId?: boolean;
        CartaSimplesId?: boolean;
        Sedex?: string;
        Arid?: boolean;
        DataRetornoAr?: string;
        ValorCorreios?: number;
        Arquivos?: string;
        Observacao?: string;
        Nfseid?: number;
        NotaFiscal?: string;
        ValorNotaFiscal?: number;
        DataEmissaoNotaFiscal?: string;
        EmailNotaFiscal?: string;
        NotaFiscalImpressaId?: boolean;
        NotaFiscalRecebida?: string;
        DataNotaFiscalImpressa?: string;
        StatusLoteStatus?: string;
    }
    namespace LotesRow {
        const idProperty = "LoteId";
        const nameProperty = "Lote";
        const localTextPrefix = "Clinica.Lotes";
        const lookupKey = "Clinica.Lotes";
        function getLookup(): Q.Lookup<LotesRow>;
        namespace Fields {
            const LoteId: string;
            const StatusLoteId: string;
            const Movimentacao: string;
            const ConvenioId: string;
            const DataEmissaoLote: string;
            const Lote: string;
            const Protocolo: string;
            const LoteConvenio: string;
            const ValorLote: string;
            const CapaLote: string;
            const Extrato: string;
            const EnviadoConvenioId: string;
            const DataEnviadoConvenio: string;
            const ArquivoFisicoEnviadoId: string;
            const CartaSimplesId: string;
            const Sedex: string;
            const Arid: string;
            const DataRetornoAr: string;
            const ValorCorreios: string;
            const Arquivos: string;
            const Observacao: string;
            const Nfseid: string;
            const NotaFiscal: string;
            const ValorNotaFiscal: string;
            const DataEmissaoNotaFiscal: string;
            const EmailNotaFiscal: string;
            const NotaFiscalImpressaId: string;
            const NotaFiscalRecebida: string;
            const DataNotaFiscalImpressa: string;
            const StatusLoteStatus: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace LotesService {
        const baseUrl = "Clinica/Lotes";
        function Create(request: Serenity.SaveRequest<LotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class PacientesConveniosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacientesConveniosForm {
        PacienteId: Serenity.LookupEditor;
        ConvenioId: Serenity.LookupEditor;
        SubConvenioId: Serenity.IntegerEditor;
        ConvenioPrincipal: Serenity.BooleanEditor;
        DescricaoPlano: Serenity.StringEditor;
        Carteirinha: Serenity.StringEditor;
        DataValidadeCarteirinha: Serenity.DateEditor;
        NomePacienteConvenio: Serenity.StringEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        ImagemCarteirinha: Serenity.MultipleImageUploadEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface PacientesConveniosRow {
        PacienteConvenioId?: number;
        PacienteId?: number;
        ConvenioId?: number;
        SubConvenioId?: number;
        ConvenioPrincipal?: boolean;
        DescricaoPlano?: string;
        Carteirinha?: string;
        DataValidadeCarteirinha?: string;
        NomePacienteConvenio?: string;
        Inativo?: boolean;
        DataInativo?: string;
        ImagemCarteirinha?: string;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Observacao?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
    }
    namespace PacientesConveniosRow {
        const idProperty = "PacienteConvenioId";
        const nameProperty = "DescricaoPlano";
        const localTextPrefix = "Clinica.PacientesConvenios";
        const lookupKey = "Clinica.PacientesConvenios";
        namespace Fields {
            const PacienteConvenioId: string;
            const PacienteId: string;
            const ConvenioId: string;
            const SubConvenioId: string;
            const ConvenioPrincipal: string;
            const DescricaoPlano: string;
            const Carteirinha: string;
            const DataValidadeCarteirinha: string;
            const NomePacienteConvenio: string;
            const Inativo: string;
            const DataInativo: string;
            const ImagemCarteirinha: string;
            const DataCadastro: string;
            const DataUltimaAtualizacao: string;
            const Observacao: string;
            const ConvenioRazaoSocial: string;
            const ConvenioNomeFantasia: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace PacientesConveniosService {
        const baseUrl = "Clinica/PacientesConvenios";
        function Create(request: Serenity.SaveRequest<PacientesConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacientesConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacientesConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacientesConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class PacientesEmissaoNfForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacientesEmissaoNfForm {
        PacienteId: Serenity.LookupEditor;
        NomeResponsavel: Serenity.StringEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        CpfResponsavel: Serenity.MaskedEditor;
        CnpjResponsavel: Serenity.MaskedEditor;
        EmailNf: Serenity.EmailEditor;
        Padrao: Serenity.BooleanEditor;
        TipoEnderecoId: Serenity.LookupEditor;
        Cep: Serenity.MaskedEditor;
        Rua: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        CodigoIbgeCidade: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        CodigoIbgeEstado: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Referencia: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface PacientesEmissaoNfRow {
        PacienteEmissaoNf?: number;
        PacienteId?: number;
        NomeResponsavel?: string;
        PessoaJuridica?: boolean;
        CpfResponsavel?: string;
        CnpjResponsavel?: string;
        EmailNf?: string;
        Padrao?: boolean;
        TipoEnderecoId?: number;
        Rua?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        CodigoIbgeCidade?: string;
        Estado?: string;
        CodigoIbgeEstado?: string;
        Pais?: string;
        Cep?: string;
        Referencia?: string;
        PacienteMatricula?: string;
        Paciente?: string;
        TipoEndereco?: string;
        TipoEnderecoPessoaFisica?: boolean;
        TipoEnderecoOrdem?: number;
    }
    namespace PacientesEmissaoNfRow {
        const idProperty = "PacienteEmissaoNf";
        const nameProperty = "NomeResponsavel";
        const localTextPrefix = "Clinica.PacientesEmissaoNf";
        const lookupKey = "Clinica.PacientesEmissaoNf";
        namespace Fields {
            const PacienteEmissaoNf: string;
            const PacienteId: string;
            const NomeResponsavel: string;
            const PessoaJuridica: string;
            const CpfResponsavel: string;
            const CnpjResponsavel: string;
            const EmailNf: string;
            const Padrao: string;
            const TipoEnderecoId: string;
            const Rua: string;
            const Numero: string;
            const Complemento: string;
            const Bairro: string;
            const Cidade: string;
            const CodigoIbgeCidade: string;
            const Estado: string;
            const CodigoIbgeEstado: string;
            const Pais: string;
            const Cep: string;
            const Referencia: string;
            const PacienteMatricula: string;
            const Paciente: string;
            const TipoEndereco: string;
            const TipoEnderecoPessoaFisica: string;
            const TipoEnderecoOrdem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace PacientesEmissaoNfService {
        const baseUrl = "Clinica/PacientesEmissaoNf";
        function Create(request: Serenity.SaveRequest<PacientesEmissaoNfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacientesEmissaoNfRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacientesEmissaoNfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacientesEmissaoNfRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    class PacientesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PacientesForm {
        PacienteIdControlMedic: Serenity.IntegerEditor;
        PacienteIdGestorMedico: Serenity.IntegerEditor;
        DataCadastro: Serenity.DateTimeEditor;
        DataUltimaAtualizacao: Serenity.DateTimeEditor;
        Matricula: Serenity.StringEditor;
        StatusId: Serenity.LookupEditor;
        Paciente: Serenity.StringEditor;
        SexoId: Serenity.LookupEditor;
        DataNascimento: Serenity.DateEditor;
        Especial: Serenity.BooleanEditor;
        Pai: Serenity.StringEditor;
        Mae: Serenity.StringEditor;
        Responsavel: Serenity.StringEditor;
        CNS: Serenity.StringEditor;
        CarteiraIdentidade: Serenity.StringEditor;
        CPF: Serenity.MaskedEditor;
        Observacao: Serenity.TextAreaEditor;
        DisturbiosAssociados: Serenity.TextAreaEditor;
        Foto: Serenity.ImageUploadEditor;
        DataFoto: Serenity.DateEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface PacientesRow {
        PacienteId?: number;
        DataCadastro?: string;
        DataUltimaAtualizacao?: string;
        Matricula?: string;
        StatusId?: number;
        Paciente?: string;
        Especial?: boolean;
        Pai?: string;
        Mae?: string;
        SexoId?: number;
        DataNascimento?: string;
        CNS?: string;
        CarteiraIdentidade?: string;
        CPF?: string;
        Observacao?: string;
        DisturbiosAssociados?: string;
        Responsavel?: string;
        Foto?: string;
        DataFoto?: string;
        PacienteIdControlMedic?: number;
        PacienteIdGestorMedico?: number;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
        Sexo?: string;
        SexoAbreviatura?: string;
        Status?: string;
    }
    namespace PacientesRow {
        const idProperty = "PacienteId";
        const nameProperty = "Paciente";
        const localTextPrefix = "Clinica.Pacientes";
        const lookupKey = "Clinica.Pacientes";
        namespace Fields {
            const PacienteId: string;
            const DataCadastro: string;
            const DataUltimaAtualizacao: string;
            const Matricula: string;
            const StatusId: string;
            const Paciente: string;
            const Especial: string;
            const Pai: string;
            const Mae: string;
            const SexoId: string;
            const DataNascimento: string;
            const CNS: string;
            const CarteiraIdentidade: string;
            const CPF: string;
            const Observacao: string;
            const DisturbiosAssociados: string;
            const Responsavel: string;
            const Foto: string;
            const DataFoto: string;
            const PacienteIdControlMedic: string;
            const PacienteIdGestorMedico: string;
            const ContatosList: string;
            const EnderecosList: string;
            const Sexo: string;
            const SexoAbreviatura: string;
            const Status: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace PacientesService {
        const baseUrl = "Clinica/Pacientes";
        function Create(request: Serenity.SaveRequest<PacientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PacientesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PacientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PacientesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class PorcentagemForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PorcentagemForm {
        ProfissionalId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.LookupEditor;
        ValorPorcentagem: Serenity.DecimalEditor;
        ValorFixo: Serenity.DecimalEditor;
        IdMostraFixo: Serenity.BooleanEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface PorcentagemRow {
        PorcentagemId?: number;
        ProfissionalId?: number;
        ProcedimentoId?: number;
        ValorPorcentagem?: number;
        ValorFixo?: number;
        IdMostraFixo?: boolean;
        DataCadastrada?: string;
        DataInicio?: string;
        DataFim?: string;
        Observacao?: string;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
        ProcedimentoTabelaId?: number;
        Procedimento?: string;
        ProcedimentoCodigo?: string;
        ProcedimentoCh?: number;
        ProcedimentoCodigoCbhpm?: string;
        ProcedimentoCodigoTuss?: string;
        ProcedimentoDataCadastrada?: string;
        ProcedimentoIdCodigoRegistrado?: boolean;
    }
    namespace PorcentagemRow {
        const idProperty = "PorcentagemId";
        const nameProperty = "Observacao";
        const localTextPrefix = "Clinica.Porcentagem";
        const lookupKey = "Clinica.Porcentagem";
        function getLookup(): Q.Lookup<PorcentagemRow>;
        namespace Fields {
            const PorcentagemId: string;
            const ProfissionalId: string;
            const ProcedimentoId: string;
            const ValorPorcentagem: string;
            const ValorFixo: string;
            const IdMostraFixo: string;
            const DataCadastrada: string;
            const DataInicio: string;
            const DataFim: string;
            const Observacao: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
            const ProcedimentoTabelaId: string;
            const Procedimento: string;
            const ProcedimentoCodigo: string;
            const ProcedimentoCh: string;
            const ProcedimentoCodigoCbhpm: string;
            const ProcedimentoCodigoTuss: string;
            const ProcedimentoDataCadastrada: string;
            const ProcedimentoIdCodigoRegistrado: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace PorcentagemService {
        const baseUrl = "Clinica/Porcentagem";
        function Create(request: Serenity.SaveRequest<PorcentagemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PorcentagemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PorcentagemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PorcentagemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProcedimentosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProcedimentosForm {
        TabelaId: Serenity.LookupEditor;
        Procedimento: Serenity.TextAreaEditor;
        Codigo: Serenity.StringEditor;
        Ch: Serenity.DecimalEditor;
        CodigoCbhpm: Serenity.StringEditor;
        CodigoTuss: Serenity.StringEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        IdCodigoRegistrado: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProcedimentosRow {
        ProcedimentoId?: number;
        TabelaId?: number;
        Procedimento?: string;
        Codigo?: string;
        Ch?: number;
        CodigoCbhpm?: string;
        CodigoTuss?: string;
        DataCadastrada?: string;
        IdCodigoRegistrado?: boolean;
        TabelaDescricao?: string;
    }
    namespace ProcedimentosRow {
        const idProperty = "ProcedimentoId";
        const nameProperty = "Procedimento";
        const localTextPrefix = "Clinica.Procedimentos";
        const lookupKey = "Clinica.Procedimentos";
        function getLookup(): Q.Lookup<ProcedimentosRow>;
        namespace Fields {
            const ProcedimentoId: string;
            const TabelaId: string;
            const Procedimento: string;
            const Codigo: string;
            const Ch: string;
            const CodigoCbhpm: string;
            const CodigoTuss: string;
            const DataCadastrada: string;
            const IdCodigoRegistrado: string;
            const TabelaDescricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProcedimentosService {
        const baseUrl = "Clinica/Procedimentos";
        function Create(request: Serenity.SaveRequest<ProcedimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcedimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcedimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcedimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProdutosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProdutosForm {
        DescricaoProduto: Serenity.TextAreaEditor;
        TipoProdutoId: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        DescricaoResumida: Serenity.StringEditor;
        ValorVenda: Serenity.DecimalEditor;
        ValorCusto: Serenity.DecimalEditor;
        MargemLucroMinima: Serenity.DecimalEditor;
        FornecedorId: Serenity.LookupEditor;
        GrupoProdutoId: Serenity.IntegerEditor;
        UnidadeId: Serenity.IntegerEditor;
        ObservacaoProduto: Serenity.TextAreaEditor;
        Ativo: Serenity.BooleanEditor;
        DataCriacao: Serenity.DateTimeEditor;
        LoginIdCriacao: Serenity.IntegerEditor;
        Inativo: Serenity.BooleanEditor;
        DataInativo: Serenity.DateTimeEditor;
        LoginIdInativo: Serenity.IntegerEditor;
        PlanoContaId: Serenity.IntegerEditor;
        NcmId: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProdutosRow {
        ProdutoId?: number;
        DescricaoProduto?: string;
        TipoProdutoId?: number;
        Descricao?: string;
        DescricaoResumida?: string;
        ValorVenda?: number;
        ValorCusto?: number;
        MargemLucroMinima?: number;
        FornecedorId?: number;
        GrupoProdutoId?: number;
        UnidadeId?: number;
        ObservacaoProduto?: string;
        Ativo?: boolean;
        DataCriacao?: string;
        LoginIdCriacao?: number;
        Inativo?: boolean;
        DataInativo?: string;
        LoginIdInativo?: number;
        PlanoContaId?: number;
        NcmId?: number;
        FornecedorStatus?: boolean;
        FornecedorPessoaJuridica?: boolean;
        FornecedorRazaoSocial?: string;
        FornecedorNomeFantasia?: string;
        FornecedorNomeAbreviado?: string;
        FornecedorCpf?: string;
        FornecedorRg?: string;
        FornecedorCnpj?: string;
        FornecedorInscricaoEstadual?: string;
        FornecedorInscricaoMunicipal?: string;
        FornecedorSite?: string;
        FornecedorTelefone?: string;
        FornecedorFax?: string;
        FornecedorTelefoneAlternativo?: string;
        FornecedorEmailCorporativo?: string;
        FornecedorAceitaReceberEmail?: boolean;
        FornecedorMotivoStatus?: string;
        FornecedorQuantidadeEmpregados?: number;
        FornecedorAtividadeEmpresaId?: number;
        FornecedorReceitaAnual?: number;
        FornecedorMarcasTrabalhadas?: string;
        FornecedorObservacoesGerais?: string;
        FornecedorDataCriacao?: string;
        FornecedorDataAlteracao?: string;
        FornecedorInativo?: boolean;
        FornecedorDataInativo?: string;
    }
    namespace ProdutosRow {
        const idProperty = "ProdutoId";
        const nameProperty = "DescricaoProduto";
        const localTextPrefix = "Clinica.Produtos";
        const lookupKey = "Clinica.Produtos";
        function getLookup(): Q.Lookup<ProdutosRow>;
        namespace Fields {
            const ProdutoId: string;
            const DescricaoProduto: string;
            const TipoProdutoId: string;
            const Descricao: string;
            const DescricaoResumida: string;
            const ValorVenda: string;
            const ValorCusto: string;
            const MargemLucroMinima: string;
            const FornecedorId: string;
            const GrupoProdutoId: string;
            const UnidadeId: string;
            const ObservacaoProduto: string;
            const Ativo: string;
            const DataCriacao: string;
            const LoginIdCriacao: string;
            const Inativo: string;
            const DataInativo: string;
            const LoginIdInativo: string;
            const PlanoContaId: string;
            const NcmId: string;
            const FornecedorStatus: string;
            const FornecedorPessoaJuridica: string;
            const FornecedorRazaoSocial: string;
            const FornecedorNomeFantasia: string;
            const FornecedorNomeAbreviado: string;
            const FornecedorCpf: string;
            const FornecedorRg: string;
            const FornecedorCnpj: string;
            const FornecedorInscricaoEstadual: string;
            const FornecedorInscricaoMunicipal: string;
            const FornecedorSite: string;
            const FornecedorTelefone: string;
            const FornecedorFax: string;
            const FornecedorTelefoneAlternativo: string;
            const FornecedorEmailCorporativo: string;
            const FornecedorAceitaReceberEmail: string;
            const FornecedorMotivoStatus: string;
            const FornecedorQuantidadeEmpregados: string;
            const FornecedorAtividadeEmpresaId: string;
            const FornecedorReceitaAnual: string;
            const FornecedorMarcasTrabalhadas: string;
            const FornecedorObservacoesGerais: string;
            const FornecedorDataCriacao: string;
            const FornecedorDataAlteracao: string;
            const FornecedorInativo: string;
            const FornecedorDataInativo: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProdutosService {
        const baseUrl = "Clinica/Produtos";
        function Create(request: Serenity.SaveRequest<ProdutosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProdutosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProdutosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProdutosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProfissionaisAgendasBloqueiosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProfissionaisAgendasBloqueiosForm {
        ProfissionalId: Serenity.LookupEditor;
        EscalaId: Serenity.LookupEditor;
        DataHora: Serenity.DateTimeEditor;
        Descricao: Serenity.StringEditor;
        DiaInteiro: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProfissionaisAgendasBloqueiosRow {
        ProfissionalAgendaBloqueioId?: number;
        ProfissionalId?: number;
        EscalaId?: number;
        DataHora?: string;
        Descricao?: string;
        DiaInteiro?: boolean;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
        EscalaProfissionalId?: number;
        EscalaDescricao?: string;
        EscalaPrincipal?: boolean;
    }
    namespace ProfissionaisAgendasBloqueiosRow {
        const idProperty = "ProfissionalAgendaBloqueioId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.ProfissionaisAgendasBloqueios";
        const lookupKey = "Clinica.ProfissionaisAgendasBloqueios";
        function getLookup(): Q.Lookup<ProfissionaisAgendasBloqueiosRow>;
        namespace Fields {
            const ProfissionalAgendaBloqueioId: string;
            const ProfissionalId: string;
            const EscalaId: string;
            const DataHora: string;
            const Descricao: string;
            const DiaInteiro: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
            const EscalaProfissionalId: string;
            const EscalaDescricao: string;
            const EscalaPrincipal: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProfissionaisAgendasBloqueiosService {
        const baseUrl = "Clinica/ProfissionaisAgendasBloqueios";
        function Create(request: Serenity.SaveRequest<ProfissionaisAgendasBloqueiosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProfissionaisAgendasBloqueiosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProfissionaisAgendasBloqueiosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProfissionaisAgendasBloqueiosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProfissionaisAgendasExcecoesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProfissionaisAgendasExcecoesForm {
        ProfissionalId: Serenity.LookupEditor;
        DataInicial: Serenity.DateTimeEditor;
        DataFinal: Serenity.DateTimeEditor;
        Descricao: Serenity.StringEditor;
        DiaInteiro: Serenity.BooleanEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProfissionaisAgendasExcecoesRow {
        ProfissionalAgendaExcecaoId?: number;
        ProfissionalId?: number;
        DataInicial?: string;
        DataFinal?: string;
        Descricao?: string;
        DiaInteiro?: boolean;
        Ativo?: boolean;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
    }
    namespace ProfissionaisAgendasExcecoesRow {
        const idProperty = "ProfissionalAgendaExcecaoId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.ProfissionaisAgendasExcecoes";
        const lookupKey = "Clinica.ProfissionaisAgendasExcecoes";
        function getLookup(): Q.Lookup<ProfissionaisAgendasExcecoesRow>;
        namespace Fields {
            const ProfissionalAgendaExcecaoId: string;
            const ProfissionalId: string;
            const DataInicial: string;
            const DataFinal: string;
            const Descricao: string;
            const DiaInteiro: string;
            const Ativo: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProfissionaisAgendasExcecoesService {
        const baseUrl = "Clinica/ProfissionaisAgendasExcecoes";
        function Create(request: Serenity.SaveRequest<ProfissionaisAgendasExcecoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProfissionaisAgendasExcecoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProfissionaisAgendasExcecoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProfissionaisAgendasExcecoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    class ProfissionaisAgendasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProfissionaisAgendasForm {
        ProfissionalId: Serenity.LookupEditor;
        EscalaId: Serenity.LookupEditor;
        DiaSemanaId: Serenity.LookupEditor;
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProfissionaisAgendasHorasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProfissionaisAgendasHorasForm {
        ProfissionalAgendaId: Serenity.IntegerEditor;
        Horario: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProfissionaisAgendasHorasRow {
        ProfissionalAgendaHoraId?: number;
        ProfissionalAgendaId?: number;
        Horario?: string;
    }
    namespace ProfissionaisAgendasHorasRow {
        const idProperty = "ProfissionalAgendaHoraId";
        const localTextPrefix = "Clinica.ProfissionaisAgendasHoras";
        const lookupKey = "Clinica.ProfissionaisAgendasHoras";
        function getLookup(): Q.Lookup<ProfissionaisAgendasHorasRow>;
        namespace Fields {
            const ProfissionalAgendaHoraId: string;
            const ProfissionalAgendaId: string;
            const Horario: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProfissionaisAgendasHorasService {
        const baseUrl = "Clinica/ProfissionaisAgendasHoras";
        function Create(request: Serenity.SaveRequest<ProfissionaisAgendasHorasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProfissionaisAgendasHorasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProfissionaisAgendasHorasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProfissionaisAgendasHorasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    interface ProfissionaisAgendasRow {
        ProfissionalAgendaId?: number;
        ProfissionalId?: number;
        EscalaId?: number;
        DiaSemanaId?: number;
        ProfissionalAgendaProfissionalAgendaId?: number;
        ProfissionalAgendaHorario?: string;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
        EscalaProfissionalId?: number;
        EscalaDescricao?: string;
        EscalaPrincipal?: boolean;
        DiaSemanaDescricao?: string;
    }
    namespace ProfissionaisAgendasRow {
        const idProperty = "ProfissionalAgendaId";
        const localTextPrefix = "Clinica.ProfissionaisAgendas";
        const lookupKey = "Clinica.ProfissionaisAgendas";
        function getLookup(): Q.Lookup<ProfissionaisAgendasRow>;
        namespace Fields {
            const ProfissionalAgendaId: string;
            const ProfissionalId: string;
            const EscalaId: string;
            const DiaSemanaId: string;
            const ProfissionalAgendaProfissionalAgendaId: string;
            const ProfissionalAgendaHorario: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
            const EscalaProfissionalId: string;
            const EscalaDescricao: string;
            const EscalaPrincipal: string;
            const DiaSemanaDescricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProfissionaisAgendasService {
        const baseUrl = "Clinica/ProfissionaisAgendas";
        function Create(request: Serenity.SaveRequest<ProfissionaisAgendasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProfissionaisAgendasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProfissionaisAgendasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProfissionaisAgendasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProfissionaisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProfissionaisForm {
        IdAtivo: Serenity.BooleanEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        MotivoEncerramento: Serenity.TextAreaEditor;
        Profissional: Serenity.StringEditor;
        Pai: Serenity.StringEditor;
        Mae: Serenity.StringEditor;
        SexoId: Serenity.LookupEditor;
        DataNascimento: Serenity.DateTimeEditor;
        EstadoCivilId: Serenity.LookupEditor;
        CarteiraIdentidade: Serenity.StringEditor;
        Cpf: Serenity.MaskedEditor;
        Cnes: Serenity.StringEditor;
        TipoProfissionalId: Serenity.LookupEditor;
        ConselhoProfissionalId: Serenity.LookupEditor;
        NumeroConselho: Serenity.StringEditor;
        UfConselhoProfissional: Serenity.StringEditor;
        Cbosid: Serenity.LookupEditor;
        ProntuarioSigiloso: Serenity.BooleanEditor;
        Observacao: Serenity.TextAreaEditor;
        PessoaJuridica: Serenity.BooleanEditor;
        Cnpj: Serenity.MaskedEditor;
        DataInicioContrato: Serenity.DateTimeEditor;
        DataFimContrato: Serenity.DateTimeEditor;
        MotivoEncerramentoContrato: Serenity.TextAreaEditor;
        ContatosList: ContatosEditor;
        EnderecosList: EnderecosEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProfissionaisRow {
        ProfissionalId?: number;
        IdAtivo?: boolean;
        DataInicio?: string;
        DataFim?: string;
        MotivoEncerramento?: string;
        Profissional?: string;
        Pai?: string;
        Mae?: string;
        SexoId?: number;
        DataNascimento?: string;
        EstadoCivilId?: number;
        CarteiraIdentidade?: string;
        Cpf?: string;
        Cnes?: string;
        TipoProfissionalId?: number;
        ConselhoProfissionalId?: number;
        NumeroConselho?: string;
        UfConselhoProfissional?: string;
        Cbosid?: number;
        ProntuarioSigiloso?: boolean;
        Observacao?: string;
        PessoaJuridica?: boolean;
        Cnpj?: string;
        DataInicioContrato?: string;
        DataFimContrato?: string;
        MotivoEncerramentoContrato?: string;
        ContatosList?: ContatosRow[];
        EnderecosList?: EnderecosRow[];
        Sexo?: string;
        SexoAbreviatura?: string;
        EstadoCivilDescricao?: string;
        TipoProfissionalDescricao?: string;
        ConselhoProfissionalDescricao?: string;
        CbosidCodigo?: string;
        CbosidCbos?: string;
    }
    namespace ProfissionaisRow {
        const idProperty = "ProfissionalId";
        const nameProperty = "MotivoEncerramento";
        const localTextPrefix = "Clinica.Profissionais";
        const lookupKey = "Clinica.Profissionais";
        function getLookup(): Q.Lookup<ProfissionaisRow>;
        namespace Fields {
            const ProfissionalId: string;
            const IdAtivo: string;
            const DataInicio: string;
            const DataFim: string;
            const MotivoEncerramento: string;
            const Profissional: string;
            const Pai: string;
            const Mae: string;
            const SexoId: string;
            const DataNascimento: string;
            const EstadoCivilId: string;
            const CarteiraIdentidade: string;
            const Cpf: string;
            const Cnes: string;
            const TipoProfissionalId: string;
            const ConselhoProfissionalId: string;
            const NumeroConselho: string;
            const UfConselhoProfissional: string;
            const Cbosid: string;
            const ProntuarioSigiloso: string;
            const Observacao: string;
            const PessoaJuridica: string;
            const Cnpj: string;
            const DataInicioContrato: string;
            const DataFimContrato: string;
            const MotivoEncerramentoContrato: string;
            const ContatosList: string;
            const EnderecosList: string;
            const Sexo: string;
            const SexoAbreviatura: string;
            const EstadoCivilDescricao: string;
            const TipoProfissionalDescricao: string;
            const ConselhoProfissionalDescricao: string;
            const CbosidCodigo: string;
            const CbosidCbos: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProfissionaisService {
        const baseUrl = "Clinica/Profissionais";
        function Create(request: Serenity.SaveRequest<ProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProtocolosDetalhadosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProtocolosDetalhadosForm {
        ProtocoloId: Serenity.LookupEditor;
        ItemDescricao: Serenity.TextAreaEditor;
        Arquivos: Serenity.TextAreaEditor;
        Observacao: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProtocolosDetalhadosRow {
        ProtocoloDetalhadoId?: number;
        ProtocoloId?: number;
        ItemDescricao?: string;
        Arquivos?: string;
        Observacao?: string;
        Protocolo?: string;
        ProtocoloTipoProtocoloId?: number;
        ProtocoloConvenioId?: number;
        ProtocoloResponsável?: string;
        ProtocoloAssunto?: string;
        ProtocoloDataEnvio?: string;
        ProtocoloDataRetorno?: string;
        ProtocoloResolvido?: boolean;
        ProtocoloDataResolvido?: string;
        ProtocoloDecisaoTomada?: string;
    }
    namespace ProtocolosDetalhadosRow {
        const idProperty = "ProtocoloDetalhadoId";
        const nameProperty = "ItemDescricao";
        const localTextPrefix = "Clinica.ProtocolosDetalhados";
        const lookupKey = "Clinica.ProtocolosDetalhados";
        function getLookup(): Q.Lookup<ProtocolosDetalhadosRow>;
        namespace Fields {
            const ProtocoloDetalhadoId: string;
            const ProtocoloId: string;
            const ItemDescricao: string;
            const Arquivos: string;
            const Observacao: string;
            const Protocolo: string;
            const ProtocoloTipoProtocoloId: string;
            const ProtocoloConvenioId: string;
            const ProtocoloResponsável: string;
            const ProtocoloAssunto: string;
            const ProtocoloDataEnvio: string;
            const ProtocoloDataRetorno: string;
            const ProtocoloResolvido: string;
            const ProtocoloDataResolvido: string;
            const ProtocoloDecisaoTomada: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProtocolosDetalhadosService {
        const baseUrl = "Clinica/ProtocolosDetalhados";
        function Create(request: Serenity.SaveRequest<ProtocolosDetalhadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProtocolosDetalhadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProtocolosDetalhadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProtocolosDetalhadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ProtocolosEnvolvidosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProtocolosEnvolvidosForm {
        ProtocoloId: Serenity.LookupEditor;
        TipoEnvolvimentoId: Serenity.LookupEditor;
        ProfissionalId: Serenity.LookupEditor;
        PacienteId: Serenity.LookupEditor;
        FuncionarioId: Serenity.IntegerEditor;
        FornecedorId: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProtocolosEnvolvidosRow {
        ProtocoloEnvolvidoId?: number;
        ProtocoloId?: number;
        TipoEnvolvimentoId?: number;
        ProfissionalId?: number;
        PacienteId?: number;
        FuncionarioId?: number;
        FornecedorId?: number;
        Protocolo?: string;
        ProtocoloTipoProtocoloId?: number;
        ProtocoloConvenioId?: number;
        ProtocoloResponsável?: string;
        ProtocoloAssunto?: string;
        ProtocoloDataEnvio?: string;
        ProtocoloDataRetorno?: string;
        ProtocoloResolvido?: boolean;
        ProtocoloDataResolvido?: string;
        ProtocoloDecisaoTomada?: string;
        TipoEnvolvimentoDescricao?: string;
        ProfissionalIdAtivo?: boolean;
        ProfissionalDataInicio?: string;
        ProfissionalDataFim?: string;
        ProfissionalMotivoEncerramento?: string;
        Profissional?: string;
        ProfissionalPai?: string;
        ProfissionalMae?: string;
        ProfissionalSexoId?: number;
        ProfissionalDataNascimento?: string;
        ProfissionalEstadoCivilId?: number;
        ProfissionalCarteiraIdentidade?: string;
        ProfissionalCpf?: string;
        ProfissionalCnes?: string;
        ProfissionalTipoProfissionalId?: number;
        ProfissionalConselhoProfissionalId?: number;
        ProfissionalNumeroConselho?: string;
        ProfissionalUfConselhoProfissional?: string;
        ProfissionalCbosid?: number;
        ProfissionalProntuarioSigiloso?: boolean;
        ProfissionalObservacao?: string;
        ProfissionalPessoaJuridica?: boolean;
        ProfissionalCnpj?: string;
        ProfissionalDataInicioContrato?: string;
        ProfissionalDataFimContrato?: string;
        ProfissionalMotivoEncerramentoContrato?: string;
        PacienteDataCadastro?: string;
        PacienteDataUltimaAtualizacao?: string;
        PacienteMatricula?: string;
        PacienteStatusId?: number;
        Paciente?: string;
        PacienteEspecial?: boolean;
        PacientePai?: string;
        PacienteMae?: string;
        PacienteSexoId?: number;
        PacienteDataNascimento?: string;
        PacienteCns?: string;
        PacienteCarteiraIdentidade?: string;
        PacienteCpf?: string;
        PacienteObservacao?: string;
        PacienteDisturbiosAssociados?: string;
        PacienteResponsavel?: string;
        PacienteNotaFiscalTerceiro?: boolean;
        PacienteNotaFiscalNome?: string;
        PacienteNotaFiscalCpf?: string;
        PacienteNotaFiscalCnpj?: string;
        PacienteNotaFiscalEndereco?: string;
        PacienteNotaFiscalNumero?: string;
        PacienteNotaFiscalBairro?: string;
        PacienteNotaFiscalCidade?: string;
        PacienteNotaFiscalEstadoId?: string;
        PacienteNotaFiscalEmail?: string;
        PacienteFoto?: string;
        PacienteDataFoto?: string;
        PacientePacienteIdControlMedic?: number;
        PacientePacienteIdGestorMedico?: number;
    }
    namespace ProtocolosEnvolvidosRow {
        const idProperty = "ProtocoloEnvolvidoId";
        const localTextPrefix = "Clinica.ProtocolosEnvolvidos";
        const lookupKey = "Clinica.ProtocolosEnvolvidos";
        function getLookup(): Q.Lookup<ProtocolosEnvolvidosRow>;
        namespace Fields {
            const ProtocoloEnvolvidoId: string;
            const ProtocoloId: string;
            const TipoEnvolvimentoId: string;
            const ProfissionalId: string;
            const PacienteId: string;
            const FuncionarioId: string;
            const FornecedorId: string;
            const Protocolo: string;
            const ProtocoloTipoProtocoloId: string;
            const ProtocoloConvenioId: string;
            const ProtocoloResponsável: string;
            const ProtocoloAssunto: string;
            const ProtocoloDataEnvio: string;
            const ProtocoloDataRetorno: string;
            const ProtocoloResolvido: string;
            const ProtocoloDataResolvido: string;
            const ProtocoloDecisaoTomada: string;
            const TipoEnvolvimentoDescricao: string;
            const ProfissionalIdAtivo: string;
            const ProfissionalDataInicio: string;
            const ProfissionalDataFim: string;
            const ProfissionalMotivoEncerramento: string;
            const Profissional: string;
            const ProfissionalPai: string;
            const ProfissionalMae: string;
            const ProfissionalSexoId: string;
            const ProfissionalDataNascimento: string;
            const ProfissionalEstadoCivilId: string;
            const ProfissionalCarteiraIdentidade: string;
            const ProfissionalCpf: string;
            const ProfissionalCnes: string;
            const ProfissionalTipoProfissionalId: string;
            const ProfissionalConselhoProfissionalId: string;
            const ProfissionalNumeroConselho: string;
            const ProfissionalUfConselhoProfissional: string;
            const ProfissionalCbosid: string;
            const ProfissionalProntuarioSigiloso: string;
            const ProfissionalObservacao: string;
            const ProfissionalPessoaJuridica: string;
            const ProfissionalCnpj: string;
            const ProfissionalDataInicioContrato: string;
            const ProfissionalDataFimContrato: string;
            const ProfissionalMotivoEncerramentoContrato: string;
            const PacienteDataCadastro: string;
            const PacienteDataUltimaAtualizacao: string;
            const PacienteMatricula: string;
            const PacienteStatusId: string;
            const Paciente: string;
            const PacienteEspecial: string;
            const PacientePai: string;
            const PacienteMae: string;
            const PacienteSexoId: string;
            const PacienteDataNascimento: string;
            const PacienteCns: string;
            const PacienteCarteiraIdentidade: string;
            const PacienteCpf: string;
            const PacienteObservacao: string;
            const PacienteDisturbiosAssociados: string;
            const PacienteResponsavel: string;
            const PacienteNotaFiscalTerceiro: string;
            const PacienteNotaFiscalNome: string;
            const PacienteNotaFiscalCpf: string;
            const PacienteNotaFiscalCnpj: string;
            const PacienteNotaFiscalEndereco: string;
            const PacienteNotaFiscalNumero: string;
            const PacienteNotaFiscalBairro: string;
            const PacienteNotaFiscalCidade: string;
            const PacienteNotaFiscalEstadoId: string;
            const PacienteNotaFiscalEmail: string;
            const PacienteFoto: string;
            const PacienteDataFoto: string;
            const PacientePacienteIdControlMedic: string;
            const PacientePacienteIdGestorMedico: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProtocolosEnvolvidosService {
        const baseUrl = "Clinica/ProtocolosEnvolvidos";
        function Create(request: Serenity.SaveRequest<ProtocolosEnvolvidosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProtocolosEnvolvidosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProtocolosEnvolvidosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProtocolosEnvolvidosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    class ProtocolosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProtocolosForm {
        Protocolo: Serenity.TextAreaEditor;
        TipoProtocoloId: Serenity.LookupEditor;
        ConvenioId: Serenity.IntegerEditor;
        Responsável: Serenity.StringEditor;
        Assunto: Serenity.TextAreaEditor;
        DataEnvio: Serenity.DateTimeEditor;
        DataRetorno: Serenity.DateTimeEditor;
        Resolvido: Serenity.BooleanEditor;
        DataResolvido: Serenity.DateTimeEditor;
        DecisaoTomada: Serenity.TextAreaEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ProtocolosRow {
        ProtocoloId?: number;
        Protocolo?: string;
        TipoProtocoloId?: number;
        ConvenioId?: number;
        Responsável?: string;
        Assunto?: string;
        DataEnvio?: string;
        DataRetorno?: string;
        Resolvido?: boolean;
        DataResolvido?: string;
        DecisaoTomada?: string;
        TipoProtocoloDescricao?: string;
    }
    namespace ProtocolosRow {
        const idProperty = "ProtocoloId";
        const nameProperty = "Protocolo";
        const localTextPrefix = "Clinica.Protocolos";
        const lookupKey = "Clinica.Protocolos";
        function getLookup(): Q.Lookup<ProtocolosRow>;
        namespace Fields {
            const ProtocoloId: string;
            const Protocolo: string;
            const TipoProtocoloId: string;
            const ConvenioId: string;
            const Responsável: string;
            const Assunto: string;
            const DataEnvio: string;
            const DataRetorno: string;
            const Resolvido: string;
            const DataResolvido: string;
            const DecisaoTomada: string;
            const TipoProtocoloDescricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ProtocolosService {
        const baseUrl = "Clinica/Protocolos";
        function Create(request: Serenity.SaveRequest<ProtocolosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProtocolosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProtocolosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProtocolosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class SessoesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SessoesForm {
        IdPrimeiraSessao: Serenity.BooleanEditor;
        OrdemSessao: Serenity.IntegerEditor;
        GuiaId: Serenity.IntegerEditor;
        AgendaItemId: Serenity.LookupEditor;
        LoteId: Serenity.LookupEditor;
        StatusSessaoId: Serenity.LookupEditor;
        ProfissionalIdExecutante: Serenity.IntegerEditor;
        ValorId: Serenity.LookupEditor;
        TipoItemId: Serenity.IntegerEditor;
        TipoTabelaId: Serenity.IntegerEditor;
        ProcedimentoId: Serenity.IntegerEditor;
        ConvenioId: Serenity.IntegerEditor;
        CodigoProcedimento: Serenity.StringEditor;
        Procedimento: Serenity.TextAreaEditor;
        ValorSessao: Serenity.DecimalEditor;
        QuantidadeSessao: Serenity.IntegerEditor;
        ReducaoAcrescimo: Serenity.DecimalEditor;
        DataSessao: Serenity.DateTimeEditor;
        HoraInicioSessao: Serenity.StringEditor;
        HoraFimSessao: Serenity.StringEditor;
        ValorPago: Serenity.DecimalEditor;
        DataPago: Serenity.DateTimeEditor;
        ValorGlosado: Serenity.DecimalEditor;
        CodigoGlosa: Serenity.StringEditor;
        MotivoGlosa: Serenity.TextAreaEditor;
        StatusGlosaId: Serenity.IntegerEditor;
        ProtocoloRecurso: Serenity.StringEditor;
        DataRecurso: Serenity.DateTimeEditor;
        Recurso: Serenity.TextAreaEditor;
        DataRespostaRecurso: Serenity.DateTimeEditor;
        SituacaoRespostaRecurso: Serenity.StringEditor;
        RespostaRecurso: Serenity.TextAreaEditor;
        ValorRecursoPago: Serenity.DecimalEditor;
        ProtocoloUltimoRecurso: Serenity.StringEditor;
        DataUltimoRecurso: Serenity.DateTimeEditor;
        UltimoRecurso: Serenity.TextAreaEditor;
        DataRespostaUltimoRecurso: Serenity.DateTimeEditor;
        SituacaoRespostaUltimoRecurso: Serenity.StringEditor;
        RespostaUltimoRecurso: Serenity.TextAreaEditor;
        ValorUltimoRecursoPago: Serenity.DecimalEditor;
        QuantidadeRecursos: Serenity.IntegerEditor;
        Observacoes: Serenity.TextAreaEditor;
        SequenciaItens: Serenity.IntegerEditor;
        Sequencia: Serenity.IntegerEditor;
        DemonstrativoItemId: Serenity.IntegerEditor;
        DemonstrativoItemIdGlosa: Serenity.IntegerEditor;
        IdAuditada: Serenity.BooleanEditor;
        DataAuditoria: Serenity.DateTimeEditor;
        IdAuditoriaAprovada: Serenity.BooleanEditor;
        ConclusaoAuditoria: Serenity.TextAreaEditor;
        IdPagoProfissional: Serenity.BooleanEditor;
        ValorFixo: Serenity.BooleanEditor;
        PorcentagemAplicadaProfissional: Serenity.DecimalEditor;
        ValorPagoProfissional: Serenity.DecimalEditor;
        DataPagoProfissional: Serenity.DateTimeEditor;
        FolhaPagamentoProfissionalId: Serenity.LookupEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface SessoesRow {
        SessaoId?: number;
        IdPrimeiraSessao?: boolean;
        OrdemSessao?: number;
        GuiaId?: number;
        AgendaItemId?: number;
        LoteId?: number;
        StatusSessaoId?: number;
        ProfissionalIdExecutante?: number;
        ValorId?: number;
        TipoItemId?: number;
        TipoTabelaId?: number;
        ProcedimentoId?: number;
        ConvenioId?: number;
        CodigoProcedimento?: string;
        Procedimento?: string;
        ValorSessao?: number;
        QuantidadeSessao?: number;
        ReducaoAcrescimo?: number;
        DataSessao?: string;
        HoraInicioSessao?: string;
        HoraFimSessao?: string;
        ValorPago?: number;
        DataPago?: string;
        ValorGlosado?: number;
        CodigoGlosa?: string;
        MotivoGlosa?: string;
        StatusGlosaId?: number;
        ProtocoloRecurso?: string;
        DataRecurso?: string;
        Recurso?: string;
        DataRespostaRecurso?: string;
        SituacaoRespostaRecurso?: string;
        RespostaRecurso?: string;
        ValorRecursoPago?: number;
        ProtocoloUltimoRecurso?: string;
        DataUltimoRecurso?: string;
        UltimoRecurso?: string;
        DataRespostaUltimoRecurso?: string;
        SituacaoRespostaUltimoRecurso?: string;
        RespostaUltimoRecurso?: string;
        ValorUltimoRecursoPago?: number;
        QuantidadeRecursos?: number;
        Observacoes?: string;
        SequenciaItens?: number;
        Sequencia?: number;
        DemonstrativoItemId?: number;
        DemonstrativoItemIdGlosa?: number;
        IdAuditada?: boolean;
        DataAuditoria?: string;
        IdAuditoriaAprovada?: boolean;
        ConclusaoAuditoria?: string;
        IdPagoProfissional?: boolean;
        ValorFixo?: boolean;
        PorcentagemAplicadaProfissional?: number;
        ValorPagoProfissional?: number;
        DataPagoProfissional?: string;
        FolhaPagamentoProfissionalId?: number;
        AgendaItemTipoGuiaId?: number;
        AgendaItemTipoConsultaId?: number;
        AgendaItemGuia?: string;
        AgendaItemGuiaOperador?: string;
        AgendaItemCarteirinha?: string;
        AgendaItemNomePaciente?: string;
        AgendaItemAutorizacaoId?: number;
        AgendaItemNumeroAutorizacao?: string;
        AgendaItemIdAuditada?: boolean;
        AgendaItemDataAuditoria?: string;
        AgendaItemIdAuditoriaAprovada?: boolean;
        AgendaItemConclusaoAuditoria?: string;
        AgendaItemProfissionalIdSolicitante?: number;
        AgendaItemProfissionalIdExecutante?: number;
        LoteStatusLoteId?: number;
        LoteMovimentacao?: string;
        LoteConvenioId?: number;
        LoteDataEmissaoLote?: string;
        Lote?: string;
        LoteProtocolo?: string;
        LoteLoteConvenio?: string;
        LoteValorLote?: number;
        LoteCapaLote?: string;
        LoteExtrato?: string;
        LoteEnviadoConvenioId?: boolean;
        LoteDataEnviadoConvenio?: string;
        LoteArquivoFisicoEnviadoId?: boolean;
        LoteCartaSimplesId?: boolean;
        LoteSedex?: string;
        LoteArid?: boolean;
        LoteDataRetornoAr?: string;
        LoteValorCorreios?: number;
        LoteArquivos?: string;
        LoteObservacao?: string;
        LoteNfseid?: number;
        LoteNotaFiscal?: string;
        LoteValorNotaFiscal?: number;
        LoteDataEmissaoNotaFiscal?: string;
        LoteEmailNotaFiscal?: string;
        LoteNotaFiscalImpressaId?: boolean;
        LoteNotaFiscalRecebida?: string;
        LoteDataNotaFiscalImpressa?: string;
        StatusSessaoStatus?: string;
        ValorTipoItemId?: number;
        ValorTipoTabelaId?: number;
        ValorProcedimentoId?: number;
        ValorConvenioId?: number;
        ValorValorCh?: number;
        ValorValorSessao?: number;
        ValorDataInicio?: string;
        ValorDataFim?: string;
        ValorObservacao?: string;
        ValorDataCadastrada?: string;
        ValorCodigoRegistrado?: boolean;
        ValorRequerAutorizacao?: boolean;
        ValorTipoAutorizacaoId?: number;
        FolhaPagamentoProfissionalProfissionalId?: number;
        FolhaPagamentoProfissionalNotaFiscalProfissional?: number;
        FolhaPagamentoProfissionalArquivos?: string;
        FolhaPagamentoProfissionalMovimento?: string;
        FolhaPagamentoProfissionalDataPagamento?: string;
        FolhaPagamentoProfissionalValorPago?: number;
        FolhaPagamentoProfissionalDataImpressao?: string;
    }
    namespace SessoesRow {
        const idProperty = "SessaoId";
        const nameProperty = "CodigoProcedimento";
        const localTextPrefix = "Clinica.Sessoes";
        const lookupKey = "Clinica.Sessoes";
        function getLookup(): Q.Lookup<SessoesRow>;
        namespace Fields {
            const SessaoId: string;
            const IdPrimeiraSessao: string;
            const OrdemSessao: string;
            const GuiaId: string;
            const AgendaItemId: string;
            const LoteId: string;
            const StatusSessaoId: string;
            const ProfissionalIdExecutante: string;
            const ValorId: string;
            const TipoItemId: string;
            const TipoTabelaId: string;
            const ProcedimentoId: string;
            const ConvenioId: string;
            const CodigoProcedimento: string;
            const Procedimento: string;
            const ValorSessao: string;
            const QuantidadeSessao: string;
            const ReducaoAcrescimo: string;
            const DataSessao: string;
            const HoraInicioSessao: string;
            const HoraFimSessao: string;
            const ValorPago: string;
            const DataPago: string;
            const ValorGlosado: string;
            const CodigoGlosa: string;
            const MotivoGlosa: string;
            const StatusGlosaId: string;
            const ProtocoloRecurso: string;
            const DataRecurso: string;
            const Recurso: string;
            const DataRespostaRecurso: string;
            const SituacaoRespostaRecurso: string;
            const RespostaRecurso: string;
            const ValorRecursoPago: string;
            const ProtocoloUltimoRecurso: string;
            const DataUltimoRecurso: string;
            const UltimoRecurso: string;
            const DataRespostaUltimoRecurso: string;
            const SituacaoRespostaUltimoRecurso: string;
            const RespostaUltimoRecurso: string;
            const ValorUltimoRecursoPago: string;
            const QuantidadeRecursos: string;
            const Observacoes: string;
            const SequenciaItens: string;
            const Sequencia: string;
            const DemonstrativoItemId: string;
            const DemonstrativoItemIdGlosa: string;
            const IdAuditada: string;
            const DataAuditoria: string;
            const IdAuditoriaAprovada: string;
            const ConclusaoAuditoria: string;
            const IdPagoProfissional: string;
            const ValorFixo: string;
            const PorcentagemAplicadaProfissional: string;
            const ValorPagoProfissional: string;
            const DataPagoProfissional: string;
            const FolhaPagamentoProfissionalId: string;
            const AgendaItemTipoGuiaId: string;
            const AgendaItemTipoConsultaId: string;
            const AgendaItemGuia: string;
            const AgendaItemGuiaOperador: string;
            const AgendaItemCarteirinha: string;
            const AgendaItemNomePaciente: string;
            const AgendaItemAutorizacaoId: string;
            const AgendaItemNumeroAutorizacao: string;
            const AgendaItemIdAuditada: string;
            const AgendaItemDataAuditoria: string;
            const AgendaItemIdAuditoriaAprovada: string;
            const AgendaItemConclusaoAuditoria: string;
            const AgendaItemProfissionalIdSolicitante: string;
            const AgendaItemProfissionalIdExecutante: string;
            const LoteStatusLoteId: string;
            const LoteMovimentacao: string;
            const LoteConvenioId: string;
            const LoteDataEmissaoLote: string;
            const Lote: string;
            const LoteProtocolo: string;
            const LoteLoteConvenio: string;
            const LoteValorLote: string;
            const LoteCapaLote: string;
            const LoteExtrato: string;
            const LoteEnviadoConvenioId: string;
            const LoteDataEnviadoConvenio: string;
            const LoteArquivoFisicoEnviadoId: string;
            const LoteCartaSimplesId: string;
            const LoteSedex: string;
            const LoteArid: string;
            const LoteDataRetornoAr: string;
            const LoteValorCorreios: string;
            const LoteArquivos: string;
            const LoteObservacao: string;
            const LoteNfseid: string;
            const LoteNotaFiscal: string;
            const LoteValorNotaFiscal: string;
            const LoteDataEmissaoNotaFiscal: string;
            const LoteEmailNotaFiscal: string;
            const LoteNotaFiscalImpressaId: string;
            const LoteNotaFiscalRecebida: string;
            const LoteDataNotaFiscalImpressa: string;
            const StatusSessaoStatus: string;
            const ValorTipoItemId: string;
            const ValorTipoTabelaId: string;
            const ValorProcedimentoId: string;
            const ValorConvenioId: string;
            const ValorValorCh: string;
            const ValorValorSessao: string;
            const ValorDataInicio: string;
            const ValorDataFim: string;
            const ValorObservacao: string;
            const ValorDataCadastrada: string;
            const ValorCodigoRegistrado: string;
            const ValorRequerAutorizacao: string;
            const ValorTipoAutorizacaoId: string;
            const FolhaPagamentoProfissionalProfissionalId: string;
            const FolhaPagamentoProfissionalNotaFiscalProfissional: string;
            const FolhaPagamentoProfissionalArquivos: string;
            const FolhaPagamentoProfissionalMovimento: string;
            const FolhaPagamentoProfissionalDataPagamento: string;
            const FolhaPagamentoProfissionalValorPago: string;
            const FolhaPagamentoProfissionalDataImpressao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace SessoesService {
        const baseUrl = "Clinica/Sessoes";
        function Create(request: Serenity.SaveRequest<SessoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SessoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SessoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SessoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class SexoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SexoForm {
        Sexo: Serenity.StringEditor;
        Abreviatura: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface SexoRow {
        SexoId?: number;
        Sexo?: string;
        Abreviatura?: string;
    }
    namespace SexoRow {
        const idProperty = "SexoId";
        const nameProperty = "Sexo";
        const localTextPrefix = "Clinica.Sexo";
        const lookupKey = "Clinica.Sexo";
        namespace Fields {
            const SexoId: string;
            const Sexo: string;
            const Abreviatura: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace SexoService {
        const baseUrl = "Clinica/Sexo";
        function Create(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class StatusDemonstrativosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusDemonstrativosForm {
        Status: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface StatusDemonstrativosRow {
        StatusDemonstrativoId?: number;
        Status?: string;
    }
    namespace StatusDemonstrativosRow {
        const idProperty = "StatusDemonstrativoId";
        const nameProperty = "Status";
        const localTextPrefix = "Clinica.StatusDemonstrativos";
        const lookupKey = "Clinica.StatusDemonstrativos";
        function getLookup(): Q.Lookup<StatusDemonstrativosRow>;
        namespace Fields {
            const StatusDemonstrativoId: string;
            const Status: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace StatusDemonstrativosService {
        const baseUrl = "Clinica/StatusDemonstrativos";
        function Create(request: Serenity.SaveRequest<StatusDemonstrativosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusDemonstrativosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusDemonstrativosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusDemonstrativosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    class StatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusForm {
        Status: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class StatusLotesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusLotesForm {
        Status: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface StatusLotesRow {
        StatusLoteId?: number;
        Status?: string;
    }
    namespace StatusLotesRow {
        const idProperty = "StatusLoteId";
        const nameProperty = "Status";
        const localTextPrefix = "Clinica.StatusLotes";
        const lookupKey = "Clinica.StatusLotes";
        function getLookup(): Q.Lookup<StatusLotesRow>;
        namespace Fields {
            const StatusLoteId: string;
            const Status: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace StatusLotesService {
        const baseUrl = "Clinica/StatusLotes";
        function Create(request: Serenity.SaveRequest<StatusLotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusLotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusLotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusLotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    interface StatusRow {
        StatusId?: number;
        Status?: string;
    }
    namespace StatusRow {
        const idProperty = "StatusId";
        const nameProperty = "Status";
        const localTextPrefix = "Clinica.Status";
        const lookupKey = "Clinica.Status";
        namespace Fields {
            const StatusId: string;
            const Status: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace StatusService {
        const baseUrl = "Clinica/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class StatusSessoesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusSessoesForm {
        Status: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface StatusSessoesRow {
        StatusSessaoId?: number;
        Status?: string;
    }
    namespace StatusSessoesRow {
        const idProperty = "StatusSessaoId";
        const nameProperty = "Status";
        const localTextPrefix = "Clinica.StatusSessoes";
        const lookupKey = "Clinica.StatusSessoes";
        function getLookup(): Q.Lookup<StatusSessoesRow>;
        namespace Fields {
            const StatusSessaoId: string;
            const Status: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace StatusSessoesService {
        const baseUrl = "Clinica/StatusSessoes";
        function Create(request: Serenity.SaveRequest<StatusSessoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusSessoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusSessoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusSessoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class SubConveniosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SubConveniosForm {
        ConvenioId: Serenity.LookupEditor;
        Descricao: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        DataInicio: Serenity.DateTimeEditor;
        Ativo: Serenity.BooleanEditor;
        DataFim: Serenity.DateTimeEditor;
        Participativo: Serenity.BooleanEditor;
        PorcentagemParticipativo: Serenity.DecimalEditor;
        AutorizacaoPrevia: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface SubConveniosRow {
        SubConvenioId?: number;
        ConvenioId?: number;
        Descricao?: string;
        Nome?: string;
        DataInicio?: string;
        Ativo?: boolean;
        DataFim?: string;
        Participativo?: boolean;
        PorcentagemParticipativo?: number;
        AutorizacaoPrevia?: boolean;
        ConvenioCnpj?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
        ConvenioCodigoAns?: string;
        ConvenioCadastroConvenio?: string;
        ConvenioLogo?: string;
        ConvenioInscricaoMunicipal?: string;
        ConvenioInscricaoEstadual?: string;
        ConvenioSite?: string;
        ConvenioDataInicio?: string;
        ConvenioInativo?: boolean;
        ConvenioDataFim?: string;
        ConvenioMotivoCancelamento?: string;
        ConvenioObservacao?: string;
        ConvenioVersaoTiss?: string;
        ConvenioWebService?: string;
        ConvenioSadtSolContratadoId?: string;
        ConvenioSadtExecutanteId?: string;
        ConvenioSadtProfissionalexecutante?: string;
        ConvenioSadtMembroEquipe?: string;
        ConvenioIdOrigem?: string;
        ConvenioIdDestino?: string;
        ConvenioOrigemIdPrestador?: string;
        ConvenioDestinoIdPrestador?: string;
        ConvenioIdLogo?: number;
        ConvenioGeraTiss?: boolean;
        ConvenioDataCadastro?: string;
        ConvenioDataUltimaAtualizacao?: string;
        ConvenioLatitude?: string;
        ConvenioLongitude?: string;
        ConvenioEmailNotaFiscal?: string;
        ConvenioEmailContato?: string;
        ConvenioEmailFaturamento?: string;
        ConvenioEmailGlosa?: string;
    }
    namespace SubConveniosRow {
        const idProperty = "SubConvenioId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.SubConvenios";
        const lookupKey = "Clinica.SubConvenios";
        function getLookup(): Q.Lookup<SubConveniosRow>;
        namespace Fields {
            const SubConvenioId: string;
            const ConvenioId: string;
            const Descricao: string;
            const Nome: string;
            const DataInicio: string;
            const Ativo: string;
            const DataFim: string;
            const Participativo: string;
            const PorcentagemParticipativo: string;
            const AutorizacaoPrevia: string;
            const ConvenioCnpj: string;
            const ConvenioRazaoSocial: string;
            const ConvenioNomeFantasia: string;
            const ConvenioCodigoAns: string;
            const ConvenioCadastroConvenio: string;
            const ConvenioLogo: string;
            const ConvenioInscricaoMunicipal: string;
            const ConvenioInscricaoEstadual: string;
            const ConvenioSite: string;
            const ConvenioDataInicio: string;
            const ConvenioInativo: string;
            const ConvenioDataFim: string;
            const ConvenioMotivoCancelamento: string;
            const ConvenioObservacao: string;
            const ConvenioVersaoTiss: string;
            const ConvenioWebService: string;
            const ConvenioSadtSolContratadoId: string;
            const ConvenioSadtExecutanteId: string;
            const ConvenioSadtProfissionalexecutante: string;
            const ConvenioSadtMembroEquipe: string;
            const ConvenioIdOrigem: string;
            const ConvenioIdDestino: string;
            const ConvenioOrigemIdPrestador: string;
            const ConvenioDestinoIdPrestador: string;
            const ConvenioIdLogo: string;
            const ConvenioGeraTiss: string;
            const ConvenioDataCadastro: string;
            const ConvenioDataUltimaAtualizacao: string;
            const ConvenioLatitude: string;
            const ConvenioLongitude: string;
            const ConvenioEmailNotaFiscal: string;
            const ConvenioEmailContato: string;
            const ConvenioEmailFaturamento: string;
            const ConvenioEmailGlosa: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace SubConveniosService {
        const baseUrl = "Clinica/SubConvenios";
        function Create(request: Serenity.SaveRequest<SubConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SubConveniosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubConveniosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TabelasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TabelasForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TabelasRow {
        TabelaId?: number;
        Descricao?: string;
    }
    namespace TabelasRow {
        const idProperty = "TabelaId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.Tabelas";
        const lookupKey = "Clinica.Tabelas";
        function getLookup(): Q.Lookup<TabelasRow>;
        namespace Fields {
            const TabelaId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TabelasService {
        const baseUrl = "Clinica/Tabelas";
        function Create(request: Serenity.SaveRequest<TabelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TabelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TipoEspecialidadeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TipoEspecialidadeForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TipoEspecialidadeRow {
        TipoEspecialidadeId?: number;
        Descricao?: string;
    }
    namespace TipoEspecialidadeRow {
        const idProperty = "TipoEspecialidadeId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TipoEspecialidade";
        const lookupKey = "Clinica.TipoEspecialidade";
        function getLookup(): Q.Lookup<TipoEspecialidadeRow>;
        namespace Fields {
            const TipoEspecialidadeId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TipoEspecialidadeService {
        const baseUrl = "Clinica/TipoEspecialidade";
        function Create(request: Serenity.SaveRequest<TipoEspecialidadeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoEspecialidadeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoEspecialidadeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoEspecialidadeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposAutorizacoesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposAutorizacoesForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposAutorizacoesRow {
        TipoAutorizacaoId?: number;
        Descricao?: string;
    }
    namespace TiposAutorizacoesRow {
        const idProperty = "TipoAutorizacaoId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposAutorizacoes";
        const lookupKey = "Clinica.TiposAutorizacoes";
        function getLookup(): Q.Lookup<TiposAutorizacoesRow>;
        namespace Fields {
            const TipoAutorizacaoId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposAutorizacoesService {
        const baseUrl = "Clinica/TiposAutorizacoes";
        function Create(request: Serenity.SaveRequest<TiposAutorizacoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposAutorizacoesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposAutorizacoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposAutorizacoesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposConsultasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposConsultasForm {
        Descricao: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposConsultasRow {
        TipoConsultaId?: number;
        Descricao?: string;
        Ativo?: boolean;
    }
    namespace TiposConsultasRow {
        const idProperty = "TipoConsultaId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposConsultas";
        const lookupKey = "Clinica.TiposConsultas";
        function getLookup(): Q.Lookup<TiposConsultasRow>;
        namespace Fields {
            const TipoConsultaId: string;
            const Descricao: string;
            const Ativo: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposConsultasService {
        const baseUrl = "Clinica/TiposConsultas";
        function Create(request: Serenity.SaveRequest<TiposConsultasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposConsultasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposConsultasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposConsultasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposContatosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposContatosForm {
        TipoContato: Serenity.StringEditor;
        PessoaFisica: Serenity.BooleanEditor;
        Ordem: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposContatosRow {
        TipoContatoId?: number;
        TipoContato?: string;
        PessoaFisica?: boolean;
        Ordem?: number;
    }
    namespace TiposContatosRow {
        const idProperty = "TipoContatoId";
        const nameProperty = "TipoContato";
        const localTextPrefix = "Clinica.TiposContatos";
        const lookupKey = "Clinica.TiposContatos";
        namespace Fields {
            const TipoContatoId: string;
            const TipoContato: string;
            const PessoaFisica: string;
            const Ordem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposContatosService {
        const baseUrl = "Clinica/TiposContatos";
        function Create(request: Serenity.SaveRequest<TiposContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposEnderecosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposEnderecosForm {
        TipoEndereco: Serenity.StringEditor;
        PessoaFisica: Serenity.BooleanEditor;
        Ordem: Serenity.IntegerEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposEnderecosRow {
        TipoEnderecoId?: number;
        TipoEndereco?: string;
        PessoaFisica?: boolean;
        Ordem?: number;
    }
    namespace TiposEnderecosRow {
        const idProperty = "TipoEnderecoId";
        const nameProperty = "TipoEndereco";
        const localTextPrefix = "Clinica.TiposEnderecos";
        const lookupKey = "Clinica.TiposEnderecos";
        namespace Fields {
            const TipoEnderecoId: string;
            const TipoEndereco: string;
            const PessoaFisica: string;
            const Ordem: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposEnderecosService {
        const baseUrl = "Clinica/TiposEnderecos";
        function Create(request: Serenity.SaveRequest<TiposEnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposEnderecosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposEnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposEnderecosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposEnvolvimentosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposEnvolvimentosForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposEnvolvimentosRow {
        TipoEnvolvimentoId?: number;
        Descricao?: string;
    }
    namespace TiposEnvolvimentosRow {
        const idProperty = "TipoEnvolvimentoId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposEnvolvimentos";
        const lookupKey = "Clinica.TiposEnvolvimentos";
        function getLookup(): Q.Lookup<TiposEnvolvimentosRow>;
        namespace Fields {
            const TipoEnvolvimentoId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposEnvolvimentosService {
        const baseUrl = "Clinica/TiposEnvolvimentos";
        function Create(request: Serenity.SaveRequest<TiposEnvolvimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposEnvolvimentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposEnvolvimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposEnvolvimentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposFeriadosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposFeriadosForm {
        TipoFeriado: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposFeriadosRow {
        TipoFeriadoId?: number;
        TipoFeriado?: string;
    }
    namespace TiposFeriadosRow {
        const idProperty = "TipoFeriadoId";
        const nameProperty = "TipoFeriado";
        const localTextPrefix = "Clinica.TiposFeriados";
        const lookupKey = "Clinica.TiposFeriados";
        function getLookup(): Q.Lookup<TiposFeriadosRow>;
        namespace Fields {
            const TipoFeriadoId: string;
            const TipoFeriado: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposFeriadosService {
        const baseUrl = "Clinica/TiposFeriados";
        function Create(request: Serenity.SaveRequest<TiposFeriadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposFeriadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposFeriadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposFeriadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposFichasCnesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposFichasCnesForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposFichasCnesRow {
        TipoFichaCnes?: number;
        Descricao?: string;
    }
    namespace TiposFichasCnesRow {
        const idProperty = "TipoFichaCnes";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposFichasCnes";
        const lookupKey = "Clinica.TiposFichasCnes";
        function getLookup(): Q.Lookup<TiposFichasCnesRow>;
        namespace Fields {
            const TipoFichaCnes: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposFichasCnesService {
        const baseUrl = "Clinica/TiposFichasCnes";
        function Create(request: Serenity.SaveRequest<TiposFichasCnesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposFichasCnesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposFichasCnesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposFichasCnesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposGuiasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposGuiasForm {
        Descricao: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposGuiasRow {
        TipoGuiaId?: number;
        Descricao?: string;
        Ativo?: boolean;
    }
    namespace TiposGuiasRow {
        const idProperty = "TipoGuiaId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposGuias";
        const lookupKey = "Clinica.TiposGuias";
        function getLookup(): Q.Lookup<TiposGuiasRow>;
        namespace Fields {
            const TipoGuiaId: string;
            const Descricao: string;
            const Ativo: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposGuiasService {
        const baseUrl = "Clinica/TiposGuias";
        function Create(request: Serenity.SaveRequest<TiposGuiasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposGuiasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposGuiasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposGuiasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposItensForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposItensForm {
        Descricao: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposItensRow {
        TipoItemId?: number;
        Descricao?: string;
        Ativo?: boolean;
    }
    namespace TiposItensRow {
        const idProperty = "TipoItemId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposItens";
        const lookupKey = "Clinica.TiposItens";
        function getLookup(): Q.Lookup<TiposItensRow>;
        namespace Fields {
            const TipoItemId: string;
            const Descricao: string;
            const Ativo: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposItensService {
        const baseUrl = "Clinica/TiposItens";
        function Create(request: Serenity.SaveRequest<TiposItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposItensRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposItensRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposMeiosContatosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposMeiosContatosForm {
        TipoMeioContato: Serenity.StringEditor;
        Mascara: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposMeiosContatosRow {
        TipoMeioContatoId?: number;
        TipoMeioContato?: string;
        Mascara?: string;
    }
    namespace TiposMeiosContatosRow {
        const idProperty = "TipoMeioContatoId";
        const nameProperty = "TipoMeioContato";
        const localTextPrefix = "Clinica.TiposMeiosContatos";
        const lookupKey = "Clinica.TiposMeiosContatos";
        namespace Fields {
            const TipoMeioContatoId: string;
            const TipoMeioContato: string;
            const Mascara: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposMeiosContatosService {
        const baseUrl = "Clinica/TiposMeiosContatos";
        function Create(request: Serenity.SaveRequest<TiposMeiosContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposMeiosContatosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposMeiosContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposMeiosContatosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposProfissionaisForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposProfissionaisForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposProfissionaisRow {
        TipoProfissionalId?: number;
        Descricao?: string;
    }
    namespace TiposProfissionaisRow {
        const idProperty = "TipoProfissionalId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposProfissionais";
        const lookupKey = "Clinica.TiposProfissionais";
        function getLookup(): Q.Lookup<TiposProfissionaisRow>;
        namespace Fields {
            const TipoProfissionalId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposProfissionaisService {
        const baseUrl = "Clinica/TiposProfissionais";
        function Create(request: Serenity.SaveRequest<TiposProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposProfissionaisRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposProfissionaisRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposProtocolosForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposProtocolosForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposProtocolosRow {
        TipoProtocoloId?: number;
        Descricao?: string;
    }
    namespace TiposProtocolosRow {
        const idProperty = "TipoProtocoloId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposProtocolos";
        const lookupKey = "Clinica.TiposProtocolos";
        function getLookup(): Q.Lookup<TiposProtocolosRow>;
        namespace Fields {
            const TipoProtocoloId: string;
            const Descricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposProtocolosService {
        const baseUrl = "Clinica/TiposProtocolos";
        function Create(request: Serenity.SaveRequest<TiposProtocolosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposProtocolosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposProtocolosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposProtocolosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TiposTabelasForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TiposTabelasForm {
        Descricao: Serenity.StringEditor;
        CodigoTabela: Serenity.IntegerEditor;
        Tissid: Serenity.LookupEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TiposTabelasRow {
        TipoTabelaId?: number;
        Descricao?: string;
        CodigoTabela?: number;
        Tissid?: number;
        TissidVersao?: string;
    }
    namespace TiposTabelasRow {
        const idProperty = "TipoTabelaId";
        const nameProperty = "Descricao";
        const localTextPrefix = "Clinica.TiposTabelas";
        const lookupKey = "Clinica.TiposTabelas";
        function getLookup(): Q.Lookup<TiposTabelasRow>;
        namespace Fields {
            const TipoTabelaId: string;
            const Descricao: string;
            const CodigoTabela: string;
            const Tissid: string;
            const TissidVersao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TiposTabelasService {
        const baseUrl = "Clinica/TiposTabelas";
        function Create(request: Serenity.SaveRequest<TiposTabelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposTabelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposTabelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposTabelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class TissForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TissForm {
        Versao: Serenity.StringEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface TissRow {
        Tissid?: number;
        Versao?: string;
    }
    namespace TissRow {
        const idProperty = "Tissid";
        const nameProperty = "Versao";
        const localTextPrefix = "Clinica.Tiss";
        const lookupKey = "Clinica.Tiss";
        function getLookup(): Q.Lookup<TissRow>;
        namespace Fields {
            const Tissid: string;
            const Versao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace TissService {
        const baseUrl = "Clinica/Tiss";
        function Create(request: Serenity.SaveRequest<TissRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TissRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TissRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TissRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Clinica {
}
declare namespace Exemplos.Clinica {
    class ValoresForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ValoresForm {
        TipoItemId: Serenity.LookupEditor;
        TipoTabelaId: Serenity.LookupEditor;
        ProcedimentoId: Serenity.LookupEditor;
        ConvenioId: Serenity.LookupEditor;
        ValorCh: Serenity.DecimalEditor;
        ValorSessao: Serenity.DecimalEditor;
        DataInicio: Serenity.DateTimeEditor;
        DataFim: Serenity.DateTimeEditor;
        Observacao: Serenity.TextAreaEditor;
        DataCadastrada: Serenity.DateTimeEditor;
        CodigoRegistrado: Serenity.BooleanEditor;
        RequerAutorizacao: Serenity.BooleanEditor;
        TipoAutorizacaoId: Serenity.LookupEditor;
    }
}
declare namespace Exemplos.Clinica {
    interface ValoresRow {
        ValorId?: number;
        TipoItemId?: number;
        TipoTabelaId?: number;
        ProcedimentoId?: number;
        ConvenioId?: number;
        ValorCh?: number;
        ValorSessao?: number;
        DataInicio?: string;
        DataFim?: string;
        Observacao?: string;
        DataCadastrada?: string;
        CodigoRegistrado?: boolean;
        RequerAutorizacao?: boolean;
        TipoAutorizacaoId?: number;
        TipoItemDescricao?: string;
        TipoItemAtivo?: boolean;
        TipoTabelaDescricao?: string;
        TipoTabelaCodigoTabela?: number;
        TipoTabelaTissid?: number;
        ProcedimentoTabelaId?: number;
        Procedimento?: string;
        ProcedimentoCodigo?: string;
        ProcedimentoCh?: number;
        ProcedimentoCodigoCbhpm?: string;
        ProcedimentoCodigoTuss?: string;
        ProcedimentoDataCadastrada?: string;
        ProcedimentoIdCodigoRegistrado?: boolean;
        ConvenioCnpj?: string;
        ConvenioRazaoSocial?: string;
        ConvenioNomeFantasia?: string;
        ConvenioCodigoAns?: string;
        ConvenioCadastroConvenio?: string;
        ConvenioLogo?: string;
        ConvenioInscricaoMunicipal?: string;
        ConvenioInscricaoEstadual?: string;
        ConvenioSite?: string;
        ConvenioDataInicio?: string;
        ConvenioInativo?: boolean;
        ConvenioDataFim?: string;
        ConvenioMotivoCancelamento?: string;
        ConvenioObservacao?: string;
        ConvenioVersaoTiss?: string;
        ConvenioWebService?: string;
        ConvenioSadtSolContratadoId?: string;
        ConvenioSadtExecutanteId?: string;
        ConvenioSadtProfissionalexecutante?: string;
        ConvenioSadtMembroEquipe?: string;
        ConvenioIdOrigem?: string;
        ConvenioIdDestino?: string;
        ConvenioOrigemIdPrestador?: string;
        ConvenioDestinoIdPrestador?: string;
        ConvenioIdLogo?: number;
        ConvenioGeraTiss?: boolean;
        ConvenioDataCadastro?: string;
        ConvenioDataUltimaAtualizacao?: string;
        ConvenioLatitude?: string;
        ConvenioLongitude?: string;
        ConvenioEmailNotaFiscal?: string;
        ConvenioEmailContato?: string;
        ConvenioEmailFaturamento?: string;
        ConvenioEmailGlosa?: string;
        TipoAutorizacaoDescricao?: string;
    }
    namespace ValoresRow {
        const idProperty = "ValorId";
        const nameProperty = "Observacao";
        const localTextPrefix = "Clinica.Valores";
        const lookupKey = "Clinica.Valores";
        function getLookup(): Q.Lookup<ValoresRow>;
        namespace Fields {
            const ValorId: string;
            const TipoItemId: string;
            const TipoTabelaId: string;
            const ProcedimentoId: string;
            const ConvenioId: string;
            const ValorCh: string;
            const ValorSessao: string;
            const DataInicio: string;
            const DataFim: string;
            const Observacao: string;
            const DataCadastrada: string;
            const CodigoRegistrado: string;
            const RequerAutorizacao: string;
            const TipoAutorizacaoId: string;
            const TipoItemDescricao: string;
            const TipoItemAtivo: string;
            const TipoTabelaDescricao: string;
            const TipoTabelaCodigoTabela: string;
            const TipoTabelaTissid: string;
            const ProcedimentoTabelaId: string;
            const Procedimento: string;
            const ProcedimentoCodigo: string;
            const ProcedimentoCh: string;
            const ProcedimentoCodigoCbhpm: string;
            const ProcedimentoCodigoTuss: string;
            const ProcedimentoDataCadastrada: string;
            const ProcedimentoIdCodigoRegistrado: string;
            const ConvenioCnpj: string;
            const ConvenioRazaoSocial: string;
            const ConvenioNomeFantasia: string;
            const ConvenioCodigoAns: string;
            const ConvenioCadastroConvenio: string;
            const ConvenioLogo: string;
            const ConvenioInscricaoMunicipal: string;
            const ConvenioInscricaoEstadual: string;
            const ConvenioSite: string;
            const ConvenioDataInicio: string;
            const ConvenioInativo: string;
            const ConvenioDataFim: string;
            const ConvenioMotivoCancelamento: string;
            const ConvenioObservacao: string;
            const ConvenioVersaoTiss: string;
            const ConvenioWebService: string;
            const ConvenioSadtSolContratadoId: string;
            const ConvenioSadtExecutanteId: string;
            const ConvenioSadtProfissionalexecutante: string;
            const ConvenioSadtMembroEquipe: string;
            const ConvenioIdOrigem: string;
            const ConvenioIdDestino: string;
            const ConvenioOrigemIdPrestador: string;
            const ConvenioDestinoIdPrestador: string;
            const ConvenioIdLogo: string;
            const ConvenioGeraTiss: string;
            const ConvenioDataCadastro: string;
            const ConvenioDataUltimaAtualizacao: string;
            const ConvenioLatitude: string;
            const ConvenioLongitude: string;
            const ConvenioEmailNotaFiscal: string;
            const ConvenioEmailContato: string;
            const ConvenioEmailFaturamento: string;
            const ConvenioEmailGlosa: string;
            const TipoAutorizacaoDescricao: string;
        }
    }
}
declare namespace Exemplos.Clinica {
    namespace ValoresService {
        const baseUrl = "Clinica/Valores";
        function Create(request: Serenity.SaveRequest<ValoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ValoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ValoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ValoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Exemplos.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace Exemplos.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace Exemplos.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Exemplos {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Exemplos {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Exemplos {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Exemplos {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Exemplos.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Exemplos.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace Exemplos.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Exemplos.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Exemplos.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Exemplos.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Exemplos.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Exemplos {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
