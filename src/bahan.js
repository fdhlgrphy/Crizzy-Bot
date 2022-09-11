/**
* BACKUPAN SEBAGIAN SC MUNGKIN AKAN TERPAKAI
*/


/*buttons = [
{buttonId: 'owner', buttonText: {displayText: 'Creator'}, type: 1},
{buttonId: 'tes', buttonText: {displayText: 'None'}, type: 1}
]
buttonMessage = {
text: `*Crizzy-Bot*

*Hi* ${m.pushName}
Jam : 

*Commands:*
	• ${prefix}nulis [text]
	• ${prefix}play [query]
	• ${prefix}ytsearch [query]
	• ${prefix}ytmp3 [url]
	• ${prefix}sticker
	• ${prefix}swm [q|q]
*Fun Menu*
	• ${prefix}menfes

*Buy Followers*
	• ${prefix}order
	• ${prefix}cekstatus [id]
	> ( Masih demo )
`,
	
footer: 'CrizzyBot - Beta\n© 2022 Fadhil Graphy',
buttons: buttons,
headerType: 1
}*/

//conn.sendMessage(from, buttonMessage,{quoted: m})

/**
function sendMail(name, email, subject, message) {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.set('Authorization', 'Basic ' + base64.encode('<API Key>'+":" +'<Secret Key>'));

  const data = JSON.stringify({
    "Messages": [{
      "From": {"Email": "<YOUR EMAIL>", "Name": "<YOUR NAME>"},
      "To": [{"Email": email, "Name": name}],
      "Subject": subject,
      "TextPart": message
    }]
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };

  fetch("https://api.mailjet.com/v3.1/send", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
*/