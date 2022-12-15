<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="cargabases.aspx.cs" Inherits="Sistema.Pages.cargabases" %>
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
       <h5 class="card-header">1. Cargar una Base</h5>

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
                                             <mark><u>2.</u></mark>
                                          <table>
                                              <tr>
                                                  <td> <asp:FileUpload ID="FileUpload1" runat="server"  accept=".xlsx"  /></td>
                                                   
                                                <td> <asp:Button ID="Cargar" runat="server" Text="Ver Hojas Excel" CssClass="btn btn-dark btn-xs" OnClick="Cargar_Click"  /></td>
                                                <td>  <asp:Label ID="archivo" style="color:red" runat="server" Text="" visible="true" ></asp:Label></td>
                                              </tr>
                                          </table>
                                           
                                         </DIV>


            
                                                                      <div class="form-group">
                                            <label for="inputEmail">Seleccione la Hoja</label>
                                         
  <asp:DropDownList class="form-control" ID="combo" runat="server">
        </asp:DropDownList>

    

</div>

                                   
                                        <div class="row">
                                          
                                            <div class="col-sm-6 pl-0">
                                                <p class="text-right">
                                                   <asp:Button ID="precarga" runat="server" Text="Precargar" CssClass="btn btn-brand" Visible ="TRUE" OnClick="precargar_Click"  />
                                                                                     <asp:Button ID="Button2" runat="server" Text="subir" CssClass="btn btn-brand" Visible ="TRUE" OnClick="precargar2_Click"  />
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
      
      
                                  <h5 class="card-header">3. Datos Subir Elastix</h5>
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
                                                  <asp:TextBox ID="nombre"  runat="server" ClientIDMode="Static" CssClass="form-control" />
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

                                          
                                          
                                           
                                            
                                                 <center>  <asp:Button ID="glink" runat="server" Text="Generar Link" CssClass="btn btn-success" Visible ="TRUE"   /></center>

                                                        
                                         
                         

                                        <div class="form-group row">
                                            <label for="inputWebSite" class="col-3 col-lg-2 col-form-label text-right">Link:</label>
                                            <div class="col-9 col-lg-10">
                                                  <asp:TextBox ID="linkx"  runat="server" ClientIDMode="Static"  CssClass="form-control"/>
                                           
                                               
                                            </div>
                                        </div>
                                         <br />
                                                <center><asp:Button ID="Button1" runat="server" Text="ir al Link" CssClass="btn btn-info" Visible ="TRUE" /></center>
                                              
                                            
                                                


                                     
                            
                                </div>


      </div>
    </div>
  </div>

  
       <div class="col-sm-12">
    <div class="card">
      <div class="card-body">  
            <h5 class="card-header">Datos de la Precarga</h5>
          <br />
   <asp:PlaceHolder  ID = "macro" runat="server"></asp:PlaceHolder>     
                                                       <asp:GridView ID="tabla" runat="server" CssClass="table table-hover" GridLines="None"  ></asp:GridView>

                        <!-- ============================================================== -->
                        <!-- end horizontal form -->
                        <!-- ============================================================== -->
                    </div>
         </div>
            </div>

</div>





</asp:Content>
