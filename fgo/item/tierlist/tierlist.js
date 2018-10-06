$(document).ready(function(){
    $(".tierlist tr td div").on('click', function(){
        $(".SvtImg").empty().append( '<div class="' + $(this).attr("class") +'"></div>' );
        //$(".Explanation").empty().append($(".tips ." + $(this).attr("class").split(' ')[1]).html());
        //body > div.tips > div.svt.svtid_216.AR_Jeanne.raritySSR > table > tbody > tr:nth-child(1) > td:nth-child(1) > span.spancontent
        //#SSR > tbody > tr.SelectedServant > td.Explanation > table > tbody > tr:nth-child(1) > td:nth-child(1) > span.spancontent
        for(var i = 1; i < 3; i++)
        {
            for(var j = 1; j < 6; j++)
            {
                var contentSelector = "body > div.tips > div.svt." 
                    + $(this).attr("class").split(' ')[1] + 
                    " > table > tbody > tr:nth-child(" 
                    + i + 
                    ") > td:nth-child(" 
                    + j + 
                    ") > span.spancontent";
                var explanationSelector = "#SSR > tbody > tr.SelectedServant > td.Explanation > table > tbody > tr:nth-child("  
                    + i + 
                    ") > td:nth-child(" 
                    + j + 
                    ") > span.spancontent";

                //console.log( contentSelector );
                //console.log( $(contentSelector).html() );

                //console.log( explanationSelector );

                $(explanationSelector).empty().append( 
                    $(contentSelector).html()
                );                                  
            }           
        }
    });

    $(".Explanation table td").on('click', function(){
          var col = $(this).parent().children().index($(this));
          var row = $(this).parent().parent().children().index($(this).parent());
          console.log('Row: ' + row + ', Column: ' + col);
          var cell = Number(5*row) + Number(col) + 1;
          console.log('Cell: ' + cell);
        $(".parameters_display_explanation").empty()
        .append($('.parameters_explanation > td:nth-child(' + cell + ')').html());
    }); 
});
