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
    public partial class linkcampana : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["conexion"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {
            carga_campanas();
            cargar_agentes();
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

        //agnetes
        public void cargar_agentes()
        {
            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "agente");
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    agenteInsert.DataSource = cmd.ExecuteReader();
                    agenteInsert.DataValueField = "cod_user";
                    agenteInsert.DataTextField = "login";
                    agenteInsert.DataBind();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

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
                limpiar();


            }
            catch (Exception)
            {

                throw;
            }



        }

        /// <summary>
        /// ir al link
        protected void ir_Click(object sender, EventArgs e)
        {
            string x = linkx.Text;
           
            Response.Write("<script> window.open('" + x + "','_blank'); </script>");

        }

        public void limpiar()
        {
            cedulaconsulta.Text = "";
            nombre.Text = "";
            telefono.Text = "";
            cam.Text = "";
            basex.Text = "";
            codcliente.Text = "";
            linkx.Text = "";
        }

        ///validar cliente si esta en bases muestra
       protected void btncargar_Click(object sender, EventArgs e)
        {

            limpiar();

            string cedulab = cedula.Text; //cedula
             string campan = producto.SelectedItem.Value; //campaña
            string bas = campana.SelectedItem.Value; //base
            string agen= agenteInsert.SelectedItem.Value; //agente


            if (campan == "0" || bas == "0")
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal(  '',   'Seleccione Una una campaña y una base',   'error' )", true);

            }
            else
            {
                try
                {
                    SqlCommand cmd = new SqlCommand("opersis_login", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add("@operacion", "link");
                    cmd.Parameters.Add("@idcampana", campan);
                    cmd.Parameters.Add("@base", bas);
                    cmd.Parameters.Add("@cedula", cedulab);
                         cmd.Parameters.Add("@idagente", agen);
                    con.Open();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);

                    DataTable dt = new DataTable();
                    da.Fill(dt);
                    if (dt.Rows.Count > 0)
                    {


                        linkx.Text = dt.Rows[0]["link"].ToString();
                        nombre.Text = dt.Rows[0]["nombre"].ToString();
                        telefono.Text = dt.Rows[0]["telefono"].ToString();

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
}