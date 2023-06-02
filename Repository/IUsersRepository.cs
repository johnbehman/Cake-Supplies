using Cake_Supplies.Models;

namespace Cake_Supplies.Repository
{
    public interface IUsersRepository
    {
        void Delete(int id);
        List<Users> GetAllUsers();
        Users GetById(int Id);
        Users GetUsersByEmail(string email);
        void Insert(Users user);
        void Update(int id, Users user);
    }
}