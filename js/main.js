var clicked = false;

function onHover()
{
    if (clicked == false)
    $("#hoverMe").attr('src', 'images/0003-2.png');
}

function offHover()
{
    if (clicked == false) 
        $("#hoverMe").attr('src', 'images/0003.png');
}

function onClick()
{
    if (clicked == false)
    {
        $(".hidden-menu").attr('display', 'block');
        $("#hoverMe").attr('src', 'images/0003-3.png');
        clicked = true;
    }
    else
    {
        $(".hidden-menu").attr('display', 'none');
        $("#hoverMe").attr('src', 'images/0003.png');
         clicked = false;
    }
}

