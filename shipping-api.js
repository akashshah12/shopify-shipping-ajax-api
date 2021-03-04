var e = {};
e.zip = '4514',
  e.country = 'Australia',
  e.province = 'QLD'
var t = {
  type: "POST",
  url: "/cart/prepare_shipping_rates",
  data: jQuery.param({
	shipping_address: e
  }),
  success:function(data){ 
	
	var async= function() {
	  jQuery.ajax("/cart/async_shipping_rates", {
		dataType: "json",
		success: function(r, n, a) {
		  if(200 === a.status){
        if(r!=null && r.shipping_rates!=null && r.shipping_rates.length>0){
          var html = "<p>Delivery option available for "+e.zip+"</p>";
          html +="<p>Delivery to your address at $"+ r.shipping_rates[0].price +"</p>"
          html +="<p><i>* You will be able to select your delivery option during the checkout process</i></p>";
          //$("#wrapper-response").html(html);

        }
		  }
		  else{ setTimeout(async, 500) }
		},
		error: function(err1){
		  
		}
	  })
	};
	async();
},
	error: function(err){}
};
jQuery.ajax(t)
