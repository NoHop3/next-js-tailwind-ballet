import type { Culture } from './TranslationContext';

export interface ScheduleSlot {
  time: string;
  group: string;
}

export interface ScheduleDay {
  day: string;
  location: string;
  slots: ScheduleSlot[];
  note?: string;
}

export const weeklySchedule: Record<Culture, ScheduleDay[]> = {
  'bg-BG': [
    {
      day: 'Понеделник',
      location: 'ЖК "Нов център"',
      slots: [
        { time: '16:00 – 17:20', group: 'Ученици 4/5 клас' },
        { time: '17:30 – 18:50', group: 'Ученици 2/3 клас' },
        { time: '19:00 – 20:30', group: 'Ученици 5/10 клас' },
      ],
    },
    {
      day: 'Вторник',
      location: 'Стар център / Младежки център',
      slots: [
        { time: '17:30 – 18:30', group: 'Начинаещи' },
        { time: '18:40 – 19:40', group: 'Начинаещи' },
      ],
    },
    {
      day: 'Сряда',
      location: 'ЖК "Нов център"',
      slots: [
        { time: '16:00 – 17:20', group: 'Ученици 4/5 клас' },
        { time: '17:30 – 18:30', group: 'Ученици 1 клас' },
        { time: '18:40 – 20:00', group: 'Ученици 2/3 клас' },
      ],
    },
    {
      day: 'Четвъртък',
      location: 'Стар център / Младежки център',
      slots: [
        { time: '17:30 – 18:30', group: 'Начинаещи' },
        { time: '18:40 – 19:40', group: 'Начинаещи' },
      ],
    },
    {
      day: 'Петък',
      location: 'ЖК "Нов център"',
      slots: [
        { time: '16:00 – 17:30', group: 'Ученици 4/5 клас' },
        { time: '17:40 – 18:40', group: 'Ученици 1 клас' },
        { time: '19:00 – 20:30', group: 'Ученици 5/10 клас' },
      ],
    },
    {
      day: 'Събота',
      location: 'ЖК "Нов център"',
      slots: [{ time: '10:00 – 12:00', group: 'Ученици 5/10 клас' }],
      note: 'Възможност по предварителна уговорка за индивидуални уроци след 12ч.',
    },
  ],
  'en-GB': [
    {
      day: 'Monday',
      location: 'Nov Tsentar complex',
      slots: [
        { time: '16:00 – 17:20', group: 'Students 4/5 class' },
        { time: '17:30 – 18:50', group: 'Students 2/3 class' },
        { time: '19:00 – 20:30', group: 'Students 5/10 class' },
      ],
    },
    {
      day: 'Tuesday',
      location: 'Old town centre / Youth centre',
      slots: [
        { time: '17:30 – 18:30', group: 'Beginners' },
        { time: '18:40 – 19:40', group: 'Beginners' },
      ],
    },
    {
      day: 'Wednesday',
      location: 'Nov Tsentar complex',
      slots: [
        { time: '16:00 – 17:20', group: 'Students 4/5 class' },
        { time: '17:30 – 18:30', group: 'Students 1st class' },
        { time: '18:40 – 20:00', group: 'Students 2/3 class' },
      ],
    },
    {
      day: 'Thursday',
      location: 'Old town centre / Youth centre',
      slots: [
        { time: '17:30 – 18:30', group: 'Beginners' },
        { time: '18:40 – 19:40', group: 'Beginners' },
      ],
    },
    {
      day: 'Friday',
      location: 'Nov Tsentar complex',
      slots: [
        { time: '16:00 – 17:30', group: 'Students 4/5 class' },
        { time: '17:40 – 18:40', group: 'Students 1st class' },
        { time: '19:00 – 20:30', group: 'Students 5/10 class' },
      ],
    },
    {
      day: 'Saturday',
      location: 'Nov Tsentar complex',
      slots: [{ time: '10:00 – 12:00', group: 'Students 5/10 class' }],
      note: 'Private lessons after 12:00 by prior arrangement.',
    },
  ],
  'ru-RU': [
    {
      day: 'Понедельник',
      location: 'ЖК «Нов център»',
      slots: [
        { time: '16:00 – 17:20', group: 'Ученики 4/5 класс' },
        { time: '17:30 – 18:50', group: 'Ученики 2/3 класс' },
        { time: '19:00 – 20:30', group: 'Ученики 5/10 класс' },
      ],
    },
    {
      day: 'Вторник',
      location: 'Старый центр / Молодёжный центр',
      slots: [
        { time: '17:30 – 18:30', group: 'Начинающие' },
        { time: '18:40 – 19:40', group: 'Начинающие' },
      ],
    },
    {
      day: 'Среда',
      location: 'ЖК «Нов център»',
      slots: [
        { time: '16:00 – 17:20', group: 'Ученики 4/5 класс' },
        { time: '17:30 – 18:30', group: 'Ученики 1 класс' },
        { time: '18:40 – 20:00', group: 'Ученики 2/3 класс' },
      ],
    },
    {
      day: 'Четверг',
      location: 'Старый центр / Молодёжный центр',
      slots: [
        { time: '17:30 – 18:30', group: 'Начинающие' },
        { time: '18:40 – 19:40', group: 'Начинающие' },
      ],
    },
    {
      day: 'Пятница',
      location: 'ЖК «Нов център»',
      slots: [
        { time: '16:00 – 17:30', group: 'Ученики 4/5 класс' },
        { time: '17:40 – 18:40', group: 'Ученики 1 класс' },
        { time: '19:00 – 20:30', group: 'Ученики 5/10 класс' },
      ],
    },
    {
      day: 'Суббота',
      location: 'ЖК «Нов център»',
      slots: [{ time: '10:00 – 12:00', group: 'Ученики 5/10 класс' }],
      note: 'Индивидуальные занятия после 12:00 по предварительной договорённости.',
    },
  ],
  'uk-UA': [
    {
      day: 'Понеділок',
      location: 'ЖК «Нов център»',
      slots: [
        { time: '16:00 – 17:20', group: 'Учні 4/5 клас' },
        { time: '17:30 – 18:50', group: 'Учні 2/3 клас' },
        { time: '19:00 – 20:30', group: 'Учні 5/10 клас' },
      ],
    },
    {
      day: 'Вівторок',
      location: 'Старий центр / Молодіжний центр',
      slots: [
        { time: '17:30 – 18:30', group: 'Початківці' },
        { time: '18:40 – 19:40', group: 'Початківці' },
      ],
    },
    {
      day: 'Середа',
      location: 'ЖК «Нов център»',
      slots: [
        { time: '16:00 – 17:20', group: 'Учні 4/5 клас' },
        { time: '17:30 – 18:30', group: 'Учні 1 клас' },
        { time: '18:40 – 20:00', group: 'Учні 2/3 клас' },
      ],
    },
    {
      day: 'Четвер',
      location: 'Старий центр / Молодіжний центр',
      slots: [
        { time: '17:30 – 18:30', group: 'Початківці' },
        { time: '18:40 – 19:40', group: 'Початківці' },
      ],
    },
    {
      day: "П'ятниця",
      location: 'ЖК «Нов център»',
      slots: [
        { time: '16:00 – 17:30', group: 'Учні 4/5 клас' },
        { time: '17:40 – 18:40', group: 'Учні 1 клас' },
        { time: '19:00 – 20:30', group: 'Учні 5/10 клас' },
      ],
    },
    {
      day: 'Субота',
      location: 'ЖК «Нов център»',
      slots: [{ time: '10:00 – 12:00', group: 'Учні 5/10 клас' }],
      note: 'Індивідуальні заняття після 12:00 за попередньою домовленістю.',
    },
  ],
};

export function getWeeklySchedule(culture: Culture): ScheduleDay[] {
  return weeklySchedule[culture] ?? weeklySchedule['bg-BG'];
}
