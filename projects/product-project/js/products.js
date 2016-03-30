/*global _*/
(function () {
    var allProducts;
    
    $.ajax("data/product.json")
        .done(function(result, status, request){
            allProducts = result;
            console.log(allProducts);
            initialize();
            displayProducts(allProducts);
        })
        .fail(function(request, status, error){
            console.log(status + ": " + error);
        });
        
    function filterProducts(searchTerm){
        var filtered = _.filter(allProducts, function (p){
            return searchObject(searchTerm, p);
            }); 
            
        displayProducts(filtered);
    }
    
    function searchObject(searchTerm, obj){
        return _.reduce(obj, function(memo, val){
                if (memo === true) return true;
                if (Array.isArray(val) || typeof val === "object")
                    return searchObject(searchTerm, val);
                if (typeof val !== "string") return memo;
                return val.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        }, false);
    }
    
    function displayProducts(products){
        var $products = $('#products');
        $products.empty();
        var $listItems = _.map(products, function(p){
            var $li = $('<li>');
            var $name = $('<p>').text(p.desc);
            var $productColor = $('<p>').text("Shown Color: " + p.color);
            var $availableColors = $('<p>').text("Available Colors: " + p.availableColors);
            var $price = $('<p>').text("Price: $" + p.price);
            var $image = $('<img>').attr('src' , "img/product/thumbs/" + p.image)
                .on("click", function(e){
                    $('#product-details .thumbnail').attr('src', 'img/product/' + p.image);
                    $('#product-details .name').text(p.desc);
                    if (p.specs.length > 0) 
                        $('#product-details-inner .specs').text("Specifications: " + p.specs);
                    if (p.stock < 15)
                        $('#product-details-inner .stock').text('Only ' + p.stock + ' left in stock!');
                    else
                        $('#product-details-inner .stock').text('Number left in stock: ' + p.stock);
                    $('#product-details-inner .price').text('Price: $' + p.price);
                    $("#product-details").fadeIn(400);
                });
            
            $li.append([$image, $name, $price, $productColor, $availableColors]);
            
            return $li;
        });
        $products.append($listItems);
    
    }
    
    
    function initialize() {
        displayProducts(allProducts);
        $('#search').on('keyup', function (e){
            var term = $(e.target).val();
            if (term.length >= 3)
                filterProducts(term);
            else 
                displayProducts(allProducts);
        });
        
        $(".close", "#product-details").on("click", function(e){
            $("#product-details").fadeOut(400);
        });

        $(".sort-highest").on("click", function(){
           var highPriceList = allProducts.sort(function(a, b){
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
                return 0;
           });
           displayProducts(highPriceList);
        });
        
        $(".sort-lowest").on("click", function(){
           var lowPriceList = allProducts.sort(function(a, b){
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
           });
           displayProducts(lowPriceList);
        });
    }
    
})();