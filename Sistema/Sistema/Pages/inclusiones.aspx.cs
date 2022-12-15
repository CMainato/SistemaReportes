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
    public partial class inclusiones : System.Web.UI.Page
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




        ///boton para incluir al cliente

        protected void btncargar_Click(object sender, EventArgs e)
        {
            string campanas = producto.SelectedItem.Value;
            string bases = campana.SelectedItem.Value;
            string nombres = nombre.Text;
            string cedulas= cedula.Text;
            string telefonos = telefono.Text;
            string correos = correo.Text;
            string direccions = direccion.Text;
            ///validar para que los campos sean obligatorios
            if (campanas == "0" || bases == "0")
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal(  '',   'seleccione una campaña y una base',   'error' )", true);

            }
            if (cedulas == "" || telefonos == "" || nombres == "")
            {
                this.ClientScript.RegisterStartupScript(this.GetType(), "SweetAlert", "swal(  '',   'Ingrese los campos con rojo obligatorios',   'error' )", true);

            }
            else
            {

                try
                {
                    SqlCommand cmd = new SqlCommand("opersis_login", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add("@operacion", "inclusiones");
                    cmd.Parameters.Add("@idcampana", campanas);
                    cmd.Parameters.Add("@base", bases);
                    cmd.Parameters.Add("@cedula", cedulas);
                    cmd.Parameters.Add("@nombrescompletos", nombres);
                    cmd.Parameters.Add("@telefonoe", telefonos);
                    cmd.Parameters.Add("@correo", correos);
                    cmd.Parameters.Add("@direccion", direccions);
                    con.Open();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);

                    DataTable dt = new DataTable();
                    da.Fill(dt);
                    if (dt.Rows.Count > 0)
                    {
                        //producto.DataSource = cmd.ExecuteReader();
                        //producto.DataValueField = "id";
                        //producto.DataTextField = "descripcion";
                        //producto.DataBind();

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