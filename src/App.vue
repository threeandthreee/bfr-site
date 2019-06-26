<template>
  <div id="app">
    <v-toolbar dark color="#40B" class=toolbar>
      <v-toolbar-title>
        The Bible for Food Recovery
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn flat to='/'>About</v-btn>
        <v-btn flat to='/resources'>Resources</v-btn>
        <v-btn flat to='/phonemeetings'>Phone Meetings</v-btn>
        <v-btn flat>Daily Reading</v-btn>
        <v-btn flat>Events</v-btn>
        <v-btn flat>How to Help</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>
<style lang="stylus">
  .toolbar
    font-family: sans-serif
    font-weight: 100
  h2
    font-size: 3.2em
    font-family: 'Roboto', sans-serif
    font-weight: 300
  p
    font-size: 1.2em
    font-family: 'Merriweather', serif
    text-align: justify
  .verse
    font-family: 'Dancing Script', cursive
    font-size: 1.7em
    color: #40B
    padding: 25px
</style>
