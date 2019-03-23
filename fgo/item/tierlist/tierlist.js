$(document).ready(function(){
    $(".tierlist tr td div").on('click', function(){
        $(".SvtImg").empty().append( '<div class="' + $(this).attr("class") +'"></div>' );
        //$(".Explanation").empty().append($(".tips ." + $(this).attr("class").split(' ')[1]).html());
        //body > div.tips > div.svt.svtid_216.AR_Jeanne.raritySSR > table > tbody > tr:nth-child(1) > td:nth-child(1) > span.spancontent
        //#SSR > tbody > tr.SelectedServant > td.Explanation > table > tbody > tr:nth-child(1) > td:nth-child(1) > span.spancontent
        var contentSelector = "body > div.tips > div.svt." 
            + $(this).attr("class").split(' ')[1];
        var explanationSelector = "#SSR > tbody > tr.SelectedServant > td.Explanation";

        $(explanationSelector).empty().append( 
            $(contentSelector).html()
        );       
    });
});
