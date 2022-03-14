import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb, Row, Col, Button, Divider, Card} from 'antd';
import {questions} from './questions';

type RenderQuestionType = {
    id: number
    question: string
    answer: string
}

const App = () => {
    const {Header, Content, Footer} = Layout;

    const renderQuestion = () => {
        const min = 0;
        const max = questions.length - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64, height: '85vh'}}>
                    <Row justify={'center'} style={{marginTop: 30}}>
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
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Проект выполнил Павел Васильев для подготовки к
                    трудоустройству
                </Footer>
            </Layout>
        </div>
    );
};

export default App;