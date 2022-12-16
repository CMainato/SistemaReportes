<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="menu_rol.aspx.cs" Inherits="Sistema.Pages.menu_rol" %>
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
       <h5 class="card-header">Crear un Permiso al Rol</h5>
          <br />

              <div class="form-group">
                                            <label for="inputEmail">Seleccione Un Rol</label>
                                    
                              
                            <asp:DropDownList ID="rol" runat="server" AutoPostBack="True"   
                    AppendDataBoundItems="true"    CssClass="form-control"  
                                      onselectedindexchanged="rol_SelectedIndexChanged">  
                    <asp:ListItem Value="0">SELECCIONE</asp:ListItem>  
                </asp:DropDownList>            


                                             
                                             </div>

        
             <div class="form-group">
                                            <label for="inputEmail">Seleccione Un Menu</label>
                                    
                              
                            <asp:DropDownList ID="menu" runat="server" AutoPostBack="True"   
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
      
      
                                  <h5 class="card-header">Permisos al Rol</h5>
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
