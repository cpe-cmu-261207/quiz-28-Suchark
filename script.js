const DIVuserclass = document.querySelector("#div-user-card");
const Imgpro = document.querySelector("#img-profile");
const Pname = document.querySelector("#p-name");
const btnRandom = document.querySelector("#btn-random");
const Pemail = document.querySelector("#p-email");

callApi();
element.style.display = "none";
function element() {
  Loading.innerText = "Loading Profile...";
}
element.style.display = " ";

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  Imgpro.src = resp.data.picture.large;
  Pname.src = resp.data.name;
}
