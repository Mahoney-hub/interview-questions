import {TopicOfQuestionsType} from '../types/types';
import {general} from '../questions/general';
import {REACT} from '../questions/REACT';
import {JS} from '../questions/JS';
import {CSS} from '../questions/CSS';
import {REDUX} from '../questions/REDUX';

export const renderQuestion = (value: TopicOfQuestionsType) => {
    let questions = []
    switch (value) {
        case 'css':
            questions = CSS
            break
        case 'js':
            questions = JS
            break
        case 'react':
            questions = REACT
            break
        case 'redux':
            questions = REDUX
            break
        case 'general':
            questions = general
            break
    }
    const min = 0;
    const max = questions.length - 1;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return questions[random]
}