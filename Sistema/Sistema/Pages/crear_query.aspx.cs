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
    public partial class crear_query : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["desarollo"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                carga_estados();
                carga_conexiones();
                carga_campana();
                carga_frecuencias();
                consultarquery();

                carga_query();
                carga_parametros();


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

        public void carga_conexiones()
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
                    conexiones.DataSource = cmd.ExecuteReader();
                    conexiones.DataValueField = "IDCONEXIONES";
                    conexiones.DataTextField = "descripcion";
                    conexiones.DataBind();
                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }


        public void carga_campana()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_campana");
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    campana.DataSource = cmd.ExecuteReader();
                    campana.DataValueField = "IDCAMPANA";
                    campana.DataTextField = "nombre";
                    campana.DataBind();
                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }

        public void carga_query()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_query");
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    queryc.DataSource = cmd.ExecuteReader();
                    queryc.DataValueField = "idquery";
                    queryc.DataTextField = "Nombre";
                    queryc.DataBind();
                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }

        public void carga_parametros()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_parametros");
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    parametrosq.DataSource = cmd.ExecuteReader();
                    parametrosq.DataValueField = "IDPARAMETROS";
                    parametrosq.DataTextField = "NOMBRRE";
                    parametrosq.DataBind();
                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }



        public void carga_frecuencias()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_frecuencias");
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    frecuencia.DataSource = cmd.ExecuteReader();
                    frecuencia.DataValueField = "IDFRECUENCIA";
                    frecuencia.DataTextField = "descripcion";
                    frecuencia.DataBind();
                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }



        public void consultarquery()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_query");
              


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

        //    string estadoc = estado.SelectedItem.Value;
        //    int est = Convert.ToInt32(estadoc);


        //    //    //ingresar
        //    string identificacion = cidentificacion.Text;
        //    string nombre = cnombre.Text;
        //    string correo = ccorreo.Text;
        //    string login = clogin.Text;
        //    string clave = cclave.Text;
        //    string telefono = ctelefono.Text;
        //    string estadoc = estado.SelectedItem.Value;
        //    int est = Convert.ToInt32(estadoc);
        //    string crol = rol.SelectedItem.Value;
        //    int croll = Convert.ToInt32(crol);


        //    int usuario = 70;
        //    try
        //    {
        //        SqlCommand cmd = new SqlCommand("reporteador", con);
        //        cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //        cmd.Parameters.Add("@operacion", "insertar_persona");
        //        cmd.Parameters.Add("@rolt", croll);
        //        cmd.Parameters.Add("@identificacion", identificacion);
        //        cmd.Parameters.Add("@nombre", nombre);
        //        cmd.Parameters.Add("@correo", correo);
        //        cmd.Parameters.Add("@usuariore", login);
        //        cmd.Parameters.Add("@clave", clave);
                
        //        cmd.Parameters.Add("@telefono", telefono);
        //        cmd.Parameters.Add("@estado", est);
        //        cmd.Parameters.Add("@usuario", usuario);



        //        con.Open();
        //        SqlDataAdapter da = new SqlDataAdapter(cmd);

        //        DataTable dt = new DataTable();
        //        da.Fill(dt);
        //        if (dt.Rows.Count > 0)
        //        {
        //            tabla.DataSource = dt;
        //            tabla.DataBind();

        //        }

        //        con.Close();

        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }

      

        //    cidentificacion.Text = ""; 
        //   cnombre.Text = "";
        //  ccorreo.Text = "";
        //    clogin.Text = "";
        //  cclave.Text = "";
        //ctelefono.Text = "";
        //    consultarusuarios();

        }





    }
}