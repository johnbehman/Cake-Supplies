using Cake_Supplies.Controllers;
using Cake_Supplies.Models;

namespace Cake_Supplies.Repository
{
    public interface IOrderByAdminRepository
    {
        void Delete(int id);
        //List<Order> FetchOrderByCustomer();
        List<OrderByAdmin> GetAllOrdersByAdmin();
        OrderByAdmin GetById(int Id);
        void Insert(OrderByAdmin order);
        void Update(int id, OrderByAdmin order);
    }
}