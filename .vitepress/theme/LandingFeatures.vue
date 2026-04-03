<script setup lang="ts">
import { withBase } from 'vitepress';

interface Feature {
  title: string;
  details: string;
  image?: string;
}

interface ExtraFeature {
  icon: string;
  title: string;
  details: string;
}

const { features, extras } = defineProps<{
  features: Feature[];
  extras: ExtraFeature[];
}>();
</script>

<template>
  <!-- Main features with screenshots -->
  <section class="features-section">
    <div class="features-container">
      <h2 class="section-title">
        What you can do
      </h2>

      <div
        v-for="(feature, index) in features"
        :key="feature.title"
        class="feature-row"
        :class="{ 'feature-row-reverse': index % 2 === 1 }"
      >
        <div class="feature-text">
          <h3 class="feature-name">
            {{ feature.title }}
          </h3>
          <p class="feature-details">
            {{ feature.details }}
          </p>
        </div>
        <div
          v-if="feature.image"
          class="feature-image-wrapper"
        >
          <div class="feature-phone">
            <img
              :src="withBase(feature.image)"
              :alt="feature.title"
              class="feature-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Extra features grid -->
  <section class="extras-section">
    <div class="extras-container">
      <h2 class="section-title">
        And more
      </h2>

      <div class="extras-grid">
        <div
          v-for="extra in extras"
          :key="extra.title"
          class="extra-card"
        >
          <div
            class="extra-icon"
            v-html="extra.icon"
          />
          <h3 class="extra-name">
            {{ extra.title }}
          </h3>
          <p class="extra-details">
            {{ extra.details }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 5rem 1.5rem 2rem;
  background: #fff;
}

.features-container,
.extras-container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3rem;
}

/* Feature rows with alternating layout */
.feature-row {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;
}

.feature-row-reverse {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
}

.feature-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.feature-details {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
}

.feature-image-wrapper {
  flex-shrink: 0;
}

.feature-phone {
  width: 220px;
  background: #1a1a1a;
  border-radius: 28px;
  padding: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.feature-screenshot {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .feature-row,
  .feature-row-reverse {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .feature-phone {
    width: 180px;
  }
}

/* Extra features */
.extras-section {
  padding: 3rem 1.5rem 5rem;
  background: #fafafa;
}

.extras-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .extras-grid {
    grid-template-columns: 1fr;
  }
}

.extra-card {
  padding: 2rem 1.5rem;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  text-align: center;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.extra-card:hover {
  border-color: #e65100;
  box-shadow: 0 4px 16px rgba(230, 81, 0, 0.08);
}

.extra-icon {
  width: 36px;
  height: 36px;
  color: #e65100;
  margin: 0 auto 0.75rem;
}

.extra-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.extra-details {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.6;
}
</style>
