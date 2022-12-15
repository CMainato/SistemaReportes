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
    public partial class crearbase : System.Web.UI.Page
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





        protected void btncargar_Click(object sender, EventArgs e)
        {
            string nombre = nombrebase.Text;
            string idcampana = producto.SelectedItem.Value;

            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "cbase");
                cmd.Parameters.Add("@idcampana", idcampana);
                cmd.Parameters.Add("@nombrebase", nombre);



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

            nombrebase.Text = "";


        }


        protected void producto_SelectedIndexChanged(object sender, EventArgs e) //consular base
        {


            string nombre = nombrebase.Text;
            string idcampana = producto.SelectedItem.Value;

            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "cobases");
                cmd.Parameters.Add("@idcampana", idcampana);
 



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






    }
}