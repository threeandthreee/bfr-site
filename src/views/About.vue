<template>
  <div class="about">
    <div class=name>
      The Bible for Food Recovery
    </div>
    <div class=verse>
      He sent His Word and healed them, and delivered them from their destruction. ~Psalm 107:20
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <div class=description>
          The Bible for Food Recovery has been organized to offer support for those who struggle with food addictions and eating disorders. We provide teaching that connects abstinence and faith in the Lord Jesus Christ. We encourage the daily reading, studying and application of the Bible for a lifetime of binge-free, abstinent living -- one day at a time.
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center align-center class=social-media>
      <v-icon size=80>fab fa-instagram</v-icon>
      <v-icon size=80>fab fa-facebook-square</v-icon>
      <v-icon size=80>fab fa-youtube-square</v-icon>
    </v-layout>
  </div>
</template>

<style lang="stylus">
  .about
    text-align: center
    .name
      font-size: 6.3em
      font-family: 'Roboto', sans-serif
      font-weight: 100
    .verse
      font-family: 'Dancing Script', cursive
      font-weight: 100
      font-size: 1.9em
      color: #777
    .description
      font-family: 'Merriweather', serif
      font-size: 1.4em
      font-weight: 400
      text-align: justify
      padding-top: 50px
    .social-media
      margin-top: 20px; 
      > *
        padding: 20px
</style>
