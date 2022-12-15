<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="perfiles.aspx.cs" Inherits="Sistema.Pages.perfiles" %>
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
        <h5 class="card-title">Administración de Perfiles</h5>


          <table>
              <tr>
                  <td>Descripcion Perfil :</td>
                  <td> <asp:TextBox ID="nombre"  runat="server" ClientIDMode="Static" CssClass="form-control"/><br /></td>
        
              </tr>

              <tr>
                  <td>Estado :</td>
                  <td> <asp:TextBox ID="TextBox3"  runat="server" ClientIDMode="Static" CssClass="form-control"/></td>
             
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
        <h5 class="card-title">Perfiles Usuarios</h5>
      
                                                 <div class="dt-responsive">

 <div style="overflow:auto">    
     

   <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false"    BorderStyle="Solid" 
       BorderWidth="1px"  PageSize="15"  Width="100%" 
                    
       DataKeyNames="cod_auto"
        OnRowDataBound="OnRowDataBound" OnRowEditing="OnRowEditing" OnRowCancelingEdit="OnRowCancelingEdit"
        OnRowUpdating="OnRowUpdating" OnRowDeleting="OnRowDeleting" EmptyDataText="Gestionar">
         <PagerSettings Mode="NumericFirstLast" Visible="False" />
                    <PagerStyle BackColor="LightSteelBlue" HorizontalAlign="Right" />
                    <HeaderStyle BackColor="#464646" Font-Size="14px" ForeColor="White" Height="30px"  />
                    <AlternatingRowStyle BackColor="#EAEAEA" />
        <Columns>
              <asp:TemplateField HeaderText="Perfil" ItemStyle-Width="150" HeaderStyle-ForeColor="White">
                <ItemTemplate>
                    <asp:Label ID="lblnombre" runat="server" Text='<%# Eval("descripcion") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:TextBox ID="txtnombre" runat="server" Text='<%# Eval("descripcion") %>'></asp:TextBox>
                </EditItemTemplate>
            
            </asp:TemplateField>

                   
       

            
            <asp:CommandField ButtonType="Link"  ShowDeleteButton="true" DeleteText="Editar"  HeaderText = "Editar" HeaderStyle-BackColor="green" ItemStyle-Width="150" HeaderStyle-ForeColor ="White" />
              
        </Columns>
    </asp:GridView>


       </div>                          
    
</div>


      </div>
    </div>
  </div>
</div>

</asp:Content>
