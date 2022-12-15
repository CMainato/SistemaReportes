<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="inclusiones.aspx.cs" Inherits="Sistema.Pages.inclusiones" %>
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
       <h5 class="card-header">Ingresar una Inclusión</h5>

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
            
         

                                 
                                </div>
        


    </div>
  </div>





  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      
      
                                  <h5 class="card-header">Datos del Cliente para incluir a la base y campaña seleccionada
                             

                                  </h5>
                                <div class="card-body">

                                                  <div class="form-group">
                                        <label for="inputEmail">
                                             <p style="color:red"> Ingrese Cedula del Cliente</p>
                                           </label>
                                                                     
                                         <br />
                      <asp:TextBox ID="cedula"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
                                
</div>
                                          <div class="form-group">
                                               <label for="inputEmail">
                                             <p style="color:red"> Ingrese Nombes y Apellidos</p>
                                           </label>
                                                            
                                         <br />
                      <asp:TextBox ID="nombre"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
                                
</div>
                                         <div class="form-group">
                                              <label for="inputEmail">
                                             <p style="color:red">Ingrese Telefono</p>
                                           </label>
                                                         
                                         <br />
                      <asp:TextBox ID="telefono"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
                                
</div>
                                             <div class="form-group">
                                        <label for="inputEmail">Ingrese Correo</label>
                                                                     
                                         <br />
                      <asp:TextBox ID="correo"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
                                
</div>
                                                                             <div class="form-group">
                                        <label for="inputEmail">Ingrese una Dirección</label>
                                                                     
                                         <br />
                      <asp:TextBox ID="direccion"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
                                
</div>
                                            
                                     
                                          
                                          
                                           
                                            
                                                 <center>  <asp:Button ID="glink" runat="server" Text="Ingresar" CssClass="btn btn-success" Visible ="TRUE" OnClick="btncargar_Click"   /></center>

                                                        
                                         
                         

                                  
                                                


                                     
                            
                                </div>


      </div>
    </div>
  </div>
</div>

</asp:Content>
