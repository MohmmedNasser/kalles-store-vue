<template>
    <div class="notfound">
        <div class="lamp">
            <div class="cable"></div>
            <div class="cover"></div>
            <div class="in-cover">
                <div class="bulb"></div>
            </div>
            <div class="light"></div>
        </div>

        <section class="error">
            <div class="error__content">
                <div class="error__message message">
                    <h1 class="message__title">Page Not Found</h1>
                    <p class="message__text">We're sorry, the page you were looking for isn't found here. The link you
                        followed may either be broken or no longer exists. Please try again.
                    </p>
                    <router-link :to="{ name: 'home' }"
                        class="text-capitalize text-white d-inline-flex justify-center align-center font-weight-medium rounded-lg home-btn">
                        Home Page
                    </router-link>
                </div>
            </div>

        </section>
    </div>

</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';


useHead({
    title: '404 | Kalles Ecommerce',
});

</script>

<style scoped>
.notfound {
    background: #212121;
}

/* 2.3. Lamp */
.lamp {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    margin: 0px auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-origin: center top;
    animation-timing-function: cubic-bezier(0.6, 0, 0.38, 1);
    animation: move 5.1s infinite;
}

@keyframes move {
    0% {
        transform: rotate(40deg);
    }

    50% {
        transform: rotate(-40deg);
    }

    100% {
        transform: rotate(40deg);
    }
}

.cable {
    width: 4px;
    height: 200px;
    background: white;
}

.cover {
    width: 200px;
    height: 80px;
    background: #EEEEEE;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    position: relative;
    z-index: 200;
}

.in-cover {
    width: 100%;
    max-width: 200px;
    height: 20px;
    border-radius: 100%;
    background: #AAA;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    bottom: -9px;
    z-index: 100;
}

.in-cover .bulb {
    width: 50px;
    height: 50px;
    background: #F5D76E;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -20px;
    margin: 0px auto;
}

.light {
    width: 200px;
    height: 0px;
    border-bottom: 900px solid rgba(100, 100, 100, 0.45);
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 270px;
    margin: 0px auto;
    z-index: 1;
}

/* 2.3. END Lamp */

.error {
    min-height: 100vh;
    position: relative;
    /* padding: 240px 0; */
    padding: 500px 0 200px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    text-align: center;
}

.error__content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.error__message {
    text-align: center;
    color: #ffffff;
}

.message__title {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 4rem;
    padding-bottom: 40px;
    max-width: 960px;
    margin: 0 auto;
}

.message__text {
    line-height: 35px;
    font-size: 15px;
    padding: 0 60px;
    max-width: 920px;
    margin: auto;
    margin-bottom: 30px;
}

.home-btn {
    border: 1px solid #FFF;
    padding: 10px 20px;
}

.home-btn:hover {
    background: #FFF;
    color: #212121 !important;
}

@media (max-width: 900px) {

    .message__title {
        font-size: 38px;
    }

    .error__content {
        top: 55%;
    }
}

@media (max-width: 950px) {
    .lamp__wrap {
        max-height: 100vh;
        overflow: hidden;
        max-width: 100vw;
    }
}

@media (max-width: 750px) {

    .lamp {
        zoom: .60;
    }

    .error__content {
        position: static;
        margin: 0 auto;
        transform: none;
        padding-top: 150px;
    }

    .error {
        padding-top: 0;
        padding-bottom: 100px;
        height: 100vh;
    }
}

@media (max-width: 650px) {
    .message__title {
        font-size: 36px;
        padding-bottom: 20px;
    }

    .message__text {
        font-size: 16px;
        line-height: 2;
        padding-right: 20px;
        padding-left: 20px;
    }

    .lamp {
        zoom: .45;
    }

    .error__content {
        padding-top: 120px;
    }
}
</style>