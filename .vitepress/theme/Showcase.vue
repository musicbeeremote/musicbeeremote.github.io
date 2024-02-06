<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register();

const spaceBetween = 5;
const onProgress = (e: any) => {
  const [swiper, progress] = e.detail;
  console.log(progress)
};

const onSlideChange = (e: any) => {
  console.log('slide changed')
}
</script>

<template>
  <swiper-container
      :slides-per-view="3"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
      hideOnClick: true
    }"
      :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
  >
    <swiper-slide>
      <img src="../../img/gallery/1_nexus6p-portrait.png" alt="Main application screen"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../img/gallery/2_nexus6p-portrait.png"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../img/gallery/3_nexus6p-portrait.png"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../img/gallery/4_nexus6p-portrait.png"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../img/gallery/5_nexus6p-portrait.png"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../img/gallery/6_nexus6p-portrait.png"/>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>

</style>