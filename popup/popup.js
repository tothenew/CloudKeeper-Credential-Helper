// On load of popup
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["credentialsFile"], function (data) {
    if (typeof data.credentialsFile !== "undefined")
      document.getElementById("credentialsFile").innerText =
        data.credentialsFile;
  });
  chrome.storage.sync.get(["env_variables"], function (data) {
    if (typeof data.env_variables !== "undefined")
      document.getElementById("env_variables").innerText =
        data.env_variables;
  });
  chrome.storage.sync.clear();
});
