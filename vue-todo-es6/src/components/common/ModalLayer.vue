<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <slot name="modal-button">
                        <button
                            class="modal-default-button"
                            @click="$emit('close')"
                        >
                           <i class="fas far fa-times"></i>
                        </button>
                    </slot>
                    <div class="modal-header">
                        <slot name="header"> default header </slot>
                        <!-- slot = 특정컴포넌트의 ui를 재사용할 수 있다 -->
                    </div>

                    <div class="modal-body">
                        <slot name="body"> default body </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer"> default footer </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
    border: 0;
    background: transparent;
}
.modal-default-button i{
    font-size: 1.2rem;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

/* .modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
} */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.5s;
}
</style>

<!--
    vue 트랜지션
    https://v2.vuejs.org/v2/guide/transitions.html#Transition-Classes

    1.transition 로 감싼 후 name을 준다
    2.name- 뒤에 전환클래스를 붙인다
    3. 그 클래스에 css를 주면 된다👋

 -->
