using FluentMigrator;
using System;

namespace Exemplos.Migrations.ExemplosDB
{

    [Migration(20141103140000)]
    public class ExemplosDB_20141103_140000_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Users", "UserId", s => s
                .WithColumn("Username").AsString(100).NotNullable()
                .WithColumn("DisplayName").AsString(100).NotNullable()
                .WithColumn("Email").AsString(100).Nullable()
                .WithColumn("Source").AsString(4).NotNullable()
                .WithColumn("PasswordHash").AsString(86).NotNullable()
                .WithColumn("PasswordSalt").AsString(10).NotNullable()
                .WithColumn("LastDirectoryUpdate").AsDateTime().Nullable()
                .WithColumn("UserImage").AsString(100).Nullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            Insert.IntoTable("Users").Row(new {
                Username = "admin",
                DisplayName = "admin",
                Email = "rolemberg.filho@gmail.com",
                Source = "site",
                PasswordHash = "rfqpSPYs0ekFlPyvIRTXsdhE/qrTHFF+kKsAUla7pFkXL4BgLGlTe89GDX5DBysenMDj8AqbIZPybqvusyCjwQ",
                PasswordSalt = "hJf_F",
                InsertDate = new DateTime(2014, 1, 1),
                InsertUserId = 1,
                IsActive = 1
            });

            this.CreateTableWithId32("Languages", "Id", s => s
                .WithColumn("LanguageId").AsString(10).NotNullable()
                .WithColumn("LanguageName").AsString(50).NotNullable());

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "en",
                LanguageName = "English"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "ru",
                LanguageName = "Russian"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "es",
                LanguageName = "Spanish"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "tr",
                LanguageName = "Turkish"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "de",
                LanguageName = "German"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "zh-CN",
                LanguageName = "Chinese (Simplified)"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "it",
                LanguageName = "Italian"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "pt",
                LanguageName = "Portuguese"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "pt-BR",
                LanguageName = "Portuguese (Brazil)"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "fa",
                LanguageName = "Farsi"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "vi-VN",
                LanguageName = "Vietnamese (Vietnam)"
            });

            //CARGA INICIAL
            IfDatabase("sqlserver").Execute.EmbeddedScript("Exemplos.Migrations.ExemplosDB.ExemplosDBScript_SqlServer_01_TABLES.sql");
            IfDatabase("sqlserver").Execute.EmbeddedScript("Exemplos.Migrations.ExemplosDB.ExemplosDBScript_SqlServer_02_DATA.sql");
            IfDatabase("sqlserver").Execute.EmbeddedScript("Exemplos.Migrations.ExemplosDB.ExemplosDBScript_SqlServer_03_PK_FK_DEFAULT.sql");
            IfDatabase("sqlserver").Execute.EmbeddedScript("Exemplos.Migrations.ExemplosDB.ExemplosDBScript_SqlServer_04_SPs.sql");

            //APOS CARGA DE DADOS INICIAL, TRUNCA O BANCO.
            //POR ENQUANTO NÃO CONSEGUE TRUNCAR O BANCO POIS ESTÁ DENTRO DE UMA TRANSACAO.
            //IfDatabase("sqlserver").Execute.EmbeddedScript("Exemplos.Migrations.ExemplosDB.ExemplosDBScript_TRUNCA_BASE.sql");

        }
    }
}