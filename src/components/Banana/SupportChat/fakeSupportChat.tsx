import { useEffect } from 'react';
import './fakeSupportChat.css';

const FakeSupportChat = () => {
    useEffect(() => {
        fakeChatSDK();
    }, []);

    return (
        <div className="fake-chat">
            <div className="fake-chat__header">
                Atendimento Online
            </div>

            <div className="fake-chat__body">
                <p>
                    👋 Olá! Como podemos ajudar?
                </p>
            </div>

            <button className="fake-chat__button">
                Abrir Chat
            </button>
        </div>
    );
};

export default FakeSupportChat;
const fakeChatSDK = () => {
    console.log(
        'Carregando SDK de atendimento...'
    );

    const start = performance.now();


    while (
        performance.now() - start <
        6000
    ) {
        
    }

    console.log(
        'SDK de atendimento carregado'
    );
};