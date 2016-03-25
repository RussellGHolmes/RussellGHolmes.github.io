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
            var $li = $('<li>')
                .on("click", function(e){
                $("#product-details").fadeIn(400)});
            var $name = $('<p>').text(p.desc);
            var $price = $('<p>').text("Price: $ " + p.price);
            var $productColor = $('<p>').text("Shown Color: " + p.color);
            var $availableColors = $('<p>').text("Available Colors: " + p.availableColors);
            if (p.specs.length)
                var $specs = $('<p>').text("Specifications: " + p.specs);
            if (p.stock < 15)    
                var $stock = $('<p>').text("Only " + p.stock + " left in stock!");
            else 
                $stock = $('<p>').text("Number left in stock: " + p.stock);
            var $image = $('<img>').attr('src' , "img/product/thumbs/" + p.image);
            $li.append([$name, $specs, $price, $stock, $image, $productColor, $availableColors]);
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
        
    }
    
})();