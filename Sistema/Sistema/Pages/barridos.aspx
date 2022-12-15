<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="barridos.aspx.cs" Inherits="Sistema.Pages.barridos" %>
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
       <h5 class="card-header">Generar un Barrido</h5>

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
                                         
                                                         <asp:DropDownList ID="campana" runat="server"  AutoPostBack="True"
                    AppendDataBoundItems="true"    CssClass="form-control"  
                                                              onselectedindexchanged="base_SelectedIndexChanged">  
                 <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList> 
</div>
            

                                    <div class="form-group">
                                
                             <asp:CheckBox id="aunno" runat="server"
                 
                    Text="Clientes Aun No Gestionados:  SI_"
                    TextAlign="Left" />
               <%--     OnCheckedChanged="Check_Clicked"/>--%>

</div>
            

                  <div class="row">
                                          
                                            <div class="col-sm-6 pl-0">
                                              
                                               <center>    <asp:Button ID="btgenerar" runat="server" Text="Generar Registros" CssClass="btn btn-dark" Visible ="TRUE" OnClick="btngenerar_Click" /></center>
<br /><br />
<asp:Button ID="Button1" runat="server" Text="Cargar al Elastix" CssClass="btn btn-success" Visible ="TRUE" OnClick="btngenerar_Click" />
                                              
          <%--OnClick="btncargar_Click"--%> 

                                                    <%--<button class="btn btn-space btn-secondary">Cancel</button>--%>
                                          
                                            </div>
                                        </div>
                                   
                                   
                                     
                                 
                                </div>
        


    </div>
  </div>







  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      
      
                                  <h5 class="card-header">Registros a Subir</h5>
                                <div class="card-body">
                                   
                           <div class="form-group row">
                                            <label for="inputPassword2" class="col-6 col-lg-6 col-form-label text-right"># Clientes No Gestionados</label>
                                            <div class="col-6 col-lg-6">
                                                  <asp:TextBox ID="nocontactados"  runat="server" ClientIDMode="Static" CssClass="form-control" />
                                            </div>
                                        </div>
                                         <div class="form-group row">
                                            <label for="inputPassword2" class="col-6 col-lg-6 col-form-label text-right"># Clientes Con Filtros</label>
                                            <div class="col-6 col-lg-6">
                                                  <asp:TextBox ID="filtros"  runat="server" ClientIDMode="Static" CssClass="form-control" />
                                            </div>
                                        </div>



                                       <div class="form-group row">
                                           
                                <label for="inputPassword2" class="col-6 col-lg-6 col-form-label text-right">Filtros de la Campaña  </label>
                                           <br /><p>Se Puede Eliminar algun Filtro si no lo desea</p>


                                                                                                
                 <asp:GridView ID="tabla" runat="server"   >
                        </asp:GridView>

                                        </div>
                                          
                                          
                                           
                                            
                                       
                                      


      </div>
    </div>
  </div>
</div>


    

</asp:Content>
