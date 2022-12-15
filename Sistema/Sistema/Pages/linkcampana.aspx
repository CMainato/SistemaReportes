<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="linkcampana.aspx.cs" Inherits="Sistema.Pages.linkcampana" %>
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
       <h5 class="card-header">Generar Link Campañas</h5>

 <br />
                                             <div class="form-group">
                                            <label for="inputEmail">Seleccione Una Campaña</label>
                                    
                              
                            <asp:DropDownList ID="producto" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"    
                                   onselectedindexchanged="producto_SelectedIndexChanged">  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>
                                         <div class="form-group">
                                            <label for="inputEmail">Seleccione Una Base</label>
                                         
                                                         <asp:DropDownList ID="campana" runat="server"  
                    AppendDataBoundItems="true"    CssClass="form-control"  
                  ><asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList> 
</div>
            
                                                                      <div class="form-group">
                                         
                                                                             <label for="inputEmail">
                                             <p style="color:red">Ingrese la Cedula del Cliente</p>
                                           </label>
                                         
                      <asp:TextBox ID="cedula"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>

                                        <div class="form-group">
                                            <label for="inputEmail">Seleccione un Agente para asignarle</label>
                                         
                                                         <asp:DropDownList ID="agenteInsert" runat="server"  
                    AppendDataBoundItems="true"    CssClass="form-control"  
                  ><asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList> 
</div>
        



        





                                   
                                        <div class="row">
                                          
                                            <div class="col-sm-6 pl-0">
                                                <p class="text-right">
                                                   <asp:Button ID="btncargar" runat="server" Text="Generar Link" CssClass="btn btn-success" Visible ="TRUE" OnClick="btncargar_Click"   />
                                              
                                                    
                 <asp:GridView ID="tabla" runat="server"   >
                        </asp:GridView>

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
      
      
                                  <h5 class="card-header">Datos del Cliente Para Generar Link</h5>
                                <div class="card-body">
                                   
                                        <div class="form-group row">
                                        
                                            <div class="col-9 col-lg-10">
                                        <asp:TextBox ID="cedulaconsulta"  runat="server"  CssClass="form-control"  style="display :none"  />
                                                <asp:TextBox ID="cam"  runat="server" ClientIDMode="Static" CssClass="form-control"   style="display :none" />
                                                  <asp:TextBox ID="basex"  runat="server" ClientIDMode="Static" CssClass="form-control"   style="display :none" />
                                                  <asp:TextBox ID="codcliente"  runat="server" ClientIDMode="Static" CssClass="form-control"   style="display :none" />

                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword2" class="col-3 col-lg-2 col-form-label text-right">Nombre</label>
                                            <div class="col-9 col-lg-10">
                                                  <asp:TextBox ID="nombre"  runat="server" ClientIDMode="Static" disabled CssClass="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword2" class="col-3 col-lg-2 col-form-label text-right">Telefono</label>
                                            <div class="col-9 col-lg-10">
                                                   <asp:TextBox ID="telefono"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
                                            </div>
                                        </div>
                                         <div class="form-group row">
                                           
                                            <div class="col-9 col-lg-10">
                                                   <asp:TextBox ID="agente"  runat="server" ClientIDMode="Static" CssClass="form-control" style="display :none"/>
                                            </div>
                                        </div>

                           
                                         
                         

                                        <div class="form-group row">
                                            <label for="inputWebSite" class="col-3 col-lg-2 col-form-label text-right">Link:</label>
                                            <div class="col-9 col-lg-10">
                                                  <asp:TextBox ID="linkx"  runat="server" ClientIDMode="Static"  CssClass="form-control"/>
                                           
                                               
                                            </div>
                                        </div>
                                         <br />
                                                <center><asp:Button ID="Button1" runat="server" Text="ir al Link" CssClass="btn btn-info" Visible ="TRUE"  OnClick="ir_Click" /></center>
                                              
                                            
                                                


                                     
                            
                                </div>


      </div>
    </div>
  </div>
</div>

</asp:Content>
