<template>
  <div>
    <h2>ZoomZoom</h2>
    <p class="mt-4">Title : Full stack Developer</p>
    <div class="mt-4">
      <h4>Description :</h4>
      <p
        class="text-muted mt-3"
      >Occasion Today is mobo app to manage supermarket owners to add occasion on those products and sell it and for customers they can looking for occasion today in certain area</p>
    </div>
    <div class="mt-3">
      <h4>Technologies Used in this Project</h4>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="btn btn-info text-center"
        data-toggle="modal"
        data-target="#exampleModal"
      >Launch app demo</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body" style="height:90vh">
            <embed
              class="w-100 h-100"
              src="https://zoomzoom-14861.firebaseapp.com/home/lastProducts"
              type
            >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

