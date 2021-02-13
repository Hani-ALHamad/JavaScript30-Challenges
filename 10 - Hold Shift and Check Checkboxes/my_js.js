main = document.getElementsByClassName("inbox")[0];
boxes = document.querySelectorAll("input")
var current;
var order;

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (e.target.checked == true && e.shiftKey == false) {
            current = e.target;
        }

        if (e.target.checked == true && e.shiftKey == true) {
            shift = 0;
            for (let index = 0; index < boxes.length; index++) {
                if (e.target == boxes[index]) {
                    order = index;
                    shift = boxes[index];
                }
            }

            if (current == undefined) {
                for (let index = order; index < boxes.length; index++) {
                    boxes[index].checked = true;
                }
            }
            else if (shift.getBoundingClientRect().top > current.getBoundingClientRect().top) {
                while (boxes[order] != current) {
                    boxes[order].checked = true;
                    order -= 1;
                }
            }
            else {
                while (boxes[order] != current) {
                    boxes[order].checked = true;
                    order += 1;
                };
            };
        };
    });
});