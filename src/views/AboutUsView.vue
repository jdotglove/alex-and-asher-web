<script setup lang="ts">
import DesktopFooter from '@/components/footers/DesktopFooter.vue';
import DesktopHeader from '@/components/headers/DesktopHeader.vue';
import MobileHeader from '@/components/headers/MobileHeader.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: "Alex & Asher - About Us Page"
});
</script>

<template>
  <main class="about-us-page-container">
    <DesktopHeader />
    <MobileHeader />
    <div>
      <h2 class="about-us-page-title">
        About Us
      </h2>
    </div>
    <section class="about-us-page-content">
      <div class="about-us-description-container">
        <div class="about-us-description-text">
          <p>Alex & Asher is more than just wrenches and water filtration. Jordon Alexander Glover and Jarod Asher
            Glover, brothers, created an avenue to not only flex their respective skills, but also to be a source of
            change they wanted to see within their business and personal communities, thus Alex & Asher was born.</p>
          <p>Alex & Asher is a maintenance and repair company focused on future-forward solutions, ease and clarity of
            communication, and well-trained personnel. From designing comprehensive preventative maintenance plans
            molded to client needs to offering training classes to help shop owners become more familiar with their
            equipment. Functional and reliable equipment is the keystone to any successful food and beverage shop.
            Alex & Asher is here to ensure specialty shops receive special attention.</p>
        </div>
        <div class="about-us-photo-and-text">
          <p>Our mission is to create a supportive foundation for the North Carolina specialty food and beverage shop
            via extensive client communication and well-trained attentive staff.</p>
          <img class="draft-photo" src="/assets/Draft-Pic-resized.webp" alt="draft taps" />
        </div>
      </div>
      <div class="about-team-container">
        <h3 class="about-team-header">Team</h3>
        <div class="desktop-about-jordon-container">
          <div class="about-jordon-text-container">
            <h4>Jordon A. Glover</h4>
            <p class="occupation-text">Founder / Head Technician</p>
            <div class="jordon-info-text">
              <p>Jordon was a genius by the tender age of 6 months. With his intellectual prowess he knew his destiny
                was to take over the world. The first step in world domination is to establish a business that caters
                to the maintenance and repair needs of the food & beverage community. Raleigh, NC. That&apos;s where
                it would all begin.</p>
              <p>Using his experience-earned knowledge of mechanical engineering, coffee, and business he created
                <strong>Alex & Asher</strong>. Jordon Alexander Glover knew he could not be stopped once he placed the
                first business card into the open & receiving hands of his awaiting public.
              </p>
              <p>Propelled by the sight of the empty throne of this glittering blue orb and his quest for infinite
                knowledge, Jordon A. Glover will soon be the mechanically savvy overlord of the new world.</p>
            </div>
          </div>
          <img src="/assets/jordon-pic.webp" class="jordon-pic" alt="picture of jordon glover">
        </div>
        <div class="mobile-about-jordon-container">
          <div class="about-jordon-text-container">
            <div class="about-jordon-header">
              <h4>Jordon A. Glover</h4><img src="/assets/jordon-pic.webp" class="jordon-pic"
                alt="picture of jordon glover">
            </div>
            <p class="occupation-text">Founder / Head Technician</p>
            <div class="jordon-info-text">
              <p>Jordon was a genius by the tender age of 6 months. With his intellectual prowess he knew his destiny
                was to take over the world. The first step in world domination is to establish a business that caters
                to the maintenance and repair needs of the food & beverage community. Raleigh, NC. That&apos;s where
                it would all begin.</p>
              <p>Using his experience-earned knowledge of mechanical engineering, coffee, and business he created
                <strong>Alex & Asher</strong>. Jordon Alexander Glover knew he could not be stopped once he placed the
                first business card into the open & receiving hands of his awaiting public.
              </p>
              <p>Propelled by the sight of the empty throne of this glittering blue orb and his quest for infinite
                knowledge, Jordon A. Glover will soon be the mechanically savvy overlord of the new world.</p>
            </div>
          </div>

        </div>
        <div class="desktop-about-autumn-container">
          <div class="about-autumn-text-container">
            <h4>Autumn Ingool</h4>
            <p class="occupation-text">Oraculum Coffee<br>SCA Certified Barista Skills<br>Trainer</p>
          </div>
          <img src="/assets/autumn-pic.webp" class="autumn-pic" alt="picture of autumn ingool">
        </div>
        <div class="mobile-about-autumn-container">
          <div class="about-autumn-text-container">
            <div class="about-autumn-header">
              <h4>Autumn Ingool</h4><img src="/assets/autumn-pic.webp" class="autumn-pic"
                alt="picture of autumn ingool">
            </div>
            <p class="occupation-text">Oraculum Coffee<br>SCA Certified Barista Skills<br>Trainer</p>
          </div>

        </div>
      </div>

    </section>
    <DesktopFooter />
  </main>
</template>

<style lang="css" scoped>
.about-team-header {
  padding: 0 0 0 24px;
  margin: 44px 0px;
}

@media (max-width: 961px) {
  .about-us-description-container {
    display: flex;
    box-sizing: border-box;
    margin: 1rem;
    flex-wrap: wrap;
  }

  .desktop-about-jordon-container {
    display: none;
  }

  .desktop-about-autumn-container {
    display: none;
  }

  .mobile-about-jordon-container {
    background-color: #FFF3E4;
    padding: 17px;
  }

  .mobile-about-autumn-container {
    background-color: #FFF3E4;
    padding: 17px;
    margin-top: 60px;
  }

  .about-us-page-title {
    font: 50px "Crimson Text", serif;
    padding: 25px 30px;
    margin-top: 0;
  }

  .about-us-photo-and-text {
    font: 19px "Crimson Text", serif;
    gap: 20px;
    display: grid;
  }

  .about-us-description-text {
    display: block;
    flex-basis: 100% !important;
  }

  .draft-photo {
    padding-top: 30px;
    order: -1;
    width: 100%;
    height: 70lvw;
  }

  .about-jordon-text-container h4 {
    font: 40px "Crimson Text", serif;
    margin-top: 0;
    margin-bottom: 32px;
  }

  .about-autumn-text-container h4 {
    font: 40px "Crimson Text", serif;
    margin-top: 0;
    margin-bottom: 32px;
  }

  .about-team-container>h3 {
    font: 31px "Crimson Text", serif;
    padding-left: 24px;
  }

  .about-team-container {
    margin: 1rem;
  }

  .about-jordon-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .about-autumn-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

}

@media (min-width: 962px) {
  .about-us-page-title {
    font: 72px "Crimson Text", serif;
    padding: 50px 60px 55px;
    margin-top: 30px;
  }

  .about-us-description-text {
    padding-right: 32px;
  }

  .about-us-description-text>p {
    margin-top: 0;
  }

  .about-us-description-container {
    display: flex;
    column-gap: 3rem;
    margin: 2rem 4rem 7rem 4rem;
  }

  .draft-photo {
    width: 23lvw;
    height: 18lvw;
  }

  .about-us-photo-and-text {
    font: 27px "Crimson Text", serif;
    padding-left: 32px;
  }

  .about-us-photo-and-text>p {
    margin-top: 0;
    text-align: left;
    line-height: 1.25;
  }

  .about-team-container {
    margin: 2rem 4rem 7rem 4rem;
  }

  .about-team-container>h3 {
    font: 44px "Crimson Text", serif;
    padding-left: 24px;
  }

  .desktop-about-jordon-container {
    background-color: #FFF3E4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
    padding: 17px;
  }

  .desktop-about-autumn-container {
    background-color: #FFF3E4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
    padding: 17px;
  }

  .mobile-about-jordon-container {
    display: none;
  }

  .mobile-about-autumn-container {
    display: none;
  }

  .jordon-pic {
    max-width: 100%;
    max-height: 60lvw;
  }

  .about-jordon-text-container>h4 {
    font: 56.5px "Crimson Text", serif;
    margin-top: 0;
    margin-bottom: 32px;
  }

  .about-jordon-text-container {
    height: fit-content;
    align-self: center;
  }

  .occupation-text {
    font: 16.8px "Nunito Sans", sans-serif;
    margin-bottom: 40px;
  }

  .jordon-info-text>p {
    margin-top: 0;
    font: 16.8px "PT Serif";
    color: #434A56;
    line-height: 1.75;
    max-width: 602px;
  }

  .jordon-info-text {
    display: grid;
    row-gap: 20px;
  }

  .desktop-about-autumn-container {
    background-color: #FFF3E4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
    padding: 17px;
    margin-top: 60px;
  }

  .autumn-pic {
    max-width: 100%;
    max-height: 60lvw;
  }

  .about-autumn-text-container>h4 {
    font: 56.5px "Crimson Text", serif;
    margin-top: 0;
    margin-bottom: 32px;
  }

  .about-autumn-text-container {
    height: fit-content;
    align-self: center;
  }
}

.about-us-description-text {
  font: 20px "PT Serif";
  color: #434A56;
  line-height: 2;
}

.about-us-description-text>p {
  margin-top: 0;
}

.about-us-photo-and-text>p {
  margin-top: 0;
  text-align: left;
  line-height: 1.25;
}

.jordon-pic {
  max-width: 100%;
  max-height: 60lvw;
}

.about-jordon-text-container>h4 {
  font: 56.5px "Crimson Text", serif;
  margin-top: 0;
  margin-bottom: 32px;
}

.about-jordon-text-container {
  height: fit-content;
  align-self: center;
}

.occupation-text {
  font: 16.8px "Nunito Sans", sans-serif;
  margin-bottom: 40px;
}

.jordon-info-text>p {
  margin-top: 0;
  font: 16.8px "PT Serif";
  color: #434A56;
  line-height: 1.75;
  max-width: 602px;
}

.jordon-info-text {
  display: grid;
  row-gap: 20px;
}

.about-autumn-container {
  background-color: #FFF3E4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1;
  padding: 17px;
  margin-top: 60px;
}

.autumn-pic {
  max-width: 100%;
  max-height: 60lvw;
}

.about-autumn-text-container>h4 {
  font: 56.5px "Crimson Text", serif;
  margin-top: 0;
  margin-bottom: 32px;
}

.about-autumn-text-container {
  height: fit-content;
  align-self: center;
}

.about-us-page-title {
  text-align: center;
  align-self: stretch;
  margin-bottom: 0px;
  color: #13263A;
}
</style>
