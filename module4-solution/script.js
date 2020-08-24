var arr = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];
for (var i = 0; i < 10; i++) {
  if (arr[i][0] == "J" || arr[i][0] == "j") {
    goodByeSpeaker.sayGoodBye(arr[i]);
  } else {
    helloSpeaker.sayHello(arr[i]);
  }
}
