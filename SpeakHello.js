(function () {

    var helloSpeaker = {};
    helloSpeaker.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
helloSpeaker.name.length=name;    


var speakWord = "Hello";

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
    }

 window.helloSpeaker = helloSpeaker;
})(window);