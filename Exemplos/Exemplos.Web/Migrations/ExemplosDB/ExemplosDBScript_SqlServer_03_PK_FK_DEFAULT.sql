
/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.Contatos ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('Contatos', 'PK_Contatos') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_Contatos na tabela Contatos...'
	ALTER TABLE dbo.Contatos ADD CONSTRAINT PK_Contatos PRIMARY KEY CLUSTERED (ContatoID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.Convenios ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('Convenios', 'PK_Convenios') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_Convenios na tabela Convenios...'
	ALTER TABLE dbo.Convenios ADD CONSTRAINT PK_Convenios PRIMARY KEY CLUSTERED (ConvenioID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.Enderecos ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('Enderecos', 'PK_Enderecos') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_Enderecos na tabela Enderecos...'
	ALTER TABLE dbo.Enderecos ADD CONSTRAINT PK_Enderecos PRIMARY KEY CLUSTERED (EnderecoID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.EstadosCivis ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('EstadosCivis', 'PK_EstadosCivis') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_EstadosCivis na tabela EstadosCivis...'
	ALTER TABLE dbo.EstadosCivis ADD CONSTRAINT PK_EstadosCivis PRIMARY KEY CLUSTERED (EstadoCivilID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.Feriados ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('Fornecedores', 'PK_Fornecedores') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_Fornecedores na tabela Fornecedores...'
	ALTER TABLE dbo.Fornecedores ADD CONSTRAINT PK_Fornecedores PRIMARY KEY CLUSTERED (FornecedorID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.Guias ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('Pacientes', 'PK_FA_PACIENTES') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_FA_PACIENTES na tabela Pacientes...'
	ALTER TABLE dbo.Pacientes ADD CONSTRAINT PK_FA_PACIENTES PRIMARY KEY CLUSTERED (PacienteID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.PacientesConvenios ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('PacientesConvenios', 'PK_PacientesConvenios') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_PacientesConvenios na tabela PacientesConvenios...'
	ALTER TABLE dbo.PacientesConvenios ADD CONSTRAINT PK_PacientesConvenios PRIMARY KEY CLUSTERED (PacienteConvenioID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.PacientesEmissaoNF ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('PacientesEmissaoNF', 'PK_PacientesEmissaoNF') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_PacientesEmissaoNF na tabela PacientesEmissaoNF...'
	ALTER TABLE dbo.PacientesEmissaoNF ADD CONSTRAINT PK_PacientesEmissaoNF PRIMARY KEY CLUSTERED (PacienteEmissaoNF) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.Sexo ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('Sexo', 'PK_Sexo') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_Sexo na tabela Sexo...'
	ALTER TABLE dbo.Sexo ADD CONSTRAINT PK_Sexo PRIMARY KEY CLUSTERED (SexoID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.Status ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('Status', 'PK_Status') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_Status na tabela Status...'
	ALTER TABLE dbo.Status ADD CONSTRAINT PK_Status PRIMARY KEY CLUSTERED (StatusID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.StatusDemonstrativos ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('TiposContatos', 'PK_TiposContatos') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_TiposContatos na tabela TiposContatos...'
	ALTER TABLE dbo.TiposContatos ADD CONSTRAINT PK_TiposContatos PRIMARY KEY CLUSTERED (TipoContatoID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.TiposEnderecos ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('TiposEnderecos', 'PK_TiposEnderecos') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_TiposEnderecos na tabela TiposEnderecos...'
	ALTER TABLE dbo.TiposEnderecos ADD CONSTRAINT PK_TiposEnderecos PRIMARY KEY CLUSTERED (TipoEnderecoID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Constraints (Primary Key/Unique Indexes) da tabela dbo.TiposEnvolvimentos ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlIndiceExiste('TiposMeiosContatos', 'PK_TiposMeiosContatos') = 1
BEGIN
	PRINT 'Criando PrimaryKey PK_TiposMeiosContatos na tabela TiposMeiosContatos...'
	ALTER TABLE dbo.TiposMeiosContatos ADD CONSTRAINT PK_TiposMeiosContatos PRIMARY KEY CLUSTERED (TipoMeioContatoID) ON [PRIMARY]
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Verifica se a PrimaryKey existe. Caso nao exista, cria a PrimaryKey ***/

IF NOT dbo.ddlFKExiste('Contatos', 'FK_Contatos_Convenios') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Contatos_Convenios na tabela Contatos...'
	ALTER TABLE dbo.Contatos WITH CHECK ADD CONSTRAINT FK_Contatos_Convenios 
	FOREIGN KEY(ConvenioID)
	REFERENCES dbo.Convenios (ConvenioID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('Contatos', 'FK_Contatos_Pacientes') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Contatos_Pacientes na tabela Contatos...'
	ALTER TABLE dbo.Contatos WITH CHECK ADD CONSTRAINT FK_Contatos_Pacientes 
	FOREIGN KEY(PacienteID)
	REFERENCES dbo.Pacientes (PacienteID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('Contatos', 'FK_Contatos_TiposContatos') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Contatos_TiposContatos na tabela Contatos...'
	ALTER TABLE dbo.Contatos WITH CHECK ADD CONSTRAINT FK_Contatos_TiposContatos 
	FOREIGN KEY(TipoContatoID)
	REFERENCES dbo.TiposContatos (TipoContatoID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('Contatos', 'FK_Contatos_TiposMeiosContatos') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Contatos_TiposMeiosContatos na tabela Contatos...'
	ALTER TABLE dbo.Contatos WITH CHECK ADD CONSTRAINT FK_Contatos_TiposMeiosContatos 
	FOREIGN KEY(TipoMeioContatoID)
	REFERENCES dbo.TiposMeiosContatos (TipoMeioContatoID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Estrutura da tabela dbo.ConveniosEmissaoNF ***/
/*** Verifica se a ForeignKey existe. Caso nao exista, cria a ForeignKey ***/

IF NOT dbo.ddlFKExiste('Enderecos', 'FK_Enderecos_Convenios') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Enderecos_Convenios na tabela Enderecos...'
	ALTER TABLE dbo.Enderecos WITH CHECK ADD CONSTRAINT FK_Enderecos_Convenios 
	FOREIGN KEY(ConvenioID)
	REFERENCES dbo.Convenios (ConvenioID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('Enderecos', 'FK_Enderecos_Fornecedores') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Enderecos_Fornecedores na tabela Enderecos...'
	ALTER TABLE dbo.Enderecos WITH CHECK ADD CONSTRAINT FK_Enderecos_Fornecedores 
	FOREIGN KEY(FornecedorID)
	REFERENCES dbo.Fornecedores (FornecedorID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('Enderecos', 'FK_Enderecos_Pacientes') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Enderecos_Pacientes na tabela Enderecos...'
	ALTER TABLE dbo.Enderecos WITH CHECK ADD CONSTRAINT FK_Enderecos_Pacientes 
	FOREIGN KEY(PacienteID)
	REFERENCES dbo.Pacientes (PacienteID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('Enderecos', 'FK_Enderecos_TiposEnderecos') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Enderecos_TiposEnderecos na tabela Enderecos...'
	ALTER TABLE dbo.Enderecos WITH CHECK ADD CONSTRAINT FK_Enderecos_TiposEnderecos 
	FOREIGN KEY(TipoEnderecoID)
	REFERENCES dbo.TiposEnderecos (TipoEnderecoID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Estrutura da tabela dbo.Pacientes ***/
/*** Verifica se a ForeignKey existe. Caso nao exista, cria a ForeignKey ***/

IF NOT dbo.ddlFKExiste('Pacientes', 'FK_Pacientes_Sexo') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Pacientes_Sexo na tabela Pacientes...'
	ALTER TABLE dbo.Pacientes WITH CHECK ADD CONSTRAINT FK_Pacientes_Sexo 
	FOREIGN KEY(SexoID)
	REFERENCES dbo.Sexo (SexoID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('Pacientes', 'FK_Pacientes_Status') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_Pacientes_Status na tabela Pacientes...'
	ALTER TABLE dbo.Pacientes WITH CHECK ADD CONSTRAINT FK_Pacientes_Status 
	FOREIGN KEY(StatusID)
	REFERENCES dbo.Status (StatusID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Estrutura da tabela dbo.PacientesConvenios ***/
/*** Verifica se a ForeignKey existe. Caso nao exista, cria a ForeignKey ***/

IF NOT dbo.ddlFKExiste('PacientesConvenios', 'FK_PacientesConvenios_Convenios') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_PacientesConvenios_Convenios na tabela PacientesConvenios...'
	ALTER TABLE dbo.PacientesConvenios WITH CHECK ADD CONSTRAINT FK_PacientesConvenios_Convenios 
	FOREIGN KEY(ConvenioID)
	REFERENCES dbo.Convenios (ConvenioID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('PacientesConvenios', 'FK_PacientesConvenios_Pacientes') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_PacientesConvenios_Pacientes na tabela PacientesConvenios...'
	ALTER TABLE dbo.PacientesConvenios WITH CHECK ADD CONSTRAINT FK_PacientesConvenios_Pacientes 
	FOREIGN KEY(PacienteID)
	REFERENCES dbo.Pacientes (PacienteID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
/*** Estrutura da tabela dbo.PacientesEmissaoNF ***/
/*** Verifica se a ForeignKey existe. Caso nao exista, cria a ForeignKey ***/

IF NOT dbo.ddlFKExiste('PacientesEmissaoNF', 'FK_PacientesEmissaoNF_Pacientes') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_PacientesEmissaoNF_Pacientes na tabela PacientesEmissaoNF...'
	ALTER TABLE dbo.PacientesEmissaoNF WITH CHECK ADD CONSTRAINT FK_PacientesEmissaoNF_Pacientes 
	FOREIGN KEY(PacienteID)
	REFERENCES dbo.Pacientes (PacienteID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/
IF NOT dbo.ddlFKExiste('PacientesEmissaoNF', 'FK_PacientesEmissaoNF_TiposEnderecos') = 1
BEGIN
	PRINT 'Criando ForeignKey FK_PacientesEmissaoNF_TiposEnderecos na tabela PacientesEmissaoNF...'
	ALTER TABLE dbo.PacientesEmissaoNF WITH CHECK ADD CONSTRAINT FK_PacientesEmissaoNF_TiposEnderecos 
	FOREIGN KEY(TipoEnderecoID)
	REFERENCES dbo.TiposEnderecos (TipoEnderecoID)
END
GO

/*** Fim do output do Clinica_Exemplos_v1 MS SQL Dumper. Alterações, por favor, abaixo desta linha. ***/