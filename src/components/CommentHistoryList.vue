<template>
    <div class="comment-history-list">
      <h2>Comments</h2>
      <div v-if="comments.length" class="history-wrapper">
        <HistoryItem v-for="item in comments" :key="item.commentId" :item="item" />
      </div>
      <p v-else>No history to display.</p>
      <Pagination v-if="meta" :meta="meta" @page-change="fetchComments" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, watch, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCommentsStore } from '@/stores/modules/comments';
  import { useVideoIdStore } from '@/stores/videoId';
  import HistoryItem from './HistoryItem.vue';
  import Pagination from './Pagination.vue';
  
  // Access the Pinia stores
  const commentsStore = useCommentsStore();
  const videoIdStore = useVideoIdStore();
  
  // Use storeToRefs for reactive store properties
  const { comments, meta, loading, error } = storeToRefs(commentsStore);
  const { videoId } = storeToRefs(videoIdStore);
  
  // Function to fetch comments based on the videoId and current page
  const fetchComments = (page = 1) => {
    if (videoId.value) {
      commentsStore.fetchComments(videoId.value, page);
    } else {
      console.warn('No video ID provided.');
    }
  };

  onMounted(() => fetchComments());

// Watch for changes in videoId and fetch comments when it changes
watch(videoId, (newVideoId) => {
  if (newVideoId) {
    fetchComments();
  }
});
  

  </script>
<style scoped>
.comment-history-list {
  flex: 1;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
}

.history-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.history-wrapper p {
  font-weight: bold;
  color: #333; /* Darker color for better readability */
}

@media (max-width: 768px) {
  .comment-history-list {
    padding: 10px;
    max-width: 100%;
  }

  .history-wrapper p {
    font-size: 14px;
  }
}
</style>