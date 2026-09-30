import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/apps/calendar/calendar.component';
import { ChatComponent } from './components/apps/chat/chat.component';
import { ContactsComponent } from './components/apps/contacts/contacts.component';
import { ComposeEmailComponent } from './components/apps/email/compose-email/compose-email.component';
import { EmailComponent } from './components/apps/email/email.component';
import { ReadEmailComponent } from './components/apps/email/read-email/read-email.component';
import { FileManagerComponent } from './components/apps/file-manager/file-manager.component';
import { FmAssetsComponent } from './components/apps/file-manager/fm-assets/fm-assets.component';
import { FmDocumentsComponent } from './components/apps/file-manager/fm-documents/fm-documents.component';
import { FmMediaComponent } from './components/apps/file-manager/fm-media/fm-media.component';
import { FmPersonalComponent } from './components/apps/file-manager/fm-personal/fm-personal.component';
import { FmProjectsComponent } from './components/apps/file-manager/fm-projects/fm-projects.component';
import { FmRecentFilesComponent } from './components/apps/file-manager/fm-recent-files/fm-recent-files.component';
import { FmTemplatesComponent } from './components/apps/file-manager/fm-templates/fm-templates.component';
import { TaskDetailsComponent } from './components/apps/to-do-list/task-details/task-details.component';
import { ToDoListComponent } from './components/apps/to-do-list/to-do-list.component';
import { ConfirmMailComponent } from './components/authentication/confirm-mail/confirm-mail.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { SigninSignupComponent } from './components/authentication/signin-signup/signin-signup.component';
import { ApexchartsComponent } from './components/charts/apexcharts/apexcharts.component';
import { ChartjsComponent } from './components/charts/chartjs/chartjs.component';
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { InternalErrorComponent } from './components/common/internal-error/internal-error.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { MemberProfileComponent } from './components/contact-list/member-profile/member-profile.component';
import { MembersGridComponent } from './components/contact-list/members-grid/members-grid.component';
import { MembersGrid2Component } from './components/contact-list/members-grid2/members-grid2.component';
import { MembersListComponent } from './components/contact-list/members-list/members-list.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LessonPreviewComponent } from './components/courses/lesson-preview/lesson-preview.component';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { EcommerceComponent } from './components/dashboard/ecommerce/ecommerce.component';
import { LmsCoursesComponent } from './components/dashboard/lms-courses/lms-courses.component';
import { ProjectManagementComponent } from './components/dashboard/project-management/project-management.component';
import { AdvancedFormComponent } from './components/forms/advanced-form/advanced-form.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { EditorsComponent } from './components/forms/editors/editors.component';
import { FileUploaderComponent } from './components/forms/file-uploader/file-uploader.component';
import { WizardFormComponent } from './components/forms/wizard-form/wizard-form.component';
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AccountComponent } from './components/pages/account/account.component';
import { AnalyticsCustomersComponent } from './components/pages/analytics-customers/analytics-customers.component';
import { AnalyticsReportsComponent } from './components/pages/analytics-reports/analytics-reports.component';
import { BlankPageComponent } from './components/pages/blank-page/blank-page.component';
import { ConnectionsComponent } from './components/pages/connections/connections.component';
import { CreateProductComponent } from './components/pages/ecommerce/create-product/create-product.component';
import { ProductDetailsComponent } from './components/pages/ecommerce/product-details/product-details.component';
import { ProductSellersComponent } from './components/pages/ecommerce/product-sellers/product-sellers.component';
import { ProductsCartComponent } from './components/pages/ecommerce/products-cart/products-cart.component';
import { ProductsCheckoutComponent } from './components/pages/ecommerce/products-checkout/products-checkout.component';
import { ProductsCustomersComponent } from './components/pages/ecommerce/products-customers/products-customers.component';
import { ProductsOrderDetailsComponent } from './components/pages/ecommerce/products-order-details/products-order-details.component';
import { ProductsOrdersComponent } from './components/pages/ecommerce/products-orders/products-orders.component';
import { ProductsComponent } from './components/pages/ecommerce/products/products.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FlaticonComponent } from './components/pages/icons/flaticon/flaticon.component';
import { MaterialIconsComponent } from './components/pages/icons/material-icons/material-icons.component';
import { MaterialSymbolsComponent } from './components/pages/icons/material-symbols/material-symbols.component';
import { RemixiconComponent } from './components/pages/icons/remixicon/remixicon.component';
import { MapsComponent } from './components/pages/maps/maps.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { PClientsComponent } from './components/projects/p-clients/p-clients.component';
import { PKanbanBoardComponent } from './components/projects/p-kanban-board/p-kanban-board.component';
import { PTasksComponent } from './components/projects/p-tasks/p-tasks.component';
import { PTeamComponent } from './components/projects/p-team/p-team.component';
import { PUsersComponent } from './components/projects/p-users/p-users.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { AccordionComponent } from './components/ui-kit/accordion/accordion.component';
import { AlertsComponent } from './components/ui-kit/alerts/alerts.component';
import { AutocompleteComponent } from './components/ui-kit/autocomplete/autocomplete.component';
import { AvatarsComponent } from './components/ui-kit/avatars/avatars.component';
import { BadgesComponent } from './components/ui-kit/badges/badges.component';
import { BreadcrumbComponent } from './components/ui-kit/breadcrumb/breadcrumb.component';
import { ButtonToggleComponent } from './components/ui-kit/button-toggle/button-toggle.component';
import { ButtonsComponent } from './components/ui-kit/buttons/buttons.component';
import { CardsComponent } from './components/ui-kit/cards/cards.component';
import { CarouselsComponent } from './components/ui-kit/carousels/carousels.component';
import { CheckboxComponent } from './components/ui-kit/checkbox/checkbox.component';
import { ChipsComponent } from './components/ui-kit/chips/chips.component';
import { ColorPickerComponent } from './components/ui-kit/color-picker/color-picker.component';
import { DatepickerComponent } from './components/ui-kit/datepicker/datepicker.component';
import { DialogComponent } from './components/ui-kit/dialog/dialog.component';
import { DividerComponent } from './components/ui-kit/divider/divider.component';
import { DragDropComponent } from './components/ui-kit/drag-drop/drag-drop.component';
import { ExpansionComponent } from './components/ui-kit/expansion/expansion.component';
import { FormFieldComponent } from './components/ui-kit/form-field/form-field.component';
import { GridComponent } from './components/ui-kit/grid/grid.component';
import { ImagesComponent } from './components/ui-kit/images/images.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { ListComponent } from './components/ui-kit/list/list.component';
import { ListboxComponent } from './components/ui-kit/listbox/listbox.component';
import { MenusComponent } from './components/ui-kit/menus/menus.component';
import { PaginationComponent } from './components/ui-kit/pagination/pagination.component';
import { ProgressBarComponent } from './components/ui-kit/progress-bar/progress-bar.component';
import { RadioComponent } from './components/ui-kit/radio/radio.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import { SidenavComponent } from './components/ui-kit/sidenav/sidenav.component';
import { SlideToggleComponent } from './components/ui-kit/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/ui-kit/slider/slider.component';
import { SnackbarComponent } from './components/ui-kit/snackbar/snackbar.component';
import { SpacingComponent } from './components/ui-kit/spacing/spacing.component';
import { StepperComponent } from './components/ui-kit/stepper/stepper.component';
import { TableComponent } from './components/ui-kit/table/table.component';
import { TabsComponent } from './components/ui-kit/tabs/tabs.component';
import { ToolbarComponent } from './components/ui-kit/toolbar/toolbar.component';
import { TooltipComponent } from './components/ui-kit/tooltip/tooltip.component';
import { TreeComponent } from './components/ui-kit/tree/tree.component';
import { TypographyComponent } from './components/ui-kit/typography/typography.component';
import { VideosComponent } from './components/ui-kit/videos/videos.component';
import { CryptoComponent } from './components/dashboard/crypto/crypto.component';
import { HelpDeskComponent } from './components/dashboard/help-desk/help-desk.component';
import { SaasAppComponent } from './components/dashboard/saas-app/saas-app.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ProcedureComponent } from './components/pages/procedure/procedure.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { StatusComponent } from './components/pages/status/status.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { AcquisitionTypeComponent } from './components/pages/acquisition-type/acquisition-type.component';
import { DocumentTypeComponent } from './components/pages/document-type/document-type.component';
import { UserTypeComponent } from './components/pages/user-type/user-type.component';
import { PeriodicityComponent } from './components/pages/periodicity/periodicity.component';
import { Component } from '@fullcalendar/core/preact';
import { VeterinarySettingsComponent } from './components/pages/veterinary-settings/veterinary-settings.component';
import { ProceduresServicesSettingsComponent } from './components/pages/procedures-services-settings/procedures-services-settings.component';
import { VeterinarianSettingsComponent } from './components/pages/veterinarian-settings/veterinarian-settings.component';
import { PetInfoComponent } from './components/pages/profile/pet-info/pet-info.component';
import { ClientComponent } from './components/pages/client/client.component';


const routes: Routes = [
    //{path: 'authentication/login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'project-management', component: ProjectManagementComponent},
    {path: 'lms-courses', component: LmsCoursesComponent},
    {path: 'crypto', component: CryptoComponent},
    {path: 'help-desk', component: HelpDeskComponent},
    {path: 'saas-app', component: SaasAppComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'email', component: EmailComponent},
    {path: 'email/read', component: ReadEmailComponent},
    {path: 'email/compose', component: ComposeEmailComponent},
    {path: 'file-manager', component: FileManagerComponent},
    {path: 'file-manager/assets', component: FmAssetsComponent},
    {path: 'file-manager/projects', component: FmProjectsComponent},
    {path: 'file-manager/personal', component: FmPersonalComponent},
    {path: 'file-manager/templates', component: FmTemplatesComponent},
    {path: 'file-manager/documents', component: FmDocumentsComponent},
    {path: 'file-manager/media', component: FmMediaComponent},
    {path: 'file-manager/recent-files', component: FmRecentFilesComponent},
    {path: 'to-do-list', component: ToDoListComponent},
    {path: 'task-details', component: TaskDetailsComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'invoice', component: InvoiceComponent},
    {path: 'invoice-details', component: InvoiceDetailsComponent},
    {path: 'members-grid', component: MembersGridComponent},
    {path: 'members-grid-2', component: MembersGrid2Component},
    {path: 'members-list', component: MembersListComponent},
    {path: 'member-profile', component: MemberProfileComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/clients', component: PClientsComponent},
    {path: 'projects/team', component: PTeamComponent},
    {path: 'projects/kanban-board', component: PKanbanBoardComponent},
    {path: 'projects/tasks', component: PTasksComponent},
    {path: 'projects/users', component: PUsersComponent},
    {path: 'projects/project-create', component: ProjectCreateComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'course-details', component: CourseDetailsComponent},
    {path: 'lesson-preview', component: LessonPreviewComponent},
    {path: 'analytics/customers', component: AnalyticsCustomersComponent},
    {path: 'analytics/reports', component: AnalyticsReportsComponent},
    {path: 'ecommerce', component: EcommerceComponent},
    {path: 'ecommerce/products', component: ProductsComponent},
    {path: 'ecommerce/product-details', component: ProductDetailsComponent},
    {path: 'ecommerce/create', component: CreateProductComponent},
    {path: 'ecommerce/orders', component: ProductsOrdersComponent},
    {path: 'ecommerce/order-details', component: ProductsOrderDetailsComponent},
    {path: 'ecommerce/customers', component: ProductsCustomersComponent},
    {path: 'ecommerce/cart', component: ProductsCartComponent},
    {path: 'ecommerce/checkout', component: ProductsCheckoutComponent},
    {path: 'ecommerce/sellers', component: ProductSellersComponent},
    {path: 'ui-kit/buttons', component: ButtonsComponent},
    {path: 'ui-kit/alerts', component: AlertsComponent},
    {path: 'ui-kit/avatars', component: AvatarsComponent},
    {path: 'ui-kit/badges', component: BadgesComponent},
    {path: 'ui-kit/cards', component: CardsComponent},
    {path: 'ui-kit/carousels', component: CarouselsComponent},
    {path: 'ui-kit/menus', component: MenusComponent},
    {path: 'ui-kit/grid', component: GridComponent},
    {path: 'ui-kit/images', component: ImagesComponent},
    {path: 'ui-kit/list', component: ListComponent},
    {path: 'ui-kit/autocomplete', component: AutocompleteComponent},
    {path: 'ui-kit/checkbox', component: CheckboxComponent},
    {path: 'ui-kit/radio', component: RadioComponent},
    {path: 'ui-kit/button-toggle', component: ButtonToggleComponent},
    {path: 'ui-kit/chips', component: ChipsComponent},
    {path: 'ui-kit/datepicker', component: DatepickerComponent},
    {path: 'ui-kit/divider', component: DividerComponent},
    {path: 'ui-kit/expansion', component: ExpansionComponent},
    {path: 'ui-kit/form-field', component: FormFieldComponent},
    {path: 'ui-kit/input', component: InputComponent},
    {path: 'ui-kit/pagination', component: PaginationComponent},
    {path: 'ui-kit/progress-bar', component: ProgressBarComponent},
    {path: 'ui-kit/select', component: SelectComponent},
    {path: 'ui-kit/sidenav', component: SidenavComponent},
    {path: 'ui-kit/slide-toggle', component: SlideToggleComponent},
    {path: 'ui-kit/slider', component: SliderComponent},
    {path: 'ui-kit/snackbar', component: SnackbarComponent},
    {path: 'ui-kit/toolbar', component: ToolbarComponent},
    {path: 'ui-kit/tooltip', component: TooltipComponent},
    {path: 'ui-kit/tree', component: TreeComponent},
    {path: 'ui-kit/tabs', component: TabsComponent},
    {path: 'ui-kit/stepper', component: StepperComponent},
    {path: 'ui-kit/accordion', component: AccordionComponent},
    {path: 'ui-kit/listbox', component: ListboxComponent},
    {path: 'ui-kit/breadcrumb', component: BreadcrumbComponent},
    {path: 'ui-kit/table', component: TableComponent},
    {path: 'ui-kit/drag-drop', component: DragDropComponent},
    {path: 'ui-kit/color-picker', component: ColorPickerComponent},
    {path: 'ui-kit/dialog', component: DialogComponent},
    {path: 'ui-kit/typography', component: TypographyComponent},
    {path: 'ui-kit/spacing', component: SpacingComponent},
    {path: 'ui-kit/videos', component: VideosComponent},
    {path: 'icons/flaticon', component: FlaticonComponent},
    {path: 'icons/remixicon', component: RemixiconComponent},
    {path: 'icons/material-symbols', component: MaterialSymbolsComponent},
    {path: 'icons/material', component: MaterialIconsComponent},
    {path: 'charts/apexcharts', component: ApexchartsComponent},
    {path: 'charts/echarts', component: EchartsComponent},
    {path: 'charts/chartjs', component: ChartjsComponent},
    {path: 'charts/gauge', component: GaugeComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'tables/basic', component: BasicTableComponent},
    {path: 'tables/data', component: DataTableComponent},
    {path: 'forms/basic', component: BasicFormComponent},
    {path: 'forms/wizard', component: WizardFormComponent},
    {path: 'forms/advanced', component: AdvancedFormComponent},
    {path: 'forms/editors', component: EditorsComponent},
    {path: 'forms/file-uploader', component: FileUploaderComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'account', component: AccountComponent},
    {path: 'security', component: SecurityComponent},
    {path: 'connections', component: ConnectionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'search', component: SearchComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'blank-page', component: BlankPageComponent},
    {path: 'error-500', component: InternalErrorComponent},
    {path: 'authentication/forgot-password', component: ForgotPasswordComponent},
    {path: 'authentication/reset-password', component: ResetPasswordComponent},
    {path: 'authentication/register', component: RegisterComponent},
    {path: 'authentication/signin-signup', component: SigninSignupComponent},
    {path: 'authentication/logout', component: LogoutComponent},
    {path: 'authentication/confirm-mail', component: ConfirmMailComponent},
    {path: 'authentication/lock-screen', component: LockScreenComponent},
    {path: 'procedure', component: ProcedureComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'status', component: StatusComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'acquisition-type', component: AcquisitionTypeComponent},
    {path: 'document-type', component: DocumentTypeComponent},
    {path: 'user-type', component: UserTypeComponent},
    {path: 'periodicity', component: PeriodicityComponent},
    {path: 'component-settings', redirectTo: 'veterinary-settings', pathMatch: 'full'},
    {path: 'veterinary-settings', component: VeterinarySettingsComponent},
    {path: 'procedures-services-settings', component: ProceduresServicesSettingsComponent},
    {path: 'veterinarian-settings', component: VeterinarianSettingsComponent},
    // Here add new pages component
    {path: 'pet-info', component: PetInfoComponent},
    {path: 'client', component: ClientComponent},
    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }