<template>
    <ul class="d-flex flex-wrap align-center ga-3 mt-5">
        <li v-for="(link, index) in shareLinks" :key="index">
            <ShareButton :href="link.href" :icon="link.icon" />
        </li>
        <li>
            <v-btn variant="plain" class="opacity-100 pa-0" min-width="25" width="25" height="25" :ripple="false"
                @click="copyLink()">
                <Icon icon="iconamoon:copy-light" width="25"></Icon>
            </v-btn>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import ShareButton from '../Global/ShareButton.vue';

const toast = useToast();

const props = defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
})

const url = encodeURIComponent(window.location.href);
const title = props.title ? encodeURIComponent(props.title) : "";
const body = props.description ? encodeURIComponent(props.description) : "";
const img = props.img ? encodeURIComponent(props.img) : props.img;

const shareLinks = ref({
    facebook: {
        href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        icon: "mdi:facebook"
    },
    twitter: {
        href: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        icon: "ri:twitter-fill"
    },
    linkedin: {
        // href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${body}`,
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=${title}`,
        icon: "mdi:linkedin"
    },
    whatsapp: {
        href: `https://wa.me/?text=${url}`,
        icon: "mingcute:whatsapp-fill"
    },
    telegram: {
        href: `https://t.me/share/url?url=${url}&text=${title}`,
        icon: "mingcute:telegram-fill"
    },
    pinterest: {
        href: `https://pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${title}`,
        icon: "ri:pinterest-fill"
    },
});

const copyLink = () => {
    navigator.clipboard.writeText(`${window.location.href}`).then(() => {
        toast.success("Product link copied successfully");
    });
}

</script>

<style scoped></style>