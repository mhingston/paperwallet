$(document).ready(function()
{
    var privateKeyVisible = false;

    $('#show').click(function()
    {
        if(privateKeyVisible)
        {
            $('#private_key').attr('type', 'password');
            $('#show').removeClass('fa-eye-slash').addClass('fa-eye');
            $('#show').attr('title', 'Show Private Key');
            privateKeyVisible = false;
        }

        else
        {
            $('#private_key').attr('type', 'text');
            $('#show').removeClass('fa-eye').addClass('fa-eye-slash');
            $('#show').attr('title', 'Hide Private Key');
            privateKeyVisible = true;
        }
    });

    $('#generate').click(function()
    {
        var width = height = $('#private_key_qr').parent().width();
        $('#private_key_qr').html('');
        $('#public_address_qr').html('');

        $('#private_key_qr').qrcode(
        {
            text: $('#private_key').val(),
            width: width,
            height: height
        });

        $('#public_address_qr').qrcode(
        {
            text: $('#public_address').val(),
            width: width,
            height: height
        });

        $('#private_key_text').css('maxWidth', width).html('Private Key:<br>' + $('#private_key').val());
        $('#public_address_text').css('maxWidth', height).html('Public Address:<br>' + $('#public_address').val());
        $('#notes').height(height);
        $('#notes_text').removeClass('d-none');
    });
});