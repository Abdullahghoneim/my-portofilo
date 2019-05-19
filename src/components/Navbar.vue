<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <router-link tag="li" to="/" class="nav-item" class-active="active" exact>
          <a class="nav-link" href="#">Home</a>
        </router-link>
        <router-link tag="li" to="/technologies" class="nav-item" class-active="active" exact>
          <a
            class="nav-link"
            href="#"
            data-container="body"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="bottom"
            data-content="Most Technologies I Use"
          >Technologies</a>
        </router-link>
        <router-link tag="li" to="/myProjects" class="nav-item" class-active="active" exact>
          <a class="nav-link" href="#">Previous Projects</a>
        </router-link>
        <router-link tag="li" to="/mySkills" class="nav-item" class-active="active" exact>
          <a class="nav-link" href="#">My Skills</a>
        </router-link>
        <router-link tag="li" to="/connectMe" class="nav-item" class-active="active" exact>
          <a class="nav-link" href="#">Connect to me</a>
        </router-link>
        <button class="btn btn-outline-info btn-sm download">Download My CV</button>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  ul li a {
    font-size: 1.1rem;
    &:hover {
      border-bottom: black 1px solid;
    }
  }
}
</style>
