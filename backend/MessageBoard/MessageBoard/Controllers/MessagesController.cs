using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoard.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        static List<Models.Message> messages  = new List<Models.Message>  {
                new Models.Message { text = "Some Text from .NET Core", owner = "Mohamad" },
                new Models.Message { text = "Other Text from .NET Core", owner = "Sawas" }
         };

        [HttpGet]
        public IEnumerable<Models.Message> Get()
        {
            return messages;
        }

        [HttpGet("{name}")]
        public IEnumerable<Models.Message> Get(string name)
        {
            return messages.FindAll(messages => messages.owner == name);
        }

        [HttpPost]
        public Models.Message Post([FromBody] Models.Message newMessage )
        {
            messages.Add(newMessage);
            return newMessage;
        }
    }
}