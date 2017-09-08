$('input').click(function () {
    startingMix();
});

$('.square').click(function () {
    var targetCell = $(this);
    var emptyCell = $('.empty');

    if (elemHaveStep(targetCell, emptyCell)) {
        swap(targetCell, emptyCell);
    } else {
        //todo set red border for 1sec
        console.log('elem not have next step')
    }

    if (checkForWin()) {
        setTimeout(function () { alert(' YOU ARE WINNER!!!'); }, 10);
    }
});

var elemHaveStep = function (targetCell, emptyCell) {
    if (targetCell.hasClass('empty')) {
        return false;
    }
    targetCellId = parseInt(targetCell.attr('id'));
    emptyCellId = parseInt(emptyCell.attr('id'));

    if ((emptyCellId == (targetCellId + 1) && ![5, 9, 13].includes(emptyCellId))
        || (emptyCellId == (targetCellId - 1) && ![4, 8, 12].includes(emptyCellId))
        || emptyCellId == (targetCellId + 4)
        || emptyCellId == (targetCellId - 4)) {
        return true;
    }
    return false;
}

function swap(targetCell, emptyCell) {
    var value = targetCell.text();
    targetCell
        .addClass('empty')
        .text('');
    emptyCell
        .removeClass('empty')
        .text(value);
}

var checkForWin = function () {
    var arr = $('.main > div');
    for (var i = 1; i <= 15; i++) {
        if (i != arr.eq(i - 1).text()) {
            return false;
        }
    }
    return true;
};

function startingMix() {
    var mixSteps = 500;
    for (var i = 0; i < mixSteps; i++) {
        var emptyCell = $('.empty');
        var emptyCellId = parseInt(emptyCell.attr('id'));
        var existingSteps = [];
        var step1 = emptyCellId + 1;
        var step2 = emptyCellId - 1;
        var step3 = emptyCellId + 4;
        var step4 = emptyCellId - 4;
        if (step1 != 5 && step1 != 9 && step1 != 13 && step1 != 17) {
            existingSteps.push(step1);
        }
        if (step2 != 0 && step2 != 4 && step2 != 8 && step2 != 12) {
            existingSteps.push(step2);
        }
        if (step3 <= 16) {
            existingSteps.push(step3);
        }
        if (step4 >= 1) {
            existingSteps.push(step4);
        }
        var targetCellId = existingSteps[Math.round(Math.random() * (existingSteps.length - 1))];
        var targetCell = $('#' + targetCellId);
        swap(targetCell, emptyCell);
    }
}

