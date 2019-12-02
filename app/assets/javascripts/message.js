$(function(){
    function buildHTML(message){        
        var img = (message.image_url) ? `<img class="lower-message__image" src="${ message.image_url }">` : "";
        var html = `<div class="message" data-message_id="16227">
                        <div class="message__upper-info">
                            <p class="message__upper-info__talker">
                                ${message.user_name}
                            </p>
                            <p class="message__upper-info__date">
                                ${message.created_at}
                            </p>
                        </div>
                        <p class="message__text">
                            ${message.content}
                        </p>
                            ${img}
                        </div>
                    </div>`
        return html;
    }
        $('#new_message').on('submit', function(e){
            e.preventDefault()
            var formData = new FormData(this);
            var url = $(this).attr('action');
            $.ajax({
                url: url,
                type: 'POST',
                data: formData,
                dataType: 'json',
                processData: false,
                contentType: false
            }) 
        
        .done(function(message){
            var html = buildHTML(message);
            $('.messages').append(html);
            $('.form__submit-btn').prop('disabled', false);
            $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
            $('#new_message')[0].reset();
        })
        .fail(function(){
            alert("メッセージ送信に失敗しました");
        })
    })
});