import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { SaveAppointmentCommand, GetAcquisitionTypeDto, GetDocumentTypeDto, GetModalityDto, GetPeriodicityDto, GetSpeciesDto, GetUserDto, GetVeterinaryProcedureDto, GetVeterinaryServiceDto, VetConnectService, GetVeterinaryProcedure_ProcedureDto, GetVeterinaryService_ServiceDto, SaveAppointmentPetDto, SaveAppointmentPetOwnerDto, SaveAppointmentProcedureDto, SaveAppointmentServiceDto, UpdateStatusAppointmentCommand, GetMucousMembraneColorDto, ProfileDto } from 'src/app/services/vetconnect.service';
import { Calendar, CalendarOptions, EventApi, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { USER_TYPE_CLIENT, PROFILE_USER, PROFILE_CLIENT, APPOINTMENT_STATUS_CANCEL } from 'src/app/shared/constants';
import { ToastrService } from 'ngx-toastr';
import { ThemePalette } from '@angular/material/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { MatMenuTrigger} from '@angular/material/menu';
import { FileService } from 'src/app/services/file.service';
import { number } from 'echarts';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements AfterViewInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  //@ViewChild('calendarRef') calendarRef: ElementRef;
  /**
   *
   */
  constructor(public vetConnectService: VetConnectService,
    public router: Router,
    private dialogService: DialogService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,
    private fileService: FileService) {
    const _user = localStorage.getItem('user');
      this.user = _user != "null" ? JSON.parse(_user!) : new GetUserDto({
        profile: new ProfileDto({
          name: ""
        })
      });
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 365);
    this.maxPetBirthDate = new Date();
  }

  sliderValue: number = 1;
  selectedFile: File | null = null;
  appointmentCode: string = '';
  minDate: Date;
  maxDate: Date;
  maxPetBirthDate: Date;
  userSelected: string = '';
  modalitySelected: string = '';
  users: GetUserDto[] = new Array();
  color: ThemePalette = 'primary';
  spinnerVisible: boolean = true;
  modalities: GetModalityDto[] = new Array();
  mucousMembraneColors: GetMucousMembraneColorDto[] = new Array();
  events: any[] = [];
  user: GetUserDto;
  form!: FormGroup;
  pageNumber: number = 0;
  pageSize: number = 10;
  saveAppointmentCommand: SaveAppointmentCommand;
  selectedProcedure: string;
  isEditing: boolean = false;
  veterinaryProcedures: GetVeterinaryProcedureDto[] = new Array();
  veterinaryServices: GetVeterinaryServiceDto[] = new Array();
  documentTypes: GetDocumentTypeDto[] = new Array();
  periodicities: GetPeriodicityDto[] = new Array();
  acquisitionTypes: GetAcquisitionTypeDto[] = new Array();
  species: GetSpeciesDto[] = new Array();
  colors: string[] = ['#757fef','#e076da','#ff7baf','#ff9c81','#ffca65'];
  sex: { code: string, name: string }[] = [
    { code: "H", name: "Hembra" },
    { code: "M", name: "Macho" }
  ];
  hours: { code:string, name: string }[] = [
    { code: "08:00:00", name: "08:00 AM" },
    { code: "08:15:00", name: "08:15 AM" },
    { code: "08:30:00", name: "08:30 AM" },
    { code: "08:45:00", name: "08:45 AM" },
    { code: "09:00:00", name: "09:00 AM" },
    { code: "09:15:00", name: "09:15 AM" },
    { code: "09:30:00", name: "09:30 AM" },
    { code: "09:45:00", name: "09:45 AM" },
    { code: "10:00:00", name: "10:00 AM" },
    { code: "10:15:00", name: "10:15 AM" },
    { code: "10:30:00", name: "10:30 AM" },
    { code: "10:45:00", name: "10:45 AM" },
    { code: "11:00:00", name: "11:00 AM" },
    { code: "11:15:00", name: "11:15 AM" },
    { code: "11:30:00", name: "11:30 AM" },
    { code: "11:45:00", name: "11:45 AM" },
    { code: "12:00:00", name: "12:00 PM" },
    { code: "12:15:00", name: "12:15 PM" },
    { code: "12:30:00", name: "12:30 PM" },
    { code: "12:45:00", name: "12:45 PM" },
    { code: "01:00:00", name: "01:00 PM" },
    { code: "01:15:00", name: "01:15 PM" },
    { code: "01:30:00", name: "01:30 PM" },
    { code: "01:45:00", name: "01:45 PM" },
    { code: "02:00:00", name: "02:00 PM" },
    { code: "02:15:00", name: "02:15 PM" },
    { code: "02:30:00", name: "02:30 PM" },
    { code: "02:45:00", name: "02:45 PM" },
    { code: "03:00:00", name: "03:00 PM" },
    { code: "03:15:00", name: "03:15 PM" },
    { code: "03:30:00", name: "03:30 PM" },
    { code: "03:45:00", name: "03:45 PM" },
    { code: "04:00:00", name: "04:00 PM" },
    { code: "04:15:00", name: "04:15 PM" },
    { code: "04:30:00", name: "04:30 PM" },
    { code: "04:45:00", name: "04:45 PM" },
    { code: "05:00:00", name: "05:00 PM" },
    { code: "05:15:00", name: "05:15 PM" },
    { code: "05:30:00", name: "05:30 PM" },
    { code: "05:45:00", name: "05:45 PM" }
  ];
  booleanList: { code: string, name: string }[] = [
    { code: "1", name: "Entero" }, //SI
    { code: "0", name: "Esterilizado" } //NO
  ];
  selectedQuantity: number = 1;
  displayedColumns: string[] = ['name', 'quantity', 'action'];
  subTotal: number = 0;
  tax: number = 0;
  total: number = 0;
  calendar: Calendar;

  calendarOptions: CalendarOptions = {
    firstDay: new Date().getDay(),
    eventDidMount: this.eventDidMount.bind(this),
    eventClick: this.handleEventClick.bind(this),
    editable: true,
    initialView: 'timeGridWeek',
    weekends: true,
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    },
    buttonText: {
      day: 'Día',
      week: 'Semana',
      month: 'Mes',
      today: 'Hoy'
    },
    dropAccept: '.cool-event',
    eventReceive  : function(info) {
      alert('eventReceive ');
    },
    droppable: true,
    allDaySlot: false,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    },
    eventDragStop: function(arg){
      alert('Ok');
    },
    //drop: this.handleDrop.bind(this),
    slotMinTime: "08:00:00",
    slotMaxTime: "18:00:00",
    eventOverlap: false,
    locale: 'es',
    slotDuration: '00:05',
    defaultTimedEventDuration: '00:15',
    businessHours: [
      {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '08:00', // 8am
        endTime: '18:00' // 6pm
      },
      {
        daysOfWeek: [2],
        startTime: '08:00', // 10am
        endTime: '12:00' // 4pm
      }
    ],
    validRange: function (nowDate) {
      var minDate = new Date();
      var maxDate = new Date();
      return {
        start: minDate.setMonth(minDate.getMonth() - 3),
        end: maxDate.setMonth(maxDate.getMonth() + 8)
      };
    },
    eventConstraint: "businessHours",
    headerToolbar: {
      left: 'timeGridDay,timeGridWeek,dayGridMonth',
      center: 'today',
      right: 'prev,next'
    },
    plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin]
  };

  /**
   * 
   */
  ngOnInit() {

    this.getUsers(this.pageNumber);
    this.getMucousMembraneColor(this.pageNumber);
    this.getModalities(this.pageNumber);
    this.getDocumentTypes(this.pageNumber);
    this.getVeterinaryProcedures(this.pageNumber);
    this.getPeriodicities(this.pageNumber);
    this.getVeterinaryServices(this.pageNumber);
    this.getAcquisitionTypes(this.pageNumber);
    this.getSpecies(this.pageNumber);
    this.getAppointments(this.userSelected, this.modalitySelected);
    this.saveAppointmentCommand = new SaveAppointmentCommand();
    this.saveAppointmentCommand.procedures = new Array();
    this.saveAppointmentCommand.services = new Array();
    this.buildForm();

  }

  ngAfterViewInit(): void {

    var slides = document.getElementsByClassName("cool-event");
    for (var i = 0; i < slides.length; i++) {
      new Draggable((<HTMLElement>slides.item(i)));
    }

  }

  /**
   * 
   * @param pageNumber 
   */
  getUsers(pageNumber: number) {
    this.vetConnectService.getUserByProfile(PROFILE_USER,this.user.veterinary?.code,pageNumber + 1, this.pageSize).subscribe({
      next: response => {
        this.users = response.items!;
        if (response.hasNextPage) {
          this.getUsers(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   * @param pageNumber 
   */
  getModalities(pageNumber: number) {
    this.vetConnectService.modalityGET(pageNumber + 1, this.pageSize).subscribe({
      next: response => {
        this.modalities = response.items!;
        if (response.hasNextPage) {
          this.getModalities(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    })
  }

  /**
   * 
   * @param pageNumber 
   */
  getMucousMembraneColor(pageNumber: number){
    this.vetConnectService.mucousMembraneColorGET(pageNumber + 1, this.pageSize).subscribe({
      next: response => {
        this.mucousMembraneColors = response.items!;
        if (response.hasNextPage) {
          this.getMucousMembraneColor(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getAppointments(userCode: string, modalityCode: string) {
    this.vetConnectService.getAppointment(userCode, modalityCode, 1, 100).subscribe({
      next: response => {
        this.events = [];
        let _events = this.events;
        response.items!.forEach( (item) => {
          var textColor = this.colors[this.randomIntFromInterval(1,this.colors.length)];
          _events.push({
            id: item.code,
            title: '\nPaciente: ' + item.pet?.name + '\nEspecie: ' + item.pet?.species?.name,
            start: item.startDate,
            end: item.endDate,
            color: textColor,
            className: ['eventWithComment']
          });
        });
        this.calendarOptions = {
          firstDay: new Date().getDay(),
          events: this.events,
          eventClick: this.handleEventClick.bind(this),
          editable: false,
          initialView: 'timeGridWeek',
          weekends: true,
          slotLabelFormat: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          },
          buttonText: {
            day: 'Día',
            week: 'Semana',
            month: 'Mes',
            today: 'Hoy'
          },
          allDaySlot: false,
          eventTimeFormat: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          },
          slotMinTime: "08:00:00",
          slotMaxTime: "18:00:00",
          eventOverlap: false,
          locale: 'es',
          droppable: true,
          slotDuration: '00:05',
          defaultTimedEventDuration: '00:15',
          businessHours: [
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: '08:00', // 8am
              endTime: '18:00' // 6pm
            },
            {
              daysOfWeek: [6],
              startTime: '08:00', // 10am
              endTime: '12:00' // 4pm
            }
          ],
          validRange: function (nowDate) {
            var minDate = new Date();
            var maxDate = new Date();
            return {
              start: minDate.setMonth(minDate.getMonth() - 8),
              end: maxDate.setMonth(maxDate.getMonth() + 8)
            };
          },
          eventConstraint: "businessHours",
          headerToolbar: {
            left: 'timeGridDay,timeGridWeek,dayGridMonth',
            center: 'today',
            right: 'prev,next'
          },
          plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin]
        };
        // this.calendar = new Calendar(this.calendarRef.nativeElement,
        //   this.calendarOptions);
    
        // this.calendar.render();
        this.spinnerVisible = false;
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
 * 
 */
  getDocumentTypes(pageNumber: number) {
    this.vetConnectService.documentTypeGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.documentTypes = this.documentTypes.concat(data.items!);
        if (data.hasNextPage) {
          this.getDocumentTypes(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getVeterinaryProcedures(pageNumber: number) {
    this.vetConnectService.veterinaryProcedureGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.veterinaryProcedures = this.veterinaryProcedures.concat(data.items!);
        this.veterinaryProcedures = this.veterinaryProcedures.map(item => {
          item.code = "";
          return item;
        });

        if (data.hasNextPage) {
          this.getVeterinaryProcedures(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getVeterinaryServices(pageNumber: number) {
    this.vetConnectService.veterinaryServiceGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.veterinaryServices = this.veterinaryServices.concat(data.items!);
        this.veterinaryServices = this.veterinaryServices.map(item => {
          item.code = "";
          return item;
        });

        if (data.hasNextPage) {
          this.getVeterinaryServices(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getPeriodicities(pageNumber: number) {
    this.vetConnectService.periodicityGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.periodicities = this.periodicities.concat(data.items!);
        if (data.hasNextPage) {
          this.getPeriodicities(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   */
  getAcquisitionTypes(pageNumber: number) {
    this.vetConnectService.acquisitionTypeGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.acquisitionTypes = this.acquisitionTypes.concat(data.items!);
        if (data.hasNextPage) {
          this.getAcquisitionTypes(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
 * 
 */
  getSpecies(pageNumber: number) {
    this.vetConnectService.speciesGET(pageNumber + 1, this.pageSize).subscribe({
      next: (data) => {
        this.species = this.species.concat(data.items!);
        if (data.hasNextPage) {
          this.getSpecies(pageNumber + 1)
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  /**
   * 
   * @param message 
   * @param action 
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  /**
     * 
     * @param $event 
     * @returns 
     */
  onSave($event: any) {

    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.toastr.error('Por favor valide que la información esté completa', 'Consulta');
      return;
    }

    this.Save();
  }

  private Save() {

    if (this.saveAppointmentCommand.procedures?.length! == 0 && this.saveAppointmentCommand.services?.length! == 0) {
      this.toastr.error('Debe seleccionar al menos un procedimiento o servicio', 'Consulta');
    }
    else {
      let saveAppointmentCommand = new SaveAppointmentCommand({
        code: this.saveAppointmentCommand.code,
        startDate: new Date(formatDate(this.form.controls["appointmentDate"].value, 'MM/dd/yyyy', 'en-US') + ' ' + this.form.controls["appointmentTime"].value),
        userCode: this.form.controls["veterinarian"].value,
        modalityCode: this.form.controls["modality"].value,
        reason: this.form.controls["reason"].value,
        heartRate: this.form.controls["heartRate"].value,
        respiratoryRate: this.form.controls["respiratoryRate"].value,
        weight: this.form.controls["weight"].value,
        bodyCondition: this.form.controls["bodyCondition"].value,
        mucousMembraneColorCode: this.form.controls["mucousMembraneColor"].value,
        vomiting: this.form.controls["vomiting"].value === "1" ? true : false,
        diarrhea: this.form.controls["diarrhea"].value === "1" ? true : false,
        appetite: this.form.controls["appetite"].value === "1" ? true : false,
        diet: this.form.controls["diet"].value,
        temperture: this.form.controls["temperture"].value,
        mood: this.form.controls["sliderMood"].value,
        skinFur: this.form.controls["skinFur"].value,
        anamnesis: this.form.controls["anamnesis"].value,
        importantDiseases: this.form.controls["importantDiseases"].value,
        diagnosis: this.form.controls["diagnosis"].value,
        diferencialDiagnosis: this.form.controls["diferencialDiagnosis"].value,
        complementaryTest: this.form.controls["complementaryTest"].value,
        finalDiagnosis: this.form.controls["finalDiagnosis"].value,
        treatment: this.form.controls["treatment"].value,
        additionalInfo: this.form.controls["additionalInfo"].value,
        services: this.saveAppointmentCommand.services,
        procedures: this.saveAppointmentCommand.procedures,
        pet: new SaveAppointmentPetDto({
          code: this.saveAppointmentCommand.pet?.code,
          name: this.form.controls["petName"].value,
          birthdate: new Date(this.form.controls["birthdate"].value),
          speciesCode: this.form.controls["species"].value,
          breed: this.form.controls["breed"].value,
          acquisitionTypeCode: this.form.controls["acquisitionType"].value,
          reproductiveStatusCode : this.form.controls["reproductiveStatus"].value,
          sex: this.form.controls["sex"].value,
          microchip: this.form.controls["microchip"].value,
          primaryOwner: new SaveAppointmentPetOwnerDto({
            code: this.saveAppointmentCommand.pet?.primaryOwner?.code,
            firstName: this.form.controls["primaryFirstName"].value,
            lastName: this.form.controls["primaryLastName"].value,
            documentTypeCode: this.form.controls["primaryDocumentType"].value,
            identificationNumber: this.form.controls["primaryIdentificationNumber"].value,
            email: this.form.controls["primaryEmail"].value,
            phoneNumber: this.form.controls["primaryPhoneNumber"].value,
            address: this.form.controls["primaryAddress"].value,
            profileCode: PROFILE_CLIENT,
            userTypeCode: USER_TYPE_CLIENT,
            veterinaryCode: this.user.veterinary?.code
          }),
          secondaryOwner: new SaveAppointmentPetOwnerDto({
            code: this.saveAppointmentCommand.pet?.secondaryOwner?.code,
            firstName: this.form.controls["secondaryFirstName"].value,
            lastName: this.form.controls["secondaryLastName"].value,
            documentTypeCode: this.form.controls["secondaryDocumentType"].value,
            identificationNumber: this.form.controls["secondaryIdentificationNumber"].value,
            email: this.form.controls["secondaryEmail"].value,
            phoneNumber: this.form.controls["secondaryPhoneNumber"].value,
            address: this.form.controls["secondaryAddress"].value,
            profileCode: PROFILE_CLIENT,
            userTypeCode: USER_TYPE_CLIENT,
            veterinaryCode: this.user.veterinary?.code
          })
        })
      });

      this.vetConnectService.saveAppointment(saveAppointmentCommand).subscribe({
        next: () => {
          this.toastr.success('Se ha creado la consulta correctamente', 'Consulta');
          this.isEditing = false;
          this.getAppointments(this.userSelected, this.modalitySelected);
        },
        error: error => {
          this.handleError(error);
        }
      });

    }
  }

  /**
   * 
   * @param error 
   */
  private handleError(error: any) {
    if (error instanceof Object && 'status' in error) {
      if (error.error instanceof ErrorEvent) {
        console.error("Error Event");
      } else {
        switch (error.status) {
          case 401:      //login
            this.router.navigateByUrl("/login");
            break;
          case 403:     //forbidden
            this.router.navigateByUrl("/unauthorized");
            break;
          case 422:
            this.toastr.error(error.response, 'Consulta');
            break;
          default:
            this.openSnackBar(`${error.status} ${error.statusText}`, 'Cerrar');
            break;
        }
      }
    } else {
      this.openSnackBar(`Se ha presentado un error`, 'Cerrar');
    }
  }

  /**
  * 
  */
  private buildForm() {
    this.form = new FormGroup({
      appointmentDate: new FormControl('', [Validators.required]),
      appointmentTime: new FormControl('', [Validators.required]),
      veterinarian: new FormControl('', [Validators.required]),
      modality: new FormControl('', [Validators.required]),
      additionalInfo: new FormControl('', []),
      primaryDocumentType: new FormControl('', [Validators.required]),
      primaryIdentificationNumber: new FormControl('', [Validators.required]),
      primaryFirstName: new FormControl('', [Validators.required]),
      primaryLastName: new FormControl('', [Validators.required]),
      primaryEmail: new FormControl('', [Validators.required, Validators.email]),
      primaryPhoneNumber: new FormControl('', [Validators.required]),
      primaryAddress: new FormControl('', [Validators.required]),
      secondaryDocumentType: new FormControl('', []),
      secondaryIdentificationNumber: new FormControl('', []),
      secondaryFirstName: new FormControl('', []),
      secondaryLastName: new FormControl('', []),
      secondaryEmail: new FormControl('', [Validators.email]),
      secondaryPhoneNumber: new FormControl('', []),
      secondaryAddress: new FormControl('', []),
      petName: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      species: new FormControl('',[Validators.required]),
      breed: new FormControl('', [Validators.required]),
      weight: new FormControl('', []),
      acquisitionType: new FormControl('', [Validators.required]),
      reproductiveStatus: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      microchip: new FormControl('', []),
      heartRate: new FormControl('', []),
      heartBeat: new FormControl('', []),
      reason: new FormControl('', []),
      diagnosis: new FormControl('', []),
      anamnesis:  new FormControl('', []),
      respiratoryRate: new FormControl('', []),
      bodyCondition: new FormControl('', []),
      dehydrationPercentage: new FormControl('', []),
      mucousMembraneColor: new FormControl('', []),
      vomiting: new FormControl('', []),
      diarrhea: new FormControl('', []),
      appetite: new FormControl('', []),
      diet: new FormControl('', []),
      temperture: new FormControl('',[]),
      skinFur: new FormControl('', []),
      complementaryTest: new FormControl('', []),
      importantDiseases: new FormControl('', []),
      finalDiagnosis: new FormControl('', []),
      diferencialDiagnosis: new FormControl('',[]),
      treatment: new FormControl('', []),
      sliderMood: new FormControl(number,[]),
    });
  }

  eventDidMount(info: any) {
    info.el.addEventListener("contextmenu",  (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      return false;
    }, false);
  }

  handleEventClick(eventInfo: any) {

    // Define la posición deseada en píxeles
    // const posX = eventInfo.jsEvent.pageX; // Posición horizontal en píxeles
    // const posY = eventInfo.jsEvent.pageY; // Posición vertical en píxeles
    // var menu = document.getElementById('matMenu');
    // menu!.style.display = '';
    // menu!.style.position = 'absolute';
    // menu!.style.left = posX + 5 + 'px';
    // menu!.style.top = posY + 5 + 'px';

    //this.trigger.openMenu();

    this.appointmentCode = eventInfo.event.id;
    //var calendarEl = document.getElementById('calendar');
    var contextMenuEl = document.getElementById('contextMenu');
    // Obtén la posición del evento en la página
    var rect = eventInfo.el.getBoundingClientRect();

    // Muestra el menú contextual en la posición del evento
    contextMenuEl!.style.display = 'block';
    contextMenuEl!.style.left = eventInfo.jsEvent.pageX - 660 + 'px'; //rect.left + 'px';
    contextMenuEl!.style.top = eventInfo.jsEvent.pageY - 160 + 'px'; //rect.bottom + 'px';
    eventInfo.jsEvent.preventDefault();
  }

  onClose(){
    var contextMenuEl = document.getElementById('contextMenu');
    contextMenuEl!.style.display = 'none';
  }

  onEdit(){

    this.isEditing = true;
    this.vetConnectService.getAppointmentByCode(this.appointmentCode,1,1).subscribe({
      next: (data) => {
        if (data.items?.length!>0){

          var appointment = data.items![0];
          this.saveAppointmentCommand.code = appointment.code;
          this.saveAppointmentCommand.pet = new SaveAppointmentPetDto({
            code : appointment.pet?.code,
            primaryOwner : new SaveAppointmentPetOwnerDto ({
              code : appointment.pet?.primaryUser?.code
            }),
            secondaryOwner : new SaveAppointmentPetOwnerDto ({
              code : appointment.pet?.secondaryUser?.code
            })
          });
          this.saveAppointmentCommand.procedures = new Array();
          this.saveAppointmentCommand.services = new Array();

          // Appointment
          this.form.controls["appointmentDate"].setValue(appointment.startDate);
          this.form.controls["appointmentTime"].setValue(appointment.startDate?.getHours().toString().padStart(2,"0") + ":" + appointment.startDate?.getMinutes().toString().padStart(2,"0") + ":00");
          this.form.controls["veterinarian"].setValue(appointment.user?.code);
          this.form.controls["modality"].setValue(appointment.modality?.code);
          this.form.controls["additionalInfo"].setValue(appointment.additionalInfo);
          // Primary Client
          this.form.controls["primaryFirstName"].setValue(appointment.pet?.primaryUser?.firstName);
          this.form.controls["primaryLastName"].setValue(appointment.pet?.primaryUser?.lastName);
          this.form.controls["primaryDocumentType"].setValue(appointment.pet?.primaryUser?.documentType?.code);
          this.form.controls["primaryIdentificationNumber"].setValue(appointment.pet?.primaryUser?.identificationNumber);
          this.form.controls["primaryEmail"].setValue(appointment.pet?.primaryUser?.email);
          this.form.controls["primaryPhoneNumber"].setValue(appointment.pet?.primaryUser?.phoneNumber);
          this.form.controls["primaryAddress"].setValue(appointment.pet?.primaryUser?.address);
          // Secondary Client
          this.form.controls["secondaryFirstName"].setValue(appointment.pet?.secondaryUser?.firstName);
          this.form.controls["secondaryLastName"].setValue(appointment.pet?.secondaryUser?.lastName);
          this.form.controls["secondaryDocumentType"].setValue(appointment.pet?.secondaryUser?.documentType?.code);
          this.form.controls["secondaryIdentificationNumber"].setValue(appointment.pet?.secondaryUser?.identificationNumber);
          this.form.controls["secondaryEmail"].setValue(appointment.pet?.secondaryUser?.email);
          this.form.controls["secondaryPhoneNumber"].setValue(appointment.pet?.secondaryUser?.phoneNumber);
          this.form.controls["secondaryAddress"].setValue(appointment.pet?.secondaryUser?.address);
          // Patient
          this.form.controls["petName"].setValue(appointment.pet?.name);
          this.form.controls["birthdate"].setValue(appointment.pet?.birthdate);
          this.form.controls["species"].setValue(appointment.pet?.species?.code);
          this.form.controls["breed"].setValue(appointment.pet?.breed);
          this.form.controls["acquisitionType"].setValue(appointment.pet?.acquisitionType?.code);
          this.form.controls["reproductiveStatus"].setValue(appointment.pet?.reproductiveStatus?"1":"0");
          this.form.controls["sex"].setValue(appointment.pet?.sex);
          this.form.controls["microchip"].setValue(appointment.pet?.microchip);

          this.form.controls["reason"].setValue(appointment.reason);
          this.form.controls["heartRate"].setValue(appointment.heartRate);
          this.form.controls["heartBeat"].setValue(appointment.heartBeat);
          this.form.controls["respiratoryRate"].setValue(appointment.respiratoryRate);
          this.form.controls["weight"].setValue(appointment.weight);
          this.form.controls["bodyCondition"].setValue(appointment.bodyCondition);
          this.form.controls["mucousMembraneColor"].setValue(appointment.mucousMembraneColor?.code);
          this.form.controls["vomiting"].setValue(appointment.vomiting? "1": "0");
          this.form.controls["diarrhea"].setValue(appointment.diarrhea? "1": "0");
          this.form.controls["appetite"].setValue(appointment.appetite? "1": "0");
          this.form.controls["diet"].setValue(appointment.diet);
          this.form.controls["temperture"].setValue(appointment.temperture),
          this.form.controls["sliderMood"].setValue(appointment.mood);
          this.form.controls["skinFur"].setValue(appointment.skinFur);
          this.form.controls["anamnesis"].setValue(appointment.anamnesis);
          this.form.controls["importantDiseases"].setValue(appointment.importantDiseases);
          this.form.controls["diagnosis"].setValue(appointment.diagnosis);
          this.form.controls["diferencialDiagnosis"].setValue(appointment.diferencialDiagnosis);
          this.form.controls["complementaryTest"].setValue(appointment.complementaryTest);
          this.form.controls["finalDiagnosis"].setValue(appointment.finalDiagnosis);
          this.form.controls["treatment"].setValue(appointment.treatment);
          this.form.controls["additionalInfo"].setValue(appointment.additionalInfo);

          appointment.appointmentProcedures!.forEach(item => {
            this.onAddProcedure(new GetVeterinaryProcedureDto({
              code: item.code,
              quantity: item.quantity,
              price : item.price,
              procedure: new GetVeterinaryProcedure_ProcedureDto({
                code: item.procedure?.code,
                name: item.procedure?.name
              })
            }));
          });

          appointment.appointmentServices!.forEach(item => {
            this.onAddService(new GetVeterinaryServiceDto({
              code: item.code,
              quantity: item.quantity,
              price : item.price,
              service: new GetVeterinaryService_ServiceDto({
                code: item.service?.code,
                name: item.service?.name
              })
            }));
          });

        }
      },
      error: error => {
        this.handleError(error);
      }
    });

  }

  handleEventDrop(eventInfo: any) {
    this.isEditing = true;
    // this.dialogService.openConfirmDialog('texto').afterClosed().subscribe(
    //   response=>{
    //     if(response){

    //     }
    //   }
    // );
    console.log('Evento clickeado:', eventInfo.event.title);
    console.log('Evento clickeado:', eventInfo.event.id);
    // Aquí puedes realizar cualquier lógica que desees cuando se hace clic en un evento
  }

  /**
   * 
   * @param element 
   */
  onAddProcedure(element: GetVeterinaryProcedureDto) {

    if (element.code === "") {

      var exits : boolean = false;
      this.saveAppointmentCommand.procedures = this.saveAppointmentCommand.procedures?.map(item => {
        if (item.procedureCode === element.procedure?.code) {
          item.quantity = item.quantity! + 1;
          exits = true;
          return item;
        }
        return item;
      });

      if (!exits){
        this.saveAppointmentCommand.procedures?.push(new SaveAppointmentProcedureDto({
          procedureCode: element.procedure?.code,
          procedureName: element.procedure?.name,
          price: element.price,
          quantity: 1
        }));
      }

    } else {

      var exits : boolean = false;
      this.saveAppointmentCommand.procedures = this.saveAppointmentCommand.procedures?.map(item => {
        if (item.procedureCode === element.procedure?.code) {
          item.quantity = item.quantity! + 1;
          exits = true;
          return item;
        }
        return item;
      });

      if (!exits){
        this.saveAppointmentCommand.procedures?.push(new SaveAppointmentProcedureDto({
          code: element.code,
          procedureCode: element.procedure?.code,
          procedureName: element.procedure?.name,
          price: element.price,
          quantity: element.quantity
        }));
      }

    }

    this.calculateTotal();
  }

  /**
   * 
   * @param element 
   */
  onDeleteProcedure(element: GetVeterinaryProcedureDto) {
    this.saveAppointmentCommand.procedures = this.saveAppointmentCommand.procedures?.map(item => {
      if (item.procedureCode === element.procedure?.code) {
        item.quantity = item.quantity! - 1;
        return item;
      }
      return item;
    });

    if (this.saveAppointmentCommand.procedures?.filter(item => item.procedureCode === element.procedure?.code && item.quantity == 0).length == 1) {
      this.saveAppointmentCommand.procedures = this.saveAppointmentCommand.procedures?.filter(item => item.procedureCode !== element.procedure?.code);
    }
    this.calculateTotal();
  }

  /**
   * 
   * @param element 
   */
  onAddService(element: GetVeterinaryServiceDto) {

    if (element.code === "") {

      var exits : boolean = false;
      this.saveAppointmentCommand.services = this.saveAppointmentCommand.services?.map(item => {
        if (item.serviceCode === element.service?.code) {
          item.quantity = item.quantity! + 1;
          exits = true;
          return item;
        }
        return item;
      });

      if (!exits){
        this.saveAppointmentCommand.services?.push(new SaveAppointmentServiceDto({
          serviceCode: element.service?.code,
          serviceName: element.service?.name,
          price: element.price,
          quantity: 1
        }));
      }

    } else {

      var exits : boolean = false;
      this.saveAppointmentCommand.services = this.saveAppointmentCommand.services?.map(item => {
        if (item.serviceCode === element.service?.code) {
          item.quantity = item.quantity! + 1;
          exits = true;
          return item;
        }
        return item;
      });

      if (!exits){
        this.saveAppointmentCommand.services?.push(new SaveAppointmentServiceDto({
          code: element.code,
          serviceCode: element.service?.code,
          serviceName: element.service?.name,
          price: element.price,
          quantity: 1
        }));
      }

    }
    this.calculateTotal();
  }

  /**
   * 
   * @param element 
   */
  onDeleteService(element: GetVeterinaryServiceDto) {
    this.saveAppointmentCommand.services = this.saveAppointmentCommand.services?.map(item => {
      if (item.serviceCode === element.service?.code) {
        item.quantity = item.quantity! - 1;
        return item;
      }
      return item;
    });

    if (this.saveAppointmentCommand.services?.filter(item => item.serviceCode === element.service?.code && item.quantity == 0).length == 1) {
      this.saveAppointmentCommand.services = this.saveAppointmentCommand.services?.filter(item => item.serviceCode !== element.service?.code);
    }
    this.calculateTotal();
  }

  /**
   * 
   */
  calculateTotal() {
    this.subTotal = 0;
    this.tax = 0;
    this.saveAppointmentCommand.procedures?.forEach(item => {
      this.subTotal = this.subTotal + item.price!;
      this.tax = Math.ceil(this.subTotal * 0.19);
    });
    this.saveAppointmentCommand.services?.forEach(item => {
      this.subTotal = this.subTotal + item.price!;
      this.tax = Math.ceil(this.subTotal * 0.19);
    });
    this.total = Math.ceil(this.subTotal + this.tax);
  }

  onCancel() {
    this.form.reset();
    this.getAppointments(this.userSelected, this.modalitySelected);
    this.isEditing = false;
  }

  onUpdateStatus(){
    this.vetConnectService.updateStatusAppointment(new UpdateStatusAppointmentCommand ({
      code: this.appointmentCode,
      statusCode: APPOINTMENT_STATUS_CANCEL,
      statusInfo: ""
    })).subscribe({
      next: (data) => {
        this.getAppointments(this.userSelected, this.modalitySelected);
        this.onClose();
      },
      error: error =>{

      }
    });
  }

  onChangeSelectedUser(user: GetUserDto) {
    if (this.userSelected === user.code){
      this.userSelected = "";
    }else{
      this.userSelected = user.code!;
    }
    this.getAppointments(this.userSelected, this.modalitySelected);
  }

  onChangeModality(modality: GetModalityDto) {
    if (this.modalitySelected === modality.code){
      this.modalitySelected = "";
    }else{
      this.modalitySelected = modality.code!;
    }
    this.getAppointments(this.userSelected, this.modalitySelected);
  }

  selectedOptions: string[] = [];
  onSelectionChange(event: any) {
    // El evento contiene información sobre las opciones seleccionadas
    this.selectedOptions = event.source.selected.map((option: any) => option.value);
    console.log('Opciones seleccionadas:', this.selectedOptions);
  }

  handleDrop1(event: CdkDragDrop<string[]>) {
    const draggedElement = event.item.element.nativeElement.textContent;
    let calendarApi = this.calendarComponent.getApi();
    const dateAtPoint = calendarApi.getDate();
    const newEvent: EventInput = {
          title: draggedElement!,
          start: dateAtPoint!,
          allDay: false
        };
    //const abc = JSON.stringify(event);
    // Obtener la instancia de FullCalendar
    //const calendarApi = this.calendarComponent.getApi();

    // Obtener la fecha correspondiente a las coordenadas x, y


    // const draggedElement = event.item.element.nativeElement.textContent;
    // const dateApp = this.calendar.getDate();
    // const calendarApi = this.calendarComponent.getApi();
    // const dateAtPoint = calendarApi.getDate();
    // const newEvent: EventInput = {
    //     title: draggedElement!,
    //     start: dateAtPoint!,
    //     allDay: false
    //   };
    // const x = event.source.getFreeDragPosition().x;
    // const y = event.source.getFreeDragPosition().y;
    // const calendarApi = this.calendarComponent.getApi();
    // const droppedDate = calendarApi.getDateFromEvent(event.event);

    // const draggedElement = event.item.element.nativeElement.textContent;
    // //const dropDate = event.item.data;

    // const dateAtPoint = calendarApi.getDate(x, y);
    // // Agrega el nuevo evento al calendario
    // const newEventApi: EventApi = this.calendar.addEvent(newEvent)!;
    // // Obtén la fecha y hora del evento del objeto EventApi proporcionado por FullCalendar
    // const calendarEvent: EventApi = event.item.data.calEvent;
    // const eventDate = calendarEvent.start;
    // const newEvent: EventInput = {
    //   title: draggedElement!,
    //   start: eventDate!,
    //   allDay: false
    // };
    // Opcional: Puedes hacer otras acciones aquí, como guardar el evento en tu backend, etc.

    // Mueve el elemento arrastrado en el arreglo de elementos arrastrables
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }

  handleDrop(eventInfo: any) {
    // eventInfo es un objeto que contiene información sobre el evento drop
    // Aquí puedes acceder a la fecha y otras propiedades del evento drop
    const droppedDate = eventInfo.date;
    console.log('Fecha en FullCalendar:', droppedDate);

    // Aquí puedes realizar cualquier acción adicional que necesites
    // Por ejemplo, agregar un nuevo evento al calendario
    // this.calendarComponent.getApi().addEvent({ title: 'Nuevo evento', start: droppedDate });
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }

  onAdd(){
    this.form.reset();
    this.isEditing = true;
    this.saveAppointmentCommand.pet = new SaveAppointmentPetDto ();
    this.saveAppointmentCommand.pet.primaryOwner = new SaveAppointmentPetOwnerDto ();
    this.saveAppointmentCommand.pet.secondaryOwner = new SaveAppointmentPetOwnerDto ();
    this.saveAppointmentCommand.procedures = new Array();
    this.saveAppointmentCommand.services = new Array();
    this.saveAppointmentCommand.code = "";
  }

  /**
   * 
   */
  onBlurPrimaryClient(){

    this.vetConnectService.getUserByDocument(this.form.controls["primaryDocumentType"].value,this.form.controls["primaryIdentificationNumber"].value,1,1).subscribe({
      next: (data) => {
        if (data.items?.length==0){
          this.form.controls["primaryFirstName"].setValue('');
          this.form.controls["primaryLastName"].setValue('');
          this.form.controls["primaryEmail"].setValue('');
          this.form.controls["primaryPhoneNumber"].setValue('');
          this.form.controls["primaryAddress"].setValue('');
        }else{
          var user = data.items![0];
          this.saveAppointmentCommand.pet!.primaryOwner!.code = user.code;
          this.form.controls["primaryFirstName"].setValue(user.firstName);
          this.form.controls["primaryLastName"].setValue(user.lastName);
          this.form.controls["primaryEmail"].setValue(user.email);
          this.form.controls["primaryPhoneNumber"].setValue(user.phoneNumber);
          this.form.controls["primaryAddress"].setValue(user.address);
        }
      },
      error: error => {
        this.handleError(error);
      }
    });

  }

  /**
   * 
   */
  onBlurSecondaryClient(){
    this.vetConnectService.getUserByDocument(this.form.controls["secondaryDocumentType"].value,this.form.controls["secondaryIdentificationNumber"].value,1,1).subscribe({
      next: (data) => {
        if (data.items?.length==0){
          this.form.controls["secondaryFirstName"].setValue('');
          this.form.controls["secondaryLastName"].setValue('');
          this.form.controls["secondaryEmail"].setValue('');
          this.form.controls["secondaryPhoneNumber"].setValue('');
          this.form.controls["secondaryAddress"].setValue('');
        }else{
          var user = data.items![0];
          this.saveAppointmentCommand.pet!.secondaryOwner!.code = user.code;
          this.form.controls["secondaryFirstName"].setValue(user.firstName);
          this.form.controls["secondaryLastName"].setValue(user.lastName);
          this.form.controls["secondaryEmail"].setValue(user.email);
          this.form.controls["secondaryPhoneNumber"].setValue(user.phoneNumber);
          this.form.controls["secondaryAddress"].setValue(user.address);
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  onBlurPet(){

    /*documentTypeCode: this.form.controls["documentType"].value,
    identificationNumber: this.form.controls["identificationNumber"].value,*/

    this.vetConnectService.getPetByName(this.form.controls["primaryDocumentType"].value,this.form.controls["primaryIdentificationNumber"].value,this.form.controls["petName"].value,1,1).subscribe({
      next: (data) => {
        if (data.items?.length==0){
          this.form.controls["breed"].setValue("");
          this.form.controls["birthdate"].setValue("");
          this.form.controls["species"].setValue("");
          this.form.controls["breed"].setValue("");
          this.form.controls["acquisitionType"].setValue("");
          this.form.controls["reproductiveStatus"].setValue("");
          this.form.controls["sex"].setValue("");
          this.form.controls["microchip"].setValue("");
        }else{
          var pet = data.items![0];
          this.saveAppointmentCommand.pet!.code = pet.code;
          this.form.controls["breed"].setValue(pet.breed);
          this.form.controls["birthdate"].setValue(pet.birthdate);
          this.form.controls["species"].setValue(pet.species?.code);
          this.form.controls["breed"].setValue(pet.breed);
          this.form.controls["acquisitionType"].setValue(pet.acquisitionType?.code);
          this.form.controls["reproductiveStatus"].setValue(pet?.reproductiveStatus?"0":"1");
          this.form.controls["sex"].setValue(pet?.sex);
          this.form.controls["microchip"].setValue(pet?.microchip);
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
  }

  randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  /**
   * 
   * @param event 
   */
  onPetOwner(event:any){

    if (event.target.value === ""){
      this.getAppointments(this.userSelected, this.modalitySelected);
    }else{
      this.vetConnectService.getAppointmentByPetOwner(event.target.value,1,10).subscribe({
        next: response => {
          this.events = [];
          let _events = this.events;
          response.items!.forEach( (item) => {
            var textColor = this.colors[this.randomIntFromInterval(1,this.colors.length)];
            _events.push({
              id: item.code,
              title: '\nPaciente: ' + item.pet?.name + '\nEspecie: ' + item.pet?.species?.name,
              start: item.startDate,
              end: item.endDate,
              color: textColor,
              className: ['eventWithComment']
            });
          });
          this.calendarOptions = {
            firstDay: new Date().getDay(),
            events: this.events,
            eventClick: this.handleEventClick.bind(this),
            editable: false,
            initialView: 'timeGridWeek',
            weekends: true,
            slotLabelFormat: {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            },
            buttonText: {
              day: 'Día',
              week: 'Semana',
              month: 'Mes',
              today: 'Hoy'
            },
            allDaySlot: false,
            eventTimeFormat: {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            },
            slotMinTime: "08:00:00",
            slotMaxTime: "18:00:00",
            eventOverlap: false,
            locale: 'es',
            droppable: true,
            slotDuration: '00:05',
            defaultTimedEventDuration: '00:15',
            businessHours: [
              {
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '08:00', // 8am
                endTime: '18:00' // 6pm
              },
              {
                daysOfWeek: [6],
                startTime: '08:00', // 10am
                endTime: '12:00' // 4pm
              }
            ],
            validRange: function (nowDate) {
              var minDate = new Date();
              var maxDate = new Date();
              return {
                start: minDate,
                end: maxDate.setMonth(maxDate.getMonth() + 8)
              };
            },
            eventConstraint: "businessHours",
            headerToolbar: {
              left: 'timeGridDay,timeGridWeek,dayGridMonth',
              center: 'today',
              right: 'prev,next'
            },
            plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin]
          };
          // this.calendar = new Calendar(this.calendarRef.nativeElement,
          //   this.calendarOptions);
      
          // this.calendar.render();
          this.spinnerVisible = false;
        },
        error: error => {
          this.handleError(error);
        }
      });
    }

  }

  onPetName(event:any){
    if (event.target.value === ""){
      this.getAppointments(this.userSelected, this.modalitySelected);
    }else{
      this.vetConnectService.getAppointmentByPetName(event.target.value,1,10).subscribe({
        next: response => {
          this.events = [];
          let _events = this.events;
          response.items!.forEach( (item) => {
            var textColor = this.colors[this.randomIntFromInterval(1,this.colors.length)];
            _events.push({
              id: item.code,
              title: '\nPaciente: ' + item.pet?.name + '\nEspecie: ' + item.pet?.species?.name,
              start: item.startDate,
              end: item.endDate,
              color: textColor,
              className: ['eventWithComment']
            });
          });
          this.calendarOptions = {
            firstDay: new Date().getDay(),
            events: this.events,
            eventClick: this.handleEventClick.bind(this),
            editable: false,
            initialView: 'timeGridWeek',
            weekends: true,
            slotLabelFormat: {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            },
            buttonText: {
              day: 'Día',
              week: 'Semana',
              month: 'Mes',
              today: 'Hoy'
            },
            allDaySlot: false,
            eventTimeFormat: {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            },
            slotMinTime: "08:00:00",
            slotMaxTime: "18:00:00",
            eventOverlap: false,
            locale: 'es',
            droppable: true,
            slotDuration: '00:05',
            defaultTimedEventDuration: '00:15',
            businessHours: [
              {
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '08:00', // 8am
                endTime: '18:00' // 6pm
              },
              {
                daysOfWeek: [6],
                startTime: '08:00', // 10am
                endTime: '12:00' // 4pm
              }
            ],
            validRange: function (nowDate) {
              var minDate = new Date();
              var maxDate = new Date();
              return {
                start: minDate,
                end: maxDate.setMonth(maxDate.getMonth() + 8)
              };
            },
            eventConstraint: "businessHours",
            headerToolbar: {
              left: 'timeGridDay,timeGridWeek,dayGridMonth',
              center: 'today',
              right: 'prev,next'
            },
            plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin]
          };
          // this.calendar = new Calendar(this.calendarRef.nativeElement,
          //   this.calendarOptions);
      
          // this.calendar.render();
          this.spinnerVisible = false;
        },
        error: error => {
          this.handleError(error);
        }
      });
    }
  }
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadFile() {
    if (this.selectedFile) {
      const response = await this.fileService.uploadFile(this.selectedFile);
      alert(response);
    }
  }

  formatLabel(value: number): string {
    if (value >= 10) {
      return Math.round(value / 1).toString();
    }
    return `${value}`;
  }
}