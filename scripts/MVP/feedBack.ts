
export class feedBackModel {
    //data 
    constructor(private _id: number = 0, 
        private _productId: number = 0,
        private _userId: number = 0, 
        private _UserName: string="",
        private _description: string = "",
        private _rate: number = 0 ) {
    }
    //getters 
    getId() { return this._id } 
    getProductId() { return this._productId } 
    getUserId() { return this._userId } 
    getDescription() { return this._description }  
    getRate() { return this._rate } 
    getUserName(){ return this._UserName}
    //setters
    setId(_id: number) { this._id = _id } 
    setProductId(_productId: number) { this._productId = _productId } 
    setUserId(_userId: number) { this._userId = _userId } 
    setDescription(_description: string) { this._description = _description }  
    setUserName(_UserName: string) { this._UserName = _UserName }  
    setRate(_rate: number) { this._rate = _rate } 
}

export class feedBackView {
    private html: any; 
    
    constructor() { }
    getHtml() { return this.html; }

    setModel(_model: feedBackModel) { 
        this.html = document.createElement("div");
        this.html.setAttribute("class", "feedBackDiv"); 

        var userNameH2 = document.createElement("p");
        userNameH2.setAttribute("class","userNameP");
        userNameH2.innerHTML = _model.getUserName();

        var descriptionP = document.createElement("p");
        descriptionP.setAttribute("class","descriptionP");
        descriptionP.innerHTML = _model.getDescription();

        var rateDiv = document.createElement("div");
        rateDiv.setAttribute("class","rateDiv");
        
        for (let i = 0; i < 5; i++) {
            if(_model.getRate()>0){
                var star = document.createElement("i") ;
                star.setAttribute("class","fas fa-star checked");
                _model.setRate(_model.getRate()-1);
                rateDiv.append(star);
            }else{
                var star = document.createElement("i") ;
                star.setAttribute("class","far fa-star unchecked");
                rateDiv.append(star);
            }
        }  
        this.html.append(userNameH2,descriptionP,rateDiv);
        document.getElementById("modal-feedBackDiv").append(this.html);
    } 
}


export class feedBackPresenter {
    constructor(private _view: feedBackView, private _model: feedBackModel) {
        _view.setModel(_model); 
    }
    getView() { return this._view };
    getModel() { return this._model } 
}
