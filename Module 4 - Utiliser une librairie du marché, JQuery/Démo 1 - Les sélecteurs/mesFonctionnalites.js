/////////////////////////////////////////////////////////////////////////////////////
//DEMO 1                                                                           //
//COURS : https://learn.jquery.com/using-jquery-core/selecting-elements/           //
//API : http://api.jquery.com/category/selectors/                                  //
/////////////////////////////////////////////////////////////////////////////////////

function toutLeMondeSeCache()
{
    $("div").hide();
}

function toutLeMondeReapparait()
{
    jQuery("div").show();
}

function leCapitaineSeCache()
{
    $("#capitaine").hide();
}

function lesMarinsSeCachent()
{
    //$(".marin").hide();
    //$(".equipage").hide();
    //$(".marin:last").hide();
    $(".marin:eq(2)").hide();
}

function lesBateauxSeCachent()
{
    $("div > div[class='bateau']").hide();
}