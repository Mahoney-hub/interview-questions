import React, {useState} from 'react';
import {Row, Col, Button, Divider, Card} from 'antd';
import {questions} from './questions';

const App = () => {

    const renderQuestion = () => {
        const min = 0;
        const max = questions.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    type RenderQuestionType = {
        id: number
        question: string
        answer: string
    }

    const [text, setText] = useState<string>('none')
    const [question, setQuestion] = useState<RenderQuestionType>(questions[renderQuestion()])

    const showP = () => {
        setText(text === 'none' ? 'block' : 'none')
    }

    const nextQuestion = () => {
        setQuestion(questions[renderQuestion()])
        setText('none')
    }

    return (
        <div>
            <Divider orientation="left">Quiz</Divider>
            <Row justify={'center'}>
                <Col span={10}>
                    <Card
                        hoverable
                        title={question.question}
                        bordered={false}
                    >
                        <p style={{display: text, fontSize: '20px'}}>{question.answer}</p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button type="primary" onClick={showP}>Показать ответ</Button>
                            <Button type="primary" danger onClick={nextQuestion}>Следующий вопрос</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default App;