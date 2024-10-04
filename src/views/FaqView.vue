<template>
  <div class="container">
    <MobileMenu :isOpen="isMenuOpen" @close="toggleMenu" />
    <TopInfo />
    <NavBar @toggle="toggleMenu" />
    <SecondHeader :headInfo="headerData" />
    <div class="faq-wrapper">
      <FaqContacts class="faq-contacts" />
      <FaqAccordion />
    </div>
    <div class="faq-bottom">
      <div class="bottom-text">
        We hope this electrician FAQ has helped guide you in your residential electric project.
        Still have questions? Electricians of Los Angeles has supplied California residents and
        businesses with residential electrical services for over 20 years. From installations to
        upgrades to repairs, our team of fully licensed and insured electrical technicians promises
        quality work. Contact us today to schedule your free estimate!
      </div>
      <ReviewComponent />
    </div>
    <FooterSection />
  </div>
</template>

<script>
import TopInfo from '@/components/TopInfo.vue'
import NavBar from '@/components/NavBar.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import SecondHeader from '@/components/SecondHeader.vue'
import FooterSection from '@/sections/FooterSection.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'
import FaqContacts from '@/components/FaqContacts.vue'
import ReviewComponent from '@/components/ReviewComponent.vue'

export default {
  name: 'FaqView',
  components: {
    TopInfo,
    NavBar,
    MobileMenu,
    SecondHeader,
    FooterSection,
    FaqAccordion,
    FaqContacts,
    ReviewComponent
  },
  data() {
    return {
      headerData: {
        img: './images/faq.jpg',
        title: 'FREQUENTLY ASKED QUESTIONS'
      },
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.faq-wrapper {
  display: flex;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  gap: 240px;
  margin-top: 90px;
}
.faq-contacts {
  margin-top: 95px;
}
.faq-bottom {
  display: flex;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-top: 90px;
  align-items: center;
}
.bottom-text {
  max-width: 880px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 20px;
  line-height: 26px;
}

@media (max-width: 1375px) {
  .faq-wrapper {
    padding: 25px;
  }
  .faq-bottom {
    padding: 25px;
  }
}
@media (max-width: 1220px) {
  .faq-wrapper {
    flex-direction: column;
  }
  .faq-contacts {
    display: none;
  }
  .faq-bottom {
    flex-direction: column-reverse;
    gap: 40px;
  }
}
</style>