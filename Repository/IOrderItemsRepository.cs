using Cake_Supplies.Models;

namespace Cake_Supplies.Repository
{
    public interface IOrderItemsRepository
    {
        void AddOrderCustomer(AddOrder newOrder);
        void AddOrderItems(AddOrderFromCustomer newOrder);
    }
}