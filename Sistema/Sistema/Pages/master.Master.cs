using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Sistema.Pages
{
    public partial class master : System.Web.UI.MasterPage
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["conexion"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {


            Response.AppendHeader("Cache-Control", "no-store");

           

            if (Session["usuario"] != null )
            {
                divlogin.Visible = false;
                lblusuario.Text = Session["usuario"].ToString();
                string usuario = "", perfil = "";
                usuario = lblusuario.Text;
                //sacamos el perfil del login que ingresamos

                try
                {
                    SqlCommand cmd = new SqlCommand("opersis_login", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add("@operacion", "perfil");
                    cmd.Parameters.Add("@usuario", SqlDbType.Text).Value = usuario;
                    con.Open();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);

                    DataTable dt = new DataTable();
                    da.Fill(dt);
                    if (dt.Rows.Count > 0)
                    {
                        perfil = dt.Rows[0]["codperfil"].ToString();

                    }

                    con.Close();

                    ///activar los menus por perfil
                    



                    



                }
                catch (Exception)
                {

                    throw;
                }




            }
            else
            {
                logo.Visible = false;
                divadministrador.Visible = false;
                divCampanas.Visible = false;
                divoperaciones.Visible = false;
                divoAgente.Visible = false;
                divuser.Visible = false;

                lblusuario.Text = string.Empty;
            }



        }

        //cerrar sesion
        protected void Unnamed_Click2(object sender, EventArgs e)
        {
            Session["usuario"] = null;
           // Session["Id_rol"] = null;
            Response.Redirect("index2.aspx");
            HttpContext.Current.Session.Abandon();
        }

        //iniciar sesion
        protected void Unnamed_Click1(object sender, EventArgs e)
        {

            Session["usuario"] =username.Text;


            String usu = "",clave = "",nombre="";

            usu = username.Text;
            clave = tbClave.Text;

            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "login");
                cmd.Parameters.Add("@usuario", SqlDbType.Text).Value = usu;
                cmd.Parameters.Add("@clave", SqlDbType.Text).Value = clave;
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                  
                   nombre = dt.Rows[0]["nombres"].ToString();

                }
                if (nombre == "")
                {
                    Session["usuario"] = null;
                }
                else
                {
                    Response.Redirect("inicio.aspx");
                }


                  

                con.Close();

                ///activar los menus por perfil
             


            }
            catch (Exception)
            {

                throw;
            }




      
        }

    }
}