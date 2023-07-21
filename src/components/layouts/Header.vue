<template>
    <div class="flex w-100 pb-3 bg-[#F5F7FB]">
      <div class="flex">
          <form action="" class="flex absolute ml-0">
              <i class="fa fa-search absolute mt-3 ml-3"></i>
              <input type="search" class="pl-8 p-2 rounded-md w-24 sm:w-96" placeholder="recherchez...">
          </form>

          <div class="flex absolute right-5">
              <div class="bg-white mr-2 rounded-md p-2 ">
                    <span class="notification-icon m-2">
                      <i class="fa fa-bell"></i>
                    </span>
                    <span class="parameter-icon m-2">
                      <i class="fa fa-envelope"></i>
                    </span>
              </div>
              
              <div class="flex font-bold ">
                <span class="bg-white rounded-md p-2 pl-2 pr-2 "> Philippe Tsongo </span>
                <img src="../../../public/images/profiles/phil.jpeg" class="rounded-full ml-2 w-9 h-9" alt="Philippe Tsongo THKV">
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  components: {}
 
};
</script>



<style>
.header h1 {
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bolder;
}

.search-icon-table {
  position: absolute;
  margin: 5px 0px 0px -25px;
}

@media (max-width: 900px) {
  .header form {
    display: none;
  }
}
</style>