<template>
  <div>
    <h3>Most of Proud Projects</h3>
    <div class="mt-5 project">
      <h5 class="font-weight-bold">Ocassion Today</h5>
      <p class="mt-3">
        Occasion Today is mobo app to manage supermarket owners to add occasion on those products and sell it
        and for customers they can looking for occasion today in certain area
      </p>
      <router-link to="/project/occassionToday">
        <a href class="btn btn-link font-weight-bold">More Info</a>
      </router-link>
    </div>
    <div class="mt-5 project">
      <h5 class="font-weight-bold">ZoomZoom</h5>
      <p>zoomZoom is E-Commerce mobile app to sell products with defiant category you can buy products and add products to your cart developed with ionic framework For Fron-End and Nodejs & mongo for restful api</p>
      <router-link to="/project/zoomZoom">
        <a href class="btn btn-link font-weight-bold">More Info</a>
      </router-link>
    </div>
    <div class="mt-5 project">
      <h5 class="font-weight-bold">Arab Media Union</h5>
      <p>Arab media union is a website belong to media union to show last news and blogs and Opinion poll</p>
      <div>
        <a href target="blank" class="btn btn-link font-weight-bold">Go To Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;
  p {
    line-height: 2rem;
    font-size: 1.1rem;
  }
}
</style>

