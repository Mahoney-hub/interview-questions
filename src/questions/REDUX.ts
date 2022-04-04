import {v1} from 'uuid';

export const REDUX = [
    {
        id: v1(),
        question: 'Что такое Redux',
        answer: 'Redux - библиотека управления состоянием, основанная на паттерне Flux круговорот'
    },
    {
        id: v1(),
        question: 'Что такое Flux',
        answer: 'Flux архитектура - набор шаблонов программирования для построения пользовательского интерфейса веб приложений. Построен на однонаправленных потоках'
    },
    {
        id: v1(),
        question: 'Скелет Flux архитектуры',
        answer: 'Actions(действия) -> Dispatch(посредник-диспетчер) -> Stores(хранилища) -> Views(Представления)'
    },
    {
        id: v1(),
        question: 'Принципы Redux',
        answer: '1. Все данные хранятся в одном месте - store 2. Данные  изменяются с помощью чистой функции reducer 3. Напрямую данные в store изменять нельзя'
    },
    {
        id: v1(),
        question: 'Отличия Flux от Redux',
        answer: 'В колличестве store. У Redux только один, у Flux - может быть несколько'
    },
    {
        id: v1(),
        question: 'Что такое Store',
        answer: 'Это объект, который содержит: -State(общее состояние приложения) и методы getState(), dispatch(), subscribe()'
    },
    {
        id: v1(),
        question: 'Что такое State',
        answer: 'Общее состояние приложения. Доступно только для чтения, напрямую менять состояние нельзя. Изменения возможны только при отправки action'
    },
    {
        id: v1(),
        question: 'Что такое Action',
        answer: 'Объект, который лаконично описывает суть изменения в State, с обязательным свойством types, значение которого обычно строка'
    },
    {
        id: v1(),
        question: 'Что такое Action-Creators',
        answer: 'Это функция, которая возвращает объект action'
    },
    {
        id: v1(),
        question: 'Что такое Reducer',
        answer: 'Это чистая функция, которая принимает состояние и action, и возвращает новый объект состояния'
    },
    {
        id: v1(),
        question: 'Что такое Combine-Reducer',
        answer: 'CombineReducer - объединяет редюсеры (находится в сторе) - возвращает редюсер.'
    },
    {
        id: v1(),
        question: 'Thunk?',
        answer: 'Thunk- это функция, которая принимает dispatch, в ней хранятся асинхронные запросы. Вторым параметором (не обязательным) getState(). Dispatch вызывает ThunkCreator-> ThunkCreator вызывает ActionCreator-> ActionCreator благодаря хранящемуся в нем action.type попадает в case Reducera.'
    },
]