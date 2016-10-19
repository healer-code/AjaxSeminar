using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace DemoAjax.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetDataFile()
        {
            string temp = "Result response from server by text";
            return Json(temp, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetDataFileXML()
        {
            XDocument temp = new XDocument();
            temp = XDocument.Load(Server.MapPath("~/Content/responeXML.xml"));
            return this.Content(temp.ToString(), "text/xml");
        }

        [HttpPost]
        public ActionResult CheckLength()
        {
            var temp = Request.Form["text"];
            return this.Content(temp.Length.ToString());
        }
    }
}