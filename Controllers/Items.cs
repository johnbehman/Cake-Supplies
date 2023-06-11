using Cake_Supplies.Models;
using Cake_Supplies.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cake_Supplies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        // GET: api/<Users>
        private readonly IItemsRepository _itemsRepository;



        public ItemsController(IItemsRepository itemsRepository)
        {
            _itemsRepository = itemsRepository;
        }

        // GET: api/<itemController>
        [HttpGet("GetAllItemsByColoring")]
        public IActionResult GetAllItemsByColoring()
        {
            return Ok(_itemsRepository.GetAllItemsByColoring());
        }

        //======================================================

        [HttpGet("GetAllItemsByDecoratingTools")]
        public IActionResult GetAllItemsByDecoratingTools()
        {
            return Ok(_itemsRepository.GetAllItemsByDecoratingTools());
        }

        //======================================================
        [HttpGet("GetAllItemsByBakingSupplies")]
        public IActionResult GetAllItemsByBakingSupplies()
        {
            return Ok(_itemsRepository.GetAllItemsByBakingSupplies());
        }
        //======================================================
        [HttpGet("GetAllItemsByEdibles")]
        public IActionResult GetAllItemsByEdibles()
        {
            return Ok(_itemsRepository.GetAllItemsByEdibles());
        }
        //======================================================







        [HttpPost("AddItems")]
        public IActionResult AddItems(Items item)
        {
            _itemsRepository.InsertItem(item);
            // return Created("/api/item/" + item.Id, item);
            return Created("", item);

        }


        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            Items item = (Items)_itemsRepository.GetById(id);
            if (item == null)
            {
                return NotFound($"{id} Not Found!");
            }
            return Ok(item);

        }
        //======================================

        [HttpPut("UpdateItems/{id}")]
        public IActionResult UpdateItems(int id, Items item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _itemsRepository.Update(id, item);
            return NoContent();
        }






        [HttpDelete("DeleteItems/{id}")]
        public IActionResult Delete(int id)
        {
            Items user = (Items)_itemsRepository.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            _itemsRepository.Delete(user.Id);
            return NoContent();
        }

        [HttpGet("SearchItemsByName")]
        public IActionResult SearchItemsById(string Name)
        {
            if (Name == null)
            {
                return BadRequest();
            }
            Items items = _itemsRepository.SearchItemsByName(Name);
            if (items == null)
            {
                return NotFound($"{Name} Not Found!");
            }
            return Ok(items);



        }


    }
}