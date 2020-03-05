using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Text;
namespace InverterAPI.Controllers
{
    public class InverterController : ApiController
    {
       
        [HttpGet]
        public String GetString(string inputstr)
        {
            String revstr = "Test";
            revstr = reversestring(inputstr);
            return revstr;

        }

        private string reversestring(string str)
        {
            StringBuilder finalstr = new StringBuilder();

            try
            {
                var newelements = str.Split();

                foreach (var element in newelements)
                {
                    int revcnt = 0;
                    var ellength = element.Length - 1;
                    char[] revstr = new char[element.Length];

                    while (ellength >= 0)
                    {

                        if (((int)element[ellength] >= 65 && (int)element[ellength] <= 90) || ((int)element[ellength] >= 97 && (int)element[ellength] <= 122))
                        {
                            if (revstr[revcnt] == 0)
                            {
                                revstr[revcnt] = element[ellength];
                            }
                            else
                            {
                                revcnt = revcnt + 1;
                                revstr[revcnt] = element[ellength];

                            }
                            revcnt = revcnt + 1;
                        }
                        else
                        {
                            revstr[ellength] = element[ellength];
                        }
                        ellength = ellength - 1;

                    };

                    string t = new string(revstr);
                    finalstr.Append(t);
                    finalstr.Append(" ");


                }
            } catch (Exception ex)
            {
                throw ex;
            }
           
            return finalstr.ToString();
        }
    }
}
