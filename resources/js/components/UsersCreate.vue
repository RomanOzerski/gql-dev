<template>
  <div>
      <div v-if="message" class="alert">{{ message }}</div>
      <div v-if="!loaded">Loading...</div>
      <form @submit.prevent="onCreate($event)" v-else>
        <div class="form-group">
            <label for="user_name">Name</label>
            <input id="user_name" v-model="user.name" />
        </div>
        <div class="form-group">
            <label for="user_email">Email</label>
            <input id="user_email" type="email" v-model="user.email" />
        </div>
        <div class="form-group">
            <button type="submit" :disabled="saving">Create</button>
            <button :disabled="saving" @click.prevent="goBack()">Go Back</button>
        </div>
      </form>
  </div>
</template>

<script>
import api from '../api/users';


export default {
  name: 'UsersCreate',
  
  data() {
    return {
      message: null,
      loaded: true,
      saving: false,
      user: {
        id: null,
        name: "",
        email: ""
      },
    };
  },

  methods: {
    onCreate(event) {
      this.saving = true;

      api.create({
          name: this.user.name,
          email: this.user.email,
      }).then((response) => {
          this.message = 'Success! taking you back';
          setTimeout(() => this.message = null, 2000);
          this.user = response.data.data;
          setTimeout(() => this.$router.push('/users'), 2000);
      }).catch(error => {
          console.log(error)
      }).then(() => this.saving = false);
    },

    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  $green: lighten(green, 30%);
  $darkGreen: darken($green, 50%);
  .form-group label {
    display: block;
  }
  .alert {
      background: $green;
      color: $darkGreen;
      padding: 1rem;
      margin-bottom: 1rem;
      width: 50%;
      border: 1px solid $darkGreen;
      border-radius: 5px;
  }
</style>