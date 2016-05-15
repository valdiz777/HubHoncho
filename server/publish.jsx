Meteor.publish("hubhoncho", function() {
    return HonchoDB.find(); //fetch gives us the object
});

Meteor.publish("hubuser", function() {
    return HonchoDB.find({user: this.userId}); //fetch gives us the object
});