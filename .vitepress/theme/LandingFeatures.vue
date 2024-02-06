<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  details: string;
}

interface LandingFeaturesProps {
  features: Feature[];
}

defineProps<LandingFeaturesProps>();
</script>

<template>
  <section class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Key Features
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Explore the powerful features of our application that make it stand out.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white border rounded-lg p-6 text-center"
        >
          <div class="flex justify-center mb-6 text-brand">
            <div
              class="w-12 h-12"
              v-html="feature.icon"
            />
          </div>
          <h3 class="text-lg font-semibold text-gray-900">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            {{ feature.details }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
