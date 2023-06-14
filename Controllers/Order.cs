using Cake_Supplies.Models;
using Cake_Supplies.Repository;
using Microsoft.AspNetCore.Mvc;



namespace Cake_Supplies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class OrderController : ControllerBase
    {
        // GET: api/<Users>
        private readonly IOrderRepository _orderRepository;



        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }


        //GET: api/<userController>
        [HttpGet("GetAllOrderByAdmin")]
        public IActionResult GetAllOrdersByAdmin()
        {

            return Ok(_orderRepository.GetAllOrdersByAdmin());
        }

        //==========================================================
        [HttpGet("GetById/{customerId}")]
        public IActionResult GetById(int customerId)
        {
            if (customerId == null)
            {
                return BadRequest();
            }
            var customerOrder = _orderRepository.GetAllOrderById(customerId);
            if (customerOrder == null)
            {
                return NotFound($"{customerId} Not Found!");
            }
            return Ok(customerOrder);

        }

    }
}