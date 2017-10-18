import './style/index.less';
import ToastContainer from './toast-container';

let messageInstance;
let prefixCls = 'am-toast';

function getMessageInstance(mask){
    if(messageInstance){
        messageInstance.destroy();
        messageInstance = null;
    }
    messageInstance = ToastContainer.newInstance({
        prefixCls,
        style:{},
        transitionName:'am-fade',
        mask:mask
    });
    return messageInstance;
}

function notice(content,type,duration = 3,onClose = () => {},mask = true){
    let instance = getMessageInstance(mask);

    instance.notice({
        duration,
        content:content,
        type:type,
        onClose:() => {
            if(onClose){
                onClose();
            }
            instance.destroy();
            instance = null;
            messageInstance = null;
        }
    });
}

export default {
    SHORT:3,
    LONG:8,
    show(content,duration,number,mask){
        return notice(content,'info',duration,() => {},mask);
    },
    info(content,duration,onClose,mask){
        return notice(content,'info',duration,onClose,mask);
    },
    success(content,duration,onClose,mask){
        return notice(content,'success',duration,onClose,mask);
    },
    fail(content,duration,onClose,mask){
        return notice(content,'fail',duration,onClose,mask);
    },
    offline(content,duration,onClose,mask){
        return notice(content,'offline',duration,onClose,mask);
    },
    loading(content,duration,onClose,mask){
        return notice(content,'loading',duration,onClose,mask);
    },
    hide(){
        if(messageInstance){
            messageInstance.destroy();
        }
    }
};