$(document).ready(function() {
    $('#SmartWatch').on('click', function() {
        var isOriginalContent = $(this).data('original-content');
        if (isOriginalContent) {
            $('img', this).attr('src', 'images/smartwachextreme.jpeg');
            $(this).html('<img src="images/smartwachextreme.jpeg" alt="SmartWatch Pro Premium" class="imagem-produto"><h2>SmartWatch Pro Premium</h2><p>O modelo Premium eleva a experiência com tela AMOLED, com uma caixa em titânio.</p>');
        } else {
            $('img', this).attr('src', 'images/smartwatch.jpeg');
            $(this).html('<img src="images/smartwatch.jpeg" alt="SmartWatch Pro" class="imagem-produto"><h2>SmartWatch Pro</h2><p>O SmartWatch Pro combina elegância com uma série de funcionalidades para mais comodidate no seu dia a dia.</p>');
        }
        $(this).data('original-content', !isOriginalContent);
    });

    $('#EarBuds').on('click', function() {
        var isOriginalContent = $(this).data('original-content');
        if (isOriginalContent) {
            $('img', this).attr('src', 'images/earbuds.jpeg');
            $(this).html('<img src="images/earbuds.jpeg" alt="EarBuds Xtreme - Edição Limitada" class="imagem-produto"><h2>EarBuds Xtreme - Edição Limitada</h2><p>A Edição Limitada traz um design exclusivo com qualidade de som ainda mais impressionante e bateria de longa duração.</p>');
        } else {
            $('img', this).attr('src', 'images/earbudspro.jpeg');
            $(this).html('<img src="images/earbudspro.jpeg" alt="EarBuds Xtreme" class="imagem-produto"><h2>EarBuds Xtreme</h2><p>Os EarBuds Xtreme oferecem qualidade de som superior e cancelamento de ruído para uma imersão completa.</p>');
        }
        $(this).data('original-content', !isOriginalContent);
    });

    $('.produto').hover(
        function() {
            $(this).css({
                'background-color': '#e8f4fc',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.3)'
            });
        }, 
        function() {
            $(this).css({
                'background-color': '#f0f0f0',
                'box-shadow': '0 2px 4px rgba(0,0,0,0.1)'
            });
        }
    );

    $('.produto').hover(
        function() {
            $('.produto').not(this).each(function() {
                $(this).css('opacity', '0.3');
            });
        }, 
        function() {
            $('.produto').css('opacity', '1');
        }
    );
});

