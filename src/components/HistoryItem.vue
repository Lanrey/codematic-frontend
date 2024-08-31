<template>
  <div class="history-item">
    <p>{{ item.text }}</p>
    <small>{{ formattedDate }}</small>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return new Date(this.item.created_at).toLocaleString();
    },
  },
};
</script>

<style scoped>
.history-item {
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
p {
  margin: 0;
  font-weight: bold;
  color: #333
}
small {
  display: block;
  margin-top: 5px;
  color: #666;
}
</style>
