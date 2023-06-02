using Cake_Supplies.Models;
using Cake_Supplies.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cake_Supplies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemsController : ControllerBase
    {
        private readonly IOrderItemsRepository _orderItemsRepository;



        public OrderItemsController(IOrderItemsRepository orderItemsRepository)
        {
            _orderItemsRepository = orderItemsRepository;
        }




        [HttpPost("/AddOrderItems")]
        public IActionResult AddOrderItems(OrderItems orderItems)
        {
            _orderItemsRepository.Insert(orderItems);
            return Created("", orderItems);
        }


        //===========================================================



        //// GET: api/<OrderItems>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<OrderItems>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<OrderItems>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<OrderItems>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<OrderItems>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
