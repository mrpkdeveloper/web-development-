function fetchproducts(done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addproducts(name, manu, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manu,
        price: price
    }, function (data) {
        done(data)
    })

}

function createproductcard(product) {
    return $(`
    <div class=" card col-4 " style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title">${product.name}</h5>
            <h6 class="card-title">${product.manufacturer}</h4>
            <h6 class="card-title">${product.price}</h4>
            <button type="submit" class="btn btn-primary m-3" id="button-${product.id}">Buy</button>
        </div>
    </div>`)
    
}


