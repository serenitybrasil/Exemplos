﻿
namespace Exemplos.Clinica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Clinica.Exceptions")]
    [BasedOnRow(typeof(Entities.ExceptionsRow))]
    public class ExceptionsForm
    {        
        public Guid Guid { get; set; }        
        public String ApplicationName { get; set; }        
        public String MachineName { get; set; }        
        public DateTime CreationDate { get; set; }        
        public String Type { get; set; }        
        public Boolean IsProtected { get; set; }        
        public String Host { get; set; }        
        public String Url { get; set; }        
        public String HttpMethod { get; set; }        
        public String IpAddress { get; set; }        
        public String Source { get; set; }        
        public String Message { get; set; }        
        public String Detail { get; set; }        
        public Int32 StatusCode { get; set; }        
        public String Sql { get; set; }        
        public DateTime DeletionDate { get; set; }        
        public String FullJson { get; set; }        
        public Int32 ErrorHash { get; set; }        
        public Int32 DuplicateCount { get; set; }
    }
}