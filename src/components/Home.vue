<template>
  <div>
    <h3>
      Abdullah Mohammed Ghoneim
      <img
        class="img-fluid greating"
        src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/apple-waving-hand-879117f83d1834f4d34a708c196e2aa997c3c4f22c1194c62d6f996c98e06dd4.png"
      >
    </h3>
    <p class="text-muted mt-3">Front-End Web Developer</p>
    <p class="text-muted mt-4">
      <i class="fas fa-map-marker-alt mr-2"></i>
      Egypt , Gharbia Governorate
    </p>
    <p class="text-muted mt-4">
      <i class="fas fa-phone mr-2"></i>
      201060649873
    </p>
    <div class="mt-5">
      <h5>Summary :</h5>
      <p
        class="summary text-muted mt-4"
      >Versatile Full-stack Developer with 2+ years of experience developing, and managing complex e-commerce sites and internal frameworks. Specializes in Angular 4+ and ionic For Front-End And Node.js For Back End And mongoDB As well</p>
    </div>
    <div class="my-contant text-center">
      <img
        class="img-fluid rounded-circle w-25 mt-5 img-thumbnail"
        src="../assets/49483031_2167067766892685_6418798236978380800_n.jpg"
        alt="my photo"
      >
      <br>
      <div class="socile-media mt-5">
        <a href="https://github.com/Abdullahghoneim" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/abdullah-ghoneim-886a1b8a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BohARNd9xQoCvnw7skJlPYw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-identity_welcome_message"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a target="_blank" href="https://www.behance.net/abdullahghf355">
          <i class="fab fa-behance-square fa-2x"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/abdullahghoneim/">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
      </div>
      <p class="mt-4">
        &copy;
        <span>
          2018 - 2019
          abdullahGhoneim
        </span>
      </p>
      <q>
        <a target="_blank" href="https://github.com/Abdullahghoneim/my-portofilo">Get source Code</a>
      </q>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 2.3rem;
}

p {
  font-size: 1.2rem;
}
.summary {
  text-transform: capitalize;
  line-height: 2.2rem;
}
.greating {
  width: 55px;
  margin-left: 1.2rem;
}

.socile-media {
  i {
    color: brown;
    margin: 0 10px;
    &:hover {
      color: #000;
    }
  }
}
@media (max-width: 700px) {
  img {
    display: none;
  }
}
</style>
