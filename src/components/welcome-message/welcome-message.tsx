import { Typography, Row, Col, Divider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const WelcomeMessage = () => {
    const navigate = useNavigate();

    return (
        <Row style={{ padding: '2rem' }}>
            <Col span={24}>
                <Row>
                    <Typography.Title style={{ color: 'white' }} level={3}>
                        Welcome to Focus Brew! ☕
                    </Typography.Title>
                </Row>
                <Divider />
                <Row>
                    <Col>
                        <Typography.Text style={{ color: 'white' }}>
                            Sip away at your tasks as your coffee cup empties with each Pomodoro.
                            Dive into focused work sessions, and watch as your cup gently runs dry,
                            a reminder that you're moving closer to your goals—one Pomodoro at a
                            time. Stay on track, enjoy each well-earned break, and let’s make
                            progress sip by sip.
                        </Typography.Text>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col>
                        <Typography.Text style={{ color: 'white' }}>
                            When you're ready, start brewing your productivity! 🍅
                        </Typography.Text>
                    </Col>
                </Row>
                <Row style={{ marginTop: '1rem' }}>
                    <Button onClick={() => navigate('/widgets')} type='primary'>
                        Click Me!
                    </Button>
                </Row>
            </Col>
        </Row>
    );
};
