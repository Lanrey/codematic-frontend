<template>
  <div class="video-id-input">
    <input v-model="inputVideoId" placeholder="Enter YouTube Video ID" />
    <button @click="handleFetchVideoDetails">Fetch Video Details</button>
    <button @click="handleFetchComments">Fetch Comments</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useVideoStore } from '@/stores/modules/video'; // Adjust path as necessary
import { useCommentsStore } from '@/stores/modules/comments'; // Adjust path as necessar
import { useVideoIdStore } from '../stores/videoId';// Adjust path as necessary
import { useToast } from 'vue-toastification';

// Create a ref for the video ID input
const inputVideoId = ref<string>('');

// Access the Pinia stores
const videoIdStore = useVideoIdStore();
const videoStore = useVideoStore();
const commentsStore = useCommentsStore();

const videoId = computed(() => videoIdStore.videoId);

const toast = useToast();

// Method to handle setting the video ID and fetching video details
function handleFetchVideoDetails() {

 // error.value = null;
  if (inputVideoId.value.trim()) {
    videoIdStore.setVideoId(inputVideoId.value.trim());
    videoStore.fetchVideoDetails(videoId.value);
  } else {
    toast.error('Please enter a valid YouTube Video ID');
  }
}

// Method to handle setting the video ID and fetching comments
async function handleFetchComments() {

  //error.value = null;
  /*
  if (!videoStore.videoDetails) {
    error.value = 'Please fetch video details first'
    return;
  }
  */

  if (inputVideoId.value.trim()) {
    try {

      videoIdStore.setVideoId(inputVideoId.value.trim());
     const response =  await commentsStore.fetchComments(videoId.value);

     console.log("Response", response);
     if (!response.status) {

     toast.error(response.message);
 
     }
      
    } catch (error: any) {
     // error.value = err.message || 'Failed to fetch comments. Please try again'
     toast.error(error.message || 'Failed to fetch comments. Please try again');
    }
  
  } else {
    toast.error('Please enter a valid YouTube Video ID');
  }
}
</script>

<style scoped>
.video-id-input {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #cc0000;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  flex-grow: 1;
}
</style>
