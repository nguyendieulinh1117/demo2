function getProgressNodes(
    steps,
    current = 1,
    stepTemplate = `
    <li class="org-progress-node {{classes}}">{{label}}</li>
`
) {
    var html = [];
    steps.forEach(step => {
        var classes = '';
        if (current === step.id) {
            classes = 'active'
        }
        html.push(
            stepTemplate
                .replace("{{label}}", step.label)
                .replace("{{classes}}", classes)
        )
    });
    return html.join('');
}

$(function () {
    const $s = window.$s;

    $s.set('steps', [
        {
            id: 1,
            label: 'Chuẩn bị',
            title: 'Đang chuẩn bị',
            img: 'assets/img/progress-1.png'
        },
        {
            id: 2,
            label: 'Nướng bánh',
            title: 'Đang chế biến',
            img: 'assets/img/progress-2.png'
        },
        {
            id: 3,
            label: 'Đóng gói',
            title: 'Đang đóng gói',
            img: 'assets/img/progress-4.png'
        },
        {
            id: 4,
            label: 'Giao hàng',
            title: 'Đang giao hàng',
            img: 'assets/img/progress-3.png'
        },
        {
            id: 5,
            label: 'Ăn thôi!',
            title: 'Giao hàng thành công!',
            img: 'assets/img/progress-5.png'
        }
    ]);

    $s.set('current', 1, false)
    $s.validators('current', [v => typeof v == 'number', v => v > 0 && v < 6]);
    $s.watch('current', function (step) {
        const steps = $s.get('steps');
        const current = steps.find(i => i.id === step);
        if (!!current) {
            $('#progress-bar').html(getProgressNodes(steps, current.id));
            $('#progress-img').attr('src', current.img);
            $('#progress-title').text(current.title);
            if (step == 5) $('#updateBtnArea').hide('fade');
        }
    });
    // fire events
    $s.set('current', 1, true)

    var loop = setInterval(function () {
        const process = $s.get('current');
        try {
            $s.set('current', process + 1);
        } catch {
            clearInterval(loop);
            if (process == 5) {
                window.location.href = 'successful-delivery.html';
            }
        }
    }, 3000);
})