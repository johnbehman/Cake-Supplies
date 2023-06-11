using Cake_Supplies.Controllers;
using Cake_Supplies.Models;

namespace Cake_Supplies.Repository
{
    public interface IItemsRepository
    {
        List<Items> GetAllItemsByColoring();
        List<Items> GetAllItemsByDecoratingTools();
        List<Items> GetAllItemsByBakingSupplies();
        List<Items> GetAllItemsByEdibles();
        Items GetById(int Id);
        void InsertItem(Items item);
        void Update(int id, Items item);
        void Delete(int id);
        Items SearchItemsByName(string Name);
    }
}