<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          CRM система
        </q-toolbar-title>
        <q-btn to="/" flat icon-right="account_circle" label="Войти" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
<q-list bordered padding class="rounded-borders text-primary">
      <q-item
        to="/dashboard"
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>

        <q-item-section>Главная</q-item-section>
      </q-item>
      <q-item
        to="/about"
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="apartment" />
        </q-item-section>

        <q-item-section>О компании</q-item-section>
      </q-item>

      <q-item
        to="/map"
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="map" />
        </q-item-section>

        <q-item-section>Карта офиса</q-item-section>
      </q-item>

      <q-item
      to="/addressbook"
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="link = 'trash'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="menu_book" />
        </q-item-section>

        <q-item-section>Адресная книга</q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item
        to="/users"
        clickable
        v-ripple
        :active="link === 'settings'"
        @click="link = 'settings'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="account_box" />
        </q-item-section>

        <q-item-section>Пользователи</q-item-section>
      </q-item>

      <q-item
      to="/groups"
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="people" />
        </q-item-section>

        <q-item-section>Группы</q-item-section>
      </q-item>
        <q-item
        to="/calendar"
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="date_range" />
        </q-item-section>

        <q-item-section>Календарь</q-item-section>
      </q-item>
        <q-item
        to="/charts"
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="bar_chart" />
        </q-item-section>

        <q-item-section>Графики</q-item-section>
      </q-item>
      <q-separator spaced />
        <q-item
        to="/pools"
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Опросы</q-item-section>
      </q-item>
        <q-item
        to="/structure"
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'wc'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="360" />
        </q-item-section>

        <q-item-section>Структура</q-item-section>
      </q-item>
        <q-item
        to="/services"
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="storefront" />
        </q-item-section>

        <q-item-section>Услуги</q-item-section>
      </q-item>
        <q-item
        to="/knowledge"
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>База знаний</q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-tabs
        v-model="tab"
        indicator-color="red"
        class="bg-primary text-white shadow-2"
      >
        <q-tab to="/" icon="home" label="Главная" />
        <q-tab to="/settings" icon="settings"  label="Настройки" />
        <q-tab to="/services" icon="storefront"  label="Услуги" />

      </q-tabs>
      </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
