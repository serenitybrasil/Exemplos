SET DATEFORMAT DMY;
GO
/******************* INSERE DADOS INICIAIS - TABELA Convenios *******************/
SET IDENTITY_INSERT dbo.Convenios ON;
GO
IF  NOT EXISTS (SELECT * FROM Convenios where Convenios.[CNPJ] = NULL)
	INSERT INTO [Convenios] ([ConvenioID], [CNPJ], [RazaoSocial], [NomeFantasia], [CodigoANS], [CadastroConvenio], [Logo], [InscricaoMunicipal], [InscricaoEstadual], [Site], [DataInicio], [Inativo], [DataFim], [MotivoCancelamento], [Observacao], [VersaoTISS], [WebService], [SADT_SOL_CONTRATADO_ID], [SADT_EXECUTANTE_ID], [SADT_PROFISSIONALEXECUTANTE], [SADT_MEMBRO_EQUIPE], [ID_ORIGEM], [ID_DESTINO], [ORIGEM_ID_PRESTADOR], [DESTINO_ID_PRESTADOR], [ID_LOGO], [GERA_TISS], [DataCadastro], [DataUltimaAtualizacao], [Latitude], [Longitude], [EmailNotaFiscal], [EmailContato], [EmailFaturamento], [EmailGlosa]) VALUES (1, NULL, 'CONVENIO 01', 'CONV01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)

IF  NOT EXISTS (SELECT * FROM Convenios where Convenios.[CNPJ] = NULL)
	INSERT INTO [Convenios] ([ConvenioID], [CNPJ], [RazaoSocial], [NomeFantasia], [CodigoANS], [CadastroConvenio], [Logo], [InscricaoMunicipal], [InscricaoEstadual], [Site], [DataInicio], [Inativo], [DataFim], [MotivoCancelamento], [Observacao], [VersaoTISS], [WebService], [SADT_SOL_CONTRATADO_ID], [SADT_EXECUTANTE_ID], [SADT_PROFISSIONALEXECUTANTE], [SADT_MEMBRO_EQUIPE], [ID_ORIGEM], [ID_DESTINO], [ORIGEM_ID_PRESTADOR], [DESTINO_ID_PRESTADOR], [ID_LOGO], [GERA_TISS], [DataCadastro], [DataUltimaAtualizacao], [Latitude], [Longitude], [EmailNotaFiscal], [EmailContato], [EmailFaturamento], [EmailGlosa]) VALUES (2, NULL, 'CONVENIO 02', 'CONV02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)

IF  NOT EXISTS (SELECT * FROM Convenios where Convenios.[CNPJ] = NULL)
	INSERT INTO [Convenios] ([ConvenioID], [CNPJ], [RazaoSocial], [NomeFantasia], [CodigoANS], [CadastroConvenio], [Logo], [InscricaoMunicipal], [InscricaoEstadual], [Site], [DataInicio], [Inativo], [DataFim], [MotivoCancelamento], [Observacao], [VersaoTISS], [WebService], [SADT_SOL_CONTRATADO_ID], [SADT_EXECUTANTE_ID], [SADT_PROFISSIONALEXECUTANTE], [SADT_MEMBRO_EQUIPE], [ID_ORIGEM], [ID_DESTINO], [ORIGEM_ID_PRESTADOR], [DESTINO_ID_PRESTADOR], [ID_LOGO], [GERA_TISS], [DataCadastro], [DataUltimaAtualizacao], [Latitude], [Longitude], [EmailNotaFiscal], [EmailContato], [EmailFaturamento], [EmailGlosa]) VALUES (3, NULL, 'PARTICULAR', 'PART', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)

SET IDENTITY_INSERT dbo.Convenios OFF;
GO

/******************* INSERE DADOS INICIAIS - TABELA EstadosCivis *******************/
SET IDENTITY_INSERT dbo.EstadosCivis ON;
GO
IF  NOT EXISTS (SELECT * FROM EstadosCivis where EstadosCivis.[Descricao] = 'Solteiro')
	INSERT INTO [EstadosCivis] ([EstadoCivilID], [Descricao]) VALUES (1, 'Solteiro')

IF  NOT EXISTS (SELECT * FROM EstadosCivis where EstadosCivis.[Descricao] = 'Casado')
	INSERT INTO [EstadosCivis] ([EstadoCivilID], [Descricao]) VALUES (2, 'Casado')

IF  NOT EXISTS (SELECT * FROM EstadosCivis where EstadosCivis.[Descricao] = 'Divorciado')
	INSERT INTO [EstadosCivis] ([EstadoCivilID], [Descricao]) VALUES (3, 'Divorciado')

IF  NOT EXISTS (SELECT * FROM EstadosCivis where EstadosCivis.[Descricao] = 'Separado')
	INSERT INTO [EstadosCivis] ([EstadoCivilID], [Descricao]) VALUES (4, 'Separado')


SET IDENTITY_INSERT dbo.EstadosCivis OFF;
GO

/******************* INSERE DADOS INICIAIS - TABELA Fornecedores *******************/
SET IDENTITY_INSERT dbo.Fornecedores ON;
GO
IF  NOT EXISTS (SELECT * FROM Fornecedores where Fornecedores.[RazaoSocial] = 'rerwe')
	INSERT INTO [Fornecedores] ([FornecedorID], [Status], [PessoaJuridica], [RazaoSocial], [NomeFantasia], [NomeAbreviado], [CPF], [RG], [CNPJ], [InscricaoEstadual], [InscricaoMunicipal], [Site], [Telefone], [Fax], [TelefoneAlternativo], [EmailCorporativo], [AceitaReceberEmail], [MotivoStatus], [QuantidadeEmpregados], [AtividadeEmpresaID], [ReceitaAnual], [MarcasTrabalhadas], [ObservacoesGerais], [DataCriacao], [DataAlteracao], [Inativo], [DataInativo]) VALUES (1, 0, 0, 'FORNECEDOR SA', 'FORNECEDOR', 'FORN', '213.321.312-31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, 123.31, NULL, NULL, NULL, NULL, 0, NULL)


SET IDENTITY_INSERT dbo.Fornecedores OFF;
GO

/******************* INSERE DADOS INICIAIS - TABELA Sexo *******************/
SET IDENTITY_INSERT dbo.Sexo ON;
GO
IF  NOT EXISTS (SELECT * FROM Sexo where Sexo.[Sexo] = 'MASCULINO')
	INSERT INTO [Sexo] ([SexoID], [Sexo], [Abreviatura]) VALUES (1, 'MASCULINO', 'M')

IF  NOT EXISTS (SELECT * FROM Sexo where Sexo.[Sexo] = 'FEMININO')
	INSERT INTO [Sexo] ([SexoID], [Sexo], [Abreviatura]) VALUES (2, 'FEMININO', 'F')


SET IDENTITY_INSERT dbo.Sexo OFF;
GO

/******************* INSERE DADOS INICIAIS - TABELA Status *******************/
SET IDENTITY_INSERT dbo.Status ON;
GO
IF  NOT EXISTS (SELECT * FROM Status where Status.[Status] = 'AVULSO')
	INSERT INTO [Status] ([StatusID], [Status]) VALUES (1, 'AVULSO')

IF  NOT EXISTS (SELECT * FROM Status where Status.[Status] = 'CRONICO - ESPECIAL')
	INSERT INTO [Status] ([StatusID], [Status]) VALUES (2, 'CRONICO - ESPECIAL')

IF  NOT EXISTS (SELECT * FROM Status where Status.[Status] = 'INATIVO')
	INSERT INTO [Status] ([StatusID], [Status]) VALUES (3, 'INATIVO')


SET IDENTITY_INSERT dbo.Status OFF;
GO

/******************* INSERE DADOS INICIAIS - TABELA TiposContatos *******************/
SET IDENTITY_INSERT dbo.TiposContatos ON;
GO
IF  NOT EXISTS (SELECT * FROM TiposContatos where TiposContatos.[TipoContato] = 'Pessoal')
	INSERT INTO [TiposContatos] ([TipoContatoID], [TipoContato], [PessoaFisica], [Ordem]) VALUES (0, 'Pessoal', 1, 1)

IF  NOT EXISTS (SELECT * FROM TiposContatos where TiposContatos.[TipoContato] = 'Profissional')
	INSERT INTO [TiposContatos] ([TipoContatoID], [TipoContato], [PessoaFisica], [Ordem]) VALUES (1, 'Profissional', 1, 2)

IF  NOT EXISTS (SELECT * FROM TiposContatos where TiposContatos.[TipoContato] = 'Relacionamento')
	INSERT INTO [TiposContatos] ([TipoContatoID], [TipoContato], [PessoaFisica], [Ordem]) VALUES (2, 'Relacionamento', 1, 3)

IF  NOT EXISTS (SELECT * FROM TiposContatos where TiposContatos.[TipoContato] = 'Pessoal')
	INSERT INTO [TiposContatos] ([TipoContatoID], [TipoContato], [PessoaFisica], [Ordem]) VALUES (3, 'Pessoal', 1, 1)

IF  NOT EXISTS (SELECT * FROM TiposContatos where TiposContatos.[TipoContato] = 'Profissional')
	INSERT INTO [TiposContatos] ([TipoContatoID], [TipoContato], [PessoaFisica], [Ordem]) VALUES (4, 'Profissional', 1, 2)

IF  NOT EXISTS (SELECT * FROM TiposContatos where TiposContatos.[TipoContato] = 'E-mail')
	INSERT INTO [TiposContatos] ([TipoContatoID], [TipoContato], [PessoaFisica], [Ordem]) VALUES (5, 'E-mail', 1, 3)


SET IDENTITY_INSERT dbo.TiposContatos OFF;
GO

/******************* INSERE DADOS INICIAIS - TABELA TiposEnderecos *******************/
SET IDENTITY_INSERT dbo.TiposEnderecos ON;
GO
IF  NOT EXISTS (SELECT * FROM TiposEnderecos where TiposEnderecos.[TipoEndereco] = 'Comercial')
	INSERT INTO [TiposEnderecos] ([TipoEnderecoID], [TipoEndereco], [PessoaFisica], [Ordem]) VALUES (0, 'Comercial', 1, 1)

IF  NOT EXISTS (SELECT * FROM TiposEnderecos where TiposEnderecos.[TipoEndereco] = 'Residencial')
	INSERT INTO [TiposEnderecos] ([TipoEnderecoID], [TipoEndereco], [PessoaFisica], [Ordem]) VALUES (1, 'Residencial', 1, 1)


SET IDENTITY_INSERT dbo.TiposEnderecos OFF;
GO

/******************* INSERE DADOS INICIAIS - TABELA TiposMeiosContatos *******************/
SET IDENTITY_INSERT dbo.TiposMeiosContatos ON;
GO
IF  NOT EXISTS (SELECT * FROM TiposMeiosContatos where TiposMeiosContatos.[TipoMeioContato] = 'Telefone fixo')
	INSERT INTO [TiposMeiosContatos] ([TipoMeioContatoID], [TipoMeioContato], [Mascara]) VALUES (0, 'Telefone fixo', '(99) 9999-9999')

IF  NOT EXISTS (SELECT * FROM TiposMeiosContatos where TiposMeiosContatos.[TipoMeioContato] = 'celular')
	INSERT INTO [TiposMeiosContatos] ([TipoMeioContatoID], [TipoMeioContato], [Mascara]) VALUES (1, 'celular', '(99) 99999-9999')

IF  NOT EXISTS (SELECT * FROM TiposMeiosContatos where TiposMeiosContatos.[TipoMeioContato] = 'fax')
	INSERT INTO [TiposMeiosContatos] ([TipoMeioContatoID], [TipoMeioContato], [Mascara]) VALUES (2, 'fax', '(99) 9999-9999')

IF  NOT EXISTS (SELECT * FROM TiposMeiosContatos where TiposMeiosContatos.[TipoMeioContato] = 'Recado')
	INSERT INTO [TiposMeiosContatos] ([TipoMeioContatoID], [TipoMeioContato], [Mascara]) VALUES (3, 'Recado', '(99) 9999-9999')

IF  NOT EXISTS (SELECT * FROM TiposMeiosContatos where TiposMeiosContatos.[TipoMeioContato] = 'E-mail')
	INSERT INTO [TiposMeiosContatos] ([TipoMeioContatoID], [TipoMeioContato], [Mascara]) VALUES (4, 'E-mail', NULL)


SET IDENTITY_INSERT dbo.TiposMeiosContatos OFF;
GO
