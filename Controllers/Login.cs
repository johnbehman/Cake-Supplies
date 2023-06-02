
//using Cake_Supplies.Repository;
//using Microsoft.AspNetCore.Mvc;

//namespace Cake_Supplies.Controllers
//{



//    [Route("api/[controller]")]
//    [ApiController]
//    public class LoginControllers : ControllerBase
//    {

//        // GET: api/<Users>
//        private readonly ILoginRepository _loginRepository;



//        public LoginControllers(ILoginRepository loginRepository)
//        {
//            _loginRepository = loginRepository;
//        }

//        // GET: api/<userController>
//        [HttpGet("Login")]
//        public IActionResult Login()
//        {
//            return Ok(_loginRepository.GetUsersByEmail(string IsStaff));
//        }
//    }
//}