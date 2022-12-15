using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Sistema.Pages
{
    public partial class inicio : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            Response.AppendHeader("Cache-Control", "no-store");

            if (!IsPostBack && Session["usuario"] != null)
            {
                //id_rol = Convert.ToInt32(Session["id_rol"].ToString());
                //Datos();
                //Permisos(id_rol);
                int x = 0;
            }

        }
    }
}