<template>
  <div>
    <h2>登录</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">用户名:</label>
        <input type="text" v-model="username" id="username">
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" v-model="password" id="password">
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent', // 修改这里
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.$router.push('/');
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
