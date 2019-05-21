<template>
  <div>
    <h3>My Skills :</h3>
    <ul class="mt-5 list-group list-group-flush">
      <li class="list-group-item" v-for="skill in mySkills" :key="skill">
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
        "Own design, development, implementation, and maintenance of data intensive web applications from idea to production.",
        "Create functional website pages from designs with experience in developing cross-platform and cross-browser",
        "Develop well-structured, maintainable CSS/CSS3, jQuery, JavaScript and HTML/HTML5 to build out large-scale, responsive websites",
        "Develop efficient and quality source code (both client and server side) that delivers exceptional user experience",
        "Build reusable code and libraries for future use",
        "Develop and deploy new features for the core applications. Explore and experiment with new technologies and frameworks to support and enhance existing applications and software architecture",
        "Optimize application for maximum speed and scalability"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
ul li {
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  line-height: 3rem;
  margin: 0 20px;
  text-align: center;
  text-transform: capitalize;
  transition: ease-in-out 1s;
}
ul li:hover {
  transform: scale(1.1);
  color: #17a2b8;
}
</style>
