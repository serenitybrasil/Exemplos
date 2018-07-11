var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                //$(function () {
                //    ($('body') as any).vegas({
                //        delay: 10000,
                //        cover: true,
                //        overlay: Q.resolveUrl("~/Scripts/vegas/overlays/01.png"),
                //        slides: [
                //            { src: Q.resolveUrl('~/Content/site/slides/slide1.jpg'), transition: 'fade' },
                //            { src: Q.resolveUrl('~/Content/site/slides/slide2.jpg'), transition: 'fade' },
                //            { src: Q.resolveUrl('~/Content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                //            { src: Q.resolveUrl('~/Content/site/slides/slide4.jpg'), transition: 'blur' },
                //            { src: Q.resolveUrl('~/Content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                //        ]
                //    });
                //});
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Exemplos.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Exemplos.LanguageList || (Exemplos.LanguageList = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Exemplos;
(function (Exemplos) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Exemplos');
        Serenity.EntityDialog.defaultLanguageList = Exemplos.LanguageList.getValue;
    })(ScriptInitialization = Exemplos.ScriptInitialization || (Exemplos.ScriptInitialization = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var LKCodeDescr = /** @class */ (function (_super) {
        __extends(LKCodeDescr, _super);
        // TUTORIAL DESSA CLASSE
        // https://github.com/volkanceylan/Serenity/wiki/How-to-Create-Lookup-Editor-for-code-description-tables
        //Then use in Row or Form
        //[LookupCodeDescr(typeof (Modules.YourLookup), "MyCodeField", "MyDescrField")]
        function LKCodeDescr(container, opt) {
            var _this = _super.call(this, container, opt) || this;
            container.data("codeName", opt.codeName);
            container.data("descrName", opt.descrName);
            return _this;
        }
        LKCodeDescr.prototype.getSelect2Options = function () {
            var selec2Options = _super.prototype.getSelect2Options.call(this);
            selec2Options.formatResult = this.myFormatResult;
            selec2Options.formatSelection = this.myFormatSelection;
            return selec2Options;
        };
        LKCodeDescr.prototype.myFormatSelection = function (item) {
            if (item === undefined)
                return null;
            var code = item.source[this.element.data("codeName")];
            var descr = item.source[this.element.data("descrName")];
            var title = "Code: " + code;
            title += " - " + descr;
            return "<div title='" + title + "'><b>" + code + "</b>&nbsp;-&nbsp;" + descr + "</div>";
        };
        LKCodeDescr.prototype.myFormatResult = function (item) {
            var code = item.source[this.element.data("codeName")];
            var descr = item.source[this.element.data("descrName")];
            var title = "Code: " + code;
            title += " - " + descr;
            var markup = '<div class="row">' +
                '<div class="col-xs-2" style="white-space: nowrap"><b>' + code + "</b>" + "</div>" +
                '<div class="col-xs-10"><small>' + descr + '</small></div>' +
                '</div>';
            // This for search on code and description
            item.text = code + " " + descr;
            return markup;
        };
        LKCodeDescr = __decorate([
            Serenity.Decorators.registerEditor()
        ], LKCodeDescr);
        return LKCodeDescr;
    }(Serenity.LookupEditorBase));
    Exemplos.LKCodeDescr = LKCodeDescr;
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'Clinica', Q.text('Site.Layout.ThemeClinica'));
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                //Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                //Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                //Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                //Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                //Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                //Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                //Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                //Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                //Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                //Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'Clinica';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Exemplos.BasicProgressDialog = BasicProgressDialog;
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Exemplos.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('Há alterações a serem salvas. Confirmar alterações?', 
                //Q.confirm('You have pending changes. Save them?',
                function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Exemplos.DialogUtils || (Exemplos.DialogUtils = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosDialog = /** @class */ (function (_super) {
            __extends(TiposMeiosContatosDialog, _super);
            function TiposMeiosContatosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.TiposMeiosContatosForm(_this.idPrefix);
                return _this;
            }
            TiposMeiosContatosDialog.prototype.getFormKey = function () { return Clinica.TiposMeiosContatosForm.formKey; };
            TiposMeiosContatosDialog.prototype.getIdProperty = function () { return Clinica.TiposMeiosContatosRow.idProperty; };
            TiposMeiosContatosDialog.prototype.getLocalTextPrefix = function () { return Clinica.TiposMeiosContatosRow.localTextPrefix; };
            TiposMeiosContatosDialog.prototype.getNameProperty = function () { return Clinica.TiposMeiosContatosRow.nameProperty; };
            TiposMeiosContatosDialog.prototype.getService = function () { return Clinica.TiposMeiosContatosService.baseUrl; };
            TiposMeiosContatosDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            TiposMeiosContatosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], TiposMeiosContatosDialog);
            return TiposMeiosContatosDialog;
        }(Serenity.EntityDialog));
        Clinica.TiposMeiosContatosDialog = TiposMeiosContatosDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosEditor = /** @class */ (function (_super) {
            __extends(TiposMeiosContatosEditor, _super);
            function TiposMeiosContatosEditor(container) {
                return _super.call(this, container) || this;
            }
            TiposMeiosContatosEditor.prototype.getColumnsKey = function () { return 'Clinica.TiposMeiosContatos'; };
            TiposMeiosContatosEditor.prototype.getDialogType = function () { return Clinica.TiposMeiosContatosEditorDialog; };
            TiposMeiosContatosEditor.prototype.getLocalTextPrefix = function () { return Clinica.TiposMeiosContatosRow.localTextPrefix; };
            TiposMeiosContatosEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposMeiosContatosEditor);
            return TiposMeiosContatosEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.TiposMeiosContatosEditor = TiposMeiosContatosEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosEditorDialog = /** @class */ (function (_super) {
            __extends(TiposMeiosContatosEditorDialog, _super);
            function TiposMeiosContatosEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.TiposMeiosContatosForm(_this.idPrefix);
                return _this;
            }
            TiposMeiosContatosEditorDialog.prototype.getFormKey = function () { return Clinica.TiposMeiosContatosForm.formKey; };
            TiposMeiosContatosEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.TiposMeiosContatosRow.localTextPrefix; };
            TiposMeiosContatosEditorDialog.prototype.getNameProperty = function () { return Clinica.TiposMeiosContatosRow.nameProperty; };
            TiposMeiosContatosEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TiposMeiosContatosEditorDialog);
            return TiposMeiosContatosEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.TiposMeiosContatosEditorDialog = TiposMeiosContatosEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosGrid = /** @class */ (function (_super) {
            __extends(TiposMeiosContatosGrid, _super);
            function TiposMeiosContatosGrid(container) {
                return _super.call(this, container) || this;
            }
            TiposMeiosContatosGrid.prototype.getColumnsKey = function () { return 'Clinica.TiposMeiosContatos'; };
            TiposMeiosContatosGrid.prototype.getDialogType = function () { return Clinica.TiposMeiosContatosDialog; };
            TiposMeiosContatosGrid.prototype.getIdProperty = function () { return Clinica.TiposMeiosContatosRow.idProperty; };
            TiposMeiosContatosGrid.prototype.getLocalTextPrefix = function () { return Clinica.TiposMeiosContatosRow.localTextPrefix; };
            TiposMeiosContatosGrid.prototype.getService = function () { return Clinica.TiposMeiosContatosService.baseUrl; };
            TiposMeiosContatosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposMeiosContatosGrid);
            return TiposMeiosContatosGrid;
        }(Serenity.EntityGrid));
        Clinica.TiposMeiosContatosGrid = TiposMeiosContatosGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosDialog = /** @class */ (function (_super) {
            __extends(TiposEnderecosDialog, _super);
            function TiposEnderecosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.TiposEnderecosForm(_this.idPrefix);
                return _this;
            }
            TiposEnderecosDialog.prototype.getFormKey = function () { return Clinica.TiposEnderecosForm.formKey; };
            TiposEnderecosDialog.prototype.getIdProperty = function () { return Clinica.TiposEnderecosRow.idProperty; };
            TiposEnderecosDialog.prototype.getLocalTextPrefix = function () { return Clinica.TiposEnderecosRow.localTextPrefix; };
            TiposEnderecosDialog.prototype.getNameProperty = function () { return Clinica.TiposEnderecosRow.nameProperty; };
            TiposEnderecosDialog.prototype.getService = function () { return Clinica.TiposEnderecosService.baseUrl; };
            TiposEnderecosDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            TiposEnderecosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], TiposEnderecosDialog);
            return TiposEnderecosDialog;
        }(Serenity.EntityDialog));
        Clinica.TiposEnderecosDialog = TiposEnderecosDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosEditor = /** @class */ (function (_super) {
            __extends(TiposEnderecosEditor, _super);
            function TiposEnderecosEditor(container) {
                return _super.call(this, container) || this;
            }
            TiposEnderecosEditor.prototype.getColumnsKey = function () { return 'Clinica.TiposEnderecos'; };
            TiposEnderecosEditor.prototype.getDialogType = function () { return Clinica.TiposEnderecosEditorDialog; };
            TiposEnderecosEditor.prototype.getLocalTextPrefix = function () { return Clinica.TiposEnderecosRow.localTextPrefix; };
            TiposEnderecosEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposEnderecosEditor);
            return TiposEnderecosEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.TiposEnderecosEditor = TiposEnderecosEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosEditorDialog = /** @class */ (function (_super) {
            __extends(TiposEnderecosEditorDialog, _super);
            function TiposEnderecosEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.TiposEnderecosForm(_this.idPrefix);
                return _this;
            }
            TiposEnderecosEditorDialog.prototype.getFormKey = function () { return Clinica.TiposEnderecosForm.formKey; };
            TiposEnderecosEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.TiposEnderecosRow.localTextPrefix; };
            TiposEnderecosEditorDialog.prototype.getNameProperty = function () { return Clinica.TiposEnderecosRow.nameProperty; };
            TiposEnderecosEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TiposEnderecosEditorDialog);
            return TiposEnderecosEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.TiposEnderecosEditorDialog = TiposEnderecosEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosGrid = /** @class */ (function (_super) {
            __extends(TiposEnderecosGrid, _super);
            function TiposEnderecosGrid(container) {
                return _super.call(this, container) || this;
            }
            TiposEnderecosGrid.prototype.getColumnsKey = function () { return 'Clinica.TiposEnderecos'; };
            TiposEnderecosGrid.prototype.getDialogType = function () { return Clinica.TiposEnderecosDialog; };
            TiposEnderecosGrid.prototype.getIdProperty = function () { return Clinica.TiposEnderecosRow.idProperty; };
            TiposEnderecosGrid.prototype.getLocalTextPrefix = function () { return Clinica.TiposEnderecosRow.localTextPrefix; };
            TiposEnderecosGrid.prototype.getService = function () { return Clinica.TiposEnderecosService.baseUrl; };
            TiposEnderecosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposEnderecosGrid);
            return TiposEnderecosGrid;
        }(Serenity.EntityGrid));
        Clinica.TiposEnderecosGrid = TiposEnderecosGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosDialog = /** @class */ (function (_super) {
            __extends(TiposContatosDialog, _super);
            function TiposContatosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.TiposContatosForm(_this.idPrefix);
                return _this;
            }
            TiposContatosDialog.prototype.getFormKey = function () { return Clinica.TiposContatosForm.formKey; };
            TiposContatosDialog.prototype.getIdProperty = function () { return Clinica.TiposContatosRow.idProperty; };
            TiposContatosDialog.prototype.getLocalTextPrefix = function () { return Clinica.TiposContatosRow.localTextPrefix; };
            TiposContatosDialog.prototype.getNameProperty = function () { return Clinica.TiposContatosRow.nameProperty; };
            TiposContatosDialog.prototype.getService = function () { return Clinica.TiposContatosService.baseUrl; };
            TiposContatosDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            TiposContatosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], TiposContatosDialog);
            return TiposContatosDialog;
        }(Serenity.EntityDialog));
        Clinica.TiposContatosDialog = TiposContatosDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosEditor = /** @class */ (function (_super) {
            __extends(TiposContatosEditor, _super);
            function TiposContatosEditor(container) {
                return _super.call(this, container) || this;
            }
            TiposContatosEditor.prototype.getColumnsKey = function () { return 'Clinica.TiposContatos'; };
            TiposContatosEditor.prototype.getDialogType = function () { return Clinica.TiposContatosEditorDialog; };
            TiposContatosEditor.prototype.getLocalTextPrefix = function () { return Clinica.TiposContatosRow.localTextPrefix; };
            TiposContatosEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposContatosEditor);
            return TiposContatosEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.TiposContatosEditor = TiposContatosEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosEditorDialog = /** @class */ (function (_super) {
            __extends(TiposContatosEditorDialog, _super);
            function TiposContatosEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.TiposContatosForm(_this.idPrefix);
                return _this;
            }
            TiposContatosEditorDialog.prototype.getFormKey = function () { return Clinica.TiposContatosForm.formKey; };
            TiposContatosEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.TiposContatosRow.localTextPrefix; };
            TiposContatosEditorDialog.prototype.getNameProperty = function () { return Clinica.TiposContatosRow.nameProperty; };
            TiposContatosEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TiposContatosEditorDialog);
            return TiposContatosEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.TiposContatosEditorDialog = TiposContatosEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosGrid = /** @class */ (function (_super) {
            __extends(TiposContatosGrid, _super);
            function TiposContatosGrid(container) {
                return _super.call(this, container) || this;
            }
            TiposContatosGrid.prototype.getColumnsKey = function () { return 'Clinica.TiposContatos'; };
            TiposContatosGrid.prototype.getDialogType = function () { return Clinica.TiposContatosDialog; };
            TiposContatosGrid.prototype.getIdProperty = function () { return Clinica.TiposContatosRow.idProperty; };
            TiposContatosGrid.prototype.getLocalTextPrefix = function () { return Clinica.TiposContatosRow.localTextPrefix; };
            TiposContatosGrid.prototype.getService = function () { return Clinica.TiposContatosService.baseUrl; };
            TiposContatosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposContatosGrid);
            return TiposContatosGrid;
        }(Serenity.EntityGrid));
        Clinica.TiposContatosGrid = TiposContatosGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusDialog = /** @class */ (function (_super) {
            __extends(StatusDialog, _super);
            function StatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.StatusForm(_this.idPrefix);
                return _this;
            }
            StatusDialog.prototype.getFormKey = function () { return Clinica.StatusForm.formKey; };
            StatusDialog.prototype.getIdProperty = function () { return Clinica.StatusRow.idProperty; };
            StatusDialog.prototype.getLocalTextPrefix = function () { return Clinica.StatusRow.localTextPrefix; };
            StatusDialog.prototype.getNameProperty = function () { return Clinica.StatusRow.nameProperty; };
            StatusDialog.prototype.getService = function () { return Clinica.StatusService.baseUrl; };
            StatusDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            StatusDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], StatusDialog);
            return StatusDialog;
        }(Serenity.EntityDialog));
        Clinica.StatusDialog = StatusDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusEditor = /** @class */ (function (_super) {
            __extends(StatusEditor, _super);
            function StatusEditor(container) {
                return _super.call(this, container) || this;
            }
            StatusEditor.prototype.getColumnsKey = function () { return 'Clinica.Status'; };
            StatusEditor.prototype.getDialogType = function () { return Clinica.StatusEditorDialog; };
            StatusEditor.prototype.getLocalTextPrefix = function () { return Clinica.StatusRow.localTextPrefix; };
            StatusEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusEditor);
            return StatusEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.StatusEditor = StatusEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusEditorDialog = /** @class */ (function (_super) {
            __extends(StatusEditorDialog, _super);
            function StatusEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.StatusForm(_this.idPrefix);
                return _this;
            }
            StatusEditorDialog.prototype.getFormKey = function () { return Clinica.StatusForm.formKey; };
            StatusEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.StatusRow.localTextPrefix; };
            StatusEditorDialog.prototype.getNameProperty = function () { return Clinica.StatusRow.nameProperty; };
            StatusEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], StatusEditorDialog);
            return StatusEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.StatusEditorDialog = StatusEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusGrid = /** @class */ (function (_super) {
            __extends(StatusGrid, _super);
            function StatusGrid(container) {
                return _super.call(this, container) || this;
            }
            StatusGrid.prototype.getColumnsKey = function () { return 'Clinica.Status'; };
            StatusGrid.prototype.getDialogType = function () { return Clinica.StatusDialog; };
            StatusGrid.prototype.getIdProperty = function () { return Clinica.StatusRow.idProperty; };
            StatusGrid.prototype.getLocalTextPrefix = function () { return Clinica.StatusRow.localTextPrefix; };
            StatusGrid.prototype.getService = function () { return Clinica.StatusService.baseUrl; };
            StatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusGrid);
            return StatusGrid;
        }(Serenity.EntityGrid));
        Clinica.StatusGrid = StatusGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoDialog = /** @class */ (function (_super) {
            __extends(SexoDialog, _super);
            function SexoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.SexoForm(_this.idPrefix);
                return _this;
            }
            SexoDialog.prototype.getFormKey = function () { return Clinica.SexoForm.formKey; };
            SexoDialog.prototype.getIdProperty = function () { return Clinica.SexoRow.idProperty; };
            SexoDialog.prototype.getLocalTextPrefix = function () { return Clinica.SexoRow.localTextPrefix; };
            SexoDialog.prototype.getNameProperty = function () { return Clinica.SexoRow.nameProperty; };
            SexoDialog.prototype.getService = function () { return Clinica.SexoService.baseUrl; };
            SexoDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            SexoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], SexoDialog);
            return SexoDialog;
        }(Serenity.EntityDialog));
        Clinica.SexoDialog = SexoDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoEditor = /** @class */ (function (_super) {
            __extends(SexoEditor, _super);
            function SexoEditor(container) {
                return _super.call(this, container) || this;
            }
            SexoEditor.prototype.getColumnsKey = function () { return 'Clinica.Sexo'; };
            SexoEditor.prototype.getDialogType = function () { return Clinica.SexoEditorDialog; };
            SexoEditor.prototype.getLocalTextPrefix = function () { return Clinica.SexoRow.localTextPrefix; };
            SexoEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SexoEditor);
            return SexoEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.SexoEditor = SexoEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoEditorDialog = /** @class */ (function (_super) {
            __extends(SexoEditorDialog, _super);
            function SexoEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.SexoForm(_this.idPrefix);
                return _this;
            }
            SexoEditorDialog.prototype.getFormKey = function () { return Clinica.SexoForm.formKey; };
            SexoEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.SexoRow.localTextPrefix; };
            SexoEditorDialog.prototype.getNameProperty = function () { return Clinica.SexoRow.nameProperty; };
            SexoEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SexoEditorDialog);
            return SexoEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.SexoEditorDialog = SexoEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoGrid = /** @class */ (function (_super) {
            __extends(SexoGrid, _super);
            function SexoGrid(container) {
                return _super.call(this, container) || this;
            }
            SexoGrid.prototype.getColumnsKey = function () { return 'Clinica.Sexo'; };
            SexoGrid.prototype.getDialogType = function () { return Clinica.SexoDialog; };
            SexoGrid.prototype.getIdProperty = function () { return Clinica.SexoRow.idProperty; };
            SexoGrid.prototype.getLocalTextPrefix = function () { return Clinica.SexoRow.localTextPrefix; };
            SexoGrid.prototype.getService = function () { return Clinica.SexoService.baseUrl; };
            SexoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SexoGrid);
            return SexoGrid;
        }(Serenity.EntityGrid));
        Clinica.SexoGrid = SexoGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosDialog = /** @class */ (function (_super) {
            __extends(PacientesConveniosDialog, _super);
            function PacientesConveniosDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Clinica.PacientesConveniosForm(_this.idPrefix);
                _this.form.ConvenioId.changeSelect2(function (e) {
                    Q.confirm("Confirma a alteração do Convênio ?", function () {
                        Q.warning("<h4>Verificar os itens abaixo !!!</h4>" +
                            "<ul><li>Carteirinha</li>" +
                            "<li>Data Validade</li>" +
                            "<li>Descrição do Plano</li></ul>", {
                            htmlEncode: false
                        });
                    });
                });
                _this.form.Inativo.change(function (e) {
                    if (_this.form.Inativo.value == true) {
                        Q.confirm("Confirma a inativação dessa carteirinha ?", function () {
                            _this.form.DataInativo.getGridField().toggle(true);
                            _this.form.DataInativo.valueAsDate = new Date();
                        });
                    }
                    else if (_this.form.Inativo.value == false) {
                        Q.confirm("Confirma a REativação dessa carteirinha ?", function () {
                            _this.form.DataInativo.getGridField().toggle(false);
                            _this.form.DataInativo.valueAsDate = null;
                        });
                    }
                });
                return _this;
            }
            PacientesConveniosDialog.prototype.getFormKey = function () { return Clinica.PacientesConveniosForm.formKey; };
            PacientesConveniosDialog.prototype.getIdProperty = function () { return Clinica.PacientesConveniosRow.idProperty; };
            PacientesConveniosDialog.prototype.getLocalTextPrefix = function () { return Clinica.PacientesConveniosRow.localTextPrefix; };
            PacientesConveniosDialog.prototype.getNameProperty = function () { return Clinica.PacientesConveniosRow.nameProperty; };
            PacientesConveniosDialog.prototype.getService = function () { return Clinica.PacientesConveniosService.baseUrl; };
            PacientesConveniosDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                //this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            //protected addButtonClick() {
            //    this.editItem(<Clinica.PacientesConveniosRow>{
            //        ConvenioId: Clinica.ConveniosRow.getLookup().items
            //            .filter(x => x.Inativo === '1'),
            //        ShipVia: Northwind.ShipperRow.getLookup().items
            //            .filter(x => x.CompanyName === 'Speedy Express')[0].ShipperID
            //    });
            //}
            PacientesConveniosDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    this.form.ConvenioId.cascadeField = Clinica.ConveniosRow.Fields.Inativo;
                    this.form.ConvenioId.cascadeValue = false;
                }
                //if (this.isEditMode()) {
                //    Q.alert("teste edit constructor");
                //}
            };
            PacientesConveniosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], PacientesConveniosDialog);
            return PacientesConveniosDialog;
        }(Serenity.EntityDialog));
        Clinica.PacientesConveniosDialog = PacientesConveniosDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../PacientesConvenios/PacientesConveniosDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesPacientesConveniosDialog = /** @class */ (function (_super) {
            __extends(PacientesPacientesConveniosDialog, _super);
            function PacientesPacientesConveniosDialog() {
                return _super.call(this) || this;
            }
            PacientesPacientesConveniosDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PacienteId, true);
            };
            PacientesPacientesConveniosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesPacientesConveniosDialog);
            return PacientesPacientesConveniosDialog;
        }(Clinica.PacientesConveniosDialog));
        Clinica.PacientesPacientesConveniosDialog = PacientesPacientesConveniosDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosGrid = /** @class */ (function (_super) {
            __extends(PacientesConveniosGrid, _super);
            function PacientesConveniosGrid(container) {
                return _super.call(this, container) || this;
            }
            PacientesConveniosGrid.prototype.getColumnsKey = function () { return 'Clinica.PacientesConvenios'; };
            PacientesConveniosGrid.prototype.getDialogType = function () { return Clinica.PacientesConveniosDialog; };
            PacientesConveniosGrid.prototype.getIdProperty = function () { return Clinica.PacientesConveniosRow.idProperty; };
            PacientesConveniosGrid.prototype.getLocalTextPrefix = function () { return Clinica.PacientesConveniosRow.localTextPrefix; };
            PacientesConveniosGrid.prototype.getService = function () { return Clinica.PacientesConveniosService.baseUrl; };
            PacientesConveniosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesConveniosGrid);
            return PacientesConveniosGrid;
        }(Serenity.EntityGrid));
        Clinica.PacientesConveniosGrid = PacientesConveniosGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../PacientesConvenios/PacientesConveniosGrid.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesPacientesConveniosGrid = /** @class */ (function (_super) {
            __extends(PacientesPacientesConveniosGrid, _super);
            function PacientesPacientesConveniosGrid(container) {
                return _super.call(this, container) || this;
            }
            PacientesPacientesConveniosGrid.prototype.getDialogType = function () { return Clinica.PacientesPacientesConveniosDialog; };
            PacientesPacientesConveniosGrid.prototype.getColumns = function () {
                var fld = Clinica.PacientesConveniosRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.PacienteId; });
            };
            PacientesPacientesConveniosGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PacientesPacientesConveniosGrid.prototype.addButtonClick = function () {
                this.editItem({ PacienteId: this.PacienteId });
            };
            PacientesPacientesConveniosGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PacientesPacientesConveniosGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.PacienteId;
            };
            Object.defineProperty(PacientesPacientesConveniosGrid.prototype, "PacienteId", {
                get: function () {
                    return this._PacienteId;
                },
                set: function (value) {
                    if (this._PacienteId !== value) {
                        this._PacienteId = value;
                        this.setEquality('PacienteId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PacientesPacientesConveniosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesPacientesConveniosGrid);
            return PacientesPacientesConveniosGrid;
        }(Clinica.PacientesConveniosGrid));
        Clinica.PacientesPacientesConveniosGrid = PacientesPacientesConveniosGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../PacientesConvenios/PacientesConveniosDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesPacientesEmissaoNfDialog = /** @class */ (function (_super) {
            __extends(PacientesPacientesEmissaoNfDialog, _super);
            function PacientesPacientesEmissaoNfDialog() {
                return _super.call(this) || this;
            }
            PacientesPacientesEmissaoNfDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PacienteId, true);
            };
            PacientesPacientesEmissaoNfDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesPacientesEmissaoNfDialog);
            return PacientesPacientesEmissaoNfDialog;
        }(Clinica.PacientesEmissaoNfDialog));
        Clinica.PacientesPacientesEmissaoNfDialog = PacientesPacientesEmissaoNfDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfGrid = /** @class */ (function (_super) {
            __extends(PacientesEmissaoNfGrid, _super);
            function PacientesEmissaoNfGrid(container) {
                return _super.call(this, container) || this;
            }
            PacientesEmissaoNfGrid.prototype.getColumnsKey = function () { return 'Clinica.PacientesEmissaoNf'; };
            PacientesEmissaoNfGrid.prototype.getDialogType = function () { return Clinica.PacientesEmissaoNfDialog; };
            PacientesEmissaoNfGrid.prototype.getIdProperty = function () { return Clinica.PacientesEmissaoNfRow.idProperty; };
            PacientesEmissaoNfGrid.prototype.getLocalTextPrefix = function () { return Clinica.PacientesEmissaoNfRow.localTextPrefix; };
            PacientesEmissaoNfGrid.prototype.getService = function () { return Clinica.PacientesEmissaoNfService.baseUrl; };
            PacientesEmissaoNfGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesEmissaoNfGrid);
            return PacientesEmissaoNfGrid;
        }(Serenity.EntityGrid));
        Clinica.PacientesEmissaoNfGrid = PacientesEmissaoNfGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../PacientesEmissaoNf/PacientesEmissaoNfGrid.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesPacientesEmissaoNfGrid = /** @class */ (function (_super) {
            __extends(PacientesPacientesEmissaoNfGrid, _super);
            function PacientesPacientesEmissaoNfGrid(container) {
                return _super.call(this, container) || this;
            }
            PacientesPacientesEmissaoNfGrid.prototype.getDialogType = function () { return Clinica.PacientesPacientesEmissaoNfDialog; };
            PacientesPacientesEmissaoNfGrid.prototype.getColumns = function () {
                var fld = Clinica.PacientesEmissaoNfRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.PacienteId; });
            };
            PacientesPacientesEmissaoNfGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            PacientesPacientesEmissaoNfGrid.prototype.addButtonClick = function () {
                this.editItem({ PacienteId: this.PacienteId });
            };
            PacientesPacientesEmissaoNfGrid.prototype.getInitialTitle = function () {
                return null;
            };
            PacientesPacientesEmissaoNfGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.PacienteId;
            };
            Object.defineProperty(PacientesPacientesEmissaoNfGrid.prototype, "PacienteId", {
                get: function () {
                    return this._PacienteId;
                },
                set: function (value) {
                    if (this._PacienteId !== value) {
                        this._PacienteId = value;
                        this.setEquality('PacienteId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            PacientesPacientesEmissaoNfGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesPacientesEmissaoNfGrid);
            return PacientesPacientesEmissaoNfGrid;
        }(Clinica.PacientesEmissaoNfGrid));
        Clinica.PacientesPacientesEmissaoNfGrid = PacientesPacientesEmissaoNfGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfDialog = /** @class */ (function (_super) {
            __extends(PacientesEmissaoNfDialog, _super);
            function PacientesEmissaoNfDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Clinica.PacientesEmissaoNfForm(_this.idPrefix);
                // *** VALIDAÇÃO DE CPF e CNPJ***
                Exemplos.addValidationRule_CPF(_this.form.CpfResponsavel);
                Exemplos.addValidationRule_CNPJ(_this.form.CnpjResponsavel);
                // *** INICIO - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***
                _this.form.PessoaJuridica.change(function (e) {
                    // *** SÓ EXECUTA A VERIFICAÇÃO SE NOTA FISCAL TERCEIRO ESTIVER SELECIONADA!!! ***
                    if (_this.form.PessoaJuridica.value == true) {
                        var isChecked = false;
                        // *** Display a warning / confirm Dialog when the Checkbox is being checked ***
                        //var warning = new LocalText("Dialogs.Delivery.DataImport_PeripheryAssets.WarningNotaFiscalTerceiro.Confirm");
                        Q.confirm("A NF é para uma Pessoa Jurídica (empresa) ?", function () {
                            isChecked = true;
                            _this.form.PessoaJuridica.value = isChecked;
                            _this.form.CpfResponsavel.getGridField().toggle(false);
                            _this.form.CnpjResponsavel.getGridField().toggle(true);
                            _this.form.CpfResponsavel.value = null;
                        });
                        _this.form.PessoaJuridica.value = isChecked;
                    }
                    else {
                        var isChecked = true;
                        Q.confirm("A NF é para uma Pessoa Física ?", function () {
                            isChecked = false;
                            _this.form.PessoaJuridica.value = isChecked;
                            _this.form.CpfResponsavel.getGridField().toggle(true);
                            _this.form.CnpjResponsavel.getGridField().toggle(false);
                            _this.form.CnpjResponsavel.value = null;
                        });
                        _this.form.PessoaJuridica.value = isChecked;
                    }
                });
                // *** FIM - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***
                _this.form.Cep.element.blur(function (e) {
                    //Nova variável "cep" somente com dígitos.
                    var cep = _this.form.Cep.value.replace(/\D/g, '');
                    //Verifica se campo cep possui valor informado.
                    if (cep != "") {
                        //Expressão regular para validar o CEP.
                        var validacep = /^[0-9]{8}$/;
                        //Valida o formato do CEP.
                        if (validacep.test(cep)) {
                            //Preenche os campos com "..." enquanto consulta webservice.
                            _this.preenche_formulario_cep_string("...");
                            //Consulta o webservice viacep.com.br/
                            //var dados = Exemplos.BuscaCEP(cep);
                            Exemplos.BuscaCEP(cep, _this.form, _this.preenche_formulario_cep);
                            //seta o foco no campo Numero
                            _this.form.Numero.element.focus();
                        } //end if.
                        else {
                            //cep é inválido.
                            _this.limpa_formulario_cep();
                            alert("Formato de CEP inválido.");
                        }
                    } //end if.
                    else {
                        //cep sem valor, limpa formulário.
                        _this.limpa_formulario_cep();
                    }
                });
                return _this;
            }
            PacientesEmissaoNfDialog.prototype.getFormKey = function () { return Clinica.PacientesEmissaoNfForm.formKey; };
            PacientesEmissaoNfDialog.prototype.getIdProperty = function () { return Clinica.PacientesEmissaoNfRow.idProperty; };
            PacientesEmissaoNfDialog.prototype.getLocalTextPrefix = function () { return Clinica.PacientesEmissaoNfRow.localTextPrefix; };
            PacientesEmissaoNfDialog.prototype.getNameProperty = function () { return Clinica.PacientesEmissaoNfRow.nameProperty; };
            PacientesEmissaoNfDialog.prototype.getService = function () { return Clinica.PacientesEmissaoNfService.baseUrl; };
            PacientesEmissaoNfDialog.prototype.limpa_formulario_cep = function () {
                // Limpa valores do formulário de cep.
                this.form.Rua.value = "";
                this.form.Numero.value = "";
                this.form.Complemento.value = "";
                this.form.Bairro.value = "";
                this.form.Cidade.value = "";
                this.form.CodigoIbgeCidade.value = "";
                this.form.Estado.value = "";
                this.form.Pais.value = "";
            };
            PacientesEmissaoNfDialog.prototype.preenche_formulario_cep = function (thisForm, dados_cep) {
                // Atribui valores do formulário de cep.
                //Atualiza os campos com os valores da consulta.
                thisForm.Rua.value = dados_cep.logradouro;
                thisForm.Numero.value = "";
                thisForm.Complemento.value = "";
                thisForm.Bairro.value = dados_cep.bairro;
                thisForm.Cidade.value = dados_cep.localidade;
                thisForm.CodigoIbgeCidade.value = dados_cep.ibge;
                thisForm.Estado.value = dados_cep.uf;
                thisForm.Pais.value = "Brasil";
            };
            PacientesEmissaoNfDialog.prototype.preenche_formulario_cep_string = function (info) {
                // Atribui valores do formulário de cep com alguma string fornecida.
                this.form.Rua.value = info;
                this.form.Numero.value = info;
                this.form.Complemento.value = info;
                this.form.Bairro.value = info;
                this.form.Cidade.value = info;
                this.form.CodigoIbgeCidade.value = info;
                this.form.Estado.value = info;
                this.form.Pais.value = info;
            };
            PacientesEmissaoNfDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                //this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            //Adicionado para evitar o disparo da validacao no keyup e limpeza do icone de erro quando o usuario digitar, padroes do plugin jaqueryvalidation utilizado
            PacientesEmissaoNfDialog.prototype.getValidatorOptions = function () {
                var opts = _super.prototype.getValidatorOptions.call(this);
                opts.onkeyup = false;
                opts.focusCleanup = true;
                return opts;
            };
            PacientesEmissaoNfDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], PacientesEmissaoNfDialog);
            return PacientesEmissaoNfDialog;
        }(Serenity.EntityDialog));
        Clinica.PacientesEmissaoNfDialog = PacientesEmissaoNfDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfEditor = /** @class */ (function (_super) {
            __extends(PacientesEmissaoNfEditor, _super);
            function PacientesEmissaoNfEditor(container) {
                return _super.call(this, container) || this;
            }
            PacientesEmissaoNfEditor.prototype.getColumnsKey = function () { return 'Clinica.PacientesEmissaoNf'; };
            PacientesEmissaoNfEditor.prototype.getDialogType = function () { return Clinica.PacientesEmissaoNfEditorDialog; };
            PacientesEmissaoNfEditor.prototype.getLocalTextPrefix = function () { return Clinica.PacientesEmissaoNfRow.localTextPrefix; };
            PacientesEmissaoNfEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesEmissaoNfEditor);
            return PacientesEmissaoNfEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.PacientesEmissaoNfEditor = PacientesEmissaoNfEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfEditorDialog = /** @class */ (function (_super) {
            __extends(PacientesEmissaoNfEditorDialog, _super);
            function PacientesEmissaoNfEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.PacientesEmissaoNfForm(_this.idPrefix);
                return _this;
            }
            PacientesEmissaoNfEditorDialog.prototype.getFormKey = function () { return Clinica.PacientesEmissaoNfForm.formKey; };
            PacientesEmissaoNfEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.PacientesEmissaoNfRow.localTextPrefix; };
            PacientesEmissaoNfEditorDialog.prototype.getNameProperty = function () { return Clinica.PacientesEmissaoNfRow.nameProperty; };
            PacientesEmissaoNfEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PacientesEmissaoNfEditorDialog);
            return PacientesEmissaoNfEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.PacientesEmissaoNfEditorDialog = PacientesEmissaoNfEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosEditor = /** @class */ (function (_super) {
            __extends(PacientesConveniosEditor, _super);
            function PacientesConveniosEditor(container) {
                return _super.call(this, container) || this;
            }
            PacientesConveniosEditor.prototype.getColumnsKey = function () { return 'Clinica.PacientesConvenios'; };
            PacientesConveniosEditor.prototype.getDialogType = function () { return Clinica.PacientesConveniosEditorDialog; };
            PacientesConveniosEditor.prototype.getLocalTextPrefix = function () { return Clinica.PacientesConveniosRow.localTextPrefix; };
            PacientesConveniosEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesConveniosEditor);
            return PacientesConveniosEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.PacientesConveniosEditor = PacientesConveniosEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosEditorDialog = /** @class */ (function (_super) {
            __extends(PacientesConveniosEditorDialog, _super);
            function PacientesConveniosEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.PacientesConveniosForm(_this.idPrefix);
                return _this;
            }
            PacientesConveniosEditorDialog.prototype.getFormKey = function () { return Clinica.PacientesConveniosForm.formKey; };
            PacientesConveniosEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.PacientesConveniosRow.localTextPrefix; };
            PacientesConveniosEditorDialog.prototype.getNameProperty = function () { return Clinica.PacientesConveniosRow.nameProperty; };
            PacientesConveniosEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PacientesConveniosEditorDialog);
            return PacientesConveniosEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.PacientesConveniosEditorDialog = PacientesConveniosEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesDialog = /** @class */ (function (_super) {
            __extends(PacientesDialog, _super);
            function PacientesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Clinica.PacientesForm(_this.idPrefix);
                // *** INICIO - TRATAMENTO DOS TABS ***
                _this.pacientesconveniosGrid = new Exemplos.Clinica.PacientesPacientesConveniosGrid(_this.byId('PacientesConveniosGrid'));
                _this.pacientesconveniosGrid.element.flexHeightOnly(1);
                _this.pacientesemissaonfGrid = new Exemplos.Clinica.PacientesPacientesEmissaoNfGrid(_this.byId('PacientesEmissaoNfGrid'));
                _this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
                // *** FIM - TRATAMENTO DOS TABS ***
                // *** CUSTOM MESSAGE ***
                //this.customDIV = jQuery("<div style='text-align:center;color:red'>TESTE DE TEXTO EXTRA!</div>");
                //this.customDIV.appendTo(this.form.Status.element.closest(".field"));
                // *** VALIDAÇÃO DE CPF e CNPJ***
                Exemplos.addValidationRule_CPF(_this.form.CPF);
                //Exemplos.addValidationRule_CPF(this.form.NotaFiscalCPF, { uniqueName: this.uniqueName });
                //Exemplos.addValidationRule_CNPJ(this.form.NotaFiscalCNPJ, { text: "O CNPJ está inválido, mané !!!",  });
                //// *** INICIO - CHECKBOX CHANGE - NotaFiscalTerceiro ***
                //this.form.NotaFiscalTerceiro.change(e => {
                //    if (this.form.NotaFiscalTerceiro.value == true) {
                //        var isChecked = false;
                //        // *** Display a warning / confirm Dialog when the Checkbox is being checked ***
                //        //var warning = new LocalText("Dialogs.Delivery.DataImport_PeripheryAssets.WarningNotaFiscalTerceiro.Confirm");
                //        Q.confirm("Confirma o cadastro da emissão da NF de Terceiros ?",
                //            () => {
                //                //// show
                //                //this.customDIV.show();
                //                isChecked = true;
                //                //var texto = this.form.NotaFiscalNome.getGridField().find('.caption').prop('outerHTML').split('Nome').join('Razão Social');
                //                //this.form.NotaFiscalNome.getGridField().find('.caption').prop('outerHTML', texto);
                //                this.form.NotaFiscalTerceiro.value = isChecked;
                //                this.form.NotaFiscalNome.getGridField().toggle(true);
                //                this.form.NotaFiscalPessoaFisica.getGridField().toggle(true);
                //                this.form.NotaFiscalCPF.getGridField().toggle(true);
                //                this.form.NotaFiscalCNPJ.getGridField().toggle(false);
                //                this.form.NotaFiscalEndereco.getGridField().toggle(true);
                //                this.form.NotaFiscalBairro.getGridField().toggle(true);
                //                this.form.NotaFiscalCidade.getGridField().toggle(true);
                //                this.form.NotaFiscalEstadoId.getGridField().toggle(true);
                //                this.form.NotaFiscalEmail.getGridField().toggle(true);
                //                this.form.NotaFiscalNome.value = null;
                //                this.form.NotaFiscalPessoaFisica.value = true;
                //                this.form.NotaFiscalCPF.value = null;
                //                this.form.NotaFiscalCNPJ.value = null;
                //                this.form.NotaFiscalEndereco.value = null;
                //                this.form.NotaFiscalBairro.value = null;
                //                this.form.NotaFiscalCidade.value = null;
                //                this.form.NotaFiscalEstadoId.value = null;
                //                this.form.NotaFiscalEmail.value = null;
                //            }
                //        );
                //        this.form.NotaFiscalTerceiro.value = isChecked;
                //    }
                //    else {
                //        var isChecked = true;
                //        Q.confirm("Confirma a exclusão da emissão da NF de Terceiros ?\nOs dados existentes serão descartados.",
                //            () => {
                //                //this.customDIV.hide();
                //                isChecked = false;
                //                this.form.NotaFiscalTerceiro.value = isChecked;
                //                this.form.NotaFiscalNome.getGridField().toggle(false);
                //                this.form.NotaFiscalPessoaFisica.getGridField().toggle(false);
                //                this.form.NotaFiscalCPF.getGridField().toggle(false);
                //                this.form.NotaFiscalCNPJ.getGridField().toggle(false);
                //                this.form.NotaFiscalEndereco.getGridField().toggle(false);
                //                this.form.NotaFiscalBairro.getGridField().toggle(false);
                //                this.form.NotaFiscalCidade.getGridField().toggle(false);
                //                this.form.NotaFiscalEstadoId.getGridField().toggle(false);
                //                this.form.NotaFiscalEmail.getGridField().toggle(false);
                //                this.form.NotaFiscalNome.value = null;
                //                this.form.NotaFiscalCPF.value = null;
                //                this.form.NotaFiscalCNPJ.value = null;
                //                this.form.NotaFiscalEndereco.value = null;
                //                this.form.NotaFiscalBairro.value = null;
                //                this.form.NotaFiscalCidade.value = null;
                //                this.form.NotaFiscalEstadoId.value = null;
                //                this.form.NotaFiscalEmail.value = null;
                //            }
                //        );
                //        this.form.NotaFiscalTerceiro.value = isChecked;
                //    }
                //});
                //// *** FIM - CHECKBOX CHANGE - NotaFiscalTerceiro ***
                //// *** INICIO - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***
                //this.form.NotaFiscalPessoaFisica.change(e => {
                //    // *** SÓ EXECUTA A VERIFICAÇÃO SE NOTA FISCAL TERCEIRO ESTIVER SELECIONADA!!! ***
                //    if (this.form.NotaFiscalTerceiro.value == true) {
                //        if (this.form.NotaFiscalPessoaFisica.value == true) {
                //            var isChecked = false;
                //            // *** Display a warning / confirm Dialog when the Checkbox is being checked ***
                //            //var warning = new LocalText("Dialogs.Delivery.DataImport_PeripheryAssets.WarningNotaFiscalTerceiro.Confirm");
                //            Q.confirm("A NF de Terceiros é uma Pessoa Física ?",
                //                () => {
                //                    isChecked = true;
                //                    this.form.NotaFiscalPessoaFisica.value = isChecked;
                //                    this.form.NotaFiscalCPF.getGridField().toggle(true);
                //                    this.form.NotaFiscalCNPJ.getGridField().toggle(false);
                //                    this.form.NotaFiscalCPF.value = null;
                //                }
                //            );
                //            this.form.NotaFiscalPessoaFisica.value = isChecked;
                //        }
                //        else {
                //            var isChecked = true;
                //            Q.confirm("A NF de Terceiros é uma Pessoa Jurídica (empresa) ?",
                //                () => {
                //                    isChecked = false;
                //                    this.form.NotaFiscalPessoaFisica.value = isChecked;
                //                    this.form.NotaFiscalCPF.getGridField().toggle(false);
                //                    this.form.NotaFiscalCNPJ.getGridField().toggle(true);
                //                    this.form.NotaFiscalCPF.value = null;
                //                }
                //            );
                //            this.form.NotaFiscalPessoaFisica.value = isChecked;
                //        }
                //    }
                //});
                //// *** FIM - CHECKBOX CHANGE - NotaFiscalPessoaFisica ***
                // *** DIALOG PARA CONFIRMAR SE VAI SALVAR OU NÃO ***
                Exemplos.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            PacientesDialog.prototype.getFormKey = function () { return Clinica.PacientesForm.formKey; };
            PacientesDialog.prototype.getIdProperty = function () { return Clinica.PacientesRow.idProperty; };
            PacientesDialog.prototype.getLocalTextPrefix = function () { return Clinica.PacientesRow.localTextPrefix; };
            PacientesDialog.prototype.getNameProperty = function () { return Clinica.PacientesRow.nameProperty; };
            PacientesDialog.prototype.getService = function () { return Clinica.PacientesService.baseUrl; };
            PacientesDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                //this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
                //this.form.Paciente.element()
            };
            //Adicionado para evitar o disparo da validacao no keyup e limpeza do icone de erro quando o usuario digitar, padroes do plugin jaqueryvalidation utilizado
            PacientesDialog.prototype.getValidatorOptions = function () {
                var opts = _super.prototype.getValidatorOptions.call(this);
                opts.onkeyup = false;
                opts.focusCleanup = true;
                return opts;
            };
            PacientesDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                this.dialogTitle = "Novo Paciente";
            };
            PacientesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("print-pacientes-button").toggleClass('disabled', this.isNew());
            };
            PacientesDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Exemplos.Common.ReportHelper.createToolButton({
                    title: 'Imprimir',
                    cssClass: 'export-pdf-button print-pacientes-button disabled',
                    reportKey: 'Pacientes.PacientesPrint',
                    extension: 'pdf',
                    getParams: function () { return ({ PacientesIdList: [_this.get_entityId()] }); }
                }));
                return buttons;
            };
            PacientesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // se for atualizar o dado, registra a data da atualização
                if (this.isEditMode()) {
                    this.form.DataUltimaAtualizacao.valueAsDate = new Date();
                    ////this.form.Paciente.element.attr('data-toggle', 'tooltip');
                    ////this.form.CPF.element.attr('data-toggle', 'TESTE');
                    //if (this.form.NotaFiscalTerceiro.value == true) {
                    //    this.form.NotaFiscalNome.getGridField().toggle(true);
                    //    this.form.NotaFiscalPessoaFisica.getGridField().toggle(true);
                    //    this.form.NotaFiscalCPF.getGridField().toggle(true);
                    //    this.form.NotaFiscalCNPJ.getGridField().toggle(false);
                    //    this.form.NotaFiscalEndereco.getGridField().toggle(true);
                    //    this.form.NotaFiscalBairro.getGridField().toggle(true);
                    //    this.form.NotaFiscalCidade.getGridField().toggle(true);
                    //    this.form.NotaFiscalEstadoId.getGridField().toggle(true);
                    //    this.form.NotaFiscalEmail.getGridField().toggle(true);
                    //}
                }
                //// passa o nome do form do PACIENTES
                this.form.ContatosList.myParentForm = "PACIENTES";
            };
            PacientesDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            PacientesDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            PacientesDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'PacientesConvenios', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'PacientesEmissaoNf', this.isNewOrDeleted());
                this.pacientesconveniosGrid.PacienteId = entity.PacienteId;
                this.pacientesemissaonfGrid.PacienteId = entity.PacienteId;
            };
            PacientesDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Clinica.Pacientes');
            };
            PacientesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], PacientesDialog);
            return PacientesDialog;
        }(Serenity.EntityDialog));
        Clinica.PacientesDialog = PacientesDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesGrid = /** @class */ (function (_super) {
            __extends(PacientesGrid, _super);
            function PacientesGrid(container) {
                return _super.call(this, container) || this;
            }
            PacientesGrid.prototype.getColumnsKey = function () { return 'Clinica.Pacientes'; };
            PacientesGrid.prototype.getDialogType = function () { return Clinica.PacientesDialog; };
            PacientesGrid.prototype.getIdProperty = function () { return Clinica.PacientesRow.idProperty; };
            PacientesGrid.prototype.getLocalTextPrefix = function () { return Clinica.PacientesRow.localTextPrefix; };
            PacientesGrid.prototype.getService = function () { return Clinica.PacientesService.baseUrl; };
            PacientesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PacientesGrid);
            return PacientesGrid;
        }(Serenity.EntityGrid));
        Clinica.PacientesGrid = PacientesGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresDialog = /** @class */ (function (_super) {
            __extends(FornecedoresDialog, _super);
            function FornecedoresDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Clinica.FornecedoresForm(_this.idPrefix);
                return _this;
                //// *** INICIO - CHECKBOX CHANGE - Inativo ***
                //this.form.Inativo.change(e => {
                //
                //    if (this.form.Inativo.value == true) {
                //
                //        var isChecked = false;
                //
                //        Q.confirm("Confirma a seleção ?", 
                //            () => {
                //                isChecked = true;
                //
                //                //var texto = this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML').split('Nome').join('TEXTO NOVO');
                //                //this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML', texto);
                //
                //                this.form.Inativo.value = isChecked;
                //                this.form.ALGUMCAMPO.getGridField().toggle(true);
                //
                //                this.form.ALGUMCAMPO.value = null;
                //
                //            }
                //        );
                //
                //        this.form.Inativo.value = isChecked;
                //
                //      }
                //      else {
                //
                //          var isChecked = true;
                //
                //          Q.confirm("Confirma a exclusão ?\nOs dados existentes serão descartados.", 
                //              () => {
                //              isChecked = false;
                //
                //                  this.form.Inativo.value = isChecked;
                //                  this.form.ALGUMCAMPO.getGridField().toggle(false);
                //
                //            }
                //        );
                //
                //        this.form.Inativo.value = isChecked;
                //
                //    }
                //});
                //// *** FIM - CHECKBOX CHANGE - NotaFiscalTerceiro ***
                //
            }
            FornecedoresDialog.prototype.getFormKey = function () { return Clinica.FornecedoresForm.formKey; };
            FornecedoresDialog.prototype.getIdProperty = function () { return Clinica.FornecedoresRow.idProperty; };
            FornecedoresDialog.prototype.getLocalTextPrefix = function () { return Clinica.FornecedoresRow.localTextPrefix; };
            FornecedoresDialog.prototype.getNameProperty = function () { return Clinica.FornecedoresRow.nameProperty; };
            FornecedoresDialog.prototype.getService = function () { return Clinica.FornecedoresService.baseUrl; };
            FornecedoresDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            FornecedoresDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // SET UPDATE DATE IN EDIT MODE
                if (this.isEditMode()) {
                    //if (this.form.Inativo.value == true)
                    //{
                    //    this.form.ALGUMCAMPO.getGridField().toggle(true);
                    //}
                }
            };
            FornecedoresDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], FornecedoresDialog);
            return FornecedoresDialog;
        }(Serenity.EntityDialog));
        Clinica.FornecedoresDialog = FornecedoresDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresEditor = /** @class */ (function (_super) {
            __extends(FornecedoresEditor, _super);
            function FornecedoresEditor(container) {
                return _super.call(this, container) || this;
            }
            FornecedoresEditor.prototype.getColumnsKey = function () { return 'Clinica.Fornecedores'; };
            FornecedoresEditor.prototype.getDialogType = function () { return Clinica.FornecedoresEditorDialog; };
            FornecedoresEditor.prototype.getLocalTextPrefix = function () { return Clinica.FornecedoresRow.localTextPrefix; };
            FornecedoresEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], FornecedoresEditor);
            return FornecedoresEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.FornecedoresEditor = FornecedoresEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresEditorDialog = /** @class */ (function (_super) {
            __extends(FornecedoresEditorDialog, _super);
            function FornecedoresEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.FornecedoresForm(_this.idPrefix);
                return _this;
            }
            FornecedoresEditorDialog.prototype.getFormKey = function () { return Clinica.FornecedoresForm.formKey; };
            FornecedoresEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.FornecedoresRow.localTextPrefix; };
            FornecedoresEditorDialog.prototype.getNameProperty = function () { return Clinica.FornecedoresRow.nameProperty; };
            FornecedoresEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], FornecedoresEditorDialog);
            return FornecedoresEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.FornecedoresEditorDialog = FornecedoresEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresGrid = /** @class */ (function (_super) {
            __extends(FornecedoresGrid, _super);
            function FornecedoresGrid(container) {
                return _super.call(this, container) || this;
            }
            FornecedoresGrid.prototype.getColumnsKey = function () { return 'Clinica.Fornecedores'; };
            FornecedoresGrid.prototype.getDialogType = function () { return Clinica.FornecedoresDialog; };
            FornecedoresGrid.prototype.getIdProperty = function () { return Clinica.FornecedoresRow.idProperty; };
            FornecedoresGrid.prototype.getLocalTextPrefix = function () { return Clinica.FornecedoresRow.localTextPrefix; };
            FornecedoresGrid.prototype.getService = function () { return Clinica.FornecedoresService.baseUrl; };
            FornecedoresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FornecedoresGrid);
            return FornecedoresGrid;
        }(Serenity.EntityGrid));
        Clinica.FornecedoresGrid = FornecedoresGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsDialog = /** @class */ (function (_super) {
            __extends(ExceptionsDialog, _super);
            function ExceptionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.ExceptionsForm(_this.idPrefix);
                return _this;
            }
            ExceptionsDialog.prototype.getFormKey = function () { return Clinica.ExceptionsForm.formKey; };
            ExceptionsDialog.prototype.getIdProperty = function () { return Clinica.ExceptionsRow.idProperty; };
            ExceptionsDialog.prototype.getLocalTextPrefix = function () { return Clinica.ExceptionsRow.localTextPrefix; };
            ExceptionsDialog.prototype.getNameProperty = function () { return Clinica.ExceptionsRow.nameProperty; };
            ExceptionsDialog.prototype.getService = function () { return Clinica.ExceptionsService.baseUrl; };
            ExceptionsDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            ExceptionsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ExceptionsDialog);
            return ExceptionsDialog;
        }(Serenity.EntityDialog));
        Clinica.ExceptionsDialog = ExceptionsDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsEditor = /** @class */ (function (_super) {
            __extends(ExceptionsEditor, _super);
            function ExceptionsEditor(container) {
                return _super.call(this, container) || this;
            }
            ExceptionsEditor.prototype.getColumnsKey = function () { return 'Clinica.Exceptions'; };
            ExceptionsEditor.prototype.getDialogType = function () { return Clinica.ExceptionsEditorDialog; };
            ExceptionsEditor.prototype.getLocalTextPrefix = function () { return Clinica.ExceptionsRow.localTextPrefix; };
            ExceptionsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ExceptionsEditor);
            return ExceptionsEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.ExceptionsEditor = ExceptionsEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsEditorDialog = /** @class */ (function (_super) {
            __extends(ExceptionsEditorDialog, _super);
            function ExceptionsEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.ExceptionsForm(_this.idPrefix);
                return _this;
            }
            ExceptionsEditorDialog.prototype.getFormKey = function () { return Clinica.ExceptionsForm.formKey; };
            ExceptionsEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.ExceptionsRow.localTextPrefix; };
            ExceptionsEditorDialog.prototype.getNameProperty = function () { return Clinica.ExceptionsRow.nameProperty; };
            ExceptionsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ExceptionsEditorDialog);
            return ExceptionsEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.ExceptionsEditorDialog = ExceptionsEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsGrid = /** @class */ (function (_super) {
            __extends(ExceptionsGrid, _super);
            function ExceptionsGrid(container) {
                return _super.call(this, container) || this;
            }
            ExceptionsGrid.prototype.getColumnsKey = function () { return 'Clinica.Exceptions'; };
            ExceptionsGrid.prototype.getDialogType = function () { return Clinica.ExceptionsDialog; };
            ExceptionsGrid.prototype.getIdProperty = function () { return Clinica.ExceptionsRow.idProperty; };
            ExceptionsGrid.prototype.getLocalTextPrefix = function () { return Clinica.ExceptionsRow.localTextPrefix; };
            ExceptionsGrid.prototype.getService = function () { return Clinica.ExceptionsService.baseUrl; };
            ExceptionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExceptionsGrid);
            return ExceptionsGrid;
        }(Serenity.EntityGrid));
        Clinica.ExceptionsGrid = ExceptionsGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisDialog = /** @class */ (function (_super) {
            __extends(EstadosCivisDialog, _super);
            function EstadosCivisDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.EstadosCivisForm(_this.idPrefix);
                return _this;
            }
            EstadosCivisDialog.prototype.getFormKey = function () { return Clinica.EstadosCivisForm.formKey; };
            EstadosCivisDialog.prototype.getIdProperty = function () { return Clinica.EstadosCivisRow.idProperty; };
            EstadosCivisDialog.prototype.getLocalTextPrefix = function () { return Clinica.EstadosCivisRow.localTextPrefix; };
            EstadosCivisDialog.prototype.getNameProperty = function () { return Clinica.EstadosCivisRow.nameProperty; };
            EstadosCivisDialog.prototype.getService = function () { return Clinica.EstadosCivisService.baseUrl; };
            EstadosCivisDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            EstadosCivisDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], EstadosCivisDialog);
            return EstadosCivisDialog;
        }(Serenity.EntityDialog));
        Clinica.EstadosCivisDialog = EstadosCivisDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisEditor = /** @class */ (function (_super) {
            __extends(EstadosCivisEditor, _super);
            function EstadosCivisEditor(container) {
                return _super.call(this, container) || this;
            }
            EstadosCivisEditor.prototype.getColumnsKey = function () { return 'Clinica.EstadosCivis'; };
            EstadosCivisEditor.prototype.getDialogType = function () { return Clinica.EstadosCivisEditorDialog; };
            EstadosCivisEditor.prototype.getLocalTextPrefix = function () { return Clinica.EstadosCivisRow.localTextPrefix; };
            EstadosCivisEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EstadosCivisEditor);
            return EstadosCivisEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.EstadosCivisEditor = EstadosCivisEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisEditorDialog = /** @class */ (function (_super) {
            __extends(EstadosCivisEditorDialog, _super);
            function EstadosCivisEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.EstadosCivisForm(_this.idPrefix);
                return _this;
            }
            EstadosCivisEditorDialog.prototype.getFormKey = function () { return Clinica.EstadosCivisForm.formKey; };
            EstadosCivisEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.EstadosCivisRow.localTextPrefix; };
            EstadosCivisEditorDialog.prototype.getNameProperty = function () { return Clinica.EstadosCivisRow.nameProperty; };
            EstadosCivisEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EstadosCivisEditorDialog);
            return EstadosCivisEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.EstadosCivisEditorDialog = EstadosCivisEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisGrid = /** @class */ (function (_super) {
            __extends(EstadosCivisGrid, _super);
            function EstadosCivisGrid(container) {
                return _super.call(this, container) || this;
            }
            EstadosCivisGrid.prototype.getColumnsKey = function () { return 'Clinica.EstadosCivis'; };
            EstadosCivisGrid.prototype.getDialogType = function () { return Clinica.EstadosCivisDialog; };
            EstadosCivisGrid.prototype.getIdProperty = function () { return Clinica.EstadosCivisRow.idProperty; };
            EstadosCivisGrid.prototype.getLocalTextPrefix = function () { return Clinica.EstadosCivisRow.localTextPrefix; };
            EstadosCivisGrid.prototype.getService = function () { return Clinica.EstadosCivisService.baseUrl; };
            EstadosCivisGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EstadosCivisGrid);
            return EstadosCivisGrid;
        }(Serenity.EntityGrid));
        Clinica.EstadosCivisGrid = EstadosCivisGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosEditor = /** @class */ (function (_super) {
            __extends(EnderecosEditor, _super);
            function EnderecosEditor(container) {
                return _super.call(this, container) || this;
            }
            EnderecosEditor.prototype.getColumnsKey = function () { return 'Clinica.Enderecos'; };
            EnderecosEditor.prototype.getDialogType = function () { return Clinica.EnderecosEditorDialog; };
            EnderecosEditor.prototype.getLocalTextPrefix = function () { return Clinica.EnderecosRow.localTextPrefix; };
            EnderecosEditor.prototype.getAddButtonCaption = function () {
                return "Adicionar";
            };
            EnderecosEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.TipoEndereco = Clinica.TiposEnderecosRow.getLookup()
                    .itemById[row.TipoEnderecoId].TipoEndereco;
                return true;
            };
            EnderecosEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EnderecosEditor);
            return EnderecosEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.EnderecosEditor = EnderecosEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosEditorDialog = /** @class */ (function (_super) {
            __extends(EnderecosEditorDialog, _super);
            function EnderecosEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Clinica.EnderecosForm(_this.idPrefix);
                _this.form.Cep.element.blur(function (e) {
                    //Nova variável "cep" somente com dígitos.
                    var cep = _this.form.Cep.value.replace(/\D/g, '');
                    //Verifica se campo cep possui valor informado.
                    if (cep != "") {
                        //Expressão regular para validar o CEP.
                        var validacep = /^[0-9]{8}$/;
                        //Valida o formato do CEP.
                        if (validacep.test(cep)) {
                            //Preenche os campos com "..." enquanto consulta webservice.
                            _this.preenche_formulario_cep_string("...");
                            //Consulta o webservice viacep.com.br/
                            //var dados = Exemplos.BuscaCEP(cep);
                            Exemplos.BuscaCEP(cep, _this.form, _this.preenche_formulario_cep);
                            //seta o foco no campo Numero
                            _this.form.Numero.element.focus();
                        } //end if.
                        else {
                            //cep é inválido.
                            _this.limpa_formulario_cep();
                            alert("Formato de CEP inválido.");
                        }
                    } //end if.
                    else {
                        //cep sem valor, limpa formulário.
                        _this.limpa_formulario_cep();
                    }
                });
                return _this;
            }
            EnderecosEditorDialog.prototype.getFormKey = function () { return Clinica.EnderecosForm.formKey; };
            EnderecosEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.EnderecosRow.localTextPrefix; };
            EnderecosEditorDialog.prototype.getNameProperty = function () { return Clinica.EnderecosRow.nameProperty; };
            EnderecosEditorDialog.prototype.limpa_formulario_cep = function () {
                // Limpa valores do formulário de cep.
                this.form.Rua.value = "";
                this.form.Numero.value = "";
                this.form.Complemento.value = "";
                this.form.Bairro.value = "";
                this.form.Cidade.value = "";
                this.form.CodigoIbgeCidade.value = "";
                this.form.Estado.value = "";
                this.form.Pais.value = "";
            };
            EnderecosEditorDialog.prototype.preenche_formulario_cep = function (thisForm, dados_cep) {
                // Atribui valores do formulário de cep.
                //Atualiza os campos com os valores da consulta.
                thisForm.Rua.value = dados_cep.logradouro;
                thisForm.Numero.value = "";
                thisForm.Complemento.value = "";
                thisForm.Bairro.value = dados_cep.bairro;
                thisForm.Cidade.value = dados_cep.localidade;
                thisForm.CodigoIbgeCidade.value = dados_cep.ibge;
                thisForm.Estado.value = dados_cep.uf;
                thisForm.Pais.value = "Brasil";
            };
            EnderecosEditorDialog.prototype.preenche_formulario_cep_string = function (info) {
                // Atribui valores do formulário de cep com alguma string fornecida.
                this.form.Rua.value = info;
                this.form.Numero.value = info;
                this.form.Complemento.value = info;
                this.form.Bairro.value = info;
                this.form.Cidade.value = info;
                this.form.CodigoIbgeCidade.value = info;
                this.form.Estado.value = info;
                this.form.Pais.value = info;
            };
            EnderecosEditorDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                this.dialogTitle = "Novo Endereço";
            };
            EnderecosEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EnderecosEditorDialog);
            return EnderecosEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.EnderecosEditorDialog = EnderecosEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosDialog = /** @class */ (function (_super) {
            __extends(ConveniosDialog, _super);
            function ConveniosDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Clinica.ConveniosForm(_this.idPrefix);
                // *** INICIO - CHECKBOX CHANGE - Inativo ***
                _this.form.Inativo.change(function (e) {
                    if (_this.form.Inativo.value == true) {
                        var isChecked = false;
                        Q.confirm("Confirma a inativação desse Convênio ?", function () {
                            isChecked = true;
                            //var texto = this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML').split('Nome').join('TEXTO NOVO');
                            //this.form.ALGUMCAMPO.getGridField().find('.caption').prop('outerHTML', texto);
                            _this.form.Inativo.value = isChecked;
                            _this.form.DataFim.getGridField().toggle(true);
                            _this.form.MotivoCancelamento.getGridField().toggle(true);
                            _this.form.DataFim.valueAsDate = new Date();
                            _this.form.MotivoCancelamento.value = null;
                        });
                        _this.form.Inativo.value = isChecked;
                    }
                    else {
                        var isChecked = true;
                        Q.confirm("Confirma a REativação desse convênio ?\nOs dados existentes serão descartados.", function () {
                            isChecked = false;
                            if (_this.isEditMode) {
                                var breakline = "";
                                if (_this.form.Observacao.value != "")
                                    breakline = "\r\n\r\n";
                                _this.form.Observacao.value += breakline +
                                    "CONVÊNIO CANCELADO EM: " + (Q.formatDate(_this.form.DataFim.valueAsDate, "dd-MM-yyyy HH:mm")), +"\r\nCONVÊNIO REATIVADO EM: " + (Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"));
                            }
                            _this.form.Inativo.value = isChecked;
                            _this.form.DataFim.getGridField().toggle(false);
                            _this.form.MotivoCancelamento.getGridField().toggle(false);
                        });
                        _this.form.Inativo.value = isChecked;
                    }
                });
                // *** FIM - CHECKBOX CHANGE - NotaFiscalTerceiro ***
                // *** DIALOG PARA CONFIRMAR SE VAI SALVAR OU NÃO ***
                Exemplos.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            ConveniosDialog.prototype.getFormKey = function () { return Clinica.ConveniosForm.formKey; };
            ConveniosDialog.prototype.getIdProperty = function () { return Clinica.ConveniosRow.idProperty; };
            ConveniosDialog.prototype.getLocalTextPrefix = function () { return Clinica.ConveniosRow.localTextPrefix; };
            ConveniosDialog.prototype.getNameProperty = function () { return Clinica.ConveniosRow.nameProperty; };
            ConveniosDialog.prototype.getService = function () { return Clinica.ConveniosService.baseUrl; };
            ConveniosDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            ConveniosDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // SET UPDATE DATE IN EDIT MODE
                if (this.isEditMode()) {
                    this.form.DataUltimaAtualizacao.valueAsDate = new Date();
                    if (this.form.Inativo.value == true) {
                        this.form.DataFim.getGridField().toggle(true);
                        this.form.MotivoCancelamento.getGridField().toggle(true);
                    }
                }
            };
            ConveniosDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            ConveniosDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            ConveniosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ConveniosDialog);
            return ConveniosDialog;
        }(Serenity.EntityDialog));
        Clinica.ConveniosDialog = ConveniosDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosEditor = /** @class */ (function (_super) {
            __extends(ConveniosEditor, _super);
            function ConveniosEditor(container) {
                return _super.call(this, container) || this;
            }
            ConveniosEditor.prototype.getColumnsKey = function () { return 'Clinica.Convenios'; };
            ConveniosEditor.prototype.getDialogType = function () { return Clinica.ConveniosEditorDialog; };
            ConveniosEditor.prototype.getLocalTextPrefix = function () { return Clinica.ConveniosRow.localTextPrefix; };
            ConveniosEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ConveniosEditor);
            return ConveniosEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.ConveniosEditor = ConveniosEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosEditorDialog = /** @class */ (function (_super) {
            __extends(ConveniosEditorDialog, _super);
            function ConveniosEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.ConveniosForm(_this.idPrefix);
                return _this;
            }
            ConveniosEditorDialog.prototype.getFormKey = function () { return Clinica.ConveniosForm.formKey; };
            ConveniosEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.ConveniosRow.localTextPrefix; };
            ConveniosEditorDialog.prototype.getNameProperty = function () { return Clinica.ConveniosRow.nameProperty; };
            ConveniosEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ConveniosEditorDialog);
            return ConveniosEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.ConveniosEditorDialog = ConveniosEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosGrid = /** @class */ (function (_super) {
            __extends(ConveniosGrid, _super);
            function ConveniosGrid(container) {
                return _super.call(this, container) || this;
            }
            ConveniosGrid.prototype.getColumnsKey = function () { return 'Clinica.Convenios'; };
            ConveniosGrid.prototype.getDialogType = function () { return Clinica.ConveniosDialog; };
            ConveniosGrid.prototype.getIdProperty = function () { return Clinica.ConveniosRow.idProperty; };
            ConveniosGrid.prototype.getLocalTextPrefix = function () { return Clinica.ConveniosRow.localTextPrefix; };
            ConveniosGrid.prototype.getService = function () { return Clinica.ConveniosService.baseUrl; };
            ConveniosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConveniosGrid);
            return ConveniosGrid;
        }(Serenity.EntityGrid));
        Clinica.ConveniosGrid = ConveniosGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosDialog = /** @class */ (function (_super) {
            __extends(ContatosDialog, _super);
            function ContatosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Clinica.ContatosForm(_this.idPrefix);
                return _this;
            }
            ContatosDialog.prototype.getFormKey = function () { return Clinica.ContatosForm.formKey; };
            ContatosDialog.prototype.getIdProperty = function () { return Clinica.ContatosRow.idProperty; };
            ContatosDialog.prototype.getLocalTextPrefix = function () { return Clinica.ContatosRow.localTextPrefix; };
            ContatosDialog.prototype.getNameProperty = function () { return Clinica.ContatosRow.nameProperty; };
            ContatosDialog.prototype.getService = function () { return Clinica.ContatosService.baseUrl; };
            ContatosDialog.prototype.dialogOpen = function () {
                _super.prototype.dialogOpen.call(this);
                this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
            };
            ContatosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ContatosDialog);
            return ContatosDialog;
        }(Serenity.EntityDialog));
        Clinica.ContatosDialog = ContatosDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosEditor = /** @class */ (function (_super) {
            __extends(ContatosEditor, _super);
            function ContatosEditor(container) {
                return _super.call(this, container) || this;
            }
            ContatosEditor.prototype.getColumnsKey = function () { return 'Clinica.Contatos'; };
            ContatosEditor.prototype.getDialogType = function () { return Clinica.ContatosEditorDialog; };
            ContatosEditor.prototype.getLocalTextPrefix = function () { return Clinica.ContatosRow.localTextPrefix; };
            Object.defineProperty(ContatosEditor.prototype, "myParentForm", {
                get: function () {
                    return this._myParentForm;
                },
                set: function (value) {
                    if (value != null) {
                        this._myParentForm = value;
                        //Remover coluna Departamento do Grid do Master quando vier de pacientes
                        if (value == "PACIENTES") {
                            this.remove_coluna("Departamento");
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            ContatosEditor.prototype.getAddButtonCaption = function () {
                return "Adicionar";
            };
            //Ao iniciar o dialog, atribuir o que tiver em myParentForm
            ContatosEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                dialog.myParentForm = this.myParentForm;
            };
            ContatosEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.TipoContato = Clinica.TiposContatosRow.getLookup()
                    .itemById[row.TipoContatoId].TipoContato;
                row.TipoMeioContato = Clinica.TiposMeiosContatosRow.getLookup()
                    .itemById[row.TipoMeioContatoId].TipoMeioContato;
                return true;
            };
            //Remove uma determinada coluna do grid
            ContatosEditor.prototype.remove_coluna = function (nomeColuna) {
                var cols = this.slickGrid.getColumns();
                for (var i = 0; i < cols.length; i++) {
                    if (cols[i].field == nomeColuna) {
                        cols.splice(i, 1);
                        this.slickGrid.setColumns(cols);
                        break;
                    }
                }
            };
            ContatosEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ContatosEditor);
            return ContatosEditor;
        }(Exemplos.Common.GridEditorBase));
        Clinica.ContatosEditor = ContatosEditor;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosEditorDialog = /** @class */ (function (_super) {
            __extends(ContatosEditorDialog, _super);
            function ContatosEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Clinica.ContatosForm(_this.idPrefix);
                //https://github.com/volkanceylan/Serenity/issues/1377
                //colocar aqui a verificação do checkbox escolhido e sua máscara equivalente.
                //    buscar exemplos no samples (acho que city samples)
                _this.form.TipoMeioContatoId.changeSelect2(function (e) {
                    var TipoMeioContatoId = _this.form.TipoMeioContatoId.value;
                    //verifica se escolheu vazio
                    //Q.alert(TipoMeioContatoId.toString());
                    if (Q.isEmptyOrNull(TipoMeioContatoId.toString())) {
                        _this.setMascara({});
                        return;
                    }
                    // se não escolheu vazio, retorna o Entity do TipoMeioContato completo.
                    Clinica.TiposMeiosContatosService.Retrieve({
                        EntityId: TipoMeioContatoId
                    }, function (response) {
                        _this.setMascara(response.Entity);
                    });
                });
                return _this;
            }
            ContatosEditorDialog.prototype.getFormKey = function () { return Clinica.ContatosForm.formKey; };
            ContatosEditorDialog.prototype.getLocalTextPrefix = function () { return Clinica.ContatosRow.localTextPrefix; };
            ContatosEditorDialog.prototype.getNameProperty = function () { return Clinica.ContatosRow.nameProperty; };
            Object.defineProperty(ContatosEditorDialog.prototype, "myParentForm", {
                get: function () {
                    return this._myParentForm;
                },
                set: function (value) {
                    if (value != null) {
                        //some o campo departamento no Dialog, pois não precisa ele na tela do Paciente.
                        if (value == "PACIENTES")
                            this.form.Departamento.getGridField().toggle(false);
                        this._myParentForm = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            ContatosEditorDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                this.dialogTitle = "Novo Contato";
            };
            //  o METODO ABAIXO MOSTRA O CAMPO TIPO E-MAIL EDITOR
            //MEXER NO OVERRIDE DO HANDLER SAVE PARA SALVAR O CAMPO NO CONTATO.
            //        private setMascara(details: TiposMeiosContatosRow) {
            //            // se o tipo meio contato for E-mail ( ou outro tipo que não tenha máscara),
            //            // retira a máscara
            //            if (Q.isEmptyOrNull(details.Mascara)) {
            //                this.form.ConteudoMeioContato.getGridField().toggle(false);
            //                this.form.ConteudoMeioContato.value = "";
            //                this.form.Email.getGridField().toggle(true);
            //                this.form.Email.value = "";
            //                //(this.form.ConteudoMeioContato.element as any).unmask();
            //            }
            //            else
            //            {
            //                this.form.ConteudoMeioContato.getGridField().toggle(true);
            //                this.form.ConteudoMeioContato.value = "";
            //                this.form.Email.getGridField().toggle(false);
            //                this.form.Email.value = "";
            //                (this.form.ConteudoMeioContato.element as any).mask(details.Mascara);
            //}
            ContatosEditorDialog.prototype.setMascara = function (details) {
                // se o tipo meio contato for E-mail ( ou outro tipo que não tenha máscara),
                // retira a máscara
                if (Q.isEmptyOrNull(details.Mascara))
                    this.form.ConteudoMeioContato.element.unmask();
                else
                    this.form.ConteudoMeioContato.element.mask(details.Mascara);
            };
            ContatosEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ContatosEditorDialog);
            return ContatosEditorDialog;
        }(Exemplos.Common.GridEditorDialog));
        Clinica.ContatosEditorDialog = ContatosEditorDialog;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosGrid = /** @class */ (function (_super) {
            __extends(ContatosGrid, _super);
            function ContatosGrid(container) {
                return _super.call(this, container) || this;
            }
            ContatosGrid.prototype.getColumnsKey = function () { return 'Clinica.Contatos'; };
            ContatosGrid.prototype.getDialogType = function () { return Clinica.ContatosDialog; };
            ContatosGrid.prototype.getIdProperty = function () { return Clinica.ContatosRow.idProperty; };
            ContatosGrid.prototype.getLocalTextPrefix = function () { return Clinica.ContatosRow.localTextPrefix; };
            ContatosGrid.prototype.getService = function () { return Clinica.ContatosService.baseUrl; };
            ContatosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContatosGrid);
            return ContatosGrid;
        }(Serenity.EntityGrid));
        Clinica.ContatosGrid = ContatosGrid;
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    function JSvalidarCPF(CPF) {
        CPF = CPF.replace(/[^\d]+/g, '');
        //if (CPF == '') return false;
        // Elimina CPFs invalidos conhecidos    
        if (CPF.length != 11 ||
            CPF == "00000000000" ||
            CPF == "11111111111" ||
            CPF == "22222222222" ||
            CPF == "33333333333" ||
            CPF == "44444444444" ||
            CPF == "55555555555" ||
            CPF == "66666666666" ||
            CPF == "77777777777" ||
            CPF == "88888888888" ||
            CPF == "99999999999")
            return false;
        // Valida 1o digito 
        var add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(CPF.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(CPF.charAt(9)))
            return false;
        // Valida 2o digito 
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(CPF.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(CPF.charAt(10)))
            return false;
        return true;
    }
    Exemplos.JSvalidarCPF = JSvalidarCPF;
    function JSvalidarCNPJ(CNPJ) {
        CNPJ = CNPJ.replace(/[^\d]+/g, '');
        if (CNPJ == '')
            return false;
        if (CNPJ.length != 14)
            return false;
        // Elimina CNPJs invalidos conhecidos
        if (CNPJ == "00000000000000" ||
            CNPJ == "11111111111111" ||
            CNPJ == "22222222222222" ||
            CNPJ == "33333333333333" ||
            CNPJ == "44444444444444" ||
            CNPJ == "55555555555555" ||
            CNPJ == "66666666666666" ||
            CNPJ == "77777777777777" ||
            CNPJ == "88888888888888" ||
            CNPJ == "99999999999999")
            return false;
        // Valida DVs
        var tamanho = CNPJ.length - 2;
        var numeros = CNPJ.substring(0, tamanho);
        var digitos = CNPJ.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = CNPJ.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    Exemplos.JSvalidarCNPJ = JSvalidarCNPJ;
    /**
     * Validar CPF no form do Serenity
     * @param widget: passar o nome do campo para validação
     * @param uniqueName: Passar o uniqueName do Dialog
     * @param alert: texto que vai aparecer no HINT do erro
     * @param text: texto que vai aparecer no ALERT WARNING do erro
     * @param setfocus: se vai acionar ou não o focus no campo.
     */
    function addValidationRule_CPF(widget, VOptions) {
        /*
        será que só trazendo o widget e tirando o "_Form" consigo o uniqueName?
widget.element[0].form.id => Exemplos_Clinica_PacientesDialog52_Form
               uniqueName => Exemplos_Clinica_PacientesDialog52

        */
        //As any para evitar os erros de typescript em relacao ao acesso do uniquename. Mais simples do que fazer toda uma extensao e mudanças para colocar um getUniqueName publico no Widget
        var uniqueName = widget.uniqueName; // widget.element[0].id.toString().replace("_" + widget.element[0].name, "");
        var alert = "CPF Inválido !";
        var text = "O CPF está inválido !!!";
        var setfocus = false;
        if ((VOptions != null) || (VOptions != undefined)) {
            if ((VOptions.uniqueName != null) || (VOptions.uniqueName != undefined))
                uniqueName = VOptions.uniqueName;
            if ((VOptions.alert != null) || (VOptions.alert != undefined))
                alert = VOptions.alert;
            if ((VOptions.text != null) || (VOptions.text != undefined))
                text = VOptions.text;
            if ((VOptions.setfocus != null) || (VOptions.setfocus != undefined))
                setfocus = VOptions.setfocus;
        }
        //adiciona a validação no formulário!
        widget.addValidationRule(uniqueName, function (e) {
            //var valor = Serenity.EditorUtils.getValue(widget);
            //if (!(valor == '0' || valor == '' || valor == 'undefined' || valor == null))
            //    if (!JSvalidarCPF(valor)) {
            if (!JSvalidarCPF(Serenity.EditorUtils.getValue(widget))) {
                Q.warning(text, {
                    onClose: function () { if (setfocus)
                        widget.element.focus(); }
                });
                return alert;
            }
        });
    }
    Exemplos.addValidationRule_CPF = addValidationRule_CPF;
    ;
    /**
     * Validar CNPJ no form do Serenity
     * @param widget: passar o nome do campo para validação
     * @param uniqueName: Passar o uniqueName do Dialog
     * @param alert: texto que vai aparecer no HINT do erro
     * @param text: texto que vai aparecer no ALERT WARNING do erro
     * @param setfocus: se vai acionar ou não o focus no campo.
     */
    function addValidationRule_CNPJ(widget, VOptions) {
        /*
        será que só trazendo o widget e tirando o "_Form" consigo o uniqueName?
widget.element[0].form.id => Exemplos_Clinica_PacientesDialog52_Form
               uniqueName => Exemplos_Clinica_PacientesDialog52

        */
        //As any para evitar os erros de typescript em relacao ao acesso do uniquename. Mais simples do que fazer toda uma extensao e mudanças para colocar um getUniqueName publico no Widget
        var uniqueName = widget.uniqueName; // widget.element[0].id.toString().replace("_" + widget.element[0].name, "");
        var alert = "CNPJ Inválido !";
        var text = "O CNPJ está inválido !!!";
        var setfocus = false;
        if ((VOptions != null) || (VOptions != undefined)) {
            if ((VOptions.uniqueName != null) || (VOptions.uniqueName != undefined))
                uniqueName = VOptions.uniqueName;
            if ((VOptions.alert != null) || (VOptions.alert != undefined))
                alert = VOptions.alert;
            if ((VOptions.text != null) || (VOptions.text != undefined))
                text = VOptions.text;
            if ((VOptions.setfocus != null) || (VOptions.setfocus != undefined))
                setfocus = VOptions.setfocus;
        }
        //adiciona a validação no formulário!
        widget.addValidationRule(uniqueName, function (e) {
            //var valor = Serenity.EditorUtils.getValue(widget);
            //if (!(valor == '0' || valor == '' || valor == 'undefined' || valor == null))
            //    if (!JSvalidarCNPJ(valor)) {
            if (!JSvalidarCNPJ(Serenity.EditorUtils.getValue(widget))) {
                Q.warning(text, {
                    onClose: function () { if (setfocus)
                        widget.element.focus(); }
                });
                return alert;
            }
        });
    }
    Exemplos.addValidationRule_CNPJ = addValidationRule_CNPJ;
    ;
    /**
     * O Formulario deve ser passado para que a funcao chamada saiba qual formulario ira preencher.
     * Esta funcao poderia usar promise e retornar para tratamento diretamente, mas para evitar alguma incompatibilidade em navegadores antigos,
     * a redundância é feita e passada à função de callback para preenchimento dos campos do formulário.
     *
     * @param CEP - string do CEP a ser buscado
     * @param formulario - Deve ser passado para nao perder a referencia
     * @param fnRetornoPreenchimento - Funcao para preencher o formulario
     */
    function BuscaCEP(CEP, formulario, fnRetornoPreenchimento) {
        var dadosCEP;
        /*RETRONO DA VARIAVEL DO JSON DO VIA CEP
                EXEMPLO: https://viacep.com.br/ws/29075590/json
        */
        $.getJSON("//viacep.com.br/ws/" + CEP + "/json/?callback=?", function (dados) {
            if (!("erro" in dados)) {
                fnRetornoPreenchimento(formulario, dados);
            } //end if.
            else {
                //CEP pesquisado não foi encontrado.
                //limpa_formulário_cep();
                alert("CEP não encontrado.");
            }
        });
        //return dadosCEP;
    }
    Exemplos.BuscaCEP = BuscaCEP;
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Exemplos.Authorization || (Exemplos.Authorization = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosForm = /** @class */ (function (_super) {
            __extends(ContatosForm, _super);
            function ContatosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContatosForm.formKey = 'Clinica.Contatos';
            return ContatosForm;
        }(Serenity.PrefixedContext));
        Clinica.ContatosForm = ContatosForm;
        [['Tratamento', function () { return Serenity.StringEditor; }], ['Nome', function () { return Serenity.StringEditor; }], ['Departamento', function () { return Serenity.StringEditor; }], ['TipoContatoId', function () { return Serenity.LookupEditor; }], ['TipoMeioContatoId', function () { return Serenity.LookupEditor; }], ['ConteudoMeioContato', function () { return Serenity.MaskedEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ObservacoesContato', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(ContatosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosRow;
        (function (ContatosRow) {
            ContatosRow.idProperty = 'ContatoId';
            ContatosRow.nameProperty = 'Nome';
            ContatosRow.localTextPrefix = 'Clinica.Contatos';
            var Fields;
            (function (Fields) {
            })(Fields = ContatosRow.Fields || (ContatosRow.Fields = {}));
            ['ContatoId', 'PacienteId', 'ConvenioId', 'ProfissionalId', 'FornecedorId', 'Tratamento', 'Nome', 'Departamento', 'TipoContatoId', 'TipoMeioContatoId', 'ConteudoMeioContato', 'Email', 'ObservacoesContato', 'TipoContato', 'TipoContatoPessoaFisica', 'TipoContatoOrdem', 'TipoMeioContato'].forEach(function (x) { return Fields[x] = x; });
        })(ContatosRow = Clinica.ContatosRow || (Clinica.ContatosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosService;
        (function (ContatosService) {
            ContatosService.baseUrl = 'Clinica/Contatos';
            var Methods;
            (function (Methods) {
            })(Methods = ContatosService.Methods || (ContatosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ContatosService[x] = function (r, s, o) { return Q.serviceRequest(ContatosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ContatosService.baseUrl + '/' + x;
            });
        })(ContatosService = Clinica.ContatosService || (Clinica.ContatosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosForm = /** @class */ (function (_super) {
            __extends(ConveniosForm, _super);
            function ConveniosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ConveniosForm.formKey = 'Clinica.Convenios';
            return ConveniosForm;
        }(Serenity.PrefixedContext));
        Clinica.ConveniosForm = ConveniosForm;
        [['Cnpj', function () { return Serenity.MaskedEditor; }], ['RazaoSocial', function () { return Serenity.StringEditor; }], ['NomeFantasia', function () { return Serenity.StringEditor; }], ['CodigoAns', function () { return Serenity.StringEditor; }], ['CadastroConvenio', function () { return Serenity.StringEditor; }], ['Logo', function () { return Serenity.StringEditor; }], ['InscricaoMunicipal', function () { return Serenity.StringEditor; }], ['InscricaoEstadual', function () { return Serenity.StringEditor; }], ['Site', function () { return Serenity.StringEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['Inativo', function () { return Serenity.BooleanEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['MotivoCancelamento', function () { return Serenity.TextAreaEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['VersaoTiss', function () { return Serenity.StringEditor; }], ['WebService', function () { return Serenity.StringEditor; }], ['SadtSolContratadoId', function () { return Serenity.StringEditor; }], ['SadtExecutanteId', function () { return Serenity.StringEditor; }], ['SadtProfissionalexecutante', function () { return Serenity.StringEditor; }], ['SadtMembroEquipe', function () { return Serenity.StringEditor; }], ['IdOrigem', function () { return Serenity.StringEditor; }], ['IdDestino', function () { return Serenity.StringEditor; }], ['OrigemIdPrestador', function () { return Serenity.StringEditor; }], ['DestinoIdPrestador', function () { return Serenity.StringEditor; }], ['IdLogo', function () { return Serenity.IntegerEditor; }], ['GeraTiss', function () { return Serenity.BooleanEditor; }], ['DataCadastro', function () { return Serenity.DateTimeEditor; }], ['DataUltimaAtualizacao', function () { return Serenity.DateTimeEditor; }], ['Latitude', function () { return Serenity.TextAreaEditor; }], ['Longitude', function () { return Serenity.TextAreaEditor; }], ['EmailNotaFiscal', function () { return Serenity.EmailEditor; }], ['EmailContato', function () { return Serenity.EmailEditor; }], ['EmailFaturamento', function () { return Serenity.EmailEditor; }], ['EmailGlosa', function () { return Serenity.EmailEditor; }], ['ContatosList', function () { return Serenity.StringEditor; }], ['EnderecosList', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ConveniosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosRow;
        (function (ConveniosRow) {
            ConveniosRow.idProperty = 'ConvenioId';
            ConveniosRow.nameProperty = 'NomeFantasia';
            ConveniosRow.localTextPrefix = 'Clinica.Convenios';
            ConveniosRow.lookupKey = 'Clinica.Convenios';
            function getLookup() {
                return Q.getLookup('Clinica.Convenios');
            }
            ConveniosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ConveniosRow.Fields || (ConveniosRow.Fields = {}));
            ['ConvenioId', 'Cnpj', 'RazaoSocial', 'NomeFantasia', 'CodigoAns', 'CadastroConvenio', 'Logo', 'InscricaoMunicipal', 'InscricaoEstadual', 'Site', 'DataInicio', 'Inativo', 'DataFim', 'MotivoCancelamento', 'Observacao', 'VersaoTiss', 'WebService', 'SadtSolContratadoId', 'SadtExecutanteId', 'SadtProfissionalexecutante', 'SadtMembroEquipe', 'IdOrigem', 'IdDestino', 'OrigemIdPrestador', 'DestinoIdPrestador', 'IdLogo', 'GeraTiss', 'DataCadastro', 'DataUltimaAtualizacao', 'Latitude', 'Longitude', 'EmailNotaFiscal', 'EmailContato', 'EmailFaturamento', 'EmailGlosa', 'ContatosList', 'EnderecosList'].forEach(function (x) { return Fields[x] = x; });
        })(ConveniosRow = Clinica.ConveniosRow || (Clinica.ConveniosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosService;
        (function (ConveniosService) {
            ConveniosService.baseUrl = 'Clinica/Convenios';
            var Methods;
            (function (Methods) {
            })(Methods = ConveniosService.Methods || (ConveniosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ConveniosService[x] = function (r, s, o) { return Q.serviceRequest(ConveniosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ConveniosService.baseUrl + '/' + x;
            });
        })(ConveniosService = Clinica.ConveniosService || (Clinica.ConveniosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosForm = /** @class */ (function (_super) {
            __extends(EnderecosForm, _super);
            function EnderecosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EnderecosForm.formKey = 'Clinica.Enderecos';
            return EnderecosForm;
        }(Serenity.PrefixedContext));
        Clinica.EnderecosForm = EnderecosForm;
        [['TipoEnderecoId', function () { return Serenity.LookupEditor; }], ['Cep', function () { return Serenity.MaskedEditor; }], ['Rua', function () { return Serenity.StringEditor; }], ['Numero', function () { return Serenity.StringEditor; }], ['Complemento', function () { return Serenity.StringEditor; }], ['Bairro', function () { return Serenity.StringEditor; }], ['Cidade', function () { return Serenity.StringEditor; }], ['CodigoIbgeCidade', function () { return Serenity.StringEditor; }], ['Estado', function () { return Serenity.StringEditor; }], ['CodigoIbgeEstado', function () { return Serenity.StringEditor; }], ['Pais', function () { return Serenity.StringEditor; }], ['Referencia', function () { return Serenity.StringEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['Latitude', function () { return Serenity.StringEditor; }], ['Longitude', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EnderecosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosRow;
        (function (EnderecosRow) {
            EnderecosRow.idProperty = 'EnderecoId';
            EnderecosRow.nameProperty = 'Rua';
            EnderecosRow.localTextPrefix = 'Clinica.Enderecos';
            EnderecosRow.lookupKey = 'Clinica.Enderecos';
            function getLookup() {
                return Q.getLookup('Clinica.Enderecos');
            }
            EnderecosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EnderecosRow.Fields || (EnderecosRow.Fields = {}));
            ['EnderecoId', 'PacienteId', 'ConvenioId', 'ProfissionalId', 'FornecedorId', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'Observacao', 'Latitude', 'Longitude', 'TipoEndereco', 'TipoEnderecoPessoaFisica', 'TipoEnderecoOrdem'].forEach(function (x) { return Fields[x] = x; });
        })(EnderecosRow = Clinica.EnderecosRow || (Clinica.EnderecosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosService;
        (function (EnderecosService) {
            EnderecosService.baseUrl = 'Clinica/Enderecos';
            var Methods;
            (function (Methods) {
            })(Methods = EnderecosService.Methods || (EnderecosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EnderecosService[x] = function (r, s, o) { return Q.serviceRequest(EnderecosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EnderecosService.baseUrl + '/' + x;
            });
        })(EnderecosService = Clinica.EnderecosService || (Clinica.EnderecosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisForm = /** @class */ (function (_super) {
            __extends(EstadosCivisForm, _super);
            function EstadosCivisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EstadosCivisForm.formKey = 'Clinica.EstadosCivis';
            return EstadosCivisForm;
        }(Serenity.PrefixedContext));
        Clinica.EstadosCivisForm = EstadosCivisForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EstadosCivisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisRow;
        (function (EstadosCivisRow) {
            EstadosCivisRow.idProperty = 'EstadoCivilId';
            EstadosCivisRow.nameProperty = 'Descricao';
            EstadosCivisRow.localTextPrefix = 'Clinica.EstadosCivis';
            EstadosCivisRow.lookupKey = 'Clinica.EstadosCivis';
            function getLookup() {
                return Q.getLookup('Clinica.EstadosCivis');
            }
            EstadosCivisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EstadosCivisRow.Fields || (EstadosCivisRow.Fields = {}));
            ['EstadoCivilId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(EstadosCivisRow = Clinica.EstadosCivisRow || (Clinica.EstadosCivisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisService;
        (function (EstadosCivisService) {
            EstadosCivisService.baseUrl = 'Clinica/EstadosCivis';
            var Methods;
            (function (Methods) {
            })(Methods = EstadosCivisService.Methods || (EstadosCivisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EstadosCivisService[x] = function (r, s, o) { return Q.serviceRequest(EstadosCivisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EstadosCivisService.baseUrl + '/' + x;
            });
        })(EstadosCivisService = Clinica.EstadosCivisService || (Clinica.EstadosCivisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsForm = /** @class */ (function (_super) {
            __extends(ExceptionsForm, _super);
            function ExceptionsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExceptionsForm.formKey = 'Clinica.Exceptions';
            return ExceptionsForm;
        }(Serenity.PrefixedContext));
        Clinica.ExceptionsForm = ExceptionsForm;
        [['Guid', function () { return Serenity.StringEditor; }], ['ApplicationName', function () { return Serenity.StringEditor; }], ['MachineName', function () { return Serenity.StringEditor; }], ['CreationDate', function () { return Serenity.DateTimeEditor; }], ['Type', function () { return Serenity.StringEditor; }], ['IsProtected', function () { return Serenity.BooleanEditor; }], ['Host', function () { return Serenity.StringEditor; }], ['Url', function () { return Serenity.TextAreaEditor; }], ['HttpMethod', function () { return Serenity.StringEditor; }], ['IpAddress', function () { return Serenity.StringEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['Message', function () { return Serenity.TextAreaEditor; }], ['Detail', function () { return Serenity.StringEditor; }], ['StatusCode', function () { return Serenity.IntegerEditor; }], ['Sql', function () { return Serenity.StringEditor; }], ['DeletionDate', function () { return Serenity.DateTimeEditor; }], ['FullJson', function () { return Serenity.StringEditor; }], ['ErrorHash', function () { return Serenity.IntegerEditor; }], ['DuplicateCount', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ExceptionsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsRow;
        (function (ExceptionsRow) {
            ExceptionsRow.idProperty = 'Id';
            ExceptionsRow.nameProperty = 'ApplicationName';
            ExceptionsRow.localTextPrefix = 'Clinica.Exceptions';
            ExceptionsRow.lookupKey = 'Clinica.Exceptions';
            function getLookup() {
                return Q.getLookup('Clinica.Exceptions');
            }
            ExceptionsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ExceptionsRow.Fields || (ExceptionsRow.Fields = {}));
            ['Id', 'Guid', 'ApplicationName', 'MachineName', 'CreationDate', 'Type', 'IsProtected', 'Host', 'Url', 'HttpMethod', 'IpAddress', 'Source', 'Message', 'Detail', 'StatusCode', 'Sql', 'DeletionDate', 'FullJson', 'ErrorHash', 'DuplicateCount'].forEach(function (x) { return Fields[x] = x; });
        })(ExceptionsRow = Clinica.ExceptionsRow || (Clinica.ExceptionsRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsService;
        (function (ExceptionsService) {
            ExceptionsService.baseUrl = 'Clinica/Exceptions';
            var Methods;
            (function (Methods) {
            })(Methods = ExceptionsService.Methods || (ExceptionsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ExceptionsService[x] = function (r, s, o) { return Q.serviceRequest(ExceptionsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ExceptionsService.baseUrl + '/' + x;
            });
        })(ExceptionsService = Clinica.ExceptionsService || (Clinica.ExceptionsService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresForm = /** @class */ (function (_super) {
            __extends(FornecedoresForm, _super);
            function FornecedoresForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FornecedoresForm.formKey = 'Clinica.Fornecedores';
            return FornecedoresForm;
        }(Serenity.PrefixedContext));
        Clinica.FornecedoresForm = FornecedoresForm;
        [['Status', function () { return Serenity.BooleanEditor; }], ['PessoaJuridica', function () { return Serenity.BooleanEditor; }], ['RazaoSocial', function () { return Serenity.TextAreaEditor; }], ['NomeFantasia', function () { return Serenity.TextAreaEditor; }], ['NomeAbreviado', function () { return Serenity.StringEditor; }], ['Cpf', function () { return Serenity.MaskedEditor; }], ['Rg', function () { return Serenity.StringEditor; }], ['Cnpj', function () { return Serenity.MaskedEditor; }], ['InscricaoEstadual', function () { return Serenity.TextAreaEditor; }], ['InscricaoMunicipal', function () { return Serenity.TextAreaEditor; }], ['Site', function () { return Serenity.TextAreaEditor; }], ['Telefone', function () { return Serenity.MaskedEditor; }], ['Fax', function () { return Serenity.TextAreaEditor; }], ['TelefoneAlternativo', function () { return Serenity.MaskedEditor; }], ['EmailCorporativo', function () { return Serenity.EmailEditor; }], ['AceitaReceberEmail', function () { return Serenity.BooleanEditor; }], ['MotivoStatus', function () { return Serenity.TextAreaEditor; }], ['QuantidadeEmpregados', function () { return Serenity.IntegerEditor; }], ['AtividadeEmpresaId', function () { return Serenity.IntegerEditor; }], ['ReceitaAnual', function () { return Serenity.DecimalEditor; }], ['MarcasTrabalhadas', function () { return Serenity.TextAreaEditor; }], ['ObservacoesGerais', function () { return Serenity.TextAreaEditor; }], ['DataCriacao', function () { return Serenity.DateTimeEditor; }], ['DataAlteracao', function () { return Serenity.DateTimeEditor; }], ['Inativo', function () { return Serenity.BooleanEditor; }], ['DataInativo', function () { return Serenity.DateTimeEditor; }], ['ContatosList', function () { return Serenity.StringEditor; }], ['EnderecosList', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(FornecedoresForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresRow;
        (function (FornecedoresRow) {
            FornecedoresRow.idProperty = 'FornecedorId';
            FornecedoresRow.nameProperty = 'RazaoSocial';
            FornecedoresRow.localTextPrefix = 'Clinica.Fornecedores';
            FornecedoresRow.lookupKey = 'Clinica.Fornecedores';
            function getLookup() {
                return Q.getLookup('Clinica.Fornecedores');
            }
            FornecedoresRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FornecedoresRow.Fields || (FornecedoresRow.Fields = {}));
            ['FornecedorId', 'Status', 'PessoaJuridica', 'RazaoSocial', 'NomeFantasia', 'NomeAbreviado', 'Cpf', 'Rg', 'Cnpj', 'InscricaoEstadual', 'InscricaoMunicipal', 'Site', 'Telefone', 'Fax', 'TelefoneAlternativo', 'EmailCorporativo', 'AceitaReceberEmail', 'MotivoStatus', 'QuantidadeEmpregados', 'AtividadeEmpresaId', 'ReceitaAnual', 'MarcasTrabalhadas', 'ObservacoesGerais', 'DataCriacao', 'DataAlteracao', 'Inativo', 'DataInativo', 'ContatosList', 'EnderecosList'].forEach(function (x) { return Fields[x] = x; });
        })(FornecedoresRow = Clinica.FornecedoresRow || (Clinica.FornecedoresRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresService;
        (function (FornecedoresService) {
            FornecedoresService.baseUrl = 'Clinica/Fornecedores';
            var Methods;
            (function (Methods) {
            })(Methods = FornecedoresService.Methods || (FornecedoresService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FornecedoresService[x] = function (r, s, o) { return Q.serviceRequest(FornecedoresService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FornecedoresService.baseUrl + '/' + x;
            });
        })(FornecedoresService = Clinica.FornecedoresService || (Clinica.FornecedoresService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosForm = /** @class */ (function (_super) {
            __extends(PacientesConveniosForm, _super);
            function PacientesConveniosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PacientesConveniosForm.formKey = 'Clinica.PacientesConvenios';
            return PacientesConveniosForm;
        }(Serenity.PrefixedContext));
        Clinica.PacientesConveniosForm = PacientesConveniosForm;
        [['PacienteId', function () { return Serenity.LookupEditor; }], ['ConvenioId', function () { return Serenity.LookupEditor; }], ['SubConvenioId', function () { return Serenity.IntegerEditor; }], ['ConvenioPrincipal', function () { return Serenity.BooleanEditor; }], ['DescricaoPlano', function () { return Serenity.StringEditor; }], ['Carteirinha', function () { return Serenity.StringEditor; }], ['DataValidadeCarteirinha', function () { return Serenity.DateEditor; }], ['NomePacienteConvenio', function () { return Serenity.StringEditor; }], ['Inativo', function () { return Serenity.BooleanEditor; }], ['DataInativo', function () { return Serenity.DateTimeEditor; }], ['ImagemCarteirinha', function () { return Serenity.MultipleImageUploadEditor; }], ['DataCadastro', function () { return Serenity.DateTimeEditor; }], ['DataUltimaAtualizacao', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(PacientesConveniosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosRow;
        (function (PacientesConveniosRow) {
            PacientesConveniosRow.idProperty = 'PacienteConvenioId';
            PacientesConveniosRow.nameProperty = 'DescricaoPlano';
            PacientesConveniosRow.localTextPrefix = 'Clinica.PacientesConvenios';
            PacientesConveniosRow.lookupKey = 'Clinica.PacientesConvenios';
            function getLookup() {
                return Q.getLookup('Clinica.PacientesConvenios');
            }
            PacientesConveniosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PacientesConveniosRow.Fields || (PacientesConveniosRow.Fields = {}));
            ['PacienteConvenioId', 'PacienteId', 'ConvenioId', 'SubConvenioId', 'ConvenioPrincipal', 'DescricaoPlano', 'Carteirinha', 'DataValidadeCarteirinha', 'NomePacienteConvenio', 'Inativo', 'DataInativo', 'ImagemCarteirinha', 'DataCadastro', 'DataUltimaAtualizacao', 'Observacao', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia'].forEach(function (x) { return Fields[x] = x; });
        })(PacientesConveniosRow = Clinica.PacientesConveniosRow || (Clinica.PacientesConveniosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosService;
        (function (PacientesConveniosService) {
            PacientesConveniosService.baseUrl = 'Clinica/PacientesConvenios';
            var Methods;
            (function (Methods) {
            })(Methods = PacientesConveniosService.Methods || (PacientesConveniosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PacientesConveniosService[x] = function (r, s, o) { return Q.serviceRequest(PacientesConveniosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PacientesConveniosService.baseUrl + '/' + x;
            });
        })(PacientesConveniosService = Clinica.PacientesConveniosService || (Clinica.PacientesConveniosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfForm = /** @class */ (function (_super) {
            __extends(PacientesEmissaoNfForm, _super);
            function PacientesEmissaoNfForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PacientesEmissaoNfForm.formKey = 'Clinica.PacientesEmissaoNf';
            return PacientesEmissaoNfForm;
        }(Serenity.PrefixedContext));
        Clinica.PacientesEmissaoNfForm = PacientesEmissaoNfForm;
        [['PacienteId', function () { return Serenity.LookupEditor; }], ['NomeResponsavel', function () { return Serenity.StringEditor; }], ['PessoaJuridica', function () { return Serenity.BooleanEditor; }], ['CpfResponsavel', function () { return Serenity.MaskedEditor; }], ['CnpjResponsavel', function () { return Serenity.MaskedEditor; }], ['EmailNf', function () { return Serenity.EmailEditor; }], ['Padrao', function () { return Serenity.BooleanEditor; }], ['TipoEnderecoId', function () { return Serenity.LookupEditor; }], ['Cep', function () { return Serenity.MaskedEditor; }], ['Rua', function () { return Serenity.StringEditor; }], ['Numero', function () { return Serenity.StringEditor; }], ['Complemento', function () { return Serenity.StringEditor; }], ['Bairro', function () { return Serenity.StringEditor; }], ['Cidade', function () { return Serenity.StringEditor; }], ['CodigoIbgeCidade', function () { return Serenity.StringEditor; }], ['Estado', function () { return Serenity.StringEditor; }], ['CodigoIbgeEstado', function () { return Serenity.StringEditor; }], ['Pais', function () { return Serenity.StringEditor; }], ['Referencia', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(PacientesEmissaoNfForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfRow;
        (function (PacientesEmissaoNfRow) {
            PacientesEmissaoNfRow.idProperty = 'PacienteEmissaoNf';
            PacientesEmissaoNfRow.nameProperty = 'NomeResponsavel';
            PacientesEmissaoNfRow.localTextPrefix = 'Clinica.PacientesEmissaoNf';
            PacientesEmissaoNfRow.lookupKey = 'Clinica.PacientesEmissaoNf';
            function getLookup() {
                return Q.getLookup('Clinica.PacientesEmissaoNf');
            }
            PacientesEmissaoNfRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PacientesEmissaoNfRow.Fields || (PacientesEmissaoNfRow.Fields = {}));
            ['PacienteEmissaoNf', 'PacienteId', 'NomeResponsavel', 'PessoaJuridica', 'CpfResponsavel', 'CnpjResponsavel', 'EmailNf', 'Padrao', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'PacienteMatricula', 'Paciente', 'TipoEndereco', 'TipoEnderecoPessoaFisica', 'TipoEnderecoOrdem'].forEach(function (x) { return Fields[x] = x; });
        })(PacientesEmissaoNfRow = Clinica.PacientesEmissaoNfRow || (Clinica.PacientesEmissaoNfRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfService;
        (function (PacientesEmissaoNfService) {
            PacientesEmissaoNfService.baseUrl = 'Clinica/PacientesEmissaoNf';
            var Methods;
            (function (Methods) {
            })(Methods = PacientesEmissaoNfService.Methods || (PacientesEmissaoNfService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PacientesEmissaoNfService[x] = function (r, s, o) { return Q.serviceRequest(PacientesEmissaoNfService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PacientesEmissaoNfService.baseUrl + '/' + x;
            });
        })(PacientesEmissaoNfService = Clinica.PacientesEmissaoNfService || (Clinica.PacientesEmissaoNfService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesForm = /** @class */ (function (_super) {
            __extends(PacientesForm, _super);
            function PacientesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PacientesForm.formKey = 'Clinica.Pacientes';
            return PacientesForm;
        }(Serenity.PrefixedContext));
        Clinica.PacientesForm = PacientesForm;
        [['PacienteIdControlMedic', function () { return Serenity.IntegerEditor; }], ['PacienteIdGestorMedico', function () { return Serenity.IntegerEditor; }], ['DataCadastro', function () { return Serenity.DateTimeEditor; }], ['DataUltimaAtualizacao', function () { return Serenity.DateTimeEditor; }], ['Matricula', function () { return Serenity.StringEditor; }], ['StatusId', function () { return Serenity.LookupEditor; }], ['Paciente', function () { return Serenity.StringEditor; }], ['SexoId', function () { return Serenity.LookupEditor; }], ['DataNascimento', function () { return Serenity.DateEditor; }], ['Especial', function () { return Serenity.BooleanEditor; }], ['Pai', function () { return Serenity.StringEditor; }], ['Mae', function () { return Serenity.StringEditor; }], ['Responsavel', function () { return Serenity.StringEditor; }], ['CNS', function () { return Serenity.StringEditor; }], ['CarteiraIdentidade', function () { return Serenity.StringEditor; }], ['CPF', function () { return Serenity.MaskedEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['DisturbiosAssociados', function () { return Serenity.TextAreaEditor; }], ['Foto', function () { return Serenity.ImageUploadEditor; }], ['DataFoto', function () { return Serenity.DateEditor; }], ['ContatosList', function () { return Serenity.StringEditor; }], ['EnderecosList', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PacientesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesRow;
        (function (PacientesRow) {
            PacientesRow.idProperty = 'PacienteId';
            PacientesRow.nameProperty = 'Paciente';
            PacientesRow.localTextPrefix = 'Clinica.Pacientes';
            PacientesRow.lookupKey = 'Clinica.Pacientes';
            function getLookup() {
                return Q.getLookup('Clinica.Pacientes');
            }
            PacientesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PacientesRow.Fields || (PacientesRow.Fields = {}));
            ['PacienteId', 'DataCadastro', 'DataUltimaAtualizacao', 'Matricula', 'StatusId', 'Paciente', 'Especial', 'Pai', 'Mae', 'SexoId', 'DataNascimento', 'CNS', 'CarteiraIdentidade', 'CPF', 'Observacao', 'DisturbiosAssociados', 'Responsavel', 'Foto', 'DataFoto', 'PacienteIdControlMedic', 'PacienteIdGestorMedico', 'ContatosList', 'EnderecosList', 'Sexo', 'SexoAbreviatura', 'Status'].forEach(function (x) { return Fields[x] = x; });
        })(PacientesRow = Clinica.PacientesRow || (Clinica.PacientesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesService;
        (function (PacientesService) {
            PacientesService.baseUrl = 'Clinica/Pacientes';
            var Methods;
            (function (Methods) {
            })(Methods = PacientesService.Methods || (PacientesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PacientesService[x] = function (r, s, o) { return Q.serviceRequest(PacientesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PacientesService.baseUrl + '/' + x;
            });
        })(PacientesService = Clinica.PacientesService || (Clinica.PacientesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoForm = /** @class */ (function (_super) {
            __extends(SexoForm, _super);
            function SexoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SexoForm.formKey = 'Clinica.Sexo';
            return SexoForm;
        }(Serenity.PrefixedContext));
        Clinica.SexoForm = SexoForm;
        [['Sexo', function () { return Serenity.StringEditor; }], ['Abreviatura', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SexoForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoRow;
        (function (SexoRow) {
            SexoRow.idProperty = 'SexoId';
            SexoRow.nameProperty = 'Sexo';
            SexoRow.localTextPrefix = 'Clinica.Sexo';
            SexoRow.lookupKey = 'Clinica.Sexo';
            function getLookup() {
                return Q.getLookup('Clinica.Sexo');
            }
            SexoRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SexoRow.Fields || (SexoRow.Fields = {}));
            ['SexoId', 'Sexo', 'Abreviatura'].forEach(function (x) { return Fields[x] = x; });
        })(SexoRow = Clinica.SexoRow || (Clinica.SexoRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoService;
        (function (SexoService) {
            SexoService.baseUrl = 'Clinica/Sexo';
            var Methods;
            (function (Methods) {
            })(Methods = SexoService.Methods || (SexoService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SexoService[x] = function (r, s, o) { return Q.serviceRequest(SexoService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SexoService.baseUrl + '/' + x;
            });
        })(SexoService = Clinica.SexoService || (Clinica.SexoService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusForm = /** @class */ (function (_super) {
            __extends(StatusForm, _super);
            function StatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StatusForm.formKey = 'Clinica.Status';
            return StatusForm;
        }(Serenity.PrefixedContext));
        Clinica.StatusForm = StatusForm;
        [['Status', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(StatusForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusRow;
        (function (StatusRow) {
            StatusRow.idProperty = 'StatusId';
            StatusRow.nameProperty = 'Status';
            StatusRow.localTextPrefix = 'Clinica.Status';
            StatusRow.lookupKey = 'Clinica.Status';
            function getLookup() {
                return Q.getLookup('Clinica.Status');
            }
            StatusRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = StatusRow.Fields || (StatusRow.Fields = {}));
            ['StatusId', 'Status'].forEach(function (x) { return Fields[x] = x; });
        })(StatusRow = Clinica.StatusRow || (Clinica.StatusRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusService;
        (function (StatusService) {
            StatusService.baseUrl = 'Clinica/Status';
            var Methods;
            (function (Methods) {
            })(Methods = StatusService.Methods || (StatusService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                StatusService[x] = function (r, s, o) { return Q.serviceRequest(StatusService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = StatusService.baseUrl + '/' + x;
            });
        })(StatusService = Clinica.StatusService || (Clinica.StatusService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosForm = /** @class */ (function (_super) {
            __extends(TiposContatosForm, _super);
            function TiposContatosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposContatosForm.formKey = 'Clinica.TiposContatos';
            return TiposContatosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposContatosForm = TiposContatosForm;
        [['TipoContato', function () { return Serenity.StringEditor; }], ['PessoaFisica', function () { return Serenity.BooleanEditor; }], ['Ordem', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(TiposContatosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosRow;
        (function (TiposContatosRow) {
            TiposContatosRow.idProperty = 'TipoContatoId';
            TiposContatosRow.nameProperty = 'TipoContato';
            TiposContatosRow.localTextPrefix = 'Clinica.TiposContatos';
            TiposContatosRow.lookupKey = 'Clinica.TiposContatos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposContatos');
            }
            TiposContatosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposContatosRow.Fields || (TiposContatosRow.Fields = {}));
            ['TipoContatoId', 'TipoContato', 'PessoaFisica', 'Ordem'].forEach(function (x) { return Fields[x] = x; });
        })(TiposContatosRow = Clinica.TiposContatosRow || (Clinica.TiposContatosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosService;
        (function (TiposContatosService) {
            TiposContatosService.baseUrl = 'Clinica/TiposContatos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposContatosService.Methods || (TiposContatosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposContatosService[x] = function (r, s, o) { return Q.serviceRequest(TiposContatosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposContatosService.baseUrl + '/' + x;
            });
        })(TiposContatosService = Clinica.TiposContatosService || (Clinica.TiposContatosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosForm = /** @class */ (function (_super) {
            __extends(TiposEnderecosForm, _super);
            function TiposEnderecosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposEnderecosForm.formKey = 'Clinica.TiposEnderecos';
            return TiposEnderecosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposEnderecosForm = TiposEnderecosForm;
        [['TipoEndereco', function () { return Serenity.StringEditor; }], ['PessoaFisica', function () { return Serenity.BooleanEditor; }], ['Ordem', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(TiposEnderecosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosRow;
        (function (TiposEnderecosRow) {
            TiposEnderecosRow.idProperty = 'TipoEnderecoId';
            TiposEnderecosRow.nameProperty = 'TipoEndereco';
            TiposEnderecosRow.localTextPrefix = 'Clinica.TiposEnderecos';
            TiposEnderecosRow.lookupKey = 'Clinica.TiposEnderecos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposEnderecos');
            }
            TiposEnderecosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposEnderecosRow.Fields || (TiposEnderecosRow.Fields = {}));
            ['TipoEnderecoId', 'TipoEndereco', 'PessoaFisica', 'Ordem'].forEach(function (x) { return Fields[x] = x; });
        })(TiposEnderecosRow = Clinica.TiposEnderecosRow || (Clinica.TiposEnderecosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosService;
        (function (TiposEnderecosService) {
            TiposEnderecosService.baseUrl = 'Clinica/TiposEnderecos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposEnderecosService.Methods || (TiposEnderecosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposEnderecosService[x] = function (r, s, o) { return Q.serviceRequest(TiposEnderecosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposEnderecosService.baseUrl + '/' + x;
            });
        })(TiposEnderecosService = Clinica.TiposEnderecosService || (Clinica.TiposEnderecosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosForm = /** @class */ (function (_super) {
            __extends(TiposMeiosContatosForm, _super);
            function TiposMeiosContatosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposMeiosContatosForm.formKey = 'Clinica.TiposMeiosContatos';
            return TiposMeiosContatosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposMeiosContatosForm = TiposMeiosContatosForm;
        [['TipoMeioContato', function () { return Serenity.StringEditor; }], ['Mascara', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposMeiosContatosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosRow;
        (function (TiposMeiosContatosRow) {
            TiposMeiosContatosRow.idProperty = 'TipoMeioContatoId';
            TiposMeiosContatosRow.nameProperty = 'TipoMeioContato';
            TiposMeiosContatosRow.localTextPrefix = 'Clinica.TiposMeiosContatos';
            TiposMeiosContatosRow.lookupKey = 'Clinica.TiposMeiosContatos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposMeiosContatos');
            }
            TiposMeiosContatosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposMeiosContatosRow.Fields || (TiposMeiosContatosRow.Fields = {}));
            ['TipoMeioContatoId', 'TipoMeioContato', 'Mascara'].forEach(function (x) { return Fields[x] = x; });
        })(TiposMeiosContatosRow = Clinica.TiposMeiosContatosRow || (Clinica.TiposMeiosContatosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosService;
        (function (TiposMeiosContatosService) {
            TiposMeiosContatosService.baseUrl = 'Clinica/TiposMeiosContatos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposMeiosContatosService.Methods || (TiposMeiosContatosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposMeiosContatosService[x] = function (r, s, o) { return Q.serviceRequest(TiposMeiosContatosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposMeiosContatosService.baseUrl + '/' + x;
            });
        })(TiposMeiosContatosService = Clinica.TiposMeiosContatosService || (Clinica.TiposMeiosContatosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Exemplos.Administration || (Exemplos.Administration = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AgendasForm = /** @class */ (function (_super) {
            __extends(AgendasForm, _super);
            function AgendasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AgendasForm.formKey = 'Clinica.Agendas';
            return AgendasForm;
        }(Serenity.PrefixedContext));
        Clinica.AgendasForm = AgendasForm;
        [['AgendaIdPrincipal', function () { return Serenity.LookupEditor; }], ['EmpresaId', function () { return Serenity.IntegerEditor; }], ['DataHoraCadastro', function () { return Serenity.DateTimeEditor; }], ['DataHoraAgendamento', function () { return Serenity.DateTimeEditor; }], ['EspecialidadeProfisisonalId', function () { return Serenity.IntegerEditor; }], ['ProfissionalId', function () { return Serenity.IntegerEditor; }], ['EspecialidadeId', function () { return Serenity.IntegerEditor; }], ['MedicoIdSolicitante', function () { return Serenity.IntegerEditor; }], ['EscalaId', function () { return Serenity.IntegerEditor; }], ['PacienteId', function () { return Serenity.IntegerEditor; }], ['ConvenioId', function () { return Serenity.IntegerEditor; }], ['ServicoId', function () { return Serenity.IntegerEditor; }], ['DataHoraChegada', function () { return Serenity.DateTimeEditor; }], ['DataHoraAtendimentoInicio', function () { return Serenity.DateTimeEditor; }], ['DataHoraAtendimentoFim', function () { return Serenity.DateTimeEditor; }], ['StatusAgendaId', function () { return Serenity.IntegerEditor; }], ['Faturado', function () { return Serenity.BooleanEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['ValorTotal', function () { return Serenity.DecimalEditor; }], ['SubTotal', function () { return Serenity.DecimalEditor; }], ['Descontos', function () { return Serenity.DecimalEditor; }], ['PgtoDinheiro', function () { return Serenity.DecimalEditor; }], ['PgtoCheque', function () { return Serenity.DecimalEditor; }], ['PgtoCartao', function () { return Serenity.DecimalEditor; }], ['PgtoFaturar', function () { return Serenity.DecimalEditor; }], ['NumeroNfs', function () { return Serenity.IntegerEditor; }], ['GuiaId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(AgendasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AgendasItensForm = /** @class */ (function (_super) {
            __extends(AgendasItensForm, _super);
            function AgendasItensForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AgendasItensForm.formKey = 'Clinica.AgendasItens';
            return AgendasItensForm;
        }(Serenity.PrefixedContext));
        Clinica.AgendasItensForm = AgendasItensForm;
        [['AgendaId', function () { return Serenity.LookupEditor; }], ['ConvenioId', function () { return Serenity.IntegerEditor; }], ['ProcedimentoId', function () { return Serenity.IntegerEditor; }], ['ValorId', function () { return Serenity.IntegerEditor; }], ['Desconto', function () { return Serenity.DecimalEditor; }], ['ValorPraticado', function () { return Serenity.DecimalEditor; }], ['Quantidade', function () { return Serenity.IntegerEditor; }], ['GuiaId', function () { return Serenity.IntegerEditor; }], ['Faturado', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(AgendasItensForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AgendasItensRow;
        (function (AgendasItensRow) {
            AgendasItensRow.idProperty = 'AgendaItemId';
            AgendasItensRow.localTextPrefix = 'Clinica.AgendasItens';
            AgendasItensRow.lookupKey = 'Clinica.AgendasItens';
            function getLookup() {
                return Q.getLookup('Clinica.AgendasItens');
            }
            AgendasItensRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AgendasItensRow.Fields || (AgendasItensRow.Fields = {}));
            ['AgendaItemId', 'AgendaId', 'ConvenioId', 'ProcedimentoId', 'ValorId', 'Desconto', 'ValorPraticado', 'Quantidade', 'GuiaId', 'Faturado', 'AgendaAgendaIdPrincipal', 'AgendaEmpresaId', 'AgendaDataHoraCadastro', 'AgendaDataHoraAgendamento', 'AgendaEspecialidadeProfisisonalId', 'AgendaProfissionalId', 'AgendaEspecialidadeId', 'AgendaMedicoIdSolicitante', 'AgendaEscalaId', 'AgendaPacienteId', 'AgendaConvenioId', 'AgendaServicoId', 'AgendaDataHoraChegada', 'AgendaDataHoraAtendimentoInicio', 'AgendaDataHoraAtendimentoFim', 'AgendaStatusAgendaId', 'AgendaFaturado', 'AgendaObservacao', 'AgendaValorTotal', 'AgendaSubTotal', 'AgendaDescontos', 'AgendaPgtoDinheiro', 'AgendaPgtoCheque', 'AgendaPgtoCartao', 'AgendaPgtoFaturar', 'AgendaNumeroNfs', 'AgendaGuiaId'].forEach(function (x) { return Fields[x] = x; });
        })(AgendasItensRow = Clinica.AgendasItensRow || (Clinica.AgendasItensRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AgendasItensService;
        (function (AgendasItensService) {
            AgendasItensService.baseUrl = 'Clinica/AgendasItens';
            var Methods;
            (function (Methods) {
            })(Methods = AgendasItensService.Methods || (AgendasItensService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AgendasItensService[x] = function (r, s, o) { return Q.serviceRequest(AgendasItensService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AgendasItensService.baseUrl + '/' + x;
            });
        })(AgendasItensService = Clinica.AgendasItensService || (Clinica.AgendasItensService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AgendasRow;
        (function (AgendasRow) {
            AgendasRow.idProperty = 'AgendaId';
            AgendasRow.nameProperty = 'Observacao';
            AgendasRow.localTextPrefix = 'Clinica.Agendas';
            AgendasRow.lookupKey = 'Clinica.Agendas';
            function getLookup() {
                return Q.getLookup('Clinica.Agendas');
            }
            AgendasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AgendasRow.Fields || (AgendasRow.Fields = {}));
            ['AgendaId', 'AgendaIdPrincipal', 'EmpresaId', 'DataHoraCadastro', 'DataHoraAgendamento', 'EspecialidadeProfisisonalId', 'ProfissionalId', 'EspecialidadeId', 'MedicoIdSolicitante', 'EscalaId', 'PacienteId', 'ConvenioId', 'ServicoId', 'DataHoraChegada', 'DataHoraAtendimentoInicio', 'DataHoraAtendimentoFim', 'StatusAgendaId', 'Faturado', 'Observacao', 'ValorTotal', 'SubTotal', 'Descontos', 'PgtoDinheiro', 'PgtoCheque', 'PgtoCartao', 'PgtoFaturar', 'NumeroNfs', 'GuiaId', 'AgendaIdPrincipalEmpresaId', 'AgendaIdPrincipalDataHoraCadastro', 'AgendaIdPrincipalDataHoraAgendamento', 'AgendaIdPrincipalEspecialidadeProfisisonalId', 'AgendaIdPrincipalProfissionalId', 'AgendaIdPrincipalEspecialidadeId', 'AgendaIdPrincipalMedicoIdSolicitante', 'AgendaIdPrincipalEscalaId', 'AgendaIdPrincipalPacienteId', 'AgendaIdPrincipalConvenioId', 'AgendaIdPrincipalServicoId', 'AgendaIdPrincipalDataHoraChegada', 'AgendaIdPrincipalDataHoraAtendimentoInicio', 'AgendaIdPrincipalDataHoraAtendimentoFim', 'AgendaIdPrincipalStatusAgendaId', 'AgendaIdPrincipalFaturado', 'AgendaIdPrincipalObservacao', 'AgendaIdPrincipalValorTotal', 'AgendaIdPrincipalSubTotal', 'AgendaIdPrincipalDescontos', 'AgendaIdPrincipalPgtoDinheiro', 'AgendaIdPrincipalPgtoCheque', 'AgendaIdPrincipalPgtoCartao', 'AgendaIdPrincipalPgtoFaturar', 'AgendaIdPrincipalNumeroNfs', 'AgendaIdPrincipalGuiaId', 'GuiaTipoGuiaId', 'GuiaTipoConsultaId', 'Guia', 'GuiaGuiaOperador', 'GuiaCarteirinha', 'GuiaNomePaciente', 'GuiaAutorizacaoId', 'GuiaNumeroAutorizacao', 'GuiaIdAuditada', 'GuiaDataAuditoria', 'GuiaIdAuditoriaAprovada', 'GuiaConclusaoAuditoria', 'GuiaProfissionalIdSolicitante', 'GuiaProfissionalIdExecutante'].forEach(function (x) { return Fields[x] = x; });
        })(AgendasRow = Clinica.AgendasRow || (Clinica.AgendasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AgendasService;
        (function (AgendasService) {
            AgendasService.baseUrl = 'Clinica/Agendas';
            var Methods;
            (function (Methods) {
            })(Methods = AgendasService.Methods || (AgendasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AgendasService[x] = function (r, s, o) { return Q.serviceRequest(AgendasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AgendasService.baseUrl + '/' + x;
            });
        })(AgendasService = Clinica.AgendasService || (Clinica.AgendasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AutorizacoesForm = /** @class */ (function (_super) {
            __extends(AutorizacoesForm, _super);
            function AutorizacoesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AutorizacoesForm.formKey = 'Clinica.Autorizacoes';
            return AutorizacoesForm;
        }(Serenity.PrefixedContext));
        Clinica.AutorizacoesForm = AutorizacoesForm;
        [['NumeroAutorizacao', function () { return Serenity.StringEditor; }], ['ConvenioId', function () { return Serenity.LookupEditor; }], ['PacienteId', function () { return Serenity.LookupEditor; }], ['Arquivos', function () { return Serenity.TextAreaEditor; }], ['DataSolicitacao', function () { return Serenity.DateTimeEditor; }], ['DataAutorizacao', function () { return Serenity.DateTimeEditor; }], ['DataValidade', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['IdAuditoriaAprovada', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(AutorizacoesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AutorizacoesProcedimentosForm = /** @class */ (function (_super) {
            __extends(AutorizacoesProcedimentosForm, _super);
            function AutorizacoesProcedimentosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AutorizacoesProcedimentosForm.formKey = 'Clinica.AutorizacoesProcedimentos';
            return AutorizacoesProcedimentosForm;
        }(Serenity.PrefixedContext));
        Clinica.AutorizacoesProcedimentosForm = AutorizacoesProcedimentosForm;
        [['AutorizacaoId', function () { return Serenity.LookupEditor; }], ['ProcedimentoId', function () { return Serenity.IntegerEditor; }], ['Procedimento', function () { return Serenity.StringEditor; }], ['QuantidadeLiberada', function () { return Serenity.IntegerEditor; }], ['DataInicial', function () { return Serenity.DateTimeEditor; }], ['DataFinal', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['IdAuditada', function () { return Serenity.BooleanEditor; }], ['DataAuditoria', function () { return Serenity.DateTimeEditor; }], ['IdAuditoriaAprovada', function () { return Serenity.BooleanEditor; }], ['ConclusaoAuditoria', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(AutorizacoesProcedimentosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AutorizacoesProcedimentosRow;
        (function (AutorizacoesProcedimentosRow) {
            AutorizacoesProcedimentosRow.idProperty = 'AutorizacaoProcedimentoId';
            AutorizacoesProcedimentosRow.nameProperty = 'Procedimento';
            AutorizacoesProcedimentosRow.localTextPrefix = 'Clinica.AutorizacoesProcedimentos';
            AutorizacoesProcedimentosRow.lookupKey = 'Clinica.AutorizacoesProcedimentos';
            function getLookup() {
                return Q.getLookup('Clinica.AutorizacoesProcedimentos');
            }
            AutorizacoesProcedimentosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AutorizacoesProcedimentosRow.Fields || (AutorizacoesProcedimentosRow.Fields = {}));
            ['AutorizacaoProcedimentoId', 'AutorizacaoId', 'ProcedimentoId', 'Procedimento', 'QuantidadeLiberada', 'DataInicial', 'DataFinal', 'Observacao', 'IdAuditada', 'DataAuditoria', 'IdAuditoriaAprovada', 'ConclusaoAuditoria', 'AutorizacaoNumeroAutorizacao', 'AutorizacaoConvenioId', 'AutorizacaoPacienteId', 'AutorizacaoArquivos', 'AutorizacaoDataSolicitacao', 'AutorizacaoDataAutorizacao', 'AutorizacaoDataValidade', 'AutorizacaoObservacao', 'AutorizacaoIdAuditoriaAprovada'].forEach(function (x) { return Fields[x] = x; });
        })(AutorizacoesProcedimentosRow = Clinica.AutorizacoesProcedimentosRow || (Clinica.AutorizacoesProcedimentosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AutorizacoesProcedimentosService;
        (function (AutorizacoesProcedimentosService) {
            AutorizacoesProcedimentosService.baseUrl = 'Clinica/AutorizacoesProcedimentos';
            var Methods;
            (function (Methods) {
            })(Methods = AutorizacoesProcedimentosService.Methods || (AutorizacoesProcedimentosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AutorizacoesProcedimentosService[x] = function (r, s, o) { return Q.serviceRequest(AutorizacoesProcedimentosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AutorizacoesProcedimentosService.baseUrl + '/' + x;
            });
        })(AutorizacoesProcedimentosService = Clinica.AutorizacoesProcedimentosService || (Clinica.AutorizacoesProcedimentosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AutorizacoesRow;
        (function (AutorizacoesRow) {
            AutorizacoesRow.idProperty = 'AutorizacaoId';
            AutorizacoesRow.nameProperty = 'NumeroAutorizacao';
            AutorizacoesRow.localTextPrefix = 'Clinica.Autorizacoes';
            AutorizacoesRow.lookupKey = 'Clinica.Autorizacoes';
            function getLookup() {
                return Q.getLookup('Clinica.Autorizacoes');
            }
            AutorizacoesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AutorizacoesRow.Fields || (AutorizacoesRow.Fields = {}));
            ['AutorizacaoId', 'NumeroAutorizacao', 'ConvenioId', 'PacienteId', 'Arquivos', 'DataSolicitacao', 'DataAutorizacao', 'DataValidade', 'Observacao', 'IdAuditoriaAprovada', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa', 'PacienteDataCadastro', 'PacienteDataUltimaAtualizacao', 'PacienteMatricula', 'PacienteStatusId', 'Paciente', 'PacienteEspecial', 'PacientePai', 'PacienteMae', 'PacienteSexoId', 'PacienteDataNascimento', 'PacienteCns', 'PacienteCarteiraIdentidade', 'PacienteCpf', 'PacienteObservacao', 'PacienteDisturbiosAssociados', 'PacienteResponsavel', 'PacienteNotaFiscalTerceiro', 'PacienteNotaFiscalNome', 'PacienteNotaFiscalCpf', 'PacienteNotaFiscalCnpj', 'PacienteNotaFiscalEndereco', 'PacienteNotaFiscalNumero', 'PacienteNotaFiscalBairro', 'PacienteNotaFiscalCidade', 'PacienteNotaFiscalEstadoId', 'PacienteNotaFiscalEmail', 'PacienteFoto', 'PacienteDataFoto', 'PacientePacienteIdControlMedic', 'PacientePacienteIdGestorMedico'].forEach(function (x) { return Fields[x] = x; });
        })(AutorizacoesRow = Clinica.AutorizacoesRow || (Clinica.AutorizacoesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var AutorizacoesService;
        (function (AutorizacoesService) {
            AutorizacoesService.baseUrl = 'Clinica/Autorizacoes';
            var Methods;
            (function (Methods) {
            })(Methods = AutorizacoesService.Methods || (AutorizacoesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AutorizacoesService[x] = function (r, s, o) { return Q.serviceRequest(AutorizacoesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AutorizacoesService.baseUrl + '/' + x;
            });
        })(AutorizacoesService = Clinica.AutorizacoesService || (Clinica.AutorizacoesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var CbosForm = /** @class */ (function (_super) {
            __extends(CbosForm, _super);
            function CbosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CbosForm.formKey = 'Clinica.Cbos';
            return CbosForm;
        }(Serenity.PrefixedContext));
        Clinica.CbosForm = CbosForm;
        [['Codigo', function () { return Serenity.StringEditor; }], ['Cbos', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CbosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var CbosRow;
        (function (CbosRow) {
            CbosRow.idProperty = 'Cbosid';
            CbosRow.nameProperty = 'Codigo';
            CbosRow.localTextPrefix = 'Clinica.Cbos';
            CbosRow.lookupKey = 'Clinica.Cbos';
            function getLookup() {
                return Q.getLookup('Clinica.Cbos');
            }
            CbosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CbosRow.Fields || (CbosRow.Fields = {}));
            ['Cbosid', 'Codigo', 'Cbos'].forEach(function (x) { return Fields[x] = x; });
        })(CbosRow = Clinica.CbosRow || (Clinica.CbosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var CbosService;
        (function (CbosService) {
            CbosService.baseUrl = 'Clinica/Cbos';
            var Methods;
            (function (Methods) {
            })(Methods = CbosService.Methods || (CbosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CbosService[x] = function (r, s, o) { return Q.serviceRequest(CbosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CbosService.baseUrl + '/' + x;
            });
        })(CbosService = Clinica.CbosService || (Clinica.CbosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConselhosProfissionaisForm = /** @class */ (function (_super) {
            __extends(ConselhosProfissionaisForm, _super);
            function ConselhosProfissionaisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ConselhosProfissionaisForm.formKey = 'Clinica.ConselhosProfissionais';
            return ConselhosProfissionaisForm;
        }(Serenity.PrefixedContext));
        Clinica.ConselhosProfissionaisForm = ConselhosProfissionaisForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ConselhosProfissionaisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConselhosProfissionaisRow;
        (function (ConselhosProfissionaisRow) {
            ConselhosProfissionaisRow.idProperty = 'ConselhoProfissionalId';
            ConselhosProfissionaisRow.nameProperty = 'Descricao';
            ConselhosProfissionaisRow.localTextPrefix = 'Clinica.ConselhosProfissionais';
            ConselhosProfissionaisRow.lookupKey = 'Clinica.ConselhosProfissionais';
            function getLookup() {
                return Q.getLookup('Clinica.ConselhosProfissionais');
            }
            ConselhosProfissionaisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ConselhosProfissionaisRow.Fields || (ConselhosProfissionaisRow.Fields = {}));
            ['ConselhoProfissionalId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(ConselhosProfissionaisRow = Clinica.ConselhosProfissionaisRow || (Clinica.ConselhosProfissionaisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConselhosProfissionaisService;
        (function (ConselhosProfissionaisService) {
            ConselhosProfissionaisService.baseUrl = 'Clinica/ConselhosProfissionais';
            var Methods;
            (function (Methods) {
            })(Methods = ConselhosProfissionaisService.Methods || (ConselhosProfissionaisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ConselhosProfissionaisService[x] = function (r, s, o) { return Q.serviceRequest(ConselhosProfissionaisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ConselhosProfissionaisService.baseUrl + '/' + x;
            });
        })(ConselhosProfissionaisService = Clinica.ConselhosProfissionaisService || (Clinica.ConselhosProfissionaisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosForm = /** @class */ (function (_super) {
            __extends(ContatosForm, _super);
            function ContatosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ContatosForm.formKey = 'Clinica.Contatos';
            return ContatosForm;
        }(Serenity.PrefixedContext));
        Clinica.ContatosForm = ContatosForm;
        [['Tratamento', function () { return Serenity.StringEditor; }], ['Nome', function () { return Serenity.StringEditor; }], ['Departamento', function () { return Serenity.StringEditor; }], ['TipoContatoId', function () { return Serenity.LookupEditor; }], ['TipoMeioContatoId', function () { return Serenity.LookupEditor; }], ['ConteudoMeioContato', function () { return Serenity.MaskedEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ObservacoesContato', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(ContatosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosRow;
        (function (ContatosRow) {
            ContatosRow.idProperty = 'ContatoId';
            ContatosRow.nameProperty = 'Nome';
            ContatosRow.localTextPrefix = 'Clinica.Contatos';
            var Fields;
            (function (Fields) {
            })(Fields = ContatosRow.Fields || (ContatosRow.Fields = {}));
            ['ContatoId', 'PacienteId', 'ConvenioId', 'ProfissionalId', 'FornecedorId', 'Tratamento', 'Nome', 'Departamento', 'TipoContatoId', 'TipoMeioContatoId', 'ConteudoMeioContato', 'Email', 'ObservacoesContato', 'TipoContato', 'TipoContatoPessoaFisica', 'TipoContatoOrdem', 'TipoMeioContato'].forEach(function (x) { return Fields[x] = x; });
        })(ContatosRow = Clinica.ContatosRow || (Clinica.ContatosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ContatosService;
        (function (ContatosService) {
            ContatosService.baseUrl = 'Clinica/Contatos';
            var Methods;
            (function (Methods) {
            })(Methods = ContatosService.Methods || (ContatosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ContatosService[x] = function (r, s, o) { return Q.serviceRequest(ContatosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ContatosService.baseUrl + '/' + x;
            });
        })(ContatosService = Clinica.ContatosService || (Clinica.ContatosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosEmissaoNfForm = /** @class */ (function (_super) {
            __extends(ConveniosEmissaoNfForm, _super);
            function ConveniosEmissaoNfForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ConveniosEmissaoNfForm.formKey = 'Clinica.ConveniosEmissaoNf';
            return ConveniosEmissaoNfForm;
        }(Serenity.PrefixedContext));
        Clinica.ConveniosEmissaoNfForm = ConveniosEmissaoNfForm;
        [['ConvenioId', function () { return Serenity.LookupEditor; }], ['RazaoSocial', function () { return Serenity.StringEditor; }], ['Cnpj', function () { return Serenity.MaskedEditor; }], ['EmailNf', function () { return Serenity.EmailEditor; }], ['Padrao', function () { return Serenity.BooleanEditor; }], ['TipoEnderecoId', function () { return Serenity.IntegerEditor; }], ['Rua', function () { return Serenity.TextAreaEditor; }], ['Numero', function () { return Serenity.StringEditor; }], ['Complemento', function () { return Serenity.StringEditor; }], ['Bairro', function () { return Serenity.StringEditor; }], ['Cidade', function () { return Serenity.StringEditor; }], ['CodigoIbgeCidade', function () { return Serenity.StringEditor; }], ['Estado', function () { return Serenity.StringEditor; }], ['CodigoIbgeEstado', function () { return Serenity.StringEditor; }], ['Pais', function () { return Serenity.StringEditor; }], ['Cep', function () { return Serenity.StringEditor; }], ['Referencia', function () { return Serenity.TextAreaEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['Motivo', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(ConveniosEmissaoNfForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosEmissaoNfRow;
        (function (ConveniosEmissaoNfRow) {
            ConveniosEmissaoNfRow.idProperty = 'ConvenioEmissaoNf';
            ConveniosEmissaoNfRow.nameProperty = 'RazaoSocial';
            ConveniosEmissaoNfRow.localTextPrefix = 'Clinica.ConveniosEmissaoNf';
            ConveniosEmissaoNfRow.lookupKey = 'Clinica.ConveniosEmissaoNf';
            function getLookup() {
                return Q.getLookup('Clinica.ConveniosEmissaoNf');
            }
            ConveniosEmissaoNfRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ConveniosEmissaoNfRow.Fields || (ConveniosEmissaoNfRow.Fields = {}));
            ['ConvenioEmissaoNf', 'ConvenioId', 'RazaoSocial', 'Cnpj', 'EmailNf', 'Padrao', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'DataInicio', 'DataFim', 'Motivo', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa'].forEach(function (x) { return Fields[x] = x; });
        })(ConveniosEmissaoNfRow = Clinica.ConveniosEmissaoNfRow || (Clinica.ConveniosEmissaoNfRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosEmissaoNfService;
        (function (ConveniosEmissaoNfService) {
            ConveniosEmissaoNfService.baseUrl = 'Clinica/ConveniosEmissaoNf';
            var Methods;
            (function (Methods) {
            })(Methods = ConveniosEmissaoNfService.Methods || (ConveniosEmissaoNfService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ConveniosEmissaoNfService[x] = function (r, s, o) { return Q.serviceRequest(ConveniosEmissaoNfService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ConveniosEmissaoNfService.baseUrl + '/' + x;
            });
        })(ConveniosEmissaoNfService = Clinica.ConveniosEmissaoNfService || (Clinica.ConveniosEmissaoNfService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosForm = /** @class */ (function (_super) {
            __extends(ConveniosForm, _super);
            function ConveniosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ConveniosForm.formKey = 'Clinica.Convenios';
            return ConveniosForm;
        }(Serenity.PrefixedContext));
        Clinica.ConveniosForm = ConveniosForm;
        [['Cnpj', function () { return Serenity.MaskedEditor; }], ['RazaoSocial', function () { return Serenity.StringEditor; }], ['NomeFantasia', function () { return Serenity.StringEditor; }], ['CodigoAns', function () { return Serenity.StringEditor; }], ['CadastroConvenio', function () { return Serenity.StringEditor; }], ['Logo', function () { return Serenity.StringEditor; }], ['InscricaoMunicipal', function () { return Serenity.StringEditor; }], ['InscricaoEstadual', function () { return Serenity.StringEditor; }], ['Site', function () { return Serenity.StringEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['Inativo', function () { return Serenity.BooleanEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['MotivoCancelamento', function () { return Serenity.TextAreaEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['VersaoTiss', function () { return Serenity.StringEditor; }], ['WebService', function () { return Serenity.StringEditor; }], ['SadtSolContratadoId', function () { return Serenity.StringEditor; }], ['SadtExecutanteId', function () { return Serenity.StringEditor; }], ['SadtProfissionalexecutante', function () { return Serenity.StringEditor; }], ['SadtMembroEquipe', function () { return Serenity.StringEditor; }], ['IdOrigem', function () { return Serenity.StringEditor; }], ['IdDestino', function () { return Serenity.StringEditor; }], ['OrigemIdPrestador', function () { return Serenity.StringEditor; }], ['DestinoIdPrestador', function () { return Serenity.StringEditor; }], ['IdLogo', function () { return Serenity.IntegerEditor; }], ['GeraTiss', function () { return Serenity.BooleanEditor; }], ['DataCadastro', function () { return Serenity.DateTimeEditor; }], ['DataUltimaAtualizacao', function () { return Serenity.DateTimeEditor; }], ['Latitude', function () { return Serenity.TextAreaEditor; }], ['Longitude', function () { return Serenity.TextAreaEditor; }], ['EmailNotaFiscal', function () { return Serenity.EmailEditor; }], ['EmailContato', function () { return Serenity.EmailEditor; }], ['EmailFaturamento', function () { return Serenity.EmailEditor; }], ['EmailGlosa', function () { return Serenity.EmailEditor; }], ['ContatosList', function () { return Clinica.ContatosEditor; }], ['EnderecosList', function () { return Clinica.EnderecosEditor; }]].forEach(function (x) { return Object.defineProperty(ConveniosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosRow;
        (function (ConveniosRow) {
            ConveniosRow.idProperty = 'ConvenioId';
            ConveniosRow.nameProperty = 'NomeFantasia';
            ConveniosRow.localTextPrefix = 'Clinica.Convenios';
            ConveniosRow.lookupKey = 'Clinica.Convenios';
            function getLookup() {
                return Q.getLookup('Clinica.Convenios');
            }
            ConveniosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ConveniosRow.Fields || (ConveniosRow.Fields = {}));
            ['ConvenioId', 'Cnpj', 'RazaoSocial', 'NomeFantasia', 'CodigoAns', 'CadastroConvenio', 'Logo', 'InscricaoMunicipal', 'InscricaoEstadual', 'Site', 'DataInicio', 'Inativo', 'DataFim', 'MotivoCancelamento', 'Observacao', 'VersaoTiss', 'WebService', 'SadtSolContratadoId', 'SadtExecutanteId', 'SadtProfissionalexecutante', 'SadtMembroEquipe', 'IdOrigem', 'IdDestino', 'OrigemIdPrestador', 'DestinoIdPrestador', 'IdLogo', 'GeraTiss', 'DataCadastro', 'DataUltimaAtualizacao', 'Latitude', 'Longitude', 'EmailNotaFiscal', 'EmailContato', 'EmailFaturamento', 'EmailGlosa', 'ContatosList', 'EnderecosList'].forEach(function (x) { return Fields[x] = x; });
        })(ConveniosRow = Clinica.ConveniosRow || (Clinica.ConveniosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ConveniosService;
        (function (ConveniosService) {
            ConveniosService.baseUrl = 'Clinica/Convenios';
            var Methods;
            (function (Methods) {
            })(Methods = ConveniosService.Methods || (ConveniosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ConveniosService[x] = function (r, s, o) { return Q.serviceRequest(ConveniosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ConveniosService.baseUrl + '/' + x;
            });
        })(ConveniosService = Clinica.ConveniosService || (Clinica.ConveniosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosForm = /** @class */ (function (_super) {
            __extends(DemonstrativosForm, _super);
            function DemonstrativosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DemonstrativosForm.formKey = 'Clinica.Demonstrativos';
            return DemonstrativosForm;
        }(Serenity.PrefixedContext));
        Clinica.DemonstrativosForm = DemonstrativosForm;
        [['ConvenioId', function () { return Serenity.LookupEditor; }], ['Demonstrativo', function () { return Serenity.StringEditor; }], ['DataDemonstrativo', function () { return Serenity.DateTimeEditor; }], ['DataPagamento', function () { return Serenity.DateTimeEditor; }], ['Observacoes', function () { return Serenity.TextAreaEditor; }], ['ValorProcessado', function () { return Serenity.DecimalEditor; }], ['ValorLiberado', function () { return Serenity.DecimalEditor; }], ['ValorGlosado', function () { return Serenity.DecimalEditor; }], ['NumeroLotePrestador', function () { return Serenity.StringEditor; }], ['NumeroProtocolo', function () { return Serenity.StringEditor; }], ['DataProtocolo', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['Arquivos', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(DemonstrativosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosItensForm = /** @class */ (function (_super) {
            __extends(DemonstrativosItensForm, _super);
            function DemonstrativosItensForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DemonstrativosItensForm.formKey = 'Clinica.DemonstrativosItens';
            return DemonstrativosItensForm;
        }(Serenity.PrefixedContext));
        Clinica.DemonstrativosItensForm = DemonstrativosItensForm;
        [['DemonstrativoId', function () { return Serenity.LookupEditor; }], ['StatusDemonstrativoId', function () { return Serenity.LookupEditor; }], ['NumeroGuiaPrestador', function () { return Serenity.StringEditor; }], ['NumeroGuiaOperadora', function () { return Serenity.StringEditor; }], ['Registro', function () { return Serenity.StringEditor; }], ['Senha', function () { return Serenity.StringEditor; }], ['Matricula', function () { return Serenity.StringEditor; }], ['Beneficiario', function () { return Serenity.StringEditor; }], ['DataSessao', function () { return Serenity.DateTimeEditor; }], ['Tabela', function () { return Serenity.StringEditor; }], ['Codigo', function () { return Serenity.StringEditor; }], ['Procedimento', function () { return Serenity.TextAreaEditor; }], ['Quantidade', function () { return Serenity.IntegerEditor; }], ['ValorInformado', function () { return Serenity.DecimalEditor; }], ['ValorLiberado', function () { return Serenity.DecimalEditor; }], ['ValorGlosado', function () { return Serenity.DecimalEditor; }], ['CodigoGlosa', function () { return Serenity.StringEditor; }], ['MotivoGlosa', function () { return Serenity.TextAreaEditor; }], ['SessaoId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(DemonstrativosItensForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosItensRow;
        (function (DemonstrativosItensRow) {
            DemonstrativosItensRow.idProperty = 'DemonstrativoItemId';
            DemonstrativosItensRow.nameProperty = 'NumeroGuiaPrestador';
            DemonstrativosItensRow.localTextPrefix = 'Clinica.DemonstrativosItens';
            DemonstrativosItensRow.lookupKey = 'Clinica.DemonstrativosItens';
            function getLookup() {
                return Q.getLookup('Clinica.DemonstrativosItens');
            }
            DemonstrativosItensRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = DemonstrativosItensRow.Fields || (DemonstrativosItensRow.Fields = {}));
            ['DemonstrativoItemId', 'DemonstrativoId', 'StatusDemonstrativoId', 'NumeroGuiaPrestador', 'NumeroGuiaOperadora', 'Registro', 'Senha', 'Matricula', 'Beneficiario', 'DataSessao', 'Tabela', 'Codigo', 'Procedimento', 'Quantidade', 'ValorInformado', 'ValorLiberado', 'ValorGlosado', 'CodigoGlosa', 'MotivoGlosa', 'SessaoId', 'DemonstrativoConvenioId', 'Demonstrativo', 'DemonstrativoDataDemonstrativo', 'DemonstrativoDataPagamento', 'DemonstrativoObservacoes', 'DemonstrativoValorProcessado', 'DemonstrativoValorLiberado', 'DemonstrativoValorGlosado', 'DemonstrativoNumeroLotePrestador', 'DemonstrativoNumeroProtocolo', 'DemonstrativoDataProtocolo', 'DemonstrativoObservacao', 'DemonstrativoArquivos', 'StatusDemonstrativoStatus'].forEach(function (x) { return Fields[x] = x; });
        })(DemonstrativosItensRow = Clinica.DemonstrativosItensRow || (Clinica.DemonstrativosItensRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosItensService;
        (function (DemonstrativosItensService) {
            DemonstrativosItensService.baseUrl = 'Clinica/DemonstrativosItens';
            var Methods;
            (function (Methods) {
            })(Methods = DemonstrativosItensService.Methods || (DemonstrativosItensService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DemonstrativosItensService[x] = function (r, s, o) { return Q.serviceRequest(DemonstrativosItensService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DemonstrativosItensService.baseUrl + '/' + x;
            });
        })(DemonstrativosItensService = Clinica.DemonstrativosItensService || (Clinica.DemonstrativosItensService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosNotasFiscaisForm = /** @class */ (function (_super) {
            __extends(DemonstrativosNotasFiscaisForm, _super);
            function DemonstrativosNotasFiscaisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DemonstrativosNotasFiscaisForm.formKey = 'Clinica.DemonstrativosNotasFiscais';
            return DemonstrativosNotasFiscaisForm;
        }(Serenity.PrefixedContext));
        Clinica.DemonstrativosNotasFiscaisForm = DemonstrativosNotasFiscaisForm;
        [['DemonstrativoId', function () { return Serenity.LookupEditor; }], ['Nfseid', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(DemonstrativosNotasFiscaisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosNotasFiscaisRow;
        (function (DemonstrativosNotasFiscaisRow) {
            DemonstrativosNotasFiscaisRow.idProperty = 'DemonstrativoNotaFiscalId';
            DemonstrativosNotasFiscaisRow.localTextPrefix = 'Clinica.DemonstrativosNotasFiscais';
            DemonstrativosNotasFiscaisRow.lookupKey = 'Clinica.DemonstrativosNotasFiscais';
            function getLookup() {
                return Q.getLookup('Clinica.DemonstrativosNotasFiscais');
            }
            DemonstrativosNotasFiscaisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = DemonstrativosNotasFiscaisRow.Fields || (DemonstrativosNotasFiscaisRow.Fields = {}));
            ['DemonstrativoNotaFiscalId', 'DemonstrativoId', 'Nfseid', 'DemonstrativoConvenioId', 'Demonstrativo', 'DemonstrativoDataDemonstrativo', 'DemonstrativoDataPagamento', 'DemonstrativoObservacoes', 'DemonstrativoValorProcessado', 'DemonstrativoValorLiberado', 'DemonstrativoValorGlosado', 'DemonstrativoNumeroLotePrestador', 'DemonstrativoNumeroProtocolo', 'DemonstrativoDataProtocolo', 'DemonstrativoObservacao', 'DemonstrativoArquivos'].forEach(function (x) { return Fields[x] = x; });
        })(DemonstrativosNotasFiscaisRow = Clinica.DemonstrativosNotasFiscaisRow || (Clinica.DemonstrativosNotasFiscaisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosNotasFiscaisService;
        (function (DemonstrativosNotasFiscaisService) {
            DemonstrativosNotasFiscaisService.baseUrl = 'Clinica/DemonstrativosNotasFiscais';
            var Methods;
            (function (Methods) {
            })(Methods = DemonstrativosNotasFiscaisService.Methods || (DemonstrativosNotasFiscaisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DemonstrativosNotasFiscaisService[x] = function (r, s, o) { return Q.serviceRequest(DemonstrativosNotasFiscaisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DemonstrativosNotasFiscaisService.baseUrl + '/' + x;
            });
        })(DemonstrativosNotasFiscaisService = Clinica.DemonstrativosNotasFiscaisService || (Clinica.DemonstrativosNotasFiscaisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosRow;
        (function (DemonstrativosRow) {
            DemonstrativosRow.idProperty = 'DemonstrativoId';
            DemonstrativosRow.nameProperty = 'Demonstrativo';
            DemonstrativosRow.localTextPrefix = 'Clinica.Demonstrativos';
            DemonstrativosRow.lookupKey = 'Clinica.Demonstrativos';
            function getLookup() {
                return Q.getLookup('Clinica.Demonstrativos');
            }
            DemonstrativosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = DemonstrativosRow.Fields || (DemonstrativosRow.Fields = {}));
            ['DemonstrativoId', 'ConvenioId', 'Demonstrativo', 'DataDemonstrativo', 'DataPagamento', 'Observacoes', 'ValorProcessado', 'ValorLiberado', 'ValorGlosado', 'NumeroLotePrestador', 'NumeroProtocolo', 'DataProtocolo', 'Observacao', 'Arquivos', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa'].forEach(function (x) { return Fields[x] = x; });
        })(DemonstrativosRow = Clinica.DemonstrativosRow || (Clinica.DemonstrativosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DemonstrativosService;
        (function (DemonstrativosService) {
            DemonstrativosService.baseUrl = 'Clinica/Demonstrativos';
            var Methods;
            (function (Methods) {
            })(Methods = DemonstrativosService.Methods || (DemonstrativosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DemonstrativosService[x] = function (r, s, o) { return Q.serviceRequest(DemonstrativosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DemonstrativosService.baseUrl + '/' + x;
            });
        })(DemonstrativosService = Clinica.DemonstrativosService || (Clinica.DemonstrativosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DiasSemanasForm = /** @class */ (function (_super) {
            __extends(DiasSemanasForm, _super);
            function DiasSemanasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DiasSemanasForm.formKey = 'Clinica.DiasSemanas';
            return DiasSemanasForm;
        }(Serenity.PrefixedContext));
        Clinica.DiasSemanasForm = DiasSemanasForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(DiasSemanasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DiasSemanasRow;
        (function (DiasSemanasRow) {
            DiasSemanasRow.idProperty = 'DiaSemanaId';
            DiasSemanasRow.nameProperty = 'Descricao';
            DiasSemanasRow.localTextPrefix = 'Clinica.DiasSemanas';
            DiasSemanasRow.lookupKey = 'Clinica.DiasSemanas';
            function getLookup() {
                return Q.getLookup('Clinica.DiasSemanas');
            }
            DiasSemanasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = DiasSemanasRow.Fields || (DiasSemanasRow.Fields = {}));
            ['DiaSemanaId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(DiasSemanasRow = Clinica.DiasSemanasRow || (Clinica.DiasSemanasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var DiasSemanasService;
        (function (DiasSemanasService) {
            DiasSemanasService.baseUrl = 'Clinica/DiasSemanas';
            var Methods;
            (function (Methods) {
            })(Methods = DiasSemanasService.Methods || (DiasSemanasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DiasSemanasService[x] = function (r, s, o) { return Q.serviceRequest(DiasSemanasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DiasSemanasService.baseUrl + '/' + x;
            });
        })(DiasSemanasService = Clinica.DiasSemanasService || (Clinica.DiasSemanasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosForm = /** @class */ (function (_super) {
            __extends(EnderecosForm, _super);
            function EnderecosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EnderecosForm.formKey = 'Clinica.Enderecos';
            return EnderecosForm;
        }(Serenity.PrefixedContext));
        Clinica.EnderecosForm = EnderecosForm;
        [['TipoEnderecoId', function () { return Serenity.LookupEditor; }], ['Cep', function () { return Serenity.MaskedEditor; }], ['Rua', function () { return Serenity.StringEditor; }], ['Numero', function () { return Serenity.StringEditor; }], ['Complemento', function () { return Serenity.StringEditor; }], ['Bairro', function () { return Serenity.StringEditor; }], ['Cidade', function () { return Serenity.StringEditor; }], ['CodigoIbgeCidade', function () { return Serenity.StringEditor; }], ['Estado', function () { return Serenity.StringEditor; }], ['CodigoIbgeEstado', function () { return Serenity.StringEditor; }], ['Pais', function () { return Serenity.StringEditor; }], ['Referencia', function () { return Serenity.StringEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['Latitude', function () { return Serenity.StringEditor; }], ['Longitude', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EnderecosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosRow;
        (function (EnderecosRow) {
            EnderecosRow.idProperty = 'EnderecoId';
            EnderecosRow.nameProperty = 'Rua';
            EnderecosRow.localTextPrefix = 'Clinica.Enderecos';
            EnderecosRow.lookupKey = 'Clinica.Enderecos';
            function getLookup() {
                return Q.getLookup('Clinica.Enderecos');
            }
            EnderecosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EnderecosRow.Fields || (EnderecosRow.Fields = {}));
            ['EnderecoId', 'PacienteId', 'ConvenioId', 'ProfissionalId', 'FornecedorId', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'Observacao', 'Latitude', 'Longitude', 'TipoEndereco', 'TipoEnderecoPessoaFisica', 'TipoEnderecoOrdem'].forEach(function (x) { return Fields[x] = x; });
        })(EnderecosRow = Clinica.EnderecosRow || (Clinica.EnderecosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EnderecosService;
        (function (EnderecosService) {
            EnderecosService.baseUrl = 'Clinica/Enderecos';
            var Methods;
            (function (Methods) {
            })(Methods = EnderecosService.Methods || (EnderecosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EnderecosService[x] = function (r, s, o) { return Q.serviceRequest(EnderecosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EnderecosService.baseUrl + '/' + x;
            });
        })(EnderecosService = Clinica.EnderecosService || (Clinica.EnderecosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EscalasForm = /** @class */ (function (_super) {
            __extends(EscalasForm, _super);
            function EscalasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EscalasForm.formKey = 'Clinica.Escalas';
            return EscalasForm;
        }(Serenity.PrefixedContext));
        Clinica.EscalasForm = EscalasForm;
        [['ProfissionalId', function () { return Serenity.IntegerEditor; }], ['Descricao', function () { return Serenity.StringEditor; }], ['Principal', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(EscalasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EscalasRow;
        (function (EscalasRow) {
            EscalasRow.idProperty = 'EscalaId';
            EscalasRow.nameProperty = 'Descricao';
            EscalasRow.localTextPrefix = 'Clinica.Escalas';
            EscalasRow.lookupKey = 'Clinica.Escalas';
            function getLookup() {
                return Q.getLookup('Clinica.Escalas');
            }
            EscalasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EscalasRow.Fields || (EscalasRow.Fields = {}));
            ['EscalaId', 'ProfissionalId', 'Descricao', 'Principal'].forEach(function (x) { return Fields[x] = x; });
        })(EscalasRow = Clinica.EscalasRow || (Clinica.EscalasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EscalasService;
        (function (EscalasService) {
            EscalasService.baseUrl = 'Clinica/Escalas';
            var Methods;
            (function (Methods) {
            })(Methods = EscalasService.Methods || (EscalasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EscalasService[x] = function (r, s, o) { return Q.serviceRequest(EscalasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EscalasService.baseUrl + '/' + x;
            });
        })(EscalasService = Clinica.EscalasService || (Clinica.EscalasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesForm = /** @class */ (function (_super) {
            __extends(EspecialidadesForm, _super);
            function EspecialidadesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EspecialidadesForm.formKey = 'Clinica.Especialidades';
            return EspecialidadesForm;
        }(Serenity.PrefixedContext));
        Clinica.EspecialidadesForm = EspecialidadesForm;
        [['TipoEspecialidadeId', function () { return Serenity.LookupEditor; }], ['Descricao', function () { return Serenity.StringEditor; }], ['VisivelAgenda', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(EspecialidadesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesProcedimentosForm = /** @class */ (function (_super) {
            __extends(EspecialidadesProcedimentosForm, _super);
            function EspecialidadesProcedimentosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EspecialidadesProcedimentosForm.formKey = 'Clinica.EspecialidadesProcedimentos';
            return EspecialidadesProcedimentosForm;
        }(Serenity.PrefixedContext));
        Clinica.EspecialidadesProcedimentosForm = EspecialidadesProcedimentosForm;
        [['EspecialidadeId', function () { return Serenity.LookupEditor; }], ['ProcedimentoId', function () { return Serenity.LookupEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['DataCadastrada', function () { return Serenity.DateTimeEditor; }], ['IdCodigoRegistrado', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(EspecialidadesProcedimentosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesProcedimentosRow;
        (function (EspecialidadesProcedimentosRow) {
            EspecialidadesProcedimentosRow.idProperty = 'EspecialidadesProcedimentosId';
            EspecialidadesProcedimentosRow.nameProperty = 'Observacao';
            EspecialidadesProcedimentosRow.localTextPrefix = 'Clinica.EspecialidadesProcedimentos';
            EspecialidadesProcedimentosRow.lookupKey = 'Clinica.EspecialidadesProcedimentos';
            function getLookup() {
                return Q.getLookup('Clinica.EspecialidadesProcedimentos');
            }
            EspecialidadesProcedimentosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EspecialidadesProcedimentosRow.Fields || (EspecialidadesProcedimentosRow.Fields = {}));
            ['EspecialidadesProcedimentosId', 'EspecialidadeId', 'ProcedimentoId', 'DataInicio', 'DataFim', 'Observacao', 'DataCadastrada', 'IdCodigoRegistrado', 'EspecialidadeTipoEspecialidadeId', 'EspecialidadeDescricao', 'EspecialidadeVisivelAgenda', 'ProcedimentoTabelaId', 'Procedimento', 'ProcedimentoCodigo', 'ProcedimentoCh', 'ProcedimentoCodigoCbhpm', 'ProcedimentoCodigoTuss', 'ProcedimentoDataCadastrada', 'ProcedimentoIdCodigoRegistrado'].forEach(function (x) { return Fields[x] = x; });
        })(EspecialidadesProcedimentosRow = Clinica.EspecialidadesProcedimentosRow || (Clinica.EspecialidadesProcedimentosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesProcedimentosService;
        (function (EspecialidadesProcedimentosService) {
            EspecialidadesProcedimentosService.baseUrl = 'Clinica/EspecialidadesProcedimentos';
            var Methods;
            (function (Methods) {
            })(Methods = EspecialidadesProcedimentosService.Methods || (EspecialidadesProcedimentosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EspecialidadesProcedimentosService[x] = function (r, s, o) { return Q.serviceRequest(EspecialidadesProcedimentosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EspecialidadesProcedimentosService.baseUrl + '/' + x;
            });
        })(EspecialidadesProcedimentosService = Clinica.EspecialidadesProcedimentosService || (Clinica.EspecialidadesProcedimentosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesProfissionaisForm = /** @class */ (function (_super) {
            __extends(EspecialidadesProfissionaisForm, _super);
            function EspecialidadesProfissionaisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EspecialidadesProfissionaisForm.formKey = 'Clinica.EspecialidadesProfissionais';
            return EspecialidadesProfissionaisForm;
        }(Serenity.PrefixedContext));
        Clinica.EspecialidadesProfissionaisForm = EspecialidadesProfissionaisForm;
        [['ProfissionalId', function () { return Serenity.LookupEditor; }], ['EspecialidadeId', function () { return Serenity.LookupEditor; }], ['Cbosid', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(EspecialidadesProfissionaisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesProfissionaisRow;
        (function (EspecialidadesProfissionaisRow) {
            EspecialidadesProfissionaisRow.idProperty = 'EspecialidadeProfisisonalId';
            EspecialidadesProfissionaisRow.localTextPrefix = 'Clinica.EspecialidadesProfissionais';
            EspecialidadesProfissionaisRow.lookupKey = 'Clinica.EspecialidadesProfissionais';
            function getLookup() {
                return Q.getLookup('Clinica.EspecialidadesProfissionais');
            }
            EspecialidadesProfissionaisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EspecialidadesProfissionaisRow.Fields || (EspecialidadesProfissionaisRow.Fields = {}));
            ['EspecialidadeProfisisonalId', 'ProfissionalId', 'EspecialidadeId', 'Cbosid', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'EspecialidadeTipoEspecialidadeId', 'EspecialidadeDescricao', 'EspecialidadeVisivelAgenda', 'CbosidCodigo', 'CbosidCbos'].forEach(function (x) { return Fields[x] = x; });
        })(EspecialidadesProfissionaisRow = Clinica.EspecialidadesProfissionaisRow || (Clinica.EspecialidadesProfissionaisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesProfissionaisService;
        (function (EspecialidadesProfissionaisService) {
            EspecialidadesProfissionaisService.baseUrl = 'Clinica/EspecialidadesProfissionais';
            var Methods;
            (function (Methods) {
            })(Methods = EspecialidadesProfissionaisService.Methods || (EspecialidadesProfissionaisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EspecialidadesProfissionaisService[x] = function (r, s, o) { return Q.serviceRequest(EspecialidadesProfissionaisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EspecialidadesProfissionaisService.baseUrl + '/' + x;
            });
        })(EspecialidadesProfissionaisService = Clinica.EspecialidadesProfissionaisService || (Clinica.EspecialidadesProfissionaisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesRow;
        (function (EspecialidadesRow) {
            EspecialidadesRow.idProperty = 'EspecialidadeId';
            EspecialidadesRow.nameProperty = 'Descricao';
            EspecialidadesRow.localTextPrefix = 'Clinica.Especialidades';
            EspecialidadesRow.lookupKey = 'Clinica.Especialidades';
            function getLookup() {
                return Q.getLookup('Clinica.Especialidades');
            }
            EspecialidadesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EspecialidadesRow.Fields || (EspecialidadesRow.Fields = {}));
            ['EspecialidadeId', 'TipoEspecialidadeId', 'Descricao', 'VisivelAgenda', 'TipoEspecialidadeDescricao'].forEach(function (x) { return Fields[x] = x; });
        })(EspecialidadesRow = Clinica.EspecialidadesRow || (Clinica.EspecialidadesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EspecialidadesService;
        (function (EspecialidadesService) {
            EspecialidadesService.baseUrl = 'Clinica/Especialidades';
            var Methods;
            (function (Methods) {
            })(Methods = EspecialidadesService.Methods || (EspecialidadesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EspecialidadesService[x] = function (r, s, o) { return Q.serviceRequest(EspecialidadesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EspecialidadesService.baseUrl + '/' + x;
            });
        })(EspecialidadesService = Clinica.EspecialidadesService || (Clinica.EspecialidadesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisForm = /** @class */ (function (_super) {
            __extends(EstadosCivisForm, _super);
            function EstadosCivisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EstadosCivisForm.formKey = 'Clinica.EstadosCivis';
            return EstadosCivisForm;
        }(Serenity.PrefixedContext));
        Clinica.EstadosCivisForm = EstadosCivisForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EstadosCivisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisRow;
        (function (EstadosCivisRow) {
            EstadosCivisRow.idProperty = 'EstadoCivilId';
            EstadosCivisRow.nameProperty = 'Descricao';
            EstadosCivisRow.localTextPrefix = 'Clinica.EstadosCivis';
            EstadosCivisRow.lookupKey = 'Clinica.EstadosCivis';
            function getLookup() {
                return Q.getLookup('Clinica.EstadosCivis');
            }
            EstadosCivisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EstadosCivisRow.Fields || (EstadosCivisRow.Fields = {}));
            ['EstadoCivilId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(EstadosCivisRow = Clinica.EstadosCivisRow || (Clinica.EstadosCivisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var EstadosCivisService;
        (function (EstadosCivisService) {
            EstadosCivisService.baseUrl = 'Clinica/EstadosCivis';
            var Methods;
            (function (Methods) {
            })(Methods = EstadosCivisService.Methods || (EstadosCivisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EstadosCivisService[x] = function (r, s, o) { return Q.serviceRequest(EstadosCivisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EstadosCivisService.baseUrl + '/' + x;
            });
        })(EstadosCivisService = Clinica.EstadosCivisService || (Clinica.EstadosCivisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsForm = /** @class */ (function (_super) {
            __extends(ExceptionsForm, _super);
            function ExceptionsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExceptionsForm.formKey = 'Clinica.Exceptions';
            return ExceptionsForm;
        }(Serenity.PrefixedContext));
        Clinica.ExceptionsForm = ExceptionsForm;
        [['Guid', function () { return Serenity.StringEditor; }], ['ApplicationName', function () { return Serenity.StringEditor; }], ['MachineName', function () { return Serenity.StringEditor; }], ['CreationDate', function () { return Serenity.DateTimeEditor; }], ['Type', function () { return Serenity.StringEditor; }], ['IsProtected', function () { return Serenity.BooleanEditor; }], ['Host', function () { return Serenity.StringEditor; }], ['Url', function () { return Serenity.TextAreaEditor; }], ['HttpMethod', function () { return Serenity.StringEditor; }], ['IpAddress', function () { return Serenity.StringEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['Message', function () { return Serenity.TextAreaEditor; }], ['Detail', function () { return Serenity.StringEditor; }], ['StatusCode', function () { return Serenity.IntegerEditor; }], ['Sql', function () { return Serenity.StringEditor; }], ['DeletionDate', function () { return Serenity.DateTimeEditor; }], ['FullJson', function () { return Serenity.StringEditor; }], ['ErrorHash', function () { return Serenity.IntegerEditor; }], ['DuplicateCount', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ExceptionsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsRow;
        (function (ExceptionsRow) {
            ExceptionsRow.idProperty = 'Id';
            ExceptionsRow.nameProperty = 'ApplicationName';
            ExceptionsRow.localTextPrefix = 'Clinica.Exceptions';
            ExceptionsRow.lookupKey = 'Clinica.Exceptions';
            function getLookup() {
                return Q.getLookup('Clinica.Exceptions');
            }
            ExceptionsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ExceptionsRow.Fields || (ExceptionsRow.Fields = {}));
            ['Id', 'Guid', 'ApplicationName', 'MachineName', 'CreationDate', 'Type', 'IsProtected', 'Host', 'Url', 'HttpMethod', 'IpAddress', 'Source', 'Message', 'Detail', 'StatusCode', 'Sql', 'DeletionDate', 'FullJson', 'ErrorHash', 'DuplicateCount'].forEach(function (x) { return Fields[x] = x; });
        })(ExceptionsRow = Clinica.ExceptionsRow || (Clinica.ExceptionsRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ExceptionsService;
        (function (ExceptionsService) {
            ExceptionsService.baseUrl = 'Clinica/Exceptions';
            var Methods;
            (function (Methods) {
            })(Methods = ExceptionsService.Methods || (ExceptionsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ExceptionsService[x] = function (r, s, o) { return Q.serviceRequest(ExceptionsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ExceptionsService.baseUrl + '/' + x;
            });
        })(ExceptionsService = Clinica.ExceptionsService || (Clinica.ExceptionsService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FeriadosForm = /** @class */ (function (_super) {
            __extends(FeriadosForm, _super);
            function FeriadosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FeriadosForm.formKey = 'Clinica.Feriados';
            return FeriadosForm;
        }(Serenity.PrefixedContext));
        Clinica.FeriadosForm = FeriadosForm;
        [['TipoFeriadoId', function () { return Serenity.LookupEditor; }], ['DataFeriado', function () { return Serenity.DateTimeEditor; }], ['Feriado', function () { return Serenity.StringEditor; }], ['Ativo', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(FeriadosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FeriadosRow;
        (function (FeriadosRow) {
            FeriadosRow.idProperty = 'FeriadoId';
            FeriadosRow.nameProperty = 'Feriado';
            FeriadosRow.localTextPrefix = 'Clinica.Feriados';
            FeriadosRow.lookupKey = 'Clinica.Feriados';
            function getLookup() {
                return Q.getLookup('Clinica.Feriados');
            }
            FeriadosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FeriadosRow.Fields || (FeriadosRow.Fields = {}));
            ['FeriadoId', 'TipoFeriadoId', 'DataFeriado', 'Feriado', 'Ativo', 'TipoFeriado'].forEach(function (x) { return Fields[x] = x; });
        })(FeriadosRow = Clinica.FeriadosRow || (Clinica.FeriadosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FeriadosService;
        (function (FeriadosService) {
            FeriadosService.baseUrl = 'Clinica/Feriados';
            var Methods;
            (function (Methods) {
            })(Methods = FeriadosService.Methods || (FeriadosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FeriadosService[x] = function (r, s, o) { return Q.serviceRequest(FeriadosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FeriadosService.baseUrl + '/' + x;
            });
        })(FeriadosService = Clinica.FeriadosService || (Clinica.FeriadosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FichasCnesForm = /** @class */ (function (_super) {
            __extends(FichasCnesForm, _super);
            function FichasCnesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FichasCnesForm.formKey = 'Clinica.FichasCnes';
            return FichasCnesForm;
        }(Serenity.PrefixedContext));
        Clinica.FichasCnesForm = FichasCnesForm;
        [['ProfissionalId', function () { return Serenity.LookupEditor; }], ['TipoFichaCnes', function () { return Serenity.LookupEditor; }], ['DataCriacao', function () { return Serenity.DateTimeEditor; }], ['DataHoraEnvio', function () { return Serenity.DateTimeEditor; }], ['ProtocoloRecebimento', function () { return Serenity.StringEditor; }], ['ProfissionalAssinou', function () { return Serenity.BooleanEditor; }], ['ArquivoFichaCnes', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(FichasCnesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FichasCnesRow;
        (function (FichasCnesRow) {
            FichasCnesRow.idProperty = 'FichasCnesid';
            FichasCnesRow.nameProperty = 'ProtocoloRecebimento';
            FichasCnesRow.localTextPrefix = 'Clinica.FichasCnes';
            FichasCnesRow.lookupKey = 'Clinica.FichasCnes';
            function getLookup() {
                return Q.getLookup('Clinica.FichasCnes');
            }
            FichasCnesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FichasCnesRow.Fields || (FichasCnesRow.Fields = {}));
            ['FichasCnesid', 'ProfissionalId', 'TipoFichaCnes', 'DataCriacao', 'DataHoraEnvio', 'ProtocoloRecebimento', 'ProfissionalAssinou', 'ArquivoFichaCnes', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'TipoFichaCnesDescricao'].forEach(function (x) { return Fields[x] = x; });
        })(FichasCnesRow = Clinica.FichasCnesRow || (Clinica.FichasCnesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FichasCnesService;
        (function (FichasCnesService) {
            FichasCnesService.baseUrl = 'Clinica/FichasCnes';
            var Methods;
            (function (Methods) {
            })(Methods = FichasCnesService.Methods || (FichasCnesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FichasCnesService[x] = function (r, s, o) { return Q.serviceRequest(FichasCnesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FichasCnesService.baseUrl + '/' + x;
            });
        })(FichasCnesService = Clinica.FichasCnesService || (Clinica.FichasCnesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FolhasPagamentosProfissionaisForm = /** @class */ (function (_super) {
            __extends(FolhasPagamentosProfissionaisForm, _super);
            function FolhasPagamentosProfissionaisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FolhasPagamentosProfissionaisForm.formKey = 'Clinica.FolhasPagamentosProfissionais';
            return FolhasPagamentosProfissionaisForm;
        }(Serenity.PrefixedContext));
        Clinica.FolhasPagamentosProfissionaisForm = FolhasPagamentosProfissionaisForm;
        [['ProfissionalId', function () { return Serenity.LookupEditor; }], ['NotaFiscalProfissional', function () { return Serenity.IntegerEditor; }], ['Arquivos', function () { return Serenity.TextAreaEditor; }], ['Movimento', function () { return Serenity.DateTimeEditor; }], ['DataPagamento', function () { return Serenity.DateTimeEditor; }], ['ValorPago', function () { return Serenity.DecimalEditor; }], ['DataImpressao', function () { return Serenity.DateTimeEditor; }]].forEach(function (x) { return Object.defineProperty(FolhasPagamentosProfissionaisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FolhasPagamentosProfissionaisItensForm = /** @class */ (function (_super) {
            __extends(FolhasPagamentosProfissionaisItensForm, _super);
            function FolhasPagamentosProfissionaisItensForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FolhasPagamentosProfissionaisItensForm.formKey = 'Clinica.FolhasPagamentosProfissionaisItens';
            return FolhasPagamentosProfissionaisItensForm;
        }(Serenity.PrefixedContext));
        Clinica.FolhasPagamentosProfissionaisItensForm = FolhasPagamentosProfissionaisItensForm;
        [['FolhaPagamentoProfissionalId', function () { return Serenity.LookupEditor; }], ['Banco', function () { return Serenity.StringEditor; }], ['Agencia', function () { return Serenity.StringEditor; }], ['Conta', function () { return Serenity.StringEditor; }], ['FormaPagamento', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(FolhasPagamentosProfissionaisItensForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FolhasPagamentosProfissionaisItensRow;
        (function (FolhasPagamentosProfissionaisItensRow) {
            FolhasPagamentosProfissionaisItensRow.idProperty = 'FolhaPagamentoProfissionalItemId';
            FolhasPagamentosProfissionaisItensRow.nameProperty = 'Banco';
            FolhasPagamentosProfissionaisItensRow.localTextPrefix = 'Clinica.FolhasPagamentosProfissionaisItens';
            FolhasPagamentosProfissionaisItensRow.lookupKey = 'Clinica.FolhasPagamentosProfissionaisItens';
            function getLookup() {
                return Q.getLookup('Clinica.FolhasPagamentosProfissionaisItens');
            }
            FolhasPagamentosProfissionaisItensRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FolhasPagamentosProfissionaisItensRow.Fields || (FolhasPagamentosProfissionaisItensRow.Fields = {}));
            ['FolhaPagamentoProfissionalItemId', 'FolhaPagamentoProfissionalId', 'Banco', 'Agencia', 'Conta', 'FormaPagamento', 'FolhaPagamentoProfissionalProfissionalId', 'FolhaPagamentoProfissionalNotaFiscalProfissional', 'FolhaPagamentoProfissionalArquivos', 'FolhaPagamentoProfissionalMovimento', 'FolhaPagamentoProfissionalDataPagamento', 'FolhaPagamentoProfissionalValorPago', 'FolhaPagamentoProfissionalDataImpressao'].forEach(function (x) { return Fields[x] = x; });
        })(FolhasPagamentosProfissionaisItensRow = Clinica.FolhasPagamentosProfissionaisItensRow || (Clinica.FolhasPagamentosProfissionaisItensRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FolhasPagamentosProfissionaisItensService;
        (function (FolhasPagamentosProfissionaisItensService) {
            FolhasPagamentosProfissionaisItensService.baseUrl = 'Clinica/FolhasPagamentosProfissionaisItens';
            var Methods;
            (function (Methods) {
            })(Methods = FolhasPagamentosProfissionaisItensService.Methods || (FolhasPagamentosProfissionaisItensService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FolhasPagamentosProfissionaisItensService[x] = function (r, s, o) { return Q.serviceRequest(FolhasPagamentosProfissionaisItensService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FolhasPagamentosProfissionaisItensService.baseUrl + '/' + x;
            });
        })(FolhasPagamentosProfissionaisItensService = Clinica.FolhasPagamentosProfissionaisItensService || (Clinica.FolhasPagamentosProfissionaisItensService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FolhasPagamentosProfissionaisRow;
        (function (FolhasPagamentosProfissionaisRow) {
            FolhasPagamentosProfissionaisRow.idProperty = 'FolhaPagamentoProfissionalId';
            FolhasPagamentosProfissionaisRow.nameProperty = 'Arquivos';
            FolhasPagamentosProfissionaisRow.localTextPrefix = 'Clinica.FolhasPagamentosProfissionais';
            FolhasPagamentosProfissionaisRow.lookupKey = 'Clinica.FolhasPagamentosProfissionais';
            function getLookup() {
                return Q.getLookup('Clinica.FolhasPagamentosProfissionais');
            }
            FolhasPagamentosProfissionaisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FolhasPagamentosProfissionaisRow.Fields || (FolhasPagamentosProfissionaisRow.Fields = {}));
            ['FolhaPagamentoProfissionalId', 'ProfissionalId', 'NotaFiscalProfissional', 'Arquivos', 'Movimento', 'DataPagamento', 'ValorPago', 'DataImpressao', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato'].forEach(function (x) { return Fields[x] = x; });
        })(FolhasPagamentosProfissionaisRow = Clinica.FolhasPagamentosProfissionaisRow || (Clinica.FolhasPagamentosProfissionaisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FolhasPagamentosProfissionaisService;
        (function (FolhasPagamentosProfissionaisService) {
            FolhasPagamentosProfissionaisService.baseUrl = 'Clinica/FolhasPagamentosProfissionais';
            var Methods;
            (function (Methods) {
            })(Methods = FolhasPagamentosProfissionaisService.Methods || (FolhasPagamentosProfissionaisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FolhasPagamentosProfissionaisService[x] = function (r, s, o) { return Q.serviceRequest(FolhasPagamentosProfissionaisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FolhasPagamentosProfissionaisService.baseUrl + '/' + x;
            });
        })(FolhasPagamentosProfissionaisService = Clinica.FolhasPagamentosProfissionaisService || (Clinica.FolhasPagamentosProfissionaisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresForm = /** @class */ (function (_super) {
            __extends(FornecedoresForm, _super);
            function FornecedoresForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FornecedoresForm.formKey = 'Clinica.Fornecedores';
            return FornecedoresForm;
        }(Serenity.PrefixedContext));
        Clinica.FornecedoresForm = FornecedoresForm;
        [['Status', function () { return Serenity.BooleanEditor; }], ['PessoaJuridica', function () { return Serenity.BooleanEditor; }], ['RazaoSocial', function () { return Serenity.TextAreaEditor; }], ['NomeFantasia', function () { return Serenity.TextAreaEditor; }], ['NomeAbreviado', function () { return Serenity.StringEditor; }], ['Cpf', function () { return Serenity.MaskedEditor; }], ['Rg', function () { return Serenity.StringEditor; }], ['Cnpj', function () { return Serenity.MaskedEditor; }], ['InscricaoEstadual', function () { return Serenity.TextAreaEditor; }], ['InscricaoMunicipal', function () { return Serenity.TextAreaEditor; }], ['Site', function () { return Serenity.TextAreaEditor; }], ['Telefone', function () { return Serenity.MaskedEditor; }], ['Fax', function () { return Serenity.TextAreaEditor; }], ['TelefoneAlternativo', function () { return Serenity.MaskedEditor; }], ['EmailCorporativo', function () { return Serenity.EmailEditor; }], ['AceitaReceberEmail', function () { return Serenity.BooleanEditor; }], ['MotivoStatus', function () { return Serenity.TextAreaEditor; }], ['QuantidadeEmpregados', function () { return Serenity.IntegerEditor; }], ['AtividadeEmpresaId', function () { return Serenity.IntegerEditor; }], ['ReceitaAnual', function () { return Serenity.DecimalEditor; }], ['MarcasTrabalhadas', function () { return Serenity.TextAreaEditor; }], ['ObservacoesGerais', function () { return Serenity.TextAreaEditor; }], ['DataCriacao', function () { return Serenity.DateTimeEditor; }], ['DataAlteracao', function () { return Serenity.DateTimeEditor; }], ['Inativo', function () { return Serenity.BooleanEditor; }], ['DataInativo', function () { return Serenity.DateTimeEditor; }], ['ContatosList', function () { return Clinica.ContatosEditor; }], ['EnderecosList', function () { return Clinica.EnderecosEditor; }]].forEach(function (x) { return Object.defineProperty(FornecedoresForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresRow;
        (function (FornecedoresRow) {
            FornecedoresRow.idProperty = 'FornecedorId';
            FornecedoresRow.nameProperty = 'RazaoSocial';
            FornecedoresRow.localTextPrefix = 'Clinica.Fornecedores';
            FornecedoresRow.lookupKey = 'Clinica.Fornecedores';
            function getLookup() {
                return Q.getLookup('Clinica.Fornecedores');
            }
            FornecedoresRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = FornecedoresRow.Fields || (FornecedoresRow.Fields = {}));
            ['FornecedorId', 'Status', 'PessoaJuridica', 'RazaoSocial', 'NomeFantasia', 'NomeAbreviado', 'Cpf', 'Rg', 'Cnpj', 'InscricaoEstadual', 'InscricaoMunicipal', 'Site', 'Telefone', 'Fax', 'TelefoneAlternativo', 'EmailCorporativo', 'AceitaReceberEmail', 'MotivoStatus', 'QuantidadeEmpregados', 'AtividadeEmpresaId', 'ReceitaAnual', 'MarcasTrabalhadas', 'ObservacoesGerais', 'DataCriacao', 'DataAlteracao', 'Inativo', 'DataInativo', 'ContatosList', 'EnderecosList'].forEach(function (x) { return Fields[x] = x; });
        })(FornecedoresRow = Clinica.FornecedoresRow || (Clinica.FornecedoresRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var FornecedoresService;
        (function (FornecedoresService) {
            FornecedoresService.baseUrl = 'Clinica/Fornecedores';
            var Methods;
            (function (Methods) {
            })(Methods = FornecedoresService.Methods || (FornecedoresService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                FornecedoresService[x] = function (r, s, o) { return Q.serviceRequest(FornecedoresService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = FornecedoresService.baseUrl + '/' + x;
            });
        })(FornecedoresService = Clinica.FornecedoresService || (Clinica.FornecedoresService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var GuiasForm = /** @class */ (function (_super) {
            __extends(GuiasForm, _super);
            function GuiasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GuiasForm.formKey = 'Clinica.Guias';
            return GuiasForm;
        }(Serenity.PrefixedContext));
        Clinica.GuiasForm = GuiasForm;
        [['TipoGuiaId', function () { return Serenity.LookupEditor; }], ['TipoConsultaId', function () { return Serenity.LookupEditor; }], ['Guia', function () { return Serenity.StringEditor; }], ['GuiaOperador', function () { return Serenity.StringEditor; }], ['Carteirinha', function () { return Serenity.StringEditor; }], ['NomePaciente', function () { return Serenity.TextAreaEditor; }], ['AutorizacaoId', function () { return Serenity.LookupEditor; }], ['NumeroAutorizacao', function () { return Serenity.StringEditor; }], ['IdAuditada', function () { return Serenity.BooleanEditor; }], ['DataAuditoria', function () { return Serenity.DateTimeEditor; }], ['IdAuditoriaAprovada', function () { return Serenity.BooleanEditor; }], ['ConclusaoAuditoria', function () { return Serenity.TextAreaEditor; }], ['ProfissionalIdSolicitante', function () { return Serenity.IntegerEditor; }], ['ProfissionalIdExecutante', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(GuiasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var GuiasRow;
        (function (GuiasRow) {
            GuiasRow.idProperty = 'GuiaId';
            GuiasRow.nameProperty = 'Guia';
            GuiasRow.localTextPrefix = 'Clinica.Guias';
            GuiasRow.lookupKey = 'Clinica.Guias';
            function getLookup() {
                return Q.getLookup('Clinica.Guias');
            }
            GuiasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = GuiasRow.Fields || (GuiasRow.Fields = {}));
            ['GuiaId', 'TipoGuiaId', 'TipoConsultaId', 'Guia', 'GuiaOperador', 'Carteirinha', 'NomePaciente', 'AutorizacaoId', 'NumeroAutorizacao', 'IdAuditada', 'DataAuditoria', 'IdAuditoriaAprovada', 'ConclusaoAuditoria', 'ProfissionalIdSolicitante', 'ProfissionalIdExecutante', 'TipoGuiaDescricao', 'TipoGuiaAtivo', 'TipoConsultaDescricao', 'TipoConsultaAtivo', 'AutorizacaoNumeroAutorizacao', 'AutorizacaoConvenioId', 'AutorizacaoPacienteId', 'AutorizacaoArquivos', 'AutorizacaoDataSolicitacao', 'AutorizacaoDataAutorizacao', 'AutorizacaoDataValidade', 'AutorizacaoObservacao', 'AutorizacaoIdAuditoriaAprovada'].forEach(function (x) { return Fields[x] = x; });
        })(GuiasRow = Clinica.GuiasRow || (Clinica.GuiasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var GuiasService;
        (function (GuiasService) {
            GuiasService.baseUrl = 'Clinica/Guias';
            var Methods;
            (function (Methods) {
            })(Methods = GuiasService.Methods || (GuiasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                GuiasService[x] = function (r, s, o) { return Q.serviceRequest(GuiasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = GuiasService.baseUrl + '/' + x;
            });
        })(GuiasService = Clinica.GuiasService || (Clinica.GuiasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var LotesForm = /** @class */ (function (_super) {
            __extends(LotesForm, _super);
            function LotesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LotesForm.formKey = 'Clinica.Lotes';
            return LotesForm;
        }(Serenity.PrefixedContext));
        Clinica.LotesForm = LotesForm;
        [['StatusLoteId', function () { return Serenity.LookupEditor; }], ['Movimentacao', function () { return Serenity.DateTimeEditor; }], ['ConvenioId', function () { return Serenity.IntegerEditor; }], ['DataEmissaoLote', function () { return Serenity.DateTimeEditor; }], ['Lote', function () { return Serenity.StringEditor; }], ['Protocolo', function () { return Serenity.StringEditor; }], ['LoteConvenio', function () { return Serenity.StringEditor; }], ['ValorLote', function () { return Serenity.DecimalEditor; }], ['CapaLote', function () { return Serenity.StringEditor; }], ['Extrato', function () { return Serenity.StringEditor; }], ['EnviadoConvenioId', function () { return Serenity.BooleanEditor; }], ['DataEnviadoConvenio', function () { return Serenity.DateTimeEditor; }], ['ArquivoFisicoEnviadoId', function () { return Serenity.BooleanEditor; }], ['CartaSimplesId', function () { return Serenity.BooleanEditor; }], ['Sedex', function () { return Serenity.StringEditor; }], ['Arid', function () { return Serenity.BooleanEditor; }], ['DataRetornoAr', function () { return Serenity.DateTimeEditor; }], ['ValorCorreios', function () { return Serenity.DecimalEditor; }], ['Arquivos', function () { return Serenity.TextAreaEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['Nfseid', function () { return Serenity.IntegerEditor; }], ['NotaFiscal', function () { return Serenity.StringEditor; }], ['ValorNotaFiscal', function () { return Serenity.DecimalEditor; }], ['DataEmissaoNotaFiscal', function () { return Serenity.DateTimeEditor; }], ['EmailNotaFiscal', function () { return Serenity.EmailEditor; }], ['NotaFiscalImpressaId', function () { return Serenity.BooleanEditor; }], ['NotaFiscalRecebida', function () { return Serenity.StringEditor; }], ['DataNotaFiscalImpressa', function () { return Serenity.DateTimeEditor; }]].forEach(function (x) { return Object.defineProperty(LotesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var LotesRow;
        (function (LotesRow) {
            LotesRow.idProperty = 'LoteId';
            LotesRow.nameProperty = 'Lote';
            LotesRow.localTextPrefix = 'Clinica.Lotes';
            LotesRow.lookupKey = 'Clinica.Lotes';
            function getLookup() {
                return Q.getLookup('Clinica.Lotes');
            }
            LotesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LotesRow.Fields || (LotesRow.Fields = {}));
            ['LoteId', 'StatusLoteId', 'Movimentacao', 'ConvenioId', 'DataEmissaoLote', 'Lote', 'Protocolo', 'LoteConvenio', 'ValorLote', 'CapaLote', 'Extrato', 'EnviadoConvenioId', 'DataEnviadoConvenio', 'ArquivoFisicoEnviadoId', 'CartaSimplesId', 'Sedex', 'Arid', 'DataRetornoAr', 'ValorCorreios', 'Arquivos', 'Observacao', 'Nfseid', 'NotaFiscal', 'ValorNotaFiscal', 'DataEmissaoNotaFiscal', 'EmailNotaFiscal', 'NotaFiscalImpressaId', 'NotaFiscalRecebida', 'DataNotaFiscalImpressa', 'StatusLoteStatus'].forEach(function (x) { return Fields[x] = x; });
        })(LotesRow = Clinica.LotesRow || (Clinica.LotesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var LotesService;
        (function (LotesService) {
            LotesService.baseUrl = 'Clinica/Lotes';
            var Methods;
            (function (Methods) {
            })(Methods = LotesService.Methods || (LotesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LotesService[x] = function (r, s, o) { return Q.serviceRequest(LotesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LotesService.baseUrl + '/' + x;
            });
        })(LotesService = Clinica.LotesService || (Clinica.LotesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosForm = /** @class */ (function (_super) {
            __extends(PacientesConveniosForm, _super);
            function PacientesConveniosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PacientesConveniosForm.formKey = 'Clinica.PacientesConvenios';
            return PacientesConveniosForm;
        }(Serenity.PrefixedContext));
        Clinica.PacientesConveniosForm = PacientesConveniosForm;
        [['PacienteId', function () { return Serenity.LookupEditor; }], ['ConvenioId', function () { return Serenity.LookupEditor; }], ['SubConvenioId', function () { return Serenity.IntegerEditor; }], ['ConvenioPrincipal', function () { return Serenity.BooleanEditor; }], ['DescricaoPlano', function () { return Serenity.StringEditor; }], ['Carteirinha', function () { return Serenity.StringEditor; }], ['DataValidadeCarteirinha', function () { return Serenity.DateEditor; }], ['NomePacienteConvenio', function () { return Serenity.StringEditor; }], ['Inativo', function () { return Serenity.BooleanEditor; }], ['DataInativo', function () { return Serenity.DateTimeEditor; }], ['ImagemCarteirinha', function () { return Serenity.MultipleImageUploadEditor; }], ['DataCadastro', function () { return Serenity.DateTimeEditor; }], ['DataUltimaAtualizacao', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(PacientesConveniosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosRow;
        (function (PacientesConveniosRow) {
            PacientesConveniosRow.idProperty = 'PacienteConvenioId';
            PacientesConveniosRow.nameProperty = 'DescricaoPlano';
            PacientesConveniosRow.localTextPrefix = 'Clinica.PacientesConvenios';
            PacientesConveniosRow.lookupKey = 'Clinica.PacientesConvenios';
            function getLookup() {
                return Q.getLookup('Clinica.PacientesConvenios');
            }
            PacientesConveniosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PacientesConveniosRow.Fields || (PacientesConveniosRow.Fields = {}));
            ['PacienteConvenioId', 'PacienteId', 'ConvenioId', 'SubConvenioId', 'ConvenioPrincipal', 'DescricaoPlano', 'Carteirinha', 'DataValidadeCarteirinha', 'NomePacienteConvenio', 'Inativo', 'DataInativo', 'ImagemCarteirinha', 'DataCadastro', 'DataUltimaAtualizacao', 'Observacao', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia'].forEach(function (x) { return Fields[x] = x; });
        })(PacientesConveniosRow = Clinica.PacientesConveniosRow || (Clinica.PacientesConveniosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesConveniosService;
        (function (PacientesConveniosService) {
            PacientesConveniosService.baseUrl = 'Clinica/PacientesConvenios';
            var Methods;
            (function (Methods) {
            })(Methods = PacientesConveniosService.Methods || (PacientesConveniosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PacientesConveniosService[x] = function (r, s, o) { return Q.serviceRequest(PacientesConveniosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PacientesConveniosService.baseUrl + '/' + x;
            });
        })(PacientesConveniosService = Clinica.PacientesConveniosService || (Clinica.PacientesConveniosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfForm = /** @class */ (function (_super) {
            __extends(PacientesEmissaoNfForm, _super);
            function PacientesEmissaoNfForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PacientesEmissaoNfForm.formKey = 'Clinica.PacientesEmissaoNf';
            return PacientesEmissaoNfForm;
        }(Serenity.PrefixedContext));
        Clinica.PacientesEmissaoNfForm = PacientesEmissaoNfForm;
        [['PacienteId', function () { return Serenity.LookupEditor; }], ['NomeResponsavel', function () { return Serenity.StringEditor; }], ['PessoaJuridica', function () { return Serenity.BooleanEditor; }], ['CpfResponsavel', function () { return Serenity.MaskedEditor; }], ['CnpjResponsavel', function () { return Serenity.MaskedEditor; }], ['EmailNf', function () { return Serenity.EmailEditor; }], ['Padrao', function () { return Serenity.BooleanEditor; }], ['TipoEnderecoId', function () { return Serenity.LookupEditor; }], ['Cep', function () { return Serenity.MaskedEditor; }], ['Rua', function () { return Serenity.StringEditor; }], ['Numero', function () { return Serenity.StringEditor; }], ['Complemento', function () { return Serenity.StringEditor; }], ['Bairro', function () { return Serenity.StringEditor; }], ['Cidade', function () { return Serenity.StringEditor; }], ['CodigoIbgeCidade', function () { return Serenity.StringEditor; }], ['Estado', function () { return Serenity.StringEditor; }], ['CodigoIbgeEstado', function () { return Serenity.StringEditor; }], ['Pais', function () { return Serenity.StringEditor; }], ['Referencia', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(PacientesEmissaoNfForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfRow;
        (function (PacientesEmissaoNfRow) {
            PacientesEmissaoNfRow.idProperty = 'PacienteEmissaoNf';
            PacientesEmissaoNfRow.nameProperty = 'NomeResponsavel';
            PacientesEmissaoNfRow.localTextPrefix = 'Clinica.PacientesEmissaoNf';
            PacientesEmissaoNfRow.lookupKey = 'Clinica.PacientesEmissaoNf';
            function getLookup() {
                return Q.getLookup('Clinica.PacientesEmissaoNf');
            }
            PacientesEmissaoNfRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PacientesEmissaoNfRow.Fields || (PacientesEmissaoNfRow.Fields = {}));
            ['PacienteEmissaoNf', 'PacienteId', 'NomeResponsavel', 'PessoaJuridica', 'CpfResponsavel', 'CnpjResponsavel', 'EmailNf', 'Padrao', 'TipoEnderecoId', 'Rua', 'Numero', 'Complemento', 'Bairro', 'Cidade', 'CodigoIbgeCidade', 'Estado', 'CodigoIbgeEstado', 'Pais', 'Cep', 'Referencia', 'PacienteMatricula', 'Paciente', 'TipoEndereco', 'TipoEnderecoPessoaFisica', 'TipoEnderecoOrdem'].forEach(function (x) { return Fields[x] = x; });
        })(PacientesEmissaoNfRow = Clinica.PacientesEmissaoNfRow || (Clinica.PacientesEmissaoNfRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesEmissaoNfService;
        (function (PacientesEmissaoNfService) {
            PacientesEmissaoNfService.baseUrl = 'Clinica/PacientesEmissaoNf';
            var Methods;
            (function (Methods) {
            })(Methods = PacientesEmissaoNfService.Methods || (PacientesEmissaoNfService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PacientesEmissaoNfService[x] = function (r, s, o) { return Q.serviceRequest(PacientesEmissaoNfService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PacientesEmissaoNfService.baseUrl + '/' + x;
            });
        })(PacientesEmissaoNfService = Clinica.PacientesEmissaoNfService || (Clinica.PacientesEmissaoNfService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesForm = /** @class */ (function (_super) {
            __extends(PacientesForm, _super);
            function PacientesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PacientesForm.formKey = 'Clinica.Pacientes';
            return PacientesForm;
        }(Serenity.PrefixedContext));
        Clinica.PacientesForm = PacientesForm;
        [['PacienteIdControlMedic', function () { return Serenity.IntegerEditor; }], ['PacienteIdGestorMedico', function () { return Serenity.IntegerEditor; }], ['DataCadastro', function () { return Serenity.DateTimeEditor; }], ['DataUltimaAtualizacao', function () { return Serenity.DateTimeEditor; }], ['Matricula', function () { return Serenity.StringEditor; }], ['StatusId', function () { return Serenity.LookupEditor; }], ['Paciente', function () { return Serenity.StringEditor; }], ['SexoId', function () { return Serenity.LookupEditor; }], ['DataNascimento', function () { return Serenity.DateEditor; }], ['Especial', function () { return Serenity.BooleanEditor; }], ['Pai', function () { return Serenity.StringEditor; }], ['Mae', function () { return Serenity.StringEditor; }], ['Responsavel', function () { return Serenity.StringEditor; }], ['CNS', function () { return Serenity.StringEditor; }], ['CarteiraIdentidade', function () { return Serenity.StringEditor; }], ['CPF', function () { return Serenity.MaskedEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['DisturbiosAssociados', function () { return Serenity.TextAreaEditor; }], ['Foto', function () { return Serenity.ImageUploadEditor; }], ['DataFoto', function () { return Serenity.DateEditor; }], ['ContatosList', function () { return Clinica.ContatosEditor; }], ['EnderecosList', function () { return Clinica.EnderecosEditor; }]].forEach(function (x) { return Object.defineProperty(PacientesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesRow;
        (function (PacientesRow) {
            PacientesRow.idProperty = 'PacienteId';
            PacientesRow.nameProperty = 'Paciente';
            PacientesRow.localTextPrefix = 'Clinica.Pacientes';
            PacientesRow.lookupKey = 'Clinica.Pacientes';
            function getLookup() {
                return Q.getLookup('Clinica.Pacientes');
            }
            PacientesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PacientesRow.Fields || (PacientesRow.Fields = {}));
            ['PacienteId', 'DataCadastro', 'DataUltimaAtualizacao', 'Matricula', 'StatusId', 'Paciente', 'Especial', 'Pai', 'Mae', 'SexoId', 'DataNascimento', 'CNS', 'CarteiraIdentidade', 'CPF', 'Observacao', 'DisturbiosAssociados', 'Responsavel', 'Foto', 'DataFoto', 'PacienteIdControlMedic', 'PacienteIdGestorMedico', 'ContatosList', 'EnderecosList', 'Sexo', 'SexoAbreviatura', 'Status'].forEach(function (x) { return Fields[x] = x; });
        })(PacientesRow = Clinica.PacientesRow || (Clinica.PacientesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PacientesService;
        (function (PacientesService) {
            PacientesService.baseUrl = 'Clinica/Pacientes';
            var Methods;
            (function (Methods) {
            })(Methods = PacientesService.Methods || (PacientesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PacientesService[x] = function (r, s, o) { return Q.serviceRequest(PacientesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PacientesService.baseUrl + '/' + x;
            });
        })(PacientesService = Clinica.PacientesService || (Clinica.PacientesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PorcentagemForm = /** @class */ (function (_super) {
            __extends(PorcentagemForm, _super);
            function PorcentagemForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PorcentagemForm.formKey = 'Clinica.Porcentagem';
            return PorcentagemForm;
        }(Serenity.PrefixedContext));
        Clinica.PorcentagemForm = PorcentagemForm;
        [['ProfissionalId', function () { return Serenity.LookupEditor; }], ['ProcedimentoId', function () { return Serenity.LookupEditor; }], ['ValorPorcentagem', function () { return Serenity.DecimalEditor; }], ['ValorFixo', function () { return Serenity.DecimalEditor; }], ['IdMostraFixo', function () { return Serenity.BooleanEditor; }], ['DataCadastrada', function () { return Serenity.DateTimeEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(PorcentagemForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PorcentagemRow;
        (function (PorcentagemRow) {
            PorcentagemRow.idProperty = 'PorcentagemId';
            PorcentagemRow.nameProperty = 'Observacao';
            PorcentagemRow.localTextPrefix = 'Clinica.Porcentagem';
            PorcentagemRow.lookupKey = 'Clinica.Porcentagem';
            function getLookup() {
                return Q.getLookup('Clinica.Porcentagem');
            }
            PorcentagemRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PorcentagemRow.Fields || (PorcentagemRow.Fields = {}));
            ['PorcentagemId', 'ProfissionalId', 'ProcedimentoId', 'ValorPorcentagem', 'ValorFixo', 'IdMostraFixo', 'DataCadastrada', 'DataInicio', 'DataFim', 'Observacao', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'ProcedimentoTabelaId', 'Procedimento', 'ProcedimentoCodigo', 'ProcedimentoCh', 'ProcedimentoCodigoCbhpm', 'ProcedimentoCodigoTuss', 'ProcedimentoDataCadastrada', 'ProcedimentoIdCodigoRegistrado'].forEach(function (x) { return Fields[x] = x; });
        })(PorcentagemRow = Clinica.PorcentagemRow || (Clinica.PorcentagemRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var PorcentagemService;
        (function (PorcentagemService) {
            PorcentagemService.baseUrl = 'Clinica/Porcentagem';
            var Methods;
            (function (Methods) {
            })(Methods = PorcentagemService.Methods || (PorcentagemService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PorcentagemService[x] = function (r, s, o) { return Q.serviceRequest(PorcentagemService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PorcentagemService.baseUrl + '/' + x;
            });
        })(PorcentagemService = Clinica.PorcentagemService || (Clinica.PorcentagemService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProcedimentosForm = /** @class */ (function (_super) {
            __extends(ProcedimentosForm, _super);
            function ProcedimentosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProcedimentosForm.formKey = 'Clinica.Procedimentos';
            return ProcedimentosForm;
        }(Serenity.PrefixedContext));
        Clinica.ProcedimentosForm = ProcedimentosForm;
        [['TabelaId', function () { return Serenity.LookupEditor; }], ['Procedimento', function () { return Serenity.TextAreaEditor; }], ['Codigo', function () { return Serenity.StringEditor; }], ['Ch', function () { return Serenity.DecimalEditor; }], ['CodigoCbhpm', function () { return Serenity.StringEditor; }], ['CodigoTuss', function () { return Serenity.StringEditor; }], ['DataCadastrada', function () { return Serenity.DateTimeEditor; }], ['IdCodigoRegistrado', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(ProcedimentosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProcedimentosRow;
        (function (ProcedimentosRow) {
            ProcedimentosRow.idProperty = 'ProcedimentoId';
            ProcedimentosRow.nameProperty = 'Procedimento';
            ProcedimentosRow.localTextPrefix = 'Clinica.Procedimentos';
            ProcedimentosRow.lookupKey = 'Clinica.Procedimentos';
            function getLookup() {
                return Q.getLookup('Clinica.Procedimentos');
            }
            ProcedimentosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProcedimentosRow.Fields || (ProcedimentosRow.Fields = {}));
            ['ProcedimentoId', 'TabelaId', 'Procedimento', 'Codigo', 'Ch', 'CodigoCbhpm', 'CodigoTuss', 'DataCadastrada', 'IdCodigoRegistrado', 'TabelaDescricao'].forEach(function (x) { return Fields[x] = x; });
        })(ProcedimentosRow = Clinica.ProcedimentosRow || (Clinica.ProcedimentosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProcedimentosService;
        (function (ProcedimentosService) {
            ProcedimentosService.baseUrl = 'Clinica/Procedimentos';
            var Methods;
            (function (Methods) {
            })(Methods = ProcedimentosService.Methods || (ProcedimentosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProcedimentosService[x] = function (r, s, o) { return Q.serviceRequest(ProcedimentosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProcedimentosService.baseUrl + '/' + x;
            });
        })(ProcedimentosService = Clinica.ProcedimentosService || (Clinica.ProcedimentosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProdutosForm = /** @class */ (function (_super) {
            __extends(ProdutosForm, _super);
            function ProdutosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProdutosForm.formKey = 'Clinica.Produtos';
            return ProdutosForm;
        }(Serenity.PrefixedContext));
        Clinica.ProdutosForm = ProdutosForm;
        [['DescricaoProduto', function () { return Serenity.TextAreaEditor; }], ['TipoProdutoId', function () { return Serenity.IntegerEditor; }], ['Descricao', function () { return Serenity.StringEditor; }], ['DescricaoResumida', function () { return Serenity.StringEditor; }], ['ValorVenda', function () { return Serenity.DecimalEditor; }], ['ValorCusto', function () { return Serenity.DecimalEditor; }], ['MargemLucroMinima', function () { return Serenity.DecimalEditor; }], ['FornecedorId', function () { return Serenity.LookupEditor; }], ['GrupoProdutoId', function () { return Serenity.IntegerEditor; }], ['UnidadeId', function () { return Serenity.IntegerEditor; }], ['ObservacaoProduto', function () { return Serenity.TextAreaEditor; }], ['Ativo', function () { return Serenity.BooleanEditor; }], ['DataCriacao', function () { return Serenity.DateTimeEditor; }], ['LoginIdCriacao', function () { return Serenity.IntegerEditor; }], ['Inativo', function () { return Serenity.BooleanEditor; }], ['DataInativo', function () { return Serenity.DateTimeEditor; }], ['LoginIdInativo', function () { return Serenity.IntegerEditor; }], ['PlanoContaId', function () { return Serenity.IntegerEditor; }], ['NcmId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProdutosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProdutosRow;
        (function (ProdutosRow) {
            ProdutosRow.idProperty = 'ProdutoId';
            ProdutosRow.nameProperty = 'DescricaoProduto';
            ProdutosRow.localTextPrefix = 'Clinica.Produtos';
            ProdutosRow.lookupKey = 'Clinica.Produtos';
            function getLookup() {
                return Q.getLookup('Clinica.Produtos');
            }
            ProdutosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProdutosRow.Fields || (ProdutosRow.Fields = {}));
            ['ProdutoId', 'DescricaoProduto', 'TipoProdutoId', 'Descricao', 'DescricaoResumida', 'ValorVenda', 'ValorCusto', 'MargemLucroMinima', 'FornecedorId', 'GrupoProdutoId', 'UnidadeId', 'ObservacaoProduto', 'Ativo', 'DataCriacao', 'LoginIdCriacao', 'Inativo', 'DataInativo', 'LoginIdInativo', 'PlanoContaId', 'NcmId', 'FornecedorStatus', 'FornecedorPessoaJuridica', 'FornecedorRazaoSocial', 'FornecedorNomeFantasia', 'FornecedorNomeAbreviado', 'FornecedorCpf', 'FornecedorRg', 'FornecedorCnpj', 'FornecedorInscricaoEstadual', 'FornecedorInscricaoMunicipal', 'FornecedorSite', 'FornecedorTelefone', 'FornecedorFax', 'FornecedorTelefoneAlternativo', 'FornecedorEmailCorporativo', 'FornecedorAceitaReceberEmail', 'FornecedorMotivoStatus', 'FornecedorQuantidadeEmpregados', 'FornecedorAtividadeEmpresaId', 'FornecedorReceitaAnual', 'FornecedorMarcasTrabalhadas', 'FornecedorObservacoesGerais', 'FornecedorDataCriacao', 'FornecedorDataAlteracao', 'FornecedorInativo', 'FornecedorDataInativo'].forEach(function (x) { return Fields[x] = x; });
        })(ProdutosRow = Clinica.ProdutosRow || (Clinica.ProdutosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProdutosService;
        (function (ProdutosService) {
            ProdutosService.baseUrl = 'Clinica/Produtos';
            var Methods;
            (function (Methods) {
            })(Methods = ProdutosService.Methods || (ProdutosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProdutosService[x] = function (r, s, o) { return Q.serviceRequest(ProdutosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProdutosService.baseUrl + '/' + x;
            });
        })(ProdutosService = Clinica.ProdutosService || (Clinica.ProdutosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasBloqueiosForm = /** @class */ (function (_super) {
            __extends(ProfissionaisAgendasBloqueiosForm, _super);
            function ProfissionaisAgendasBloqueiosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProfissionaisAgendasBloqueiosForm.formKey = 'Clinica.ProfissionaisAgendasBloqueios';
            return ProfissionaisAgendasBloqueiosForm;
        }(Serenity.PrefixedContext));
        Clinica.ProfissionaisAgendasBloqueiosForm = ProfissionaisAgendasBloqueiosForm;
        [['ProfissionalId', function () { return Serenity.LookupEditor; }], ['EscalaId', function () { return Serenity.LookupEditor; }], ['DataHora', function () { return Serenity.DateTimeEditor; }], ['Descricao', function () { return Serenity.StringEditor; }], ['DiaInteiro', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(ProfissionaisAgendasBloqueiosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasBloqueiosRow;
        (function (ProfissionaisAgendasBloqueiosRow) {
            ProfissionaisAgendasBloqueiosRow.idProperty = 'ProfissionalAgendaBloqueioId';
            ProfissionaisAgendasBloqueiosRow.nameProperty = 'Descricao';
            ProfissionaisAgendasBloqueiosRow.localTextPrefix = 'Clinica.ProfissionaisAgendasBloqueios';
            ProfissionaisAgendasBloqueiosRow.lookupKey = 'Clinica.ProfissionaisAgendasBloqueios';
            function getLookup() {
                return Q.getLookup('Clinica.ProfissionaisAgendasBloqueios');
            }
            ProfissionaisAgendasBloqueiosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProfissionaisAgendasBloqueiosRow.Fields || (ProfissionaisAgendasBloqueiosRow.Fields = {}));
            ['ProfissionalAgendaBloqueioId', 'ProfissionalId', 'EscalaId', 'DataHora', 'Descricao', 'DiaInteiro', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'EscalaProfissionalId', 'EscalaDescricao', 'EscalaPrincipal'].forEach(function (x) { return Fields[x] = x; });
        })(ProfissionaisAgendasBloqueiosRow = Clinica.ProfissionaisAgendasBloqueiosRow || (Clinica.ProfissionaisAgendasBloqueiosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasBloqueiosService;
        (function (ProfissionaisAgendasBloqueiosService) {
            ProfissionaisAgendasBloqueiosService.baseUrl = 'Clinica/ProfissionaisAgendasBloqueios';
            var Methods;
            (function (Methods) {
            })(Methods = ProfissionaisAgendasBloqueiosService.Methods || (ProfissionaisAgendasBloqueiosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProfissionaisAgendasBloqueiosService[x] = function (r, s, o) { return Q.serviceRequest(ProfissionaisAgendasBloqueiosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProfissionaisAgendasBloqueiosService.baseUrl + '/' + x;
            });
        })(ProfissionaisAgendasBloqueiosService = Clinica.ProfissionaisAgendasBloqueiosService || (Clinica.ProfissionaisAgendasBloqueiosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasExcecoesForm = /** @class */ (function (_super) {
            __extends(ProfissionaisAgendasExcecoesForm, _super);
            function ProfissionaisAgendasExcecoesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProfissionaisAgendasExcecoesForm.formKey = 'Clinica.ProfissionaisAgendasExcecoes';
            return ProfissionaisAgendasExcecoesForm;
        }(Serenity.PrefixedContext));
        Clinica.ProfissionaisAgendasExcecoesForm = ProfissionaisAgendasExcecoesForm;
        [['ProfissionalId', function () { return Serenity.LookupEditor; }], ['DataInicial', function () { return Serenity.DateTimeEditor; }], ['DataFinal', function () { return Serenity.DateTimeEditor; }], ['Descricao', function () { return Serenity.StringEditor; }], ['DiaInteiro', function () { return Serenity.BooleanEditor; }], ['Ativo', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(ProfissionaisAgendasExcecoesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasExcecoesRow;
        (function (ProfissionaisAgendasExcecoesRow) {
            ProfissionaisAgendasExcecoesRow.idProperty = 'ProfissionalAgendaExcecaoId';
            ProfissionaisAgendasExcecoesRow.nameProperty = 'Descricao';
            ProfissionaisAgendasExcecoesRow.localTextPrefix = 'Clinica.ProfissionaisAgendasExcecoes';
            ProfissionaisAgendasExcecoesRow.lookupKey = 'Clinica.ProfissionaisAgendasExcecoes';
            function getLookup() {
                return Q.getLookup('Clinica.ProfissionaisAgendasExcecoes');
            }
            ProfissionaisAgendasExcecoesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProfissionaisAgendasExcecoesRow.Fields || (ProfissionaisAgendasExcecoesRow.Fields = {}));
            ['ProfissionalAgendaExcecaoId', 'ProfissionalId', 'DataInicial', 'DataFinal', 'Descricao', 'DiaInteiro', 'Ativo', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato'].forEach(function (x) { return Fields[x] = x; });
        })(ProfissionaisAgendasExcecoesRow = Clinica.ProfissionaisAgendasExcecoesRow || (Clinica.ProfissionaisAgendasExcecoesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasExcecoesService;
        (function (ProfissionaisAgendasExcecoesService) {
            ProfissionaisAgendasExcecoesService.baseUrl = 'Clinica/ProfissionaisAgendasExcecoes';
            var Methods;
            (function (Methods) {
            })(Methods = ProfissionaisAgendasExcecoesService.Methods || (ProfissionaisAgendasExcecoesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProfissionaisAgendasExcecoesService[x] = function (r, s, o) { return Q.serviceRequest(ProfissionaisAgendasExcecoesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProfissionaisAgendasExcecoesService.baseUrl + '/' + x;
            });
        })(ProfissionaisAgendasExcecoesService = Clinica.ProfissionaisAgendasExcecoesService || (Clinica.ProfissionaisAgendasExcecoesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasForm = /** @class */ (function (_super) {
            __extends(ProfissionaisAgendasForm, _super);
            function ProfissionaisAgendasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProfissionaisAgendasForm.formKey = 'Clinica.ProfissionaisAgendas';
            return ProfissionaisAgendasForm;
        }(Serenity.PrefixedContext));
        Clinica.ProfissionaisAgendasForm = ProfissionaisAgendasForm;
        [['ProfissionalId', function () { return Serenity.LookupEditor; }], ['EscalaId', function () { return Serenity.LookupEditor; }], ['DiaSemanaId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProfissionaisAgendasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasHorasForm = /** @class */ (function (_super) {
            __extends(ProfissionaisAgendasHorasForm, _super);
            function ProfissionaisAgendasHorasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProfissionaisAgendasHorasForm.formKey = 'Clinica.ProfissionaisAgendasHoras';
            return ProfissionaisAgendasHorasForm;
        }(Serenity.PrefixedContext));
        Clinica.ProfissionaisAgendasHorasForm = ProfissionaisAgendasHorasForm;
        [['ProfissionalAgendaId', function () { return Serenity.IntegerEditor; }], ['Horario', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ProfissionaisAgendasHorasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasHorasRow;
        (function (ProfissionaisAgendasHorasRow) {
            ProfissionaisAgendasHorasRow.idProperty = 'ProfissionalAgendaHoraId';
            ProfissionaisAgendasHorasRow.localTextPrefix = 'Clinica.ProfissionaisAgendasHoras';
            ProfissionaisAgendasHorasRow.lookupKey = 'Clinica.ProfissionaisAgendasHoras';
            function getLookup() {
                return Q.getLookup('Clinica.ProfissionaisAgendasHoras');
            }
            ProfissionaisAgendasHorasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProfissionaisAgendasHorasRow.Fields || (ProfissionaisAgendasHorasRow.Fields = {}));
            ['ProfissionalAgendaHoraId', 'ProfissionalAgendaId', 'Horario'].forEach(function (x) { return Fields[x] = x; });
        })(ProfissionaisAgendasHorasRow = Clinica.ProfissionaisAgendasHorasRow || (Clinica.ProfissionaisAgendasHorasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasHorasService;
        (function (ProfissionaisAgendasHorasService) {
            ProfissionaisAgendasHorasService.baseUrl = 'Clinica/ProfissionaisAgendasHoras';
            var Methods;
            (function (Methods) {
            })(Methods = ProfissionaisAgendasHorasService.Methods || (ProfissionaisAgendasHorasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProfissionaisAgendasHorasService[x] = function (r, s, o) { return Q.serviceRequest(ProfissionaisAgendasHorasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProfissionaisAgendasHorasService.baseUrl + '/' + x;
            });
        })(ProfissionaisAgendasHorasService = Clinica.ProfissionaisAgendasHorasService || (Clinica.ProfissionaisAgendasHorasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasRow;
        (function (ProfissionaisAgendasRow) {
            ProfissionaisAgendasRow.idProperty = 'ProfissionalAgendaId';
            ProfissionaisAgendasRow.localTextPrefix = 'Clinica.ProfissionaisAgendas';
            ProfissionaisAgendasRow.lookupKey = 'Clinica.ProfissionaisAgendas';
            function getLookup() {
                return Q.getLookup('Clinica.ProfissionaisAgendas');
            }
            ProfissionaisAgendasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProfissionaisAgendasRow.Fields || (ProfissionaisAgendasRow.Fields = {}));
            ['ProfissionalAgendaId', 'ProfissionalId', 'EscalaId', 'DiaSemanaId', 'ProfissionalAgendaProfissionalAgendaId', 'ProfissionalAgendaHorario', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'EscalaProfissionalId', 'EscalaDescricao', 'EscalaPrincipal', 'DiaSemanaDescricao'].forEach(function (x) { return Fields[x] = x; });
        })(ProfissionaisAgendasRow = Clinica.ProfissionaisAgendasRow || (Clinica.ProfissionaisAgendasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisAgendasService;
        (function (ProfissionaisAgendasService) {
            ProfissionaisAgendasService.baseUrl = 'Clinica/ProfissionaisAgendas';
            var Methods;
            (function (Methods) {
            })(Methods = ProfissionaisAgendasService.Methods || (ProfissionaisAgendasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProfissionaisAgendasService[x] = function (r, s, o) { return Q.serviceRequest(ProfissionaisAgendasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProfissionaisAgendasService.baseUrl + '/' + x;
            });
        })(ProfissionaisAgendasService = Clinica.ProfissionaisAgendasService || (Clinica.ProfissionaisAgendasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisForm = /** @class */ (function (_super) {
            __extends(ProfissionaisForm, _super);
            function ProfissionaisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProfissionaisForm.formKey = 'Clinica.Profissionais';
            return ProfissionaisForm;
        }(Serenity.PrefixedContext));
        Clinica.ProfissionaisForm = ProfissionaisForm;
        [['IdAtivo', function () { return Serenity.BooleanEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['MotivoEncerramento', function () { return Serenity.TextAreaEditor; }], ['Profissional', function () { return Serenity.StringEditor; }], ['Pai', function () { return Serenity.StringEditor; }], ['Mae', function () { return Serenity.StringEditor; }], ['SexoId', function () { return Serenity.LookupEditor; }], ['DataNascimento', function () { return Serenity.DateTimeEditor; }], ['EstadoCivilId', function () { return Serenity.LookupEditor; }], ['CarteiraIdentidade', function () { return Serenity.StringEditor; }], ['Cpf', function () { return Serenity.MaskedEditor; }], ['Cnes', function () { return Serenity.StringEditor; }], ['TipoProfissionalId', function () { return Serenity.LookupEditor; }], ['ConselhoProfissionalId', function () { return Serenity.LookupEditor; }], ['NumeroConselho', function () { return Serenity.StringEditor; }], ['UfConselhoProfissional', function () { return Serenity.StringEditor; }], ['Cbosid', function () { return Serenity.LookupEditor; }], ['ProntuarioSigiloso', function () { return Serenity.BooleanEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['PessoaJuridica', function () { return Serenity.BooleanEditor; }], ['Cnpj', function () { return Serenity.MaskedEditor; }], ['DataInicioContrato', function () { return Serenity.DateTimeEditor; }], ['DataFimContrato', function () { return Serenity.DateTimeEditor; }], ['MotivoEncerramentoContrato', function () { return Serenity.TextAreaEditor; }], ['ContatosList', function () { return Clinica.ContatosEditor; }], ['EnderecosList', function () { return Clinica.EnderecosEditor; }]].forEach(function (x) { return Object.defineProperty(ProfissionaisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisRow;
        (function (ProfissionaisRow) {
            ProfissionaisRow.idProperty = 'ProfissionalId';
            ProfissionaisRow.nameProperty = 'MotivoEncerramento';
            ProfissionaisRow.localTextPrefix = 'Clinica.Profissionais';
            ProfissionaisRow.lookupKey = 'Clinica.Profissionais';
            function getLookup() {
                return Q.getLookup('Clinica.Profissionais');
            }
            ProfissionaisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProfissionaisRow.Fields || (ProfissionaisRow.Fields = {}));
            ['ProfissionalId', 'IdAtivo', 'DataInicio', 'DataFim', 'MotivoEncerramento', 'Profissional', 'Pai', 'Mae', 'SexoId', 'DataNascimento', 'EstadoCivilId', 'CarteiraIdentidade', 'Cpf', 'Cnes', 'TipoProfissionalId', 'ConselhoProfissionalId', 'NumeroConselho', 'UfConselhoProfissional', 'Cbosid', 'ProntuarioSigiloso', 'Observacao', 'PessoaJuridica', 'Cnpj', 'DataInicioContrato', 'DataFimContrato', 'MotivoEncerramentoContrato', 'ContatosList', 'EnderecosList', 'Sexo', 'SexoAbreviatura', 'EstadoCivilDescricao', 'TipoProfissionalDescricao', 'ConselhoProfissionalDescricao', 'CbosidCodigo', 'CbosidCbos'].forEach(function (x) { return Fields[x] = x; });
        })(ProfissionaisRow = Clinica.ProfissionaisRow || (Clinica.ProfissionaisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProfissionaisService;
        (function (ProfissionaisService) {
            ProfissionaisService.baseUrl = 'Clinica/Profissionais';
            var Methods;
            (function (Methods) {
            })(Methods = ProfissionaisService.Methods || (ProfissionaisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProfissionaisService[x] = function (r, s, o) { return Q.serviceRequest(ProfissionaisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProfissionaisService.baseUrl + '/' + x;
            });
        })(ProfissionaisService = Clinica.ProfissionaisService || (Clinica.ProfissionaisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosDetalhadosForm = /** @class */ (function (_super) {
            __extends(ProtocolosDetalhadosForm, _super);
            function ProtocolosDetalhadosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProtocolosDetalhadosForm.formKey = 'Clinica.ProtocolosDetalhados';
            return ProtocolosDetalhadosForm;
        }(Serenity.PrefixedContext));
        Clinica.ProtocolosDetalhadosForm = ProtocolosDetalhadosForm;
        [['ProtocoloId', function () { return Serenity.LookupEditor; }], ['ItemDescricao', function () { return Serenity.TextAreaEditor; }], ['Arquivos', function () { return Serenity.TextAreaEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(ProtocolosDetalhadosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosDetalhadosRow;
        (function (ProtocolosDetalhadosRow) {
            ProtocolosDetalhadosRow.idProperty = 'ProtocoloDetalhadoId';
            ProtocolosDetalhadosRow.nameProperty = 'ItemDescricao';
            ProtocolosDetalhadosRow.localTextPrefix = 'Clinica.ProtocolosDetalhados';
            ProtocolosDetalhadosRow.lookupKey = 'Clinica.ProtocolosDetalhados';
            function getLookup() {
                return Q.getLookup('Clinica.ProtocolosDetalhados');
            }
            ProtocolosDetalhadosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProtocolosDetalhadosRow.Fields || (ProtocolosDetalhadosRow.Fields = {}));
            ['ProtocoloDetalhadoId', 'ProtocoloId', 'ItemDescricao', 'Arquivos', 'Observacao', 'Protocolo', 'ProtocoloTipoProtocoloId', 'ProtocoloConvenioId', 'ProtocoloResponsável', 'ProtocoloAssunto', 'ProtocoloDataEnvio', 'ProtocoloDataRetorno', 'ProtocoloResolvido', 'ProtocoloDataResolvido', 'ProtocoloDecisaoTomada'].forEach(function (x) { return Fields[x] = x; });
        })(ProtocolosDetalhadosRow = Clinica.ProtocolosDetalhadosRow || (Clinica.ProtocolosDetalhadosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosDetalhadosService;
        (function (ProtocolosDetalhadosService) {
            ProtocolosDetalhadosService.baseUrl = 'Clinica/ProtocolosDetalhados';
            var Methods;
            (function (Methods) {
            })(Methods = ProtocolosDetalhadosService.Methods || (ProtocolosDetalhadosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProtocolosDetalhadosService[x] = function (r, s, o) { return Q.serviceRequest(ProtocolosDetalhadosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProtocolosDetalhadosService.baseUrl + '/' + x;
            });
        })(ProtocolosDetalhadosService = Clinica.ProtocolosDetalhadosService || (Clinica.ProtocolosDetalhadosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosEnvolvidosForm = /** @class */ (function (_super) {
            __extends(ProtocolosEnvolvidosForm, _super);
            function ProtocolosEnvolvidosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProtocolosEnvolvidosForm.formKey = 'Clinica.ProtocolosEnvolvidos';
            return ProtocolosEnvolvidosForm;
        }(Serenity.PrefixedContext));
        Clinica.ProtocolosEnvolvidosForm = ProtocolosEnvolvidosForm;
        [['ProtocoloId', function () { return Serenity.LookupEditor; }], ['TipoEnvolvimentoId', function () { return Serenity.LookupEditor; }], ['ProfissionalId', function () { return Serenity.LookupEditor; }], ['PacienteId', function () { return Serenity.LookupEditor; }], ['FuncionarioId', function () { return Serenity.IntegerEditor; }], ['FornecedorId', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProtocolosEnvolvidosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosEnvolvidosRow;
        (function (ProtocolosEnvolvidosRow) {
            ProtocolosEnvolvidosRow.idProperty = 'ProtocoloEnvolvidoId';
            ProtocolosEnvolvidosRow.localTextPrefix = 'Clinica.ProtocolosEnvolvidos';
            ProtocolosEnvolvidosRow.lookupKey = 'Clinica.ProtocolosEnvolvidos';
            function getLookup() {
                return Q.getLookup('Clinica.ProtocolosEnvolvidos');
            }
            ProtocolosEnvolvidosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProtocolosEnvolvidosRow.Fields || (ProtocolosEnvolvidosRow.Fields = {}));
            ['ProtocoloEnvolvidoId', 'ProtocoloId', 'TipoEnvolvimentoId', 'ProfissionalId', 'PacienteId', 'FuncionarioId', 'FornecedorId', 'Protocolo', 'ProtocoloTipoProtocoloId', 'ProtocoloConvenioId', 'ProtocoloResponsável', 'ProtocoloAssunto', 'ProtocoloDataEnvio', 'ProtocoloDataRetorno', 'ProtocoloResolvido', 'ProtocoloDataResolvido', 'ProtocoloDecisaoTomada', 'TipoEnvolvimentoDescricao', 'ProfissionalIdAtivo', 'ProfissionalDataInicio', 'ProfissionalDataFim', 'ProfissionalMotivoEncerramento', 'Profissional', 'ProfissionalPai', 'ProfissionalMae', 'ProfissionalSexoId', 'ProfissionalDataNascimento', 'ProfissionalEstadoCivilId', 'ProfissionalCarteiraIdentidade', 'ProfissionalCpf', 'ProfissionalCnes', 'ProfissionalTipoProfissionalId', 'ProfissionalConselhoProfissionalId', 'ProfissionalNumeroConselho', 'ProfissionalUfConselhoProfissional', 'ProfissionalCbosid', 'ProfissionalProntuarioSigiloso', 'ProfissionalObservacao', 'ProfissionalPessoaJuridica', 'ProfissionalCnpj', 'ProfissionalDataInicioContrato', 'ProfissionalDataFimContrato', 'ProfissionalMotivoEncerramentoContrato', 'PacienteDataCadastro', 'PacienteDataUltimaAtualizacao', 'PacienteMatricula', 'PacienteStatusId', 'Paciente', 'PacienteEspecial', 'PacientePai', 'PacienteMae', 'PacienteSexoId', 'PacienteDataNascimento', 'PacienteCns', 'PacienteCarteiraIdentidade', 'PacienteCpf', 'PacienteObservacao', 'PacienteDisturbiosAssociados', 'PacienteResponsavel', 'PacienteNotaFiscalTerceiro', 'PacienteNotaFiscalNome', 'PacienteNotaFiscalCpf', 'PacienteNotaFiscalCnpj', 'PacienteNotaFiscalEndereco', 'PacienteNotaFiscalNumero', 'PacienteNotaFiscalBairro', 'PacienteNotaFiscalCidade', 'PacienteNotaFiscalEstadoId', 'PacienteNotaFiscalEmail', 'PacienteFoto', 'PacienteDataFoto', 'PacientePacienteIdControlMedic', 'PacientePacienteIdGestorMedico'].forEach(function (x) { return Fields[x] = x; });
        })(ProtocolosEnvolvidosRow = Clinica.ProtocolosEnvolvidosRow || (Clinica.ProtocolosEnvolvidosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosEnvolvidosService;
        (function (ProtocolosEnvolvidosService) {
            ProtocolosEnvolvidosService.baseUrl = 'Clinica/ProtocolosEnvolvidos';
            var Methods;
            (function (Methods) {
            })(Methods = ProtocolosEnvolvidosService.Methods || (ProtocolosEnvolvidosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProtocolosEnvolvidosService[x] = function (r, s, o) { return Q.serviceRequest(ProtocolosEnvolvidosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProtocolosEnvolvidosService.baseUrl + '/' + x;
            });
        })(ProtocolosEnvolvidosService = Clinica.ProtocolosEnvolvidosService || (Clinica.ProtocolosEnvolvidosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosForm = /** @class */ (function (_super) {
            __extends(ProtocolosForm, _super);
            function ProtocolosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProtocolosForm.formKey = 'Clinica.Protocolos';
            return ProtocolosForm;
        }(Serenity.PrefixedContext));
        Clinica.ProtocolosForm = ProtocolosForm;
        [['Protocolo', function () { return Serenity.TextAreaEditor; }], ['TipoProtocoloId', function () { return Serenity.LookupEditor; }], ['ConvenioId', function () { return Serenity.IntegerEditor; }], ['Responsável', function () { return Serenity.StringEditor; }], ['Assunto', function () { return Serenity.TextAreaEditor; }], ['DataEnvio', function () { return Serenity.DateTimeEditor; }], ['DataRetorno', function () { return Serenity.DateTimeEditor; }], ['Resolvido', function () { return Serenity.BooleanEditor; }], ['DataResolvido', function () { return Serenity.DateTimeEditor; }], ['DecisaoTomada', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(ProtocolosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosRow;
        (function (ProtocolosRow) {
            ProtocolosRow.idProperty = 'ProtocoloId';
            ProtocolosRow.nameProperty = 'Protocolo';
            ProtocolosRow.localTextPrefix = 'Clinica.Protocolos';
            ProtocolosRow.lookupKey = 'Clinica.Protocolos';
            function getLookup() {
                return Q.getLookup('Clinica.Protocolos');
            }
            ProtocolosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProtocolosRow.Fields || (ProtocolosRow.Fields = {}));
            ['ProtocoloId', 'Protocolo', 'TipoProtocoloId', 'ConvenioId', 'Responsável', 'Assunto', 'DataEnvio', 'DataRetorno', 'Resolvido', 'DataResolvido', 'DecisaoTomada', 'TipoProtocoloDescricao'].forEach(function (x) { return Fields[x] = x; });
        })(ProtocolosRow = Clinica.ProtocolosRow || (Clinica.ProtocolosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ProtocolosService;
        (function (ProtocolosService) {
            ProtocolosService.baseUrl = 'Clinica/Protocolos';
            var Methods;
            (function (Methods) {
            })(Methods = ProtocolosService.Methods || (ProtocolosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProtocolosService[x] = function (r, s, o) { return Q.serviceRequest(ProtocolosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProtocolosService.baseUrl + '/' + x;
            });
        })(ProtocolosService = Clinica.ProtocolosService || (Clinica.ProtocolosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SessoesForm = /** @class */ (function (_super) {
            __extends(SessoesForm, _super);
            function SessoesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SessoesForm.formKey = 'Clinica.Sessoes';
            return SessoesForm;
        }(Serenity.PrefixedContext));
        Clinica.SessoesForm = SessoesForm;
        [['IdPrimeiraSessao', function () { return Serenity.BooleanEditor; }], ['OrdemSessao', function () { return Serenity.IntegerEditor; }], ['GuiaId', function () { return Serenity.IntegerEditor; }], ['AgendaItemId', function () { return Serenity.LookupEditor; }], ['LoteId', function () { return Serenity.LookupEditor; }], ['StatusSessaoId', function () { return Serenity.LookupEditor; }], ['ProfissionalIdExecutante', function () { return Serenity.IntegerEditor; }], ['ValorId', function () { return Serenity.LookupEditor; }], ['TipoItemId', function () { return Serenity.IntegerEditor; }], ['TipoTabelaId', function () { return Serenity.IntegerEditor; }], ['ProcedimentoId', function () { return Serenity.IntegerEditor; }], ['ConvenioId', function () { return Serenity.IntegerEditor; }], ['CodigoProcedimento', function () { return Serenity.StringEditor; }], ['Procedimento', function () { return Serenity.TextAreaEditor; }], ['ValorSessao', function () { return Serenity.DecimalEditor; }], ['QuantidadeSessao', function () { return Serenity.IntegerEditor; }], ['ReducaoAcrescimo', function () { return Serenity.DecimalEditor; }], ['DataSessao', function () { return Serenity.DateTimeEditor; }], ['HoraInicioSessao', function () { return Serenity.StringEditor; }], ['HoraFimSessao', function () { return Serenity.StringEditor; }], ['ValorPago', function () { return Serenity.DecimalEditor; }], ['DataPago', function () { return Serenity.DateTimeEditor; }], ['ValorGlosado', function () { return Serenity.DecimalEditor; }], ['CodigoGlosa', function () { return Serenity.StringEditor; }], ['MotivoGlosa', function () { return Serenity.TextAreaEditor; }], ['StatusGlosaId', function () { return Serenity.IntegerEditor; }], ['ProtocoloRecurso', function () { return Serenity.StringEditor; }], ['DataRecurso', function () { return Serenity.DateTimeEditor; }], ['Recurso', function () { return Serenity.TextAreaEditor; }], ['DataRespostaRecurso', function () { return Serenity.DateTimeEditor; }], ['SituacaoRespostaRecurso', function () { return Serenity.StringEditor; }], ['RespostaRecurso', function () { return Serenity.TextAreaEditor; }], ['ValorRecursoPago', function () { return Serenity.DecimalEditor; }], ['ProtocoloUltimoRecurso', function () { return Serenity.StringEditor; }], ['DataUltimoRecurso', function () { return Serenity.DateTimeEditor; }], ['UltimoRecurso', function () { return Serenity.TextAreaEditor; }], ['DataRespostaUltimoRecurso', function () { return Serenity.DateTimeEditor; }], ['SituacaoRespostaUltimoRecurso', function () { return Serenity.StringEditor; }], ['RespostaUltimoRecurso', function () { return Serenity.TextAreaEditor; }], ['ValorUltimoRecursoPago', function () { return Serenity.DecimalEditor; }], ['QuantidadeRecursos', function () { return Serenity.IntegerEditor; }], ['Observacoes', function () { return Serenity.TextAreaEditor; }], ['SequenciaItens', function () { return Serenity.IntegerEditor; }], ['Sequencia', function () { return Serenity.IntegerEditor; }], ['DemonstrativoItemId', function () { return Serenity.IntegerEditor; }], ['DemonstrativoItemIdGlosa', function () { return Serenity.IntegerEditor; }], ['IdAuditada', function () { return Serenity.BooleanEditor; }], ['DataAuditoria', function () { return Serenity.DateTimeEditor; }], ['IdAuditoriaAprovada', function () { return Serenity.BooleanEditor; }], ['ConclusaoAuditoria', function () { return Serenity.TextAreaEditor; }], ['IdPagoProfissional', function () { return Serenity.BooleanEditor; }], ['ValorFixo', function () { return Serenity.BooleanEditor; }], ['PorcentagemAplicadaProfissional', function () { return Serenity.DecimalEditor; }], ['ValorPagoProfissional', function () { return Serenity.DecimalEditor; }], ['DataPagoProfissional', function () { return Serenity.DateTimeEditor; }], ['FolhaPagamentoProfissionalId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(SessoesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SessoesRow;
        (function (SessoesRow) {
            SessoesRow.idProperty = 'SessaoId';
            SessoesRow.nameProperty = 'CodigoProcedimento';
            SessoesRow.localTextPrefix = 'Clinica.Sessoes';
            SessoesRow.lookupKey = 'Clinica.Sessoes';
            function getLookup() {
                return Q.getLookup('Clinica.Sessoes');
            }
            SessoesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SessoesRow.Fields || (SessoesRow.Fields = {}));
            ['SessaoId', 'IdPrimeiraSessao', 'OrdemSessao', 'GuiaId', 'AgendaItemId', 'LoteId', 'StatusSessaoId', 'ProfissionalIdExecutante', 'ValorId', 'TipoItemId', 'TipoTabelaId', 'ProcedimentoId', 'ConvenioId', 'CodigoProcedimento', 'Procedimento', 'ValorSessao', 'QuantidadeSessao', 'ReducaoAcrescimo', 'DataSessao', 'HoraInicioSessao', 'HoraFimSessao', 'ValorPago', 'DataPago', 'ValorGlosado', 'CodigoGlosa', 'MotivoGlosa', 'StatusGlosaId', 'ProtocoloRecurso', 'DataRecurso', 'Recurso', 'DataRespostaRecurso', 'SituacaoRespostaRecurso', 'RespostaRecurso', 'ValorRecursoPago', 'ProtocoloUltimoRecurso', 'DataUltimoRecurso', 'UltimoRecurso', 'DataRespostaUltimoRecurso', 'SituacaoRespostaUltimoRecurso', 'RespostaUltimoRecurso', 'ValorUltimoRecursoPago', 'QuantidadeRecursos', 'Observacoes', 'SequenciaItens', 'Sequencia', 'DemonstrativoItemId', 'DemonstrativoItemIdGlosa', 'IdAuditada', 'DataAuditoria', 'IdAuditoriaAprovada', 'ConclusaoAuditoria', 'IdPagoProfissional', 'ValorFixo', 'PorcentagemAplicadaProfissional', 'ValorPagoProfissional', 'DataPagoProfissional', 'FolhaPagamentoProfissionalId', 'AgendaItemTipoGuiaId', 'AgendaItemTipoConsultaId', 'AgendaItemGuia', 'AgendaItemGuiaOperador', 'AgendaItemCarteirinha', 'AgendaItemNomePaciente', 'AgendaItemAutorizacaoId', 'AgendaItemNumeroAutorizacao', 'AgendaItemIdAuditada', 'AgendaItemDataAuditoria', 'AgendaItemIdAuditoriaAprovada', 'AgendaItemConclusaoAuditoria', 'AgendaItemProfissionalIdSolicitante', 'AgendaItemProfissionalIdExecutante', 'LoteStatusLoteId', 'LoteMovimentacao', 'LoteConvenioId', 'LoteDataEmissaoLote', 'Lote', 'LoteProtocolo', 'LoteLoteConvenio', 'LoteValorLote', 'LoteCapaLote', 'LoteExtrato', 'LoteEnviadoConvenioId', 'LoteDataEnviadoConvenio', 'LoteArquivoFisicoEnviadoId', 'LoteCartaSimplesId', 'LoteSedex', 'LoteArid', 'LoteDataRetornoAr', 'LoteValorCorreios', 'LoteArquivos', 'LoteObservacao', 'LoteNfseid', 'LoteNotaFiscal', 'LoteValorNotaFiscal', 'LoteDataEmissaoNotaFiscal', 'LoteEmailNotaFiscal', 'LoteNotaFiscalImpressaId', 'LoteNotaFiscalRecebida', 'LoteDataNotaFiscalImpressa', 'StatusSessaoStatus', 'ValorTipoItemId', 'ValorTipoTabelaId', 'ValorProcedimentoId', 'ValorConvenioId', 'ValorValorCh', 'ValorValorSessao', 'ValorDataInicio', 'ValorDataFim', 'ValorObservacao', 'ValorDataCadastrada', 'ValorCodigoRegistrado', 'ValorRequerAutorizacao', 'ValorTipoAutorizacaoId', 'FolhaPagamentoProfissionalProfissionalId', 'FolhaPagamentoProfissionalNotaFiscalProfissional', 'FolhaPagamentoProfissionalArquivos', 'FolhaPagamentoProfissionalMovimento', 'FolhaPagamentoProfissionalDataPagamento', 'FolhaPagamentoProfissionalValorPago', 'FolhaPagamentoProfissionalDataImpressao'].forEach(function (x) { return Fields[x] = x; });
        })(SessoesRow = Clinica.SessoesRow || (Clinica.SessoesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SessoesService;
        (function (SessoesService) {
            SessoesService.baseUrl = 'Clinica/Sessoes';
            var Methods;
            (function (Methods) {
            })(Methods = SessoesService.Methods || (SessoesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SessoesService[x] = function (r, s, o) { return Q.serviceRequest(SessoesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SessoesService.baseUrl + '/' + x;
            });
        })(SessoesService = Clinica.SessoesService || (Clinica.SessoesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoForm = /** @class */ (function (_super) {
            __extends(SexoForm, _super);
            function SexoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SexoForm.formKey = 'Clinica.Sexo';
            return SexoForm;
        }(Serenity.PrefixedContext));
        Clinica.SexoForm = SexoForm;
        [['Sexo', function () { return Serenity.StringEditor; }], ['Abreviatura', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SexoForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoRow;
        (function (SexoRow) {
            SexoRow.idProperty = 'SexoId';
            SexoRow.nameProperty = 'Sexo';
            SexoRow.localTextPrefix = 'Clinica.Sexo';
            SexoRow.lookupKey = 'Clinica.Sexo';
            function getLookup() {
                return Q.getLookup('Clinica.Sexo');
            }
            SexoRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SexoRow.Fields || (SexoRow.Fields = {}));
            ['SexoId', 'Sexo', 'Abreviatura'].forEach(function (x) { return Fields[x] = x; });
        })(SexoRow = Clinica.SexoRow || (Clinica.SexoRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SexoService;
        (function (SexoService) {
            SexoService.baseUrl = 'Clinica/Sexo';
            var Methods;
            (function (Methods) {
            })(Methods = SexoService.Methods || (SexoService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SexoService[x] = function (r, s, o) { return Q.serviceRequest(SexoService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SexoService.baseUrl + '/' + x;
            });
        })(SexoService = Clinica.SexoService || (Clinica.SexoService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusDemonstrativosForm = /** @class */ (function (_super) {
            __extends(StatusDemonstrativosForm, _super);
            function StatusDemonstrativosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StatusDemonstrativosForm.formKey = 'Clinica.StatusDemonstrativos';
            return StatusDemonstrativosForm;
        }(Serenity.PrefixedContext));
        Clinica.StatusDemonstrativosForm = StatusDemonstrativosForm;
        [['Status', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(StatusDemonstrativosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusDemonstrativosRow;
        (function (StatusDemonstrativosRow) {
            StatusDemonstrativosRow.idProperty = 'StatusDemonstrativoId';
            StatusDemonstrativosRow.nameProperty = 'Status';
            StatusDemonstrativosRow.localTextPrefix = 'Clinica.StatusDemonstrativos';
            StatusDemonstrativosRow.lookupKey = 'Clinica.StatusDemonstrativos';
            function getLookup() {
                return Q.getLookup('Clinica.StatusDemonstrativos');
            }
            StatusDemonstrativosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = StatusDemonstrativosRow.Fields || (StatusDemonstrativosRow.Fields = {}));
            ['StatusDemonstrativoId', 'Status'].forEach(function (x) { return Fields[x] = x; });
        })(StatusDemonstrativosRow = Clinica.StatusDemonstrativosRow || (Clinica.StatusDemonstrativosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusDemonstrativosService;
        (function (StatusDemonstrativosService) {
            StatusDemonstrativosService.baseUrl = 'Clinica/StatusDemonstrativos';
            var Methods;
            (function (Methods) {
            })(Methods = StatusDemonstrativosService.Methods || (StatusDemonstrativosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                StatusDemonstrativosService[x] = function (r, s, o) { return Q.serviceRequest(StatusDemonstrativosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = StatusDemonstrativosService.baseUrl + '/' + x;
            });
        })(StatusDemonstrativosService = Clinica.StatusDemonstrativosService || (Clinica.StatusDemonstrativosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusForm = /** @class */ (function (_super) {
            __extends(StatusForm, _super);
            function StatusForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StatusForm.formKey = 'Clinica.Status';
            return StatusForm;
        }(Serenity.PrefixedContext));
        Clinica.StatusForm = StatusForm;
        [['Status', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(StatusForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusLotesForm = /** @class */ (function (_super) {
            __extends(StatusLotesForm, _super);
            function StatusLotesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StatusLotesForm.formKey = 'Clinica.StatusLotes';
            return StatusLotesForm;
        }(Serenity.PrefixedContext));
        Clinica.StatusLotesForm = StatusLotesForm;
        [['Status', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(StatusLotesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusLotesRow;
        (function (StatusLotesRow) {
            StatusLotesRow.idProperty = 'StatusLoteId';
            StatusLotesRow.nameProperty = 'Status';
            StatusLotesRow.localTextPrefix = 'Clinica.StatusLotes';
            StatusLotesRow.lookupKey = 'Clinica.StatusLotes';
            function getLookup() {
                return Q.getLookup('Clinica.StatusLotes');
            }
            StatusLotesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = StatusLotesRow.Fields || (StatusLotesRow.Fields = {}));
            ['StatusLoteId', 'Status'].forEach(function (x) { return Fields[x] = x; });
        })(StatusLotesRow = Clinica.StatusLotesRow || (Clinica.StatusLotesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusLotesService;
        (function (StatusLotesService) {
            StatusLotesService.baseUrl = 'Clinica/StatusLotes';
            var Methods;
            (function (Methods) {
            })(Methods = StatusLotesService.Methods || (StatusLotesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                StatusLotesService[x] = function (r, s, o) { return Q.serviceRequest(StatusLotesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = StatusLotesService.baseUrl + '/' + x;
            });
        })(StatusLotesService = Clinica.StatusLotesService || (Clinica.StatusLotesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusRow;
        (function (StatusRow) {
            StatusRow.idProperty = 'StatusId';
            StatusRow.nameProperty = 'Status';
            StatusRow.localTextPrefix = 'Clinica.Status';
            StatusRow.lookupKey = 'Clinica.Status';
            function getLookup() {
                return Q.getLookup('Clinica.Status');
            }
            StatusRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = StatusRow.Fields || (StatusRow.Fields = {}));
            ['StatusId', 'Status'].forEach(function (x) { return Fields[x] = x; });
        })(StatusRow = Clinica.StatusRow || (Clinica.StatusRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusService;
        (function (StatusService) {
            StatusService.baseUrl = 'Clinica/Status';
            var Methods;
            (function (Methods) {
            })(Methods = StatusService.Methods || (StatusService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                StatusService[x] = function (r, s, o) { return Q.serviceRequest(StatusService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = StatusService.baseUrl + '/' + x;
            });
        })(StatusService = Clinica.StatusService || (Clinica.StatusService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusSessoesForm = /** @class */ (function (_super) {
            __extends(StatusSessoesForm, _super);
            function StatusSessoesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StatusSessoesForm.formKey = 'Clinica.StatusSessoes';
            return StatusSessoesForm;
        }(Serenity.PrefixedContext));
        Clinica.StatusSessoesForm = StatusSessoesForm;
        [['Status', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(StatusSessoesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusSessoesRow;
        (function (StatusSessoesRow) {
            StatusSessoesRow.idProperty = 'StatusSessaoId';
            StatusSessoesRow.nameProperty = 'Status';
            StatusSessoesRow.localTextPrefix = 'Clinica.StatusSessoes';
            StatusSessoesRow.lookupKey = 'Clinica.StatusSessoes';
            function getLookup() {
                return Q.getLookup('Clinica.StatusSessoes');
            }
            StatusSessoesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = StatusSessoesRow.Fields || (StatusSessoesRow.Fields = {}));
            ['StatusSessaoId', 'Status'].forEach(function (x) { return Fields[x] = x; });
        })(StatusSessoesRow = Clinica.StatusSessoesRow || (Clinica.StatusSessoesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var StatusSessoesService;
        (function (StatusSessoesService) {
            StatusSessoesService.baseUrl = 'Clinica/StatusSessoes';
            var Methods;
            (function (Methods) {
            })(Methods = StatusSessoesService.Methods || (StatusSessoesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                StatusSessoesService[x] = function (r, s, o) { return Q.serviceRequest(StatusSessoesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = StatusSessoesService.baseUrl + '/' + x;
            });
        })(StatusSessoesService = Clinica.StatusSessoesService || (Clinica.StatusSessoesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SubConveniosForm = /** @class */ (function (_super) {
            __extends(SubConveniosForm, _super);
            function SubConveniosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SubConveniosForm.formKey = 'Clinica.SubConvenios';
            return SubConveniosForm;
        }(Serenity.PrefixedContext));
        Clinica.SubConveniosForm = SubConveniosForm;
        [['ConvenioId', function () { return Serenity.LookupEditor; }], ['Descricao', function () { return Serenity.StringEditor; }], ['Nome', function () { return Serenity.StringEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['Ativo', function () { return Serenity.BooleanEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['Participativo', function () { return Serenity.BooleanEditor; }], ['PorcentagemParticipativo', function () { return Serenity.DecimalEditor; }], ['AutorizacaoPrevia', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(SubConveniosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SubConveniosRow;
        (function (SubConveniosRow) {
            SubConveniosRow.idProperty = 'SubConvenioId';
            SubConveniosRow.nameProperty = 'Descricao';
            SubConveniosRow.localTextPrefix = 'Clinica.SubConvenios';
            SubConveniosRow.lookupKey = 'Clinica.SubConvenios';
            function getLookup() {
                return Q.getLookup('Clinica.SubConvenios');
            }
            SubConveniosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SubConveniosRow.Fields || (SubConveniosRow.Fields = {}));
            ['SubConvenioId', 'ConvenioId', 'Descricao', 'Nome', 'DataInicio', 'Ativo', 'DataFim', 'Participativo', 'PorcentagemParticipativo', 'AutorizacaoPrevia', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa'].forEach(function (x) { return Fields[x] = x; });
        })(SubConveniosRow = Clinica.SubConveniosRow || (Clinica.SubConveniosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var SubConveniosService;
        (function (SubConveniosService) {
            SubConveniosService.baseUrl = 'Clinica/SubConvenios';
            var Methods;
            (function (Methods) {
            })(Methods = SubConveniosService.Methods || (SubConveniosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SubConveniosService[x] = function (r, s, o) { return Q.serviceRequest(SubConveniosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SubConveniosService.baseUrl + '/' + x;
            });
        })(SubConveniosService = Clinica.SubConveniosService || (Clinica.SubConveniosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TabelasForm = /** @class */ (function (_super) {
            __extends(TabelasForm, _super);
            function TabelasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TabelasForm.formKey = 'Clinica.Tabelas';
            return TabelasForm;
        }(Serenity.PrefixedContext));
        Clinica.TabelasForm = TabelasForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TabelasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TabelasRow;
        (function (TabelasRow) {
            TabelasRow.idProperty = 'TabelaId';
            TabelasRow.nameProperty = 'Descricao';
            TabelasRow.localTextPrefix = 'Clinica.Tabelas';
            TabelasRow.lookupKey = 'Clinica.Tabelas';
            function getLookup() {
                return Q.getLookup('Clinica.Tabelas');
            }
            TabelasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TabelasRow.Fields || (TabelasRow.Fields = {}));
            ['TabelaId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(TabelasRow = Clinica.TabelasRow || (Clinica.TabelasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TabelasService;
        (function (TabelasService) {
            TabelasService.baseUrl = 'Clinica/Tabelas';
            var Methods;
            (function (Methods) {
            })(Methods = TabelasService.Methods || (TabelasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TabelasService[x] = function (r, s, o) { return Q.serviceRequest(TabelasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TabelasService.baseUrl + '/' + x;
            });
        })(TabelasService = Clinica.TabelasService || (Clinica.TabelasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TipoEspecialidadeForm = /** @class */ (function (_super) {
            __extends(TipoEspecialidadeForm, _super);
            function TipoEspecialidadeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TipoEspecialidadeForm.formKey = 'Clinica.TipoEspecialidade';
            return TipoEspecialidadeForm;
        }(Serenity.PrefixedContext));
        Clinica.TipoEspecialidadeForm = TipoEspecialidadeForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TipoEspecialidadeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TipoEspecialidadeRow;
        (function (TipoEspecialidadeRow) {
            TipoEspecialidadeRow.idProperty = 'TipoEspecialidadeId';
            TipoEspecialidadeRow.nameProperty = 'Descricao';
            TipoEspecialidadeRow.localTextPrefix = 'Clinica.TipoEspecialidade';
            TipoEspecialidadeRow.lookupKey = 'Clinica.TipoEspecialidade';
            function getLookup() {
                return Q.getLookup('Clinica.TipoEspecialidade');
            }
            TipoEspecialidadeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TipoEspecialidadeRow.Fields || (TipoEspecialidadeRow.Fields = {}));
            ['TipoEspecialidadeId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(TipoEspecialidadeRow = Clinica.TipoEspecialidadeRow || (Clinica.TipoEspecialidadeRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TipoEspecialidadeService;
        (function (TipoEspecialidadeService) {
            TipoEspecialidadeService.baseUrl = 'Clinica/TipoEspecialidade';
            var Methods;
            (function (Methods) {
            })(Methods = TipoEspecialidadeService.Methods || (TipoEspecialidadeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TipoEspecialidadeService[x] = function (r, s, o) { return Q.serviceRequest(TipoEspecialidadeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TipoEspecialidadeService.baseUrl + '/' + x;
            });
        })(TipoEspecialidadeService = Clinica.TipoEspecialidadeService || (Clinica.TipoEspecialidadeService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposAutorizacoesForm = /** @class */ (function (_super) {
            __extends(TiposAutorizacoesForm, _super);
            function TiposAutorizacoesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposAutorizacoesForm.formKey = 'Clinica.TiposAutorizacoes';
            return TiposAutorizacoesForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposAutorizacoesForm = TiposAutorizacoesForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposAutorizacoesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposAutorizacoesRow;
        (function (TiposAutorizacoesRow) {
            TiposAutorizacoesRow.idProperty = 'TipoAutorizacaoId';
            TiposAutorizacoesRow.nameProperty = 'Descricao';
            TiposAutorizacoesRow.localTextPrefix = 'Clinica.TiposAutorizacoes';
            TiposAutorizacoesRow.lookupKey = 'Clinica.TiposAutorizacoes';
            function getLookup() {
                return Q.getLookup('Clinica.TiposAutorizacoes');
            }
            TiposAutorizacoesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposAutorizacoesRow.Fields || (TiposAutorizacoesRow.Fields = {}));
            ['TipoAutorizacaoId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(TiposAutorizacoesRow = Clinica.TiposAutorizacoesRow || (Clinica.TiposAutorizacoesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposAutorizacoesService;
        (function (TiposAutorizacoesService) {
            TiposAutorizacoesService.baseUrl = 'Clinica/TiposAutorizacoes';
            var Methods;
            (function (Methods) {
            })(Methods = TiposAutorizacoesService.Methods || (TiposAutorizacoesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposAutorizacoesService[x] = function (r, s, o) { return Q.serviceRequest(TiposAutorizacoesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposAutorizacoesService.baseUrl + '/' + x;
            });
        })(TiposAutorizacoesService = Clinica.TiposAutorizacoesService || (Clinica.TiposAutorizacoesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposConsultasForm = /** @class */ (function (_super) {
            __extends(TiposConsultasForm, _super);
            function TiposConsultasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposConsultasForm.formKey = 'Clinica.TiposConsultas';
            return TiposConsultasForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposConsultasForm = TiposConsultasForm;
        [['Descricao', function () { return Serenity.StringEditor; }], ['Ativo', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(TiposConsultasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposConsultasRow;
        (function (TiposConsultasRow) {
            TiposConsultasRow.idProperty = 'TipoConsultaId';
            TiposConsultasRow.nameProperty = 'Descricao';
            TiposConsultasRow.localTextPrefix = 'Clinica.TiposConsultas';
            TiposConsultasRow.lookupKey = 'Clinica.TiposConsultas';
            function getLookup() {
                return Q.getLookup('Clinica.TiposConsultas');
            }
            TiposConsultasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposConsultasRow.Fields || (TiposConsultasRow.Fields = {}));
            ['TipoConsultaId', 'Descricao', 'Ativo'].forEach(function (x) { return Fields[x] = x; });
        })(TiposConsultasRow = Clinica.TiposConsultasRow || (Clinica.TiposConsultasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposConsultasService;
        (function (TiposConsultasService) {
            TiposConsultasService.baseUrl = 'Clinica/TiposConsultas';
            var Methods;
            (function (Methods) {
            })(Methods = TiposConsultasService.Methods || (TiposConsultasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposConsultasService[x] = function (r, s, o) { return Q.serviceRequest(TiposConsultasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposConsultasService.baseUrl + '/' + x;
            });
        })(TiposConsultasService = Clinica.TiposConsultasService || (Clinica.TiposConsultasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosForm = /** @class */ (function (_super) {
            __extends(TiposContatosForm, _super);
            function TiposContatosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposContatosForm.formKey = 'Clinica.TiposContatos';
            return TiposContatosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposContatosForm = TiposContatosForm;
        [['TipoContato', function () { return Serenity.StringEditor; }], ['PessoaFisica', function () { return Serenity.BooleanEditor; }], ['Ordem', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(TiposContatosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosRow;
        (function (TiposContatosRow) {
            TiposContatosRow.idProperty = 'TipoContatoId';
            TiposContatosRow.nameProperty = 'TipoContato';
            TiposContatosRow.localTextPrefix = 'Clinica.TiposContatos';
            TiposContatosRow.lookupKey = 'Clinica.TiposContatos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposContatos');
            }
            TiposContatosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposContatosRow.Fields || (TiposContatosRow.Fields = {}));
            ['TipoContatoId', 'TipoContato', 'PessoaFisica', 'Ordem'].forEach(function (x) { return Fields[x] = x; });
        })(TiposContatosRow = Clinica.TiposContatosRow || (Clinica.TiposContatosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposContatosService;
        (function (TiposContatosService) {
            TiposContatosService.baseUrl = 'Clinica/TiposContatos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposContatosService.Methods || (TiposContatosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposContatosService[x] = function (r, s, o) { return Q.serviceRequest(TiposContatosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposContatosService.baseUrl + '/' + x;
            });
        })(TiposContatosService = Clinica.TiposContatosService || (Clinica.TiposContatosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosForm = /** @class */ (function (_super) {
            __extends(TiposEnderecosForm, _super);
            function TiposEnderecosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposEnderecosForm.formKey = 'Clinica.TiposEnderecos';
            return TiposEnderecosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposEnderecosForm = TiposEnderecosForm;
        [['TipoEndereco', function () { return Serenity.StringEditor; }], ['PessoaFisica', function () { return Serenity.BooleanEditor; }], ['Ordem', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(TiposEnderecosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosRow;
        (function (TiposEnderecosRow) {
            TiposEnderecosRow.idProperty = 'TipoEnderecoId';
            TiposEnderecosRow.nameProperty = 'TipoEndereco';
            TiposEnderecosRow.localTextPrefix = 'Clinica.TiposEnderecos';
            TiposEnderecosRow.lookupKey = 'Clinica.TiposEnderecos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposEnderecos');
            }
            TiposEnderecosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposEnderecosRow.Fields || (TiposEnderecosRow.Fields = {}));
            ['TipoEnderecoId', 'TipoEndereco', 'PessoaFisica', 'Ordem'].forEach(function (x) { return Fields[x] = x; });
        })(TiposEnderecosRow = Clinica.TiposEnderecosRow || (Clinica.TiposEnderecosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnderecosService;
        (function (TiposEnderecosService) {
            TiposEnderecosService.baseUrl = 'Clinica/TiposEnderecos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposEnderecosService.Methods || (TiposEnderecosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposEnderecosService[x] = function (r, s, o) { return Q.serviceRequest(TiposEnderecosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposEnderecosService.baseUrl + '/' + x;
            });
        })(TiposEnderecosService = Clinica.TiposEnderecosService || (Clinica.TiposEnderecosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnvolvimentosForm = /** @class */ (function (_super) {
            __extends(TiposEnvolvimentosForm, _super);
            function TiposEnvolvimentosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposEnvolvimentosForm.formKey = 'Clinica.TiposEnvolvimentos';
            return TiposEnvolvimentosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposEnvolvimentosForm = TiposEnvolvimentosForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposEnvolvimentosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnvolvimentosRow;
        (function (TiposEnvolvimentosRow) {
            TiposEnvolvimentosRow.idProperty = 'TipoEnvolvimentoId';
            TiposEnvolvimentosRow.nameProperty = 'Descricao';
            TiposEnvolvimentosRow.localTextPrefix = 'Clinica.TiposEnvolvimentos';
            TiposEnvolvimentosRow.lookupKey = 'Clinica.TiposEnvolvimentos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposEnvolvimentos');
            }
            TiposEnvolvimentosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposEnvolvimentosRow.Fields || (TiposEnvolvimentosRow.Fields = {}));
            ['TipoEnvolvimentoId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(TiposEnvolvimentosRow = Clinica.TiposEnvolvimentosRow || (Clinica.TiposEnvolvimentosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposEnvolvimentosService;
        (function (TiposEnvolvimentosService) {
            TiposEnvolvimentosService.baseUrl = 'Clinica/TiposEnvolvimentos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposEnvolvimentosService.Methods || (TiposEnvolvimentosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposEnvolvimentosService[x] = function (r, s, o) { return Q.serviceRequest(TiposEnvolvimentosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposEnvolvimentosService.baseUrl + '/' + x;
            });
        })(TiposEnvolvimentosService = Clinica.TiposEnvolvimentosService || (Clinica.TiposEnvolvimentosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposFeriadosForm = /** @class */ (function (_super) {
            __extends(TiposFeriadosForm, _super);
            function TiposFeriadosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposFeriadosForm.formKey = 'Clinica.TiposFeriados';
            return TiposFeriadosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposFeriadosForm = TiposFeriadosForm;
        [['TipoFeriado', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposFeriadosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposFeriadosRow;
        (function (TiposFeriadosRow) {
            TiposFeriadosRow.idProperty = 'TipoFeriadoId';
            TiposFeriadosRow.nameProperty = 'TipoFeriado';
            TiposFeriadosRow.localTextPrefix = 'Clinica.TiposFeriados';
            TiposFeriadosRow.lookupKey = 'Clinica.TiposFeriados';
            function getLookup() {
                return Q.getLookup('Clinica.TiposFeriados');
            }
            TiposFeriadosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposFeriadosRow.Fields || (TiposFeriadosRow.Fields = {}));
            ['TipoFeriadoId', 'TipoFeriado'].forEach(function (x) { return Fields[x] = x; });
        })(TiposFeriadosRow = Clinica.TiposFeriadosRow || (Clinica.TiposFeriadosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposFeriadosService;
        (function (TiposFeriadosService) {
            TiposFeriadosService.baseUrl = 'Clinica/TiposFeriados';
            var Methods;
            (function (Methods) {
            })(Methods = TiposFeriadosService.Methods || (TiposFeriadosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposFeriadosService[x] = function (r, s, o) { return Q.serviceRequest(TiposFeriadosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposFeriadosService.baseUrl + '/' + x;
            });
        })(TiposFeriadosService = Clinica.TiposFeriadosService || (Clinica.TiposFeriadosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposFichasCnesForm = /** @class */ (function (_super) {
            __extends(TiposFichasCnesForm, _super);
            function TiposFichasCnesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposFichasCnesForm.formKey = 'Clinica.TiposFichasCnes';
            return TiposFichasCnesForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposFichasCnesForm = TiposFichasCnesForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposFichasCnesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposFichasCnesRow;
        (function (TiposFichasCnesRow) {
            TiposFichasCnesRow.idProperty = 'TipoFichaCnes';
            TiposFichasCnesRow.nameProperty = 'Descricao';
            TiposFichasCnesRow.localTextPrefix = 'Clinica.TiposFichasCnes';
            TiposFichasCnesRow.lookupKey = 'Clinica.TiposFichasCnes';
            function getLookup() {
                return Q.getLookup('Clinica.TiposFichasCnes');
            }
            TiposFichasCnesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposFichasCnesRow.Fields || (TiposFichasCnesRow.Fields = {}));
            ['TipoFichaCnes', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(TiposFichasCnesRow = Clinica.TiposFichasCnesRow || (Clinica.TiposFichasCnesRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposFichasCnesService;
        (function (TiposFichasCnesService) {
            TiposFichasCnesService.baseUrl = 'Clinica/TiposFichasCnes';
            var Methods;
            (function (Methods) {
            })(Methods = TiposFichasCnesService.Methods || (TiposFichasCnesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposFichasCnesService[x] = function (r, s, o) { return Q.serviceRequest(TiposFichasCnesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposFichasCnesService.baseUrl + '/' + x;
            });
        })(TiposFichasCnesService = Clinica.TiposFichasCnesService || (Clinica.TiposFichasCnesService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposGuiasForm = /** @class */ (function (_super) {
            __extends(TiposGuiasForm, _super);
            function TiposGuiasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposGuiasForm.formKey = 'Clinica.TiposGuias';
            return TiposGuiasForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposGuiasForm = TiposGuiasForm;
        [['Descricao', function () { return Serenity.StringEditor; }], ['Ativo', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(TiposGuiasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposGuiasRow;
        (function (TiposGuiasRow) {
            TiposGuiasRow.idProperty = 'TipoGuiaId';
            TiposGuiasRow.nameProperty = 'Descricao';
            TiposGuiasRow.localTextPrefix = 'Clinica.TiposGuias';
            TiposGuiasRow.lookupKey = 'Clinica.TiposGuias';
            function getLookup() {
                return Q.getLookup('Clinica.TiposGuias');
            }
            TiposGuiasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposGuiasRow.Fields || (TiposGuiasRow.Fields = {}));
            ['TipoGuiaId', 'Descricao', 'Ativo'].forEach(function (x) { return Fields[x] = x; });
        })(TiposGuiasRow = Clinica.TiposGuiasRow || (Clinica.TiposGuiasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposGuiasService;
        (function (TiposGuiasService) {
            TiposGuiasService.baseUrl = 'Clinica/TiposGuias';
            var Methods;
            (function (Methods) {
            })(Methods = TiposGuiasService.Methods || (TiposGuiasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposGuiasService[x] = function (r, s, o) { return Q.serviceRequest(TiposGuiasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposGuiasService.baseUrl + '/' + x;
            });
        })(TiposGuiasService = Clinica.TiposGuiasService || (Clinica.TiposGuiasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposItensForm = /** @class */ (function (_super) {
            __extends(TiposItensForm, _super);
            function TiposItensForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposItensForm.formKey = 'Clinica.TiposItens';
            return TiposItensForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposItensForm = TiposItensForm;
        [['Descricao', function () { return Serenity.StringEditor; }], ['Ativo', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(TiposItensForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposItensRow;
        (function (TiposItensRow) {
            TiposItensRow.idProperty = 'TipoItemId';
            TiposItensRow.nameProperty = 'Descricao';
            TiposItensRow.localTextPrefix = 'Clinica.TiposItens';
            TiposItensRow.lookupKey = 'Clinica.TiposItens';
            function getLookup() {
                return Q.getLookup('Clinica.TiposItens');
            }
            TiposItensRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposItensRow.Fields || (TiposItensRow.Fields = {}));
            ['TipoItemId', 'Descricao', 'Ativo'].forEach(function (x) { return Fields[x] = x; });
        })(TiposItensRow = Clinica.TiposItensRow || (Clinica.TiposItensRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposItensService;
        (function (TiposItensService) {
            TiposItensService.baseUrl = 'Clinica/TiposItens';
            var Methods;
            (function (Methods) {
            })(Methods = TiposItensService.Methods || (TiposItensService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposItensService[x] = function (r, s, o) { return Q.serviceRequest(TiposItensService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposItensService.baseUrl + '/' + x;
            });
        })(TiposItensService = Clinica.TiposItensService || (Clinica.TiposItensService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosForm = /** @class */ (function (_super) {
            __extends(TiposMeiosContatosForm, _super);
            function TiposMeiosContatosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposMeiosContatosForm.formKey = 'Clinica.TiposMeiosContatos';
            return TiposMeiosContatosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposMeiosContatosForm = TiposMeiosContatosForm;
        [['TipoMeioContato', function () { return Serenity.StringEditor; }], ['Mascara', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposMeiosContatosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosRow;
        (function (TiposMeiosContatosRow) {
            TiposMeiosContatosRow.idProperty = 'TipoMeioContatoId';
            TiposMeiosContatosRow.nameProperty = 'TipoMeioContato';
            TiposMeiosContatosRow.localTextPrefix = 'Clinica.TiposMeiosContatos';
            TiposMeiosContatosRow.lookupKey = 'Clinica.TiposMeiosContatos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposMeiosContatos');
            }
            TiposMeiosContatosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposMeiosContatosRow.Fields || (TiposMeiosContatosRow.Fields = {}));
            ['TipoMeioContatoId', 'TipoMeioContato', 'Mascara'].forEach(function (x) { return Fields[x] = x; });
        })(TiposMeiosContatosRow = Clinica.TiposMeiosContatosRow || (Clinica.TiposMeiosContatosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposMeiosContatosService;
        (function (TiposMeiosContatosService) {
            TiposMeiosContatosService.baseUrl = 'Clinica/TiposMeiosContatos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposMeiosContatosService.Methods || (TiposMeiosContatosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposMeiosContatosService[x] = function (r, s, o) { return Q.serviceRequest(TiposMeiosContatosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposMeiosContatosService.baseUrl + '/' + x;
            });
        })(TiposMeiosContatosService = Clinica.TiposMeiosContatosService || (Clinica.TiposMeiosContatosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposProfissionaisForm = /** @class */ (function (_super) {
            __extends(TiposProfissionaisForm, _super);
            function TiposProfissionaisForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposProfissionaisForm.formKey = 'Clinica.TiposProfissionais';
            return TiposProfissionaisForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposProfissionaisForm = TiposProfissionaisForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposProfissionaisForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposProfissionaisRow;
        (function (TiposProfissionaisRow) {
            TiposProfissionaisRow.idProperty = 'TipoProfissionalId';
            TiposProfissionaisRow.nameProperty = 'Descricao';
            TiposProfissionaisRow.localTextPrefix = 'Clinica.TiposProfissionais';
            TiposProfissionaisRow.lookupKey = 'Clinica.TiposProfissionais';
            function getLookup() {
                return Q.getLookup('Clinica.TiposProfissionais');
            }
            TiposProfissionaisRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposProfissionaisRow.Fields || (TiposProfissionaisRow.Fields = {}));
            ['TipoProfissionalId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(TiposProfissionaisRow = Clinica.TiposProfissionaisRow || (Clinica.TiposProfissionaisRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposProfissionaisService;
        (function (TiposProfissionaisService) {
            TiposProfissionaisService.baseUrl = 'Clinica/TiposProfissionais';
            var Methods;
            (function (Methods) {
            })(Methods = TiposProfissionaisService.Methods || (TiposProfissionaisService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposProfissionaisService[x] = function (r, s, o) { return Q.serviceRequest(TiposProfissionaisService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposProfissionaisService.baseUrl + '/' + x;
            });
        })(TiposProfissionaisService = Clinica.TiposProfissionaisService || (Clinica.TiposProfissionaisService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposProtocolosForm = /** @class */ (function (_super) {
            __extends(TiposProtocolosForm, _super);
            function TiposProtocolosForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposProtocolosForm.formKey = 'Clinica.TiposProtocolos';
            return TiposProtocolosForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposProtocolosForm = TiposProtocolosForm;
        [['Descricao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TiposProtocolosForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposProtocolosRow;
        (function (TiposProtocolosRow) {
            TiposProtocolosRow.idProperty = 'TipoProtocoloId';
            TiposProtocolosRow.nameProperty = 'Descricao';
            TiposProtocolosRow.localTextPrefix = 'Clinica.TiposProtocolos';
            TiposProtocolosRow.lookupKey = 'Clinica.TiposProtocolos';
            function getLookup() {
                return Q.getLookup('Clinica.TiposProtocolos');
            }
            TiposProtocolosRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposProtocolosRow.Fields || (TiposProtocolosRow.Fields = {}));
            ['TipoProtocoloId', 'Descricao'].forEach(function (x) { return Fields[x] = x; });
        })(TiposProtocolosRow = Clinica.TiposProtocolosRow || (Clinica.TiposProtocolosRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposProtocolosService;
        (function (TiposProtocolosService) {
            TiposProtocolosService.baseUrl = 'Clinica/TiposProtocolos';
            var Methods;
            (function (Methods) {
            })(Methods = TiposProtocolosService.Methods || (TiposProtocolosService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposProtocolosService[x] = function (r, s, o) { return Q.serviceRequest(TiposProtocolosService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposProtocolosService.baseUrl + '/' + x;
            });
        })(TiposProtocolosService = Clinica.TiposProtocolosService || (Clinica.TiposProtocolosService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposTabelasForm = /** @class */ (function (_super) {
            __extends(TiposTabelasForm, _super);
            function TiposTabelasForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TiposTabelasForm.formKey = 'Clinica.TiposTabelas';
            return TiposTabelasForm;
        }(Serenity.PrefixedContext));
        Clinica.TiposTabelasForm = TiposTabelasForm;
        [['Descricao', function () { return Serenity.StringEditor; }], ['CodigoTabela', function () { return Serenity.IntegerEditor; }], ['Tissid', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(TiposTabelasForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposTabelasRow;
        (function (TiposTabelasRow) {
            TiposTabelasRow.idProperty = 'TipoTabelaId';
            TiposTabelasRow.nameProperty = 'Descricao';
            TiposTabelasRow.localTextPrefix = 'Clinica.TiposTabelas';
            TiposTabelasRow.lookupKey = 'Clinica.TiposTabelas';
            function getLookup() {
                return Q.getLookup('Clinica.TiposTabelas');
            }
            TiposTabelasRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TiposTabelasRow.Fields || (TiposTabelasRow.Fields = {}));
            ['TipoTabelaId', 'Descricao', 'CodigoTabela', 'Tissid', 'TissidVersao'].forEach(function (x) { return Fields[x] = x; });
        })(TiposTabelasRow = Clinica.TiposTabelasRow || (Clinica.TiposTabelasRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TiposTabelasService;
        (function (TiposTabelasService) {
            TiposTabelasService.baseUrl = 'Clinica/TiposTabelas';
            var Methods;
            (function (Methods) {
            })(Methods = TiposTabelasService.Methods || (TiposTabelasService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TiposTabelasService[x] = function (r, s, o) { return Q.serviceRequest(TiposTabelasService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TiposTabelasService.baseUrl + '/' + x;
            });
        })(TiposTabelasService = Clinica.TiposTabelasService || (Clinica.TiposTabelasService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TissForm = /** @class */ (function (_super) {
            __extends(TissForm, _super);
            function TissForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TissForm.formKey = 'Clinica.Tiss';
            return TissForm;
        }(Serenity.PrefixedContext));
        Clinica.TissForm = TissForm;
        [['Versao', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TissForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TissRow;
        (function (TissRow) {
            TissRow.idProperty = 'Tissid';
            TissRow.nameProperty = 'Versao';
            TissRow.localTextPrefix = 'Clinica.Tiss';
            TissRow.lookupKey = 'Clinica.Tiss';
            function getLookup() {
                return Q.getLookup('Clinica.Tiss');
            }
            TissRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TissRow.Fields || (TissRow.Fields = {}));
            ['Tissid', 'Versao'].forEach(function (x) { return Fields[x] = x; });
        })(TissRow = Clinica.TissRow || (Clinica.TissRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var TissService;
        (function (TissService) {
            TissService.baseUrl = 'Clinica/Tiss';
            var Methods;
            (function (Methods) {
            })(Methods = TissService.Methods || (TissService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TissService[x] = function (r, s, o) { return Q.serviceRequest(TissService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TissService.baseUrl + '/' + x;
            });
        })(TissService = Clinica.TissService || (Clinica.TissService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ValoresForm = /** @class */ (function (_super) {
            __extends(ValoresForm, _super);
            function ValoresForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ValoresForm.formKey = 'Clinica.Valores';
            return ValoresForm;
        }(Serenity.PrefixedContext));
        Clinica.ValoresForm = ValoresForm;
        [['TipoItemId', function () { return Serenity.LookupEditor; }], ['TipoTabelaId', function () { return Serenity.LookupEditor; }], ['ProcedimentoId', function () { return Serenity.LookupEditor; }], ['ConvenioId', function () { return Serenity.LookupEditor; }], ['ValorCh', function () { return Serenity.DecimalEditor; }], ['ValorSessao', function () { return Serenity.DecimalEditor; }], ['DataInicio', function () { return Serenity.DateTimeEditor; }], ['DataFim', function () { return Serenity.DateTimeEditor; }], ['Observacao', function () { return Serenity.TextAreaEditor; }], ['DataCadastrada', function () { return Serenity.DateTimeEditor; }], ['CodigoRegistrado', function () { return Serenity.BooleanEditor; }], ['RequerAutorizacao', function () { return Serenity.BooleanEditor; }], ['TipoAutorizacaoId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ValoresForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ValoresRow;
        (function (ValoresRow) {
            ValoresRow.idProperty = 'ValorId';
            ValoresRow.nameProperty = 'Observacao';
            ValoresRow.localTextPrefix = 'Clinica.Valores';
            ValoresRow.lookupKey = 'Clinica.Valores';
            function getLookup() {
                return Q.getLookup('Clinica.Valores');
            }
            ValoresRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ValoresRow.Fields || (ValoresRow.Fields = {}));
            ['ValorId', 'TipoItemId', 'TipoTabelaId', 'ProcedimentoId', 'ConvenioId', 'ValorCh', 'ValorSessao', 'DataInicio', 'DataFim', 'Observacao', 'DataCadastrada', 'CodigoRegistrado', 'RequerAutorizacao', 'TipoAutorizacaoId', 'TipoItemDescricao', 'TipoItemAtivo', 'TipoTabelaDescricao', 'TipoTabelaCodigoTabela', 'TipoTabelaTissid', 'ProcedimentoTabelaId', 'Procedimento', 'ProcedimentoCodigo', 'ProcedimentoCh', 'ProcedimentoCodigoCbhpm', 'ProcedimentoCodigoTuss', 'ProcedimentoDataCadastrada', 'ProcedimentoIdCodigoRegistrado', 'ConvenioCnpj', 'ConvenioRazaoSocial', 'ConvenioNomeFantasia', 'ConvenioCodigoAns', 'ConvenioCadastroConvenio', 'ConvenioLogo', 'ConvenioInscricaoMunicipal', 'ConvenioInscricaoEstadual', 'ConvenioSite', 'ConvenioDataInicio', 'ConvenioInativo', 'ConvenioDataFim', 'ConvenioMotivoCancelamento', 'ConvenioObservacao', 'ConvenioVersaoTiss', 'ConvenioWebService', 'ConvenioSadtSolContratadoId', 'ConvenioSadtExecutanteId', 'ConvenioSadtProfissionalexecutante', 'ConvenioSadtMembroEquipe', 'ConvenioIdOrigem', 'ConvenioIdDestino', 'ConvenioOrigemIdPrestador', 'ConvenioDestinoIdPrestador', 'ConvenioIdLogo', 'ConvenioGeraTiss', 'ConvenioDataCadastro', 'ConvenioDataUltimaAtualizacao', 'ConvenioLatitude', 'ConvenioLongitude', 'ConvenioEmailNotaFiscal', 'ConvenioEmailContato', 'ConvenioEmailFaturamento', 'ConvenioEmailGlosa', 'TipoAutorizacaoDescricao'].forEach(function (x) { return Fields[x] = x; });
        })(ValoresRow = Clinica.ValoresRow || (Clinica.ValoresRow = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Clinica;
    (function (Clinica) {
        var ValoresService;
        (function (ValoresService) {
            ValoresService.baseUrl = 'Clinica/Valores';
            var Methods;
            (function (Methods) {
            })(Methods = ValoresService.Methods || (ValoresService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ValoresService[x] = function (r, s, o) { return Q.serviceRequest(ValoresService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ValoresService.baseUrl + '/' + x;
            });
        })(ValoresService = Clinica.ValoresService || (Clinica.ValoresService = {}));
    })(Clinica = Exemplos.Clinica || (Exemplos.Clinica = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Exemplos.Common || (Exemplos.Common = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
var Exemplos;
(function (Exemplos) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Exemplos.Membership || (Exemplos.Membership = {}));
})(Exemplos || (Exemplos = {}));
//# sourceMappingURL=Exemplos.Web.js.map