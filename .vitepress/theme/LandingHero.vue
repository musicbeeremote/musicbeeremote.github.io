<script setup lang="ts">
import Image from './Image.vue';

interface Actions {
  text: string;
  link: string;
}

interface HeroImage {
  alt: string;
  src: string;
}

interface Hero {
  name: string;
  text: string;
  tagline: string;
  actions: Actions[];
  image: HeroImage;
}

interface LandingHeroProps {
  hero: Hero;
}

defineProps<LandingHeroProps>();
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-gradient">{{ hero.name }}</span>
        </h1>
        <div class="hero-subtitle">
          {{ hero.text }}
        </div>
        <p class="hero-tagline">
          {{ hero.tagline }}
        </p>
        <div class="hero-actions">
          <a
            v-for="(button, index) in hero.actions"
            :key="button.link"
            class="hero-button"
            :class="index === 0 ? 'hero-button-primary' : 'hero-button-secondary'"
            :href="button.link"
          >
            {{ button.text }}
          </a>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <div class="phone-frame">
          <div class="phone-notch" />
          <div class="phone-screen">
            <Image
              :image="hero.image"
              class="phone-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 4rem 1.5rem 6rem;
  background: linear-gradient(135deg, #fff7f0 0%, #fff 50%, #fff0e6 100%);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.hero-title-gradient {
  background: linear-gradient(120deg, #d84315 30%, #e65100 70%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--mbrc-c-text-secondary);
  margin-bottom: 1rem;
}

.hero-tagline {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.hero-button-primary {
  color: #fff;
  background: linear-gradient(135deg, #e65100, #d84315);
  box-shadow: 0 4px 14px rgba(216, 67, 21, 0.3);
}

.hero-button-primary:hover {
  box-shadow: 0 6px 20px rgba(216, 67, 21, 0.4);
  transform: translateY(-1px);
}

.hero-button-secondary {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
}

.hero-button-secondary:hover {
  background: var(--vp-c-brand-soft);
  transform: translateY(-1px);
}

/* Phone frame */
.hero-image-wrapper {
  flex-shrink: 0;
}

.phone-frame {
  position: relative;
  width: 280px;
  background: #1a1a1a;
  border-radius: 36px;
  padding: 12px;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.4s ease;
}

.phone-frame:hover {
  transform: perspective(1000px) rotateY(0deg);
}

.phone-notch {
  width: 100px;
  height: 6px;
  background: #333;
  border-radius: 3px;
  margin: 4px auto 8px;
}

.phone-screen {
  border-radius: 24px;
  overflow: hidden;
  background: #000;
}

.phone-screenshot {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-tagline {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .phone-frame {
    width: 220px;
    transform: none;
  }

  .phone-frame:hover {
    transform: none;
  }
}
</style>

<style>
.dark .hero-section {
  background: linear-gradient(135deg, #1a1008 0%, var(--vp-c-bg) 50%, #1a0f06 100%);
}
</style>
