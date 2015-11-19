
/**
 * Accessibility
 * @since 2.0.0
 */
(function($, window, document, undefined) {
'use strict';
    var Accessibility = function(carousel) {
        this._core = carousel;
        this.bindEventListeners();
    };

    Accessibility.prototype.bindEventListeners = function() {
        this._core.$element
            .on('initialized.owl.carousel', this.onInitializedHander.bind(this))
            .on('changed.owl.carousel', this.updateAccessibilityAttributes.bind(this));
    };

    Accessibility.prototype.onInitializedHander = function() {
        this.updateAccessibilityAttributes();
    };

    Accessibility.prototype.updateAccessibilityAttributes = function(event) {
        this.$stage = this._core.$element.find('.owl-stage');
        this.$stage
        .find('.owl-item .cc-image-component')
            .attr({
                'tabIndex': '-1',
                'aria-hidden': true
            })
            .end()
        .find('.owl-item.active .cc-image-component')
            .attr({
                'tabIndex': 0,
                'aria-hidden': false
            })
            .end();
    };

    $.fn.owlCarousel.Constructor.Plugins.Accessibility = Accessibility;
})(window.Zepto || window.jQuery, window, document);
