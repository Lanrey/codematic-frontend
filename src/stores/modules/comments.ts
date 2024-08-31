import { defineStore } from 'pinia';
import axios from 'axios';

// Define interfaces
export interface Comment {
  id: string;
  videoId: string;
  text: string;
  created_at: string;
  updated_at: string;
  commentId: string;
}

export interface Meta {
  total: number;
  perPage: number;
  totalPages: number;
  page: number;
}

export interface CommentsState {
  comments: Comment[];
  meta: Meta | null;
  loading: boolean;
  error: string | null;
}

export const useCommentsStore = defineStore('comments', {
  state: (): CommentsState => ({
    comments: [],
    meta: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchComments(videoId: string, page: number = 1) {
      this.loading = true;
      try {
        const response = await axios.get(`https://codematic-backend.onrender.com/v1/video/comments?perPage=100&page=${page}&videoId=${videoId}`);
        this.comments = response.data.data.data;
        this.meta = response.data.data.meta;
        console.log("meta", this.meta);
        this.error = null;
        return { status: true, message: "Comments Fetched Successfully"};
      } catch (error: any) {
        console.log("error", error);
        this.error = error.response.data.message || 'An error occurred';
        return { status: false, message: this.error};
      } finally {
        this.loading = false;
      }
    }
  },

  getters: {
    getComments: (state): Comment[] => state.comments,
    getMeta: (state): Meta | null => state.meta,
    isLoading: (state): boolean => state.loading,
    getError: (state): string | null => state.error,
  }
});
