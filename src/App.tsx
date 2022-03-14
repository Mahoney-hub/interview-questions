import React, {useState} from 'react';
import {Button, Card, Col, Layout, Menu, Row} from 'antd';
import {QuestionType, TopicOfQuestionsType} from './types/types';
import {renderQuestion} from './utils/functions';

const App = () => {
    const {Header, Content, Footer} = Layout;

    const [topic, setTopic] = useState<TopicOfQuestionsType>('react')
    const [answer, setAnswer] = useState<boolean>(false)
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(renderQuestion(topic))
    // Functions
    const showAnswerHandler = () => {
        setAnswer(!answer)
    }

    const showNextQuestionHandler = () => {
        setAnswer(false)
        setCurrentQuestion(renderQuestion(topic))
    }

    const changeTopicHandler = (value: TopicOfQuestionsType) => {
        setAnswer(false)
        setTopic(value)
        setCurrentQuestion(renderQuestion(value))
    }

    return (
        <div>
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                        <Menu.Item key="1" onClick={() => changeTopicHandler('css')}>CSS</Menu.Item>
                        <Menu.Item key="2" onClick={() => changeTopicHandler('js')}>JS</Menu.Item>
                        <Menu.Item key="3" onClick={() => changeTopicHandler('react')}>React</Menu.Item>
                        <Menu.Item key="4" onClick={() => changeTopicHandler('other')}>Other</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64, height: '87vh'}}>
                    <Row justify={'center'} style={{marginTop: 30}}>
                        <Col span={10}>
                            <Card style={{width: 800}}
                                  hoverable
                                  title={currentQuestion.question}
                                  bordered={false}
                            >
                                {answer && <p style={{fontSize: '20px'}}>{currentQuestion.answer}</p>}
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Button type="primary" onClick={showAnswerHandler}>
                                        Показать ответ
                                    </Button>
                                    <Button type="primary" danger onClick={showNextQuestionHandler}>
                                        Следующий вопрос
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Проект выполнил Павел Васильев для подготовки к трудоустройству
                </Footer>
            </Layout>
        </div>
    );
};

export default App;