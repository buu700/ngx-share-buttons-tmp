/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { ShareButtonModule } from '@ngx-share/button';
import { ShareButtons } from './share-buttons';
import { ExpandButton } from './expand-button';
export class ShareButtonsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2J1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvc2hhcmUtYnV0dG9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQXNCLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWdCL0MsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUEyQjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDL0QsQ0FBQztJQUNKLENBQUM7OztZQXBCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnNDb25maWcsIFNIQVJFX0JVVFRPTlNfQ09ORklHIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uTW9kdWxlIH0gZnJvbSAnQG5neC1zaGFyZS9idXR0b24nO1xuXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbnMnO1xuaW1wb3J0IHsgRXhwYW5kQnV0dG9uIH0gZnJvbSAnLi9leHBhbmQtYnV0dG9uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2hhcmVCdXR0b25zLFxuICAgIEV4cGFuZEJ1dHRvblxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVCdXR0b25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaGFyZUJ1dHRvbk1vZHVsZSxcbiAgICBTaGFyZUJ1dHRvbnNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbnNNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTaGFyZUJ1dHRvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlQnV0dG9uc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBTSEFSRV9CVVRUT05TX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXG4gICAgfTtcbiAgfVxufVxuIl19