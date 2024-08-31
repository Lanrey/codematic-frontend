

// src/stores/useVideoStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';

// Define your interfaces (you can keep these in a types file if needed)
export interface VideoDetails {
  videoId: string;
  title: string;
  description: string;
  viewCount: string;
  likeCount: string;
}

export interface VideoState {
  videoDetails: VideoDetails | null;
  loading: boolean;
  error: string | null;
}

export const useVideoStore = defineStore('video', {
  state: (): VideoState => ({
    videoDetails: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchVideoDetails(videoId: string) {

      console.log("Fetching video details for:", videoId);
      this.loading = true;

      try {
        const response = await axios.get(`https://codematic-backend.onrender.com/v1/video/details?videoId=${videoId}`);
        this.videoDetails = response.data.data;
        this.error = null;
      } catch (error: any) {
        console.log("Error", error);
        this.error = error.response.data.message || 'An error occurred';
      } finally {
        this.loading = false;
      }
    }
  },

  getters: {
    getVideoDetails: (state): VideoDetails | null => state.videoDetails,
    isloading: (state): boolean => state.loading,
    getError: (state): string | null => state.error,
  }
});
