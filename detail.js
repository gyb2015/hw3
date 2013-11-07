var fillInMenu = function (templateClassName, menuArray, isPizza) {
    var template = $(templateClassName);
    var templateContainerName = templateClassName + '-container';
    var container = $(templateContainerName);
    $.each(menuArray, function() {
        var $instance = template.clone();
        $instance.find('.name').html(this.name);
        if (isPizza) {
            $instance.find('.description').html(this.description);
            $instance.find('.prices').html('$' + this.prices.join(',$'));
        } else {
            $instance.find('.price').html('$' + this.price);
        }
        //$instance.removeClass('template');
        container.append($instance);
    });
}

$(function(){ 

    fillInMenu('.template-pizzas', com.dawgpizza.menu.pizzas, true);
    fillInMenu('.template-drinks', com.dawgpizza.menu.drinks, false);
    fillInMenu('.template-desserts', com.dawgpizza.menu.desserts, false);
});
