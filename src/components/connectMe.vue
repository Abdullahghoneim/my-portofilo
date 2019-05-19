<template>
  <div>
    <h3>Connect With Me</h3>
    <div
      v-if="messageSent"
      class="alert alert-success mt-3"
    >Message Has been Sent , Thanks {{message.name}} For Feedback</div>
    <div
      v-if="errorMessage"
      class="alert alert-danger mt-3"
    >There are a proplem to connect to Server</div>
    <div class="connect-with-me">
      <div class="row">
        <form @submit.prevent="submitMessage" class="mt-3 col-lg-8" autocomplete="off">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Name"
              name="name"
              @blur="$v.message.name.$touch()"
              v-model="message.name"
            >

            <div v-if="$v.message.name.$error" class="alert alert-danger">Name is Required</div>
          </div>
          <div class="form-group mt-4">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Email"
              name="email"
              @blur="$v.message.email.$touch()"
              v-model="message.email"
            >
            <div
              v-if="$v.message.email.$error"
              class="alert alert-danger"
            >Please Provide a Valid Email</div>
          </div>
          <div class="form-group mt-4">
            <label for="phone">Phone</label>
            <input
              type="number"
              id="phone"
              placeholder="your Phone"
              class="form-control"
              v-model="message.phone"
            >
          </div>
          <div class="form-group mt-4">
            <label for="message">Message</label>
            <textarea
              name="message"
              v-model="message.message"
              id="message"
              @blur="$v.message.message.$touch()"
              class="form-control"
              rows="3"
            ></textarea>
            <div v-if="$v.message.message.$error" class="alert alert-danger">Message is Required</div>
          </div>
          <button type="submit" :disabled="$v.$invalid" class="btn btn-info btn-block mt-5">
            <span v-if="notSpinner">Send A Message</span>
            <div v-if="spinner" class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      message: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      messageSent: false,
      notSpinner: true,
      spinner: false,
      errorMessage: false
    };
  },
  validations: {
    message: {
      name: { required },
      email: { required, email },
      message: { required }
    }
  },
  methods: {
    submitMessage() {
      this.notSpinner = false;
      this.spinner = true;
      this.$http
        .post(
          "https://my-portofilo-connectme.firebaseio.com/messages.json",
          this.message
        )
        .then(
          response => {
            console.log(response);
            this.messageSent = true;
            this.notSpinner = true;
            this.spinner = false;
          },
          error => {
            this.errorMessage = true;
            console.log(error);
          }
        );
    }
  }
};
</script>
<style lang="scss" scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
i {
  color: green;
  float: right;
}
</style>
