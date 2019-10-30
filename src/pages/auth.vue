<template>
  <q-page class="padding">
  <q-card class="auth-tabs">
    <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Авторизация" />
          <q-tab name="register" label="Регистрация" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="register">
            <register />
          </q-tab-panel>

          <q-tab-panel name="login">
          	<login />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    'register' : require('components/Auth/Register.vue').default,
    'login' : require('components/Auth/Login.vue').default
  }
}
</script>

<style>
.auth-tabs {
	max-width:500px;
	margin: 0 auto;
	margin-top:1%;
}
</style>
