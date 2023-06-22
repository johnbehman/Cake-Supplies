using Cake_Supplies.Models;
using Cake_Supplies.Utils.cs;
using Microsoft.Data.SqlClient;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;
using Users = Cake_Supplies.Models.Users;

namespace Cake_Supplies.Repository;

public class UsersRepository : BaseRepository
, IUsersRepository
{


    public UsersRepository(IConfiguration configuration) : base(configuration)
    {
    }


    public List<Users> GetAllUsers()
    {
        using (var conn = Connection)
        {
            conn.Open();

            using (var cmd = conn.CreateCommand())




            {
                cmd.CommandText = @"  

                                        SELECT  [id]
                                              ,[name]
                                              ,[email]
                                              ,[isStaff]
                                              ,[phone]
                                              ,[address]
                                          FROM .[dbo].[Users]";
     

                var reader = cmd.ExecuteReader();
                var user = new List<Users>();
                while (reader.Read())
                {
                    var users = new Users()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        Name = DbUtils.GetString(reader, "Name"),
                        Phone = DbUtils.GetString(reader,"Phone"),
                        Address = DbUtils.GetString(reader,"Address"),
                        Email = DbUtils.GetString(reader, "Email"),
                        IsStaff = DbUtils.GetNullableBoolean(reader, "IsStaff")

                    };
                    user.Add(users);
                }
                conn.Close();
                return user;
            }
        }
    }
    //===========================================================

    public Users GetUsersByEmail(string email)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"SELECT  [id]
                                              ,[name]
                                              ,[email]
                                              ,[isStaff]
                                              ,[phone]
                                              ,[address]
                                      FROM [dbo].[Users]
                                        WHERE Email = @email";
                cmd.Parameters.AddWithValue("@email", email);

                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Users user = new Users()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        Name = DbUtils.GetString(reader, "Name"),
                        Phone = DbUtils.GetString(reader, "Phone"),
                        Address = DbUtils.GetString(reader, "Address"),
                        Email = DbUtils.GetString(reader, "Email"),
                        IsStaff = DbUtils.GetNullableBoolean(reader, "IsStaff")
                    };

                    return user;
                }
            }
            return null;
        }
    }

    //===============================================================


    public Users GetById(int Id)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"SELECT [id]
                                              ,[name]
                                              ,[email]
                                              ,[isStaff]
                                              ,[phone]
                                              ,[address]
                                      FROM [dbo].[Users]
                                       WHERE Id = @id";
                cmd.Parameters.AddWithValue("@id", Id);
                SqlDataReader reader = cmd.ExecuteReader();
                Users user = new Users();
                
                if (reader.Read())
                {
                    user = new Users()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        Name = DbUtils.GetString(reader, "Name"),
                        Phone = DbUtils.GetString(reader, "Phone"),
                        Address = DbUtils.GetString(reader, "Address"),
                        Email = DbUtils.GetString(reader, "Email"),
                        IsStaff = DbUtils.GetNullableBoolean(reader, "IsStaff")

                    };
                }
                reader.Close();
                return user;
            }
        }
    }

    //=====================================================================
    public void Insert(Users user)
    {
        using (SqlConnection conn = Connection)
        {
            conn.Open();
            using (SqlCommand cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"INSERT INTO [Users] 
                                                    (id
                                                     ,name
                                                    ,email
                                                    ,isStaff) 
                                                    OUTPUT INSERTED.Id 
                                                    VALUES 
                                                     (@id
                                                     ,@name
                                                    ,@email
                                                    ,@IsStaff)";
                DbUtils.AddParameter(cmd, "@Id", user.Id);
                DbUtils.AddParameter(cmd, "@name", user.Name);
                DbUtils.AddParameter(cmd, "@email", user.Email);
                DbUtils.AddParameter(cmd, "@IsStaff", user.IsStaff);

                var id = (int)cmd.ExecuteScalar();

                id = user.Id;
            }
        }
    }

    //=================================================


    public void Update(int id, Users user)
    {
        using (SqlConnection conn = Connection)
        {
            conn.Open();
            using (SqlCommand cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"UPDATE [dbo].[Users]
                                   SET [Name] = @name
                                      ,[Email] = @email
                                      ,[IsStaff] = @isStaff
                                      WHERE Id = @id";


                DbUtils.AddParameter(cmd, "@id", user.Id);
                DbUtils.AddParameter(cmd, "@name", user.Name);
                DbUtils.AddParameter(cmd, "@email", user.Email);
                DbUtils.AddParameter(cmd, "@IsStaff", user.IsStaff);

                cmd.ExecuteNonQuery();

            }
            conn.Close();
        }
    }

    //=====================================================

    public void Delete(int id)
    {
        //using (SqlConnection conn = Connection)

        using (var conn = Connection)
        {
            conn.Open();

            using (SqlCommand cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"DELETE FROM [Users] WHERE Id = @id";
                //cmd.Parameters.AddWithValue("@id", id);
                DbUtils.AddParameter(cmd, "@id", id);

                cmd.ExecuteNonQuery();
            }
            conn.Close();
        }
    }


}
