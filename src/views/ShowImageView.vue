<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import esignoFooterLogo from "@/assets/esignoFooterLogo.png"
import esignoLogo from "@/assets/esignoLogo.png"
import linkedInLogo from "@/assets/linkedInLogo.png"
import pageIcon from "@/assets/pageIcon.png"
@Component({
  components: { 
 }
})
export default class ShowImageView extends Vue {
  footerLogo = esignoFooterLogo;
  esignoLogo = esignoLogo;
  linkedInLogo = linkedInLogo;
  pageIcon = pageIcon;

}
</script>

<template>
  <img 
    :src="footerLogo" 
    alt="footerLogo"
  >
  <img 
    :src="esignoLogo" 
    alt="esignoLogo"
  >
  <img 
    :src="linkedInLogo" 
    alt="linkedInLogo"
  >
  <img 
    :src="pageIcon" 
    alt="pageIcon"
  >
</template>

<style scoped>

</style>
