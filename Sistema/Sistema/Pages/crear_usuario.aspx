<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="crear_usuario.aspx.cs" Inherits="Sistema.Pages.crear_usuario" %>
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
       <h5 class="card-header">Crear un Usuario</h5>

 <br />
           <div class="form-group">
 <label for="inputEmail">Ingrese  Identificación</label>
 <br />
 <asp:TextBox ID="cidentificacion"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
 <div class="form-group">
 <label for="inputEmail">Ingrese  Nombre y Apellido</label>
 <br />
 <asp:TextBox ID="cnombre"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
           <div class="form-group">
 <label for="inputEmail">Ingrese  un Correo</label>
 <br />
 <asp:TextBox ID="ccorreo"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
                     <div class="form-group">
 <label for="inputEmail">Ingrese  un Usuario/Login</label>
 <br />
 <asp:TextBox ID="clogin"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
                             <div class="form-group">
 <label for="inputEmail">Ingrese  una Contraseña</label>
 <br />
 <asp:TextBox ID="cclave"  runat="server" ClientIDMode="Static" CssClass="form-control" values="Coris12345*" />
</div>
 <div class="form-group">
 <label for="inputEmail">Ingrese un Telefono</label>
 <br />
 <asp:TextBox ID="ctelefono"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
</div>
           <div class="form-group">
                                            <label for="inputEmail">Seleccione Un rol</label>
                                    
                              
                            <asp:DropDownList ID="rol" runat="server" AutoPostBack="True"   
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
      
      
                                  <h5 class="card-header">Usuario</h5>
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
