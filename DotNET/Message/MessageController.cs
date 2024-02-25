using Message.Models;

public class MessageController
{
    public static async void sendMessage(SocketIOClient.SocketIO client, string message)
    {
        await client.EmitAsync("send-message", new MessageModel { description = message });
    }

}