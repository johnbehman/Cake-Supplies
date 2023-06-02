using Cake_Supplies.Models;

namespace Cake_Supplies.Repository
{
    public interface IOrderItemsRepository
    {
        void Insert(OrderItems orderItems);
    }
}