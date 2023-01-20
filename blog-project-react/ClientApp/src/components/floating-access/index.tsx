import {
    clickSendMessage,
    changeInputUser,
    clickOpenChat,
    clickOpenNotificationList,
    clickCloseChat,
    clickCloseNotificationList,
    mouseDownConversation,
    mouseMoveConversation
} from './controllers';
import { types } from './types';
import images from '../../assets/images.json';
import './styles.css';

export function Notifications () {

    return (
        <div className="floating-access-container">
            <div className="fac-notifications">
                
                <div
                    onClick={clickCloseNotificationList}
                    className="fac-list-close-notis">x</div>
                <div className='fac-n-list-container'>
                    <div className='fac-n-list'>
                    </div>
                </div>

                <div
                    onClick={clickOpenNotificationList}
                    className="fac-notifications-button">
                    <img src={images.icons.notification} />
                </div>
                <label className="fac-notis-list-label">Notificaciones</label>
            </div>
            {/* End notifications */}

            <div className="fac-conversation">
                <div
                    onClick={clickOpenChat}
                    className="fac-conversation-button">
                    <img src={images.icons.chat} />
                </div>
                <label className="fac-chat-list-label">IA: Vina</label>

                <div
                    onClick={clickCloseChat}
                    className="fac-list-close-chat">x</div>

                <div
                    // onMouseDown={mouseDownConversation}
                    className='fac-messages-list-container'>

                    <div className='fac-messages-list'></div>
                </div>
                <div className="fac-m-user-input">
                    <div className="fac-m-user-prediction"></div>
                    <input
                        onKeyUp={changeInputUser}
                        className="fac-m-user-i-input"
                        placeholder="Nuevo mensaje" />
                    <div
                        onClick={clickSendMessage}
                        className="fac-m-send-message">Enviar</div>
                </div>
            </div>

            <div
                // onMouseMove={mouseMoveConversation}
                className="fac-c-chords-layer"></div>
        </div>
    )
}