﻿using Cake_Supplies.Models;
using Cake_Supplies.Repository;
using Microsoft.AspNetCore.Mvc;



namespace Cake_Supplies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        // GET: api/<Users>
        private readonly IOrderByAdminRepository _orderRepository;



        public OrderController(IOrderByAdminRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        // GET: api/<userController>
        [HttpGet("GetAllOrdersByAdmin")]
        public IActionResult GetAllOrdersByAdmin()
        {
            return Ok(_orderRepository.GetAllOrdersByAdmin());
        }
        // =============================================================================

        //// GET: api/<userController>
        //[HttpGet("GetOrdersBycustomer")]
        //public IActionResult FetchOrderByCustomer()
        //{
        //    return Ok(_orderRepository.FetchOrderByCustomer());
        //}



        //[HttpPost("AddOrders")]
        //public IActionResult AddOrders(Order order)
        //{
        //    _orderRepository.Insert(order);
        //    return Created("/api/order /" + order.Id, order);
        //}


        //[HttpGet("GetById/{id}")]
        //public IActionResult GetById(int id)
        //{
        //    if (id == null)
        //    {
        //        return BadRequest();
        //    }
        //    Order order = (Order)_orderRepository.GetById(id);
        //    if (order == null)
        //    {
        //        return NotFound($"{id} Not Found!");
        //    }
        //    return Ok(order);

        //}



        //        using Cake_Supplies.Repository;
        //using Microsoft.AspNetCore.Mvc;

        //namespace Cake_Supplies.Controllers
        //    {



        //        [Route("api/[controller]")]
        //        [ApiController]
        //        public class LoginControllers : ControllerBase
        //        {

        //            // GET: api/<Users>
        //            private readonly ILoginRepository _loginRepository;



        //            public LoginControllers(ILoginRepository loginRepository)
        //            {
        //                _loginRepository = loginRepository;
        //            }

        //            // GET: api/<userController>
        //            [HttpGet("Login/")]
        //            public IActionResult Login()
        //            {
        //                return Ok(_loginRepository.GetUsersByEmail());
        //            }
        //        }
        //    }



    }
}