fetch("https://api.github.com/users/araiara")
	.then(response => response.json())
	.then(function(data) {
		//console.log(data)
		document.getElementById('myName').textContent = 'Name: ' + data['name'];

		document.getElementById('myPic').src = data['avatar_url'];
	});

fetch("https://api.github.com/users/araiara/repos")
.then(response => response.json()) 
	.then(function(data) {
		var tableBody = document.getElementById('tableBody');
		var statusHTML = '';

		data.forEach(Element => {
		    statusHTML += '<tr>';
		    statusHTML += '<td>' + Element['name'] + '</td>';
		    statusHTML += '<td>' + Element['html_url'] + '</td>';
		    statusHTML += '</tr>';
		});
		tableBody.innerHTML = statusHTML;

	});