import {Turnos, Cursos } from './maestro-datos';

export const TURNOS = [
    new Turnos('M', 'Mañana', '9:00 - 14:00'),
    new Turnos('T', 'Tarde', '15:00-21:00'),
    new Turnos('C', 'Completo', '10:00-13:00 / 15:00-17:00')
];

export const CURSOS =  [
    new Cursos('01', 'Angular', 'Aprendiendo Angular...'),
    new Cursos('02', 'React', 'Aprendiendo React...'),
    new Cursos('03', 'Vue', 'Aprendiendo Vue...')
];
