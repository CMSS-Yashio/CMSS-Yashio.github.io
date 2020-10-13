if (session_do("check", "")) {
  location.href = "/";
} else {
  location.href = "/login/";
}
function lg_form() {
  let data;
  data.grp = document.login_form.grp.value;
  data.id = document.login_form.id.value;
  let shaObj = new jsSHA("SHA3-512", "TEXT", { encoding: "UTF8" });
  sha3obj.update(document.login_form.pass.value);
  data.pass = shaObj.getHash("HEX");
  data.code = document.login_form.code.value;
  session_do("save", data);
}
function session_do(type, data) {
  switch (type) {
    case "save":
      sessionStorage.setItem("id", data.id);
      return true;
    case "get":
      if (session_do("check", data)) {
        data.id = sessionStorage.getItem("id");
        return data;
      } else {
        return false;
      }
    case "delete":
      sessionStorage.removeItem("id");
      return true;
    case "check":
      if (!sessionStorage.getItem("id")) {
        return false;
      } else {
        return true;
      }
    default:
      return false;
  }
}
