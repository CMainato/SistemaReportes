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
    public partial class perfiles : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["conexion"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {
            consultarusuarios();
        }

        private void consultarusuarios()
        {


            try
            {
                SqlCommand cmd = new SqlCommand("opersis_login", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "perfiles");
               
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);


                DataTable dt = new DataTable();
                da.Fill(dt);
                GridView1.DataSource = dt;
               GridView1.DataBind();
                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }



        protected void OnRowEditing(object sender, GridViewEditEventArgs e)
        {

        }

        protected void OnRowCancelingEdit(object sender, EventArgs e)
        {

        }

        protected void OnRowUpdating(object sender, GridViewUpdateEventArgs e)
        {

        }

        protected void OnRowDataBound(object sender, GridViewRowEventArgs e)
        {

        }

        protected void OnRowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            int customerId = 0;


        }





    }
}