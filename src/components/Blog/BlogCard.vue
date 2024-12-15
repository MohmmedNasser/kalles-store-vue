<template>
    <v-card elevation="0" class="pa-0 blog-card">
        <div class="blog-img position-relative w-full">
            <RouterLink to="/">
                <v-img :src="`./images/${blogInfo?.image}`" class="rounded-lg overflow-hidden" cover
                    :alt="`${blogInfo?.title}`" height="277" loading="lazy"></v-img>
            </RouterLink>
        </div>
        <v-card-title tag="h6" class="pa-0 mt-3 text-body-1 font-weight-bold">
            <v-hover v-slot="{ isHovering, props }">
                <RouterLink :to="{ name: 'home' }" :class="isHovering ? 'text-light-blue-darken-4' : ''" v-bind="props">
                    {{ blogInfo?.title }}
                </RouterLink>
            </v-hover>
        </v-card-title>

        <div class="d-flex align-center text-body-2 ga-1 text-grey-darken-2 mt-2">
            By <span class="text-grey-darken-4">{{ blogInfo?.userName }}</span> On <span class="text-grey-darken-4">
                {{ blogInfo?.date }}
            </span>
        </div>

        <v-card-text tag="p" class="pa-0 text-body-2 mt-2 text-grey-darken-1">
            {{ (blogInfo?.description)?.split(' ').reduce((a, b) => (a + b).length < 100 ? a + ' ' + b : a) + ' ...' }}
                </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

interface Blog {
    id: Number,
    title: String,
    userName: String,
    date: String,
    description: String,
    image: String
}

defineProps<{
    blogInfo: Blog
}>()

// defineProps({
//     blogInfo: {
//         type: Object as PropType<Blog>,
//     }
// });

</script>

<style scoped>
.blog-card .blog-img:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    transition: all 0.6s;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 2;
    pointer-events: none;
    user-select: none;
}

.blog-card:hover .blog-img:before {
    animation: grid-blog-fadein 0.7s cubic-bezier(0.26, 0.54, 0.32, 1) 0s forwards;
}

@keyframes grid-blog-fadein {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        width: 100%;
        height: 100%;
    }
}
</style>