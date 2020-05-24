/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var ExpandButton = /** @class */ (function () {
    function ExpandButton(el) {
        this.toggle = new EventEmitter();
        el.nativeElement.style.setProperty('--button-color', '#FF6651');
    }
    ExpandButton.decorators = [
        { type: Component, args: [{
                    selector: 'expand-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <button class=\"sb-wrapper sb-expand sb-show-icon\"\n            [style.fontSize.px]=\"size\"\n            (click)=\"toggle.emit(!expanded)\">\n\n      <div class=\"sb-inner\">\n        <div class=\"sb-content\">\n          <div class=\"sb-icon\">\n            <fa-icon [icon]=\"expanded ? lessIcon : moreIcon\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    ExpandButton.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ExpandButton.propDecorators = {
        moreIcon: [{ type: Input }],
        lessIcon: [{ type: Input }],
        expanded: [{ type: Input }],
        size: [{ type: Input }],
        toggle: [{ type: Output }]
    };
    return ExpandButton;
}());
export { ExpandButton };
if (false) {
    /** @type {?} */
    ExpandButton.prototype.moreIcon;
    /** @type {?} */
    ExpandButton.prototype.lessIcon;
    /** @type {?} */
    ExpandButton.prototype.expanded;
    /** @type {?} */
    ExpandButton.prototype.size;
    /** @type {?} */
    ExpandButton.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImxpYi9leHBhbmQtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RztJQTBCRSxzQkFBWSxFQUFjO1FBRmhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzdDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDZZQWFUO2lCQUNGOzs7O2dCQW5Ca0MsVUFBVTs7OzJCQXNCMUMsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQUtULG1CQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0FYWSxZQUFZOzs7SUFFdkIsZ0NBQXVCOztJQUN2QixnQ0FBdUI7O0lBQ3ZCLGdDQUEwQjs7SUFDMUIsNEJBQXNCOztJQUN0Qiw4QkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5kLWJ1dHRvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gY2xhc3M9XCJzYi13cmFwcGVyIHNiLWV4cGFuZCBzYi1zaG93LWljb25cIlxuICAgICAgICAgICAgW3N0eWxlLmZvbnRTaXplLnB4XT1cInNpemVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZS5lbWl0KCFleHBhbmRlZClcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNiLWlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYi1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNiLWljb25cIj5cbiAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImV4cGFuZGVkID8gbGVzc0ljb24gOiBtb3JlSWNvblwiPjwvZmEtaWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRCdXR0b24ge1xuXG4gIEBJbnB1dCgpIG1vcmVJY29uOiBhbnk7XG4gIEBJbnB1dCgpIGxlc3NJY29uOiBhbnk7XG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQE91dHB1dCgpIHRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYnV0dG9uLWNvbG9yJywgJyNGRjY2NTEnKTtcbiAgfVxufVxuIl19