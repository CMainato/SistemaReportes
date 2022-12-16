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
    public partial class menu_rol : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["desarollo"].ToString());

        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {

                carga_estados();
                carga_rol();
                carga_menus();


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

        public void carga_menus()
        {
            menu.Items.Clear();
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_menu");
                con.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmd);

                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    menu.DataSource = cmd.ExecuteReader();
                    menu.DataValueField = "idmenu";
                    menu.DataTextField = "MENU";
                    menu.DataBind();

                }

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }


        public void consultarrolmenu()
        {
            string rolc = rol.SelectedItem.Value;
        
            int rolct = Convert.ToInt32(rolc);

            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_menurol");
                cmd.Parameters.Add("@rolt", rolct);


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


        protected void rol_SelectedIndexChanged(object sender, EventArgs e)
        {
            string rolc = rol.SelectedItem.Value;

            int rolct = Convert.ToInt32(rolc);

            tabla.DataBind();

            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "consultar_menurol");
                cmd.Parameters.Add("@rolt", rolct);


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
         
            string rolc = rol.SelectedItem.Value;
            string menuc = menu.SelectedItem.Value;
            string estadoc = estado.SelectedItem.Value;

          

            int est= Convert.ToInt32(estadoc);

            int menuct = Convert.ToInt32(menuc);

            int rolct = Convert.ToInt32(rolc);


            int usuario = 70;
            try
            {
                SqlCommand cmd = new SqlCommand("reporteador", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.Add("@operacion", "insertar_menurol");

                cmd.Parameters.Add("@menut", menuct);
                cmd.Parameters.Add("@rolt", rolct);
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
                consultarrolmenu();
            }
            catch (Exception)
            {

                throw;
            }

       //     consultarrolmenu();

        }





    }
}