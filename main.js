var mainApp = angular.module("mainApp", ["ngRoute"]);

mainApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/app/view/home.html",
    })
    .when("/home", {
      templateUrl: "/app/view/home.html",
    })
    .when("/order", {
      templateUrl: "/app/view/order.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});

mainApp.controller("HeaderCtrl", function ($scope) {
  $scope.header = { name: "/app/view/header.html", url: "/app/view/header.html" };
});

mainApp.controller("Product_tab", function ($scope) {
  $scope.tablist = [
    { name: "All products" },
    { name: "Mains" },
    { name: "Snacks" },
    { name: "Drinks" },
    { name: "Other Snacks" },
  ];

  $scope.product_list = [
    {
      id: 1,
      name: "Co-op Satay W Sweet Chilli ",
      price: 2.99,
      category: "Mains",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
	    meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
    {
      id: 2,
      name: "Co-op Satay W Sweet Chilli Dipp",
      price: 2.99,
      category: "Snacks",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
	    meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
    {
      id: 3,
      name: "Co-op Satay W Sweet Chilli Dippp",
      price: 2.99,
      category: "Drinks",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
	    meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
    {
      id: 4,
      name: "Co-op Satay W Sweet Chilli Dipppp",
      price: 2.99,
      category: "Other Snacks",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
	    meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
    {
      id: 5,
      name: "Co-op Satay W Sweet Chilli Dip",
      price: 2.99,
      category: "Mains",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
	    meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
    {
      id: 6,
      name: "Co-op Satay W Sweet Chilli Dipp",
      price: 2.99,
      category: "Snacks",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
	    meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
    {
      id: 7,
      name: "Co-op Satay W Sweet Chilli Dippp",
      price: 2.99,
      category: "Drinks",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
	    meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
    {
      id: 8,
      name: "Co-op Satay W Sweet Chilli Dipppp",
      price: 2.99,
      category: "Other Snacks",
      product_img: "product-img.png",
      top_img: "product-symbol.svg",
      meal_deal: "3.99",
      energy_kcal: "227",
      fats: "19.0g",
      saturates: "2.3g",
      proteins: "4.0g",
      salt: "0.40g",
      energy_kj: "950",
      carbs: "8.2g",
      sugars: "4.3g",
      fibres: "3.3g",
	    discription: "For allergens, see ingredients in bold. Also, may contain Peanuts, Nuts."
    },
  ];
  $scope.filter_product_list = $scope.product_list;
  $scope.selected_category = "All products";
  $scope.product_filter = function (val) {
    $scope.selected_category = val;
  };
  $scope.cart_val = 0;
  $scope.checkout_product = [] ;
  $scope.add_to_cart = function (p_id,p_name,p_price,product_img) {
    let cart_val  =  parseFloat($scope.cart_val) + parseFloat(p_price);
    $scope.cart_val = cart_val.toFixed(2);

    let obj = {
      id: p_id,
      name: p_name,
      price: p_price,
      image: product_img,
      quantity : 1
    }
    $scope.checkout_product.push(obj);
    localStorage.setItem("checkout_product", JSON.stringify($scope.checkout_product));
    localStorage.setItem("Total_price",$scope.cart_val);
  }
});

mainApp.controller("Product_checkout", function ($scope) {
  if(localStorage.getItem("checkout_product") !== null)
  {
    $scope.checkout_order = JSON.parse(localStorage.getItem("checkout_product"));
  }
  if(localStorage.getItem("Total_price") !== null){
    $scope.cart_total = localStorage.getItem("Total_price");
  }

  $scope.add_qty = function (id,val, price) {
    const index =  $scope.checkout_order.findIndex(object => {
      return object.id === id;
    });

    if (index !== -1) {
      $scope.checkout_order[index].quantity = val + 1;
    } 
    let cartfloat_val = parseFloat($scope.cart_total) + parseFloat(price);
     $scope.cart_total = cartfloat_val.toFixed(2);
  }
  $scope.remove_qty = function (id, val, price) {
   const index =  $scope.checkout_order.findIndex(object => {
      return object.id === id;
    });
    
    if (index !== -1 && val !== 1) {
      $scope.checkout_order[index].quantity = val - 1;
      let cartfloat_val = parseFloat($scope.cart_total) - parseFloat(price);
      $scope.cart_total = cartfloat_val.toFixed(2);
    }   
  }
});