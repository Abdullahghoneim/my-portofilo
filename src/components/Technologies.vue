<template>
  <div>
    <h4>Technologies I Use :</h4>
    <div class="row">
      <div
        class="col-lg-4 col-sm-6 mt-5 p-5 text-center"
        v-for="tec in technologes "
        :key="tec.name"
      >
        <div>
          <i v-html="tec.icon"></i>
          <h5 class="mt-4">{{tec.name}}</h5>
        </div>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      technologes: [
        {
          name: "HTML5",
          imgSrc: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
          icon: '<i class="fab fa-html5 fa-5x"></i>'
        },
        {
          name: "CSS3",
          icon: '<i class="fab fa-css3 fa-5x"></i>'
        },
        {
          name: "javaScript",
          icon: '<i class="fab fa-js fa-5x "></i>'
        },
        {
          name: "Node.js",
          icon: '<i class="fab fa-node fa-5x"></i>'
          
        },
        {
          name: "mongoDB",
          icon : '<i class="fas fa-database fa-5x"></i>'
        },
        {
          name: "ionic Framework",
          icon : '<i class="fas fa-mobile fa-5x"></i>'
        },
        {
          name: "SCSS",
          icon: '<i class="fab fa-sass fa-5x"></i>'
        },
        {
          name: "VUE.JS",
          icon: '<i class="fab fa-vuejs fa-5x"></i>'
        },
        {
          name: "Angular",
          icon: '<i class="fab fa-angular fa-5x"></i>'
        },
        {
          name: "git",
          icon: '<i class="fab fa-git fa-5x"></i>'
        },
        {
          name: "Trello",
          icon: '<i class="fab fa-trello fa-5x"></i>'
        }
      ]
    };
  }
};
</script>

<style scoped>
h5 {
  line-height: 3rem;
}
</style>
