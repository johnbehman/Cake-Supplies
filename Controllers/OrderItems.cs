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


        //==================================AddOrder=======================================


        [HttpPost("/AddOrder")]
        public IActionResult Post(AddOrder newOrder)
        {
            _orderItemsRepository.AddOrderCustomer(newOrder);
            return Created("", newOrder);
        }


        //===================================UpdateOrder=============================================


        // PUT api/<BookController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, OrderItems orderItems)
        {
            if (id != orderItems.OrderId)
            {
                return BadRequest();
            }

            _orderItemsRepository.EditOrderItems(orderItems);
            return NoContent();
        }
        //============================DeleteOrder==============================
        [HttpDelete("DeleteOrderById/{id}")]
        public IActionResult Delete(int id)
        {
            _orderItemsRepository.DeleteOrderById(id);
            return NoContent();
        }


    }
}
