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
    public partial class crear_usuario : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["desarollo"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                carga_estados();
                consultarusuarios();
                carga_rol();
            }
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

        public void carga_rol()
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
                    rol.DataSource = cmd.ExecuteReader();
                    rol.DataValueField = "idrol";
                    rol.DataTextField = "descripcion";
                    rol.DataBind();
                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }

        public void consultarusuarios()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_usuarioss");
              


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
            //    //ingresar
            string identificacion = cidentificacion.Text;
            string nombre = cnombre.Text;
            string correo = ccorreo.Text;
            string login = clogin.Text;
            string clave = cclave.Text;
            string telefono = ctelefono.Text;
            string estadoc = estado.SelectedItem.Value;
            int est = Convert.ToInt32(estadoc);
            string crol = rol.SelectedItem.Value;
            int croll = Convert.ToInt32(crol);


            int usuario = 70;
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "insertar_persona");
                cmd.Parameters.Add("@rolt", croll);
                cmd.Parameters.Add("@identificacion", identificacion);
                cmd.Parameters.Add("@nombre", nombre);
                cmd.Parameters.Add("@correo", correo);
                cmd.Parameters.Add("@usuariore", login);
                cmd.Parameters.Add("@clave", clave);
                
                cmd.Parameters.Add("@telefono", telefono);
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

      

            cidentificacion.Text = ""; 
           cnombre.Text = "";
          ccorreo.Text = "";
            clogin.Text = "";
          cclave.Text = "";
        ctelefono.Text = "";
            consultarusuarios();

        }





    }
}