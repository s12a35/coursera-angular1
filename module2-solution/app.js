/**
 * Created by thomasschuler on 19.12.16.
 */
(function () {
    'use strict'

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', toBuyCtrl)
    .controller('AlreadyBoughtController', alreadyBoughtCtrl)
    .service('ShoppingListCheckOffService', shoppingListCheckOffService);
})();

toBuyCtrl.$inject = ['ShoppingListCheckOffService'];
function toBuyCtrl(ShoppingListCheckOffService){
    var buyCtrl = this;

    buyCtrl.items = ShoppingListCheckOffService.getBuyItems();

    buyCtrl.switchList = function (itemIndex) {
        ShoppingListCheckOffService.switchList(itemIndex);
    }
}

alreadyBoughtCtrl.$inject = ['ShoppingListCheckOffService'];
function alreadyBoughtCtrl(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBougthItems();

}


function shoppingListCheckOffService(){
var service = this;
    var buyItems = [
        {name: "cookies", quantity: 10},
        {name: "Oreos", quantity: 4},
        {name: "Pizza", quantity: 2},
        {name: "Milk", quantity: 1},
        {name: "Bananas", quantity: 5}
    ];

    var boughtItems = [];

    service.getBuyItems = function () {
        return buyItems;
    };

    service.getBougthItems = function () {
        return boughtItems;
    };

    service.switchList = function (itemIndex) {
        var item = buyItems[itemIndex];
        buyItems.splice(itemIndex,1);
        boughtItems.push(item);
    };

}


