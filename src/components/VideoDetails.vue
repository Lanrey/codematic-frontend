<template>
  <div class="video-details-container">
    <div v-if="loading" class="loading">Loading video details...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <div v-else-if="videoDetails" class="video-details">
      <h2 class="title">{{ videoDetails.title }}</h2>
      <div class="stats">
        <span><strong>Views:</strong> {{ videoDetails.viewCount }}</span>
        <span><strong>Likes:</strong> {{ videoDetails.likeCount }}</span>
      </div>
      <p class="description">{{ videoDetails.description }}</p>
    </div>
    <div v-else class="no-data">No video details available.</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useVideoStore } from '@/stores/modules/video';
import { useVideoIdStore } from '@/stores/videoId';

const videoStore = useVideoStore();
const videoIdStore = useVideoIdStore();

const { videoDetails, loading, error } = storeToRefs(videoStore);
const { videoId } = storeToRefs(videoIdStore);

const fetchVideoDetails = () => {
  if (videoId.value) {
    videoStore.fetchVideoDetails(videoId.value);
  }
};

onMounted(fetchVideoDetails);
watch(videoId, fetchVideoDetails);

const formatNumber = (num: number): string => {
  return num.toLocaleString();
};
</script>

<!--<style scoped>
.video-details-container {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.loading, .error, .no-data {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}

.error { color: #ff0000; }

.video-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 1.5em;
  color: #333;
  margin: 0;
}

.stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #666;
}

.description {
  font-size: 1em;
  color: #444;
  line-height: 1.5;
  margin: 0;
}
</style>--->


<style scoped>
.video-details-container {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.loading,
.error {
  text-align: center;
  color: #ff0000;
  font-weight: bold;
}

.stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: #666;
}

.video-details {
  text-align: left;
}

.title {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #555;
}

p {
  margin: 5px 0;
}

strong {
  color: #000;
}

@media (max-width: 768px) {
  .video-details-container {
    padding: 15px;
    max-width: 100%; /* Full width on mobile */
  }

  .title {
    font-size: 22px;
  }

  .description {
    font-size: 16px;
  }
}
</style>