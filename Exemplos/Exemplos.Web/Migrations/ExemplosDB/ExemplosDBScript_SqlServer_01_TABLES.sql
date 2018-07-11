/********************************************************************************************/
/*** Início - USER defined functions (UDFs) para testar existência de objetos no DATABASE ***/
/********************************************************************************************/

IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlTabelaExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlTabelaExiste
END
GO

CREATE FUNCTION dbo.ddlTabelaExiste(
  @NomeTabela VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM sysobjects
    WHERE xtype = 'U' AND name = @NomeTabela
  ) BEGIN
    RETURN 1
  END
  RETURN 0
END
GO

/* Índice */

IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlIndiceExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlIndiceExiste
END
GO

CREATE FUNCTION dbo.ddlIndiceExiste(
  @NomeTabela VARCHAR(255),
  @NomeIndice VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM SYSINDEXES si
    WHERE si.id = object_id(@NomeTabela)
    AND si.name = @NomeIndice
  ) BEGIN
    RETURN 1
  END
  RETURN 0
END
GO

/* FOREIGN KEY */

IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlFKExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlFKExiste
END
GO

CREATE FUNCTION dbo.ddlFKExiste(
  @NomeTabela VARCHAR(255),
  @NomeFK VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM sysforeignkeys sc
    WHERE sc.fkeyid = object_id(@NomeTabela)
    AND object_name(sc.constid) = @NomeFK
  ) BEGIN
    RETURN 1
  END
  RETURN 0
END
GO

/* Estatística */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlEstatisticaExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlEstatisticaExiste
END
GO


CREATE FUNCTION dbo.ddlEstatisticaExiste(
  @NomeTabela VARCHAR(255),
  @NomeStat VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM SYSINDEXES si
    WHERE si.id = object_id(@NomeTabela)
    AND si.name = @NomeStat
    AND INDEXPROPERTY(id, name, 'IsStatistics') = 1
  ) BEGIN
    RETURN 1
  END
  RETURN 0
END
GO

/* Coluna */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlColunaExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlColunaExiste
END
GO

CREATE FUNCTION dbo.ddlColunaExiste(
  @NomeTabela VARCHAR(255),
  @NomeColuna VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM sysobjects
    WHERE xtype = 'U' AND name = @NomeTabela
  ) BEGIN
    IF EXISTS(
      SELECT 1
      FROM syscolumns
      WHERE id = object_id(@NomeTabela)
      AND name = @NomeColuna
    ) BEGIN
      RETURN 1
    END
    ELSE
    BEGIN
      RETURN 0
    END
  END
  RETURN 0
END
GO

/* Verifica o tamanho da Coluna */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlColunaTamanhoEh' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlColunaTamanhoEh
END
GO

CREATE FUNCTION dbo.ddlColunaTamanhoEh(
  @NomeTabela VARCHAR(255),
  @NomeColuna VARCHAR(255),
  @Tamanho smallint
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM sysobjects
    WHERE xtype = 'U' AND name = @NomeTabela
  ) BEGIN
    IF EXISTS(
      SELECT 1
      FROM syscolumns
      WHERE id = object_id(@NomeTabela)
      AND name = @NomeColuna
      AND length = @Tamanho
    ) BEGIN
      RETURN 1
    END
    ELSE
    BEGIN
      RETURN 0
    END
  END
  RETURN 0
END
GO


/* Dropa default de uma coluna */

IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlDropDefaultColuna' AND XTYPE = 'P')
BEGIN
  DROP PROCEDURE dbo.ddlDropDefaultColuna
END
GO

CREATE PROCEDURE dbo.ddlDropDefaultColuna(@Tabela VARCHAR(200), @Coluna VARCHAR(200)) AS
BEGIN

  DECLARE @NomeDefault VARCHAR(200)
  DECLARE @ColumnID INT
  DECLARE @ComandoDropar VARCHAR(8000)

  SELECT @ColumnID = column_id FROM sys.columns WHERE object_id = object_id(@Tabela) AND name like @Coluna


  SELECT TOP 1 @NomeDefault = name FROM sys.default_constraints where type = 'D' and parent_object_id = object_id(@Tabela) and parent_column_id = @ColumnID
  IF @NomeDefault IS NULL
  BEGIN
    RETURN 0 -- Não tem default
  END ELSE BEGIN
    SET @ComandoDropar = 'ALTER TABLE ['+@Tabela+'] DROP CONSTRAINT ['+@NomeDefault+']'
    PRINT '[Auto] Dropando default '+@NomeDefault+' da tabela '+@Tabela+''
    EXEC(@ComandoDropar)
  END

END
GO

/* Verifica o TIPO da coluna */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlTipoDaColunaEh' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlTipoDaColunaEh
END
GO

CREATE FUNCTION dbo.ddlTipoDaColunaEh(
  @NomeTabela VARCHAR(255),
  @NomeColuna VARCHAR(255),
  @Tipo VARCHAR(200)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM sys.columns C
    INNER JOIN sys.types T ON (C.system_type_id = T.system_type_id)
    WHERE C.object_id = object_id(@NomeTabela)
    AND C.Name like @NomeColuna
    AND T.Name like @Tipo
  )
  BEGIN
    RETURN 1
  END
  RETURN 0
END
GO

/* Verifica se a coluna aceita null */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlColunaNullableEh' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlColunaNullableEh
END
GO

CREATE FUNCTION dbo.ddlColunaNullableEh(
  @NomeTabela VARCHAR(255),
  @NomeColuna VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
    FROM sysobjects
    WHERE xtype = 'U' AND name = @NomeTabela
  ) BEGIN
    IF EXISTS(
      SELECT 1
      FROM syscolumns
      WHERE id = object_id(@NomeTabela)
      AND name = @NomeColuna
      AND isnullable = 1
    ) BEGIN
      RETURN 1
    END
    ELSE
    BEGIN
      RETURN 0
    END
  END
  RETURN 0
END
GO

/* Synonym */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlSinonimoExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlSinonimoExiste
END
GO

CREATE FUNCTION dbo.ddlSinonimoExiste(
  @NomeSinonimo VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1
      FROM sysobjects
     WHERE xtype = 'SN'
       AND name = @NomeSinonimo
  ) BEGIN
      RETURN 1
    END
  RETURN 0
END
GO


-- /* GetPathBase */
-- IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlGetPathBase' AND XTYPE = 'FN')
-- BEGIN
--   DROP FUNCTION dbo.ddlGetPathBase
-- END
-- GO
-- 
-- CREATE FUNCTION dbo.ddlGetPathBase(
--   @BaseFrom VARCHAR(100),
--   @BaseTo VARCHAR(100)
-- )
--  RETURNS VARCHAR(100)
-- AS
-- BEGIN
--   DECLARE @Value VARCHAR(100)
--   DECLARE @SynPath SYSNAME
-- 
--   SET @SynPath = 'SOFTWARE\ME\Data\Synonyms\' + @BaseFrom
--   SET @Value = @BaseTo
-- 
--   EXEC xp_instance_regread 'HKEY_LOCAL_MACHINE', @SynPath , @BaseTo , @Value OUTPUT
-- 
--   RETURN @Value
-- END
-- GO

/* Se o campo faz parte da Primary Key */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlIndiceTemColuna' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlIndiceTemColuna
END
GO

CREATE FUNCTION dbo.ddlIndiceTemColuna(
  @NomeTabela VARCHAR(255),
  @NomeIndice VARCHAR(255),
  @NomeCampo  VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1 
    FROM INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE
    WHERE TABLE_NAME = @NomeTabela
      AND CONSTRAINT_NAME = @NomeIndice
      AND COLUMN_NAME = @NomeCampo
  ) BEGIN
      RETURN 1
    END
  RETURN 0
END
GO

/* Se existe o full text catalog */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlFullTextCatalogExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlFullTextCatalogExiste
END
GO

CREATE FUNCTION dbo.ddlFullTextCatalogExiste(
  @NomeCatalogo VARCHAR(255)
)
RETURNS bit
AS BEGIN
  IF EXISTS (
    SELECT TOP 1 1 
    FROM sys.fulltext_catalogs f
    WHERE f.name = @NomeCatalogo
  ) BEGIN
      RETURN 1
    END
  RETURN 0
END
GO

/* Se existe o insert das description das colunas das tabelas */
IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlDescriptionExiste' AND XTYPE = 'FN')
BEGIN
  DROP FUNCTION dbo.ddlDescriptionExiste
END
GO

CREATE FUNCTION dbo.ddlDescriptionExiste(
  @NomeTabela VARCHAR(255),
  @NomeColuna VARCHAR(255)
)
RETURNS bit
AS BEGIN

 declare @retorno int
 set @retorno = 0
 
 IF  (@NomeColuna = '')
 BEGIN
	--VERIFICA APENAS A TABELA
	 IF  (
				select ISNULL(sep.value , 'NAOEXISTE') AS [Description]
				from sys.tables st
				left join sys.extended_properties sep on st.object_id = sep.major_id
														and sep.minor_id = 0
														and sep.name = 'MS_Description'
				where st.name = @NomeTabela
	  ) <> 'NAOEXISTE'
		BEGIN
          set @retorno =	1
		END
 END
 ELSE
 BEGIN
	--VERIFICA A COLUNA DENTRO DA TABELA
	 IF  (
				select ISNULL(sep.value , 'NAOEXISTE') AS [Description]
				from sys.tables st
				inner join sys.columns sc on st.object_id = sc.object_id
				left join sys.extended_properties sep on st.object_id = sep.major_id
														and sc.column_id = sep.minor_id
														and sep.name = 'MS_Description'
				where st.name = @NomeTabela
				and	sc.name = @NomeColuna
	  ) <> 'NAOEXISTE'
		BEGIN
          set @retorno =	1
		END
 END
    
    
  RETURN @retorno
END
GO

/* Insere a descrição de uma coluna */

IF EXISTS (SELECT TOP 1 1 FROM sysobjects WHERE name = 'ddlInsereDescription' AND XTYPE = 'P')
BEGIN
  DROP PROCEDURE dbo.ddlInsereDescription
END
GO

CREATE PROCEDURE dbo.ddlInsereDescription(@Tabela VARCHAR(200), @Coluna VARCHAR(200), @Description VARCHAR(200)) AS
BEGIN
	DECLARE @ComandoDropar VARCHAR(8000)

	IF (@Coluna = '')
	BEGIN
		SET @ComandoDropar = 'EXEC sys.sp_addextendedproperty @name=N''MS_Description'', @value=N''' + @Description + ''' , @level0type=N''SCHEMA'',@level0name=N''dbo'', @level1type=N''TABLE'',@level1name=N''' + @Tabela + ''''
		PRINT 'Criando Description da coluna '+@Coluna+' na tabela '+@Tabela
		print @ComandoDropar
	END
	ELSE
	BEGIN
		SET @ComandoDropar = 'EXEC sys.sp_addextendedproperty @name=N''MS_Description'', @value=N''' + @Description + ''' , @level0type=N''SCHEMA'',@level0name=N''dbo'', @level1type=N''TABLE'',@level1name=N''' + @Tabela + ''', @level2type=N''COLUMN'',@level2name=N''' + @Coluna + ''''
		PRINT 'Criando Description da coluna '+@Coluna+' na tabela '+@Tabela
		print @ComandoDropar
	END


	EXEC(@ComandoDropar)


END
GO
/*****************************************************************************************/
/*** Fim - USER defined functions (UDFs) para testar existência de objetos no DATABASE ***/
/*****************************************************************************************/




/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.Contatos ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('Contatos') = 1
BEGIN
	PRINT 'Criando tabela Contatos...'

	CREATE TABLE [dbo].[Contatos] (
		[ContatoID] [int] IDENTITY(1,1) NOT NULL, 
		[PacienteID] [int] NULL, 
		[ConvenioID] [int] NULL, 
		[ProfissionalID] [int] NULL, 
		[FornecedorID] [int] NULL, 
		[Tratamento] [varchar](100) NULL, 
		[Nome] [varchar](100) NULL, 
		[Departamento] [varchar](20) NULL, 
		[TipoContatoID] [int] NOT NULL, 
		[ConteudoMeioContato] [varchar](50) NOT NULL, 
		[TipoMeioContatoID] [int] NOT NULL, 
		[ObservacoesContato] [varchar](500) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('Contatos', 'PacienteID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'PacienteID', @Description = 'Código do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'ConvenioID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'ConvenioID', @Description = 'Código do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'ProfissionalID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'ProfissionalID', @Description = 'Código do Profissional'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'Tratamento') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'Tratamento', @Description = 'Sr, Sra, Srta, Dr'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'Nome') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'Nome', @Description = 'Nome do Contato'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'Departamento') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'Departamento', @Description = 'Departamento'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'TipoContatoID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'TipoContatoID', @Description = 'Se é celular, telefone, etc.'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'ConteudoMeioContato') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'ConteudoMeioContato', @Description = 'O número do Contato.'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'TipoMeioContatoID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'TipoMeioContatoID', @Description = 'Se é pessoal, profissional, etc...'
END
GO
IF NOT dbo.ddlDescriptionExiste('Contatos', 'ObservacoesContato') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Contatos', @Coluna = 'ObservacoesContato', @Description = 'observações importantes do contato'
END
GO



/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.Convenios ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('Convenios') = 1
BEGIN
	PRINT 'Criando tabela Convenios...'

	CREATE TABLE [dbo].[Convenios] (
		[ConvenioID] [int] IDENTITY(1,1) NOT NULL, 
		[CNPJ] [varchar](18) NULL, 
		[RazaoSocial] [varchar](100) NULL, 
		[NomeFantasia] [varchar](100) NULL, 
		[CodigoANS] [varchar](100) NULL, 
		[CadastroConvenio] [varchar](50) NULL, 
		[Logo] [varchar](100) NULL, 
		[InscricaoMunicipal] [varchar](50) NULL, 
		[InscricaoEstadual] [varchar](50) NULL, 
		[Site] [varchar](50) NULL, 
		[DataInicio] [smalldatetime] NULL, 
		[Inativo] [bit] NULL, 
		[DataFim] [smalldatetime] NULL, 
		[MotivoCancelamento] [varchar](2000) NULL, 
		[Observacao] [varchar](2000) NULL, 
		[VersaoTISS] [varchar](100) NULL, 
		[WebService] [varchar](100) NULL, 
		[SADT_SOL_CONTRATADO_ID] [varchar](30) NULL, 
		[SADT_EXECUTANTE_ID] [varchar](30) NULL, 
		[SADT_PROFISSIONALEXECUTANTE] [varchar](30) NULL, 
		[SADT_MEMBRO_EQUIPE] [varchar](30) NULL, 
		[ID_ORIGEM] [varchar](30) NULL, 
		[ID_DESTINO] [varchar](30) NULL, 
		[ORIGEM_ID_PRESTADOR] [varchar](30) NULL, 
		[DESTINO_ID_PRESTADOR] [varchar](30) NULL, 
		[ID_LOGO] [int] NULL, 
		[GERA_TISS] [bit] NULL, 
		[DataCadastro] [date] NULL, 
		[DataUltimaAtualizacao] [date] NULL, 
		[Latitude] [varchar](200) NULL, 
		[Longitude] [varchar](200) NULL, 
		[EmailNotaFiscal] [varchar](100) NULL, 
		[EmailContato] [varchar](100) NULL, 
		[EmailFaturamento] [varchar](100) NULL, 
		[EmailGlosa] [varchar](100) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('Convenios', 'ConvenioID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'ConvenioID', @Description = 'Código do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'CNPJ') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'CNPJ', @Description = 'CNPJ'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'RazaoSocial') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'RazaoSocial', @Description = 'Razão Social'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'NomeFantasia') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'NomeFantasia', @Description = 'Nome Fantasia'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'CodigoANS') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'CodigoANS', @Description = 'Código ANS do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'CadastroConvenio') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'CadastroConvenio', @Description = 'Nº do Cadastro da Clínica no Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'Logo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'Logo', @Description = 'Logotipo do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'InscricaoMunicipal') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'InscricaoMunicipal', @Description = 'Inscrição Municipal'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'InscricaoEstadual') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'InscricaoEstadual', @Description = 'Inscrição Estadual'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'Site') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'Site', @Description = 'Site'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'DataInicio') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'DataInicio', @Description = 'Data Início do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'Inativo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'Inativo', @Description = 'Se o convênio está ativo (0) ou inativo (1)'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'DataFim') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'DataFim', @Description = 'Data Fim do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'MotivoCancelamento') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'MotivoCancelamento', @Description = 'Motivo do Cancelamento'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'Observacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'Observacao', @Description = 'Observações Diversas'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'VersaoTISS') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'VersaoTISS', @Description = 'Versão da TISS atualmente utilizado'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'WebService') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'WebService', @Description = 'WebService de Autorização do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'DataCadastro') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'DataCadastro', @Description = 'Data do Cadatro das informações de Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'DataUltimaAtualizacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'DataUltimaAtualizacao', @Description = 'Data da Última Atualização desse Cadastro'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'Latitude') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'Latitude', @Description = 'Latitude do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'Longitude') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'Longitude', @Description = 'Longitude do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'EmailNotaFiscal') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'EmailNotaFiscal', @Description = 'Email para envio da Nota Fiscal'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'EmailContato') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'EmailContato', @Description = 'Email para contato geral'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'EmailFaturamento') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'EmailFaturamento', @Description = 'Email para faturamento'
END
GO
IF NOT dbo.ddlDescriptionExiste('Convenios', 'EmailGlosa') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Convenios', @Coluna = 'EmailGlosa', @Description = 'Email para envio do Recurso de Glosa'
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.Enderecos ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('Enderecos') = 1
BEGIN
	PRINT 'Criando tabela Enderecos...'

	CREATE TABLE [dbo].[Enderecos] (
		[EnderecoID] [int] IDENTITY(1,1) NOT NULL, 
		[PacienteID] [int] NULL, 
		[ConvenioID] [int] NULL, 
		[ProfissionalID] [int] NULL, 
		[FornecedorID] [int] NULL, 
		[TipoEnderecoID] [int] NULL, 
		[Rua] [varchar](200) NULL, 
		[Numero] [varchar](10) NULL, 
		[Complemento] [varchar](50) NULL, 
		[Bairro] [varchar](100) NULL, 
		[Cidade] [varchar](100) NULL, 
		[CodigoIBGECidade] [varchar](10) NULL, 
		[Estado] [varchar](100) NULL, 
		[CodigoIBGEEstado] [varchar](10) NULL, 
		[Pais] [varchar](100) NULL, 
		[CEP] [varchar](9) NULL, 
		[Referencia] [varchar](300) NULL, 
		[Observacao] [varchar](200) NULL, 
		[Latitude] [varchar](200) NULL, 
		[Longitude] [varchar](200) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'PacienteID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'PacienteID', @Description = 'Código do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'ConvenioID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'ConvenioID', @Description = 'ID do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'ProfissionalID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'ProfissionalID', @Description = 'Código do Profissional'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'FornecedorID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'FornecedorID', @Description = 'ID do Fornecedor'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'TipoEnderecoID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'TipoEnderecoID', @Description = 'Tipo do Endereço (Rua, Avenida, etc..)'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Rua') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Rua', @Description = 'Digitação do campo rua'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Numero') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Numero', @Description = 'Digitação do campo numero'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Complemento') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Complemento', @Description = 'Digitação do campo complemento'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Bairro') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Bairro', @Description = 'Digitação do campo bairro'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Cidade') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Cidade', @Description = 'Digitação do campo cidade'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'CodigoIBGECidade') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'CodigoIBGECidade', @Description = 'Código do IBGE referente à Cidade (município)'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Estado') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Estado', @Description = 'Digitação do campo estado'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'CodigoIBGEEstado') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'CodigoIBGEEstado', @Description = 'Código do IBGE referente ao Estado (UF)'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Pais') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Pais', @Description = 'Digitação do campo Pais'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'CEP') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'CEP', @Description = 'Digitação do campo CEP'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Referencia') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Referencia', @Description = 'referencia do endereço'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Observacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Observacao', @Description = 'Observação a respeito desse endereço'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Latitude') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Latitude', @Description = 'Latitude do Endereço'
END
GO
IF NOT dbo.ddlDescriptionExiste('Enderecos', 'Longitude') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Enderecos', @Coluna = 'Longitude', @Description = 'Longitude do Endereço'
END
GO


/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.EstadosCivis ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('EstadosCivis') = 1
BEGIN
	PRINT 'Criando tabela EstadosCivis...'

	CREATE TABLE [dbo].[EstadosCivis] (
		[EstadoCivilID] [int] IDENTITY(1,1) NOT NULL, 
		[Descricao] [varchar](100) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('EstadosCivis', 'EstadoCivilID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'EstadosCivis', @Coluna = 'EstadoCivilID', @Description = 'Código do Estado Civil'
END
GO
IF NOT dbo.ddlDescriptionExiste('EstadosCivis', 'Descricao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'EstadosCivis', @Coluna = 'Descricao', @Description = 'Descrição do Estado Civil (S = Solteiro(a); C = Casado(a); P = Separado(a); D = Divorciado(a); V = Viúvo(a))'
END
GO


/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.Fornecedores ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('Fornecedores') = 1
BEGIN
	PRINT 'Criando tabela Fornecedores...'

	CREATE TABLE [dbo].[Fornecedores] (
		[FornecedorID] [int] IDENTITY(1,1) NOT NULL, 
		[Status] [bit] NULL, 
		[PessoaJuridica] [bit] NULL, 
		[RazaoSocial] [varchar](255) NOT NULL, 
		[NomeFantasia] [varchar](255) NULL, 
		[NomeAbreviado] [varchar](100) NULL, 
		[CPF] [varchar](14) NULL, 
		[RG] [varchar](20) NULL, 
		[CNPJ] [varchar](18) NULL, 
		[InscricaoEstadual] [varchar](200) NULL, 
		[InscricaoMunicipal] [varchar](200) NULL, 
		[Site] [varchar](200) NULL, 
		[Telefone] [varchar](200) NULL, 
		[Fax] [varchar](200) NULL, 
		[TelefoneAlternativo] [varchar](200) NULL, 
		[EmailCorporativo] [varchar](200) NULL, 
		[AceitaReceberEmail] [bit] NULL, 
		[MotivoStatus] [varchar](500) NULL, 
		[QuantidadeEmpregados] [int] NULL, 
		[AtividadeEmpresaID] [int] NULL, 
		[ReceitaAnual] [decimal](18, 2) NULL, 
		[MarcasTrabalhadas] [varchar](200) NULL, 
		[ObservacoesGerais] [varchar](500) NULL, 
		[DataCriacao] [datetime] NULL, 
		[DataAlteracao] [datetime] NULL, 
		[Inativo] [bit] NULL, 
		[DataInativo] [datetime] NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'FornecedorID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'FornecedorID', @Description = 'ID do Fornecedor'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'Status') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'Status', @Description = 'Se é um fornecedor ativo ou nao'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'PessoaJuridica') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'PessoaJuridica', @Description = 'Se for PJ, logo é Verdadeiro, Se for PF logo é falso'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'RazaoSocial') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'RazaoSocial', @Description = 'Digitaçao do nome do cliente em caso PF ou Razão Social em caso de PJ'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'NomeFantasia') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'NomeFantasia', @Description = 'Digitação do Nome Fantasia do cliente em caso de PJ'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'NomeAbreviado') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'NomeAbreviado', @Description = 'Nome abreviado para esse fornecedor'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'CPF') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'CPF', @Description = 'Se o cliente for PF, necessário o campo'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'RG') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'RG', @Description = 'Se o cliente for PF, necessário o campo'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'CNPJ') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'CNPJ', @Description = 'digitação do CNPJ em caso de cliente PJ'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'InscricaoEstadual') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'InscricaoEstadual', @Description = 'Campo para digitação em caso de PJ e também poderá ter a frase isento'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'InscricaoMunicipal') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'InscricaoMunicipal', @Description = 'Campo para digitação em caso de PJ e também poderá ter a frase isento'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'Site') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'Site', @Description = 'Campo para digitação do site'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'Telefone') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'Telefone', @Description = 'campo para digitação do telefone'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'Fax') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'Fax', @Description = 'campo para digitação do fax'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'TelefoneAlternativo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'TelefoneAlternativo', @Description = 'campo para digitação do telefone alternativo'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'EmailCorporativo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'EmailCorporativo', @Description = 'campo para digitação do email corporativo'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'AceitaReceberEmail') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'AceitaReceberEmail', @Description = 'Se o fornecedor aceita receber e-mails da Pacific Web ou não (pode ser propaganda, aviso, etc)'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'MotivoStatus') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'MotivoStatus', @Description = 'motivo do fornecedor estar inativo'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'QuantidadeEmpregados') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'QuantidadeEmpregados', @Description = 'Quantidade de Funcionarios'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'AtividadeEmpresaID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'AtividadeEmpresaID', @Description = 'Ramo de atividade do fornecedor'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'ReceitaAnual') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'ReceitaAnual', @Description = 'Faturamento anual do fornecedor'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'MarcasTrabalhadas') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'MarcasTrabalhadas', @Description = 'Quais marcas o fornecedor trabalha'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'ObservacoesGerais') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'ObservacoesGerais', @Description = 'Observações relevantes do fornecedor'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'DataCriacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'DataCriacao', @Description = 'Data da Criação do fornecedor no sistema'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'DataAlteracao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'DataAlteracao', @Description = 'Data de alteração do fornecedor no sistema'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'Inativo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'Inativo', @Description = 'Se está inativo ou não'
END
GO
IF NOT dbo.ddlDescriptionExiste('Fornecedores', 'DataInativo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Fornecedores', @Coluna = 'DataInativo', @Description = 'Data da Inativação desse dado no sistema'
END
GO




/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.Pacientes ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('Pacientes') = 1
BEGIN
	PRINT 'Criando tabela Pacientes...'

	CREATE TABLE [dbo].[Pacientes] (
		[PacienteID] [int] IDENTITY(1,1) NOT NULL, 
		[DataCadastro] [date] NOT NULL, 
		[DataUltimaAtualizacao] [date] NULL, 
		[Matricula] [varchar](6) NULL, 
		[StatusID] [int] NULL, 
		[Paciente] [varchar](100) NOT NULL, 
		[Especial] [bit] NULL, 
		[Pai] [varchar](100) NULL, 
		[Mae] [varchar](100) NULL, 
		[SexoID] [int] NULL, 
		[DataNascimento] [date] NULL, 
		[CNS] [varchar](15) NULL, 
		[CarteiraIdentidade] [varchar](50) NULL, 
		[CPF] [varchar](14) NULL, 
		[Observacao] [varchar](2000) NULL, 
		[DisturbiosAssociados] [varchar](2000) NULL, 
		[Responsavel] [varchar](100) NULL, 
		[Foto] [varchar](100) NULL, 
		[DataFoto] [date] NULL, 
		[PacienteID_ControlMedic] [int] NULL, 
		[PacienteID_GestorMedico] [int] NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'PacienteID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'PacienteID', @Description = 'Código do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'DataCadastro') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'DataCadastro', @Description = 'Data do Cadastro'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'DataUltimaAtualizacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'DataUltimaAtualizacao', @Description = 'Data da Última Atualização desse Cadastro'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Matricula') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Matricula', @Description = 'Nº da Matrícula'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'StatusID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'StatusID', @Description = 'Status do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Paciente') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Paciente', @Description = 'Nome do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Especial') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Especial', @Description = 'Se o paciente tem necessidade especial ou não'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Pai') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Pai', @Description = 'Nome do Pai'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Mae') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Mae', @Description = 'Nome da Mãe'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'SexoID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'SexoID', @Description = 'Sexo do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'DataNascimento') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'DataNascimento', @Description = 'Data do Nascimento'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'CNS') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'CNS', @Description = 'Nº Cartão Nacional de Saúde'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'CarteiraIdentidade') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'CarteiraIdentidade', @Description = 'Nº Carteira de Identidade'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'CPF') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'CPF', @Description = 'Nº CPF'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Observacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Observacao', @Description = 'Observações Diversas'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'DisturbiosAssociados') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'DisturbiosAssociados', @Description = 'Distúrbios Associados'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Responsavel') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Responsavel', @Description = 'Nome do Responsável'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'Foto') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'Foto', @Description = 'Foto do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('Pacientes', 'DataFoto') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Pacientes', @Coluna = 'DataFoto', @Description = 'Data de quando obteve a foto do Paciente'
END
GO



/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.PacientesConvenios ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('PacientesConvenios') = 1
BEGIN
	PRINT 'Criando tabela PacientesConvenios...'

	CREATE TABLE [dbo].[PacientesConvenios] (
		[PacienteConvenioID] [int] IDENTITY(1,1) NOT NULL, 
		[PacienteID] [int] NOT NULL, 
		[ConvenioID] [int] NOT NULL, 
		[SubConvenioID] [int] NULL, 
		[ConvenioPrincipal] [bit] NOT NULL, 
		[DescricaoPlano] [varchar](100) NULL, 
		[Carteirinha] [varchar](50) NULL, 
		[DataValidadeCarteirinha] [date] NULL, 
		[NomePacienteConvenio] [varchar](100) NULL, 
		[Inativo] [bit] NULL, 
		[DataInativo] [date] NULL, 
		[ImagemCarteirinha] [varchar](max) NULL, 
		[DataCadastro] [date] NULL, 
		[DataUltimaAtualizacao] [date] NULL, 
		[Observacao] [varchar](200) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'PacienteConvenioID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'PacienteConvenioID', @Description = 'Código do Paciente Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'PacienteID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'PacienteID', @Description = 'Código do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'ConvenioID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'ConvenioID', @Description = 'Código do Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'SubConvenioID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'SubConvenioID', @Description = 'SubConvênio de um Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'ConvenioPrincipal') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'ConvenioPrincipal', @Description = 'Se é o convênio principal do usuário'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'DescricaoPlano') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'DescricaoPlano', @Description = 'Descricao do plano do convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'Carteirinha') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'Carteirinha', @Description = 'Número da carteirinha do paciente no convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'DataValidadeCarteirinha') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'DataValidadeCarteirinha', @Description = 'Data da Validade da Carteirinha do Plano'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'NomePacienteConvenio') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'NomePacienteConvenio', @Description = 'Nome do paciente no Convênio (Muitas vezes o nome do paciente foi cadastrado de forma diferente no convênio)'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'Inativo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'Inativo', @Description = 'Se a carteirinha está ativa no convênio ou não'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'DataInativo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'DataInativo', @Description = 'Data da inativação da carteirinha no SISTEMA Exemplos'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'ImagemCarteirinha') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'ImagemCarteirinha', @Description = 'Imagem da carteirinha (se possível, frente e VERSO)'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'DataCadastro') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'DataCadastro', @Description = 'Data do Cadatro das informações de Convênio'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'DataUltimaAtualizacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'DataUltimaAtualizacao', @Description = 'Data da Última Atualização desse Cadastro'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesConvenios', 'Observacao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesConvenios', @Coluna = 'Observacao', @Description = 'Observação acerca dessa carteirinha, plano e convênio.'
END
GO



/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.PacientesEmissaoNF ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('PacientesEmissaoNF') = 1
BEGIN
	PRINT 'Criando tabela PacientesEmissaoNF...'

	CREATE TABLE [dbo].[PacientesEmissaoNF] (
		[PacienteEmissaoNF] [int] IDENTITY(1,1) NOT NULL, 
		[PacienteID] [int] NOT NULL, 
		[NomeResponsavel] [varchar](100) NULL, 
		[PessoaJuridica] [bit] NULL, 
		[CPFResponsavel] [varchar](14) NULL, 
		[CNPJResponsavel] [varchar](18) NULL, 
		[EmailNF] [varchar](100) NULL, 
		[Padrao] [bit] NULL, 
		[TipoEnderecoID] [int] NULL, 
		[Rua] [varchar](200) NULL, 
		[Numero] [varchar](10) NULL, 
		[Complemento] [varchar](50) NULL, 
		[Bairro] [varchar](100) NULL, 
		[Cidade] [varchar](100) NULL, 
		[CodigoIBGECidade] [varchar](10) NULL, 
		[Estado] [varchar](2) NULL, 
		[CodigoIBGEEstado] [varchar](10) NULL, 
		[Pais] [varchar](100) NULL, 
		[CEP] [varchar](9) NULL, 
		[Referencia] [varchar](300) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'PacienteEmissaoNF') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'PacienteEmissaoNF', @Description = 'Código do responsável da NF do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'PacienteID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'PacienteID', @Description = 'Código do Paciente'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'NomeResponsavel') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'NomeResponsavel', @Description = 'Responsável para quem a NF será emitida'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'PessoaJuridica') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'PessoaJuridica', @Description = 'Se a NF é para pessoa Física (0) ou Jurídica (1)'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'CPFResponsavel') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'CPFResponsavel', @Description = 'Nº CPF do Responsável'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'CNPJResponsavel') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'CNPJResponsavel', @Description = 'Nº CNPJ para recebimento da Nfe'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'EmailNF') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'EmailNF', @Description = 'Email para envio da Nota Fiscal'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Padrao') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Padrao', @Description = 'Se é o responsável padrão para emissão da NF'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'TipoEnderecoID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'TipoEnderecoID', @Description = 'Tipo do Endereço (Rua, Avenida, etc..)'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Numero') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Numero', @Description = 'Digitação do campo numero'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Complemento') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Complemento', @Description = 'Digitação do campo complemento'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Bairro') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Bairro', @Description = 'Digitação do campo bairro'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Cidade') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Cidade', @Description = 'Digitação do campo cidade'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'CodigoIBGECidade') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'CodigoIBGECidade', @Description = 'Código do IBGE referente à Cidade (município)'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Estado') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Estado', @Description = 'Digitação do campo estado (UF)'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'CodigoIBGEEstado') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'CodigoIBGEEstado', @Description = 'Código do IBGE referente ao Estado (UF)'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Pais') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Pais', @Description = 'Digitação do campo Pais'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'CEP') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'CEP', @Description = 'Digitação do campo CEP'
END
GO
IF NOT dbo.ddlDescriptionExiste('PacientesEmissaoNF', 'Referencia') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'PacientesEmissaoNF', @Coluna = 'Referencia', @Description = 'Referência do endereço'
END
GO




/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.Sexo ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('Sexo') = 1
BEGIN
	PRINT 'Criando tabela Sexo...'

	CREATE TABLE [dbo].[Sexo] (
		[SexoID] [int] IDENTITY(1,1) NOT NULL, 
		[Sexo] [varchar](100) NULL, 
		[Abreviatura] [char](1) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('Sexo', 'SexoID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Sexo', @Coluna = 'SexoID', @Description = 'Código do Sexo'
END
GO
IF NOT dbo.ddlDescriptionExiste('Sexo', 'Sexo') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Sexo', @Coluna = 'Sexo', @Description = 'Descrição'
END
GO
IF NOT dbo.ddlDescriptionExiste('Sexo', 'Abreviatura') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Sexo', @Coluna = 'Abreviatura', @Description = 'M = Masculino; F - Feminino'
END
GO



/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.Status ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('Status') = 1
BEGIN
	PRINT 'Criando tabela Status...'

	CREATE TABLE [dbo].[Status] (
		[StatusID] [int] IDENTITY(1,1) NOT NULL, 
		[Status] [varchar](100) NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('Status', 'StatusID') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Status', @Coluna = 'StatusID', @Description = 'Status'
END
GO
IF NOT dbo.ddlDescriptionExiste('Status', 'Status') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'Status', @Coluna = 'Status', @Description = 'Descrição do Status'
END
GO




/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.TiposContatos ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('TiposContatos') = 1
BEGIN
	PRINT 'Criando tabela TiposContatos...'

	CREATE TABLE [dbo].[TiposContatos] (
		[TipoContatoID] [int] IDENTITY(1,1) NOT NULL, 
		[TipoContato] [varchar](100) NOT NULL, 
		[PessoaFisica] [bit] NULL, 
		[Ordem] [int] NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('TiposContatos', 'TipoContato') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposContatos', @Coluna = 'TipoContato', @Description = 'Se é pessoal, profissional, etc...'
END
GO
IF NOT dbo.ddlDescriptionExiste('TiposContatos', 'PessoaFisica') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposContatos', @Coluna = 'PessoaFisica', @Description = 'Se o tipo contato é de Pessoa Física ou Jurídica'
END
GO
IF NOT dbo.ddlDescriptionExiste('TiposContatos', 'Ordem') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposContatos', @Coluna = 'Ordem', @Description = 'Ordem de exibição do Tipo de Contato'
END
GO



/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.TiposEnderecos ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('TiposEnderecos') = 1
BEGIN
	PRINT 'Criando tabela TiposEnderecos...'

	CREATE TABLE [dbo].[TiposEnderecos] (
		[TipoEnderecoID] [int] IDENTITY(1,1) NOT NULL, 
		[TipoEndereco] [varchar](50) NULL, 
		[PessoaFisica] [bit] NULL, 
		[Ordem] [int] NULL, 
	) ON [PRIMARY]
END
GO



/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('TiposEnderecos', 'TipoEndereco') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposEnderecos', @Coluna = 'TipoEndereco', @Description = 'se será residencial, comercial, etc'
END
GO
IF NOT dbo.ddlDescriptionExiste('TiposEnderecos', 'PessoaFisica') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposEnderecos', @Coluna = 'PessoaFisica', @Description = 'Se o tipo de endereço é de Pessoa Física ou Jurídica'
END
GO
IF NOT dbo.ddlDescriptionExiste('TiposEnderecos', 'Ordem') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposEnderecos', @Coluna = 'Ordem', @Description = 'Ordem de exibição do Tipo de Endereço'
END
GO


/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. ***/
/*** Estrutura da tabela dbo.TiposMeiosContatos ***/
/*** Verifica se a tabela existe. Caso nao exista, cria a tabela ***/

IF NOT dbo.ddlTabelaExiste('TiposMeiosContatos') = 1
BEGIN
	PRINT 'Criando tabela TiposMeiosContatos...'

	CREATE TABLE [dbo].[TiposMeiosContatos] (
		[TipoMeioContatoID] [int] IDENTITY(1,1) NOT NULL, 
		[TipoMeioContato] [varchar](50) NOT NULL, 
		[Mascara] [varchar](50) NULL, 
	) ON [PRIMARY]
END
GO

/*** INSERE AS DESCRIÇÕES ***/
IF NOT dbo.ddlDescriptionExiste('TiposMeiosContatos', 'TipoMeioContato') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposMeiosContatos', @Coluna = 'TipoMeioContato', @Description = 'Se é celular, telefone, etc...'
END
GO
IF NOT dbo.ddlDescriptionExiste('TiposMeiosContatos', 'Mascara') = 1
BEGIN
EXEC dbo.ddlInsereDescription @Tabela = 'TiposMeiosContatos', @Coluna = 'Mascara', @Description = 'Máscara do Tipo do Contato.'
END
GO

