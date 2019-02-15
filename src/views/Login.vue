<template>
  <div class="mask d-flex flex-row justify-content-center align-items-center">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <form class="bg-light p-3 rounded shadow-lg">
          <div class="form-group">
            <!-- <label for="password">Login</label> -->
            <input
              type="password"
              class="form-control"
              :class="{
                'is-invalid': isPasswordInvalid
              }"
              id="password"
              placeholder="Password"
              v-model="password"
            >
            <div v-if="isPasswordInvalid" class="invalid-feedback">Incorrect password</div>
          </div>
          <button type="submit" class="btn btn-primary" @click="handleSubmit">Enter</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    password: "",
    isPasswordInvalid: false
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const { password } = this;
      if (password.length > 0 && password === "idigresstv") {
        localStorage.setItem("isLoggedIn", true);
        this.$router.push("watch");
      } else {
        this.password = "";
        this.isPasswordInvalid = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.mask {
  width: 100vw;
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/reel-poster.jpg);
    background-position: center;
    background-repeat: no-repeat;

    filter: blur(2px);
    transform: scale(1.1);
  }
}
</style>
