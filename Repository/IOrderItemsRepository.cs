using Cake_Supplies.Models;

namespace Cake_Supplies.Repository
{
    public interface IOrderItemsRepository
    {
        void AddOrderCustomer(AddOrder newOrder);
        void DeleteOrderById(int id);
        void EditOrderItems(OrderItems orderItems);
    }
}