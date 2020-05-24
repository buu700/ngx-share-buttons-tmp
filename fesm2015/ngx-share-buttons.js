import { CommonModule } from '@angular/common';
import { ShareButtonModule } from '@ngx-share/button';
import { ShareService, SHARE_BUTTONS, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButtons {
    /**
     * @param {?} _share
     */
    constructor(_share) {
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
    /**
     * @param {?} includedButtons
     * @return {?}
     */
    set includedButtons(includedButtons) {
        this.updateState({ includedButtons });
    }
    /**
     * @param {?} excludedButtons
     * @return {?}
     */
    set excludedButtons(excludedButtons) {
        this.updateState({ excludedButtons });
    }
    /**
     * @param {?} shownCount
     * @return {?}
     */
    set shownButtons(shownCount) {
        this.updateState({ shownCount });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.state$ = this._state$.pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            // Use component include buttons, otherwise fallback to global include buttons
            /** @type {?} */
            const includedButtons = state.includedButtons.length ? state.includedButtons : state.userButtons;
            /** @type {?} */
            const userButtons = includedButtons.filter((/**
             * @param {?} btn
             * @return {?}
             */
            (btn) => state.excludedButtons.indexOf(btn) < 0));
            /** @type {?} */
            const selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
            return {
                userButtons,
                selectedButtons,
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
        (config) => {
            // Use global include buttons, otherwise fallback to all buttons
            /** @type {?} */
            const includedButtons = config.include.length ? config.include : Object.keys(SHARE_BUTTONS);
            /** @type {?} */
            const userButtons = includedButtons.filter((/**
             * @param {?} btn
             * @return {?}
             */
            (btn) => config.exclude.indexOf(btn) < 0));
            this.updateState({
                userButtons,
                expanded: false,
                moreIcon: config.moreButtonIcon,
                lessIcon: config.lessButtonIcon
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._configSub$.unsubscribe();
        this._state$.complete();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    updateState(state) {
        this._state$.next(Object.assign({}, this._state$.value, state));
    }
}
ShareButtons.decorators = [
    { type: Component, args: [{
                selector: 'share-buttons',
                template: "<div *ngIf=\"state$ | async; let state\" class=\"sb-group sb-{{theme}}\">\n\n  <share-button *ngFor=\"let button of state.selectedButtons\"\n                [button]=\"button\"\n                [theme]=\"theme\"\n                [url]=\"url\"\n                [title]=\"title\"\n                [description]=\"description\"\n                [image]=\"image\"\n                [tags]=\"tags\"\n                [autoSetMeta]=\"autoSetMeta\"\n                [showCount]=\"showCount\"\n                [showIcon]=\"showIcon\"\n                [showText]=\"showText\"\n                [size]=\"size\"\n                (opened)=\"opened.emit($event)\"\n                (closed)=\"closed.emit($event)\"\n                (count)=\"count.emit($event)\"></share-button>\n\n  <div class=\"sb-button sb-{{theme}}\">\n\n    <expand-button *ngIf=\"state.shownCount < state.userButtons.length\"\n                   [expanded]=\"state.expanded\"\n                   [moreIcon]=\"state.moreIcon\"\n                   [lessIcon]=\"state.lessIcon\"\n                   [size]=\"(1 + size/20) * 14\"\n                   (toggle)=\"updateState({expanded: $event})\">\n    </expand-button>\n\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:inherit}"]
            }] }
];
/** @nocollapse */
ShareButtons.ctorParameters = () => [
    { type: ShareService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExpandButton {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.toggle = new EventEmitter();
        el.nativeElement.style.setProperty('--button-color', '#FF6651');
    }
}
ExpandButton.decorators = [
    { type: Component, args: [{
                selector: 'expand-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button class="sb-wrapper sb-expand sb-show-icon"
            [style.fontSize.px]="size"
            (click)="toggle.emit(!expanded)">

      <div class="sb-inner">
        <div class="sb-content">
          <div class="sb-icon">
            <fa-icon [icon]="expanded ? lessIcon : moreIcon"></fa-icon>
          </div>
        </div>
      </div>
    </button>
  `
            }] }
];
/** @nocollapse */
ExpandButton.ctorParameters = () => [
    { type: ElementRef }
];
ExpandButton.propDecorators = {
    moreIcon: [{ type: Input }],
    lessIcon: [{ type: Input }],
    expanded: [{ type: Input }],
    size: [{ type: Input }],
    toggle: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareButtonsModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ShareButtonsModule,
            providers: [{ provide: SHARE_BUTTONS_CONFIG, useValue: config }]
        };
    }
}
ShareButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ShareButtons,
                    ExpandButton
                ],
                imports: [
                    ShareButtonModule,
                    CommonModule
                ],
                exports: [
                    ShareButtonModule,
                    ShareButtons
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ShareButtonsModule, ShareButtons, ExpandButton as ɵa };

//# sourceMappingURL=ngx-share-buttons.js.map