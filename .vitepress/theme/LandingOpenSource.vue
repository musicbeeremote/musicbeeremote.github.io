<template>
  <section class="oss-section">
    <div class="oss-container">
      <div class="oss-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 16.3996 19.1598 20.1355 15.2122 21.4732L14.9859 21.5469L12.082 13.997C13.151 13.95 14.001 13.0544 14.001 12C14.001 10.8954 13.1055 10 12.001 10C10.8964 10 10.001 10.8954 10.001 12C10.001 13.0768 10.8519 13.9548 11.918 13.9983L9.01501 21.5466L8.78975 21.4732C4.84212 20.1355 2.00098 16.3996 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2Z" />
        </svg>
      </div>
      <h2 class="oss-title">
        Free & Open Source
      </h2>
      <p class="oss-text">
        MusicBee Remote is licensed under GPLv3. The source code for both the Android app and the MusicBee plugin is available on GitHub. Contributions, bug reports, and feature requests are welcome.
      </p>
      <div class="oss-links">
        <a
          class="oss-button"
          href="https://github.com/musicbeeremote/mbrc"
        >
          Android App
        </a>
        <a
          class="oss-button oss-button-outline"
          href="https://github.com/musicbeeremote/mbrc-plugin"
        >
          MusicBee Plugin
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.oss-section {
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
}

.oss-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.oss-icon {
  width: 48px;
  height: 48px;
  color: #e65100;
  margin: 0 auto 1.5rem;
}

.oss-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.oss-text {
  font-size: 1.05rem;
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.oss-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.oss-button {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  color: #fff;
  background: #e65100;
}

.oss-button:hover {
  background: #d84315;
}

.oss-button-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

.oss-button-outline:hover {
  border-color: #e65100;
  background: rgba(230, 81, 0, 0.1);
}
</style>
