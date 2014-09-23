$.fn.extend({
    svgAddClass: function (addClass) {
        this[0].classList.add(addClass);
    },
    svgHasClass: function (searchClass) {
        var classes = this.attr('class');
        if (classes !== null) {
            var arrClasses = classes.split(' ');
            var classIndex = $.inArray(searchClass, arrClasses);
            if (classIndex >= 0) {
                return true;
            }
        }
        return false;
    },
    svgRemoveClass: function (removeClass) {
        var classes = this.attr('class');
        if (classes !== null) {
            var arrClasses = classes.split(' ');
            var classIndex = $.inArray(removeClass, arrClasses);
            if (classIndex >= 0) {
                arrClasses.splice(classIndex, 1);
                var newClasses = arrClasses.join(' ');
                this.attr('class', newClasses);
            }
        }
    },
    svgToggleClass: function (toggleClass) {
        if (this.svgHasClass(toggleClass)) {
            this.svgRemoveClass(toggleClass);
        } else {
            this.svgAddClass(toggleClass);
        }
    }
});