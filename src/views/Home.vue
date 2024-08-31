<template>
    <div class="home-container">
      <!-- Video ID Input Section -->
      <div class="video-id-input-section">
        <VideoIdInput />
      </div>
  
      <!-- Video Details Section -->
      <div class="video-details-section">
        <VideoDetails />
      </div>
    </div>
  </template>
  
  <script>
  import VideoIdInput from '@/components/VideoIdInput.vue';
  import VideoDetails from '@/components/VideoDetails.vue';
  </script>
  
  <style scoped>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .video-id-input-section {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
  }
  
  .video-details-section {
    width: 100%;
    max-width: 600px;
  }
  </style>
  