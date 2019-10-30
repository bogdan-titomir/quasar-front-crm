<template>
<form @submit.prevent="submitForm">
<div class="row q-mb-md">
    <q-banner class="bg-grey-3 col" >
      <template v-slot:avatar>
        <q-icon name="account_circle" color="primary" />
      </template>
      Войдите в систему
    </q-banner>
</div>

<div class="row q-mb-md">
 <q-input outlined class="col" ref="email" v-model="formData.email" :rules="[ val => isValidEmailAddress(val) || 'Укажите правильный email адрес.']" lazy-rules label="Введите email" />
 </div>
 <div class="row q-mb-md">
 <q-input outlined class="col" ref="password" v-model="formData.password" :rules="[ val => val.length >= 6 || 'Минимальная длина 6 символов.']" lazy-rules label="Введите пароль" type="password" />
 </div>
 <div class="row q-mb-md">
 <q-btn type="submit" color="primary" label="Войти" />
 </div>
</form>
</template>

<script>
export default {
	data() {
		return {
			formData: {
			email: '',
			password: ''
			}
		}
	},
  methods: {
    isValidEmailAddress(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        console.log('register.user')
      }
    }
  }
}
</script>
