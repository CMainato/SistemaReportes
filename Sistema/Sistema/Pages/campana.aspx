<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="campana.aspx.cs" Inherits="Sistema.Pages.campana" %>
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
       <h5 class="card-header">Crear un Campaña</h5>

 <br />
 <div class="form-group">
 <label for="inputEmail">Ingrese un Nombre Campaña</label>
 <br />
 <asp:TextBox ID="cnombre"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
 <div class="form-group">
 <label for="inputEmail">Ingrese id Externo</label>
 <br />
 <asp:TextBox ID="cidexterno"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
          <div class="form-group">
 <label for="inputEmail">Ingrese una Descripción</label>
 <br />
 <asp:TextBox ID="cdescripcion"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
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
      
      
                                  <h5 class="card-header">Formatos</h5>
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
