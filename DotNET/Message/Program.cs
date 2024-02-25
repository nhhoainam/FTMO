
using SocketIOClient;
try
{
    // đây là phần code kết nối đến socket server
    string token = "721338d4744a17b619875b502ee17f51c3c428e5bcf1245c0ac6645c6e125af3";
    var client = new SocketIOClient.SocketIO("http://103.74.100.29:8080", new SocketIOOptions
    {
        ExtraHeaders = new Dictionary<string, string>
        {
            { "Authorization", token }
        }
    });
    await client.ConnectAsync();

    Console.WriteLine("Connected to the server!");

    // đây là cái e đặt mặc định tin nhắn a có thể thay đổi theo ý a nếu như ý a nói là gửi những gì đến từ server của a thì a có thể tạo hàm riêng để gửi tin nhắn đó
    string message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    // đây là hàm gửi tin nhắn
    MessageController.sendMessage(client, message);
}
catch (Exception ex)
{
    Console.WriteLine("Error: " + ex.Message);
}


Console.ReadKey();