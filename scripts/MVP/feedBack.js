var feedBackModel = /** @class */ (function () {
    //data 
    function feedBackModel(_id, _productId, _userId, _UserName, _description, _rate) {
        if (_id === void 0) { _id = 0; }
        if (_productId === void 0) { _productId = 0; }
        if (_userId === void 0) { _userId = 0; }
        if (_UserName === void 0) { _UserName = ""; }
        if (_description === void 0) { _description = ""; }
        if (_rate === void 0) { _rate = 0; }
        this._id = _id;
        this._productId = _productId;
        this._userId = _userId;
        this._UserName = _UserName;
        this._description = _description;
        this._rate = _rate;
    }
    //getters 
    feedBackModel.prototype.getId = function () { return this._id; };
    feedBackModel.prototype.getProductId = function () { return this._productId; };
    feedBackModel.prototype.getUserId = function () { return this._userId; };
    feedBackModel.prototype.getDescription = function () { return this._description; };
    feedBackModel.prototype.getRate = function () { return this._rate; };
    feedBackModel.prototype.getUserName = function () { return this._UserName; };
    //setters
    feedBackModel.prototype.setId = function (_id) { this._id = _id; };
    feedBackModel.prototype.setProductId = function (_productId) { this._productId = _productId; };
    feedBackModel.prototype.setUserId = function (_userId) { this._userId = _userId; };
    feedBackModel.prototype.setDescription = function (_description) { this._description = _description; };
    feedBackModel.prototype.setUserName = function (_UserName) { this._UserName = _UserName; };
    feedBackModel.prototype.setRate = function (_rate) { this._rate = _rate; };
    return feedBackModel;
}());
export { feedBackModel };
var feedBackView = /** @class */ (function () {
    function feedBackView() {
    }
    feedBackView.prototype.getHtml = function () { return this.html; };
    feedBackView.prototype.setModel = function (_model) {
        this.html = document.createElement("div");
        this.html.setAttribute("class", "feedBackDiv");
        var userNameH2 = document.createElement("p");
        userNameH2.setAttribute("class", "userNameP");
        userNameH2.innerHTML = _model.getUserName();
        var descriptionP = document.createElement("p");
        descriptionP.setAttribute("class", "descriptionP");
        descriptionP.innerHTML = _model.getDescription();
        var rateDiv = document.createElement("div");
        rateDiv.setAttribute("class", "rateDiv");
        for (var i = 0; i < 5; i++) {
            if (_model.getRate() > 0) {
                var star = document.createElement("i");
                star.setAttribute("class", "fas fa-star checked");
                _model.setRate(_model.getRate() - 1);
                rateDiv.append(star);
            }
            else {
                var star = document.createElement("i");
                star.setAttribute("class", "far fa-star unchecked");
                rateDiv.append(star);
            }
        }
        this.html.append(userNameH2, descriptionP, rateDiv);
        document.getElementById("modal-feedBackDiv").append(this.html);
    };
    return feedBackView;
}());
export { feedBackView };
var feedBackPresenter = /** @class */ (function () {
    function feedBackPresenter(_view, _model) {
        this._view = _view;
        this._model = _model;
        _view.setModel(_model);
    }
    feedBackPresenter.prototype.getView = function () { return this._view; };
    ;
    feedBackPresenter.prototype.getModel = function () { return this._model; };
    return feedBackPresenter;
}());
export { feedBackPresenter };
