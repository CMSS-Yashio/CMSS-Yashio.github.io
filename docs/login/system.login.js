function lg_form() {
  session_do();
}
function session_do(type, data) {
  switch (type) {
    case "save":
      sessionStorage.setItem(data.key, data.username);
      return true;
    case "get":
      if (session_do("check", data)) {
        data.username = sessionStorage.getItem(data.key);
        return data;
      } else {
        return false;
      }
    case "delete":
      sessionStorage.removeItem(data.key);
      return true;
    case "check":
      if (!sessionStorage.getItem(data.key)) {
        return false;
      } else {
        return true;
      }
    default:
      return false;
  }
}
