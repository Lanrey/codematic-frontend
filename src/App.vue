<template>
  <div id="app">
    <VideoIdInput />
    <div class="content">
      <VideoDetails />
      <CommentHistoryList />
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoIdInput from './components/VideoIdInput.vue'
import VideoDetails from './components/VideoDetails.vue'
import CommentHistoryList from './components/CommentHistoryList.vue'
</script>


<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1e1e1e; /* Dark background for contrast */
  padding: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  max-width: 1000px; /* Limit width on large screens */
  margin: 0 auto;
}

@media (max-width: 768px) {
  .content {
    width: 100%; /* Full width on mobile */
    gap: 15px; /* Slightly reduce gap on mobile */
  }
}
</style>