(function () {
  "use strict";
  var button = document.getElementById("test-button");
  var result = document.getElementById("test-result");
  var count = 0;
  button.addEventListener("click", function () {
    count += 1;
    result.textContent = "نجح الاختبار! الزر يعمل بعد النشر · " + count;
    result.classList.add("passed");
    button.textContent = "جرّب مرة أخرى";
  });
}());
