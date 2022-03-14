import {TopicOfQuestionsType} from '../types/types';
import {questionsCSS, questionsJS, questionsReact} from '../questions';

export const renderQuestion = (value: TopicOfQuestionsType) => {
    let questions = []
    switch (value) {
        case 'css':
            questions = questionsCSS
            break
        case 'js':
            questions = questionsJS
            break
        case 'react':
            questions = questionsReact
            break
    }
    const min = 0;
    const max = questions.length - 1;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return questions[random]
}