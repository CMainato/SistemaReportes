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
    public partial class conexiones : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["desarollo"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {
            carga_estados();
            consultarconx();
        }

        public void carga_estados()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "cargaestado");
               con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    estado.DataSource = cmd.ExecuteReader();
                    estado.DataValueField = "idestado";
                    estado.DataTextField = "descripcion";
                    estado.DataBind();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }



        public void consultarconx()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_conexion");
              


                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    tabla.DataSource = dt;
                    tabla.DataBind();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }
        }



        protected void btncargar_Click(object sender, EventArgs e)
        {
            //ingresar
            string descripcion = cdescripcion.Text;
            string cadena = ccadena.Text;
            string estadoc = estado.SelectedItem.Value;

            int est= Convert.ToInt32(estadoc);
            int usuario = 70;
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "insertar_conexion");
                cmd.Parameters.Add("@descripcion", descripcion);
                cmd.Parameters.Add("@cadena", cadena);
                cmd.Parameters.Add("@estado", est);
                cmd.Parameters.Add("@usuario", usuario);



                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    tabla.DataSource = dt;
                    tabla.DataBind();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

            cdescripcion.Text="";
            ccadena.Text = "";
            consultarconx();

        }





    }
}