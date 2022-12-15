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
    public partial class barridos : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["conexion"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {
            carga_campanas();
        }

          public void carga_campanas()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "campanas");
               con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    producto.DataSource = cmd.ExecuteReader();
                    producto.DataValueField = "id";
                    producto.DataTextField = "descripcion";
                    producto.DataBind();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }

        protected void base_SelectedIndexChanged(object sender, EventArgs e) //consular base
        {


           
           


        }


        protected void producto_SelectedIndexChanged(object sender, EventArgs e)
        {
            string idcampana = producto.SelectedItem.Value;

            campana.Items.Clear();

            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "bases");
                cmd.Parameters.Add("@idcampana", idcampana);
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    campana.DataSource = cmd.ExecuteReader();
                    campana.DataValueField = "cod_auto";
                    campana.DataTextField = "descripcion";
                    campana.DataBind();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }
            ///preoceso

            protected void btngenerar_Click(object sender, EventArgs e)
            {
            //genera los registros para los barridos con todos los estados en una tabla temporal

            string idcampana = producto.SelectedItem.Value;
            string textbase = campana.SelectedItem.Text;
            string basex = campana.SelectedItem.Value;
            bool nocontacto = aunno.Checked;
            string condicion = "";

            if (nocontacto == false)
            {
                condicion = "NO";
            }
            else
           if (nocontacto == true)
            {
                condicion = "SI";
            }


                try
                {
                SqlCommand cmd = new SqlCommand("barrido_telemercadeo", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@campana", idcampana);
                cmd.Parameters.Add("@descripcion", textbase);
                cmd.Parameters.Add("@rsingestion", condicion);
                                              
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                //if (dt.Rows.Count > 0)
                //{
                //    campana.DataSource = cmd.ExecuteReader();
                //    campana.DataValueField = "cod_auto";
                //    campana.DataTextField = "descripcion";
                //    campana.DataBind();

                //}

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

            consultar_registros();

            consulta_clientesfiltro();
            consulta_clienetsnocon();

        }



        public void consultar_registros()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "barridoagrupado");
         




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

        public void consulta_clienetsnocon()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "barridoclientesnocon");
            
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    nocontactados.Text = dt.Rows[0]["nogestion"].ToString();
                
                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }


        }
        public void consulta_clientesfiltro()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "barridofiltro");

                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    filtros.Text = dt.Rows[0]["filtro"].ToString();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }



    }
}