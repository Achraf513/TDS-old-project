import { productItemModel } from './MVP/productItem.js';
import { ShopListPresenter } from './MVP/shopList.js';
//* The User class defines the `getInstance` method that lets clients access
//* the unique User instance. 
var User = /** @class */ (function () {
    //* The User's constructor should always be private to prevent direct
    //* construction calls with the `new` operator. 
    function User() {
        //* The shopListP is a ShopListPresenter that containes a list of shopItemPresenters
        //* mapped using their own IDs, this makes the comminucation between the products 
        //* and myCart screens much easier
        this.shopListP = new ShopListPresenter;
        this.ProductList = {};
    }
    User.prototype.getProductList = function () { return this.ProductList; };
    User.prototype.appendProductsList = function (product) {
        this.ProductList[product.getModel().getId()] = product;
    };
    User.prototype.removeFromProductsList = function (product) {
        delete this.ProductList[product.getModel().getId()];
    };
    //* The static method that controls the access to the singleton instance. 
    //* This implementation let you subclass the Singleton class while keeping
    //* just one instance of each subclass around.
    User.getInstance = function () {
        if (!User.instance) {
            User.instance = new User();
        }
        return User.instance;
    };
    User.prototype.getShopListP = function () { return this.shopListP; };
    return User;
}());
var selectedItem = /** @class */ (function () {
    function selectedItem(_model) {
        this._model = _model;
        this.html = document.createElement("div");
        this.html.setAttribute("class", "modal");
        this.html.setAttribute("id", "selectedProductModal");
        this.modalContent = document.createElement("div");
        this.modalContent.setAttribute("class", "modal-content");
        this.modal_closeBtn = document.createElement("span");
        this.modal_closeBtn.setAttribute("id", "modalClose");
        this.modal_closeBtn.innerHTML = "&times";
        this.modal_closeBtn.onclick = function () {
            document.getElementById("selectedProductModal").style.display = "none";
        };
        this.modal_productName = document.createElement("h1");
        this.modal_productName.setAttribute("class", "modal-ProductName");
        this.modal_productName.innerHTML = _model.getProductName();
        this.modal_img = document.createElement("img");
        this.modal_img.setAttribute("class", "modal-Img");
        this.modal_img.setAttribute("src", _model.getImg());
        this.modal_description = document.createElement("h1");
        this.modal_description.setAttribute("class", "modal-Description");
        this.modal_description.innerHTML = _model.getDescription();
        this.modal_price = document.createElement("h2");
        this.modal_price.setAttribute("class", "modal-Price");
        this.modal_price.innerHTML = _model.getPrice().toString() + "$";
        var hr1 = document.createElement("hr");
        var hr2 = document.createElement("hr");
        this.modal_feedBackDiv = document.createElement("div");
        this.modal_feedBackDiv.setAttribute("id", "modal-feedBackDiv");
        //TO-DO : add a new MVP element for feedbacks !
        //TO-DO : print all feedbacks here ! 
        this.modalContent.append(this.modal_closeBtn, this.modal_productName, hr1, this.modal_img, this.modal_description, this.modal_price, hr2, this.modal_feedBackDiv);
        this.html.appendChild(this.modalContent);
        document.body.appendChild(this.html);
        /*<div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
        </div>*/
    }
    selectedItem.prototype.updateModal = function () {
        this.modal_productName.innerHTML = this._model.getProductName();
        this.modal_img.setAttribute("src", this._model.getImg());
        this.modal_description.innerHTML = this._model.getDescription();
        this.modal_price.innerHTML = "Price : " + this._model.getPrice().toString() + "$";
    };
    return selectedItem;
}());
//* Here we export the globalUser as a constant and we use it all screens
export var globalUser = User.getInstance();
export var selectedProduct = new selectedItem(new productItemModel());
export var feedBackList = [];
