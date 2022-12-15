<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/master.Master" AutoEventWireup="true" CodeBehind="crearbase.aspx.cs" Inherits="Sistema.Pages.crearbase" %>
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
       <h5 class="card-header">Crear una Base</h5>

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
                                        <label for="inputEmail">Ingrese un Nombre a la Base</label>
                                                                     
                                         <br />
                      <asp:TextBox ID="nombrebase"  runat="server" ClientIDMode="Static" CssClass="form-control"/>
                                                                             
                                                                            ejm:
                                                                          <br />
                                                                          BASEXX Enero x 2022
                                         
                             
</div>
            
          
    
                                        <div class="row">
                                          
                                            <div class="col-sm-6 pl-0">
                                                <p class="text-right">
                                                   <asp:Button ID="btncargar" runat="server" Text="Crear Base" CssClass="btn btn-success" Visible ="TRUE" OnClick="btncargar_Click"  />
                                              
         

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
      
      
                                  <h5 class="card-header">Bases</h5>
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
