import "blueimp-file-upload/js/vendor/jquery.ui.widget.js";
import "blueimp-file-upload/js/jquery.fileupload.js";
import "blueimp-file-upload/js/jquery.fileupload-image.js";
import "blueimp-file-upload/js/jquery.fileupload-video.js";

let $activityContainer = $('.create-activity')
let $label = $activityContainer.find('label')
let $btn = $activityContainer.find('.btn')


$('#fileupload').fileupload();

$activityContainer.on('focus', 'textarea', (e)=> {
    $activityContainer.addClass('active')
    $label.hide();
    $btn.show()
})

$activityContainer.on('blur', 'textarea2', (e)=> {
    $activityContainer.removeClass('active')
    $btn.hide()
    let self = $(e.currentTarget);
    if (!self.val()) {
        $label.show();
    }
})

$('.maion').on('move', (e)=> {
    $.ajax({
        url: `/j/comment/${self.data('id')}/react`,
        type: rqType,
        data: {'reaction_type': self.data('kind')},
        dataType: 'json',
        success: function (rs) {
            if (!rs.r) {
                self.toggleClass('reacted')
                self.find('span').html(rs.n_reacted)
                let $i = self.find('i'), $newCls;
                let $cls = $i.attr('class').split(' ')[1]
                if ($cls.indexOf('fill') >= 0) {
                    $newCls = $cls.replace('fill', 'line')
                } else {
                    $newCls = $cls.replace('line', 'fill')
                }
                $i.removeClass($cls).addClass($newCls)
            }
        }
    })
})
