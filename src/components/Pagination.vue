<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="pagination">
      <button :disabled="meta.page <= 1" @click="goToPage(meta.page - 1)">Previous</button>
      <span>Page {{ meta.page }} of {{ meta.totalPages }}</span>
      <button :disabled="meta.page >= meta.totalPages" @click="goToPage(meta.page + 1)">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      meta: {
        type: Object,
        required: true
      }
    },
    methods: {
      goToPage(page) {
        if (page > 0 && page <= this.meta.totalPages) {
          this.$emit('page-change', page);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center; /* Center the buttons and page number */
    align-items: center;
    gap: 10px; /* Add space between buttons and page number */
    margin-top: 20px;
  }
  
  button {
    padding: 10px 15px; /* Increase padding for better visibility */
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold; /* Make the text bold */
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  span {
    font-weight: bold; /* Emphasize the page number */
    color: #333;
  }
  </style>
  