import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useVideoIdStore = defineStore('videoId', () => {
  const videoId = ref<string>('');
  
  function setVideoId(id: string) {
    videoId.value = id;
  }
  
  return { videoId, setVideoId };
});
