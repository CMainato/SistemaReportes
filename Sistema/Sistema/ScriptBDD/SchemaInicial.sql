/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2012                    */
/* Created on:     15/12/2022 17:42:42                          */
/*==============================================================*/


/*==============================================================*/
/* Table: APROBACIONES                                          */
/*==============================================================*/
create table APROBACIONES (
   IDAPROBACIONES       numeric              identity,
   IDQUERY              numeric              null,
   IDPERSONA            numeric              null,
   OBSERVACION          varchar(500)         null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   constraint PK_APROBACIONES primary key nonclustered (IDAPROBACIONES)
)
go

/*==============================================================*/
/* Index: PERSONA_ABROBACION_FK                                 */
/*==============================================================*/
create index PERSONA_ABROBACION_FK on APROBACIONES (
IDPERSONA ASC
)
go

/*==============================================================*/
/* Index: APROBACIONES_QUERY_FK                                 */
/*==============================================================*/
create index APROBACIONES_QUERY_FK on APROBACIONES (
IDQUERY ASC
)
go

/*==============================================================*/
/* Table: CAMPANA                                               */
/*==============================================================*/
create table CAMPANA (
   IDCAMPANA            numeric              identity,
   NOMBRE               varchar(250)         null,
   IDEXTERNO            int                  null,
   DESCRIPCION          varchar(2000)        null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   constraint PK_CAMPANA primary key nonclustered (IDCAMPANA)
)
go

/*==============================================================*/
/* Table: CONEXIONES                                            */
/*==============================================================*/
create table CONEXIONES (
   IDCONEXIONES         numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   CADENA               varchar(250)         null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_CONEXIONES primary key nonclustered (IDCONEXIONES)
)
go

/*==============================================================*/
/* Table: CONEXIONES_QUERY                                      */
/*==============================================================*/
create table CONEXIONES_QUERY (
   IDQUERY              numeric              not null,
   IDCONEXIONES         numeric              not null,
   constraint PK_CONEXIONES_QUERY primary key (IDQUERY, IDCONEXIONES)
)
go

/*==============================================================*/
/* Index: CONEXIONES_QUERY_FK                                   */
/*==============================================================*/
create index CONEXIONES_QUERY_FK on CONEXIONES_QUERY (
IDQUERY ASC
)
go

/*==============================================================*/
/* Index: CONEXIONES_QUERY2_FK                                  */
/*==============================================================*/
create index CONEXIONES_QUERY2_FK on CONEXIONES_QUERY (
IDCONEXIONES ASC
)
go

/*==============================================================*/
/* Table: CORREOSDESTINATORIOS                                  */
/*==============================================================*/
create table CORREOSDESTINATORIOS (
   IDCORREO             numeric              identity,
   CORREO               varchar(250)         null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_CORREOSDESTINATORIOS primary key nonclustered (IDCORREO)
)
go

/*==============================================================*/
/* Table: DIAFRECUENCIA                                         */
/*==============================================================*/
create table DIAFRECUENCIA (
   ID                   numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   INTERVALO            varchar(250)         null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_DIAFRECUENCIA primary key nonclustered (ID)
)
go

/*==============================================================*/
/* Table: ESTADOS                                               */
/*==============================================================*/
create table ESTADOS (
   IDESTADO             numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   ESTADO               bit                  null,
   constraint PK_ESTADOS primary key nonclustered (IDESTADO)
)
go

/*==============================================================*/
/* Table: FORMATOS                                              */
/*==============================================================*/
create table FORMATOS (
   IDFORMATO            numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   EXTENSION            varchar(50)          null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_FORMATOS primary key nonclustered (IDFORMATO)
)
go

/*==============================================================*/
/* Table: FORMATO_QUERY                                         */
/*==============================================================*/
create table FORMATO_QUERY (
   IDFORMATO            numeric              not null,
   IDQUERY              numeric              not null,
   ETIQUETA             varchar(250)         null,
   constraint PK_FORMATO_QUERY primary key (IDFORMATO, IDQUERY)
)
go

/*==============================================================*/
/* Index: FORMATO_QUERY_FK                                      */
/*==============================================================*/
create index FORMATO_QUERY_FK on FORMATO_QUERY (
IDFORMATO ASC
)
go

/*==============================================================*/
/* Index: FORMATO_QUERY2_FK                                     */
/*==============================================================*/
create index FORMATO_QUERY2_FK on FORMATO_QUERY (
IDQUERY ASC
)
go

/*==============================================================*/
/* Table: FRECUECNIAS_DIA                                       */
/*==============================================================*/
create table FRECUECNIAS_DIA (
   IDFRECUENCIA         numeric              not null,
   ID                   numeric              not null,
   constraint PK_FRECUECNIAS_DIA primary key (IDFRECUENCIA, ID)
)
go

/*==============================================================*/
/* Index: FRECUECNIAS_DIA_FK                                    */
/*==============================================================*/
create index FRECUECNIAS_DIA_FK on FRECUECNIAS_DIA (
IDFRECUENCIA ASC
)
go

/*==============================================================*/
/* Index: FRECUECNIAS_DIA2_FK                                   */
/*==============================================================*/
create index FRECUECNIAS_DIA2_FK on FRECUECNIAS_DIA (
ID ASC
)
go

/*==============================================================*/
/* Table: FRECUENCIA                                            */
/*==============================================================*/
create table FRECUENCIA (
   IDFRECUENCIA         numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_FRECUENCIA primary key nonclustered (IDFRECUENCIA)
)
go

/*==============================================================*/
/* Table: LOG                                                   */
/*==============================================================*/
create table LOG (
   IDLOG                char(10)             not null,
   IDQUERY              numeric              null,
   DESCRIPCION          varchar(2000)        null,
   FECHA_EJECUCION      varchar(250)         null,
   RESULTADO            varchar(250)         null,
   MENSAJE              varchar(250)         null,
   REGISTROS_GENERADOS  int                  null,
   constraint PK_LOG primary key nonclustered (IDLOG)
)
go

/*==============================================================*/
/* Index: LOG_QUERY2_FK                                         */
/*==============================================================*/
create index LOG_QUERY2_FK on LOG (
IDQUERY ASC
)
go

/*==============================================================*/
/* Table: MENU                                                  */
/*==============================================================*/
create table MENU (
   IDMENU               numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   MENU                 varchar(250)         null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_MENU primary key nonclustered (IDMENU)
)
go

/*==============================================================*/
/* Table: MENUS_ROL                                             */
/*==============================================================*/
create table MENUS_ROL (
   IDROL                numeric              not null,
   IDMENU               numeric              not null,
   constraint PK_MENUS_ROL primary key (IDROL, IDMENU)
)
go

/*==============================================================*/
/* Index: MENUS_ROL_FK                                          */
/*==============================================================*/
create index MENUS_ROL_FK on MENUS_ROL (
IDROL ASC
)
go

/*==============================================================*/
/* Index: MENUS_ROL2_FK                                         */
/*==============================================================*/
create index MENUS_ROL2_FK on MENUS_ROL (
IDMENU ASC
)
go

/*==============================================================*/
/* Table: PARAMETROS                                            */
/*==============================================================*/
create table PARAMETROS (
   IDPARAMETROS         numeric              identity,
   NOMBRRE              varchar(250)         not null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_PARAMETROS primary key nonclustered (IDPARAMETROS)
)
go

/*==============================================================*/
/* Table: PERSONA                                               */
/*==============================================================*/
create table PERSONA (
   IDPERSONA            numeric              identity,
   IDROL                numeric              null,
   IDENTIFICACION       varchar(250)         null,
   NOMBRE               varchar(250)         null,
   CORREO               varchar(250)         null,
   USUARIO              varchar(250)         null,
   CLAVE                varchar(250)         null,
   TELEFONO             varchar(250)         null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_PERSONA primary key nonclustered (IDPERSONA)
)
go

/*==============================================================*/
/* Index: ROL_PERSONA_FK                                        */
/*==============================================================*/
create index ROL_PERSONA_FK on PERSONA (
IDROL ASC
)
go

/*==============================================================*/
/* Table: QUERY                                                 */
/*==============================================================*/
create table QUERY (
   IDQUERY              numeric              identity,
   IDCAMPANA            numeric              null,
   IDFRECUENCIA         numeric              null,
   IDLOG                char(10)             null,
   NOMBRE               varchar(250)         not null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_QUERY primary key nonclustered (IDQUERY)
)
go

/*==============================================================*/
/* Index: CAMPANA_QUERY_FK                                      */
/*==============================================================*/
create index CAMPANA_QUERY_FK on QUERY (
IDCAMPANA ASC
)
go

/*==============================================================*/
/* Index: QUERY_FRECUENCIA_FK                                   */
/*==============================================================*/
create index QUERY_FRECUENCIA_FK on QUERY (
IDFRECUENCIA ASC
)
go

/*==============================================================*/
/* Index: LOG_QUERY_FK                                          */
/*==============================================================*/
create index LOG_QUERY_FK on QUERY (
IDLOG ASC
)
go

/*==============================================================*/
/* Table: QUERY_CORREOS                                         */
/*==============================================================*/
create table QUERY_CORREOS (
   IDQUERY              numeric              not null,
   IDCORREO             numeric              not null,
   constraint PK_QUERY_CORREOS primary key (IDQUERY, IDCORREO)
)
go

/*==============================================================*/
/* Index: QUERY_CORREOS_FK                                      */
/*==============================================================*/
create index QUERY_CORREOS_FK on QUERY_CORREOS (
IDQUERY ASC
)
go

/*==============================================================*/
/* Index: QUERY_CORREOS2_FK                                     */
/*==============================================================*/
create index QUERY_CORREOS2_FK on QUERY_CORREOS (
IDCORREO ASC
)
go

/*==============================================================*/
/* Table: QUERY_PARAMETROS                                      */
/*==============================================================*/
create table QUERY_PARAMETROS (
   IDQUERY              numeric              not null,
   IDPARAMETROS         numeric              not null,
   constraint PK_QUERY_PARAMETROS primary key (IDQUERY, IDPARAMETROS)
)
go

/*==============================================================*/
/* Index: QUERY_PARAMETROS_FK                                   */
/*==============================================================*/
create index QUERY_PARAMETROS_FK on QUERY_PARAMETROS (
IDQUERY ASC
)
go

/*==============================================================*/
/* Index: QUERY_PARAMETROS2_FK                                  */
/*==============================================================*/
create index QUERY_PARAMETROS2_FK on QUERY_PARAMETROS (
IDPARAMETROS ASC
)
go

/*==============================================================*/
/* Table: QUERY_REPOSITORIOS                                    */
/*==============================================================*/
create table QUERY_REPOSITORIOS (
   IDQUERY              numeric              not null,
   IDRESPOSITORIO       numeric              not null,
   constraint PK_QUERY_REPOSITORIOS primary key (IDQUERY, IDRESPOSITORIO)
)
go

/*==============================================================*/
/* Index: QUERY_REPOSITORIOS_FK                                 */
/*==============================================================*/
create index QUERY_REPOSITORIOS_FK on QUERY_REPOSITORIOS (
IDQUERY ASC
)
go

/*==============================================================*/
/* Index: QUERY_REPOSITORIOS2_FK                                */
/*==============================================================*/
create index QUERY_REPOSITORIOS2_FK on QUERY_REPOSITORIOS (
IDRESPOSITORIO ASC
)
go

/*==============================================================*/
/* Table: REPOSITORIOS                                          */
/*==============================================================*/
create table REPOSITORIOS (
   IDRESPOSITORIO       numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   URL                  varchar(500)         null,
   USUARIO              varchar(250)         null,
   CLAVE                varchar(250)         null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_REPOSITORIOS primary key nonclustered (IDRESPOSITORIO)
)
go

/*==============================================================*/
/* Table: ROL                                                   */
/*==============================================================*/
create table ROL (
   IDROL                numeric              identity,
   DESCRIPCION          varchar(2000)        null,
   FECHA_CREACION       datetime             null,
   USUARIO_CREACION     int                  null,
   FECHA_MODIFICACION   datetime             null,
   USUARIO_MODIFICACION int                  null,
   ESTADO               bit                  null,
   constraint PK_ROL primary key nonclustered (IDROL)
)
go

/*==============================================================*/
/* Table: CONFIGURACIONES                                       */
/*==============================================================*/
create table CONFIGURACIONES (
   IDCONFIGURACION      numeric              identity,
   DESCRIPCION          varchar(250)         not null,
   VALOR                varchar(500)         not null,
   constraint PK_CONFIGURACIONES primary key nonclustered (IDCONFIGURACION)
)
go


alter table APROBACIONES
   add constraint FK_APROBACI_APROBACIO_QUERY foreign key (IDQUERY)
      references QUERY (IDQUERY)
go

alter table APROBACIONES
   add constraint FK_APROBACI_PERSONA_A_PERSONA foreign key (IDPERSONA)
      references PERSONA (IDPERSONA)
go

alter table CONEXIONES_QUERY
   add constraint FK_CONEXION_CONEXIONE_QUERY foreign key (IDQUERY)
      references QUERY (IDQUERY)
go

alter table CONEXIONES_QUERY
   add constraint FK_CONEXION_CONEXIONE_CONEXION foreign key (IDCONEXIONES)
      references CONEXIONES (IDCONEXIONES)
go

alter table FORMATO_QUERY
   add constraint FK_FORMATO__FORMATO_Q_FORMATOS foreign key (IDFORMATO)
      references FORMATOS (IDFORMATO)
go

alter table FORMATO_QUERY
   add constraint FK_FORMATO__FORMATO_Q_QUERY foreign key (IDQUERY)
      references QUERY (IDQUERY)
go

alter table FRECUECNIAS_DIA
   add constraint FK_FRECUECN_FRECUECNI_FRECUENC foreign key (IDFRECUENCIA)
      references FRECUENCIA (IDFRECUENCIA)
go

alter table FRECUECNIAS_DIA
   add constraint FK_FRECUECN_FRECUECNI_DIAFRECU foreign key (ID)
      references DIAFRECUENCIA (ID)
go

alter table LOG
   add constraint FK_LOG_LOG_QUERY_QUERY foreign key (IDQUERY)
      references QUERY (IDQUERY)
go

alter table MENUS_ROL
   add constraint FK_MENUS_RO_MENUS_ROL_ROL foreign key (IDROL)
      references ROL (IDROL)
go

alter table MENUS_ROL
   add constraint FK_MENUS_RO_MENUS_ROL_MENU foreign key (IDMENU)
      references MENU (IDMENU)
go

alter table PERSONA
   add constraint FK_PERSONA_ROL_PERSO_ROL foreign key (IDROL)
      references ROL (IDROL)
go

alter table QUERY
   add constraint FK_QUERY_CAMPANA_Q_CAMPANA foreign key (IDCAMPANA)
      references CAMPANA (IDCAMPANA)
go

alter table QUERY
   add constraint FK_QUERY_LOG_QUERY_LOG foreign key (IDLOG)
      references LOG (IDLOG)
go

alter table QUERY
   add constraint FK_QUERY_QUERY_FRE_FRECUENC foreign key (IDFRECUENCIA)
      references FRECUENCIA (IDFRECUENCIA)
go

alter table QUERY_CORREOS
   add constraint FK_QUERY_CO_QUERY_COR_QUERY foreign key (IDQUERY)
      references QUERY (IDQUERY)
go

alter table QUERY_CORREOS
   add constraint FK_QUERY_CO_QUERY_COR_CORREOSD foreign key (IDCORREO)
      references CORREOSDESTINATORIOS (IDCORREO)
go

alter table QUERY_PARAMETROS
   add constraint FK_QUERY_PA_QUERY_PAR_QUERY foreign key (IDQUERY)
      references QUERY (IDQUERY)
go

alter table QUERY_PARAMETROS
   add constraint FK_QUERY_PA_QUERY_PAR_PARAMETR foreign key (IDPARAMETROS)
      references PARAMETROS (IDPARAMETROS)
go

alter table QUERY_REPOSITORIOS
   add constraint FK_QUERY_RE_QUERY_REP_QUERY foreign key (IDQUERY)
      references QUERY (IDQUERY)
go

alter table QUERY_REPOSITORIOS
   add constraint FK_QUERY_RE_QUERY_REP_REPOSITO foreign key (IDRESPOSITORIO)
      references REPOSITORIOS (IDRESPOSITORIO)
go

