//using Cake_Supplies.Models;
//using Cake_Supplies.Utils.cs;
//using Microsoft.Data.SqlClient;
//using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

//namespace Cake_Supplies.Repository
//{
//    public class LoginRepository : BaseRepository, ILoginRepository
//    {




//        public LoginRepository(IConfiguration configuration) : base(configuration)
//        {
//        }


//        public List<Users> GetUsersByEmail(string isStaff)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();

//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"SELECT    [id]
//                                             ,[name]
//                                             ,[email]
//                                             ,[isStaff]
//                                             FROM [dbo].[Users]
//                                              	  WHERE [Users].IsStaff=@isStaff ";

//                    cmd.Parameters.AddWithValue("@isStaff", isStaff);
//                    var reader = cmd.ExecuteReader();
//                    var user = new List<Users>();
//                    while (reader.Read())
//                    {
//                        var users = new Users()
//                        {
//                            Id = DbUtils.GetInt(reader, "Id"),
//                            Name = DbUtils.GetString(reader, "Name"),
//                            Email = DbUtils.GetString(reader, "Email"),
//                            IsStaff = DbUtils.GetBoolean(reader, "IsStaff")

//                        };
//                        //var test = user;
//                        user.Add(users);
//                    }
//                    conn.Close();
//                    return user;
//                }
//            }
//        }







//    }
//}



//    //    public Users GetUsersByEmail(string usersId)
//    //    {
//    //        using (var conn = Connection)
//    //        {
//    //            conn.Open();
//    //            using (var cmd = conn.CreateCommand())
//    //            {
//    //                cmd.CommandText = @"SELECT [id]
//    //                                      ,[name]
//    //                                      ,[email]
//    //                                      ,[isStaff]
//    //                                  FROM [dbo].[Users]
//    //                                    WHERE Id = @usersId";
//    //                cmd.Parameters.AddWithValue("@userId", userId");
//    //                SqlDataReader reader = cmd.ExecuteReader();

//    //                while (reader.Read())
//    //                {
//    //                    Users user = new Users()
//    //                    {
//    //                        Id = DbUtils.GetInt(reader, "Id"),
//    //                        Name = DbUtils.GetString(reader, "Name"),
//    //                        Email = DbUtils.GetString(reader, "Email"),
//    //                        IsStaff = DbUtils.GetBoolean(reader, "IsStaff")






//    //                    };

//    //                    return user;
//    //                }
//    //            }
//    //            return null;
//    //        }
//    //    }
//    //}

