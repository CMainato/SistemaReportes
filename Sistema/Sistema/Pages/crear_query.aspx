<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="crear_query.aspx.cs" Inherits="Sistema.Pages.crear_query" %>
<asp:Content ID="Content1" ContentPlaceHolderID="title" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">


</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="body" runat="server">

  <br />


           
   <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
       <h5 class="card-header">Crear Nuevo Query</h5>

 <br />
           <div class="form-group">
 <label for="inputEmail">Ingrese  Nombre del Sp "Procedimiento Alamacenado"</label>
 <br />
 <asp:TextBox ID="cnombre"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
 
                                             <div class="form-group">
                                            <label for="inputEmail">Seleccione Un Conexion</label>
                                    
                              
                            <asp:DropDownList ID="conexiones" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"                    >  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>
           <div class="form-group">
                                            <label for="inputEmail">Seleccione Una Campaña</label>
                                    
                              
                            <asp:DropDownList ID="campana" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"                    >  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>

   <div class="form-group">
                                            <label for="inputEmail">Seleccione Una Frecuencia</label>
                                    
                              
                            <asp:DropDownList ID="frecuencia" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"                    >  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>



                                             <div class="form-group">
                                            <label for="inputEmail">Seleccione Un Estado</label>
                                    
                              
                            <asp:DropDownList ID="estado" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"                    >  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>



            
          
    
                                        <div class="row">
                                          
                                            <div class="col-sm-6 pl-0">
                                                <p class="text-right">
                                                   <asp:Button ID="btncargar" runat="server" Text="Ingresar" CssClass="btn btn-success" Visible ="TRUE" OnClick="btncargar_Click" />
                                              
         

                                                    <%--<button class="btn btn-space btn-secondary">Cancel</button>--%>
                                                </p>
                                            </div>
                                        </div>
                                   
                             



                                 
                                </div>
        


    </div>
  </div>





  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      
      
                                  <h5 class="card-header">Parametrizar Query</h5>
                                <div class="card-body">
                                   
                                       <div class="form-group">
                                            <label for="inputEmail">Seleccione un Query</label>
                                    
                              
                            <asp:DropDownList ID="queryc" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"                    >  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>

                                          <div class="form-group">
                                            <label for="inputEmail">Seleccione los Parametros</label>
                                    
                              
                            <asp:DropDownList ID="parametrosq" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"                    >  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>

                                        
                                       
                                        <div class="form-group row">
                                           
                                                                                       
                 <asp:GridView ID="tablaparametros" runat="server"   >
                        </asp:GridView>

                                        </div>
                                       
                           

                                     
                            
                                </div>


      </div>
    </div>
  </div>



       

  <div class="col-sm-12">
    <div class="card">
      <div class="card-body">
      
      
                                  <h5 class="card-header">Configuracion Procedimiento Almacenado "Query"</h5>
                                <div class="card-body">
                                   
                                        
                                       
                                        <div class="form-group row">
                                           
                                                                                       
                 <asp:GridView ID="tabla" runat="server"   >
                        </asp:GridView>

                                        </div>
                                       
                           

                                     
                            
                                </div>


      </div>
    </div>
  </div>

</div>

</asp:Content>
