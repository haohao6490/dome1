<template>
  <div>
    <h1>欢迎</h1>
    <p v-if="user">欢迎, {{ user.name }}</p>
    <button @click="fetchUserInfo">获取用户信息</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent', // 修改这里
  data() {
    return {
      user: null
    };
  },
  methods: {
    fetchUserInfo() {
      const token = localStorage.getItem('token');
      this.$axios.get('/getInfo', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
