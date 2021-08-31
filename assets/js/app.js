// all event handler
document.getElementById('low-memory').addEventListener('click', lowMemory )
document.getElementById('max-memory').addEventListener('click', maxMemory )
document.getElementById('low-storage').addEventListener('click', lowStorage )
document.getElementById('mid-storage').addEventListener('click', midStorage )
document.getElementById('max-storage').addEventListener('click', maxStorage )
document.getElementById('delivery-free').addEventListener('click', freeDelivery)
document.getElementById('with-delivery').addEventListener('click', withDelivery )
/* Memory */
function lowMemory() {
    const lowMemoryCost = document.getElementById('memory-cost');
    lowMemoryCost.innerText = '0';
    updateTotal();
};
function maxMemory() {
    const maxMemoryCost = document.getElementById('memory-cost');
    maxMemoryCost.innerText = '180';
    updateTotal();
}
/* Storage */
function lowStorage() {
    const lowStorageCost = document.getElementById('storage-cost');
    lowStorageCost.innerText = '0';
    updateTotal();
}
function midStorage() {
    const midStorageCost = document.getElementById('storage-cost');
    midStorageCost.innerText = '100';
    updateTotal();
}
function maxStorage() {
    const maxStorageCost = document.getElementById('storage-cost');
    maxStorageCost.innerText = '180';
    updateTotal();
}
// delivery charge
function freeDelivery() {
    const freeDeliveryCost = document.getElementById('delivery-cost');
    freeDeliveryCost.innerText = '0';
    updateTotal();
}
function withDelivery () {
    const withDeliveryCost = document.getElementById('delivery-cost');
    withDeliveryCost.innerText = '20';
    updateTotal();
}
// update total function
function updateTotal () {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const exMemoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const exStorageCost = parseInt(document.getElementById('storage-cost').innerText);
    const dvChargeCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalCost = bestPrice + exMemoryCost + exStorageCost + dvChargeCost;
    // update cost 
    const totalCostValue = document.getElementById('total-cost').innerText = totalCost; 
    const avgTotal = document.getElementById('avg-total').innerText;
    avgTotal.innerText = totalCostValue;
}
// promo code
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    if (promoInput.value == "stevekaku") {
       const promoOut = document.getElementById('avg-total');
       const promoDiscount = promoOut.innerText * 20 / 100;
       promoOut.innerText = promoOut.innerText - promoDiscount;
    }
    document.getElementById("promo-btn").disabled = true;
    promoInput.value = "";
 })
