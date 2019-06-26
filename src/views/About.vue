<template>
  <div class="about">
    <div class="topblurb">
      <v-container>
        <div class=name>
          The Bible for Food Recovery
        </div>
        <div class=verse>
          He sent His Word and healed them, and delivered them from their destruction. ~Psalm 107:20
        </div>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm8 md6>
            <div class=description>
              <p>The Bible for Food Recovery has been organized to offer support for those who struggle with food addictions and eating disorders.</p>
              <p>We provide teaching that connects abstinence and faith in the Lord Jesus Christ.</p>
              <p>We encourage the daily reading, studying and application of the Bible for a lifetime of binge-free, abstinent living -- one day at a time.</p>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center align-center class=social-media>
          <a href='https://www.instagram.com/bibleforfoodrecovery/'>
            <v-icon size=80>fab fa-instagram</v-icon>
          </a>
          <a href='https://www.facebook.com/The-Bible-for-Food-Recovery-Inc-340118249367009/'>
            <v-icon size=80>fab fa-facebook</v-icon>
          </a>
          <a href='https://www.youtube.com/user/pat5018'>
            <v-icon size=80>fab fa-youtube</v-icon>
          </a>
        </v-layout>
      </v-container>
    </div>
    <div class="moreinfo">
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm10 md8>
            <h2>Are you tired of struggling with food?</h2>
            <div class="lowersubtitle text-uppercase">Join with us in Bible for Food.</div>
            <div class=verse>...let us throw off everything that hinders... ~ Hebrews 12:1</div>
            <p class=bfr-body>The Bible for Food Recovery is a group of Christian volunteers who have accepted the seriousness of being disciplined with eating. We have learned through many failures that undisciplined eating opens the door to much unnecessary suffering and pain.</p>
            <p class=bfr-body>We embrace disciplined eating. We endorse using a food plan as a means to fast. We have given up random and impulsive eating (i.e. “food popping”) because it became a hindrance to working excellently for the Lord.</p>
            <p class=bfr-body>We are abstinent for Jesus’ sake. We desire to be alert and strong in order to answer God’s call upon our lives. We are each strongly committed to daily prayer, Bible study, evangelism, and discipleship.</p>
            <p class=bfr-body>Bible for Food is largely a phone ministry. Coming to the weekly phone meetings is the best way to learn about us. This monthly calendar gives the times, topics, phone number, and pin, so that you can explore and see if God might be calling you to join with us.</p>
            <p class=bfr-body>The phone meetings are open meetings—anyone can listen in and be encouraged. You come on the line muted, and can click on and off the meetings whenever you desire.</p>
            <p class=bfr-body>Besides the phone meetings, Bible for Food has other services:
              <ul>
                <li>The 90-Day Shepherd program</li>
                <li>Daily food sponsors</li>
                <li>Half-day Bible immersion workshops</li>
                <li>Weekend retreats three times a year</li>
              </ul>
            </p>
            <p class=bfr-body>We have three publications that can be viewed and purchased on Amazon:
              <ol>
                <li><a href="https://www.amazon.com/NINETY-DAYS-Patricia-D-Nordstrom/dp/1606479377">Ninety Days: Encouragement for the Christian Overeater </a></li>
                <li><a href="https://www.amazon.com/Think-Fast-Toward-Lifetime-God-honoring/dp/0578196328/ref=pd_lpo_sbs_14_img_1?_encoding=UTF8&amp;psc=1&amp;refRID=GE93B18RFH0ZCPF8NCW7">Think Fast:31 Days Toward a Lifetime of God-Honoring Eating</a></li>
                <li><a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&amp;field-keywords=Bible+Immersion+book&amp;rh=i%3Aaps%2Ck%3ABible+Immersion+book">Bible Immersion: A Life-Changing Way to Encounter the Word of God</a></li>
              </ol>  
              The “Ninety Days” book is also available in a Spanish edition: <a href="https://www.amazon.com/Noventa-D%C3%ADas-Incentivo-Personas-Cristianas/dp/1490836322/ref=sr_1_4?s=books&amp;ie=UTF8&amp;qid=1521731918&amp;sr=1-4&amp;keywords=noventa+dias">Noventa Dias</a>.</p>
            <p class=bfr-body>Many Christians are being hindered and even placed on the sidelines because of their eating and weight issues. This doesn’t have to be! Please pass along this information about The Bible for Food Recovery. Please keep this ministry in your prayers.</p>
          </v-flex>
        </v-layout>
        <div class=contact>
          <span>Contact</span><br/>
          <a href=mailto:bibleforfood@gmail.com><span>bibleforfood@gmail.com</span></a><br/>
          <a href=tel:214-205-5602><span>(214) 205-5602</span></a><br/>
        </div>
        <div class=nonprofit><span>The Bible for Food Recovery is a registered 501(c)(3) non-profit.</span></div>
      </v-container>
    </div>
  </div>
</template>

<style lang="stylus">
  .about
    .name
      font-size: 6.1em
      font-family: 'Roboto', sans-serif
      font-weight: 300
      padding: 25px
    .description
      font-family: 'Merriweather', serif
      font-size: 1.4em
      font-weight: 400
      text-align: justify
      padding: 50px
    .social-media
      > *
        padding: 20px
      a
        text-decoration: none
    .lowersubtitle
      padding-top: 10px
      font-size: 1.4em
      font-family: 'Roboto', sans-serif
    .contact
      text-align: center
      padding-top: 80px
      p
        margin: 0
        font-size: 1em
    .nonprofit
      text-align: center
      padding-top: 30px
      font-size: 1em
  .topblurb
    background-color: #FFF
    background-image: linear-gradient(
      to bottom, rgba(255,255,255,0.6), #FFF
    ), url('../assets/flower-bg.jpg')
    background-repeat: no-repeat
    text-align: center
  .moreinfo
    padding-top: 20px
    background-color: #FFF
    background-image: linear-gradient(
      to bottom, #FFF, rgba(255,255,255,0.6)
    ), url('../assets/mountain.jpg')
    background-repeat: no-repeat
    text-align: center
</style>
