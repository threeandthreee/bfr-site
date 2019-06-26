<template>
  <div id="app">
    <v-toolbar dark color="blue">
      <v-toolbar-items>
        <v-btn flat>About</v-btn>
        <v-btn flat>Resources</v-btn>
        <v-btn flat>Phone Bridge Bible Study</v-btn>
        <v-btn flat>Daily Reading</v-btn>
        <v-btn flat>Events</v-btn>
        <v-btn flat>How to Help</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <router-view/>
    </v-container>
  </div>
</template>
