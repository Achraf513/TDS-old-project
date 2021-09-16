import { feedBackList, globalUser } from './sharedService.js';
import { productItemModel, productItemPresenter, productItemView } from './MVP/productItem.js';
import { feedBackModel, feedBackPresenter, feedBackView } from './MVP/feedBack.js';
//* Defining how the Single page application should behave 
//* and initializing the event listeners for all the buttons etc
function SignIn() {
    var email = document.getElementById("logInEmailInput").value;
    var password = document.getElementById("logInPasswordInput").value;
    if (email == "achraf.affes@gmail.com" && password == "testtest") {
        document.getElementById("SignIn").hidden = true;
        document.getElementById("HomeScreen").hidden = false;
        document.getElementById("navBar").hidden = false;
    }
}
function SignOut() {
    document.getElementById("productsList").hidden = true;
    document.getElementById("SignIn").hidden = false;
    document.getElementById("shopList").hidden = true;
    document.getElementById("HomeScreen").hidden = true;
    document.getElementById("navBar").hidden = true;
}
function goToShopList() {
    document.getElementById("shopList").hidden = false;
    document.getElementById("productsList").hidden = true;
    document.getElementById("HomeScreen").hidden = true;
    window.scrollTo(0, 0);
}
function goToHome() {
    document.getElementById("shopList").hidden = true;
    document.getElementById("productsList").hidden = true;
    document.getElementById("HomeScreen").hidden = false;
    window.scrollTo(0, 0);
}
function goToSignUp() {
    document.getElementById("SignIn").hidden = true;
    document.getElementById("SignUp").hidden = false;
}
function goToSignIn() {
    document.getElementById("SignUp").hidden = true;
    document.getElementById("SignIn").hidden = false;
}
function goToStartShopping() {
    document.getElementById("productsList").hidden = false;
    document.getElementById("HomeScreen").hidden = true;
}
document.getElementById("SignInButton").addEventListener('click', SignIn);
document.getElementById("SignOutButton").addEventListener('click', SignOut);
document.getElementById("goToSignIn").addEventListener('click', goToSignIn);
document.getElementById("goToSignUp").addEventListener('click', goToSignUp);
document.getElementById("goToHome").addEventListener('click', goToHome);
document.getElementById("goToMyShopList").addEventListener('click', goToShopList);
document.getElementById("startShoppingBtn").addEventListener('click', goToStartShopping);
//* fetching data from a fake API and calling the appendData function to
//* append my cart list.
function appendData(table) {
    for (var index = 0; index < table.length; index++) {
        var element = table[index];
        var productItemP = new productItemPresenter(new productItemView(), new productItemModel(element.id, element.title, element.price.toFixed(2), element.description, 4, element.category, element.image));
        globalUser.appendProductsList(productItemP);
        document.getElementById("productsList").append(productItemP.getView().getHtml());
    }
}
fetch('https://fakestoreapi.com/products?limit=14')
    .then(function (res) { return res.json(); })
    .then(function (json) {
    appendData(json);
    feedBackList.push(new feedBackPresenter(new feedBackView(), new feedBackModel(5, 0, 0, "Achraf Affes", "this product is amazing !!!", 3)));
    feedBackList.push(new feedBackPresenter(new feedBackView(), new feedBackModel(5, 0, 0, "Med Amin ben kraim", "this product sucks mate, don't buy it its totally uselesss !!!", 1)));
});
