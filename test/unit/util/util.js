import Vue from 'vue';

/**
 * 创建一个Vue实例
 * @param {Object|String} Compo 组件,可接受template字符串
 * @param {Boolean} mounted 是否挂载到DOM
 * @return {Object} vm
 */
export const createVM = function (Compo, mounted = false) {
    if (Object.prototype.toString.call(Compo) === '[object String]') {
        Compo = { template: Compo };
    }

    return mounted ? new Vue(Compo).$mount() : new Vue(Compo);
};

/**
 * 
 * @param {Object} Compo  Compo 组件
 * @param {Object} propsData 组件的props
 * @return {Object} HTMLElement
 */
export const createRenderedComp = function (Compo, propsData = {}) {
    const Ctor = Vue.extend(Compo);
    return new Ctor({ propsData: propsData }).$mount();
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
export const triggerEvent = function (elm, name, ...opts) {
    let eventName;

    if (/^mouse|click/.test(name)) {
        eventName = 'MouseEvents';
    } else if (/^key/.test(name)) {
        eventName = 'KeyboardEvent';
    } else {
        eventName = 'HTMLEvents';
    }
    const evt = document.createEvent(eventName);

    evt.initEvent(name, ...opts);
    elm.dispatchEvent
        ? elm.dispatchEvent(evt)
        : elm.fireEvent('on' + name, evt);

    return elm;
};