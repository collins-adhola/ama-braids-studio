import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EnquiryModalService } from '../../services/enquiry-modal.service';
import { WhatsappService } from '../../services/whatsapp.service';

interface CalendarCell {
  date: Date;
  day: number;
  currentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isPast: boolean;
}

@Component({
  selector: 'app-enquiry-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './enquiry-modal.component.html',
  styleUrls: ['./enquiry-modal.component.scss'],
})
export class EnquiryModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  submitted = false;
  submitting = false;
  submitError = false;

  form!: FormGroup;

  // Calendar state
  calendarOpen = false;
  calendarViewDate = new Date();
  calendarCells: CalendarCell[] = [];
  selectedDisplayDate = '';
  readonly weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  private sub!: Subscription;

  readonly services = [
    'Knotless Braids',
    'Box Braids',
    'Cornrows',
    'Stitch Braids',
    'Silk Press',
    'Kids Styles',
    'Custom Style',
    'Bridal Package',
  ];

  readonly timeSlots = ['Morning', 'Afternoon', 'Evening', 'Flexible'];

  get monthYearLabel(): string {
    return this.calendarViewDate.toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric',
    });
  }

  constructor(
    private fb: FormBuilder,
    private modalService: EnquiryModalService,
    private whatsapp: WhatsappService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      details: [''],
    });

    this.sub = this.modalService.state$.subscribe(preset => {
      if (preset !== null) {
        this.isOpen = true;
        this.submitted = false;
        this.submitError = false;
        this.calendarOpen = false;
        this.selectedDisplayDate = '';
        this.calendarViewDate = new Date();
        this.form.reset();
        if (preset.service) {
          this.form.patchValue({ service: preset.service });
        }
      } else {
        this.isOpen = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.calendarOpen) {
      this.closeCalendar();
    } else if (this.isOpen) {
      this.close();
    }
  }

  close(): void {
    this.modalService.close();
  }

  // ── Calendar ──────────────────────────────────────────────────────────────

  toggleCalendar(): void {
    if (this.calendarOpen) {
      this.closeCalendar();
    } else {
      this.buildCalendar();
      this.calendarOpen = true;
    }
  }

  closeCalendar(): void {
    this.calendarOpen = false;
  }

  prevMonth(): void {
    this.calendarViewDate = new Date(
      this.calendarViewDate.getFullYear(),
      this.calendarViewDate.getMonth() - 1,
      1,
    );
    this.buildCalendar();
  }

  nextMonth(): void {
    this.calendarViewDate = new Date(
      this.calendarViewDate.getFullYear(),
      this.calendarViewDate.getMonth() + 1,
      1,
    );
    this.buildCalendar();
  }

  buildCalendar(): void {
    const year = this.calendarViewDate.getFullYear();
    const month = this.calendarViewDate.getMonth();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = (firstDay.getDay() + 6) % 7; // Monday-first

    const cells: CalendarCell[] = [];
    const selectedDateStr = this.form.get('date')?.value as string;

    for (let i = startOffset; i > 0; i--) {
      cells.push(this.makeCell(new Date(year, month, 1 - i), false, today, selectedDateStr));
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      cells.push(this.makeCell(new Date(year, month, d), true, today, selectedDateStr));
    }
    for (let d = 1; d <= 42 - cells.length; d++) {
      cells.push(this.makeCell(new Date(year, month + 1, d), false, today, selectedDateStr));
    }

    this.calendarCells = cells;
  }

  private makeCell(
    date: Date,
    currentMonth: boolean,
    today: Date,
    selectedDateStr: string,
  ): CalendarCell {
    const dateStr = this.isoDate(date);
    return {
      date,
      day: date.getDate(),
      currentMonth,
      isToday: dateStr === this.isoDate(today),
      isSelected: dateStr === selectedDateStr,
      isPast: date < today,
    };
  }

  selectDay(cell: CalendarCell): void {
    if (cell.isPast) return;
    this.form.patchValue({ date: this.isoDate(cell.date) });
    this.selectedDisplayDate = cell.date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    this.closeCalendar();
    this.buildCalendar();
  }

  private isoDate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // ── Validation ────────────────────────────────────────────────────────────

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c.touched);
  }

  // ── Submission ────────────────────────────────────────────────────────────

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.submitError = false;

    const v = this.form.value as Record<string, string>;

    const body = new URLSearchParams({
      'form-name': 'appointment-enquiry',
      'bot-field': '',
      name: v['name'],
      phone: v['phone'],
      email: v['email'],
      service: v['service'],
      date: this.selectedDisplayDate || v['date'],
      time: v['time'],
      details: v['details'] ?? '',
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (res.ok) {
        this.submitted = true;
      } else {
        this.submitError = true;
      }
    } catch {
      this.submitError = true;
    } finally {
      this.submitting = false;
    }
  }

  // Secondary option — only called when the user explicitly clicks the button
  openWhatsApp(): void {
    const v = this.form.value as Record<string, string>;
    const lines: string[] = [
      "Hi AMA, I'd like to request an appointment.",
      '',
      v['name'] ? `Name: ${v['name']}` : '',
      v['service'] ? `Service: ${v['service']}` : '',
      this.selectedDisplayDate ? `Preferred Date: ${this.selectedDisplayDate}` : '',
      v['time'] ? `Preferred Time: ${v['time']}` : '',
    ];
    if (v['details']?.trim()) {
      lines.push('', 'About my hair:', v['details'].trim());
    }
    lines.push('', 'Thank you!');
    this.whatsapp.openEnquiry(lines.filter(Boolean).join('\n'));
  }
}
