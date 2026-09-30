import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgxEditorModule } from 'ngx-editor';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgChartsModule } from 'ng2-charts';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { QuillModule } from 'ngx-quill';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppsComponent } from './components/apps/apps.component';
import { EcommerceComponent } from './components/dashboard/ecommerce/ecommerce.component';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { ProjectManagementComponent } from './components/dashboard/project-management/project-management.component';
import { LmsCoursesComponent } from './components/dashboard/lms-courses/lms-courses.component';
import { ChatComponent } from './components/apps/chat/chat.component';
import { ToDoListComponent } from './components/apps/to-do-list/to-do-list.component';
import { CalendarComponent } from './components/apps/calendar/calendar.component';
import { EmailComponent } from './components/apps/email/email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { RecentOrdersComponent } from './components/dashboard/ecommerce/recent-orders/recent-orders.component';
import { TeamMembersListComponent } from './components/dashboard/ecommerce/team-members-list/team-members-list.component';
import { BestSellingProductsComponent } from './components/dashboard/ecommerce/best-selling-products/best-selling-products.component';
import { EcommerceStatsComponent } from './components/dashboard/ecommerce/ecommerce-stats/ecommerce-stats.component';
import { AudienceOverviewComponent } from './components/dashboard/ecommerce/audience-overview/audience-overview.component';
import { EcommerceRatingsComponent } from './components/dashboard/ecommerce/ecommerce-ratings/ecommerce-ratings.component';
import { EcommerceImpressionsComponent } from './components/dashboard/ecommerce/ecommerce-impressions/ecommerce-impressions.component';
import { VisitsByDayComponent } from './components/dashboard/ecommerce/visits-by-day/visits-by-day.component';
import { EcommerceActivityTimelineComponent } from './components/dashboard/ecommerce/ecommerce-activity-timeline/ecommerce-activity-timeline.component';
import { SalesByLocationsComponent } from './components/dashboard/ecommerce/sales-by-locations/sales-by-locations.component';
import { NewCustomersComponent } from './components/dashboard/ecommerce/new-customers/new-customers.component';
import { LiveVisitsOnOurSiteComponent } from './components/dashboard/ecommerce/live-visits-on-our-site/live-visits-on-our-site.component';
import { RevenueStatusComponent } from './components/dashboard/ecommerce/revenue-status/revenue-status.component';
import { LmsStatsComponent } from './components/dashboard/lms-courses/lms-stats/lms-stats.component';
import { LmsExperienceComponent } from './components/dashboard/lms-courses/lms-experience/lms-experience.component';
import { LmsProgressComponent } from './components/dashboard/lms-courses/lms-progress/lms-progress.component';
import { LmsHoursSpentComponent } from './components/dashboard/lms-courses/lms-hours-spent/lms-hours-spent.component';
import { LmsPlanningComponent } from './components/dashboard/lms-courses/lms-planning/lms-planning.component';
import { LmsActiveCourseComponent } from './components/dashboard/lms-courses/lms-active-course/lms-active-course.component';
import { LmsCourseCompletionComponent } from './components/dashboard/lms-courses/lms-course-completion/lms-course-completion.component';
import { LmsInstructorsComponent } from './components/dashboard/lms-courses/lms-instructors/lms-instructors.component';
import { LmsCurrentCoursesComponent } from './components/dashboard/lms-courses/lms-current-courses/lms-current-courses.component';
import { LmsMessagesComponent } from './components/dashboard/lms-courses/lms-messages/lms-messages.component';
import { LmsEnrolledCreatedComponent } from './components/dashboard/lms-courses/lms-enrolled-created/lms-enrolled-created.component';
import { LmsStudentsComponent } from './components/dashboard/lms-courses/lms-students/lms-students.component';
import { LmsStatusComponent } from './components/dashboard/lms-courses/lms-status/lms-status.component';
import { LmsEnrolledComponent } from './components/dashboard/lms-courses/lms-enrolled-created/lms-enrolled/lms-enrolled.component';
import { LmsCreatedComponent } from './components/dashboard/lms-courses/lms-enrolled-created/lms-created/lms-created.component';
import { WelcomeDashboardComponent } from './components/dashboard/analytics/welcome-dashboard/welcome-dashboard.component';
import { AnalyticsStatsComponent } from './components/dashboard/analytics/analytics-stats/analytics-stats.component';
import { AnalyticsStatusComponent } from './components/dashboard/analytics/analytics-status/analytics-status.component';
import { AnalyticsAudienceOverviewComponent } from './components/dashboard/analytics/analytics-audience-overview/analytics-audience-overview.component';
import { SalesAnalyticsComponent } from './components/dashboard/analytics/sales-analytics/sales-analytics.component';
import { AnalyticsTotalRevenueComponent } from './components/dashboard/analytics/analytics-total-revenue/analytics-total-revenue.component';
import { RevenueReportComponent } from './components/dashboard/analytics/revenue-report/revenue-report.component';
import { AnalyticsActivityComponent } from './components/dashboard/analytics/analytics-activity/analytics-activity.component';
import { TotalTransactionsComponent } from './components/dashboard/analytics/total-transactions/total-transactions.component';
import { TerminalsComponent } from './components/dashboard/analytics/terminals/terminals.component';
import { NewVsReturingComponent } from './components/dashboard/analytics/new-vs-returing/new-vs-returing.component';
import { AnalyticsGenderComponent } from './components/dashboard/analytics/analytics-gender/analytics-gender.component';
import { VisitorsAgeComponent } from './components/dashboard/analytics/visitors-age/visitors-age.component';
import { SessionsDeviceComponent } from './components/dashboard/analytics/sessions-device/sessions-device.component';
import { AnalyticsLanguageComponent } from './components/dashboard/analytics/analytics-language/analytics-language.component';
import { SessionsByCountriesComponent } from './components/dashboard/analytics/sessions-by-countries/sessions-by-countries.component';
import { BrowserUsedTrafficReportsComponent } from './components/dashboard/analytics/browser-used-traffic-reports/browser-used-traffic-reports.component';
import { PmStatsComponent } from './components/dashboard/project-management/pm-stats/pm-stats.component';
import { TaskDistributionComponent } from './components/dashboard/project-management/task-distribution/task-distribution.component';
import { MyTasksComponent } from './components/dashboard/project-management/my-tasks/my-tasks.component';
import { PmTotalUsersComponent } from './components/dashboard/project-management/pm-total-users/pm-total-users.component';
import { CompletedTasksComponent } from './components/dashboard/project-management/completed-tasks/completed-tasks.component';
import { TasksPerformanceComponent } from './components/dashboard/project-management/tasks-performance/tasks-performance.component';
import { IssuesSummaryComponent } from './components/dashboard/project-management/issues-summary/issues-summary.component';
import { PmTeamMembersComponent } from './components/dashboard/project-management/pm-team-members/pm-team-members.component';
import { PmAllProjectsComponent } from './components/dashboard/project-management/pm-all-projects/pm-all-projects.component';
import { PmActivityTimelineComponent } from './components/dashboard/project-management/pm-activity-timeline/pm-activity-timeline.component';
import { FileManagerComponent } from './components/apps/file-manager/file-manager.component';
import { FmProjectsComponent } from './components/apps/file-manager/fm-projects/fm-projects.component';
import { FmPersonalComponent } from './components/apps/file-manager/fm-personal/fm-personal.component';
import { FmTemplatesComponent } from './components/apps/file-manager/fm-templates/fm-templates.component';
import { FmAssetsComponent } from './components/apps/file-manager/fm-assets/fm-assets.component';
import { FmSidebarComponent } from './components/apps/file-manager/fm-sidebar/fm-sidebar.component';
import { FmDocumentsComponent } from './components/apps/file-manager/fm-documents/fm-documents.component';
import { FmMediaComponent } from './components/apps/file-manager/fm-media/fm-media.component';
import { FmRecentFilesComponent } from './components/apps/file-manager/fm-recent-files/fm-recent-files.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { MembersGridComponent } from './components/contact-list/members-grid/members-grid.component';
import { MembersGrid2Component } from './components/contact-list/members-grid2/members-grid2.component';
import { MembersListComponent } from './components/contact-list/members-list/members-list.component';
import { MemberProfileComponent } from './components/contact-list/member-profile/member-profile.component';
import { MpStatsComponent } from './components/contact-list/member-profile/mp-stats/mp-stats.component';
import { MpActivityTimelineComponent } from './components/contact-list/member-profile/mp-activity-timeline/mp-activity-timeline.component';
import { MpMyTasksComponent } from './components/contact-list/member-profile/mp-my-tasks/mp-my-tasks.component';
import { MpOverviewComponent } from './components/contact-list/member-profile/mp-overview/mp-overview.component';
import { MpPersonalInfoComponent } from './components/contact-list/member-profile/mp-personal-info/mp-personal-info.component';
import { TaskDetailsComponent } from './components/apps/to-do-list/task-details/task-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PClientsComponent } from './components/projects/p-clients/p-clients.component';
import { PTeamComponent } from './components/projects/p-team/p-team.component';
import { PKanbanBoardComponent } from './components/projects/p-kanban-board/p-kanban-board.component';
import { PUsersComponent } from './components/projects/p-users/p-users.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { PTasksComponent } from './components/projects/p-tasks/p-tasks.component';
import { PtOverviewComponent } from './components/projects/p-tasks/pt-overview/pt-overview.component';
import { PtCompletedComponent } from './components/projects/p-tasks/pt-completed/pt-completed.component';
import { PtPerformanceComponent } from './components/projects/p-tasks/pt-performance/pt-performance.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { LessonPreviewComponent } from './components/courses/lesson-preview/lesson-preview.component';
import { CreatedCoursesComponent } from './components/courses/created-courses/created-courses.component';
import { EnrolledCoursesComponent } from './components/courses/enrolled-courses/enrolled-courses.component';
import { AnalyticsCustomersComponent } from './components/pages/analytics-customers/analytics-customers.component';
import { AnalyticsReportsComponent } from './components/pages/analytics-reports/analytics-reports.component';
import { AcAudienceOverviewComponent } from './components/pages/analytics-customers/ac-audience-overview/ac-audience-overview.component';
import { AcStatusComponent } from './components/pages/analytics-customers/ac-status/ac-status.component';
import { ArRevenueReportComponent } from './components/pages/analytics-reports/ar-revenue-report/ar-revenue-report.component';
import { ArAverageReportComponent } from './components/pages/analytics-reports/ar-average-report/ar-average-report.component';
import { ArSessionsComponent } from './components/pages/analytics-reports/ar-sessions/ar-sessions.component';
import { ArBrowserUsedTrafficReportsComponent } from './components/pages/analytics-reports/ar-browser-used-traffic-reports/ar-browser-used-traffic-reports.component';
import { ProductsComponent } from './components/pages/ecommerce/products/products.component';
import { ProductDetailsComponent } from './components/pages/ecommerce/product-details/product-details.component';
import { CreateProductComponent } from './components/pages/ecommerce/create-product/create-product.component';
import { ProductsOrderDetailsComponent } from './components/pages/ecommerce/products-order-details/products-order-details.component';
import { ProductsOrdersComponent } from './components/pages/ecommerce/products-orders/products-orders.component';
import { ProductsCustomersComponent } from './components/pages/ecommerce/products-customers/products-customers.component';
import { ProductsCartComponent } from './components/pages/ecommerce/products-cart/products-cart.component';
import { ProductsCheckoutComponent } from './components/pages/ecommerce/products-checkout/products-checkout.component';
import { ProductSellersComponent } from './components/pages/ecommerce/product-sellers/product-sellers.component';
import { PoStatsComponent } from './components/pages/ecommerce/products-orders/po-stats/po-stats.component';
import { ButtonsComponent } from './components/ui-kit/buttons/buttons.component';
import { AlertsComponent } from './components/ui-kit/alerts/alerts.component';
import { AvatarsComponent } from './components/ui-kit/avatars/avatars.component';
import { BadgesComponent } from './components/ui-kit/badges/badges.component';
import { CardsComponent } from './components/ui-kit/cards/cards.component';
import { CarouselsComponent } from './components/ui-kit/carousels/carousels.component';
import { MenusComponent } from './components/ui-kit/menus/menus.component';
import { GridComponent } from './components/ui-kit/grid/grid.component';
import { ImagesComponent } from './components/ui-kit/images/images.component';
import { ListComponent } from './components/ui-kit/list/list.component';
import { AutocompleteComponent } from './components/ui-kit/autocomplete/autocomplete.component';
import { DsAutocompleteComponent } from './components/ui-kit/autocomplete/ds-autocomplete/ds-autocomplete.component';
import { FilterAutocompleteComponent } from './components/ui-kit/autocomplete/filter-autocomplete/filter-autocomplete.component';
import { OgAutocompleteComponent } from './components/ui-kit/autocomplete/og-autocomplete/og-autocomplete.component';
import { AutocompleteOverviewComponent } from './components/ui-kit/autocomplete/autocomplete-overview/autocomplete-overview.component';
import { PiAutocompleteComponent } from './components/ui-kit/autocomplete/pi-autocomplete/pi-autocomplete.component';
import { SimpleAutocompleteComponent } from './components/ui-kit/autocomplete/simple-autocomplete/simple-autocomplete.component';
import { CheckboxComponent } from './components/ui-kit/checkbox/checkbox.component';
import { RadioComponent } from './components/ui-kit/radio/radio.component';
import { ButtonToggleComponent } from './components/ui-kit/button-toggle/button-toggle.component';
import { ChipsComponent } from './components/ui-kit/chips/chips.component';
import { ChipsAutocompleteComponent } from './components/ui-kit/chips/chips-autocomplete/chips-autocomplete.component';
import { ChipsDadComponent } from './components/ui-kit/chips/chips-dad/chips-dad.component';
import { ChipsWithFcComponent } from './components/ui-kit/chips/chips-with-fc/chips-with-fc.component';
import { ChipsWithInputComponent } from './components/ui-kit/chips/chips-with-input/chips-with-input.component';
import { StackedChipsComponent } from './components/ui-kit/chips/stacked-chips/stacked-chips.component';
import { DatepickerComponent } from './components/ui-kit/datepicker/datepicker.component';
import { DatepickerSvComponent } from './components/ui-kit/datepicker/datepicker-sv/datepicker-sv.component';
import { DatepickerYmPickerComponent } from './components/ui-kit/datepicker/datepicker-ym-picker/datepicker-ym-picker.component';
import { DateRangePcrComponent } from './components/ui-kit/datepicker/date-range-pcr/date-range-pcr.component';
import { DateRangePfiComponent } from './components/ui-kit/datepicker/date-range-pfi/date-range-pfi.component';
import { BasicDateRangeComponent } from './components/ui-kit/datepicker/basic-date-range/basic-date-range.component';
import { DpActionButtonComponent } from './components/ui-kit/datepicker/dp-action-button/dp-action-button.component';
import { DpOpenMethodComponent } from './components/ui-kit/datepicker/dp-open-method/dp-open-method.component';
import { DatepickerPcComponent } from './components/ui-kit/datepicker/datepicker-pc/datepicker-pc.component';
import { DatepickerCustomIconComponent } from './components/ui-kit/datepicker/datepicker-custom-icon/datepicker-custom-icon.component';
import { DisabledDatepickerComponent } from './components/ui-kit/datepicker/disabled-datepicker/disabled-datepicker.component';
import { DatepickerInlineCalendarComponent } from './components/ui-kit/datepicker/datepicker-inline-calendar/datepicker-inline-calendar.component';
import { DividerComponent } from './components/ui-kit/divider/divider.component';
import { ExpansionComponent } from './components/ui-kit/expansion/expansion.component';
import { AccordionTogglesComponent } from './components/ui-kit/expansion/accordion-toggles/accordion-toggles.component';
import { FormFieldComponent } from './components/ui-kit/form-field/form-field.component';
import { FfWithLabelComponent } from './components/ui-kit/form-field/ff-with-label/ff-with-label.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { PaginationComponent } from './components/ui-kit/pagination/pagination.component';
import { ProgressBarComponent } from './components/ui-kit/progress-bar/progress-bar.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import { SidenavComponent } from './components/ui-kit/sidenav/sidenav.component';
import { DrawerEbsComponent } from './components/ui-kit/sidenav/drawer-ebs/drawer-ebs.component';
import { SlideToggleComponent } from './components/ui-kit/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/ui-kit/slider/slider.component';
import { SnackbarComponent } from './components/ui-kit/snackbar/snackbar.component';
import { SnackbarWithCcComponent } from './components/ui-kit/snackbar/snackbar-with-cc/snackbar-with-cc.component';
import { SnackbarWithCpComponent } from './components/ui-kit/snackbar/snackbar-with-cp/snackbar-with-cp.component';
import { ToolbarComponent } from './components/ui-kit/toolbar/toolbar.component';
import { TooltipComponent } from './components/ui-kit/tooltip/tooltip.component';
import { TooltipShowHideDelayComponent } from './components/ui-kit/tooltip/tooltip-show-hide-delay/tooltip-show-hide-delay.component';
import { TreeComponent } from './components/ui-kit/tree/tree.component';
import { TreeWithPldComponent } from './components/ui-kit/tree/tree-with-pld/tree-with-pld.component';
import { TreeWithDdComponent } from './components/ui-kit/tree/tree-with-dd/tree-with-dd.component';
import { TreeWithCheckboxComponent } from './components/ui-kit/tree/tree-with-checkbox/tree-with-checkbox.component';
import { TabsComponent } from './components/ui-kit/tabs/tabs.component';
import { StepperComponent } from './components/ui-kit/stepper/stepper.component';
import { StepperResponsiveComponent } from './components/ui-kit/stepper/stepper-responsive/stepper-responsive.component';
import { AccordionComponent } from './components/ui-kit/accordion/accordion.component';
import { ListboxComponent } from './components/ui-kit/listbox/listbox.component';
import { BreadcrumbComponent } from './components/ui-kit/breadcrumb/breadcrumb.component';
import { TableComponent } from './components/ui-kit/table/table.component';
import { DialogComponent } from './components/ui-kit/dialog/dialog.component';
import { FlaticonComponent } from './components/pages/icons/flaticon/flaticon.component';
import { RemixiconComponent } from './components/pages/icons/remixicon/remixicon.component';
import { MaterialSymbolsComponent } from './components/pages/icons/material-symbols/material-symbols.component';
import { MaterialIconsComponent } from './components/pages/icons/material-icons/material-icons.component';
import { TypographyComponent } from './components/ui-kit/typography/typography.component';
import { SpacingComponent } from './components/ui-kit/spacing/spacing.component';
import { ApexchartsComponent } from './components/charts/apexcharts/apexcharts.component';
import { DashedLineChartComponent } from './components/charts/apexcharts/dashed-line-chart/dashed-line-chart.component';
import { GradientLineChartComponent } from './components/charts/apexcharts/gradient-line-chart/gradient-line-chart.component';
import { ZoomableLineChartComponent } from './components/charts/apexcharts/zoomable-line-chart/zoomable-line-chart.component';
import { BasicLineChartComponent } from './components/charts/apexcharts/basic-line-chart/basic-line-chart.component';
import { SteplineLineChartComponent } from './components/charts/apexcharts/stepline-line-chart/stepline-line-chart.component';
import { BrushLineChartComponent } from './components/charts/apexcharts/brush-line-chart/brush-line-chart.component';
import { SyncingLineChartComponent } from './components/charts/apexcharts/syncing-line-chart/syncing-line-chart.component';
import { BasicAreaChartComponent } from './components/charts/apexcharts/basic-area-chart/basic-area-chart.component';
import { SplineAreaChartComponent } from './components/charts/apexcharts/spline-area-chart/spline-area-chart.component';
import { DatetimeAreaChartComponent } from './components/charts/apexcharts/datetime-area-chart/datetime-area-chart.component';
import { NegativeAreaChartComponent } from './components/charts/apexcharts/negative-area-chart/negative-area-chart.component';
import { StackedAreaChartComponent } from './components/charts/apexcharts/stacked-area-chart/stacked-area-chart.component';
import { MissingAreaChartComponent } from './components/charts/apexcharts/missing-area-chart/missing-area-chart.component';
import { GithubAreaChartComponent } from './components/charts/apexcharts/github-area-chart/github-area-chart.component';
import { BasicColumnChartComponent } from './components/charts/apexcharts/basic-column-chart/basic-column-chart.component';
import { DatalabelsColumnChartComponent } from './components/charts/apexcharts/datalabels-column-chart/datalabels-column-chart.component';
import { StackedColumnChartComponent } from './components/charts/apexcharts/stacked-column-chart/stacked-column-chart.component';
import { RangeColumnChartComponent } from './components/charts/apexcharts/range-column-chart/range-column-chart.component';
import { RotatedLabelsColumnChartComponent } from './components/charts/apexcharts/rotated-labels-column-chart/rotated-labels-column-chart.component';
import { DistributedColumnChartComponent } from './components/charts/apexcharts/distributed-column-chart/distributed-column-chart.component';
import { LineColumnChartComponent } from './components/charts/apexcharts/line-column-chart/line-column-chart.component';
import { MultipleYaxisChartComponent } from './components/charts/apexcharts/multiple-yaxis-chart/multiple-yaxis-chart.component';
import { LineAreaChartComponent } from './components/charts/apexcharts/line-area-chart/line-area-chart.component';
import { LineColumnAreaChartComponent } from './components/charts/apexcharts/line-column-area-chart/line-column-area-chart.component';
import { BasicRangeAreaChartComponent } from './components/charts/apexcharts/basic-range-area-chart/basic-range-area-chart.component';
import { BasicTimelineChartComponent } from './components/charts/apexcharts/basic-timeline-chart/basic-timeline-chart.component';
import { BasicCandlestickChartComponent } from './components/charts/apexcharts/basic-candlestick-chart/basic-candlestick-chart.component';
import { BasicBoxplotChartComponent } from './components/charts/apexcharts/basic-boxplot-chart/basic-boxplot-chart.component';
import { BasicBubbleChartComponent } from './components/charts/apexcharts/basic-bubble-chart/basic-bubble-chart.component';
import { BasicScatterChartComponent } from './components/charts/apexcharts/basic-scatter-chart/basic-scatter-chart.component';
import { BasicHeatmapChartComponent } from './components/charts/apexcharts/basic-heatmap-chart/basic-heatmap-chart.component';
import { BasicTreemapChartComponent } from './components/charts/apexcharts/basic-treemap-chart/basic-treemap-chart.component';
import { BasicPieChartComponent } from './components/charts/apexcharts/basic-pie-chart/basic-pie-chart.component';
import { PieDonutChartComponent } from './components/charts/apexcharts/pie-donut-chart/pie-donut-chart.component';
import { PieMonochromeChartComponent } from './components/charts/apexcharts/pie-monochrome-chart/pie-monochrome-chart.component';
import { BasicRadialbarChartComponent } from './components/charts/apexcharts/basic-radialbar-chart/basic-radialbar-chart.component';
import { MultipleRadialbarChartComponent } from './components/charts/apexcharts/multiple-radialbar-chart/multiple-radialbar-chart.component';
import { CircleRadialbarChartComponent } from './components/charts/apexcharts/circle-radialbar-chart/circle-radialbar-chart.component';
import { GradientRadialbarChartComponent } from './components/charts/apexcharts/gradient-radialbar-chart/gradient-radialbar-chart.component';
import { StrokedRadialbarChartComponent } from './components/charts/apexcharts/stroked-radialbar-chart/stroked-radialbar-chart.component';
import { CircularRadialbarChartComponent } from './components/charts/apexcharts/circular-radialbar-chart/circular-radialbar-chart.component';
import { BasicRadarChartComponent } from './components/charts/apexcharts/basic-radar-chart/basic-radar-chart.component';
import { MultipleRadarChartComponent } from './components/charts/apexcharts/multiple-radar-chart/multiple-radar-chart.component';
import { PolygonRadarChartComponent } from './components/charts/apexcharts/polygon-radar-chart/polygon-radar-chart.component';
import { BasicPolarChartComponent } from './components/charts/apexcharts/basic-polar-chart/basic-polar-chart.component';
import { MonochromePolarChartComponent } from './components/charts/apexcharts/monochrome-polar-chart/monochrome-polar-chart.component';
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { SimpleEchartComponent } from './components/charts/echarts/simple-echart/simple-echart.component';
import { EventsEchartComponent } from './components/charts/echarts/events-echart/events-echart.component';
import { ThemeEchartComponent } from './components/charts/echarts/theme-echart/theme-echart.component';
import { LoadingEchartComponent } from './components/charts/echarts/loading-echart/loading-echart.component';
import { MergeEchartComponent } from './components/charts/echarts/merge-echart/merge-echart.component';
import { InitOptsEchartComponent } from './components/charts/echarts/init-opts-echart/init-opts-echart.component';
import { InstanceEchartComponent } from './components/charts/echarts/instance-echart/instance-echart.component';
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { ChartjsComponent } from './components/charts/chartjs/chartjs.component';
import { BarChartjsComponent } from './components/charts/chartjs/bar-chartjs/bar-chartjs.component';
import { DoughnutChartjsComponent } from './components/charts/chartjs/doughnut-chartjs/doughnut-chartjs.component';
import { RadarChartjsComponent } from './components/charts/chartjs/radar-chartjs/radar-chartjs.component';
import { PieChartjsComponent } from './components/charts/chartjs/pie-chartjs/pie-chartjs.component';
import { PolarChartjsComponent } from './components/charts/chartjs/polar-chartjs/polar-chartjs.component';
import { BubbleChartjsComponent } from './components/charts/chartjs/bubble-chartjs/bubble-chartjs.component';
import { ScatterChartjsComponent } from './components/charts/chartjs/scatter-chartjs/scatter-chartjs.component';
import { MapsComponent } from './components/pages/maps/maps.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { WizardFormComponent } from './components/forms/wizard-form/wizard-form.component';
import { AdvancedFormComponent } from './components/forms/advanced-form/advanced-form.component';
import { EditorsComponent } from './components/forms/editors/editors.component';
import { FileUploaderComponent } from './components/forms/file-uploader/file-uploader.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { PersonalInfoComponent } from './components/pages/profile/personal-info/personal-info.component';
import { ActivityTimelineComponent } from './components/pages/profile/activity-timeline/activity-timeline.component';
import { StatsComponent } from './components/pages/profile/stats/stats.component';
import { OverviewComponent } from './components/pages/profile/overview/overview.component';
import { TasksComponent } from './components/pages/profile/tasks/tasks.component';
import { AccountComponent } from './components/pages/account/account.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { ConnectionsComponent } from './components/pages/connections/connections.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { SearchComponent } from './components/pages/search/search.component';
import { BlankPageComponent } from './components/pages/blank-page/blank-page.component';
import { DragDropComponent } from './components/ui-kit/drag-drop/drag-drop.component';
import { ConnectedSortingDdComponent } from './components/ui-kit/drag-drop/connected-sorting-dd/connected-sorting-dd.component';
import { ColorPickerComponent } from './components/ui-kit/color-picker/color-picker.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { InternalErrorComponent } from './components/common/internal-error/internal-error.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { SigninSignupComponent } from './components/authentication/signin-signup/signin-signup.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { ConfirmMailComponent } from './components/authentication/confirm-mail/confirm-mail.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { DtTeamMembersComponent } from './components/tables/data-table/dt-team-members/dt-team-members.component';
import { DtTasksComponent } from './components/tables/data-table/dt-tasks/dt-tasks.component';
import { AddRemoveArrayBasedDatasourceTableComponent } from './components/ui-kit/table/add-remove-array-based-datasource-table/add-remove-array-based-datasource-table.component';
import { TableDynamicallyColumnsDisplayedComponent } from './components/ui-kit/table/table-dynamically-columns-displayed/table-dynamically-columns-displayed.component';
import { StylingColumnsTableComponent } from './components/ui-kit/table/styling-columns-table/styling-columns-table.component';
import { AddRemoveObservableBasedDatasourceTableComponent } from './components/ui-kit/table/add-remove-observable-based-datasource-table/add-remove-observable-based-datasource-table.component';
import { ExpandableRowsTableComponent } from './components/ui-kit/table/expandable-rows-table/expandable-rows-table.component';
import { FilteringTableComponent } from './components/ui-kit/table/filtering-table/filtering-table.component';
import { FooterRowTableComponent } from './components/ui-kit/table/footer-row-table/footer-row-table.component';
import { RetrievingDataHttpTableComponent } from './components/ui-kit/table/retrieving-data-http-table/retrieving-data-http-table.component';
import { MultipleHeaderFooterTableComponent } from './components/ui-kit/table/multiple-header-footer-table/multiple-header-footer-table.component';
import { SortingPaginationFilteringTableComponent } from './components/ui-kit/table/sorting-pagination-filtering-table/sorting-pagination-filtering-table.component';
import { PaginationTableComponent } from './components/ui-kit/table/pagination-table/pagination-table.component';
import { SelectionTableComponent } from './components/ui-kit/table/selection-table/selection-table.component';
import { SortingTableComponent } from './components/ui-kit/table/sorting-table/sorting-table.component';
import { StickyColumnsTableComponent } from './components/ui-kit/table/sticky-columns-table/sticky-columns-table.component';
import { StickyFooterTableComponent } from './components/ui-kit/table/sticky-footer-table/sticky-footer-table.component';
import { StickyHeaderTableComponent } from './components/ui-kit/table/sticky-header-table/sticky-header-table.component';
import { RippleTableComponent } from './components/ui-kit/table/ripple-table/ripple-table.component';
import { MenuDialogComponent } from './components/ui-kit/dialog/menu-dialog/menu-dialog.component';
import { FormDialogComponent } from './components/ui-kit/dialog/form-dialog/form-dialog.component';
import { BigFormDialogComponent } from './components/ui-kit/dialog/big-form-dialog/big-form-dialog.component';
import { ContactsComponent } from './components/apps/contacts/contacts.component';
import { ReadEmailComponent } from './components/apps/email/read-email/read-email.component';
import { ComposeEmailComponent } from './components/apps/email/compose-email/compose-email.component';
import { EmailSidebarComponent } from './components/apps/email/email-sidebar/email-sidebar.component';
import { CustomizerSettingsComponent } from './components/customizer-settings/customizer-settings.component';
import { VideosComponent } from './components/ui-kit/videos/videos.component';
import { YoutubePopupComponent } from './components/ui-kit/videos/youtube-popup/youtube-popup.component';
import { VimeoPopupComponent } from './components/ui-kit/videos/vimeo-popup/vimeo-popup.component';
import { ChatSidebarComponent } from './components/apps/chat/chat-sidebar/chat-sidebar.component';
import { CryptoComponent } from './components/dashboard/crypto/crypto.component';
import { HelpDeskComponent } from './components/dashboard/help-desk/help-desk.component';
import { SaasAppComponent } from './components/dashboard/saas-app/saas-app.component';
import { CryptoStatsComponent } from './components/dashboard/crypto/crypto-stats/crypto-stats.component';
import { MarketGraphComponent } from './components/dashboard/crypto/market-graph/market-graph.component';
import { CurrentRateComponent } from './components/dashboard/crypto/current-rate/current-rate.component';
import { CryptoMyProfileComponent } from './components/dashboard/crypto/crypto-my-profile/crypto-my-profile.component';
import { UserActivitiesComponent } from './components/dashboard/crypto/user-activities/user-activities.component';
import { OrderActivitiesComponent } from './components/dashboard/crypto/order-activities/order-activities.component';
import { MyCurrenciesComponent } from './components/dashboard/crypto/my-currencies/my-currencies.component';
import { TradingComponent } from './components/dashboard/crypto/trading/trading.component';
import { HdStatsComponent } from './components/dashboard/help-desk/hd-stats/hd-stats.component';
import { TicketsStatusComponent } from './components/dashboard/help-desk/tickets-status/tickets-status.component';
import { CustomerSatisfactionComponent } from './components/dashboard/help-desk/customer-satisfaction/customer-satisfaction.component';
import { SupportStatusComponent } from './components/dashboard/help-desk/support-status/support-status.component';
import { HdActivityComponent } from './components/dashboard/help-desk/hd-activity/hd-activity.component';
import { AverageTimeCallComponent } from './components/dashboard/help-desk/average-time-call/average-time-call.component';
import { AgentPerformanceComponent } from './components/dashboard/help-desk/agent-performance/agent-performance.component';
import { SaCompletedTasksComponent } from './components/dashboard/saas-app/sa-completed-tasks/sa-completed-tasks.component';
import { MilestonesOverviewComponent } from './components/dashboard/saas-app/milestones-overview/milestones-overview.component';
import { SaTasksPerformanceComponent } from './components/dashboard/saas-app/sa-tasks-performance/sa-tasks-performance.component';
import { SaAudienceOverviewComponent } from './components/dashboard/saas-app/sa-audience-overview/sa-audience-overview.component';
import { SaAllProjectsComponent } from './components/dashboard/saas-app/sa-all-projects/sa-all-projects.component';
import { SaMessagesComponent } from './components/dashboard/saas-app/sa-messages/sa-messages.component';
import { SaStatsComponent } from './components/dashboard/saas-app/sa-stats/sa-stats.component';
import { SaRevenueSummaryComponent } from './components/dashboard/saas-app/sa-revenue-summary/sa-revenue-summary.component';
import { SaSalesAnalyticsComponent } from './components/dashboard/saas-app/sa-sales-analytics/sa-sales-analytics.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ProcedureComponent } from './components/pages/procedure/procedure.component';
import { API_BASE_URL } from './services/vetconnect.service';
import { StatusComponent } from './components/pages/status/status.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { ToastrModule } from 'ngx-toastr';
import { AppointmentDialogComponent } from './components/common/appointment-dialog/appointment-dialog.component';
import { AcquisitionTypeComponent } from './components/pages/acquisition-type/acquisition-type.component';
import { ConfirmDialogComponent } from './components/common/confirm-dialog/confirm-dialog.component';
import { DocumentTypeComponent } from './components/pages/document-type/document-type.component';
import { UserTypeComponent } from './components/pages/user-type/user-type.component';
import { PeriodicityComponent } from './components/pages/periodicity/periodicity.component';
import { SettingsComponent } from './components/pages/component-settings/settings.component';
import { CitiesComponent } from './components/common/cities/cities.component';
import { VeterinarySettingsComponent } from './components/pages/veterinary-settings/veterinary-settings.component';
import { ProceduresServicesSettingsComponent } from './components/pages/procedures-services-settings/procedures-services-settings.component';
import { VeterinarianSettingsComponent } from './components/pages/veterinarian-settings/veterinarian-settings.component';
import { EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent } from '@ecodev/fab-speed-dial';
import { AuthInterceptor } from './services/AuthInterceptor ';
import { PetInfoComponent } from './components/pages/profile/pet-info/pet-info.component';
import { ClientComponent } from './components/pages/client/client.component';
import { MatPaginatorIntlSpanish } from './shared/paginator-es';
import { DocumentTypeSelectComponent } from './components/common/document-type-select/document-type-select.component';



@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AppsComponent,
        EcommerceComponent,
        AnalyticsComponent,
        ProjectManagementComponent,
        LmsCoursesComponent,
        ChatComponent,
        ToDoListComponent,
        CalendarComponent,
        EmailComponent,
        SidebarComponent,
        FooterComponent,
        HeaderComponent,
        RecentOrdersComponent,
        TeamMembersListComponent,
        BestSellingProductsComponent,
        EcommerceStatsComponent,
        AudienceOverviewComponent,
        EcommerceRatingsComponent,
        EcommerceImpressionsComponent,
        VisitsByDayComponent,
        EcommerceActivityTimelineComponent,
        SalesByLocationsComponent,
        NewCustomersComponent,
        LiveVisitsOnOurSiteComponent,
        RevenueStatusComponent,
        LmsStatsComponent,
        LmsExperienceComponent,
        LmsProgressComponent,
        LmsHoursSpentComponent,
        LmsPlanningComponent,
        LmsActiveCourseComponent,
        LmsCourseCompletionComponent,
        LmsInstructorsComponent,
        LmsCurrentCoursesComponent,
        LmsMessagesComponent,
        LmsEnrolledCreatedComponent,
        LmsStudentsComponent,
        LmsStatusComponent,
        LmsEnrolledComponent,
        LmsCreatedComponent,
        WelcomeDashboardComponent,
        AnalyticsStatsComponent,
        AnalyticsStatusComponent,
        AnalyticsAudienceOverviewComponent,
        SalesAnalyticsComponent,
        AnalyticsTotalRevenueComponent,
        RevenueReportComponent,
        AnalyticsActivityComponent,
        TotalTransactionsComponent,
        TerminalsComponent,
        NewVsReturingComponent,
        AnalyticsGenderComponent,
        VisitorsAgeComponent,
        SessionsDeviceComponent,
        AnalyticsLanguageComponent,
        SessionsByCountriesComponent,
        BrowserUsedTrafficReportsComponent,
        PmStatsComponent,
        TaskDistributionComponent,
        MyTasksComponent,
        PmTotalUsersComponent,
        CompletedTasksComponent,
        TasksPerformanceComponent,
        IssuesSummaryComponent,
        PmTeamMembersComponent,
        PmAllProjectsComponent,
        PmActivityTimelineComponent,
        FileManagerComponent,
        FmProjectsComponent,
        FmPersonalComponent,
        FmTemplatesComponent,
        FmAssetsComponent,
        FmSidebarComponent,
        FmDocumentsComponent,
        FmMediaComponent,
        FmRecentFilesComponent,
        ContactListComponent,
        MembersGridComponent,
        MembersGrid2Component,
        MembersListComponent,
        MemberProfileComponent,
        MpStatsComponent,
        MpActivityTimelineComponent,
        MpMyTasksComponent,
        MpOverviewComponent,
        MpPersonalInfoComponent,
        TaskDetailsComponent,
        InvoiceComponent,
        InvoiceDetailsComponent,
        ProjectsComponent,
        PClientsComponent,
        PTeamComponent,
        PKanbanBoardComponent,
        PUsersComponent,
        ProjectCreateComponent,
        PTasksComponent,
        PtOverviewComponent,
        PtCompletedComponent,
        PtPerformanceComponent,
        CoursesComponent,
        CourseDetailsComponent,
        LessonPreviewComponent,
        CreatedCoursesComponent,
        EnrolledCoursesComponent,
        AnalyticsCustomersComponent,
        AnalyticsReportsComponent,
        AcAudienceOverviewComponent,
        AcStatusComponent,
        ArRevenueReportComponent,
        ArAverageReportComponent,
        ArSessionsComponent,
        ArBrowserUsedTrafficReportsComponent,
        ProductsComponent,
        ProductDetailsComponent,
        CreateProductComponent,
        ProductsOrderDetailsComponent,
        ProductsOrdersComponent,
        ProductsCustomersComponent,
        ProductsCartComponent,
        ProductsCheckoutComponent,
        ProductSellersComponent,
        PoStatsComponent,
        ButtonsComponent,
        AlertsComponent,
        AvatarsComponent,
        BadgesComponent,
        CardsComponent,
        CarouselsComponent,
        MenusComponent,
        GridComponent,
        ImagesComponent,
        ListComponent,
        AutocompleteComponent,
        DsAutocompleteComponent,
        FilterAutocompleteComponent,
        OgAutocompleteComponent,
        AutocompleteOverviewComponent,
        PiAutocompleteComponent,
        SimpleAutocompleteComponent,
        CheckboxComponent,
        RadioComponent,
        ButtonToggleComponent,
        ChipsComponent,
        ChipsAutocompleteComponent,
        ChipsDadComponent,
        ChipsWithFcComponent,
        ChipsWithInputComponent,
        StackedChipsComponent,
        DatepickerComponent,
        DatepickerSvComponent,
        DatepickerYmPickerComponent,
        DateRangePcrComponent,
        DateRangePfiComponent,
        BasicDateRangeComponent,
        DpActionButtonComponent,
        DpOpenMethodComponent,
        DatepickerPcComponent,
        DatepickerCustomIconComponent,
        DisabledDatepickerComponent,
        DatepickerInlineCalendarComponent,
        DividerComponent,
        ExpansionComponent,
        AccordionTogglesComponent,
        FormFieldComponent,
        FfWithLabelComponent,
        InputComponent,
        PaginationComponent,
        ProgressBarComponent,
        SelectComponent,
        SidenavComponent,
        DrawerEbsComponent,
        SlideToggleComponent,
        SliderComponent,
        SnackbarComponent,
        SnackbarWithCcComponent,
        SnackbarWithCpComponent,
        ToolbarComponent,
        TooltipComponent,
        TooltipShowHideDelayComponent,
        TreeComponent,
        TreeWithPldComponent,
        TreeWithDdComponent,
        TreeWithCheckboxComponent,
        TabsComponent,
        StepperComponent,
        StepperResponsiveComponent,
        AccordionComponent,
        ListboxComponent,
        BreadcrumbComponent,
        TableComponent,
        DialogComponent,
        FlaticonComponent,
        RemixiconComponent,
        MaterialSymbolsComponent,
        MaterialIconsComponent,
        TypographyComponent,
        SpacingComponent,
        ApexchartsComponent,
        DashedLineChartComponent,
        GradientLineChartComponent,
        ZoomableLineChartComponent,
        BasicLineChartComponent,
        SteplineLineChartComponent,
        BrushLineChartComponent,
        SyncingLineChartComponent,
        BasicAreaChartComponent,
        SplineAreaChartComponent,
        DatetimeAreaChartComponent,
        NegativeAreaChartComponent,
        StackedAreaChartComponent,
        MissingAreaChartComponent,
        GithubAreaChartComponent,
        BasicColumnChartComponent,
        DatalabelsColumnChartComponent,
        StackedColumnChartComponent,
        RangeColumnChartComponent,
        RotatedLabelsColumnChartComponent,
        DistributedColumnChartComponent,
        LineColumnChartComponent,
        MultipleYaxisChartComponent,
        LineAreaChartComponent,
        LineColumnAreaChartComponent,
        BasicRangeAreaChartComponent,
        BasicTimelineChartComponent,
        BasicCandlestickChartComponent,
        BasicBoxplotChartComponent,
        BasicBubbleChartComponent,
        BasicScatterChartComponent,
        BasicHeatmapChartComponent,
        BasicTreemapChartComponent,
        BasicPieChartComponent,
        PieDonutChartComponent,
        PieMonochromeChartComponent,
        BasicRadialbarChartComponent,
        MultipleRadialbarChartComponent,
        CircleRadialbarChartComponent,
        GradientRadialbarChartComponent,
        StrokedRadialbarChartComponent,
        CircularRadialbarChartComponent,
        BasicRadarChartComponent,
        MultipleRadarChartComponent,
        PolygonRadarChartComponent,
        BasicPolarChartComponent,
        MonochromePolarChartComponent,
        EchartsComponent,
        SimpleEchartComponent,
        EventsEchartComponent,
        ThemeEchartComponent,
        LoadingEchartComponent,
        MergeEchartComponent,
        InitOptsEchartComponent,
        InstanceEchartComponent,
        GaugeComponent,
        ChartjsComponent,
        BarChartjsComponent,
        DoughnutChartjsComponent,
        RadarChartjsComponent,
        PieChartjsComponent,
        PolarChartjsComponent,
        BubbleChartjsComponent,
        ScatterChartjsComponent,
        MapsComponent,
        BasicFormComponent,
        WizardFormComponent,
        AdvancedFormComponent,
        EditorsComponent,
        FileUploaderComponent,
        ProfileComponent,
        PersonalInfoComponent,
        ActivityTimelineComponent,
        StatsComponent,
        OverviewComponent,
        TasksComponent,
        AccountComponent,
        SecurityComponent,
        ConnectionsComponent,
        PrivacyPolicyComponent,
        TermsConditionsComponent,
        PricingComponent,
        TimelineComponent,
        FaqComponent,
        GalleryComponent,
        NotificationsComponent,
        TestimonialsComponent,
        SearchComponent,
        BlankPageComponent,
        DragDropComponent,
        ConnectedSortingDdComponent,
        ColorPickerComponent,
        NotFoundComponent,
        InternalErrorComponent,
        ResetPasswordComponent,
        ForgotPasswordComponent,
        LoginComponent,
        RegisterComponent,
        SigninSignupComponent,
        LogoutComponent,
        ConfirmMailComponent,
        LockScreenComponent,
        BasicTableComponent,
        DataTableComponent,
        DtTeamMembersComponent,
        DtTasksComponent,
        AddRemoveArrayBasedDatasourceTableComponent,
        TableDynamicallyColumnsDisplayedComponent,
        StylingColumnsTableComponent,
        AddRemoveObservableBasedDatasourceTableComponent,
        ExpandableRowsTableComponent,
        FilteringTableComponent,
        FooterRowTableComponent,
        RetrievingDataHttpTableComponent,
        MultipleHeaderFooterTableComponent,
        SortingPaginationFilteringTableComponent,
        PaginationTableComponent,
        SelectionTableComponent,
        SortingTableComponent,
        StickyColumnsTableComponent,
        StickyFooterTableComponent,
        StickyHeaderTableComponent,
        RippleTableComponent,
        MenuDialogComponent,
        FormDialogComponent,
        BigFormDialogComponent,
        ContactsComponent,
        ReadEmailComponent,
        ComposeEmailComponent,
        EmailSidebarComponent,
        CustomizerSettingsComponent,
        VideosComponent,
        YoutubePopupComponent,
        VimeoPopupComponent,
        ChatSidebarComponent,
        CryptoComponent,
        HelpDeskComponent,
        SaasAppComponent,
        CryptoStatsComponent,
        MarketGraphComponent,
        CurrentRateComponent,
        CryptoMyProfileComponent,
        UserActivitiesComponent,
        OrderActivitiesComponent,
        MyCurrenciesComponent,
        TradingComponent,
        HdStatsComponent,
        TicketsStatusComponent,
        CustomerSatisfactionComponent,
        SupportStatusComponent,
        HdActivityComponent,
        AverageTimeCallComponent,
        AgentPerformanceComponent,
        SaCompletedTasksComponent,
        MilestonesOverviewComponent,
        SaTasksPerformanceComponent,
        SaAudienceOverviewComponent,
        SaAllProjectsComponent,
        SaMessagesComponent,
        SaStatsComponent,
        SaRevenueSummaryComponent,
        SaSalesAnalyticsComponent,
        ComingSoonComponent,
        ProcedureComponent,
        ConfirmDialogComponent,
        StatusComponent,
        ServiceComponent,
        AppointmentComponent,
        AppointmentDialogComponent,
        AcquisitionTypeComponent,
        DocumentTypeComponent,
        UserTypeComponent,
        PeriodicityComponent,
        SettingsComponent,
        CitiesComponent,
        VeterinarySettingsComponent,
        ProceduresServicesSettingsComponent,
        VeterinarianSettingsComponent,
        PetInfoComponent,
        ClientComponent,
        DocumentTypeSelectComponent,
   ],
    imports: [
        EcoFabSpeedDialComponent,
        EcoFabSpeedDialTriggerComponent,
        EcoFabSpeedDialActionsComponent,
        BrowserModule,
        AppRoutingModule,
        MatMenuModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        NgApexchartsModule,
        MatProgressBarModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        NgScrollbarModule,
        FormsModule,
        FullCalendarModule,
        MatNativeDateModule ,
        ReactiveFormsModule,
        CarouselModule,
        NgxEditorModule,
        DragDropModule,
        HttpClientModule,
        CdkAccordionModule,
        EcoFabSpeedDialComponent,
        EcoFabSpeedDialTriggerComponent,
        EcoFabSpeedDialActionsComponent,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        NgxGaugeModule,
        NgChartsModule,
        NgxMatTimepickerModule,
        QuillModule.forRoot(),
        NgxDropzoneModule,
        ColorPickerModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        DatePipe,
        { provide: API_BASE_URL, useValue: 'https://localhost:7250' },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        { provide: MatPaginatorIntl, useClass: MatPaginatorIntlSpanish }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }