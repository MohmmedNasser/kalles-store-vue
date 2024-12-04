<template>
    <v-card elevation="0" class="pa-0 blog-card">
        <div class="blog-img position-relative w-full">
            <RouterLink to="/">
                <v-img src="./images/blog-01.jpg" class="rounded-lg overflow-hidden" cover
                    alt="Style for couple in Weeding season" height="277" loading="lazy"></v-img>
            </RouterLink>
        </div>
        <v-card-title tag="h6" class="pa-0 mt-3 text-body-1 font-weight-bold">
            <v-hover v-slot="{ isHovering, props }">
                <RouterLink to="/" :class="isHovering ? 'text-light-blue-darken-4' : ''" v-bind="props">
                    Style for couple in Weeding season
                </RouterLink>
            </v-hover>
        </v-card-title>

        <div class="d-flex items-center text-body-2 ga-1 text-grey-darken-2 mt-2">
            By <span class="text-grey-darken-4">John Doe</span> On <span class="text-grey-darken-4">May 22, 2024</span>
        </div>

        <v-card-text tag="p" class="pa-0 text-body-2 mt-2 text-grey-darken-1">
            Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga
            artists,...
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">

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