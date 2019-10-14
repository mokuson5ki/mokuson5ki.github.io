const API_LOAD = 1001;
const API_VACANCY_UPDATE = 1002;
const API_VIEW = 3;
const AJAX_REQUEST_URL = location.protocol + '//' + location.hostname + '/cafe-renta.cf/ajax-request';

$(function() {

    let ad_block = function() {
        $('#vdbanner').remove();
    };

    setTimeout(function() {

        ad_block();
        $('#loading-wrapper').fadeOut();

    }, 1000);

    let app = new App();
    app.main();
});


App = function() {

};

App.prototype.main = function() {
    let self = this;

    self.init();
};

App.prototype.init = function() {

    this.setEventListener();
};

App.prototype.showToast = function(message) {
    let toast = $('.toast').eq(0);
    toast.text(message);
    toast.addClass('toast_fade_in');
    setTimeout(function() {
        toast.removeClass('toast_fade_in');
    }, 3000);
};

App.prototype.setEventListener = function() {
    let self = this;

    $('#update_seat').off('click');
    $('#update_seat').on('click', function() {
        let checkedIdList = [];
        $('.custom-checkbox:checked').each(function(index, obj) {
            checkedIdList.push($(this).attr('id'));
        });

        self.vacancyUpdate(checkedIdList);
    });

    $('.popup_open').click(function(e) {
        $('.vrview_img, .vrview_container').show();
    });

    $('.close, .vrview_container').click(function(e) {
        $('.vrview_img, .vrview_container').hide();
    });
};

/*
MainBiz.prototype.seatStatusReload = function() {

    var self = this;
    var pm = new Object();
    pm.action_type = API_LOAD;

    $.ajax({
        type: 'post',
        url: AJAX_REQUEST_URL,
        data: pm,
        dataType: 'json'
    }).done(function(response) {
        if (response.error.length > 0) {
            console.log(response.error.join("\n"));
            return false;
        }

        $('#vacancy-count').text(response.vacancyCount);
        response.seatList.forEach(function(row) {
            $('#' + row.seat_id).prop('checked', false);
            if (row.is_vacancy == 1) {
                $('#' + row.seat_id).prop('checked', true);
            }
        });

    }).fail(function(XMLHttpRequest, textStatus, errorThrown) {

    });
}


function empty(val) {
    if (val == undefined || val == null || val == 0 || val == '') {
        return true;
    }
    if (val instanceof Array) {
        if (val.length === 0) {
            return true;
        }
    }
    return false;
}

function isset(val) {
    if (val == undefined || val == null) {
        return false;
    }
    return true;
}
*/

function MK() {

};

MK.prototype.empty = function(val) {
    if (val == undefined || val == null || val == 0 || val == '') {
        return true;
    }
    if (val instanceof Array) {
        if (val.length === 0) {
            return true;
        }
    }
    return false;
}

MK.prototype.isset = function(val) {
    if (val == undefined || val == null) {
        return false;
    }
    return true;
}

MK.prototype.gId = function(id) {
    return document.getElementById(id);
}

MK.prototype.gClass = function(cl) {
    return document.getElementsByClassName(cl);
}

MK.prototype.qs = function(name) {
    return document.querySelector(name);
}

MK.prototype.qsa = function(name) {
    return document.querySelectorAll(name);
}