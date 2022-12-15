using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace Sistema.Pages
{
    public partial class cargabases : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["conexion"].ToString());
        string path2 = "";
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



        //CARGAS HOJAS DEL ARCHIVO EXCEL
        protected void Cargar_Click(object sender, EventArgs e)
        {

            combo.Items.Clear();
            DataTable dt = null;
            string path = Path.GetFileName(FileUpload1.FileName);
            FileUpload1.SaveAs(Server.MapPath("~/ExcelFile/") + path);
            String ExcelPath = Server.MapPath("~/ExcelFile/") + path;
            OleDbConnection mycon = new OleDbConnection("Provider = Microsoft.ACE.OLEDB.12.0; Data Source = " + ExcelPath + "; Extended Properties=Excel 8.0; Persist Security Info = False");
            mycon.Open();

            dt = mycon.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
            if (dt == null)
            {
                combo.Items.Add("");
            }

            int i = 0;

            foreach (DataRow row in dt.Rows)
            {
                combo.Items.Add(row["TABLE_NAME"].ToString());

                i++;

            }
            archivo.Text = "" + path;
            mycon.Close();



        }


        ///truncar la tabla que viene los campos
        public void truncar()
        {
            try
            {
                SqlCommand cmd2 = new SqlCommand("opersis_login", con);
                cmd2.CommandType = System.Data.CommandType.StoredProcedure;
                cmd2.Parameters.Add("@operacion", "truncar");

                con.Open();
                SqlDataAdapter da2 = new SqlDataAdapter(cmd2);

                DataTable dt = new DataTable();
                da2.Fill(dt);


                con.Close();

            }
            catch (Exception)
            {

                throw;
            }
        }



        ///subir informacion del archivo
        protected void precargar_Click(object sender, EventArgs e)
        {
            try
            {
                string path = "";
                String x = combo.SelectedItem.Value; //hoja que se selecciono
                path = archivo.Text;
                String ExcelPath = Server.MapPath("~/ExcelFile/") + path;
                OleDbConnection mycon = new OleDbConnection("Provider = Microsoft.ACE.OLEDB.12.0; Data Source = " + ExcelPath + "; Extended Properties=Excel 8.0; Persist Security Info = False");
                mycon.Open();
                OleDbCommand cmd = new OleDbCommand("select * from [" + x + "]", mycon);
                OleDbDataAdapter da = new OleDbDataAdapter();
                da.SelectCommand = cmd;
                DataSet ds = new DataSet();
                da.Fill(ds);
                tabla.DataSource = ds.Tables[0];
                tabla.DataBind();
                mycon.Close();

                //saco la cantidad de cuantas columnas tiene se puede saber las cabeceras igual
                String namecolum = "";
                truncar();

                int cantidad = 0;
                for (int i = 0; i < tabla.HeaderRow.Cells.Count; i++)
                {
                    namecolum = tabla.HeaderRow.Cells[i].Text.ToLower().Trim();

                    try
                    {
                        SqlCommand cmd2 = new SqlCommand("opersis_login", con);
                        cmd2.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd2.Parameters.Add("@operacion", "subirbas");
                        cmd2.Parameters.Add("@campo", namecolum);
                        con.Open();
                        SqlDataAdapter da2 = new SqlDataAdapter(cmd2);

                        DataTable dt = new DataTable();
                        da2.Fill(dt);

                        con.Close();

                    }
                    catch (Exception)
                    {

                        throw;
                    }





                    cantidad = cantidad + 1;

                }

                cantidad_Click();



            }
            catch (Exception ex)
            {


            }
        }






        /// <summary>
        /// crea campos dinamicos en una tabla para la carga
        /// </summary>
        public void cantidad_Click()
        {

            try
            {
                SqlCommand cmd2 = new SqlCommand("opersis_login", con);
                cmd2.CommandType = System.Data.CommandType.StoredProcedure;
                cmd2.Parameters.Add("@operacion", "subircampos");

                con.Open();
                SqlDataAdapter da2 = new SqlDataAdapter(cmd2);

                DataTable dt = new DataTable();
                da2.Fill(dt);

                con.Close();

            }
            catch (Exception)
            {

                throw;
            }

        }


        /////
        protected void precargar2_Click(object sender, EventArgs e)
        {
            SqlConnection cnnx2 = new SqlConnection("Data Source=192.168.0.19;Initial Catalog=Telemercadeo_2013;Persist Security Info=True;User ID=sa;Password=Coris123");
            String conexion = "Data Source=192.168.0.19;Initial Catalog=Telemercadeo_2013;Persist Security Info=True;User ID=sa;Password=Coris123";
            string valor = "";
            string cabecera = "";
            for (int i = 0; i < tabla.Rows.Count; i++)
            {
                cabecera = tabla.HeaderRow.Cells[i].Text.ToLower().Trim();
                GridViewRow row = tabla.Rows[i];
                for (int j = 0; j < 4; j++)
                {
                   
                    valor = row.Cells[j].Text;

                    try
                    {
                        SqlCommand cmd2 = new SqlCommand("opersis_login", con);
                        cmd2.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd2.Parameters.Add("@operacion", "cargainfo");
                        cmd2.Parameters.Add("@cabecera", cabecera);
                        cmd2.Parameters.Add("@campo", valor);
                        con.Open();
                        SqlDataAdapter da2 = new SqlDataAdapter(cmd2);

                        DataTable dt = new DataTable();
                        da2.Fill(dt);

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

    
}