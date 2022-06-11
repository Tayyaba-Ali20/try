function toggleMobileNavigation(){
    var element= document.getElementById('mobile')
    console.log(element)
    if(element.classList.contains('mobile-navigation-open')){
        element.classList.remove('mobile-navigation-open');

    }
    else{
        element.classList.add('mobile-navigation-open');
    }
}
