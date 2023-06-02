using Microsoft.AspNetCore.Mvc;
using Cake_Supplies.Models;
using Cake_Supplies.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cake_Supplies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // GET: api/<Users>
        private readonly IUsersRepository _usersRepository;



        public UsersController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        // GET: api/<userController>
        [HttpGet("GetAllUsers")]
        public IActionResult GetAllUsers()
        {
            return Ok(_usersRepository.GetAllUsers());
        }


     
        //=============================================================


        [HttpPost("AddUsers")]
        public IActionResult AddUser(Users user)
        {
            _usersRepository.Insert(user);
            return Created("/api/user/" + user.Id, user);
        }


        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            Users user = (Users)_usersRepository.GetById(id);
            if (user == null)
            {
                return NotFound($"{id} Not Found!");
            }
            return Ok(user);

        }
        //======================================

        [HttpGet("GetByEmail/{email}")]
        public IActionResult GetByEmail(string email)
        {
            if (email == null)
            {
                return BadRequest();
            }
            Users user = (Users)_usersRepository.GetUsersByEmail(email);
            if (user == null)
            {
                return NotFound($"{email} Not Found!");
            }
            return Ok(user);

        }
        //======================================

        [HttpPut("{id}")]
        public IActionResult UpdateUsers(int id, Users user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _usersRepository.Update(id, user);
            return NoContent();
        }






        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Users user = (Users)_usersRepository.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            _usersRepository.Delete(user.Id);
            return NoContent();
        }

       
    }
}
