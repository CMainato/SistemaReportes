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
    public partial class roles : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["desarollo"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {
            carga_estados();
            consultarroles();
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



        public void consultarroles()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_roles");
              


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
            //ingresar rol
            string descripcion = cdescripcion.Text;
          
            string estadoc = estado.SelectedItem.Value;

            int est= Convert.ToInt32(estadoc);
            int usuario = 70;
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "insertar_rol");
                cmd.Parameters.Add("@descripcion", descripcion);
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

            consultarroles();

        }





    }
}