var faye = require('faye'),
	bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 60});
	
bayeux.bind('publish',function(clientId, channel, data) {}
	console.log("Publish = ' + channel + ' : ' + data.text);
);

bayeux.bind('subscribe', function(clientId, channel){
	console.log("Subscriber: ' + clientId + ' - ' + channel);
	bayeux.getClient().publish('/channel', {
	  text:       'Sample text message',
	});
});


bayeux.listen(8000);

