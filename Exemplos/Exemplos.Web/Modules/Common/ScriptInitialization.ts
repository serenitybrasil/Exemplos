/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace Exemplos.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Exemplos');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}