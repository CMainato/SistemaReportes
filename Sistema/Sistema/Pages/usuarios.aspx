<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="usuarios.aspx.cs" Inherits="Sistema.Pages.usuarios" %>
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
        <h5 class="card-title">Administración de Usuario</h5>


          <table>
              <tr>
                  <td>Nombre Completo :</td>
                  <td> <asp:TextBox ID="nombre"  runat="server" ClientIDMode="Static" CssClass="form-control"/><br /></td>
        
              </tr>

              <tr>
                  <td>Usuario :</td>
                  <td> <asp:TextBox ID="TextBox1"  runat="server" ClientIDMode="Static" CssClass="form-control"/></td>
             
                  <td>Contraseña :</td>
                  <td> <asp:TextBox ID="TextBox2"  runat="server" ClientIDMode="Static" CssClass="form-control"/><br /></td>
              </tr>
              <tr>
                  <td>Estado :</td>
                  <td> <asp:TextBox ID="TextBox3"  runat="server" ClientIDMode="Static" CssClass="form-control"/></td>
             
                  <td>Perfil :</td>
                  <td> <asp:TextBox ID="TextBox4"  runat="server" ClientIDMode="Static" CssClass="form-control"/><br /></td>
              </tr>
              <tr>
                  <td></td> 
                  <td>
                              <a href="#" class="btn btn-success">Crear</a>
                 <br /> <br />
                              <a href="#" class="btn btn-primary">Buscar</a>
                 <br /> <br />
                              <a href="#" class="btn btn-info">Actualizar</a>
                  </td>
              </tr>

          </table>




      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Usuarios Activos</h5>
      
                                                 <div class="dt-responsive">

 <div style="overflow:auto">    
     

   <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false"    BorderStyle="Solid" 
       BorderWidth="1px"  PageSize="15"  Width="100%" 
                    
       DataKeyNames="cod_user"
        OnRowDataBound="OnRowDataBound" OnRowEditing="OnRowEditing" OnRowCancelingEdit="OnRowCancelingEdit"
        OnRowUpdating="OnRowUpdating" OnRowDeleting="OnRowDeleting" EmptyDataText="Gestionar">
         <PagerSettings Mode="NumericFirstLast" Visible="False" />
                    <PagerStyle BackColor="LightSteelBlue" HorizontalAlign="Right" />
                    <HeaderStyle BackColor="#464646" Font-Size="14px" ForeColor="White" Height="30px" />
                    <AlternatingRowStyle BackColor="#EAEAEA" />
        <Columns>
              <asp:TemplateField HeaderText="Nombre" ItemStyle-Width="150">
                <ItemTemplate>
                    <asp:Label ID="lblnombre" runat="server" Text='<%# Eval("nombres") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:TextBox ID="txtnombre" runat="server" Text='<%# Eval("nombres") %>'></asp:TextBox>
                </EditItemTemplate>
            </asp:TemplateField>
            <asp:TemplateField HeaderText="Login" ItemStyle-Width="150">
                <ItemTemplate>
                    <asp:Label ID="lblogin" runat="server" Text='<%# Eval("login") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:TextBox ID="txtlogin" runat="server" Text='<%# Eval("login") %>'></asp:TextBox>
                </EditItemTemplate>
            </asp:TemplateField>
                      <asp:TemplateField HeaderText="Contraseña" ItemStyle-Width="150">
                <ItemTemplate>
                    <asp:Label ID="lblpass" runat="server" Text='<%# Eval("password") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:TextBox ID="txtpass" runat="server" Text='<%# Eval("password") %>'></asp:TextBox>
                </EditItemTemplate>
            </asp:TemplateField>
                 <asp:TemplateField HeaderText="Estado" ItemStyle-Width="150">
                <ItemTemplate>
                    <asp:Label ID="lblestado" runat="server" Text='<%# Eval("estado") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:TextBox ID="txtestado" runat="server" Text='<%# Eval("estado") %>'></asp:TextBox>
                </EditItemTemplate>
            </asp:TemplateField>
             <asp:TemplateField HeaderText="Perfil" ItemStyle-Width="150">
                <ItemTemplate>
                    <asp:Label ID="lblperfil" runat="server" Text='<%# Eval("descripcion") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:TextBox ID="txtperfil" runat="server" Text='<%# Eval("descripcion") %>'></asp:TextBox>
                </EditItemTemplate>
            </asp:TemplateField>
               <asp:TemplateField HeaderText="Fecha Actualización" ItemStyle-Width="150">
                <ItemTemplate>
                    <asp:Label ID="lblfecha" runat="server" Text='<%# Eval("fecha_ultimo_cambio") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:TextBox ID="txtfecha" runat="server" Text='<%# Eval("fecha_ultimo_cambio") %>'></asp:TextBox>
                </EditItemTemplate>
            </asp:TemplateField>

                   
       

            
            <asp:CommandField ButtonType="Link"  ShowDeleteButton="true" DeleteText="Editar"  HeaderText = "Editar" HeaderStyle-BackColor="green" ItemStyle-Width="150" />
              
        </Columns>
    </asp:GridView>


       </div>                          
    
</div>


      </div>
    </div>
  </div>
</div>

</asp:Content>
