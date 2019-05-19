<template>
  <div>
    <h3>My Skills :</h3>
    <ul class="mt-5 list-group list-group-flush">
      <li class="list-group-item" v-for="skill in mySkills" :key="skill">
        <i class="fas fa-angle-right"></i>
        <span class="ml-4`">{{skill}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mySkills: [
        "Create functional website pages from designs with experience in developing cross-platform and cross-browser",
        "Develop well-structured, maintainable CSS/CSS3, jQuery, JavaScript and HTML/HTML5 to build out large-scale, responsive websites",
        "have Experance with Vue.JS And Angular ",
        "Build reusable code and libraries for future use",
        "Collaborate with product, back-end developers and web designers",
        "Optimize application for maximum speed and scalability",
        "Familiarity with back-end development using Node.js "
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
ul li {
  font-size: 1.4rem;
  cursor: pointer;
  line-height: 3rem;
  margin: 0 20px;
  text-align: center;
  text-transform: capitalize;
}
</style>
