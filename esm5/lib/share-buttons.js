/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareService, SHARE_BUTTONS } from '@ngx-share/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @record
 */
function ButtonsState() { }
if (false) {
    /** @type {?|undefined} */
    ButtonsState.prototype.includedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.excludedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.userButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.selectedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.expanded;
    /** @type {?|undefined} */
    ButtonsState.prototype.shownCount;
    /** @type {?|undefined} */
    ButtonsState.prototype.moreIcon;
    /** @type {?|undefined} */
    ButtonsState.prototype.lessIcon;
}
var ShareButtons = /** @class */ (function () {
    function ShareButtons(_share) {
        this._share = _share;
        this._state$ = new BehaviorSubject({
            includedButtons: [],
            excludedButtons: [],
            userButtons: [],
            selectedButtons: [],
            expanded: true,
            shownCount: Object.keys(SHARE_BUTTONS).length
        });
        this._configSub$ = Subscription.EMPTY;
        this.theme = this._share.config.theme;
        /**
         * Show buttons icons
         */
        this.showIcon = true;
        /**
         * Show buttons text
         */
        this.showText = false;
        /**
         * Show sharing count
         */
        this.showCount = false;
        /**
         * Buttons size
         */
        this.size = 0;
        /**
         * Share count event
         */
        this.count = new EventEmitter();
        /**
         * Share dialog opened event
         */
        this.opened = new EventEmitter();
        /**
         * Share dialog closed event
         */
        this.closed = new EventEmitter();
    }
    Object.defineProperty(ShareButtons.prototype, "includedButtons", {
        set: /**
         * @param {?} includedButtons
         * @return {?}
         */
        function (includedButtons) {
            this.updateState({ includedButtons: includedButtons });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "excludedButtons", {
        set: /**
         * @param {?} excludedButtons
         * @return {?}
         */
        function (excludedButtons) {
            this.updateState({ excludedButtons: excludedButtons });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "shownButtons", {
        set: /**
         * @param {?} shownCount
         * @return {?}
         */
        function (shownCount) {
            this.updateState({ shownCount: shownCount });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ShareButtons.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.state$ = this._state$.pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            // Use component include buttons, otherwise fallback to global include buttons
            /** @type {?} */
            var includedButtons = state.includedButtons.length ? state.includedButtons : state.userButtons;
            /** @type {?} */
            var userButtons = includedButtons.filter((/**
             * @param {?} btn
             * @return {?}
             */
            function (btn) { return state.excludedButtons.indexOf(btn) < 0; }));
            /** @type {?} */
            var selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
            return {
                userButtons: userButtons,
                selectedButtons: selectedButtons,
                expanded: state.expanded,
                shownCount: state.shownCount,
                moreIcon: state.moreIcon,
                lessIcon: state.lessIcon
            };
        })));
        // Subscribe to share buttons config changes, This updates the component whenever a new button is added
        this._configSub$ = this._share.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            // Use global include buttons, otherwise fallback to all buttons
            /** @type {?} */
            var includedButtons = config.include.length ? config.include : Object.keys(SHARE_BUTTONS);
            /** @type {?} */
            var userButtons = includedButtons.filter((/**
             * @param {?} btn
             * @return {?}
             */
            function (btn) { return config.exclude.indexOf(btn) < 0; }));
            _this.updateState({
                userButtons: userButtons,
                expanded: false,
                moreIcon: config.moreButtonIcon,
                lessIcon: config.lessButtonIcon
            });
        }));
    };
    /**
     * @return {?}
     */
    ShareButtons.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._configSub$.unsubscribe();
        this._state$.complete();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ShareButtons.prototype.updateState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state$.next(tslib_1.__assign({}, this._state$.value, state));
    };
    ShareButtons.decorators = [
        { type: Component, args: [{
                    selector: 'share-buttons',
                    template: "<div *ngIf=\"state$ | async; let state\" class=\"sb-group sb-{{theme}}\">\n\n  <share-button *ngFor=\"let button of state.selectedButtons\"\n                [button]=\"button\"\n                [theme]=\"theme\"\n                [url]=\"url\"\n                [title]=\"title\"\n                [description]=\"description\"\n                [image]=\"image\"\n                [tags]=\"tags\"\n                [autoSetMeta]=\"autoSetMeta\"\n                [showCount]=\"showCount\"\n                [showIcon]=\"showIcon\"\n                [showText]=\"showText\"\n                [size]=\"size\"\n                (opened)=\"opened.emit($event)\"\n                (closed)=\"closed.emit($event)\"\n                (count)=\"count.emit($event)\"></share-button>\n\n  <div class=\"sb-button sb-{{theme}}\">\n\n    <expand-button *ngIf=\"state.shownCount < state.userButtons.length\"\n                   [expanded]=\"state.expanded\"\n                   [moreIcon]=\"state.moreIcon\"\n                   [lessIcon]=\"state.lessIcon\"\n                   [size]=\"(1 + size/20) * 14\"\n                   (toggle)=\"updateState({expanded: $event})\">\n    </expand-button>\n\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:inherit}"]
                }] }
    ];
    /** @nocollapse */
    ShareButtons.ctorParameters = function () { return [
        { type: ShareService }
    ]; };
    ShareButtons.propDecorators = {
        theme: [{ type: Input }],
        includedButtons: [{ type: Input, args: ['include',] }],
        excludedButtons: [{ type: Input, args: ['exclude',] }],
        shownButtons: [{ type: Input, args: ['show',] }],
        url: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        showIcon: [{ type: Input }],
        showText: [{ type: Input }],
        showCount: [{ type: Input }],
        size: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }]
    };
    return ShareButtons;
}());
export { ShareButtons };
if (false) {
    /** @type {?} */
    ShareButtons.prototype.state$;
    /**
     * @type {?}
     * @private
     */
    ShareButtons.prototype._state$;
    /**
     * @type {?}
     * @private
     */
    ShareButtons.prototype._configSub$;
    /** @type {?} */
    ShareButtons.prototype.theme;
    /**
     * The sharing link
     * @type {?}
     */
    ShareButtons.prototype.url;
    /**
     * The title parameter
     * @type {?}
     */
    ShareButtons.prototype.title;
    /**
     * The description parameter
     * @type {?}
     */
    ShareButtons.prototype.description;
    /**
     * The image parameter for sharing on Pinterest
     * @type {?}
     */
    ShareButtons.prototype.image;
    /**
     * The tags parameter for sharing on Twitter and Tumblr
     * @type {?}
     */
    ShareButtons.prototype.tags;
    /**
     * Sets meta tags from document head, useful when SEO is available
     * @type {?}
     */
    ShareButtons.prototype.autoSetMeta;
    /**
     * Show buttons icons
     * @type {?}
     */
    ShareButtons.prototype.showIcon;
    /**
     * Show buttons text
     * @type {?}
     */
    ShareButtons.prototype.showText;
    /**
     * Show sharing count
     * @type {?}
     */
    ShareButtons.prototype.showCount;
    /**
     * Buttons size
     * @type {?}
     */
    ShareButtons.prototype.size;
    /**
     * Share count event
     * @type {?}
     */
    ShareButtons.prototype.count;
    /**
     * Share dialog opened event
     * @type {?}
     */
    ShareButtons.prototype.opened;
    /**
     * Share dialog closed event
     * @type {?}
     */
    ShareButtons.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    ShareButtons.prototype._share;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1idXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLFlBQVksRUFBc0IsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFjLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXJDLDJCQVNDOzs7SUFSQyx1Q0FBMkI7O0lBQzNCLHVDQUEyQjs7SUFDM0IsbUNBQXVCOztJQUN2Qix1Q0FBMkI7O0lBQzNCLGdDQUFtQjs7SUFDbkIsa0NBQW9COztJQUNwQixnQ0FBZTs7SUFDZixnQ0FBZTs7QUFHakI7SUF5RUUsc0JBQW9CLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFoRWhDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBZTtZQUNsRCxlQUFlLEVBQUUsRUFBRTtZQUNuQixlQUFlLEVBQUUsRUFBRTtZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTTtTQUM5QyxDQUFDLENBQUM7UUFFSyxnQkFBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFFaEMsVUFBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs7OztRQWlDakMsYUFBUSxHQUFHLElBQUksQ0FBQzs7OztRQUdoQixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBR2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFHbEIsU0FBSSxHQUFHLENBQUMsQ0FBQzs7OztRQUdSLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRzlDLENBQUM7SUFwREQsc0JBQXNCLHlDQUFlOzs7OztRQUFyQyxVQUFzQyxlQUF5QjtZQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsZUFBZSxpQkFBQSxFQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFzQix5Q0FBZTs7Ozs7UUFBckMsVUFBc0MsZUFBeUI7WUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLGVBQWUsaUJBQUEsRUFBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBbUIsc0NBQVk7Ozs7O1FBQS9CLFVBQWdDLFVBQWtCO1lBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxVQUFVLFlBQUEsRUFBQyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7Ozs7SUE0Q0QsK0JBQVE7OztJQUFSO1FBQUEsaUJBOEJDO1FBN0JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdCLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQW1COzs7Z0JBRWhCLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVc7O2dCQUMxRixXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBdEMsQ0FBc0MsRUFBQzs7Z0JBQ3JGLGVBQWUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BHLE9BQU87Z0JBQ0wsV0FBVyxhQUFBO2dCQUNYLGVBQWUsaUJBQUE7Z0JBQ2YsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7Z0JBQzVCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2FBQ3pCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsdUdBQXVHO1FBQ3ZHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBMEI7OztnQkFFcEUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Z0JBQ3JGLFdBQVcsR0FBRyxlQUFlLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixFQUFDO1lBQ3BGLEtBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2YsV0FBVyxhQUFBO2dCQUNYLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYztnQkFDL0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGtDQUFXOzs7O0lBQVgsVUFBWSxLQUFtQjtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksc0JBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUssS0FBSyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Z0JBbkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsbXJDQUFtQztvQkFFbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFwQlEsWUFBWTs7O3dCQW1DbEIsS0FBSztrQ0FFTCxLQUFLLFNBQUMsU0FBUztrQ0FJZixLQUFLLFNBQUMsU0FBUzsrQkFJZixLQUFLLFNBQUMsTUFBTTtzQkFLWixLQUFLO3dCQUdMLEtBQUs7OEJBR0wsS0FBSzt3QkFHTCxLQUFLO3VCQUdMLEtBQUs7OEJBR0wsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLE1BQU07eUJBR04sTUFBTTt5QkFHTixNQUFNOztJQThDVCxtQkFBQztDQUFBLEFBckhELElBcUhDO1NBL0dZLFlBQVk7OztJQUV2Qiw4QkFBaUM7Ozs7O0lBQ2pDLCtCQU9HOzs7OztJQUVILG1DQUF5Qzs7SUFFekMsNkJBQTBDOzs7OztJQWUxQywyQkFBcUI7Ozs7O0lBR3JCLDZCQUF1Qjs7Ozs7SUFHdkIsbUNBQTZCOzs7OztJQUc3Qiw2QkFBdUI7Ozs7O0lBR3ZCLDRCQUFzQjs7Ozs7SUFHdEIsbUNBQThCOzs7OztJQUc5QixnQ0FBeUI7Ozs7O0lBR3pCLGdDQUEwQjs7Ozs7SUFHMUIsaUNBQTJCOzs7OztJQUczQiw0QkFBa0I7Ozs7O0lBR2xCLDZCQUE2Qzs7Ozs7SUFHN0MsOEJBQThDOzs7OztJQUc5Qyw4QkFBOEM7Ozs7O0lBRWxDLDhCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlU2VydmljZSwgU2hhcmVCdXR0b25zQ29uZmlnLCBTSEFSRV9CVVRUT05TIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBCdXR0b25zU3RhdGUge1xuICBpbmNsdWRlZEJ1dHRvbnM/OiBzdHJpbmdbXTtcbiAgZXhjbHVkZWRCdXR0b25zPzogc3RyaW5nW107XG4gIHVzZXJCdXR0b25zPzogc3RyaW5nW107XG4gIHNlbGVjdGVkQnV0dG9ucz86IHN0cmluZ1tdO1xuICBleHBhbmRlZD86IGJvb2xlYW47XG4gIHNob3duQ291bnQ/OiBudW1iZXI7XG4gIG1vcmVJY29uPzogYW55O1xuICBsZXNzSWNvbj86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmUtYnV0dG9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS1idXR0b25zLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaGFyZS1idXR0b25zLnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25zIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHN0YXRlJDogT2JzZXJ2YWJsZTxCdXR0b25zU3RhdGU+O1xuICBwcml2YXRlIF9zdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJ1dHRvbnNTdGF0ZT4oe1xuICAgIGluY2x1ZGVkQnV0dG9uczogW10sXG4gICAgZXhjbHVkZWRCdXR0b25zOiBbXSxcbiAgICB1c2VyQnV0dG9uczogW10sXG4gICAgc2VsZWN0ZWRCdXR0b25zOiBbXSxcbiAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICBzaG93bkNvdW50OiBPYmplY3Qua2V5cyhTSEFSRV9CVVRUT05TKS5sZW5ndGhcbiAgfSk7XG5cbiAgcHJpdmF0ZSBfY29uZmlnU3ViJCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBASW5wdXQoKSB0aGVtZSA9IHRoaXMuX3NoYXJlLmNvbmZpZy50aGVtZTtcblxuICBASW5wdXQoJ2luY2x1ZGUnKSBzZXQgaW5jbHVkZWRCdXR0b25zKGluY2x1ZGVkQnV0dG9uczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpbmNsdWRlZEJ1dHRvbnN9KTtcbiAgfVxuXG4gIEBJbnB1dCgnZXhjbHVkZScpIHNldCBleGNsdWRlZEJ1dHRvbnMoZXhjbHVkZWRCdXR0b25zOiBzdHJpbmdbXSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe2V4Y2x1ZGVkQnV0dG9uc30pO1xuICB9XG5cbiAgQElucHV0KCdzaG93Jykgc2V0IHNob3duQnV0dG9ucyhzaG93bkNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtzaG93bkNvdW50fSk7XG4gIH1cblxuICAvKiogVGhlIHNoYXJpbmcgbGluayAqL1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcblxuICAvKiogVGhlIHRpdGxlIHBhcmFtZXRlciAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZGVzY3JpcHRpb24gcGFyYW1ldGVyICovXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBpbWFnZSBwYXJhbWV0ZXIgZm9yIHNoYXJpbmcgb24gUGludGVyZXN0ICovXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSB0YWdzIHBhcmFtZXRlciBmb3Igc2hhcmluZyBvbiBUd2l0dGVyIGFuZCBUdW1ibHIgKi9cbiAgQElucHV0KCkgdGFnczogc3RyaW5nO1xuXG4gIC8qKiBTZXRzIG1ldGEgdGFncyBmcm9tIGRvY3VtZW50IGhlYWQsIHVzZWZ1bCB3aGVuIFNFTyBpcyBhdmFpbGFibGUgKi9cbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW47XG5cbiAgLyoqIFNob3cgYnV0dG9ucyBpY29ucyAqL1xuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XG5cbiAgLyoqIFNob3cgYnV0dG9ucyB0ZXh0ICovXG4gIEBJbnB1dCgpIHNob3dUZXh0ID0gZmFsc2U7XG5cbiAgLyoqIFNob3cgc2hhcmluZyBjb3VudCAqL1xuICBASW5wdXQoKSBzaG93Q291bnQgPSBmYWxzZTtcblxuICAvKiogQnV0dG9ucyBzaXplICovXG4gIEBJbnB1dCgpIHNpemUgPSAwO1xuXG4gIC8qKiBTaGFyZSBjb3VudCBldmVudCAqL1xuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogU2hhcmUgZGlhbG9nIG9wZW5lZCBldmVudCAqL1xuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqIFNoYXJlIGRpYWxvZyBjbG9zZWQgZXZlbnQgKi9cbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoYXJlOiBTaGFyZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3RhdGUkID0gdGhpcy5fc3RhdGUkLnBpcGUoXG4gICAgICBtYXAoKHN0YXRlOiBCdXR0b25zU3RhdGUpID0+IHtcbiAgICAgICAgLy8gVXNlIGNvbXBvbmVudCBpbmNsdWRlIGJ1dHRvbnMsIG90aGVyd2lzZSBmYWxsYmFjayB0byBnbG9iYWwgaW5jbHVkZSBidXR0b25zXG4gICAgICAgIGNvbnN0IGluY2x1ZGVkQnV0dG9ucyA9IHN0YXRlLmluY2x1ZGVkQnV0dG9ucy5sZW5ndGggPyBzdGF0ZS5pbmNsdWRlZEJ1dHRvbnMgOiBzdGF0ZS51c2VyQnV0dG9ucztcbiAgICAgICAgY29uc3QgdXNlckJ1dHRvbnMgPSBpbmNsdWRlZEJ1dHRvbnMuZmlsdGVyKChidG4pID0+IHN0YXRlLmV4Y2x1ZGVkQnV0dG9ucy5pbmRleE9mKGJ0bikgPCAwKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRCdXR0b25zID0gdXNlckJ1dHRvbnMuc2xpY2UoMCwgc3RhdGUuZXhwYW5kZWQgPyB1c2VyQnV0dG9ucy5sZW5ndGggOiBzdGF0ZS5zaG93bkNvdW50KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1c2VyQnV0dG9ucyxcbiAgICAgICAgICBzZWxlY3RlZEJ1dHRvbnMsXG4gICAgICAgICAgZXhwYW5kZWQ6IHN0YXRlLmV4cGFuZGVkLFxuICAgICAgICAgIHNob3duQ291bnQ6IHN0YXRlLnNob3duQ291bnQsXG4gICAgICAgICAgbW9yZUljb246IHN0YXRlLm1vcmVJY29uLFxuICAgICAgICAgIGxlc3NJY29uOiBzdGF0ZS5sZXNzSWNvblxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gU3Vic2NyaWJlIHRvIHNoYXJlIGJ1dHRvbnMgY29uZmlnIGNoYW5nZXMsIFRoaXMgdXBkYXRlcyB0aGUgY29tcG9uZW50IHdoZW5ldmVyIGEgbmV3IGJ1dHRvbiBpcyBhZGRlZFxuICAgIHRoaXMuX2NvbmZpZ1N1YiQgPSB0aGlzLl9zaGFyZS5jb25maWckLnN1YnNjcmliZSgoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpID0+IHtcbiAgICAgIC8vIFVzZSBnbG9iYWwgaW5jbHVkZSBidXR0b25zLCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYWxsIGJ1dHRvbnNcbiAgICAgIGNvbnN0IGluY2x1ZGVkQnV0dG9ucyA9IGNvbmZpZy5pbmNsdWRlLmxlbmd0aCA/IGNvbmZpZy5pbmNsdWRlIDogT2JqZWN0LmtleXMoU0hBUkVfQlVUVE9OUyk7XG4gICAgICBjb25zdCB1c2VyQnV0dG9ucyA9IGluY2x1ZGVkQnV0dG9ucy5maWx0ZXIoKGJ0bikgPT4gY29uZmlnLmV4Y2x1ZGUuaW5kZXhPZihidG4pIDwgMCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgdXNlckJ1dHRvbnMsXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgbW9yZUljb246IGNvbmZpZy5tb3JlQnV0dG9uSWNvbixcbiAgICAgICAgbGVzc0ljb246IGNvbmZpZy5sZXNzQnV0dG9uSWNvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jb25maWdTdWIkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fc3RhdGUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShzdGF0ZTogQnV0dG9uc1N0YXRlKSB7XG4gICAgdGhpcy5fc3RhdGUkLm5leHQoey4uLnRoaXMuX3N0YXRlJC52YWx1ZSwgLi4uc3RhdGV9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogRXhwbGFuYXRpb24gb2YgdGhlIGFib3ZlIGNvZGU6XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiBJbmNsdWRlIGJ1dHRvbnM6IGluY2x1ZGVzIG9ubHkgd2FudGVkIGJ1dHRvbnMgYW5kIGV4Y2x1ZGVzIHRoZSByZXN0XG4gRXhjbHVkZSBidXR0b25zOiBleGNsdWRlcyBvbmx5IHRoZSB1bndhbnRlZCBidXR0b25zXG4gVXNlciBidXR0b25zID0gSW5jbHVkZSBidXR0b25zIC0gZXhjbHVkZSBidXR0b25zXG4gU2VsZWN0ZWQgQnV0dG9ucyA9IFVzZXIgYnV0dG9ucyBbc2hvd24gbnVtYmVyXVxuICovXG4iXX0=