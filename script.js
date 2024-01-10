function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formData = {
        'Name': name,
        'Email': email,
        'Message': message
    };


    if (!name.trim() || !email.trim() || !message.trim()) {
        document.getElementById('error-message').textContent = 'Please fill in all required fields.';
        return;
    }

    // Replace with your actual bot token and chat ID
    var botToken = '6568911703:AAG_jD70KY5ic_UITn5e5TF7mibVozEksZM';
    var chatId = '6938682201';

    var htmlMessage = "<b>New Form Submission</b>\n\n";
    for (var key in formData) {
        htmlMessage += "<b>" + key + ":</b> " + formData[key] + "\n";
    }

    var apiUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage";

    var params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: htmlMessage,
            parse_mode: 'HTML',
        }),
    };

    fetch(apiUrl, params)
        .then(response => response.json())
        .then(data => {
            console.log('Message sent successfully:', data);
            document.getElementById('error-message').textContent = 'Message sent successfully!';
            
            //Reset Input Boxes
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("message").value = '';
        })
        .catch(error => {
            console.error('Error sending message:', error);
            document.getElementById('error-message').textContent = 'Error sending message. Please try again.';
        });
}